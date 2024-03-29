/**
 * @preserve version: 1.1.228-main
 */
(function() {
    function b(d, e, g) {
        function a(j, i) {
            if (!e[j]) {
                if (!d[j]) {
                    var f = "function" == typeof require && require;
                    if (!i && f) return f(j, !0);
                    if (h) return h(j, !0);
                    var c = new Error("Cannot find module '" + j + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var k = e[j] = {
                    exports: {}
                };
                d[j][0].call(k.exports, function(b) {
                    var c = d[j][1][b];
                    return a(c || b)
                }, k, k.exports, b, d, e, g)
            }
            return e[j].exports
        }
        for (var h = "function" == typeof require && require, c = 0; c < g.length; c++) a(g[c]);
        return a
    }
    return b
})()({
    1: [function(a, b) {
        function c() {
            return b.exports = c = Object.assign || function(a) {
                for (var b, c = 1; c < arguments.length; c++)
                    for (var d in b = arguments[c], b) Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
                return a
            }, c.apply(this, arguments)
        }
        b.exports = c
    }, {}],
    2: [function(a, b) {
        function c(a) {
            "@babel/helpers - typeof";
            return b.exports = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? c = function(a) {
                return typeof a
            } : c = function(a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            }, c(a)
        }
        b.exports = c
    }, {}],
    3: [function(a) {
        var b = {},
            c = function() {
                return !b.logger ? {
                    logError: function(a, b) {
                        for (var c = [], d = 2; d < arguments.length; d++) c[d - 2] = arguments[d];
                        console.error(a, b, c)
                    }
                } : b.logger
            };
        (function() {
            try {
                b.logger = a("./modules/LoggingService"), b.analyticsService = a("./modules/AnalyticsService"), b.eventCalculatorService = a("./modules/features/EventCalculatorService");
                var d = window;
                d.analyticsService = b.analyticsService, d.analyticsTealiumServices = d.analyticsTealiumServices || {}, d.analyticsTealiumServices.calculateEvents = b.eventCalculatorService.calculateEvents
            } catch (a) {
                c().logError("Could not create analytics library", a)
            }
            try {
                b.analyticsVisitorService = a("./modules/features/AnalyticsVisitorService"), b.analyticsVisitorService.setVisitorId()
            } catch (a) {
                c().logError("Could load visitor id service", a)
            }
        })()
    }, {
        "./modules/AnalyticsService": 4,
        "./modules/LoggingService": 7,
        "./modules/features/AnalyticsVisitorService": 13,
        "./modules/features/EventCalculatorService": 14
    }],
    4: [function(a, b, c) {
        "use strict";
        c.__esModule = !0, c.sendLinkEvent = c.sendViewEvent = void 0;
        var d = a("./events/ViewEvent"),
            e = a("./events/LinkEvent"),
            f = a("./EventDispatchService"),
            g = a("./LoggingService"),
            h = function(a) {
                try {
                    a()
                } catch (a) {
                    g.logError(a.name, a)
                }
            };
        c.sendViewEvent = function(a, b) {
            h(function() {
                var c = new d.ViewEvent(a, b);
                f.sendEvent(c)
            })
        };
        c.sendLinkEvent = function(a, b) {
            h(function() {
                var c = new e.LinkEvent(a, b);
                f.sendEvent(c)
            })
        }
    }, {
        "./EventDispatchService": 6,
        "./LoggingService": 7,
        "./events/LinkEvent": 10,
        "./events/ViewEvent": 11
    }],
    5: [function(a, b, c) {
        "use strict";
        c.__esModule = !0, c.setValue = c.getValue = void 0;
        var d = a("./features/HostnameService");
        c.getValue = function(a) {
            var b = ("; " + document.cookie).split("; " + a + "=");
            return 2 === b.length ? b.pop().split(";").shift() : void 0
        };
        c.setValue = function(a, b, c) {
            var e = d.getBaseDomain(),
                f = "expires=" + c.toUTCString(),
                g = e ? "domain=" + e : "";
            document.cookie = a + "=" + b + ";" + f + ";" + "path=/" + ";" + g
        }
    }, {
        "./features/HostnameService": 15
    }],
    6: [function(a, b, c) {
        "use strict";
        var d = a("@babel/runtime/helpers/typeof");
        c.__esModule = !0, c.sendEvent = void 0;
        var e = a("./tealium-services/TealiumTrackingService"),
            f = a("./LoggingService"),
            g = a("./events/AnalyticsEvent"),
            h = [],
            i = null,
            j = function(a) {
                try {
                    f.logDebug("attempting to send event", a), e.track(a.getMethodType(), a.getAnalytics())
                } catch (a) {
                    f.logError("cannot send tealium event", {
                        e: a.toString(),
                        stack: a.stack
                    })
                }
            },
            k = function() {
                h = [], clearInterval(i), i = null
            },
            l = function() {
                i = setInterval(function() {
                    if (!e.isActive()) return f.logWarning("Tealium still not available", h.length + " events in Queue", h);
                    for (var a, b = 0, c = h; b < c.length; b++) a = c[b], j(a);
                    k()
                }, 25)
            },
            m = function(a) {
                h.push(a);
                var b = !!i;
                b || l()
            },
            n = function(a) {
                return !!(a instanceof g.AnalyticsEvent) || (f.logError("analytics event type is invalid, recieved " + d(a)), !1)
            };
        c.sendEvent = function(a) {
            return n(a) ? e.isActive() ? j(a) : void m(a) : null
        }
    }, {
        "./LoggingService": 7,
        "./events/AnalyticsEvent": 8,
        "./tealium-services/TealiumTrackingService": 18,
        "@babel/runtime/helpers/typeof": 2
    }],
    7: [function(a, b, c) {
        "use strict";

        function d(a) {
            for (var b = [], c = Object.keys(a), d = 0; d < c.length; d++) b.push([c[d], a[c[d]]]);
            return b
        }
        var e = a("@babel/runtime/helpers/typeof");
        c.__esModule = !0, c.logError = c.logWarning = c.logInfo = c.logDebug = void 0;
        var f = a("./tealium-services/TealiumLoggingService"),
            g = a("./features/AnalyticsVersionNumberService"),
            h = function(a) {
                try {
                    return window.utag_data.analytics[a]
                } catch (a) {
                    return "not available"
                }
            },
            i = function(a) {
                return "object" == e(a) ? JSON.stringify(a) : new String(a)
            };
        c.logDebug = function(a) {
            for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
            console.debug(a, b)
        };
        c.logInfo = function(a) {
            for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
            console.log(a, b)
        };
        c.logWarning = function(a) {
            for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
            console.warn(a, b)
        };
        c.logError = function(a, b) {
            for (var c = [], e = 2; e < arguments.length; e++) c[e - 2] = arguments[e];
            console.error(a, b, c), b = b || {};
            var j = JSON.stringify(c).match(/.{1,1000}/g),
                k = {
                    "error.title": a,
                    "error.name": b.name,
                    "error.stack": b.stack,
                    "error.message": b.message,
                    "log.details": j
                };
            console.log(k);
            for (var l = 0, m = d(b); l < m.length; l++) {
                var n = m[l],
                    o = n[0],
                    p = n[1];
                k["error." + o] = i(p)
            }
            k["analytics.pageName"] = h("pageName"), k.currentUrl = window.location.href, k["analytics.libraryVersion"] = g.AnalyticsVersionNumber, f.sendTealiumLogEvent(k, "stepstone-uk", "analytics-error")
        }
    }, {
        "./features/AnalyticsVersionNumberService": 12,
        "./tealium-services/TealiumLoggingService": 17,
        "@babel/runtime/helpers/typeof": 2
    }],
    8: [function(a, b, c) {
        "use strict";
        var d = a("@babel/runtime/helpers/extends"),
            e = this && this.__assign || function() {
                return e = Object.assign || function(a) {
                    for (var b, c = 1, d = arguments.length; c < d; c++)
                        for (var e in b = arguments[c], b) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
                    return a
                }, e.apply(this, arguments)
            };
        c.__esModule = !0, c.AnalyticsEvent = void 0;
        var f = a("../tealium-services/AnalyticsDataLayer"),
            g = a("../features/AnalyticsVisitorService"),
            h = a("../features/AnalyticsVersionNumberService"),
            i = function(a) {
                return "[object Object]" === Object.prototype.toString.call(a)
            },
            j = function(a) {
                return "legacy" === a.toLowerCase()
            },
            k = function(a) {
                return "pii" === a.toLowerCase()
            },
            l = function(a) {
                return j(a) || k(a)
            },
            m = function a(b, c) {
                return void 0 === c && (c = ""), Object.keys(b).reduce(function(e, f) {
                    var g = c.length ? c + "." : "";
                    return (j(f) || j(c)) && (g = ""), i(b[f]) && l(f) ? d(e, a(b[f], g + f)) : e[g + f] = b[f], e
                }, {})
            },
            n = function() {
                return function(a, b, c) {
                    var j = this;
                    if (this.analytics = {}, this.getMethodType = function() {
                            return "" + j.eventType
                        }, this.getSanitisedCategory = function(a) {
                            return a && i(a) ? (Object.keys(a).forEach(function(b) {
                                b.match(/^analytics\./i) && delete a[b]
                            }), a) : {}
                        }, this.flattenAnalytics = function(a) {
                            a = e({}, a);
                            var b = {};
                            Object.keys(a).forEach(function(c) {
                                l(c) || (b[c] = a[c])
                            });
                            var c = e(e({}, b), {
                                pii: j.getSanitisedCategory(a.pii),
                                legacy: j.getSanitisedCategory(a.legacy)
                            });
                            return m(c, "analytics")
                        }, this.buildAnalytics = function() {
                            return d({}, e(e(e({}, j.flattenAnalytics(f.getSharedAnalytics())), j.flattenAnalytics(j.eventAnalytics)), {
                                "analytics.eventName": j.eventName,
                                "analytics.visitorId": g.getVisitorId(),
                                "analytics.fallbackVisitorId": g.getFallbackVisitorId(),
                                "analytics.libraryVersion": h.AnalyticsVersionNumber,
                                analytics: null
                            }))
                        }, this.getAnalytics = function() {
                            return j.analytics
                        }, !a || "string" != typeof a || 1 > a.length) throw Error("event name must be defined and not empty");
                    if (!b || 1 > b.length) throw Error("method type must be defined and not empty");
                    if (!c || !i(c)) throw Error("event analytics must be defined");
                    this.eventName = a, this.eventType = b, this.eventAnalytics = c, this.analytics = this.buildAnalytics()
                }
            }();
        c.AnalyticsEvent = n
    }, {
        "../features/AnalyticsVersionNumberService": 12,
        "../features/AnalyticsVisitorService": 13,
        "../tealium-services/AnalyticsDataLayer": 16,
        "@babel/runtime/helpers/extends": 1
    }],
    9: [function(a, b, c) {
        "use strict";
        c.__esModule = !0, c.view = c.link = void 0;
        c.link = "link";
        c.view = "view"
    }, {}],
    10: [function(a, b, c) {
        "use strict";
        var d = this && this.__extends || function() {
            var a = function(c, d) {
                return a = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(a, c) {
                    a.__proto__ = c
                } || function(a, c) {
                    for (var b in c) Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }, a(c, d)
            };
            return function(c, d) {
                function b() {
                    this.constructor = c
                }
                a(c, d), c.prototype = null === d ? Object.create(d) : (b.prototype = d.prototype, new b)
            }
        }();
        c.__esModule = !0, c.LinkEvent = void 0;
        var e = a("./AnalyticsEvent"),
            f = a("./EventType"),
            g = function(a) {
                function b(b, c) {
                    return a.call(this, b, f.link, c) || this
                }
                return d(b, a), b
            }(e.AnalyticsEvent);
        c.LinkEvent = g
    }, {
        "./AnalyticsEvent": 8,
        "./EventType": 9
    }],
    11: [function(a, b, c) {
        "use strict";
        var d = this && this.__extends || function() {
            var a = function(c, d) {
                return a = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(a, c) {
                    a.__proto__ = c
                } || function(a, c) {
                    for (var b in c) Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }, a(c, d)
            };
            return function(c, d) {
                function b() {
                    this.constructor = c
                }
                a(c, d), c.prototype = null === d ? Object.create(d) : (b.prototype = d.prototype, new b)
            }
        }();
        c.__esModule = !0, c.ViewEvent = void 0;
        var e = a("./AnalyticsEvent"),
            f = a("./EventType"),
            g = function(a) {
                function b(b, c) {
                    return a.call(this, b, f.view, c) || this
                }
                return d(b, a), b
            }(e.AnalyticsEvent);
        c.ViewEvent = g
    }, {
        "./AnalyticsEvent": 8,
        "./EventType": 9
    }],
    12: [function(a, b, c) {
        "use strict";
        c.__esModule = !0, c.AnalyticsVersionNumber = void 0;
        c.AnalyticsVersionNumber = "1.1.228-main";
    }, {}],
    13: [function(a, b, c) {
        "use strict";
        c.__esModule = !0, c.setVisitorId = c.getFallbackVisitorId = c.getVisitorId = void 0;
        var d = a("../LoggingService"),
            e = a("../Cookie"),
            f = /[a-fA-Z0-9]{16}-[a-fA-Z0-9]{16}/,
            g = "s_vi",
            h = "sc_vid",
            i = "s_fid",
            j = ["jobsite", "justengineers", "cityjobs", "emedcareers"],
            k = window,
            l = function() {
                return -1 < k.location.origin.indexOf("stepstone")
            },
            m = function() {
                for (var a, b = 0, c = j; b < c.length; b++)
                    if (a = c[b], -1 < k.location.origin.indexOf(a)) return !0;
                return !1
            },
            n = function() {
                return e.getValue(i)
            },
            o = [function() {
                return !k.s ? void 0 : k.s.visitorID
            }, function() {
                return e.getValue(h)
            }, function() {
                var a = e.getValue(g);
                if (!!a) {
                    if (a.match(f)) return a.match(f)[0];
                    d.logError("Unexpected format for AID: \"" + a + "\"")
                }
                return a
            }, n],
            p = function() {
                for (var a = 0, b = o; a < b.length; a++) {
                    var c = b[a],
                        d = c();
                    if (!!d) return d
                }
            };
        c.getVisitorId = p;
        var q = function(c) {
                for (var d = "", e = ["a", "b", "c", "d", "e", "f", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], b = 0; b < c; b++) d += e[Math.round(Math.random() * (e.length - 1))];
                return d
            },
            r = function(a, b, c) {
                var d = new Date;
                d.setTime(d.getTime() + 1e3 * (60 * (60 * (24 * (365 * c))))), e.setValue(a, b, d)
            },
            s = function() {
                var a = q(16) + "-" + q(16);
                r(g, "[CS]v1|" + a + "[CE]", 2), r(i, a, 2)
            },
            t = function() {
                var a = q(32);
                r(h, q(32), 5);
                var b = a.slice(0, 16) + "-" + a.slice(16);
                r(i, b, 5)
            };
        c.getFallbackVisitorId = n;
        c.setVisitorId = function() {
            null != p() || m() || (l() ? s() : t())
        }
    }, {
        "../Cookie": 5,
        "../LoggingService": 7
    }],
    14: [function(a, b, c) {
        "use strict";

        function d(a) {
            for (var b = [], c = Object.keys(a), d = 0; d < c.length; d++) b.push([c[d], a[c[d]]]);
            return b
        }
        c.__esModule = !0, c.calculateEvents = void 0;
        var e = a("../LoggingService"),
            f = Object.freeze({
                harmonised: {
                    calculatedEvents: "analytics.calculatedEvents",
                    analyticsEvents: "analytics.events"
                },
                legacy: {
                    calculatedEvents: "analytics.legacyCalculatedEvents",
                    analyticsEvents: "events"
                }
            }),
            g = {},
            h = function(b) {
                return b.sort().filter(function(a, b, c) {
                    return !b || a != c[b - 1]
                })
            },
            i = function(a, b) {
                var c = [],
                    d = [];
                a.forEach(function(a) {
                    var e = b[a] || void 0;
                    !e ? d.push(a) : e.forEach(function(a) {
                        return c.push(a)
                    })
                }), 0 < d.length && e.logError("Could not find event mapping for the following alias'", null, d);
                return {
                    events: c,
                    missingEvents: d
                }
            },
            j = function(a, b) {
                if (!!g[b]) return g[b];
                a || (e.logError("configuration for event enrichment unavailable", {}, "config: " + a, "config type: " + b), a = {});
                var c = function(a) {
                    a = a || {};
                    for (var b = {}, c = function(a, c) {
                            (c || []).forEach(function(c) {
                                return b["" + c] = a
                            })
                        }, e = 0, f = d(a); e < f.length; e++) {
                        var g = f[e],
                            h = g[0],
                            i = g[1];
                        c(h, i)
                    }
                    return b
                };
                return g[b] = {
                    eventKeys: a.eventKeys || {},
                    eventSerials: c(a.eventSerials),
                    eventValues: c(a.eventValues)
                }
            },
            k = function(a, b, c, d) {
                var e = a.events,
                    f = a.missingEvents,
                    g = e.map(function(a) {
                        var e = function(b, c) {
                            var e = d[c[a]];
                            return !e ? "" : "" + b + e
                        };
                        return "event" + a + e("=", b) + e(":", c)
                    });
                return h(g)
            },
            l = function(a, b, c, d) {
                try {
                    var f = j(c, d.analyticsEvents),
                        g = b[d.analyticsEvents] || [],
                        h = i(g, f.eventKeys);
                    b[d.calculatedEvents] = k(h, f.eventValues, f.eventSerials, b)
                } catch (b) {
                    e.logError("failed to calculate events", b, {
                        eventType: a,
                        enrichmentConfig: c
                    })
                }
            },
            m = function(a) {
                return 0 === Object.keys(a).length
            };
        c.calculateEvents = function(a, b) {
            if (!a || !b || m(b)) return void e.logError("could not calculate events, event type or utag_data not defined", {}, {
                eventType: a,
                utag_data: b
            });
            var c = b["analyticsConfig.harmonised"],
                d = b["analyticsConfig.legacy"];
            l(a, b, c, f.harmonised), !d || l(a, b, d, f.legacy), delete b["analyticsConfig.harmonised"], delete b["analyticsConfig.legacy"]
        }
    }, {
        "../LoggingService": 7
    }],
    15: [function(a, b, c) {
        "use strict";
        c.__esModule = !0, c.getBaseDomain = void 0;
        c.getBaseDomain = function() {
            var a = window.location.hostname,
                b = null,
                c = a.lastIndexOf("."),
                d = window.document.domain.split(".").length - 1;
            if (d = 2 < d ? d : 2, !/^[0-9.]+$/.test(a))
                for (; 0 <= c && 1 < d;) c = a.lastIndexOf(".", c - 1), d--, b = 0 < c ? a.substring(c) : a;
            return b
        }
    }, {}],
    16: [function(a, b, c) {
        "use strict";
        var d = this && this.__assign || function() {
            return d = Object.assign || function(a) {
                for (var b, c = 1, d = arguments.length; c < d; c++)
                    for (var e in b = arguments[c], b) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
                return a
            }, d.apply(this, arguments)
        };
        c.__esModule = !0, c.getSharedAnalytics = void 0;
        var e = a("../LoggingService"),
            f = function(a) {
                return "[object Object]" === Object.prototype.toString.call(a)
            },
            g = function() {
                return !window.utag_data || !window.utag_data.analytics || !f(window.utag_data.analytics) ? (e.logError("Cannot get page analytics", {}, window.utag_data), {}) : d({}, window.utag_data.analytics)
            };
        c.getSharedAnalytics = g
    }, {
        "../LoggingService": 7
    }],
    17: [function(a, b, c) {
        "use strict";
        c.__esModule = !0, c.sendTealiumLogEvent = void 0;
        var d = function(a) {
                var b = window.utag || {},
                    c = b.data || {};
                return c[a] || ""
            },
            e = function(a, b, c) {
                var e = {
                    data: {},
                    tealium_account: "stepstone",
                    tealium_profile: b,
                    tealium_event: c,
                    tealium_visitor_id: d("cp.sc_vid") || d("ut.visitor_id"),
                    "ut.env": d("ut.env")
                };
                for (var f in void 0 !== d("cp.trace_id") && (e.tealium_trace_id = d("cp.trace_id")), a) e[f] = a[f];
                return e
            },
            f = function(a) {
                navigator.sendBeacon("https://collect.tealiumiq.com/event", a)
            },
            g = function(a, b) {
                var c = new XMLHttpRequest;
                c.open("POST", "https://collect.tealiumiq.com/event");
                c.addEventListener("load", function() {
                    return console.debug("Tealium event: (" + b + ") transfer successful.")
                }), c.addEventListener("error", function() {
                    return console.error("An error occurred while sending tealium event (" + b + ").")
                }), c.addEventListener("abort", function() {
                    return console.warn("The tealium event (" + b + ") transfer has been cancelled ")
                }), c.send(a)
            },
            h = function(a, b) {
                return !navigator.sendBeacon ? g(a, b) : f(a, b)
            };
        c.sendTealiumLogEvent = function(a, b, c) {
            var d = e(a, b, c),
                f = JSON.stringify(d);
            h(f, c)
        }
    }, {}],
    18: [function(a, b, c) {
        "use strict";
        c.__esModule = !0, c.track = c.isActive = void 0;
        var d = a("../LoggingService"),
            e = a("../events/EventType"),
            f = function() {
                var a = !!window.utag && !!window.utag.track;
                if (!a) return !1;
                var b = "function" == typeof window.utag.track;
                return b
            };
        c.isActive = f;
        var g = function(a) {
                for (var b, c = e, d = 0, f = Object.keys(c); d < f.length; d++)
                    if (b = f[d], a === c[b]) return !0;
                return !1
            },
            h = function(a) {
                return "[object Object]" === Object.prototype.toString.call(a)
            };
        c.track = function(a, b) {
            var c = function() {
                return ["type:" + a, "payload:" + b]
            };
            if (!f()) return d.logError("Failed to send tracking to tealium, tracking services unavailable", {}, c());
            if (!g(a)) return d.logError("Failed to send tracking to tealium, event type invalid", {}, c());
            if (!h(b)) return d.logError("Failed to send tracking to tealium, event payload invalid", {}, c());
            try {
                window.utag.track(a, b)
            } catch (a) {
                d.logError("Failed to send tracking to tealium,\xB7tracking\xB7error", a)
            }
        }
    }, {
        "../LoggingService": 7,
        "../events/EventType": 9
    }]
}, {}, [3]);
//# sourceMappingURL=analytics-library.js.map