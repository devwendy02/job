var exports = {};
self.importScripts('bundles/serviceWorkerModules.js');

const logger = new exports.Logger();
const constants = exports.constants;
const helpers = exports.helpers;
const handlers = exports.handlers;

// Step 1 - Install Service Worker and prefetch static assets
self.addEventListener('install', (e) => {
    try {
        e.waitUntil(
            // Cache static assets
            caches.open(constants.CACHE_VERSION)
            .then((cache) => {
                return cache.addAll([
                    constants.FALLBACK_IMAGE
                ]);
            })
            // Activate SW as soon as it is available
            .then(self.skipWaiting())
        );
    } catch (ex) {
        logger.exception('SW: Unable to install service worker', ex);
    }
});

// Step 2 - Activate the Service Worker, cleaning up old caches
self.addEventListener('activate', (e) => {
    const currentCaches = [constants.CACHE_VERSION];
    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
        })
        .then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }));
        })
        // Claim any clients immediately, so that the page will be under SW control without reloading.
        .then(() => self.clients.claim())
        .then(() => {
            // After the activation and claiming is complete, send a message to each of the controlled
            // pages letting it know that it's active.
            // This will trigger navigator.serviceWorker.onmessage in each client.
            return self.clients.matchAll().then(function(clients) {
                return Promise.all(clients.map(function(client) {
                    return client.postMessage({
                        'serviceWorker': {
                            'state': 'active'
                        }
                    });
                }));
            });
        })
    );
});


// ****** INTERCEPT REQUESTS ******

// Image fallback
self.addEventListener('fetch', (e) => {
    try {
        if (helpers.isImageRequest(e.request) &&
            constants.COMPANY_LOGO_URL_REGEX.test(e.request.url)) {
            e.respondWith(handlers.imageFallbackHandler(e, caches));
        }
    } catch (ex) {
        logger.exception('SW: Unable to handle fallback image', ex);
    }
});

// When fetching job detail pages and respective assets
self.addEventListener('fetch', (e) => {
    try {
        if (helpers.isRequestCacheable(e.request)) {
            e.respondWith(handlers.cacheableRequestHandler(e, caches, logger));
        }
    } catch (ex) {
        logger.exception('SW: Unable to handle request', ex);
    }
});

// ****** INTERCEPT CLIENT MESSAGES ******
// Catches messages from Client (page application)
self.addEventListener('message', (e) => {
    try {
        handlers.messageHandler(e, caches, logger, self);
    } catch (ex) {
        logger.exception('SW: Unable to handle message', ex);
    }
});