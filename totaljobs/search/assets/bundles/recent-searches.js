! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.RecentSearches = t() : (e.TotalJobsGroup = e.TotalJobsGroup || {}, e.TotalJobsGroup.RecentSearches = t())
}(window, function() {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) n.d(r, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 7)
    }([function(e, t) {
        var n = n || {};
        n.utilities = n.utilities || {}, n.utilities.validateEmailAddressPattern = function(e) {
            return new RegExp("^(([A-Za-z_0-9-']+)|([A-Za-z_0-9-']+[.]([A-Za-z_0-9-']+[.]){0,}[A-Za-z_0-9-']{1,}))[@]((([A-Za-z0-9-']+)[.]){1,})(([A-Za-z0-9']+))$").test(e)
        }, n.utilities.emailValidationType = {
            EmptyEmail: 1,
            InvalidEmail: 2,
            Valid: 3
        }, n.utilities.validateEmailAddress = function(e) {
            return e ? this.validateEmailAddressPattern(e) ? this.emailValidationType.Valid : this.emailValidationType.InvalidEmail : this.emailValidationType.EmptyEmail
        }, n.utilities.getPath = function() {
            return window.location.pathname || ""
        }, n.utilities.getPathWithQueryString = function() {
            var e = this.getPath(),
                t = window.location.search;
            return null != t && (e += t), e
        }, n.utilities.showLoadingModal = function() {
            $(".loading-overlay").show()
        }, n.utilities.hideLoadingModal = function() {
            $(".loading-overlay").hide()
        }, n.utilities.getQueryString = function() {
            return this.queryStringToObject(window.location.search.substr(1))
        }, n.utilities.queryStringToObject = function(e) {
            if (!(e || "").trim()) return {};
            var t = e.split("&"),
                n = {};
            if (t)
                for (var r = 0; r < t.length; ++r) {
                    var o = t[r].split("=", 2);
                    1 === o.length ? n[o[0]] = "" : n[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " "))
                }
            return n
        }, n.utilities.reloadPage = function() {
            window.location.reload()
        }, e.exports = n.utilities
    }, function(e, t) {
        var n = n || {};
        n.cookies = n.cookies || {},
            function() {
                n.cookies.getItem = function(e) {
                    return function(e) {
                        for (var t = decodeURIComponent(document.cookie).split(";"), n = e + "=", r = 0; r < t.length; r++) {
                            for (var o = t[r];
                                " " === o.charAt(0);) o = o.substring(1);
                            if (0 === o.indexOf(n)) return o.substring(n.length, o.length)
                        }
                        return
                    }(e)
                }, n.cookies.setItem = function(e, t, n, r) {
                    var o = "";
                    if (0 !== r) {
                        r = r || 365;
                        var i = new Date;
                        i.setTime(+i + 864e5 * r), o = "; expires=" + i.toGMTString()
                    }
                    var a = e + "=" + (n ? t : escape(t)) + o + "; path=/";
                    document.cookie = a
                }
            }(), e.exports = n.cookies
    }, function(e, t, n) {
        var r = n(3);
        "string" == typeof r && (r = [
            [e.i, r, ""]
        ]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(5)(r, o);
        r.locals && (e.exports = r.locals)
    }, function(e, t, n) {
        (t = e.exports = n(4)(!1)).push([e.i, 'ul._2yY_X2ZJuNqjhgW4C_HATE {\n  top: 40px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\nul._2yY_X2ZJuNqjhgW4C_HATE li {\n  border-bottom: 1px solid #f7f7f7;\n}\nul._2yY_X2ZJuNqjhgW4C_HATE li a {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  outline: none;\n  line-height: 40px;\n  padding-left: 36px;\n  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2217%22%20height%3D%2217%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M19.848%2018.499a.512.512%200%200%200%200-.727l-3.806-3.774a.745.745%200%200%201-.128-.82s1.415-2.703%201.415-4.585C17.33%203.854%2013.442%200%208.665%200S0%203.854%200%208.592c0%204.737%203.887%208.591%208.665%208.591%201.811%200%204.42-1.273%204.42-1.273a.783.783%200%200%201%20.833.137l3.835%203.802c.202.2.532.2.733%200l1.362-1.35zM2.541%208.592c0-3.348%202.748-6.072%206.124-6.072%203.377%200%206.124%202.724%206.124%206.072s-2.747%206.072-6.124%206.072-6.124-2.724-6.124-6.072z%22%20fill%3D%22%23d9d9d9%22%2F%3E%3C%2Fsvg%3E");\n  background-repeat: no-repeat;\n  background-position: 12px 15px;\n}\nul._2yY_X2ZJuNqjhgW4C_HATE li,\nul._2yY_X2ZJuNqjhgW4C_HATE li:first-child,\nul._2yY_X2ZJuNqjhgW4C_HATE li:last-child {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n', ""]), t.locals = {
            "recent-search-dropdown": "_2yY_X2ZJuNqjhgW4C_HATE",
            recentSearchDropdown: "_2yY_X2ZJuNqjhgW4C_HATE"
        }
    }, function(e, t) {
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var n = function(e, t) {
                        var n = e[1] || "",
                            r = e[3];
                        if (!r) return n;
                        if (t && "function" == typeof btoa) {
                            var o = function(e) {
                                    return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                                }(r),
                                i = r.sources.map(function(e) {
                                    return "/*# sourceURL=" + r.sourceRoot + e + " */"
                                });
                            return [n].concat(i).concat([o]).join("\n")
                        }
                        return [n].join("\n")
                    }(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n
                }).join("")
            }, t.i = function(e, n) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0)
                }
                for (o = 0; o < e.length; o++) {
                    var a = e[o];
                    "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
                }
            }, t
        }
    }, function(e, t, n) {
        var r = {},
            o = function(e) {
                var t;
                return function() {
                    return void 0 === t && (t = e.apply(this, arguments)), t
                }
            }(function() {
                return window && document && document.all && !window.atob
            }),
            i = function(e) {
                var t = {};
                return function(e, n) {
                    if ("function" == typeof e) return e();
                    if (void 0 === t[e]) {
                        var r = function(e, t) {
                            return t ? t.querySelector(e) : document.querySelector(e)
                        }.call(this, e, n);
                        if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                            r = r.contentDocument.head
                        } catch (e) {
                            r = null
                        }
                        t[e] = r
                    }
                    return t[e]
                }
            }(),
            a = null,
            u = 0,
            s = [],
            c = n(6);

        function l(e, t) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n],
                    i = r[o.id];
                if (i) {
                    i.refs++;
                    for (var a = 0; a < i.parts.length; a++) i.parts[a](o.parts[a]);
                    for (; a < o.parts.length; a++) i.parts.push(y(o.parts[a], t))
                } else {
                    var u = [];
                    for (a = 0; a < o.parts.length; a++) u.push(y(o.parts[a], t));
                    r[o.id] = {
                        id: o.id,
                        refs: 1,
                        parts: u
                    }
                }
            }
        }

        function f(e, t) {
            for (var n = [], r = {}, o = 0; o < e.length; o++) {
                var i = e[o],
                    a = t.base ? i[0] + t.base : i[0],
                    u = {
                        css: i[1],
                        media: i[2],
                        sourceMap: i[3]
                    };
                r[a] ? r[a].parts.push(u) : n.push(r[a] = {
                    id: a,
                    parts: [u]
                })
            }
            return n
        }

        function d(e, t) {
            var n = i(e.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = s[s.length - 1];
            if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), s.push(t);
            else if ("bottom" === e.insertAt) n.appendChild(t);
            else {
                if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = i(e.insertAt.before, n);
                n.insertBefore(t, o)
            }
        }

        function p(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = s.indexOf(e);
            t >= 0 && s.splice(t, 1)
        }

        function h(e) {
            var t = document.createElement("style");
            if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
                var r = function() {
                    0;
                    return n.nc
                }();
                r && (e.attrs.nonce = r)
            }
            return v(t, e.attrs), d(e, t), t
        }

        function v(e, t) {
            Object.keys(t).forEach(function(n) {
                e.setAttribute(n, t[n])
            })
        }

        function y(e, t) {
            var n, r, o, i;
            if (t.transform && e.css) {
                if (!(i = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function() {};
                e.css = i
            }
            if (t.singleton) {
                var s = u++;
                n = a || (a = h(t)), r = g.bind(null, n, s, !1), o = g.bind(null, n, s, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
                var t = document.createElement("link");
                return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", v(t, e.attrs), d(e, t), t
            }(t), r = function(e, t, n) {
                var r = n.css,
                    o = n.sourceMap,
                    i = void 0 === t.convertToAbsoluteUrls && o;
                (t.convertToAbsoluteUrls || i) && (r = c(r));
                o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var a = new Blob([r], {
                        type: "text/css"
                    }),
                    u = e.href;
                e.href = URL.createObjectURL(a), u && URL.revokeObjectURL(u)
            }.bind(null, n, t), o = function() {
                p(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = h(t), r = function(e, t) {
                var n = t.css,
                    r = t.media;
                r && e.setAttribute("media", r);
                if (e.styleSheet) e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }.bind(null, n), o = function() {
                p(n)
            });
            return r(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        r(e = t)
                    } else o()
                }
        }
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = o()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var n = f(e, t);
            return l(n, t),
                function(e) {
                    for (var o = [], i = 0; i < n.length; i++) {
                        var a = n[i];
                        (u = r[a.id]).refs--, o.push(u)
                    }
                    e && l(f(e, t), t);
                    for (i = 0; i < o.length; i++) {
                        var u;
                        if (0 === (u = o[i]).refs) {
                            for (var s = 0; s < u.parts.length; s++) u.parts[s]();
                            delete r[u.id]
                        }
                    }
                }
        };
        var m = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }();

        function g(e, t, n, r) {
            var o = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = m(t, o);
            else {
                var i = document.createTextNode(o),
                    a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var n = t.protocol + "//" + t.host,
                r = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                var o, i = t.trim().replace(/^"(.*)"$/, function(e, t) {
                    return t
                }).replace(/^'(.*)'$/, function(e, t) {
                    return t
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
            })
        }
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var r = {};

        function o(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        n.r(r), n.d(r, "renderDropdown", function() {
            return L
        });
        var i = "recentSearches",
            a = 3;

        function u(e, t) {
            if ("string" == typeof t && /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)(Z|([+\-])(\d{2}):(\d{2}))$/.exec(t)) return new Date(t);
            return t
        }

        function s(e) {
            var t = TotalJobsGroup.localStorage.getItem(i),
                n = t ? JSON.parse(t, u) : null;
            return !n || !n.recentSearches || e && n.memberId && n.memberId !== e ? {
                recentSearches: [],
                memberId: e
            } : (n.memberId || (n.memberId = e || ""), n.recentSearches.forEach(function(e) {
                d(e)
            }), n)
        }

        function c(e) {
            var t = o(e),
                n = [];
            if (function() {
                    var e = TotalJobsGroup.Config.Global.CommuteTimeSearchEnabledSites,
                        t = TotalJobsGroup.Config.Site.Site;
                    if (e && e.indexOf(t) > -1) return !0;
                    return !1
                }()) n = t;
            else
                for (var r = 0; r < t.length; r++) 0 !== t[r].duration && null !== t[r].duration || n.push(t[r]);
            return n
        }

        function l(e) {
            var t = e.length - a;
            t > 0 && e.splice(-t, t)
        }

        function f(e) {
            e.sort(function(e, t) {
                var n = e.dateSearched,
                    r = t.dateSearched;
                return n === r ? 0 : n < r ? 1 : -1
            })
        }

        function d(e) {
            e.location = (e.location || "").trim(), e.keywords = (e.keywords || "").trim(), e.radius = null === e.radius ? null : isNaN(+e.radius) ? null : +e.radius, e.duration = null === e.duration ? null : isNaN(+e.duration) ? null : +e.duration, e.location || (e.radius = null, e.duration = null)
        }

        function p(e, t, n) {
            if (!t) return null;
            var r = {
                recentSearches: e,
                memberId: t,
                lastDownloadDate: n
            };
            return TotalJobsGroup.localStorage.setItem(i, JSON.stringify(r)), r
        }
        var h = {
            saveRecentSearch: "/search/api/recentsearches",
            uploadRecentSearches: "/search/api/recentsearches/bulkupload",
            getRecentSearches: "/search/api/recentsearches"
        };
        var v = n(0),
            y = n(1);

        function m(e) {
            return /Recent Search:|Homepage:Search|Header:/i.test(analytics.HeaderSearchReferrer || "") && /^\/?jobs\/(?:(?:[^\/]+)|(?:[^\/]+\/in-[^\/]+))\/?$/i.test(v.getPath()) && function() {
                var e = v.getQueryString();
                return 0 === $.grep(Object.keys(e), function(e) {
                    switch (e.toLowerCase()) {
                        case "s":
                        case "radius":
                        case "duration":
                        case "q":
                            return !1;
                        default:
                            return !0
                    }
                }).length
            }()
        }
        var g = "searchOptions",
            b = "searchType",
            w = "AnonymousUser",
            S = 6e4,
            x = 30,
            T = null;

        function j(e) {
            T || (T = $.Deferred().resolve().promise());
            var t = $.Deferred();
            return T = T.then(function() {
                return e().then(function() {
                    t.resolve.apply(e, arguments)
                }, function() {
                    return t.reject.apply(e, arguments), $.Deferred().resolve()
                })
            }), t.promise()
        }

        function k() {
            var e = function() {
                var e = s();
                return f(e.recentSearches), e.recentSearches = c(e.recentSearches), l(e.recentSearches), e
            }();
            if (D()) return $.Deferred().resolve(e).promise();
            var t = (A() || {}).MemberId,
                n = new Date;
            return e.memberId ? e.memberId === t && e.lastDownloadDate && (n - e.lastDownloadDate) / S < x ? $.Deferred().resolve(e).promise() : $.ajax({
                url: h.getRecentSearches,
                dataType: "json",
                type: "GET"
            }).then(function(e) {
                return p(e, t, n)
            }) : function(e) {
                return $.ajax({
                    url: h.uploadRecentSearches,
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(e)
                })
            }(e.recentSearches).then(function(e) {
                return p(e, t, n)
            })
        }

        function A() {
            var e = y.getItem(w);
            return e ? v.queryStringToObject(e) : null
        }

        function D() {
            var e = A();
            return !e || "False" !== e.IsAnonymous
        }

        function O() {
            var e = function() {
                var e, t, n = TotalJobsGroup.localStorage.getItem(g),
                    r = TotalJobsGroup.sessionStorage.getItem(b);
                try {
                    e = n ? JSON.parse(n) : null, t = r ? JSON.parse(r) : null
                } catch (e) {
                    return null
                }
                if (!e) return null;
                var o = null === e.radius ? null : isNaN(+e.radius) ? null : +e.radius,
                    i = null === e.duration ? null : isNaN(+e.duration) ? null : +e.duration;
                return null !== t ? {
                    location: e.location,
                    keywords: e.keywords,
                    keywordType: t.type,
                    radius: o,
                    duration: i,
                    dateSearched: new Date
                } : {
                    location: e.location,
                    keywords: e.keywords,
                    radius: o,
                    duration: i,
                    dateSearched: new Date
                }
            }();
            if (!e) return $.Deferred().reject("No search.").promise();
            var t = (A() || {}).MemberId;
            return t ? m() ? (D() && (t = ""), function(e, t) {
                if (! function(e) {
                        return e && (e.location || e.keywords) && e.dateSearched
                    }(e)) return !1;
                t = t || "", d(e);
                var n = s(t),
                    r = n.recentSearches,
                    o = function(e, t) {
                        for (var n = t.keywords, r = t.location, o = t.radius, i = t.duration, a = 0; a < e.length; ++a) {
                            var u = e[a];
                            if (u.keywords.toLowerCase() === n.toLowerCase() && u.location.toLowerCase() === r.toLowerCase() && u.radius === o && u.duration === i) return a
                        }
                        return -1
                    }(r, e);
                return o > -1 ? r[o] = e : (r.push(e), f(r), l(r)), TotalJobsGroup.localStorage.setItem(i, JSON.stringify(n)), !0
            }(e, t) ? D() ? $.Deferred().resolve().promise() : function(e) {
                return $.ajax({
                    url: h.saveRecentSearch,
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(e)
                })
            }(e) : $.Deferred().reject("Last search failed validation.").promise()) : $.Deferred().resolve().promise() : $.Deferred().reject("No member ID.").promise()
        }

        function C() {
            return j(k)
        }

        function N() {
            return j(O)
        }

        function E(e) {
            var t = {
                s: "recentsearch"
            };
            void 0 !== e.index && (t.rsearch = e.index), e.keywords && (t.Keywords = e.keywords), e.location && (t.LTxt = e.location, e.duration && (t.Duration = e.duration), e.radius && (t.Radius = e.radius));
            var n = "/onsitesearch?",
                r = !0;
            return $.each(t, function(e) {
                r || (n += "&"), n += "".concat(e, "=").concat(encodeURIComponent(t[e])), r = !1
            }), n
        }
        var I = "searchType";

        function R(e) {
            var t = "";
            if (e.keywords && (t = e.keywords + " jobs"), e.location)
                if (t = (t || "Jobs") + " in " + e.location, null === e.radius || isNaN(+e.radius)) null === e.duration || isNaN(+e.duration) || (t = t + " + " + +e.duration + " minutes");
                else {
                    var n = TotalJobsGroup.Config.Site.Site,
                        r = 301 == n || 302 == n ? " km" : " miles";
                    t = t + " + " + +e.radius + r
                }
            return t
        }

        function _(e) {
            var t = $(e.target).data("type");
            "" === t && null === t || TotalJobsGroup.sessionStorage.setItem(I, JSON.stringify({
                type: t
            }))
        }
        var J = n(2);

        function L(e) {
            var t = 40,
                n = 38,
                r = 9,
                o = Array.prototype.slice.call(arguments, 1),
                i = $();
            $.each(o, function() {
                i = i.add(this)
            });
            var a = $("<div>"),
                u = !1;

            function s() {
                (function(e) {
                    return C().then(function(t) {
                        t && t.recentSearches && t.recentSearches.length && ($(e).append($("<ul>").append(t.recentSearches.map(function(e, t) {
                            return e.index = t + 1, null !== e.keywordType || void 0 !== e.keywordType ? $("<li>").append($('<a class="recent-search-option" />').text(R(e)).attr("href", E(e)).attr("data-type", e.keywordType)) : $("<li>").append($('<a class="recent-search-option" />').text(R(e)).attr("href", E(e)))
                        }))), $("body").on("click", ".recent-search-option", _))
                    })
                })(a).then(function() {
                    var o = a.children().first().detach();

                    function s(e) {
                        switch (e.which) {
                            case t:
                                e.preventDefault(), $(e.target).parent().next().find(":focusable").focus();
                                break;
                            case n:
                                e.preventDefault(), $(e.target).parent().prev().find(":focusable").focus()
                        }
                    }

                    function c(e) {
                        var t = e.target || document.activeElement,
                            n = $(".clear-keywords, .clear-location").find("span");
                        if (t) {
                            var r = $(t);
                            if (r && (o.has(r).length > 0 || i.index(r) > -1 || n.index(r) > -1)) return
                        }
                        d()
                    }

                    function l(e) {
                        e.which !== t && e.which !== n && e.which !== r || (e.preventDefault(), o.find(":focusable:first").focus())
                    }

                    function f() {
                        $(this).val() && d()
                    }

                    function d() {
                        o.hide(), $(":focusable", o).off("keydown", s), i.off("keydown", l), $(window).off("click touchend focusin", c), i.off("input", f), o.detach(), u = !1
                    }
                    o.addClass("dropdown-menu " + J.recentSearchDropdown).attr("role", "menu").hide(), e.append(o), i.on("keydown", l), i.on("input", f), $(window).on("click touchend focusin", c), o.show(), $(":focusable", o).on("keydown", s)
                })
            }
            i.on("click", function() {
                $(".ui-autocomplete:visible").length > 0 || u || (u = !0, s())
            }), i.on("keyup input focus", function() {
                u || $(this).val() || (u = !0, s())
            })
        }
        n.d(t, "getRecentSearchesAsync", function() {
            return C
        }), n.d(t, "saveLastSearchAsync", function() {
            return N
        }), n.d(t, "DropdownRenderer", function() {
            return r
        })
    }])
});