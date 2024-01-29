! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function(e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 23)
}([function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return o
    }), n.d(e, "a", function() {
        return i
    }), n.d(e, "d", function() {
        return a
    }), n.d(e, "f", function() {
        return s
    }), n.d(e, "c", function() {
        return c
    }), n.d(e, "e", function() {
        return u
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var r = function(t, e) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    };

    function o(t, e) {
        function n() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }
    var i = function() {
        return (i = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    };

    function a(t, e) {
        var n = {};
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && (n[r[o]] = t[r[o]])
        }
        return n
    }

    function s(t) {
        var e = "function" == typeof Symbol && t[Symbol.iterator],
            n = 0;
        return e ? e.call(t) : {
            next: function() {
                return t && n >= t.length && (t = void 0), {
                    value: t && t[n++],
                    done: !t
                }
            }
        }
    }

    function c(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    }

    function u() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(c(arguments[e]));
        return t
    }
}, , function(t, e, n) {
    "use strict";

    function r(t) {
        switch (Object.prototype.toString.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return g(t, Error)
        }
    }

    function o(t) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(t)
    }

    function i(t) {
        return "[object DOMError]" === Object.prototype.toString.call(t)
    }

    function a(t) {
        return "[object DOMException]" === Object.prototype.toString.call(t)
    }

    function s(t) {
        return "[object String]" === Object.prototype.toString.call(t)
    }

    function c(t) {
        return null === t || "object" != typeof t && "function" != typeof t
    }

    function u(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }

    function l(t) {
        return "undefined" != typeof Event && g(t, Event)
    }

    function d(t) {
        return "undefined" != typeof Element && g(t, Element)
    }

    function p(t) {
        return "[object RegExp]" === Object.prototype.toString.call(t)
    }

    function h(t) {
        return Boolean(t && t.then && "function" == typeof t.then)
    }

    function f(t) {
        return u(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
    }

    function g(t, e) {
        try {
            return t instanceof e
        } catch (t) {
            return !1
        }
    }
    n.d(e, "d", function() {
        return r
    }), n.d(e, "e", function() {
        return o
    }), n.d(e, "a", function() {
        return i
    }), n.d(e, "b", function() {
        return a
    }), n.d(e, "k", function() {
        return s
    }), n.d(e, "i", function() {
        return c
    }), n.d(e, "h", function() {
        return u
    }), n.d(e, "f", function() {
        return l
    }), n.d(e, "c", function() {
        return d
    }), n.d(e, "j", function() {
        return p
    }), n.d(e, "m", function() {
        return h
    }), n.d(e, "l", function() {
        return f
    }), n.d(e, "g", function() {
        return g
    })
}, function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "e", function() {
            return i
        }), n.d(e, "i", function() {
            return a
        }), n.d(e, "h", function() {
            return s
        }), n.d(e, "d", function() {
            return c
        }), n.d(e, "c", function() {
            return u
        }), n.d(e, "b", function() {
            return l
        }), n.d(e, "a", function() {
            return d
        }), n.d(e, "f", function() {
            return p
        }), n.d(e, "g", function() {
            return f
        });
        var r = n(7),
            o = (n(5), {});

        function i() {
            return Object(r.b)() ? t : "undefined" != typeof window ? window : "undefined" != typeof self ? self : o
        }

        function a() {
            var t = i(),
                e = t.crypto || t.msCrypto;
            if (void 0 !== e && e.getRandomValues) {
                var n = new Uint16Array(8);
                e.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                var r = function(t) {
                    for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                    return e
                };
                return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
            }
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var e = 16 * Math.random() | 0;
                return ("x" === t ? e : 3 & e | 8).toString(16)
            })
        }

        function s(t) {
            if (!t) return {};
            var e = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!e) return {};
            var n = e[6] || "",
                r = e[8] || "";
            return {
                host: e[4],
                path: e[5],
                protocol: e[2],
                relative: e[5] + n + r
            }
        }

        function c(t) {
            if (t.message) return t.message;
            if (t.exception && t.exception.values && t.exception.values[0]) {
                var e = t.exception.values[0];
                return e.type && e.value ? e.type + ": " + e.value : e.type || e.value || t.event_id || "<unknown>"
            }
            return t.event_id || "<unknown>"
        }

        function u(t) {
            var e = i();
            if (!("console" in e)) return t();
            var n = e.console,
                r = {};
            ["debug", "info", "warn", "error", "log", "assert"].forEach(function(t) {
                t in e.console && n[t].__sentry_original__ && (r[t] = n[t], n[t] = n[t].__sentry_original__)
            });
            var o = t();
            return Object.keys(r).forEach(function(t) {
                n[t] = r[t]
            }), o
        }

        function l(t, e, n) {
            t.exception = t.exception || {}, t.exception.values = t.exception.values || [], t.exception.values[0] = t.exception.values[0] || {}, t.exception.values[0].value = t.exception.values[0].value || e || "", t.exception.values[0].type = t.exception.values[0].type || n || "Error"
        }

        function d(t, e) {
            void 0 === e && (e = {});
            try {
                t.exception.values[0].mechanism = t.exception.values[0].mechanism || {}, Object.keys(e).forEach(function(n) {
                    t.exception.values[0].mechanism[n] = e[n]
                })
            } catch (t) {}
        }

        function p() {
            try {
                return document.location.href
            } catch (t) {
                return ""
            }
        }
        var h = 6e4;

        function f(t, e) {
            if (!e) return h;
            var n = parseInt("" + e, 10);
            if (!isNaN(n)) return 1e3 * n;
            var r = Date.parse("" + e);
            return isNaN(r) ? h : r - t
        }
    }).call(this, n(16))
}, function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "c", function() {
            return u
        }), n.d(e, "f", function() {
            return l
        }), n.d(e, "e", function() {
            return h
        }), n.d(e, "d", function() {
            return v
        }), n.d(e, "b", function() {
            return b
        }), n.d(e, "a", function() {
            return y
        });
        var r = n(0),
            o = n(12),
            i = n(2),
            a = n(20),
            s = n(8),
            c = n(5);

        function u(t, e, n) {
            if (e in t) {
                var r = t[e],
                    o = n(r);
                if ("function" == typeof o) try {
                    o.prototype = o.prototype || {}, Object.defineProperties(o, {
                        __sentry_original__: {
                            enumerable: !1,
                            value: r
                        }
                    })
                } catch (t) {}
                t[e] = o
            }
        }

        function l(t) {
            return Object.keys(t).map(function(e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
            }).join("&")
        }

        function d(t) {
            if (Object(i.d)(t)) {
                var e = t,
                    n = {
                        message: e.message,
                        name: e.name,
                        stack: e.stack
                    };
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            if (Object(i.f)(t)) {
                var a = t,
                    s = {};
                s.type = a.type;
                try {
                    s.target = Object(i.c)(a.target) ? Object(o.a)(a.target) : Object.prototype.toString.call(a.target)
                } catch (t) {
                    s.target = "<unknown>"
                }
                try {
                    s.currentTarget = Object(i.c)(a.currentTarget) ? Object(o.a)(a.currentTarget) : Object.prototype.toString.call(a.currentTarget)
                } catch (t) {
                    s.currentTarget = "<unknown>"
                }
                for (var r in "undefined" != typeof CustomEvent && Object(i.g)(t, CustomEvent) && (s.detail = a.detail), a) Object.prototype.hasOwnProperty.call(a, r) && (s[r] = a);
                return s
            }
            return t
        }

        function p(t) {
            return function(t) {
                return ~-encodeURI(t).split(/%..|./).length
            }(JSON.stringify(t))
        }

        function h(t, e, n) {
            void 0 === e && (e = 3), void 0 === n && (n = 102400);
            var r = v(t, e);
            return p(r) > n ? h(t, e - 1, n) : r
        }

        function f(e, n) {
            return "domain" === n && e && "object" == typeof e && e._events ? "[Domain]" : "domainEmitter" === n ? "[DomainEmitter]" : void 0 !== t && e === t ? "[Global]" : "undefined" != typeof window && e === window ? "[Window]" : "undefined" != typeof document && e === document ? "[Document]" : Object(i.l)(e) ? "[SyntheticEvent]" : "number" == typeof e && e != e ? "[NaN]" : void 0 === e ? "[undefined]" : "function" == typeof e ? "[Function: " + Object(s.a)(e) + "]" : "symbol" == typeof e ? "[" + String(e) + "]" : "bigint" == typeof e ? "[BigInt: " + String(e) + "]" : e
        }

        function g(t, e, n, r) {
            if (void 0 === n && (n = 1 / 0), void 0 === r && (r = new a.a), 0 === n) return function(t) {
                var e = Object.prototype.toString.call(t);
                if ("string" == typeof t) return t;
                if ("[object Object]" === e) return "[Object]";
                if ("[object Array]" === e) return "[Array]";
                var n = f(t);
                return Object(i.i)(n) ? n : e
            }(e);
            if (null != e && "function" == typeof e.toJSON) return e.toJSON();
            var o = f(e, t);
            if (Object(i.i)(o)) return o;
            var s = d(e),
                c = Array.isArray(e) ? [] : {};
            if (r.memoize(e)) return "[Circular ~]";
            for (var u in s) Object.prototype.hasOwnProperty.call(s, u) && (c[u] = g(u, s[u], n - 1, r));
            return r.unmemoize(e), c
        }

        function v(t, e) {
            try {
                return JSON.parse(JSON.stringify(t, function(t, n) {
                    return g(t, n, e)
                }))
            } catch (t) {
                return "**non-serializable**"
            }
        }

        function b(t, e) {
            void 0 === e && (e = 40);
            var n = Object.keys(d(t));
            if (n.sort(), !n.length) return "[object has no keys]";
            if (n[0].length >= e) return Object(c.d)(n[0], e);
            for (var r = n.length; r > 0; r--) {
                var o = n.slice(0, r).join(", ");
                if (!(o.length > e)) return r === n.length ? o : Object(c.d)(o, e)
            }
            return ""
        }

        function y(t) {
            var e, n;
            if (Object(i.h)(t)) {
                var o = t,
                    a = {};
                try {
                    for (var s = Object(r.f)(Object.keys(o)), c = s.next(); !c.done; c = s.next()) {
                        var u = c.value;
                        void 0 !== o[u] && (a[u] = y(o[u]))
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        c && !c.done && (n = s.return) && n.call(s)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return a
            }
            return Array.isArray(t) ? t.map(y) : t
        }
    }).call(this, n(16))
}, function(t, e, n) {
    "use strict";
    n.d(e, "d", function() {
        return o
    }), n.d(e, "c", function() {
        return i
    }), n.d(e, "b", function() {
        return a
    }), n.d(e, "a", function() {
        return s
    });
    var r = n(2);

    function o(t, e) {
        return void 0 === e && (e = 0), "string" != typeof t || 0 === e ? t : t.length <= e ? t : t.substr(0, e) + "..."
    }

    function i(t, e) {
        var n = t,
            r = n.length;
        if (r <= 150) return n;
        e > r && (e = r);
        var o = Math.max(e - 60, 0);
        o < 5 && (o = 0);
        var i = Math.min(o + 140, r);
        return i > r - 5 && (i = r), i === r && (o = Math.max(i - 140, 0)), n = n.slice(o, i), o > 0 && (n = "'{snip} " + n), i < r && (n += " {snip}"), n
    }

    function a(t, e) {
        if (!Array.isArray(t)) return "";
        for (var n = [], r = 0; r < t.length; r++) {
            var o = t[r];
            try {
                n.push(String(o))
            } catch (t) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(e)
    }

    function s(t, e) {
        return !!Object(r.k)(t) && (Object(r.j)(e) ? e.test(t) : "string" == typeof e && -1 !== t.indexOf(e))
    }
}, function(t, e, n) {
    "use strict";
    var r;
    n.r(e),
        function(t) {
            t[t.CWJobs = 2] = "CWJobs", t[t.Totaljobs = 4] = "Totaljobs", t[t.Jobsite = 7] = "Jobsite", t[t.Milkround = 9] = "Milkround", t[t.Caterer = 10] = "Caterer", t[t.CityJobs = 40] = "CityJobs", t[t.JustEngineers = 50] = "JustEngineers", t[t.EmedCareers = 60] = "EmedCareers", t[t.RetailChoice = 76] = "RetailChoice", t[t.CatererGlobal = 77] = "CatererGlobal", t[t.CareerStructure = 80] = "CareerStructure", t[t.StepStoneDE = 250] = "StepStoneDE", t[t.StepStoneAT = 255] = "StepStoneAT", t[t.StepStoneBE = 260] = "StepStoneBE", t[t.StepStoneFR = 265] = "StepStoneFR", t[t.StepStoneNL = 270] = "StepStoneNL", t[t.StepStonePL = 275] = "StepStonePL", t[t.Pnet = 280] = "Pnet", t[t.NIJobs = 300] = "NIJobs", t[t.IrishJobs = 301] = "IrishJobs", t[t.Jobsie = 302] = "Jobsie", t[t.Spiegel = 310] = "Spiegel", t[t.Handelsblatt = 311] = "Handelsblatt", t[t.Berlin = 312] = "Berlin", t[t.Welt = 313] = "Welt", t[t.Bild = 314] = "Bild", t[t.Karriere = 315] = "Karriere", t[t.Studydrive = 316] = "Studydrive", t[t.Job = 317] = "Job", t[t.Unijobs = 318] = "Unijobs", t[t.External = 999] = "External"
        }(r || (r = {}));
    var o, i = r;
    ! function(t) {
        t.Stepstone = "Stepstone", t.Totaljobs = "Totaljobs", t.Jobsite = "Jobsite", t.Partners = "Partners", t.Saon = "Saon"
    }(o || (o = {}));
    var a, s = o;
    ! function(t) {
        t.English = "en", t.German = "de", t.Dutch = "nl", t.French = "fr", t.Polish = "pl"
    }(a || (a = {}));
    var c, u = a,
        l = {
            BritishPound: {
                symbol: "£",
                isoCode: "GBP"
            },
            Euro: {
                symbol: "€",
                isoCode: "EUR"
            },
            UnitedStatesDollar: {
                symbol: "$",
                isoCode: "USD"
            },
            SouthAfricanRand: {
                symbol: "R",
                isoCode: "ZAR"
            },
            PolishZloty: {
                symbol: "PLN",
                isoCode: "PLN"
            }
        },
        d = [{
            name: "Totaljobs",
            siteId: i.Totaljobs,
            hostPattern: "www.totaljobs",
            logo: "/account/Images/Totaljobs/icon.min.svg",
            backgroundColor: "#ffffff",
            brandGroup: s.Totaljobs,
            liveDomainExtension: ".com",
            defaultLanguage: u.English,
            availableLanguages: [u.English],
            currency: l.BritishPound
        }, {
            name: "CareerStructure",
            siteId: i.CareerStructure,
            hostPattern: "www.careerstructure",
            logo: "/account/Images/Careerstructure/icon.min.svg",
            backgroundColor: "#306289",
            brandGroup: s.Totaljobs,
            liveDomainExtension: ".com",
            defaultLanguage: u.English,
            availableLanguages: [u.English],
            currency: l.BritishPound
        }, {
            name: "Caterer.com",
            siteId: i.Caterer,
            hostPattern: "www.caterer\\.",
            logo: "/account/Images/Caterer/icon.min.svg",
            backgroundColor: "#555555",
            brandGroup: s.Totaljobs,
            liveDomainExtension: ".com",
            defaultLanguage: u.English,
            availableLanguages: [u.English],
            currency: l.BritishPound
        }, {
            name: "CatererGlobal",
            siteId: i.CatererGlobal,
            hostPattern: "www.catererglobal",
            logo: "/account/Images/CatererGlobal/icon.min.svg",
            backgroundColor: "#ffffff",
            brandGroup: s.Totaljobs,
            liveDomainExtension: ".com",
            defaultLanguage: u.English,
            availableLanguages: [u.English],
            currency: l.BritishPound
        }, {
            name: "CWjobs",
            siteId: i.CWJobs,
            hostPattern: "www.cwjobs",
            logo: "/account/Images/CWJobs/icon.min.svg",
            backgroundColor: "#ffffff",
            brandGroup: s.Totaljobs,
            liveDomainExtension: ".co.uk",
            defaultLanguage: u.English,
            availableLanguages: [u.English],
            currency: l.BritishPound
        }, {
            name: "Milkround",
            siteId: i.Milkround,
            hostPattern: "www.milkround",
            logo: "/account/Images/Milkround/icon.min.svg",
            backgroundColor: "#ffffff",
            brandGroup: s.Totaljobs,
            liveDomainExtension: ".com",
            defaultLanguage: u.English,
            availableLanguages: [u.English],
            currency: l.BritishPound
        }, {
            name: "RetailChoice",
            siteId: i.RetailChoice,
            hostPattern: "www.retailchoice",
            logo: "/account/Images/Retailchoice/icon.min.svg",
            backgroundColor: "#00577c",
            brandGroup: s.Totaljobs,
            liveDomainExtension: ".com",
            defaultLanguage: u.English,
            availableLanguages: [u.English],
            currency: l.BritishPound
        }, {
            name: "Jobsite",
            siteId: i.Jobsite,
            hostPattern: "www.jobsite",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Jobsite,
            liveDomainExtension: ".co.uk",
            defaultLanguage: u.English,
            availableLanguages: [u.English],
            currency: l.BritishPound
        }, {
            name: "JustEngineers",
            siteId: i.JustEngineers,
            hostPattern: "www.justengineers",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Jobsite,
            liveDomainExtension: ".net",
            defaultLanguage: u.English,
            availableLanguages: [u.English],
            currency: l.BritishPound
        }, {
            name: "CityJobs",
            siteId: i.CityJobs,
            hostPattern: "www.cityjobs",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Jobsite,
            liveDomainExtension: ".com",
            defaultLanguage: u.English,
            availableLanguages: [u.English],
            currency: l.BritishPound
        }, {
            name: "emedcareers",
            siteId: i.EmedCareers,
            hostPattern: "www.emedcareers",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Jobsite,
            liveDomainExtension: ".com",
            defaultLanguage: u.English,
            availableLanguages: [u.English],
            currency: l.BritishPound
        }, {
            name: "stepstonede",
            siteId: i.StepStoneDE,
            hostPattern: ".stepstone.de",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Stepstone,
            liveDomainExtension: ".de",
            defaultLanguage: u.German,
            availableLanguages: [u.German, u.English],
            currency: l.Euro
        }, {
            name: "stepstoneat",
            siteId: i.StepStoneAT,
            hostPattern: ".stepstone.at",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Stepstone,
            liveDomainExtension: ".at",
            defaultLanguage: u.German,
            availableLanguages: [u.German, u.English],
            currency: l.Euro
        }, {
            name: "stepstonebe",
            siteId: i.StepStoneBE,
            hostPattern: ".stepstone.be",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Stepstone,
            liveDomainExtension: ".be",
            defaultLanguage: u.Dutch,
            availableLanguages: [u.Dutch, u.French, u.English],
            currency: l.Euro
        }, {
            name: "stepstonefr",
            siteId: i.StepStoneFR,
            hostPattern: ".stepstone.fr",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Stepstone,
            liveDomainExtension: ".fr",
            defaultLanguage: u.French,
            availableLanguages: [u.French, u.English],
            currency: l.Euro
        }, {
            name: "stepstonenl",
            siteId: i.StepStoneNL,
            hostPattern: ".stepstone.nl",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Stepstone,
            liveDomainExtension: ".nl",
            defaultLanguage: u.Dutch,
            availableLanguages: [u.Dutch, u.English],
            currency: l.Euro
        }, {
            name: "stepstonepl",
            siteId: i.StepStonePL,
            hostPattern: ".stepstone.pl",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Stepstone,
            liveDomainExtension: ".pl",
            defaultLanguage: u.Polish,
            availableLanguages: [u.Polish, u.English],
            currency: l.PolishZloty
        }, {
            name: "pnet",
            siteId: i.Pnet,
            hostPattern: ".pnet.co.za",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Stepstone,
            liveDomainExtension: ".co.za",
            defaultLanguage: u.English,
            availableLanguages: [u.English],
            currency: l.SouthAfricanRand
        }, {
            name: "NIJobs",
            siteId: i.NIJobs,
            hostPattern: "www.nijobs",
            logo: "/account/Images/NIJobs/icon.min.svg",
            backgroundColor: "#010101",
            brandGroup: s.Saon,
            liveDomainExtension: ".com",
            defaultLanguage: u.English,
            availableLanguages: [u.English],
            currency: l.BritishPound
        }, {
            name: "IrishJobs",
            siteId: i.IrishJobs,
            hostPattern: "www.irishjobs",
            logo: "/account/Images/IrishJobs/icon.min.svg",
            backgroundColor: "#ffffff",
            brandGroup: s.Saon,
            liveDomainExtension: ".ie",
            defaultLanguage: u.English,
            availableLanguages: [u.English],
            currency: l.BritishPound
        }, {
            name: "Jobsie",
            siteId: i.Jobsie,
            hostPattern: "www.jobs",
            logo: "/account/Images/Jobsie/icon.min.svg",
            backgroundColor: "#ffffff",
            brandGroup: s.Saon,
            liveDomainExtension: ".ie",
            defaultLanguage: u.English,
            availableLanguages: [u.English],
            currency: l.BritishPound
        }, {
            name: "Spiegel",
            siteId: i.Spiegel,
            hostPattern: "jobs.spiegel.de",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Partners,
            liveDomainExtension: ".de",
            defaultLanguage: u.German,
            availableLanguages: [u.German],
            currency: l.Euro
        }, {
            name: "Handelsblatt",
            siteId: i.Handelsblatt,
            hostPattern: "jobs.handelsblatt.com",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Partners,
            liveDomainExtension: ".com",
            defaultLanguage: u.German,
            availableLanguages: [u.German],
            currency: l.Euro
        }, {
            name: "Berlin",
            siteId: i.Berlin,
            hostPattern: "jobs.berlin.de",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Partners,
            liveDomainExtension: ".de",
            defaultLanguage: u.German,
            availableLanguages: [u.German],
            currency: l.Euro
        }, {
            name: "Welt",
            siteId: i.Welt,
            hostPattern: "jobs.welt.de",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Partners,
            liveDomainExtension: ".de",
            defaultLanguage: u.German,
            availableLanguages: [u.German],
            currency: l.Euro
        }, {
            name: "Bild",
            siteId: i.Bild,
            hostPattern: "jobs.bild.de",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Partners,
            liveDomainExtension: ".de",
            defaultLanguage: u.German,
            availableLanguages: [u.German],
            currency: l.Euro
        }, {
            name: "Karriere",
            siteId: i.Karriere,
            hostPattern: "jobs.karriere.de",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Partners,
            liveDomainExtension: ".de",
            defaultLanguage: u.German,
            availableLanguages: [u.German],
            currency: l.Euro
        }, {
            name: "Studydrive",
            siteId: i.Studydrive,
            hostPattern: "studydrive.net",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Partners,
            liveDomainExtension: ".net",
            defaultLanguage: u.English,
            availableLanguages: [u.English, u.German],
            currency: l.Euro
        }, {
            name: "Job",
            siteId: i.Job,
            hostPattern: "job.at",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Partners,
            liveDomainExtension: ".at",
            defaultLanguage: u.English,
            availableLanguages: [u.English, u.German],
            currency: l.Euro
        }, {
            name: "Unijobs",
            siteId: i.Unijobs,
            hostPattern: "unijobs.at",
            logo: "",
            backgroundColor: "",
            brandGroup: s.Partners,
            liveDomainExtension: ".at",
            defaultLanguage: u.German,
            availableLanguages: [u.German],
            currency: l.Euro
        }];
    ! function(t) {
        t.development = "development", t.next = "next", t.uat = "uat", t.live = "live"
    }(c || (c = {}));
    var p = c;

    function h(t) {
        var e = d.filter(function(e) {
            return null != t.match(new RegExp(e.hostPattern))
        });
        return 1 !== e.length ? 2 === e.length ? f(e) : null : e[0]
    }

    function f(t) {
        var e = t.find(function(t) {
            return "www.jobsite" == t.hostPattern
        });
        return null == e ? null : e
    }

    function g(t, e) {
        if (e.brandGroup !== s.Jobsite) throw new Error(e.name + " is not a jobsite brand");
        return t.indexOf(".io") > -1 ? "https://" + t.replace(e.hostPattern, "www.totaljobs") : "https://www.totaljobs.com"
    }
    var v = function(t, e, n) {
            if (void 0 === n && (n = ""), t === p.development && !n) throw new Error("Team name is not defined");
            return e.brandGroup === s.Stepstone ? b(e, t, n) : y(t, e, n)
        },
        b = function(t, e, n) {
            switch (e) {
                case p.development:
                    return "https://" + n + "-team" + t.hostPattern;
                case p.next:
                case p.uat:
                    return "https://next" + t.hostPattern;
                case p.live:
                    return "https://www" + t.hostPattern;
                default:
                    throw new Error("Please specify a valid environment")
            }
        },
        y = function(t, e, n) {
            var r, o = null === (r = e.hostPattern.match(/^(w{3}.[a-z]+)/g)) || void 0 === r ? void 0 : r[0];
            switch (t) {
                case p.development:
                    return "https://" + o + "." + n + ".tjgdev.io";
                case p.next:
                case p.uat:
                    return "https://" + o + ".tjgpat.io";
                case p.live:
                    return "https://" + o + e.liveDomainExtension;
                default:
                    throw new Error("Please specify a valid environment")
            }
        };
    n.d(e, "brands", function() {
        return d
    }), n.d(e, "Currency", function() {
        return l
    }), n.d(e, "BrandGroup", function() {
        return s
    }), n.d(e, "getBaseUrlForJobsiteBrands", function() {
        return g
    }), n.d(e, "getCurrentBrand", function() {
        return h
    }), n.d(e, "determinePublicBaseUrl", function() {
        return v
    }), n.d(e, "determineIfJobsite", function() {
        return f
    }), n.d(e, "Site", function() {
        return i
    }), n.d(e, "Language", function() {
        return u
    }), n.d(e, "EnvironmentType", function() {
        return p
    })
}, function(t, e, n) {
    "use strict";
    (function(t, r) {
        n.d(e, "b", function() {
            return o
        }), n.d(e, "a", function() {
            return i
        });
        n(2), n(4);

        function o() {
            return "[object process]" === Object.prototype.toString.call(void 0 !== t ? t : 0)
        }

        function i(t, e) {
            return t.require(e)
        }
    }).call(this, n(30), n(15)(t))
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return o
    });
    var r = "<anonymous>";

    function o(t) {
        try {
            return t && "function" == typeof t && t.name || r
        } catch (t) {
            return r
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = this && this.__createBinding || (Object.create ? function(t, e, n, r) {
            void 0 === r && (r = n), Object.defineProperty(t, r, {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        } : function(t, e, n, r) {
            void 0 === r && (r = n), t[r] = e[n]
        }),
        o = this && this.__setModuleDefault || (Object.create ? function(t, e) {
            Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            })
        } : function(t, e) {
            t.default = e
        }),
        i = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) "default" !== n && Object.hasOwnProperty.call(t, n) && r(e, t, n);
            return o(e, t), e
        },
        a = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(n(42)),
        c = a(n(31)),
        u = a(n(32)),
        l = a(n(17)),
        d = function() {
            function t(t, e) {
                var n = u.default.getEnvironment();
                if (n != l.default.NONE) {
                    if (t) {
                        var r = this.buildSentryOptions(n, t, e);
                        s.init(r)
                    } else {
                        var o = c.default(n);
                        s.init(o)
                    }
                    s.setTag("browser_version", navigator.appVersion), s.setTag("platform", navigator.platform), s.setTag("user_agent", navigator.userAgent), s.setTag("current_url", window.location.href), s.setTag("environment", n)
                }
            }
            return t.prototype.buildSentryOptions = function(t, e, n) {
                var r = {
                    dsn: e,
                    defaultIntegrations: !1,
                    environment: t
                };
                return null != n && null != n && (r.transport = n), r
            }, t.prototype.logException = function(t) {
                try {
                    var e = u.default.getEnvironment();
                    e != l.default.LOCAL && e != l.default.NONE && e != l.default.DEV ? s.captureException(t) : console.log(t)
                } catch (t) {
                    console.log(t)
                }
            }, t.prototype.logMessage = function(t, e, n) {
                try {
                    var r = u.default.getEnvironment();
                    r != l.default.LOCAL && r != l.default.NONE && r != l.default.DEV ? s.captureMessage(t, n) : console.log(t, e)
                } catch (t) {
                    console.log(t)
                }
            }, t
        }();
    e.default = d
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        function t() {}
        return t.flagRegisteredUser = function(t) {
            void 0 === t && (t = window.location.pathname), localStorage.setItem("google-registered-on-date", (new Date).toString()), localStorage.setItem("google-registered-on-url", t)
        }, t.unflagRegisteredUser = function() {
            localStorage.removeItem("google-registered-on-date"), localStorage.removeItem("google-registered-on-url")
        }, t.pauseOneTap = function(t) {
            var e = new Date,
                n = new Date(e.setHours(e.getHours() + t));
            localStorage.setItem("google-onetap-pause-until", n.toString())
        }, t
    }();
    e.default = r
}, function(t, e, n) {
    "use strict";
    var r = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.platform = e.google = void 0;
    var o = r(n(24)),
        i = r(n(39)),
        a = r(n(40)),
        s = {
            signout: r(n(41)).default
        };
    e.platform = s;
    var c = {
        OneTap: o.default,
        Button: i.default,
        StepStoneButton: a.default
    };
    e.google = c
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return o
    });
    var r = n(2);

    function o(t) {
        try {
            for (var e = t, n = [], r = 0, o = 0, a = " > ".length, s = void 0; e && r++ < 5 && !("html" === (s = i(e)) || r > 1 && o + n.length * a + s.length >= 80);) n.push(s), o += s.length, e = e.parentNode;
            return n.reverse().join(" > ")
        } catch (t) {
            return "<unknown>"
        }
    }

    function i(t) {
        var e, n, o, i, a, s = t,
            c = [];
        if (!s || !s.tagName) return "";
        if (c.push(s.tagName.toLowerCase()), s.id && c.push("#" + s.id), (e = s.className) && Object(r.k)(e))
            for (n = e.split(/\s+/), a = 0; a < n.length; a++) c.push("." + n[a]);
        var u = ["type", "name", "title", "alt"];
        for (a = 0; a < u.length; a++) o = u[a], (i = s.getAttribute(o)) && c.push("[" + o + '="' + i + '"]');
        return c.join("")
    }
}, function(t, e, n) {
    "use strict";
    var r = this && this.__awaiter || function(t, e, n, r) {
            return new(n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                        t(e)
                    })).then(a, s)
                }
                c((r = r.apply(t, e || [])).next())
            })
        },
        o = this && this.__generator || function(t, e) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = e.call(t, a)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        },
        i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(n(25)),
        s = i(n(26)),
        c = i(n(9)),
        u = i(n(10)),
        l = n(6),
        d = i(n(33)),
        p = new c.default;

    function h(t) {
        try {
            t.suppressReloadAnalytics()
        } catch (t) {
            p.logException(t)
        }
        location.reload()
    }
    e.default = function(t, e, n, i, c, f, g, v, b) {
        return void 0 === n && (n = !1), r(this, void 0, void 0, function() {
            var r, y, m, _, w, x, E, S;
            return o(this, function(o) {
                switch (o.label) {
                    case 0:
                        g && (p = g), (r = new a.default(n, c)).show(), m = new d.default, _ = m.getLanguageAndCountry(), w = v ? "Google_OneTap" : "Google_Buton", o.label = 1;
                    case 1:
                        return o.trys.push([1, 4, 5, 6]), x = void 0, x = c.brandGroup == l.BrandGroup.Stepstone ? JSON.stringify({
                            provider: "google",
                            jobId: f,
                            token: t,
                            source: b,
                            registrationsource: w
                        }) : JSON.stringify({
                            provider: "google",
                            jobId: f,
                            token: t,
                            registrationsource: w
                        }), [4, fetch(i, {
                            method: "POST",
                            credentials: "same-origin",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: x
                        })];
                    case 2:
                        return 200 !== (y = o.sent()).status && 201 !== y.status ? (console.log("Social Auth: Unexpected status code from server: " + y.status), p.logMessage("Social Auth: Unexpected status code from server: " + y.status), [2]) : [4, y.json()];
                    case 3:
                        return y = o.sent(), [3, 6];
                    case 4:
                        return E = o.sent(), p.logException(E), console.log(E), [2];
                    case 5:
                        return r.hide(), [7];
                    case 6:
                        if (!y.newUser) return [3, 11];
                        try {
                            v ? e.fireOneTapRegisteredEvent() : e.fireRegisteredEvent(), -1 !== window.location.href.indexOf("apply") && sessionStorage.setItem("isRegistrationEvent", "true")
                        } catch (t) {
                            p.logException(t)
                        }
                        u.default.flagRegisteredUser(), o.label = 7;
                    case 7:
                        return o.trys.push([7, 9, , 10]), [4, new s.default(n, c, _).show()];
                    case 8:
                        return o.sent(), [3, 10];
                    case 9:
                        return S = o.sent(), console.log(S), [3, 10];
                    case 10:
                        return h(e), [3, 12];
                    case 11:
                        try {
                            v ? e.fireOneTapSignedInEvent() : e.fireSignedInEvent(), -1 !== window.location.href.indexOf("apply") && sessionStorage.setItem("isLoginEvent", "true")
                        } catch (t) {
                            p.logException(t)
                        }
                        h(e), o.label = 12;
                    case 12:
                        return [2]
                }
            })
        })
    }
}, function(t, e, n) {
    "use strict";
    var r = this && this.__awaiter || function(t, e, n, r) {
            return new(n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                        t(e)
                    })).then(a, s)
                }
                c((r = r.apply(t, e || [])).next())
            })
        },
        o = this && this.__generator || function(t, e) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = e.call(t, a)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t(t, e) {
            this.id = t, this.isCentered = e
        }
        return t.prototype.styles = function() {
            return "\n.google-onetap-modal .modal-dialog {\n    width: 100%;\n    text-align: center;\n    " + (0 == this.isCentered ? "margin: 0; position: absolute; bottom: 0;" : "") + "\n}\n.google-onetap-modal .modal-header {\n    padding: 5px 15px;\n    text-align: left;\n}\n.google-onetap-modal .modal-body {\n    color: #858585;\n    font-size: 13px;\n    padding: 5px 15px;\n}\n@media (min-width: 768px) {\n    .google-onetap-modal .modal-dialog {\n        width: 400px;\n        " + (0 == this.isCentered ? "top: 20px; right: 20px;" : "") + "\n    }\n}\n"
        }, t.prototype.show = function(t, e) {
            return r(this, void 0, void 0, function() {
                var n, r;
                return o(this, function(o) {
                    return void 0 !== t && void 0 !== e && (n = "\n            <style id=" + this.id + "-styles>\n            " + e + "\n            </style>", document.body.insertAdjacentHTML("beforeend", n), document.body.insertAdjacentHTML("beforeend", t), (r = document.getElementById("" + this.id)) && (r.style.display = "block")), [2]
                })
            })
        }, t.prototype.hide = function() {
            var t = document.getElementById("" + this.id);
            null != t && t.parentNode.removeChild(t);
            var e = document.getElementById(this.id + "-styles");
            e && e.parentNode.removeChild(e)
        }, t
    }();
    e.default = i
}, function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), Object.defineProperty(e, "exports", {
                enumerable: !0
            }), e.webpackPolyfill = 1
        }
        return e
    }
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var r;
    Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t) {
            t.DEV = "dev", t.PAT = "pat", t.LIVE = "live", t.LOCAL = "local", t.NONE = "none"
        }(r || (r = {})), e.default = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        function t(t, e, n) {
            void 0 === e && (e = !0), void 0 === n && (n = []), this.analyticsLibrary = t, this.shouldSuppressReloadAnalytics = e, this.acceptableEventsOnReload = n
        }
        return t.prototype.fireRegisteredEvent = function() {
            this.analyticsLibrary && this.analyticsLibrary.fireNonStandardOnClickEvent("event130,event3", "event130,event3", "eVar30", "Google Register")
        }, t.prototype.fireSignedInEvent = function() {
            this.analyticsLibrary && this.analyticsLibrary.fireNonStandardOnClickEvent("event131", "event131", "eVar30", "Google Signed In")
        }, t.prototype.fireOneTapRegisteredEvent = function() {
            this.analyticsLibrary && this.analyticsLibrary.fireNonStandardOnClickEvent("event130,event3,event198", "event130,event3,event198", "eVar30", "Google Register")
        }, t.prototype.fireOneTapSignedInEvent = function() {
            this.analyticsLibrary && this.analyticsLibrary.fireNonStandardOnClickEvent("event131,event199", "event131,event199", "eVar30", "Google Signed In")
        }, t.prototype.fireOneTapPopupShownEvent = function() {
            this.analyticsLibrary && this.analyticsLibrary.fireNonStandardOnClickEvent("event132", "event132", "eVar30", "Google One-Tap Popup")
        }, t.prototype.fireSignInButtonPopupShownEvent = function() {
            this.analyticsLibrary && this.analyticsLibrary.fireNonStandardOnClickEvent("event133", "event133", "eVar30", "Google Sign In Button Popup")
        }, t.prototype.fireOneTapDismissedEvent = function() {}, t.prototype.suppressReloadAnalytics = function() {
            this.shouldSuppressReloadAnalytics && (sessionStorage.setItem("isPageReload", "true"), sessionStorage.setItem("acceptableEventsOnPageReload", this.acceptableEventsOnReload.join(",")))
        }, t
    }();
    e.default = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        function t(t) {
            this.buttonText = t
        }
        return t.prototype.html = function() {
            return '\n          <div id="customGoogleSignInBtn" class="customGPlusSignIn">\n              <span class="icon">\n                <svg width="42px" height="42px" viewBox="0 0 42 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n                    <defs>\n                        <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-1">\n                            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>\n                            <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1"></feColorMatrix>\n                            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter2"></feOffset>\n                            <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter2" result="shadowBlurOuter2"></feGaussianBlur>\n                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0" in="shadowBlurOuter2" type="matrix" result="shadowMatrixOuter2"></feColorMatrix>\n                            <feMerge>\n                                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>\n                                <feMergeNode in="shadowMatrixOuter2"></feMergeNode>\n                                <feMergeNode in="SourceGraphic"></feMergeNode>\n                            </feMerge>\n                        </filter>\n                        <rect id="path-2" x="0" y="0" width="40" height="40" rx="2"></rect>\n                    </defs>\n                    <g id="Google-Button" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n                        <g id="btn_google_light_normal" sketch:type="MSArtboardGroup" transform="translate(-1.000000, -1.000000)">\n                            <g id="logo_googleg_48dp" sketch:type="MSLayerGroup" transform="translate(15.000000, 15.000000)">\n                                <path d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z" id="Shape" fill="#4285F4" sketch:type="MSShapeGroup"></path>\n                                <path d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z" id="Shape" fill="#34A853" sketch:type="MSShapeGroup"></path>\n                                <path d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z" id="Shape" fill="#FBBC05" sketch:type="MSShapeGroup"></path>\n                                <path d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z" id="Shape" fill="#EA4335" sketch:type="MSShapeGroup"></path>\n                                <path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z" id="Shape" sketch:type="MSShapeGroup"></path>\n                            </g>\n                            <g id="handles_square" sketch:type="MSLayerGroup"></g>\n                        </g>\n                    </g>\n                </svg>\n              </span>\n              <span class="buttonText">' + this.buttonText + "</span>\n          </div>"
        }, t.prototype.styles = function() {
            return '\n      <style type="text/css">\n          #customGoogleSignInBtn {\n            display: inline-block;\n            background: white;\n            color: #444;\n            width: 100%;\n            border-radius: 1px;\n            box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);\n            white-space: nowrap;\n            text-align: center;\n          }\n          #customGoogleSignInBtn:hover {\n            cursor: pointer;\n          }\n          #customGoogleSignInBtn span.icon {\n            display: inline-block;\n            vertical-align: middle;\n            width: 42px;\n            height: 42px;\n          }\n          #customGoogleSignInBtn span.buttonText {\n            display: inline-block;\n            vertical-align: middle;\n            padding-left: 5px;\n            padding-right: 42px;\n            font-size: 14px;\n            font-weight: bold;\n            color: #757575;\n          }\n      </style>\n    '
        }, t
    }();
    e.default = r
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = function() {
        function t() {
            this._hasWeakSet = "function" == typeof WeakSet, this._inner = this._hasWeakSet ? new WeakSet : []
        }
        return t.prototype.memoize = function(t) {
            if (this._hasWeakSet) return !!this._inner.has(t) || (this._inner.add(t), !1);
            for (var e = 0; e < this._inner.length; e++) {
                if (this._inner[e] === t) return !0
            }
            return this._inner.push(t), !1
        }, t.prototype.unmemoize = function(t) {
            if (this._hasWeakSet) this._inner.delete(t);
            else
                for (var e = 0; e < this._inner.length; e++)
                    if (this._inner[e] === t) {
                        this._inner.splice(e, 1);
                        break
                    }
        }, t
    }()
}, , , function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(11),
        o = function(t, e, n, r) {
            return new(n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function c(t) {
                    t.done ? o(t.value) : new n(function(e) {
                        e(t.value)
                    }).then(a, s)
                }
                c((r = r.apply(t, e || [])).next())
            })
        },
        i = function(t, e) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = e.call(t, a)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        },
        a = window;
    ! function() {
        var t = this;
        document.addEventListener("DOMContentLoaded", function() {
            var e = document.getElementById("sign-out-link");
            null != e && e.addEventListener("click", function(n) {
                return o(t, void 0, void 0, function() {
                    var t, o, s, c;
                    return i(this, function(i) {
                        switch (i.label) {
                            case 0:
                                n.preventDefault(), i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), t = e.getAttribute("data-google-client-id"), "/account/auth/withsocial", !1, o = [], void 0, s = a.analLib, void 0, void 0, void 0, [4, new r.google.OneTap(t, "/account/auth/withsocial", !1, s, void 0, o, void 0, void 0, void 0).pause()];
                            case 2:
                                return i.sent(), [3, 4];
                            case 3:
                                return c = i.sent(), console.log(c), [3, 4];
                            case 4:
                                return [4, r.platform.signout()];
                            case 5:
                                return i.sent(), window.location.reload(), [2]
                        }
                    })
                })
            })
        })
    }()
}, function(t, e, n) {
    "use strict";
    var r = this && this.__awaiter || function(t, e, n, r) {
            return new(n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                        t(e)
                    })).then(a, s)
                }
                c((r = r.apply(t, e || [])).next())
            })
        },
        o = this && this.__generator || function(t, e) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = e.call(t, a)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        },
        i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(n(13)),
        s = i(n(18)),
        c = i(n(34)),
        u = i(n(35)),
        l = i(n(36)),
        d = n(37),
        p = i(n(9)),
        h = i(n(38)),
        f = n(6),
        g = i(n(10)),
        v = "https://accounts.google.com/gsi/client",
        b = function() {
            function t(t, e, n, r, o, i, a, s, c) {
                void 0 === n && (n = !0), void 0 === i && (i = []), this.site = this.setSite(), this._validateConstructorParameters(this.site, t, r, a), this.clientId = t, this.endpoint = e, this.jobId = o, this.parentElementId = a, this.errorLoggingHelper = this.getErrorLogger(s), this.ceTrackingSource = c, this.analyticsHelper = this.setAnalyticsHelper(n, i, r, c, s)
            }
            return t.prototype.setSite = function() {
                var t = f.getCurrentBrand(window.location.hostname);
                if (null != t && void 0 !== t) return t;
                throw new d.BrandNotProvidedError("Brand could not be obtained")
            }, t.prototype.getErrorLogger = function(t) {
                return t || new p.default
            }, t.prototype.setAnalyticsHelper = function(t, e, n, r, o) {
                var i;
                if ((null === (i = this.site) || void 0 === i ? void 0 : i.brandGroup) === f.BrandGroup.Stepstone) {
                    var a = this.getErrorLogger(o),
                        u = new l.default(a);
                    return new c.default(u, t, e, a, r)
                }
                return new s.default(n, t, e)
            }, t.prototype._whenGoogleIsAvailable = function(t) {
                return r(this, void 0, void 0, function() {
                    var e;
                    return o(this, function(n) {
                        switch (n.label) {
                            case 0:
                                e = 0, n.label = 1;
                            case 1:
                                return !window.hasOwnProperty("google") && e < 20 ? (e++, [4, new Promise(function(t) {
                                    return setTimeout(t, 100)
                                })]) : [3, 3];
                            case 2:
                                return n.sent(), [3, 1];
                            case 3:
                                if (20 == e) return [2];
                                e = 0, n.label = 4;
                            case 4:
                                return !window.google.hasOwnProperty("accounts") && e < 20 ? (e++, [4, new Promise(function(t) {
                                    return setTimeout(t, 100)
                                })]) : [3, 6];
                            case 5:
                                return n.sent(), [3, 4];
                            case 6:
                                return 20 == e ? [2] : [4, t()];
                            case 7:
                                return n.sent(), [2]
                        }
                    })
                })
            }, t.prototype.cancel = function() {
                try {
                    window.google.accounts.id.cancel()
                } catch (t) {
                    throw this.errorLoggingHelper.logException(t), new d.FailureToCancelError("Could not cancel google one-tap prompt")
                }
            }, t.prototype.pause = function() {
                return r(this, void 0, void 0, function() {
                    var t = this;
                    return o(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this._appendScriptIfNotExists()];
                            case 1:
                                return e.sent(), g.default.pauseOneTap(6), [4, this._whenGoogleIsAvailable(function() {
                                    t._disableAutoSelect()
                                })];
                            case 2:
                                return e.sent(), [2]
                        }
                    })
                })
            }, t.prototype.prompt = function() {
                return r(this, void 0, void 0, function() {
                    var t, e = this;
                    return o(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 3, , 4]), h.default.isBrowserAndOSSupported() ? [4, this._appendScriptIfNotExists()] : [2];
                            case 1:
                                return n.sent(), [4, this._whenGoogleIsAvailable(function() {
                                    return r(e, void 0, void 0, function() {
                                        return o(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, this._handlePrompt()];
                                                case 1:
                                                    return t.sent(), [2]
                                            }
                                        })
                                    })
                                })];
                            case 2:
                                return n.sent(), [3, 4];
                            case 3:
                                throw t = n.sent(), this.errorLoggingHelper.logException(t), t;
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.prototype._handlePrompt = function() {
                return r(this, void 0, void 0, function() {
                    var t;
                    return o(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 3, , 4]), [4, this._initGoogleLibrary()];
                            case 1:
                                return e.sent(), [4, this._doPrompt()];
                            case 2:
                                return e.sent(), [3, 4];
                            case 3:
                                throw t = e.sent(), this.errorLoggingHelper.logException(t), new Error("Error when initialising the google library and prompting");
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.prototype._validateConstructorParameters = function(t, e, n, r) {
                if (u.default(e)) throw new d.MissingValueError("Invalid client Id");
                if (u.default(n) && t.brandGroup == f.BrandGroup.Totaljobs) throw new d.MissingValueError("Invalid analytics library");
                if (!u.default(r)) {
                    var o = document.querySelectorAll("#" + r);
                    if (o.length > 1) throw new d.ParentElementIdError("There cannot be more than one containing element with the parentId present");
                    if (0 == o.length) throw new d.ParentElementIdError("An element with the parentId does not exist")
                }
            }, t.prototype._isGoogleLibraryLoaded = function() {
                return null !== document.querySelector('script[src="' + v + '"]')
            }, t.prototype._appendScriptIfNotExists = function() {
                return r(this, void 0, void 0, function() {
                    var t;
                    return o(this, function(e) {
                        return this._isGoogleLibraryLoaded() || ((t = document.createElement("script")).src = v, t.async = !0, t.defer = !0, document.head.appendChild(t)), [2]
                    })
                })
            }, t.prototype._makeInitializeObject = function() {
                return r(this, void 0, void 0, function() {
                    var t;
                    return o(this, function(e) {
                        return t = {
                            client_id: this.clientId,
                            auto_select: !0,
                            cancel_on_tap_outside: !1,
                            callback: this._handleIdToken.bind(this)
                        }, u.default(this.parentElementId) || (t.prompt_parent_id = this.parentElementId), [2, t]
                    })
                })
            }, t.prototype._initGoogleLibrary = function() {
                return r(this, void 0, void 0, function() {
                    var t, e;
                    return o(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), [4, this._makeInitializeObject()];
                            case 1:
                                return t = n.sent(), window.google.accounts.id.initialize(t), [3, 3];
                            case 2:
                                return e = n.sent(), this.errorLoggingHelper.logException(e), [2, Promise.reject(new d.FailureToInitializeError("Could not load google one-tap library"))];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, t.prototype._doPrompt = function() {
                return r(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        try {
                            window.google.accounts.id.prompt(this._handlePromptMomentNotification.bind(this))
                        } catch (t) {
                            return this.errorLoggingHelper.logException(t), [2, Promise.reject(new d.FailureToPromptError("Could not prompt for google one-tap"))]
                        }
                        return [2]
                    })
                })
            }, t.prototype._handleIdToken = function(t) {
                return r(this, void 0, void 0, function() {
                    return o(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t.credential ? [4, a.default(t.credential, this.analyticsHelper, !1, this.endpoint, this.site, this.jobId, void 0, !0, this.ceTrackingSource)] : [3, 2];
                            case 1:
                                e.sent(), e.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, t.prototype._handleDisplayMoment = function(t) {
                return r(this, void 0, void 0, function() {
                    return o(this, function(e) {
                        if (t.isDisplayed()) try {
                            this.analyticsHelper.fireOneTapPopupShownEvent()
                        } catch (t) {
                            this.errorLoggingHelper.logException(t)
                        } else t.getNotDisplayedReason();
                        return [2]
                    })
                })
            }, t.prototype._handleSkippedMoment = function(t) {
                return r(this, void 0, void 0, function() {
                    return o(this, function(e) {
                        return "user_cancel" === t.getSkippedReason() && this.analyticsHelper.fireOneTapDismissedEvent(), [2]
                    })
                })
            }, t.prototype._handleDismissedMoment = function(t) {
                return r(this, void 0, void 0, function() {
                    return o(this, function(e) {
                        return t.getMomentType(), [2]
                    })
                })
            }, t.prototype._handlePromptMomentNotification = function(t) {
                return r(this, void 0, void 0, function() {
                    var e;
                    return o(this, function(n) {
                        switch (n.label) {
                            case 0:
                                switch (e = t.getMomentType(), e) {
                                    case "display":
                                        return [3, 1];
                                    case "skipped":
                                        return [3, 3];
                                    case "dismissed":
                                        return [3, 5]
                                }
                                return [3, 7];
                            case 1:
                                return [4, this._handleDisplayMoment(t)];
                            case 2:
                                return n.sent(), [3, 8];
                            case 3:
                                return [4, this._handleSkippedMoment(t)];
                            case 4:
                                return n.sent(), [3, 8];
                            case 5:
                                return [4, this._handleDismissedMoment(t)];
                            case 6:
                                return n.sent(), [3, 8];
                            case 7:
                                this.errorLoggingHelper.logMessage("Moment type: " + e + " was not recognised."), n.label = 8;
                            case 8:
                                return [2]
                        }
                    })
                })
            }, t.prototype._disableAutoSelect = function() {
                try {
                    window.google.accounts.id.disableAutoSelect()
                } catch (t) {
                    throw this.errorLoggingHelper.logException(t), new d.FailureToDisableAutoSelectError("Error disabling auto select for one-tap when logging out")
                }
            }, t
        }();
    e.default = b
}, function(t, e, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        i = this && this.__awaiter || function(t, e, n, r) {
            return new(n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                        t(e)
                    })).then(a, s)
                }
                c((r = r.apply(t, e || [])).next())
            })
        },
        a = this && this.__generator || function(t, e) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = e.call(t, a)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        },
        s = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var c = function(t) {
        function e(e, n) {
            var r = t.call(this, "google-onetap-spinner-modal", e) || this;
            return r.brand = n, r
        }
        return o(e, t), e.prototype.html = function() {
            return '\n<div id="' + this.id + '" class="google-onetap-modal modal fade" tabindex="-1" role="dialog">\n    <div class="modal-dialog" role="document">\n        <div class="modal-content">\n            <div class="modal-body">\n                <svg id="google-onetap-spinner" viewBox="0 0 50 50" ng-show="locked">\n                    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>\n                </svg>\n                <span>Checking your account...</span>\n            </div>\n        </div>\x3c!-- /.modal-content --\x3e\n    </div>\x3c!-- /.modal-dialog --\x3e\n</div>\x3c!-- /.modal --\x3e\n'
        }, e.prototype.styles = function() {
            return "\n" + t.prototype.styles.call(this) + "\n#" + this.id + " .modal-body {\n    height: 40px;\n    line-height: 32px;\n}\n#" + this.id + " .modal-body {\n    height: 40px;\n}\n#google-onetap-spinner {\n    animation: google-onetap-rotate 2s linear infinite;\n    z-index: 2;\n    width: 28px;\n    height: 28px;\n    margin-left: -35px;\n    position: absolute;\n}\n#google-onetap-spinner .path {\n    stroke: #858585;\n    stroke-linecap: round;\n    animation: google-onetap-dash 1.5s ease-in-out infinite;\n}\n@keyframes google-onetap-rotate {\n    100% {\n        transform: rotate(360deg);\n    }\n}\n@keyframes google-onetap-dash {\n    0% {\n        stroke-dasharray: 1, 150;\n        stroke-dashoffset: 0;\n    }\n    50% {\n        stroke-dasharray: 90, 150;\n        stroke-dashoffset: -35;\n    }\n    100% {\n        stroke-dasharray: 90, 150;\n        stroke-dashoffset: -124;\n    }\n}\n"
        }, e.prototype.show = function(e, n) {
            return i(this, void 0, void 0, function() {
                return a(this, function(e) {
                    return t.prototype.show.call(this, this.html(), this.styles()), [2]
                })
            })
        }, e
    }(s(n(14)).default);
    e.default = c
}, function(t, e, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        i = this && this.__awaiter || function(t, e, n, r) {
            return new(n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                        t(e)
                    })).then(a, s)
                }
                c((r = r.apply(t, e || [])).next())
            })
        },
        a = this && this.__generator || function(t, e) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = e.call(t, a)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        },
        s = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var c = n(6),
        u = s(n(14)),
        l = s(n(27)),
        d = s(n(28)),
        p = s(n(29)),
        h = function(t) {
            function e(e, n, r) {
                var o = t.call(this, "google-onetap-confirmation-modal", e) || this;
                return o.siteIconLookup = {
                    totaljobs: p.default.Totaljobs,
                    careerstructure: p.default.CareerStructure,
                    "caterer.com": p.default.Caterer,
                    catererglobal: p.default.CatererGlobal,
                    cwjobs: p.default.CWJobs,
                    milkround: p.default.Milkround,
                    retailchoice: p.default.RetailChoice,
                    stepstonede: p.default.Stepstone,
                    stepstoneat: p.default.Stepstone,
                    stepstonebe: p.default.Stepstone,
                    stepstonefr: p.default.Stepstone,
                    stepstonenl: p.default.Stepstone,
                    pnet: p.default.PNet,
                    default: ""
                }, o.brand = n, o.languageAndCountry = r, o
            }
            return o(e, t), e.prototype.htmlSiteIcon = function() {
                if (!this.brand) return "";
                var t = this.brand.name || "",
                    e = this.siteIconLookup[t.toLowerCase()];
                return e || ""
            }, e.prototype.html = function() {
                var t = new d.default(this.brand, this.languageAndCountry).getLocalizedTextContent();
                return '\n<div id="' + this.id + '" class="google-onetap-modal modal fade in" tabindex="-1" role="dialog">\n    <div class="modal-dialog" role="document">\n        <div class="modal-content">\n            <div class="modal-header">\n                ' + this.htmlSiteIcon() + '\n                <h5 class="modal-heading">' + t.modalHeading + '</h5>\n                <button type="button" class="close" data-dismiss="modal">\n                    <svg width="15px" height="15px" viewBox="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                        <g id="Close" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                            <g id="Group-8" transform="translate(-0.500000, -0.500000)" fill="#000">\n                                <rect id="Rectangle" transform="translate(4.500000, 4.500000) rotate(45.000000) translate(-4.500000, -4.500000) " x="0" y="4" width="9" height="1"></rect>\n                                <rect id="Rectangle" transform="translate(4.500000, 4.500000) scale(-1, 1) rotate(45.000000) translate(-4.500000, -4.500000) " x="0" y="4" width="9" height="1"></rect>\n                            </g>\n                        </g>\n                    </svg>\n                </button>\n            </div>\n            <div class="modal-body">\n                <div class="envelope-message">\n                    <svg class="envelope-icon" width="30px" height="30px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                        <g id="First-Icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">\n                            <g id="Group-236" transform="translate(1.000000, 1.000000)" stroke="#000000" stroke-width="0.6">\n                                <path d="M11.7,5.25 L14.1,6.9 L14.1,13.2 C14.1,13.6968 13.6968,14.1 13.2,14.1 L1.2,14.1 C0.7032,14.1 0.3,13.6968 0.3,13.2 L0.3,6.9 L2.7,5.25" id="Stroke-385"></path>\n                                <polyline id="Stroke-386" points="2.1 12.3 5.1 9.9 9.3 9.9 12.3 12.3"></polyline>\n                                <line x1="14.1" y1="6.9" x2="10.5" y2="9.3" id="Stroke-387"></line>\n                                <line x1="0.3" y1="6.9" x2="3.9" y2="9.3" id="Stroke-388"></line>\n                                <polyline id="Stroke-389" points="11.7 8.4 11.7 0.3 2.7 0.3 2.7 8.4"></polyline>\n                                <line x1="4.5" y1="2.1" x2="5.7" y2="2.1" id="Stroke-390"></line>\n                                <line x1="5.7" y1="3.9" x2="9.9" y2="3.9" id="Stroke-391"></line>\n                                <line x1="4.5" y1="5.7" x2="9.9" y2="5.7" id="Stroke-392"></line>\n                                <line x1="4.5" y1="7.5" x2="9.9" y2="7.5" id="Stroke-393"></line>\n                            </g>\n                        </g>\n                    </svg>\n                    <strong class="modal-title">' + t.modalTitle + "</strong>\n                </div>\n                <p>\n                    " + t.informationParagraph + "\n                </p>\n                <p>\n                    " + t.controlParagraph + '\n                </p>\n            </div>\n            <div class="modal-footer">\n                <button type="button" class="btn btn-primary btn-block btn-font" data-dismiss="modal">' + t.confirmationButton + "</button>\n            </div>\n        </div>\x3c!-- /.modal-content --\x3e\n    </div>\x3c!-- /.modal-dialog --\x3e\n</div>\x3c!-- /.modal --\x3e\n" + this.addModalBackDropDiv() + "\n"
            }, e.prototype.addModalBackDropDiv = function() {
                return this.brand.brandGroup == c.BrandGroup.Stepstone || this.brand.brandGroup == c.BrandGroup.Totaljobs ? '<div class="modal-backdrop fade in"></div>' : ""
            }, e.prototype.styles = function() {
                var e = new l.default(this.id, this.brand);
                return "\n" + t.prototype.styles.call(this) + "\n" + e.getStyles() + "\n"
            }, e.prototype.getModalButtons = function(t) {
                return document.querySelectorAll("#" + t + " button")
            }, e.prototype.show = function() {
                return i(this, void 0, void 0, function() {
                    var e = this;
                    return a(this, function(n) {
                        return t.prototype.show.call(this, this.html(), this.styles()), [2, new Promise(function(t) {
                            var n = e.getModalButtons(e.id);
                            0 != n.length && n.forEach(function(e) {
                                e.addEventListener("click", function() {
                                    t()
                                })
                            })
                        })]
                    })
                })
            }, e
        }(u.default);
    e.default = h
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(6),
        o = function() {
            function t(t, e) {
                this.brand = e, this.id = t
            }
            return t.prototype.getStyles = function() {
                return "\n            " + this.getCommonStyles() + "\n            " + this.getBrandSpecificStyles() + "\n        "
            }, t.prototype.getCareerStructureStyles = function() {
                return "\n/* Link color */\n#" + this.id + " a {\n    color: #1e69a3;\n}\n\n/* Button color and button border color */\n#" + this.id + " .btn-primary {\n    color: #fff;\n    background-color: #1a6ba7;\n    border-color: #175d91;\n}\n"
            }, t.prototype.getCatererStyles = function() {
                return "\n/* Link color */\n#" + this.id + " a {\n    color: #924199;\n}\n\n/* Button color and button border color */\n#" + this.id + " .btn-primary {\n    color: #fff;\n    background-color: #924199;\n    border-color: #813987;\n}\n\n#" + this.id + " p {\n    font-size: 13px;\n    margin: 0 0 7px 0;\n}\n\n"
            }, t.prototype.getCatererGlobalStyles = function() {
                return "\n/* Link color */\n#" + this.id + " a {\n    color: #8e4fac;\n}\n\n/* Button color and button border color */\n#" + this.id + " .btn-primary {\n    color: #fff;\n    background-color: #8e4fac;\n    border-color: #80479b;\n    text-transform: uppercase;\n}\n\n#" + this.id + " .modal-header {\n\tfont-family: 'Open Sans',Arial,Helvetica,sans-serif;\n}\n"
            }, t.prototype.getCWJobsStyles = function() {
                return "\n/* Link color */\n#" + this.id + " a {\n    color: #d17119;\n}\n\n/* Button color and button border color */\n#" + this.id + " .btn-primary {\n    color: #fff;\n    background-color: #f89e1d;\n    border-color: #f49308;\n}\n\n#" + this.id + "  p {\n    font-size: 13px;\n    margin: 0 0 7px 0;\n}\n\n#" + this.id + " .modal-dialog {\n    margin: 30px auto;\n}\n\n#" + this.id + " .modal-dialog {\n    margin: 0 !important;\n}\n"
            }, t.prototype.getMilkroundStyles = function() {
                return "\n/* Link color */\n#" + this.id + " p a {\n    color: #026b99;\n}\n\n/* Button color and button border color */\n#" + this.id + " .btn-primary {\n    color: #fff;\n    background-color: #34a4d6;\n    border-color: #2897c8;\n    border-radius: 0;\n    font-size: 17px;\n    \n    width: 100%;\n    background-image: none;\n    border: 1px solid transparent;\n    margin-bottom: 0;\n    font-weight: 400;\n    text-align: center;\n    vertical-align: middle;\n    touch-action: manipulation;\n}\n\n#" + this.id + " .modal-content {\n    border-radius: 0;\n}\n\n\n#" + this.id + " p {\n    font-size: 13px;\n    margin: 0 0 7px 0;\n}\n\n#" + this.id + " .fade.in {\n    opacity: 1;\n}\n\n#" + this.id + " {\n    /* display: none; */\n    overflow: hidden;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1050;\n    -webkit-overflow-scrolling: touch;\n    outline: 0;\n}\n\n@media (min-width: 768px) {\n    .modal-dialog {\n        /* width: 600px; */\n        margin: 30px auto;\n    }\n}\n"
            }, t.prototype.getStepStoneDEStyles = function() {
                return "\n/* Link color */\n#" + this.id + " a {\n    color: #4088ee;\n    text-decoration: none;\n}\n\n/* Button color and button border color */\n#" + this.id + " .btn-primary {\n    color: #fff;\n    background-color: #4088ee;\n    border-color: rgba(0,0,0,0);\n}\n\n/* Confirmation modal */\n#" + this.id + " {\n    opacity: 1;\n}\n\n@media (min-width: 768px) {\n    #" + this.id + " .modal-dialog {\n        width: 400px;\n        position: absolute;\n        top: 100px;\n        right: 20px;\n        left: auto;\n        bottom: auto;\n    }\n}\n"
            }, t.prototype.getPNetStyles = function() {
                return "\n/* Link color */\n#" + this.id + " a {\n    color: #ed1b2e;\n    text-decoration: none;\n}\n\n/* Button color and button border color */\n#" + this.id + " .btn-primary {\n    color: #fff;\n    background-color: #ed1b2e;\n    border-color: rgba(0,0,0,0);\n}\n"
            }, t.prototype.getRetailChoiceStyles = function() {
                return "\n/* Link color */\n#" + this.id + " p a {\n    color: #00577c;\n}\n\n/* Button color and button border color */\n#" + this.id + " .btn-primary {\n    color: #fff;\n    background-color: #b90078;\n    border-color: #a00067;\n}\n"
            }, t.prototype.getBrandSpecificStyles = function() {
                switch (this.brand.siteId) {
                    case r.Site.CareerStructure:
                        return this.getCareerStructureStyles();
                    case r.Site.Caterer:
                        return this.getCatererStyles();
                    case r.Site.CatererGlobal:
                        return this.getCatererGlobalStyles();
                    case r.Site.CWJobs:
                        return this.getCWJobsStyles();
                    case r.Site.Milkround:
                        return this.getMilkroundStyles();
                    case r.Site.StepStoneDE:
                        return this.getStepStoneDEStyles();
                    case r.Site.RetailChoice:
                        return this.getRetailChoiceStyles();
                    default:
                        return ""
                }
            }, t.prototype.getCommonStyles = function() {
                return "\n#" + this.id + " .modal-header {\n    display: flex;\n    align-items: center;\n}\n#" + this.id + " .header-icon {\n    margin-right: 10px;\n}\n#" + this.id + " .modal-heading {\n    font-size: 14px;\n    color: #757575;\n    font-family: Arial, Helvetica, sans-serif;\n}\n#" + this.id + " .modal-header .close {\n    margin: -10px -10px -10px auto;\n    background: none;\n}\n#" + this.id + " .envelope-message {\n    border: none;\n    display: flex;\n    align-items: center;\n    padding: 10px 0;\n    text-align: left;\n}\n#" + this.id + " .modal-body {\n    text-align: left;\n    font-family: Arial, Helvetica, sans-serif;\n}\n#" + this.id + " .modal-title {\n    font-size: 14px;\n    color: #000000;\n}\n#" + this.id + " .envelope-icon {\n    margin-right: 10px;\n}\n#" + this.id + " .envelope-message h5 {\n    font-weight: bold;\n    flex: 1 1 auto;\n}\n#" + this.id + " .modal-footer {\n    border: none;\n    padding: 5px 15px 15px 15px;\n    text-align: center;\n}\n#" + this.id + " .btn.btn-default {\n    background: none;\n    width: 100%;\n}\n#" + this.id + " .modal-footer .btn-font {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n/* --- Confirmation Modal Styles */\n\n/* Confirmation Modal styles - google-onetap-confirmation-modal */\n\n#" + this.id + " .fade {\n    /* opacity: 0; */\n    -webkit-transition: opacity .15s linear;\n    -o-transition: opacity .15s linear;\n    transition: opacity .15s linear;\n}\n\n#" + this.id + " .fade.in {\n    /* opacity: 1; */\n}\n\n#" + this.id + " {\n    /* display: none; */\n    overflow: hidden;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1050;\n    -webkit-overflow-scrolling: touch;\n    outline: 0;\n}\n\n/* Confirmation Modal styles - modal-dialog */\n\n/* @media (min-width: 768px) */\n#" + this.id + " .modal-dialog {\n    /* width: 600px; */\n    /* margin: 30px auto; */\n}\n\n#" + this.id + " .modal-dialog {\n    /* position: relative; */\n    /* width: auto; */ \n    /* margin: 10px; */\n}\n\n#" + this.id + " .modal.in .modal-dialog {\n    -webkit-transform: translate(0,0);\n    -ms-transform: translate(0,0);\n    -o-transform: translate(0,0);\n    transform: translate(0,0);\n}\n\n#" + this.id + " .modal.fade .modal-dialog {\n    /* -webkit-transform: translate(0,-25%); */\n    /* -ms-transform: translate(0,-25%); */\n    /* -o-transform: translate(0,-25%); */\n    /* transform: translate(0,-25%); */\n    -webkit-transition: -webkit-transform .3s ease-out;\n    -moz-transition: -moz-transform .3s ease-out;\n    -o-transition: -o-transform .3s ease-out;\n    transition: transform .3s ease-out;\n}\n\n/* Confirmation Modal styles - modal-content */\n/*\n@media (min-width: 768px) {\n    #" + this.id + " .modal-content {\n        -webkit-box-shadow: 0 5px 15px rgb(0 0 0 / 50%);\n        box-shadow: 0 5px 15px rgb(0 0 0 / 50%);\n    }\n}\n*/\n\n#" + this.id + " .modal-content {\n    position: relative;\n    background-color: #fff;\n    border: 1px solid #999;\n    border: 1px solid rgba(0,0,0,.2);\n    border-radius: 4px;\n    -webkit-box-shadow: 0 5px 15px rgb(0 0 0 / 50%);\n    box-shadow: 0 5px 15px rgb(0 0 0 / 50%);\n    background-clip: padding-box;\n    outline: 0;\n    line-height: 1.42857143 !important;\n}\n\n/* Confirmation Modal Styles - modal header */\n\n#" + this.id + " .btn-group-vertical>.btn-group:after, \n#" + this.id + " .btn-group-vertical>.btn-group:before, \n#" + this.id + " .btn-toolbar:after, \n#" + this.id + " .btn-toolbar:before, \n#" + this.id + " .clearfix:after, \n#" + this.id + " .clearfix:before, \n#" + this.id + " .container-fluid:after, \n#" + this.id + " .container-fluid:before, \n#" + this.id + " .container:after, \n#" + this.id + " .container:before, \n#" + this.id + " .dl-horizontal dd:after, \n#" + this.id + " .dl-horizontal dd:before, \n#" + this.id + " .form-horizontal .form-group:after, \n#" + this.id + " .form-horizontal .form-group:before, \n#" + this.id + " .modal-footer:after, \n#" + this.id + " .modal-footer:before, \n#" + this.id + " .modal-header:after, \n#" + this.id + " .modal-header:before, \n#" + this.id + " .nav:after, \n#" + this.id + " .nav:before, \n#" + this.id + " .navbar-collapse:after, \n#" + this.id + " .navbar-collapse:before, \n#" + this.id + " .navbar-header:after, \n#" + this.id + " .navbar-header:before, \n#" + this.id + " .navbar:after, \n#" + this.id + " .navbar:before, \n#" + this.id + " .pager:after, \n#" + this.id + " .pager:before, \n#" + this.id + " .panel-body:after, \n#" + this.id + " .panel-body:before, \n#" + this.id + " .row:after, \n#" + this.id + ' .row:before {\n    content: " ";\n    display: table;\n}\n\n#' + this.id + " .btn-group-vertical>.btn-group:after, \n#" + this.id + " .btn-toolbar:after, \n#" + this.id + " .clearfix:after, \n#" + this.id + " .container-fluid:after, \n#" + this.id + " .container:after, \n#" + this.id + " .dl-horizontal dd:after, \n#" + this.id + " .form-horizontal .form-group:after, \n#" + this.id + " .modal-footer:after, \n#" + this.id + " .modal-header:after, \n#" + this.id + " .nav:after, \n#" + this.id + " .navbar-collapse:after, \n#" + this.id + " .navbar-header:after, \n#" + this.id + " .navbar:after, \n#" + this.id + " .pager:after, \n#" + this.id + " .panel-body:after, \n#" + this.id + " .row:after {\n    clear: both;\n}\n\n#" + this.id + " .modal-header {\n    /* padding: 15px; */\n    border-bottom: 1px solid #e5e5e5;\n}\n\n/* Confirmation Modal Styles - header-icon  */\n\n#" + this.id + " svg:not(:root) {\n    overflow: hidden;\n}\n\n/* Confirmation Modal Styles - modal-heading */\n\n#" + this.id + " .h1, \n#" + this.id + " .h2, \n#" + this.id + " .h3, \n#" + this.id + " .h4, \n#" + this.id + " .h5, \n#" + this.id + " .h6, \n#" + this.id + " h1, \n#" + this.id + " h2, \n#" + this.id + " h3, \n#" + this.id + " h4, \n#" + this.id + " h5, \n#" + this.id + " h6 {\n    font-family: inherit;\n    font-weight: 500;\n    line-height: 1.1;\n    color: inherit;\n}\n\n#" + this.id + " .h5, \n#" + this.id + " h5 {\n    font-size: 16px;\n}\n\n#" + this.id + " .h4, \n#" + this.id + " .h5, \n#" + this.id + " .h6, \n#" + this.id + " h4, \n#" + this.id + " h5, \n#" + this.id + " h6 {\n    margin-top: 10.5px;\n    margin-bottom: 10.5px;\n}\n\n#" + this.id + " .h1, \n#" + this.id + " .h2, \n#" + this.id + " .h3, \n#" + this.id + " .h4, \n#" + this.id + " .h5, \n#" + this.id + " .h6, \n#" + this.id + " h1, \n#" + this.id + " h2, \n#" + this.id + " h3, \n#" + this.id + " h4, \n#" + this.id + " h5, \n#" + this.id + " h6 {\n    font-family: TotalSans,Arial,Helvetica,sans-serif;\n    font-weight: 500;\n    line-height: 1.1;\n    color: inherit;\n}\n\n/* Confirmation Modal Styles - modal-heading close button */\n\n#" + this.id + " .modal-dialog .close {\n    /* background: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%3E%3Cg%20fill%3D%22%23b2b2b2%22%3E%3Cpath%20d%3D%22M30%202c15.4%200%2028%2012.6%2028%2028S45.4%2058%2030%2058%202%2045.4%202%2030%2014.6%202%2030%202m0-2C13.4%200%200%2013.4%200%2030s13.4%2030%2030%2030%2030-13.4%2030-30S46.6%200%2030%200z%22%2F%3E%3Cpath%20d%3D%22M32.8%2030l9.7-9.7c.7-.7.7-1.8%200-2.5l-.3-.3c-.7-.7-1.8-.7-2.5%200L30%2027.2l-9.7-9.7c-.7-.7-1.8-.7-2.5%200l-.3.3c-.7.7-.7%201.8%200%202.5l9.7%209.7-9.7%209.7c-.7.7-.7%201.8%200%202.5l.3.3c.7.7%201.8.7%202.5%200l9.7-9.7%209.7%209.7c.7.7%201.8.7%202.5%200l.3-.3c.7-.7.7-1.8%200-2.5L32.8%2030%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E) no-repeat 0 0; */\n    background-size: 30px;\n    display: block;\n    width: 30px;\n    height: 30px;\n    outline: 0;\n}\n\n#" + this.id + " .modal-header button.close {\n    width: 30px;\n}\n\n/* #" + this.id + " .modal-header .close {\n    margin-top: -2px;\n} */\n\n#" + this.id + " button.close {\n    padding: 0;\n    cursor: pointer;\n    background: 0 0;\n    border: 0;\n    -webkit-appearance: none;\n}\n\n#" + this.id + " .close {\n    float: right;\n    font-size: 22.5px;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    opacity: .2;\n}\n\n#" + this.id + " button, \n#" + this.id + " input, \n#" + this.id + " select, \n#" + this.id + " textarea {\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n}\n\n#" + this.id + " button, \n#" + this.id + " html input[type=button], \n#" + this.id + " input[type=reset], \n#" + this.id + " input[type=submit] {\n    -webkit-appearance: button;\n    cursor: pointer;\n}\n\n#" + this.id + " button, \n#" + this.id + " select {\n    text-transform: none;\n}\n\n#" + this.id + " button {\n    overflow: visible;\n}\n\n#" + this.id + " button, \n#" + this.id + " input, \n#" + this.id + " optgroup, \n#" + this.id + " select, \n#" + this.id + " textarea {\n    color: inherit;\n    font: inherit;\n    margin: 0;\n}\n\n/* Confirmation Modal Styles - modal-body */\n\n#" + this.id + " .modal-body {\n    position: relative;\n    /* padding: 15px; */\n}\n\n/* Confirmation Modal Styles - modal-title */\n\n#" + this.id + " .modal-title {\n    margin: 0;\n    line-height: 1.42857143;\n}\n\n#" + this.id + " b, \n#" + this.id + " strong {\n    font-weight: 700;\n}\n\n/* Confirmation Modal Styles - p */\n\n#" + this.id + " p {\n    font-size: 13px;\n    margin: 0 0 7px 0;\n}\n\n/* #" + this.id + " p {\n    margin: 0 0 10.5px;\n} */\n\n/* Confirmation Modal Styles - a */\n\n#" + this.id + " .modal-body p a {\n    text-decoration: underline;\n}\n\n/* TODO : extract this */\n#" + this.id + " a {\n    color: #169000;\n}\n\n#" + this.id + " a {\n    /* color: #dd5800; */\n    /* text-decoration: none; */\n}\n\n#" + this.id + " a {\n    background-color: transparent;\n}\n\n/* Confirmation Modal Styles - modal-footer */\n\n/* div.modal-footer { */\n    /* padding: 15px !important; */\n    /* /* text-align: right; */ */\n    /* /* border-top: 1px solid #e5e5e5; */ */\n/* } */\n\n/* Confirmation Modal Styles - footer button */\n\n#" + this.id + " button, \n#" + this.id + " input, \n#" + this.id + " select, \n#" + this.id + " textarea {\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n}\n\n#" + this.id + " button, \n#" + this.id + " html input[type=button], \n#" + this.id + " input[type=reset], \n#" + this.id + " input[type=submit] {\n    -webkit-appearance: button;\n    cursor: pointer;\n}\n\n#" + this.id + " button, \n#" + this.id + " select {\n    text-transform: none;\n}\n\n#" + this.id + " button {\n    overflow: visible;\n}\n\n#" + this.id + " button, \n#" + this.id + " input, \n#" + this.id + " optgroup, \n#" + this.id + " select, \n#" + this.id + " textarea {\n    color: inherit;\n    font: inherit;\n    margin: 0;\n}\n\n/* TODO : extract this */\n#" + this.id + " .btn-primary {\n    color: #fff;\n    background-color: #dd5800;\n    border-color: #c44e00;\n}\n\n#" + this.id + " .btn {\n    display: inline-block;\n    margin-bottom: 0;\n    font-weight: 400;\n    text-align: center;\n    vertical-align: middle;\n    touch-action: manipulation;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 6px 12px;\n    font-size: 15px;\n    line-height: 1.42857143;\n    border-radius: 4px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n/* Confirmation Modal Styles - modal-backdrop fade in */\n\n.modal-backdrop.in {\n    opacity: .5;\n}\n.modal-backdrop.fade {\n    /* opacity: 0; */\n}\n\n.modal-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1040;\n    background-color: #000;\n}\n\n/* Confirmation Modal Styles - overrides */\n\n#" + this.id + " .modal-footer button {\n    width: 100%;\n}\n\n/* --- Confirmation Modal Styles */    \n"
            }, t
        }();
    e.default = o
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(6),
        o = function() {
            function t(t, e) {
                this.brand = t, this.language = e
            }
            return t.prototype.getLocalizedTextContent = function() {
                return {
                    modalHeading: this.getModalHeadingText(),
                    modalTitle: this.getModalTitleText(),
                    informationParagraph: this.getInformationParagraphText(),
                    controlParagraph: this.getControlParagraphText(),
                    confirmationButton: this.getConfirmationButtonText()
                }
            }, t.prototype.getModalHeadingText = function() {
                switch (this.language) {
                    case "de-AT":
                    case "de-DE":
                        return "Account erstellt mit Google";
                    case "fr-FR":
                    case "fr-BE":
                        return "Compte cr&eacute;&eacute; avec Google";
                    case "nl-NL":
                    case "nl-BE":
                        return "Account aangemaakt met Google";
                    default:
                        return "Account created using Google"
                }
            }, t.prototype.getModalTitleText = function() {
                switch (this.language) {
                    case "de-AT":
                    case "de-DE":
                        return "Verpassen Sie keine Chance mehr";
                    case "fr-FR":
                    case "fr-BE":
                        return "Ne manquez plus aucune opportunit&eacute;";
                    case "nl-NL":
                    case "nl-BE":
                        return "Laat geen kansen meer liggen";
                    default:
                        return "Never miss an opportunity"
                }
            }, t.prototype.getInformationParagraphText = function() {
                switch (this.language) {
                    case "de-AT":
                    case "de-DE":
                        return "Als Teil des Services, f&#252;r den Sie sich angemeldet haben, schickt " + this.getBrandName() + " Ihnen passende Jobs per E-Mail zu und macht Ihr Profil f&#252;r Arbeitgeber auffindbar, au&#223;er Sie wollen das nicht. Zudem k&#246;nnen Sie sich schnell auf Jobs bewerben.";
                    case "fr-FR":
                    case "fr-BE":
                        return "Dans le cadre du service auquel vous avez souscrit, " + this.getBrandName() + " vous envoie par mail des offres d&apos;emploi qui vous correspondent et rend votre profil accessible aux employeurs - sauf si vous ne le souhaitez pas. Vous pouvez &eacute;galement postuler &agrave; des emplois rapidement.";
                    case "nl-NL":
                        return "In het kader van de services waar je voor bent aangemeld, stuurt " + this.getBrandName() + " je per e-mail passende vacatures en zorgt het ervoor dat je profiel zichtbaar is voor werkgevers, tenzij je dat niet wilt. Bovendien kun je via onze service snel reageren op vacatures.";
                    case "nl-BE":
                        return "In het kader van de service waar je voor bent aangemeld, stuurt " + this.getBrandName() + " je per e-mail passende vacatures en maakt het je profiel zichtbaar voor werkgevers, tenzij je dat niet wilt. Bovendien kun je via onze services snel op vacatures reageren.";
                    default:
                        return "As part of the service you’ve signed up to, " + this.getBrandName() + " will send you relevant jobs, make your profile searchable unless you ask us not to, and enable you to apply for jobs."
                }
            }, t.prototype.getBrandName = function() {
                return this.brand.brandGroup == r.BrandGroup.Stepstone ? this.brand.siteId == r.Site.Pnet ? this.brand.name.charAt(0).toUpperCase() + this.brand.name.slice(1) : "StepStone" : this.brand.name
            }, t.prototype.getJobAlertsPath = function() {
                return this.brand.brandGroup == r.BrandGroup.Stepstone ? "/5/notifications" : "/Authenticated/Default.aspx"
            }, t.prototype.getCloseAccountPath = function() {
                return this.brand.brandGroup == r.BrandGroup.Stepstone ? "/candidate/settings" : "/Authenticated/Unsubscribe.aspx"
            }, t.prototype.getControlParagraphText = function() {
                switch (this.language) {
                    case "de-AT":
                    case "de-DE":
                        return '<a href="' + this.getJobAlertsPath() + '" target="_blank" rel="noopener noreferrer">In Ihrem Account</a> k&#246;nnen Sie jederzeit Benachrichtigungen hinzuf&#252;gen, bearbeiten oder pausieren. Wenn Sie unseren Service nicht mehr brauchen, k&#246;nnen Sie einfach <a href="' + this.getCloseAccountPath() + '" target="_blank" rel="noopener noreferrer">Ihr Konto schlie&#223;en</a>.';
                    case "fr-FR":
                    case "fr-BE":
                        return '<a href="' + this.getJobAlertsPath() + '" target="_blank" rel="noopener noreferrer">Dans votre compte</a> vous pouvez ajouter, modifier ou interrompre les notifications &agrave; tout moment. Si vous n&apos;avez plus besoin de nos services, vous pouvez facilement <a href="' + this.getCloseAccountPath() + '" target="_blank" rel="noopener noreferrer">fermer votre compte</a>.';
                    case "nl-NL":
                        return '<a href="' + this.getJobAlertsPath() + '" target="_blank" rel="noopener noreferrer">In je account</a> kun je op elk gewenst moment meldingen toevoegen, bewerken of stopzetten. Als je onze service niet meer nodig hebt, kun je simpelweg <a href="' + this.getCloseAccountPath() + '" target="_blank" rel="noopener noreferrer">je account sluiten</a>.';
                    case "nl-BE":
                        return '<a href="' + this.getJobAlertsPath() + '" target="_blank" rel="noopener noreferrer">In je account</a> kun je op elk gewenst moment meldingen toevoegen, bewerken of stopzetten. Als je onze services niet meer nodig hebt, kun je simpelweg <a href="' + this.getCloseAccountPath() + '" target="_blank" rel="noopener noreferrer">je account sluiten</a>.';
                    default:
                        return 'You can add, edit or pause job alerts at any time  <a href="' + this.getJobAlertsPath() + '" target="_blank" rel="noopener noreferrer">in your account</a>. If you do not wish to be signed up then please <a href="' + this.getCloseAccountPath() + '" target="_blank" rel="noopener noreferrer">close your account</a>.'
                }
            }, t.prototype.getConfirmationButtonText = function() {
                switch (this.language) {
                    case "de-AT":
                    case "de-DE":
                        return "Alles klar";
                    case "fr-FR":
                    case "fr-BE":
                        return "J'ai compris";
                    case "nl-NL":
                    case "nl-BE":
                        return "Begrepen";
                    default:
                        return "Got it"
                }
            }, t
        }();
    e.default = o
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.default = {
        Totaljobs: '\n    <svg class="header-icon" width="17px" height="17px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g id="Totaljobs-Logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <rect id="Rectangle" fill="#32C100" x="3.45" y="6.3" width="5.4" height="5.4"></rect>\n            <rect id="Rectangle" fill="#32C100" x="0.75" y="6.66133815e-16" width="10.8" height="5.4"></rect>\n        </g>\n    </svg>\n    ',
        CareerStructure: '\n    <svg class="header-icon" width="17px" height="17px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g id="CareerStructure-Logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g id="download-(1)" transform="translate(1.500000, 0.750000)" fill-rule="nonzero">\n                <polygon id="Path" fill="#2A9DD8" points="0 1.91808 0 8.74368 4.70016 7.84512 4.73472 2.78208"></polygon>\n                <path d="M4.70016,7.84512 L0,8.74368 L2.69568,10.7136 L8.91648,9.22752 L4.70016,7.84512 Z M2.69568,0 L0,1.91808 L4.70016,2.78208 L8.91648,1.45152 L2.69568,0 Z" id="Shape" fill="#46B7EC"></path>\n                <polygon id="Path" fill="#000000" points="4.70016 2.78208 4.70016 7.84512 8.91648 9.22752 8.91648 1.45152"></polygon>\n                <polygon id="Path" fill="#000000" opacity="0.702" points="2.69568 0 2.69568 10.7136 8.91648 9.22752 8.91648 1.45152"></polygon>\n            </g>\n        </g>\n    </svg>\n    ',
        Caterer: '\n    <svg class="header-icon" width="17px" height="17px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g id="Caterer-Logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g id="download-(3)" transform="translate(0.600000, 0.525000)" fill-rule="nonzero">\n                <polygon id="Path" fill="#FF8D27" points="0 5.41885575 5.41777425 5.41885575 5.41777425 10.8360893 0 10.8360893"></polygon>\n                <polygon id="Path" fill="#333333" points="5.416152 5.41885575 10.8333855 5.41885575 10.8333855 10.8360893 5.416152 10.8360893"></polygon>\n                <polygon id="Path" fill="#924199" points="0 0 5.4172335 0 5.4172335 5.418315 0 5.418315"></polygon>\n                <polygon id="Path" fill="#FFCF1A" points="5.41669275 0 10.8339263 0 10.8339263 5.418315 5.41669275 5.418315"></polygon>\n                <path d="M7.920906,0.5288535 L7.87710525,0.5288535 C7.88251275,0.6521445 7.91387625,1.41622425 7.88792025,1.50382575 C7.87277925,1.55790075 7.853853,1.5800715 7.83276375,1.583316 L7.83276375,1.5843975 L7.82519325,1.5843975 L7.82519325,1.583316 C7.80464475,1.57953075 7.78625925,1.55681925 7.77003675,1.50382575 C7.74299925,1.41622425 7.7359695,0.6521445 7.7359695,0.5288535 L7.672161,0.5288535 C7.68351675,1.416765 7.66080525,1.418928 7.6364715,1.50382575 C7.61970825,1.55790075 7.60132275,1.5800715 7.5802335,1.583316 L7.5802335,1.5843975 L7.5715815,1.5843975 L7.5715815,1.583316 C7.55157375,1.57953075 7.53318825,1.55681925 7.516425,1.50382575 C7.490469,1.41622425 7.5218325,0.6521445 7.52724,0.5288535 L7.477491,0.5288535 C7.477491,0.5288535 7.28931,1.6774065 7.423416,1.80015675 C7.477491,1.849365 7.538055,1.87802475 7.60348575,1.8915435 C7.59158925,2.2722315 7.52453625,4.388727 7.58077425,4.63368675 C7.61538225,4.784556 7.65539775,4.8462015 7.69865775,4.858098 L7.69865775,4.860261 L7.7078505,4.85972025 L7.717584,4.860261 L7.717584,4.858098 C7.760844,4.8462015 7.799778,4.784556 7.83492675,4.63368675 C7.89116475,4.38710475 7.82411175,2.2527645 7.81221525,1.88667675 C7.87325957,1.87170722 7.92970306,1.84200012 7.97660325,1.80015675 C8.10854625,1.6774065 7.920906,0.5288535 7.920906,0.5288535 M8.40595875,0.536424 L8.40595875,1.819083 C8.3978475,2.0386275 8.321061,4.37196375 8.381625,4.630983 C8.41569225,4.78401525 8.45787075,4.84512 8.50221225,4.85755725 L8.50221225,4.85972025 L8.511405,4.8591795 L8.52059775,4.85972025 L8.52059775,4.85755725 C8.56493925,4.84566075 8.60603625,4.7834745 8.64172575,4.630983 C8.70120825,4.3725045 8.62550325,2.06728725 8.617392,1.82286825 C8.68524113,1.80157317 8.74997247,1.77138946 8.809899,1.73310375 C9.01971,1.59791625 8.686608,0.620781 8.40595875,0.536424" id="Shape" fill="#1E1B1C"></path>\n                <g id="Group" transform="translate(1.081500, 0.540750)" fill="#FFFFFF">\n                    <path d="M1.9467,1.68551775 C2.26990654,1.53730543 2.44573058,1.18351685 2.36869343,0.836393477 C2.29165629,0.489270103 1.98267753,0.243073881 1.62711675,0.24548272 C1.2096427,0.24579827 0.871203785,0.583995267 0.8706075,1.001469 C0.8706075,1.3053705 1.0501365,1.5649305 1.308615,1.68551775 L1.267518,1.92236625 L0.9073785,4.04210625 L2.346855,4.04210625 L1.9867155,1.92236625 L1.9467,1.68551775 M7.4569425,9.688077 L6.62905425,9.688077 C6.62905425,9.688077 6.28081125,7.0178535 6.530097,6.7323375 C6.63986925,6.607965 6.76424175,6.540912 6.89726625,6.512793 L6.89726625,5.74655025 L6.8750955,5.74655025 L6.8750955,5.47184925 L7.21090125,5.47184925 L7.21090125,5.74655025 L7.189812,5.74655025 L7.189812,6.512793 C7.3228365,6.5419935 7.44666825,6.60850575 7.55698125,6.7323375 C7.8051855,7.01731275 7.4569425,9.688077 7.4569425,9.688077 M7.37204475,7.460187 C7.3768401,7.3394449 7.31512325,7.22577407 7.21124983,7.16403298 C7.1073764,7.10229189 6.97803184,7.10239817 6.87426001,7.16430988 C6.77048819,7.22622159 6.70895823,7.33999369 6.713952,7.46072775 C6.72125386,7.63726435 6.86657053,7.77658009 7.04325801,7.77643502 C7.21994549,7.77628973 7.36503302,7.63673536 7.37204475,7.460187 M2.39714475,6.240255 C2.31316831,6.24063291 2.23049172,6.261024 2.15597025,6.2997375 C2.06620575,6.06667425 1.85747625,5.90336775 1.613598,5.90336775 C1.3680975,5.90336775 1.1582865,6.0704595 1.07014425,6.30568575 C1.00311064,6.2764432 0.930763833,6.26134794 0.8576295,6.26134425 C0.57589875,6.26134425 0.34770225,6.476022 0.34770225,6.74153025 C0.34770225,7.0070385 0.57589875,7.22280011 0.8576295,7.22280011 C1.00425806,7.22323906 1.14426354,7.16177803 1.24318425,7.053543 C1.34484525,7.14492975 1.47246225,7.2017085 1.613598,7.2017085 C1.76663025,7.2017085 1.90506225,7.135737 2.00888625,7.03029075 C2.10796686,7.13982976 2.24890303,7.20214046 2.396604,7.2017085 C2.67833475,7.2017085 2.90653125,6.98703075 2.90653125,6.7215225 C2.90653125,6.4554735 2.6788755,6.240255 2.39714475,6.240255 M0.92738625,9.037014 L2.32035825,9.037014 L2.32035825,9.385257 L0.92738625,9.385257 L0.92738625,9.037014 Z M2.32143975,7.377993 C2.20872346,7.36653264 2.10041422,7.3281422 2.00564175,7.26605775 C1.77877821,7.41651576 1.48576509,7.42366242 1.25183625,7.28444325 C1.15486253,7.34865184 1.04366797,7.38819181 0.927927,7.399623 L0.927927,8.87641125 L2.320899,8.87641125 L2.320899,7.377993" id="Shape"></path>\n                </g>\n            </g>\n        </g>\n    </svg>\n    ',
        CatererGlobal: '\n    <svg class="header-icon" width="17px" height="17px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <defs>\n        <linearGradient x1="74.5013842%" y1="129.047765%" x2="15.1212262%" y2="-54.6792941%" id="linearGradient-1">\n            <stop stop-color="#662181" offset="0%"></stop>\n            <stop stop-color="#8E6BA2" offset="70.79%"></stop>\n            <stop stop-color="#662181" offset="100%"></stop>\n        </linearGradient>\n        <linearGradient x1="82.3401881%" y1="135.788443%" x2="15.4823806%" y2="-48.3700472%" id="linearGradient-2">\n            <stop stop-color="#662181" offset="0%"></stop>\n            <stop stop-color="#8E6BA2" offset="70.79%"></stop>\n            <stop stop-color="#662181" offset="100%"></stop>\n        </linearGradient>\n        <linearGradient x1="129.413784%" y1="72.0956187%" x2="-72.1696742%" y2="14.6721427%" id="linearGradient-3">\n            <stop stop-color="#662181" offset="0%"></stop>\n            <stop stop-color="#8E6BA2" offset="70.79%"></stop>\n            <stop stop-color="#662181" offset="100%"></stop>\n        </linearGradient>\n        <linearGradient x1="145.266986%" y1="79.9973493%" x2="-47.1480861%" y2="20.9475693%" id="linearGradient-4">\n            <stop stop-color="#662181" offset="0%"></stop>\n            <stop stop-color="#8E6BA2" offset="70.79%"></stop>\n            <stop stop-color="#662181" offset="100%"></stop>\n        </linearGradient>\n        <linearGradient x1="147.135829%" y1="76.4834568%" x2="-67.9192513%" y2="17.8696667%" id="linearGradient-5">\n            <stop stop-color="#662181" offset="0%"></stop>\n            <stop stop-color="#8E6BA2" offset="70.79%"></stop>\n            <stop stop-color="#662181" offset="100%"></stop>\n        </linearGradient>\n        <linearGradient x1="74.7406365%" y1="134.503155%" x2="19.3022504%" y2="-55.0165049%" id="linearGradient-6">\n            <stop stop-color="#662181" offset="0%"></stop>\n            <stop stop-color="#8E6BA2" offset="70.79%"></stop>\n            <stop stop-color="#662181" offset="100%"></stop>\n        </linearGradient>\n        <linearGradient x1="306.20069%" y1="172.227405%" x2="-248.444138%" y2="-95.1417265%" id="linearGradient-7">\n            <stop stop-color="#662D91" offset="0%"></stop>\n            <stop stop-color="#8E6BA2" offset="70.79%"></stop>\n            <stop stop-color="#662D91" offset="100%"></stop>\n        </linearGradient>\n        <linearGradient x1="81.8095383%" y1="86.9373624%" x2="-105.094825%" y2="-60.2156242%" id="linearGradient-8">\n            <stop stop-color="#662181" offset="0%"></stop>\n            <stop stop-color="#8E6BA2" offset="70.79%"></stop>\n            <stop stop-color="#662181" offset="100%"></stop>\n        </linearGradient>\n        <linearGradient x1="128.642474%" y1="124.911424%" x2="-46.0067762%" y2="-42.4756687%" id="linearGradient-9">\n            <stop stop-color="#662181" offset="0%"></stop>\n            <stop stop-color="#8E6BA2" offset="70.79%"></stop>\n            <stop stop-color="#662181" offset="100%"></stop>\n        </linearGradient>\n    </defs>\n    <g id="CatererGlobal-Logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="CG-Logo-(1)" transform="translate(2.000000, 1.000000)" fill-rule="nonzero">\n            <g id="Group">\n                <path d="M5.14404,6.62904 C4.22928,6.90228 3.39768,6.84288 2.66112,6.45084 C1.92456,6.0588 1.41372,5.39352 1.1286,4.46688 C0.84348,3.54024 0.90288,2.72052 1.3068,1.98396 C1.71072,1.2474 2.38788,0.73656 3.33828,0.45144 C4.24116,0.1782 5.049,0.2376 5.78556,0.62964 L5.35788,0.0594 C4.6926,8.67361738e-19 3.93228,-0.0594 3.19572,0.15444 C1.94832,0.5346 1.4256,0.98604 0.78408,1.86516 C0.14256,2.74428 -0.04752,3.8016 0.2376,4.74012 C0.5346,5.7024 1.17612,6.60528 2.23344,6.92604 C3.21948,7.23492 3.90852,7.28244 5.12028,6.91416 C5.78556,6.7122 6.40332,6.43896 6.86664,6.02316 L6.64092,5.74992 C6.26076,6.15384 5.7618,6.43896 5.14404,6.62904 Z" id="Shape" fill="#231F20"></path>\n                <path d="M4.02732,0.98604 C4.05108,1.0098 6.37956,2.98188 5.1678,5.92812 L5.25096,5.96376 C6.49836,2.95812 4.11048,0.93852 4.08672,0.91476 L4.02732,0.98604 Z" id="Path" fill="url(#linearGradient-1)"></path>\n                <path d="M4.53816,6.07068 L4.59756,5.98752 C1.80576,4.0392 3.35016,1.11672 3.37392,1.08108 L3.27888,1.03356 C3.267,1.0692 1.6632,4.07484 4.53816,6.07068 Z" id="Path" fill="url(#linearGradient-2)"></path>\n                <path d="M2.11464,4.79952 L2.09088,4.88268 C4.85892,5.7618 6.80724,3.8016 6.831,3.77784 L6.7716,3.71844 C6.74784,3.7422 4.83516,5.66676 2.11464,4.79952 Z" id="Path" fill="url(#linearGradient-3)"></path>\n                <path d="M1.61568,3.37392 L1.68696,3.43332 C3.75408,1.10484 6.52212,2.23344 6.54588,2.24532 L6.58152,2.16216 C6.54588,2.1384 3.73032,0.98604 1.61568,3.37392 Z" id="Path" fill="url(#linearGradient-4)"></path>\n                <polygon id="Path" fill="url(#linearGradient-5)" points="1.98396 4.02732 2.00772 4.11048 6.42708 2.94624 6.40332 2.86308"></polygon>\n                <polygon id="Path" fill="url(#linearGradient-6)" points="3.564 1.11672 4.84704 5.98752 4.95396 5.96376 3.67092 1.09296"></polygon>\n                <path d="M5.4648,1.14048 C5.65488,0.98604 5.83308,0.87912 5.97564,0.81972 C6.13008,0.76032 6.2964,0.72468 6.4746,0.72468 C6.67656,0.72468 6.831,0.7722 6.96168,0.85536 C7.10424,0.96228 7.1874,1.09296 7.1874,1.2474 C7.1874,1.34244 7.16364,1.41372 7.10424,1.485 C7.04484,1.5444 6.97356,1.58004 6.8904,1.58004 C6.75972,1.58004 6.64092,1.50876 6.534,1.37808 L6.37956,1.188 C6.30828,1.09296 6.18948,1.04544 6.04692,1.04544 C5.89248,1.04544 5.73804,1.11672 5.57172,1.27116 L5.4648,1.14048 Z" id="Path" fill="url(#linearGradient-7)"></path>\n                <path d="M6.4746,8.45856 C6.30828,8.26848 6.08256,8.12592 5.79744,8.019 C5.51232,7.91208 4.9896,7.80516 4.25304,7.67448 C3.58776,7.56756 3.16008,7.47252 2.98188,7.38936 C2.80368,7.3062 2.70864,7.1874 2.70864,7.02108 C2.70864,6.86664 2.87496,6.70032 3.21948,6.51024 C3.564,6.32016 3.96792,6.21324 4.31244,6.18948 L3.564,6.10632 C3.12444,6.30828 2.48292,6.58152 2.38788,6.87852 C2.34036,7.04484 2.35224,7.27056 2.53044,7.425 C2.70864,7.59132 2.77992,7.62696 3.00564,7.68636 L3.00564,7.71012 C2.47104,7.91208 2.20968,8.00712 1.9602,8.22096 C1.71072,8.4348 1.59192,8.68428 1.59192,8.95752 C1.59192,9.36144 1.782,9.61092 2.20968,9.8604 C2.63736,10.10988 3.33828,10.25244 4.02732,10.25244 C4.83516,10.25244 5.5836,10.10988 5.94,9.9198 C6.2964,9.72972 6.68844,9.504 6.70032,9.06444 C6.72408,8.8506 6.64092,8.63676 6.4746,8.45856 Z M5.55984,9.72972 C5.2272,9.90792 4.96584,9.9792 4.44312,9.9792 C3.76596,9.9792 3.37392,9.87228 2.92248,9.65844 C2.47104,9.4446 2.34036,9.18324 2.34036,8.86248 C2.34036,8.39916 2.53044,8.05464 3.4452,7.82892 C4.52628,8.00712 5.01336,8.17344 5.39352,8.33976 C5.78556,8.50608 5.97564,8.71992 5.97564,9.00504 C5.98752,9.29016 5.89248,9.55152 5.55984,9.72972 Z" id="Shape" fill="url(#linearGradient-8)"></path>\n                <path d="M1.58004,4.19364 C1.38996,3.45708 1.47312,2.77992 1.85328,2.16216 C2.23344,1.53252 2.7918,1.1286 3.55212,0.92664 C4.28868,0.73656 4.96584,0.81972 5.60736,1.17612 C6.24888,1.5444 6.66468,2.079 6.85476,2.80368 C7.04484,3.54024 6.96168,4.22928 6.58152,4.8708 C6.20136,5.51232 5.643,5.92812 4.90644,6.13008 C4.16988,6.32016 3.48084,6.237 2.83932,5.86872 C2.18592,5.47668 1.77012,4.91832 1.58004,4.19364 Z M2.34036,3.99168 C2.53044,4.71636 2.86308,5.25096 3.31452,5.60736 C3.77784,5.96376 4.28868,6.07068 4.83516,5.91624 C5.39352,5.77368 5.79744,5.41728 6.02316,4.8708 C6.24888,4.32432 6.27264,3.70656 6.09444,3.0294 C5.90436,2.30472 5.57172,1.75824 5.12028,1.40184 C4.65696,1.04544 4.158,0.9504 3.61152,1.09296 C3.0294,1.2474 2.62548,1.59192 2.39976,2.11464 C2.17404,2.64924 2.15028,3.27888 2.34036,3.99168 Z" id="Shape" fill="url(#linearGradient-9)"></path>\n            </g>\n        </g>\n    </g>\n    </svg>\n    ',
        CWJobs: '\n    <svg class="header-icon" width="17px" height="17px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="CWjobs-Logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="download" transform="translate(0.000000, 1.500000)" fill-rule="nonzero">\n            <path d="M7.11539636,0.635860746 L7.47857599,1.00062114 C7.47857599,1.00062114 7.85400651,0.829899047 8.01702239,0.763309528 C8.14130965,0.712527611 8.29701452,0.681702789 8.29701452,0.681702789 C8.29701452,0.681702789 7.70027759,0.0829899047 6.81920143,0.392818882 C6.81920143,0.392818882 6.9432911,0.462174731 7.11539636,0.635860746" id="Path" fill="#7C7C72"></path>\n            <path d="M6.82275814,0.392226097 C6.82275814,0.392226097 6.9709544,0.478575117 7.10749255,0.61748441 L7.48312067,0.990938981 L6.74213938,1.29938479 L6.07169951,0.843137913 L6.49613359,0.566900087 C6.7253438,0.415147119 6.81880624,0.392818882 6.81880624,0.392818882" id="Path" fill="#564B39"></path>\n            <polygon id="Path" fill="#433019" points="6.0839504 1.57878414 6.74194178 1.29148099 6.07229229 0.842742723 5.40540913 1.28812188"></polygon>\n            <path d="M5.6522053,0.571839963 L6.07624419,0.847089813 L6.5668726,0.52836906 C6.67989695,0.455258906 6.82690764,0.396177998 6.82690764,0.396177998 C6.82690764,0.396177998 6.12386459,-0.069948634 5.31629378,0.397561163 C5.31668897,0.397561163 5.45105358,0.43293067 5.6522053,0.571839963" id="Path" fill="#948573"></path>\n            <path d="M5.31965289,0.391633312 C5.31965289,0.391633312 5.47832169,0.43885852 5.65101973,0.559984262 L6.07248989,0.842545128 L5.40560672,1.28792428 L4.66877493,0.978095306 L5.0341281,0.627166566 C5.23073514,0.435104215 5.3194553,0.391435717 5.3194553,0.391435717" id="Path" fill="#705536"></path>\n            <path d="M4.19296614,0.784452195 L4.67075088,0.976514546 C4.67075088,0.976514546 4.96635301,0.693163299 5.0936042,0.571642368 C5.19062335,0.478772712 5.32439517,0.393214072 5.32439517,0.393214072 C5.32439517,0.393214072 4.54053576,0.070936609 3.83472638,0.681110004 C3.83472638,0.681110004 3.96928859,0.686049879 4.19296614,0.784452195" id="Path" fill="#AB9272"></path>\n            <path d="M2.8360812,1.27863732 L3.33283505,1.370519 C3.33283505,1.370519 3.55769818,1.0417209 3.65728606,0.896883756 C3.73336014,0.786032955 3.84658208,0.674984558 3.84658208,0.674984558 C3.84658208,0.674984558 3.00443215,0.493197148 2.43832244,1.23496882 C2.43832244,1.23496882 2.59718883,1.2276578 2.83548841,1.27863732" id="Path" fill="#C59C6E"></path>\n            <path d="M3.84934841,0.674786963 C3.84934841,0.674786963 4.00722683,0.700079125 4.20126513,0.782871435 L4.67272683,0.978292901 L4.12380788,1.52563108 L3.33145189,1.37150697 L3.6163839,0.952605549 C3.76912484,0.723988121 3.84875563,0.677948484 3.84875563,0.677948484" id="Path" fill="#8C6234"></path>\n            <polygon id="Path" fill="#5D3915" points="4.84206575 1.68509026 5.40540913 1.28792428 4.67272683 0.978095306 4.12400548 1.52523589"></polygon>\n            <polygon id="Path" fill="#381F0F" points="5.53661222 1.82064043 6.0799985 1.56376692 5.40540913 1.28812188 4.83356917 1.66710911"></polygon>\n            <path d="M1.54756413,2.00657734 L2.0753404,2.04036609 C2.0753404,2.04036609 2.21918957,1.64320011 2.29210213,1.48393853 C2.34782392,1.36162722 2.44029839,1.23279528 2.44029839,1.23279528 C2.44029839,1.23279528 1.61514162,1.21698767 1.18557007,2.04530596 C1.18557007,2.04530596 1.331,2.00143987 1.54756413,2.00657734" id="Path" fill="#E0A867"></path>\n            <path d="M2.44069358,1.23220249 C2.44069358,1.23220249 2.60331427,1.22548426 2.80960346,1.27014073 L3.33303265,1.3703214 L2.91176009,2.0241633 L2.06862217,2.01052924 L2.26424123,1.54301944 C2.36955937,1.29148099 2.44029839,1.23358566 2.44029839,1.23358566" id="Path" fill="#AF6E2D"></path>\n            <polygon id="Path" fill="#7F471E" points="2.90523945 2.00479898 3.65432214 2.02732482 4.12400548 1.52543349 3.33362543 1.370519"></polygon>\n            <polygon id="Path" fill="#542914" points="4.35104215 2.02119937 4.83356917 1.66710911 4.12400548 1.52543349 3.63910732 2.00717012"></polygon>\n            <polygon id="Path" fill="#35160E" points="5.04578621 2.03384545 5.50262587 1.80305448 4.83356917 1.66710911 4.32713315 2.00657734"></polygon>\n            <path d="M6.09620129,9.32846048 L1.18557007,2.04609634 C0.570654392,2.18974791 0.0507819179,2.76139028 0.0570478787,3.47806739 L0.0604640734,7.81764903 C0.0638231886,8.650512 0.655225057,9.32846048 1.59103503,9.32846048" id="Path" fill="#F89921"></path>\n            <path d="M6.04680253,9.32846048 L2.06921496,2.01151721 L1.54815691,2.00732241 C1.33337114,2.00578696 1.18655804,2.04609634 1.18655804,2.04609634 C1.18655804,2.04609634 1.11384308,2.18658639 1.06227078,2.41895813 C1.01069848,2.65152746 0.229407808,6.59809262 0.229407808,6.59809262 C0.0248969714,7.54753664 0.550104511,8.27923097 1.40667889,8.45548572 L5.47911207,9.26483489 C5.8859602,9.34446568 6.04739532,9.32944846 6.04739532,9.32944846" id="Path" fill="#D96F27"></path>\n            <path d="M2.90523945,2.00479898 L2.06862217,2.01052924 L0.590018704,5.57711919 C0.258454275,6.34359024 0.555637172,7.19561993 1.40371496,7.54457272 L5.02424835,9.05123468 C5.75179318,9.37845202 5.93693971,9.33537631 6.19934588,9.32253263 L2.90523945,2.00361341" id="Path" fill="#AC4E25"></path>\n            <path d="M3.63910732,2.00717012 L2.90523945,2.00499658 L1.2399087,4.49331056 C0.645147712,5.35838152 0.930277313,6.2580316 1.65782214,6.6976805 L4.95963478,8.91015184 C5.58166388,9.3474296 5.93259262,9.32352061 6.09620129,9.3276701 L3.63910732,2.00677493" id="Path" fill="#7D3018"></path>\n            <path d="M4.32713315,2.00657734 L3.63890973,2.00717012 L1.99768556,3.65155581 C1.25294997,4.39411786 1.37783001,5.22520248 2.00618215,5.88358905 L4.67114607,8.54618183 C5.40738508,9.28874388 5.61387186,9.32352061 6.29814339,9.32114947 L4.32713315,2.00618215" id="Path" fill="#55180A"></path>\n            <path d="M5.01179987,2.00657734 L4.32733075,2.00657734 L2.85880462,2.9906005 C2.26404364,3.39092799 1.94176618,4.21746792 2.45847713,5.06139621 L4.83949702,8.59834691 C5.27637959,9.24823691 5.75653546,9.32352061 6.23866729,9.3276701 L5.01219506,2.00677493" id="Path" fill="#33130F"></path>\n            <path d="M11.5932945,5.62118288 C11.9027127,6.36838718 11.5480155,7.2249676 10.8009385,7.53469297 L6.74233697,9.21583132 C5.99518725,9.52535398 5.13858287,9.17061025 4.82902448,8.42347533 L3.14768853,4.3648738 C2.83816587,3.61772407 3.1929096,2.76111969 3.94004452,2.4515613 L7.99864606,0.770422949 C8.74579578,0.46090029 9.60240016,0.815644023 9.91195855,1.56277894 L11.5932945,5.62138048" id="Path" fill="#010101"></path>\n            <g id="Group" transform="translate(4.347090, 2.963925)" fill="#FFFFFF">\n                <path d="M0.0972167455,0.979280876 L0.0972167455,0.974143405 C0.0972167455,0.43490662 0.512166269,0.0122508907 1.07234813,0.0122508907 C1.45034738,0.0122508907 1.69319165,0.17072209 1.85719551,0.398153948 L1.47129245,0.69672001 C1.36557912,0.564528947 1.24405819,0.480155877 1.06701306,0.480155877 C0.808163596,0.480155877 0.625783401,0.699288745 0.625783401,0.96880834 L0.625783401,0.974143405 C0.625783401,1.2515668 0.808163596,1.46813093 1.06701306,1.46813093 C1.25986579,1.46813093 1.37368052,1.3784228 1.48453132,1.24346541 L1.87023678,1.51832007 C1.69615558,1.7587932 1.46081992,1.93603592 1.05100786,1.93603592 C0.52244121,1.93603592 0.0972167455,1.53136134 0.0972167455,0.979280876 M1.87399109,0.0492011578 L2.41579661,0.0492011578 L2.73846926,1.11937574 L3.09512826,0.0438660925 L3.53616032,0.0438660925 L3.89301691,1.11937574 L4.21549197,0.0492011578 L4.74662736,0.0492011578 L4.12835257,1.91212692 L3.68218303,1.91212692 L3.30932125,0.847287408 L2.93922579,1.91212692 L2.49266107,1.91212692 L1.87399109,0.0492011578 M0.00790380045,3.59030135 L0.338085064,3.27889162 C0.427990794,3.38737128 0.512363864,3.45060168 0.626178591,3.45060168 C0.755603323,3.45060168 0.837605253,3.36346228 0.837605253,3.19155462 L0.837605253,2.02100178 L1.34740038,2.02100178 L1.34740038,3.19432095 C1.34740038,3.42708788 1.28950504,3.59148692 1.16521778,3.71458862 C1.04369685,3.83650474 0.869220454,3.90250147 0.657991387,3.90250147 C0.335121139,3.90210628 0.137130938,3.76734648 0.00790380045,3.59030135 M1.42268408,2.95167428 L1.42268408,2.94633921 C1.42268408,2.41520382 1.85087247,1.98464429 2.42172446,1.98464429 C2.99237885,1.98464429 3.41562736,2.40986876 3.41562736,2.94100415 L3.41562736,2.94633921 C3.41562736,3.4774746 2.98763657,3.90842932 2.41777256,3.90842932 C1.84692057,3.90842932 1.42386965,3.48241448 1.42386965,2.95167428 M2.89318615,2.95167428 L2.89318615,2.94633921 C2.89318615,2.67919076 2.70033342,2.44701662 2.41777256,2.44701662 C2.13758283,2.44701662 1.95006517,2.67425088 1.95006517,2.94100415 L1.95006517,2.94633921 C1.95006517,3.21348767 2.1429179,3.44566181 2.42310762,3.44566181 C2.70566849,3.44566181 2.89318615,3.21842754 2.89318615,2.95167428 M3.4972341,2.02139697 L4.44588775,2.02139697 C4.67865468,2.02139697 4.84305373,2.0792923 4.95074301,2.18777196 C5.02484114,2.26187009 5.0696952,2.35948203 5.0696952,2.48614043 L5.0696952,2.4914755 C5.0696952,2.7052733 4.94817427,2.83232689 4.78436801,2.90365869 C5.00883594,2.97775682 5.15149954,3.10441522 5.15149954,3.35555848 L5.15149954,3.36049836 C5.15149954,3.67763835 4.89245248,3.87029349 4.45102522,3.87029349 L3.4974317,3.87029349 L3.4974317,2.02139697 M4.31883416,2.75822876 C4.47473662,2.75822876 4.56167843,2.7052733 4.56167843,2.59758402 L4.56167843,2.59224895 C4.56167843,2.4914755 4.48283802,2.43358016 4.3293067,2.43358016 L3.9963591,2.43358016 L3.9963591,2.75862395 L4.31863657,2.75862395 L4.31863657,2.75822876 L4.31883416,2.75822876 Z M4.39293229,3.45870308 C4.54883475,3.45870308 4.63874048,3.39804141 4.63874048,3.28975934 L4.63874048,3.28442428 C4.63874048,3.18404601 4.55950488,3.11804928 4.38759722,3.11804928 L3.9965567,3.11804928 L3.9965567,3.45890067 L4.39372267,3.45890067 M5.18291715,3.5962292 L5.46824434,3.25537781 C5.65062454,3.40041255 5.8539498,3.47727701 6.0679452,3.47727701 C6.20507614,3.4776722 6.27917427,3.42985421 6.27917427,3.35022342 L6.27917427,3.34528354 C6.27917427,3.26841908 6.2185126,3.22593615 5.96736934,3.16823841 C5.57356248,3.07872787 5.26985895,2.96748188 5.26985895,2.58711148 L5.26985895,2.58217161 C5.26985895,2.23875148 5.54194728,1.99017695 5.98594327,1.99017695 C6.30051453,1.99017695 6.54632272,2.07494521 6.74707925,2.23558996 L6.49079852,2.59797921 C6.32205238,2.47863182 6.13690586,2.41540142 5.972902,2.41540142 C5.84861474,2.41540142 5.78775547,2.46835688 5.78775547,2.53435361 L5.78775547,2.53929349 C5.78775547,2.62425934 5.85118347,2.66081442 6.1074642,2.71910495 C6.53268867,2.81177701 6.79707079,2.94910554 6.79707079,3.295292 L6.79707079,3.30062707 C6.79707079,3.67842873 6.49870233,3.90269907 6.04937127,3.90269907 C5.72175874,3.90269907 5.40975622,3.79994966 5.18291715,3.5962292" id="Shape"></path>\n            </g>\n        </g>\n    </g>\n    </svg>\n    ',
        Milkround: '\n    <svg class="header-icon" width="17px" height="17px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Milkround-Logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <rect id="Rectangle" fill="#323232" x="0" y="0" width="12" height="12"></rect>\n        <g id="logo-milkround-recruiter" transform="translate(0.720000, 2.400000)" fill="#FFFFFF" fill-rule="nonzero">\n            <path d="M2.3085,0.0729 C2.916,-0.0243 3.5478,0.0486 4.131,0.2916 C4.5441,0.486 4.9329,0.7776 5.2245,1.1421 C5.589,0.6561 6.1236,0.2916 6.7554,0.1215 C7.533,-0.0729 8.4078,-5.20417043e-18 9.1368,0.3402 C9.6471,0.6075 10.0845,1.0692 10.3032,1.5795 C10.4733,1.944 10.5705,2.3571 10.5705,2.7945 C10.5705,4.2282 10.5705,5.6376 10.5705,7.0956 C10.206,7.1199 9.8901,7.0956 9.5256,7.0956 C9.5256,5.7105 9.5256,4.3497 9.5256,2.9403 C9.5256,2.3814 9.3555,1.7982 8.9424,1.4337 C8.6265,1.1421 8.1891,0.972 7.776,0.972 C7.29,0.9477 6.804,1.0692 6.4395,1.4094 C6.075,1.7496 5.8806,2.187 5.832,2.6487 C5.8077,2.8431 5.8077,3.0861 5.8077,3.2805 C5.8077,4.5684 5.8077,5.832 5.8077,7.1199 C5.4432,7.1199 5.1273,7.1199 4.7628,7.1199 C4.7628,5.7834 4.7628,4.4226 4.7628,3.0861 C4.7628,2.6001 4.6656,2.0655 4.3497,1.6524 C4.0824,1.2879 3.6693,1.0935 3.2562,1.0206 C2.7702,0.9234 2.2113,1.0206 1.7982,1.3122 C1.4337,1.5795 1.1907,1.9926 1.1178,2.43 C1.0206,2.8188 1.0449,3.2076 1.0449,3.6207 C1.0449,4.8114 1.0449,5.9778 1.0449,7.1685 C0.729,7.1685 0.3645,7.1685 0.0486,7.1685 C0.0486,5.6862 0.0486,4.2282 0.0486,2.7459 C0.0486,2.0655 0.3402,1.3608 0.8262,0.8748 C1.1421,0.4374 1.7253,0.1701 2.3085,0.0729 L2.3085,0.0729 Z" id="Path"></path>\n        </g>\n    </g>\n    </svg>\n    ',
        RetailChoice: '\n    <svg class="header-icon" width="17px" height="17px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="RetailChoice-Logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <rect id="Rectangle" fill="#007095" x="0" y="0" width="12" height="12"></rect>\n        <g id="download-(2)" transform="translate(1.050000, 3.000000)" fill-rule="nonzero">\n            <path d="M8.883,1.4184 C8.4957,0.8289 7.7661,0.4986 7.0707,0.4986 C5.8911,0.4986 4.9005,1.5243 4.9005,2.6613 C4.9005,3.8766 5.9262,4.8669 7.1058,4.8669 C7.8084,4.8669 8.4957,4.4868 8.9034,3.9189 L9.48,3.9189 C9.0303,4.782 8.082,5.3655 7.1061,5.3655 C5.5824,5.3655 4.38149994,4.1931 4.38149994,2.6613 C4.3812,1.1868 5.5896,-1.11022302e-15 7.0638,-1.11022302e-15 C7.5906,-1.11022302e-15 8.1177,0.1407 8.5599,0.4356 C8.8902,0.6465 9.3177,1.0389 9.459,1.4184 L8.883,1.4184 Z" id="Shape" fill="#FFFFFF"></path>\n            <path d="M3.3936,3.0669 C3.4779,3.0072 3.5583,2.9385 3.6324,2.8584 C3.885,2.577 4.0608,2.1072 4.0608,1.7274 C4.0608,1.2432 3.8289,0.7587 3.4572,0.4497 C3.0633,0.1194 2.6001,0.0915 2.1084,0.084 L0,0.084 L0,5.2737 L0.9621,5.2737 L0.9621,3.4014 L2.0562,3.4014 C2.7624,3.4014 3.1737,3.9972 3.1737,4.6203 L3.1737,5.2743 L4.1076,5.2743 L4.1076,4.62 C4.1076,4.0038 3.8445,3.4212 3.3936,3.0669 Z M0.9621,2.5563 L0.9621,1.0182 L2.1012,1.0182 C2.3679,1.0182 2.5929,1.0248 2.8176,1.1934 C3.0003,1.3272 3.0987,1.5519 3.0987,1.7763 C3.10088789,1.98854711 3.01444821,2.19208809 2.8602,2.3379 C2.6706,2.5209 2.3475,2.556 2.0949,2.556 L0.9621,2.5563 L0.9621,2.5563 Z" id="Shape" fill="#EDAA00"></path>\n        </g>\n    </g>\n    </svg>\n    ',
        PNet: '\n    <svg viewBox="60.825 57.413 86.01 120.44" width="86.01" height="120.44">\n    <g id="Pnet-Logo" data-name="Layer 2" transform="matrix(1, 0, 0, 1, 60.825364, 57.412671)">\n        <g id="Layer_1-2" data-name="Layer 1">\n        <path class="cls-1" d="M46.09 0H0v120.44h23.74V87.22l32.69-8.76A39.91 39.91 0 0046.09 0zm4.59 57l-26.95 7.25v-42h22.36A17.72 17.72 0 0150.68 57z" style="fill: rgb(237, 27, 46);"></path>\n        </g>\n    </g>\n    <path class="cls-1" d="M 112.449 163 C 112.441 151.722 124.644 144.666 134.415 150.298 C 144.185 155.93 144.195 170.027 134.432 175.672 C 132.2 176.963 129.667 177.642 127.089 177.64 C 119.003 177.64 112.449 171.085 112.449 163 Z" style="fill: rgb(237, 27, 46);"></path>\n    </svg>\n    ',
        Stepstone: '\n    <svg width="17px" height="17px" viewBox="   -30 -30 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-right: 10px">\n        \x3c!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch --\x3e\n        <title>stst-logo-blue</title>\n        <desc>Created with Sketch.</desc>\n        <g id="StepStone-Logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g id="Desktop-HD" transform="translate(0.000000, -113.000000)" fill="#0C2577">\n                <g id="stst-logo-blue" transform="translate(0.000000, 113.000000)">\n                    <g id="Group">\n                        <path d="M190.184838,167.072777 C163.645141,176.670159 135.636458,183.427498 106.648449,186.953067 C106.648449,186.953067 106.550517,186.953067 106.550517,186.953067 C103.220813,187.344797 99.989042,187.736527 96.6593384,188.030324 C96.6593384,188.030324 96.6593384,188.030324 96.5614059,188.030324 C88.8247416,188.715851 80.9901447,189.303446 73.1555479,189.597243 C63.8519642,189.891041 54.6463129,189.891041 45.5385941,189.597243 C35.1577533,189.205513 25.8541695,185.582012 18.4113025,179.803997 C44.1675396,175.592901 69.7279118,170.500414 94.7986216,163.351344 C115.266506,157.475396 135.440593,150.228394 154.635355,141.31654 C165.99552,136.028187 177.159821,130.054307 187.638594,123.3949 C199.292557,116.147898 210.358925,108.019504 220.641833,98.911785 C221.32736,98.3241902 222.012888,97.638663 222.796347,97.0510682 C232.589593,124.17836 219.956306,156.300207 190.184838,167.072777" id="Path"></path>\n                        <path d="M204.385045,70.1196416 C202.524328,71.2948312 200.663611,72.6658856 198.900827,73.9390076 C191.555892,79.129428 184.113025,84.1239835 176.474294,88.922674 C175.984631,89.2164714 175.494969,89.5102688 175.005307,89.8040662 C166.876912,94.8965541 158.650586,99.7931771 150.228394,104.493935 C145.723501,106.942247 141.218608,109.390558 136.713715,111.740937 C128.095658,116.147898 119.379669,120.358994 110.565748,124.276292 C104.29807,127.116334 98.0303928,129.76051 91.6647829,132.306754 C70.7072364,140.728946 49.1620951,147.878015 27.3231564,153.558098 L3.42763611,159.434045 C-0.195864921,150.130462 -0.979324604,139.651688 2.05658167,129.074983 C12.4374225,93.0358374 26.5396968,68.4547898 46.5179187,36.6267402 C51.4145417,28.8900758 57.3884218,22.328601 64.1457615,16.9423156 C69.0423846,13.0250172 74.4286699,9.79324604 80.0108201,7.24700207 C107.138112,-4.99455548 140.337216,-1.37105445 163.938939,20.6637491 C179.706065,35.5494831 189.891041,53.2752584 204.385045,70.1196416" id="Path"></path>\n                    </g>                        \n                </g>\n            </g>\n        </g>\n    </svg>\n    '
    }
}, function(t, e) {
    var n, r, o = t.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            r = a
        }
    }();
    var c, u = [],
        l = !1,
        d = -1;

    function p() {
        l && c && (l = !1, c.length ? u = c.concat(u) : d = -1, u.length && h())
    }

    function h() {
        if (!l) {
            var t = s(p);
            l = !0;
            for (var e = u.length; e;) {
                for (c = u, u = []; ++d < e;) c && c[d].run();
                d = -1, e = u.length
            }
            c = null, l = !1,
                function(t) {
                    if (r === clearTimeout) return clearTimeout(t);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                    try {
                        r(t)
                    } catch (e) {
                        try {
                            return r.call(null, t)
                        } catch (e) {
                            return r.call(this, t)
                        }
                    }
                }(t)
        }
    }

    function f(t, e) {
        this.fun = t, this.array = e
    }

    function g() {}
    o.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        u.push(new f(t, e)), 1 !== u.length || l || s(h)
    }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function(t) {
        return []
    }, o.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = "https://0a256f4970474d70b7d2fd01cb1eb56c@sentry-api.gc.stepstone.com/23";
    e.default = function(t) {
        return {
            dsn: r,
            defaultIntegrations: !1,
            environment: t
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = r(n(17)),
        i = new RegExp("localhost"),
        a = new RegExp(".tjgdev.io|-team.stepstone|-team.pnet"),
        s = new RegExp(".tjgpat.io|next.stepstone|build.stepstone|next.pnet|build.pnet"),
        c = new RegExp(".com|.co.uk|.net|.de|.at|.be|.co.za|.fr|.nl"),
        u = function() {
            function t() {}
            return t.getEnvironment = function() {
                if (!("undefined" != typeof window)) return o.default.NONE;
                var e = window.location.href;
                return t.isDev(e) ? o.default.DEV : t.isPat(e) ? o.default.PAT : t.isLive(e) ? o.default.LIVE : (t.isLocal(e), o.default.LOCAL)
            }, t.isLocal = function(t) {
                return i.test(t)
            }, t.isDev = function(t) {
                return a.test(t)
            }, t.isPat = function(t) {
                return s.test(t)
            }, t.isLive = function(t) {
                return c.test(t)
            }, t
        }();
    e.default = u
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        function t() {
            this.languageCookieName = "STEPSTONEV5LANG"
        }
        return t.prototype.getLanguageAndCountry = function() {
            var t = "en",
                e = "GB",
                n = document.cookie.match(new RegExp("(^| )" + this.languageCookieName + "=([^;]+)"));
            n && (t = n[2]);
            var r = window.location.hostname.split(".");
            return "stepstone" == r[1] && (e = r[2].toUpperCase()), t + "-" + e
        }, t
    }();
    e.default = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        function t(t, e, n, r, o) {
            void 0 === e && (e = !0), void 0 === n && (n = []), this.analyticsLibrary = t, this.shouldSuppressReloadAnalytics = e, this.acceptableEventsOnReload = n, this.errorLoggingHelper = r, this.trackingSource = o
        }
        return t.prototype.fireRegisteredEvent = function() {}, t.prototype.fireSignedInEvent = function() {}, t.prototype.fireOneTapRegisteredEvent = function() {
            var t = {
                events: ["buttonClick", "candidateLogin", "candidateAccountCreation", "candidateAccountConfirmation"],
                loginStatus: "c_hard_google_onetap",
                loginSource: this.trackingSource,
                pageButtonType: "onetap_continue",
                legacy: {
                    candidate__login_source: this.trackingSource,
                    candidate__login_status: "b2c_logged-in_google_onetap"
                },
                sendClientSide: !1
            };
            this.errorLoggingHelper.logMessage("One tap registration event", t), this.fireEventByType("OneTapRegistration", t)
        }, t.prototype.fireOneTapSignedInEvent = function() {
            var t = {
                events: ["candidateLogin", "buttonClick"],
                pageButtonType: "onetap_continue",
                loginSource: this.trackingSource,
                loginStatus: "c_hard_google_onetap",
                legacy: {
                    candidate__login_source: this.trackingSource,
                    candidate__login_status: "b2c_logged-in_google_ot"
                },
                sendClientSide: !1
            };
            this.errorLoggingHelper.logMessage("One tap sign in event", t), this.fireEventByType("OneTapLogin", t)
        }, t.prototype.fireOneTapPopupShownEvent = function() {
            var t = {
                events: ["buttonImpression"],
                pageButtonType: "onetap_continue",
                sendClientSide: !1,
                legacy: {
                    page__events: ["button_impression"]
                }
            };
            this.errorLoggingHelper.logMessage("One tap displayed event", t), this.fireEventByType("OneTapDisplayed", t)
        }, t.prototype.fireOneTapDismissedEvent = function() {
            var t = {
                events: ["buttonClick"],
                pageButtonType: "onetap_close",
                sendClientSide: !1
            };
            this.errorLoggingHelper.logMessage("One tap closed event", t), this.fireEventByType("OneTapClosed", t)
        }, t.prototype.fireSignInButtonPopupShownEvent = function() {}, t.prototype.fireEventByType = function(t, e) {
            this.analyticsLibrary.fireEventByType && this.analyticsLibrary.fireEventByType(t, e)
        }, t.prototype.suppressReloadAnalytics = function() {}, t
    }();
    e.default = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return "" == t || null == t || void 0 === t
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = window,
        o = function() {
            function t(t) {
                this.errorLoggingHelper = t
            }
            return t.prototype.fireEventByType = function(t, e) {
                var n, o, i, a;
                if (null != typeof r.analyticsService && null != r.analyticsService) e.timestamp = (new Date).getTime(), r.analyticsService.sendLinkEvent(t, e);
                else if (null != typeof r.utag && null != r.utag) {
                    var s = {
                        page__events: (e = this.mapHarmonisedLinkContextToLegacy(t, e)).events
                    };
                    e.loginSource && (s.candidate__login_source = e.loginSource), e["analytics.events"] && (s.candidate__events = e["analytics.events"]), (null === (n = e.legacy) || void 0 === n ? void 0 : n.candidate__login_status) && (s.candidate__login_status = null === (o = e.legacy) || void 0 === o ? void 0 : o.candidate__login_status), (null === (i = e.legacy) || void 0 === i ? void 0 : i.candidate__login_source) && (s.candidate__login_source = null === (a = e.legacy) || void 0 === a ? void 0 : a.candidate__login_source), e.pageButtonType && (s.page__button_type = e.pageButtonType), r.utag.link(s)
                } else this.errorLoggingHelper.logMessage("Could not fire tracking with the following events: \n " + e.events)
            }, t.prototype.mapHarmonisedLinkContextToLegacy = function(t, e) {
                var n = e.events.indexOf("buttonClick"),
                    r = e.events.indexOf("candidateLogin");
                if (-1 != n && (e.events[n] = "button_click"), -1 != r && (e.events[r] = "login"), e.loginStatus = "b2c_logged-in_google_ot", "OneTapRegistration" == t) {
                    e.events.indexOf("candidateAccountCreation") > -1 && (e.events = e.events.filter(function(t) {
                        return "candidateAccountCreation" != t
                    })), e["analytics.events"] = ["account_confirmation", "account_creation"], e.loginStatus = "b2c_logged-in_google_onetap"
                }
                if ("OneTapDisplayed" === t) {
                    var o = e.events.indexOf("buttonImpression"); - 1 != o && (e.events[o] = "button_impression")
                }
                return e
            }, t.prototype.fireNonStandardOnClickEvent = function(t, e, n, r) {}, t
        }();
    e.default = o
}, function(t, e, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        function n() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.BrandNotProvidedError = e.ParentElementIdError = e.MissingValueError = e.FailureToPromptError = e.FailureToInitializeError = e.FailureToDisableAutoSelectError = e.FailureToCancelError = void 0;
    var i = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.name = "FailureToCancelError", n
        }
        return o(e, t), e
    }(Error);
    e.FailureToCancelError = i;
    var a = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.name = "FailureToDisableAutoSelectError", n
        }
        return o(e, t), e
    }(Error);
    e.FailureToDisableAutoSelectError = a;
    var s = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.name = "FailureToInitializeError", n
        }
        return o(e, t), e
    }(Error);
    e.FailureToInitializeError = s;
    var c = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.name = "FailureToPromptError", n
        }
        return o(e, t), e
    }(Error);
    e.FailureToPromptError = c;
    var u = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.name = "MissingValueError", n
        }
        return o(e, t), e
    }(Error);
    e.MissingValueError = u;
    var l = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.name = "ParentElementIdError", n
        }
        return o(e, t), e
    }(Error);
    e.ParentElementIdError = l;
    var d = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.name = "BrandNotProvided", n
        }
        return o(e, t), e
    }(Error);
    e.BrandNotProvidedError = d
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = {
            Chrome: {
                iOS: !1
            },
            Edge: {
                Android: !1,
                iOS: !1,
                Linux: !1
            },
            Firefox: {
                iOS: !1
            },
            Safari: {
                Android: !1,
                iOS: !1,
                macOS: !1,
                Linux: !1,
                Windows: !1
            }
        },
        o = function() {
            function t() {}
            return t.getOS = function() {
                return -1 != navigator.userAgent.indexOf("Win") ? "Windows" : -1 != navigator.userAgent.indexOf("Mac") && -1 == navigator.userAgent.indexOf("like Mac") ? "macOS" : -1 != navigator.userAgent.indexOf("Linux") && -1 == navigator.userAgent.indexOf("Android") ? "Linux" : -1 != navigator.userAgent.indexOf("Android") ? "Android" : -1 != navigator.userAgent.indexOf("like Mac") ? "iOS" : ""
            }, t.getBrowser = function() {
                return -1 != navigator.userAgent.indexOf("Chrome/") && -1 == navigator.userAgent.indexOf("Chromium/") && -1 == navigator.userAgent.indexOf("Edg/") && -1 == navigator.userAgent.indexOf("Edge/") ? "Chrome" : -1 != navigator.userAgent.indexOf("Edge/") || -1 != navigator.userAgent.indexOf("Edg/") ? "Edge" : -1 != navigator.userAgent.indexOf("Firefox/") && -1 == navigator.userAgent.indexOf("Seamonkey/") ? "Firefox" : -1 != navigator.userAgent.indexOf("Safari/") && -1 == navigator.userAgent.indexOf("Chrome/") && -1 == navigator.userAgent.indexOf("Chromium/") ? "Safari" : ""
            }, t.isBrowserAndOSSupported = function() {
                var t, e = this.getOS(),
                    n = this.getBrowser();
                try {
                    return null === (t = r[n][e]) || void 0 === t || t
                } catch (t) {
                    return !0
                }
            }, t
        }();
    e.default = o
}, function(t, e, n) {
    "use strict";
    var r = this && this.__awaiter || function(t, e, n, r) {
            return new(n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                        t(e)
                    })).then(a, s)
                }
                c((r = r.apply(t, e || [])).next())
            })
        },
        o = this && this.__generator || function(t, e) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = e.call(t, a)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        },
        i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(n(13)),
        s = i(n(18)),
        c = i(n(19)),
        u = i(n(9)),
        l = function() {
            function t(t, e, n, r, o, i, a, c, l, d) {
                void 0 === o && (o = !0), void 0 === c && (c = []), void 0 === d && (d = "Sign in using Google"), this.containerId = t, this.clientId = e, this.brand = n, this.analyticsHelper = new s.default(r, o, c), this.jobId = a, this.buttonText = d, this.endpoint = i, this.errorLoggingHelper = l || new u.default, this._load = this._load.bind(this), this._initClient = this._initClient.bind(this), this._promptForConsent = this._promptForConsent.bind(this)
            }
            return t.prototype.render = function() {
                if (null !== this.clientId && void 0 !== this.clientId) {
                    var t = document.createElement("script");
                    t.src = "https://apis.google.com/js/platform.js?onload=loadSignInButton", t.async = !0, t.defer = !0, document.head.appendChild(t);
                    var e = new c.default(this.buttonText);
                    document.body.insertAdjacentHTML("beforeend", e.styles());
                    var n = document.getElementById(this.containerId);
                    null != n && n.insertAdjacentHTML("beforeend", e.html()), window.loadSignInButton = this._load
                }
            }, t.prototype._load = function() {
                window.gapi.load("auth2", this._initClient)
            }, t.prototype._initClient = function() {
                try {
                    window.gapi.auth2.init({
                        client_id: this.clientId
                    })
                } catch (t) {
                    console.log("Failed to init google api"), this.errorLoggingHelper.logException(t)
                }
                var t = document.getElementById(this.containerId);
                null != t && t.addEventListener("click", this._promptForConsent)
            }, t.prototype._promptForConsent = function() {
                return r(this, void 0, void 0, function() {
                    var t;
                    return o(this, function(e) {
                        switch (e.label) {
                            case 0:
                                t = window.gapi.auth2.getAuthInstance();
                                try {
                                    this.analyticsHelper.fireSignInButtonPopupShownEvent()
                                } catch (t) {
                                    console.log("Could not fire google sign in analytics"), this.errorLoggingHelper.logException(t)
                                }
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, t.signIn({
                                    prompt: "select_account"
                                })];
                            case 2:
                                return e.sent(), this._authenticateUser(), [3, 4];
                            case 3:
                                return e.sent(), console.log("User cancelled the google sign in popup"), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.prototype._authenticateUser = function() {
                return r(this, void 0, void 0, function() {
                    var t, e, n;
                    return o(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return t = window.gapi.auth2.getAuthInstance(), e = t.currentUser.get(), (n = e.getAuthResponse().id_token) ? [4, a.default(n, this.analyticsHelper, !1, this.endpoint, this.brand, this.jobId, void 0, !1)] : [3, 2];
                            case 1:
                                r.sent(), r.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, t
        }();
    e.default = l
}, function(t, e, n) {
    "use strict";
    var r = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = r(n(19)),
        i = function() {
            function t(t, e, n, r) {
                void 0 === r && (r = ""), this.containerId = t, this.returnUrl = encodeURIComponent(e), this.loginSource = n, this.buttonText = r, this._navigateToStepStoneGoogleAuth = this._navigateToStepStoneGoogleAuth.bind(this)
            }
            return t.prototype.render = function() {
                var t = new o.default(this.buttonText);
                document.body.insertAdjacentHTML("beforeend", t.styles());
                var e = document.getElementById(this.containerId);
                null != e && e.insertAdjacentHTML("beforeend", t.html());
                var n = document.getElementById(this.containerId);
                null != n && n.addEventListener("click", this._navigateToStepStoneGoogleAuth)
            }, t.prototype._navigateToStepStoneGoogleAuth = function() {
                window.location.href = "/public-api/v1/account/oauth/google/register?lang=en&returnUrl=" + this.returnUrl + "&loginSource=" + this.loginSource
            }, t
        }();
    e.default = i
}, function(t, e, n) {
    "use strict";
    var r = this && this.__awaiter || function(t, e, n, r) {
            return new(n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                        t(e)
                    })).then(a, s)
                }
                c((r = r.apply(t, e || [])).next())
            })
        },
        o = this && this.__generator || function(t, e) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = e.call(t, a)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        },
        i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(n(10)),
        s = n(6);
    e.default = function() {
        return r(this, void 0, void 0, function() {
            var t, e;
            return o(this, function(n) {
                switch (n.label) {
                    case 0:
                        e = function() {
                            var t = s.getCurrentBrand(window.location.href),
                                e = {
                                    url: "",
                                    method: ""
                                };
                            if (null === t) throw new Error("This brand is currently not supported");
                            switch (t.brandGroup) {
                                case s.BrandGroup.Jobsite:
                                case s.BrandGroup.Totaljobs:
                                case s.BrandGroup.Saon:
                                    e.url = "/account/signout", e.method = "POST";
                                    break;
                                case s.BrandGroup.Stepstone:
                                    e.url = "/5/index.cfm?event=CandidateLogin.doLogout", e.method = "GET"
                            }
                            return e
                        }(), n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), [4, fetch(e.url, {
                            method: e.method,
                            credentials: "same-origin"
                        })];
                    case 2:
                        return t = n.sent(), [3, 4];
                    case 3:
                        throw n.sent(), new Error("Request to log out failed");
                    case 4:
                        if (!t.ok) throw new Error("Request to log out failed");
                        return a.default.unflagRegisteredUser(), [2]
                }
            })
        })
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = {};
    n.r(r), n.d(r, "FunctionToString", function() {
        return Y
    }), n.d(r, "InboundFilters", function() {
        return $
    });
    var o = {};
    n.r(o), n.d(o, "GlobalHandlers", function() {
        return de
    }), n.d(o, "TryCatch", function() {
        return le
    }), n.d(o, "Breadcrumbs", function() {
        return ae
    }), n.d(o, "LinkedErrors", function() {
        return fe
    }), n.d(o, "UserAgent", function() {
        return ve
    });
    var i = {};
    n.r(i), n.d(i, "BaseTransport", function() {
        return It
    }), n.d(i, "FetchTransport", function() {
        return At
    }), n.d(i, "XHRTransport", function() {
        return Bt
    });
    var a, s, c = n(0);
    ! function(t) {
        t.Fatal = "fatal", t.Error = "error", t.Warning = "warning", t.Log = "log", t.Info = "info", t.Debug = "debug", t.Critical = "critical"
    }(a || (a = {})),
    function(t) {
        t.fromString = function(e) {
            switch (e) {
                case "debug":
                    return t.Debug;
                case "info":
                    return t.Info;
                case "warn":
                case "warning":
                    return t.Warning;
                case "error":
                    return t.Error;
                case "fatal":
                    return t.Fatal;
                case "critical":
                    return t.Critical;
                case "log":
                default:
                    return t.Log
            }
        }
    }(a || (a = {})),
    function(t) {
        t.Unknown = "unknown", t.Skipped = "skipped", t.Success = "success", t.RateLimit = "rate_limit", t.Invalid = "invalid", t.Failed = "failed"
    }(s || (s = {})),
    function(t) {
        t.fromHttpCode = function(e) {
            return e >= 200 && e < 300 ? t.Success : 429 === e ? t.RateLimit : e >= 400 && e < 500 ? t.Invalid : e >= 500 ? t.Failed : t.Unknown
        }
    }(s || (s = {}));
    var u = n(3),
        l = n(43),
        d = Object(u.e)(),
        p = "Sentry Logger ",
        h = function() {
            function t() {
                this._enabled = !1
            }
            return t.prototype.disable = function() {
                this._enabled = !1
            }, t.prototype.enable = function() {
                this._enabled = !0
            }, t.prototype.log = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this._enabled && Object(u.c)(function() {
                    d.console.log(p + "[Log]: " + t.join(" "))
                })
            }, t.prototype.warn = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this._enabled && Object(u.c)(function() {
                    d.console.warn(p + "[Warn]: " + t.join(" "))
                })
            }, t.prototype.error = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this._enabled && Object(u.c)(function() {
                    d.console.error(p + "[Error]: " + t.join(" "))
                })
            }, t
        }();
    d.__SENTRY__ = d.__SENTRY__ || {};
    var f, g = d.__SENTRY__.logger || (d.__SENTRY__.logger = new h),
        v = n(7),
        b = n(2);
    ! function(t) {
        t.PENDING = "PENDING", t.RESOLVED = "RESOLVED", t.REJECTED = "REJECTED"
    }(f || (f = {}));
    var y, m = function() {
            function t(t) {
                var e = this;
                this._state = f.PENDING, this._handlers = [], this._resolve = function(t) {
                    e._setResult(f.RESOLVED, t)
                }, this._reject = function(t) {
                    e._setResult(f.REJECTED, t)
                }, this._setResult = function(t, n) {
                    e._state === f.PENDING && (Object(b.m)(n) ? n.then(e._resolve, e._reject) : (e._state = t, e._value = n, e._executeHandlers()))
                }, this._attachHandler = function(t) {
                    e._handlers = e._handlers.concat(t), e._executeHandlers()
                }, this._executeHandlers = function() {
                    if (e._state !== f.PENDING) {
                        var t = e._handlers.slice();
                        e._handlers = [], t.forEach(function(t) {
                            t.done || (e._state === f.RESOLVED && t.onfulfilled && t.onfulfilled(e._value), e._state === f.REJECTED && t.onrejected && t.onrejected(e._value), t.done = !0)
                        })
                    }
                };
                try {
                    t(this._resolve, this._reject)
                } catch (t) {
                    this._reject(t)
                }
            }
            return t.resolve = function(e) {
                return new t(function(t) {
                    t(e)
                })
            }, t.reject = function(e) {
                return new t(function(t, n) {
                    n(e)
                })
            }, t.all = function(e) {
                return new t(function(n, r) {
                    if (Array.isArray(e))
                        if (0 !== e.length) {
                            var o = e.length,
                                i = [];
                            e.forEach(function(e, a) {
                                t.resolve(e).then(function(t) {
                                    i[a] = t, 0 === (o -= 1) && n(i)
                                }).then(null, r)
                            })
                        } else n([]);
                    else r(new TypeError("Promise.all requires an array as input."))
                })
            }, t.prototype.then = function(e, n) {
                var r = this;
                return new t(function(t, o) {
                    r._attachHandler({
                        done: !1,
                        onfulfilled: function(n) {
                            if (e) try {
                                return void t(e(n))
                            } catch (t) {
                                return void o(t)
                            } else t(n)
                        },
                        onrejected: function(e) {
                            if (n) try {
                                return void t(n(e))
                            } catch (t) {
                                return void o(t)
                            } else o(e)
                        }
                    })
                })
            }, t.prototype.catch = function(t) {
                return this.then(function(t) {
                    return t
                }, t)
            }, t.prototype.finally = function(e) {
                var n = this;
                return new t(function(t, r) {
                    var o, i;
                    return n.then(function(t) {
                        i = !1, o = t, e && e()
                    }, function(t) {
                        i = !0, o = t, e && e()
                    }).then(function() {
                        i ? r(o) : t(o)
                    })
                })
            }, t.prototype.toString = function() {
                return "[object SyncPromise]"
            }, t
        }(),
        _ = function() {
            function t() {
                this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}
            }
            return t.clone = function(e) {
                var n = new t;
                return e && (n._breadcrumbs = Object(c.e)(e._breadcrumbs), n._tags = Object(c.a)({}, e._tags), n._extra = Object(c.a)({}, e._extra), n._contexts = Object(c.a)({}, e._contexts), n._user = e._user, n._level = e._level, n._span = e._span, n._session = e._session, n._transactionName = e._transactionName, n._fingerprint = e._fingerprint, n._eventProcessors = Object(c.e)(e._eventProcessors)), n
            }, t.prototype.addScopeListener = function(t) {
                this._scopeListeners.push(t)
            }, t.prototype.addEventProcessor = function(t) {
                return this._eventProcessors.push(t), this
            }, t.prototype.setUser = function(t) {
                return this._user = t || {}, this._session && this._session.update({
                    user: t
                }), this._notifyScopeListeners(), this
            }, t.prototype.getUser = function() {
                return this._user
            }, t.prototype.setTags = function(t) {
                return this._tags = Object(c.a)(Object(c.a)({}, this._tags), t), this._notifyScopeListeners(), this
            }, t.prototype.setTag = function(t, e) {
                var n;
                return this._tags = Object(c.a)(Object(c.a)({}, this._tags), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
            }, t.prototype.setExtras = function(t) {
                return this._extra = Object(c.a)(Object(c.a)({}, this._extra), t), this._notifyScopeListeners(), this
            }, t.prototype.setExtra = function(t, e) {
                var n;
                return this._extra = Object(c.a)(Object(c.a)({}, this._extra), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
            }, t.prototype.setFingerprint = function(t) {
                return this._fingerprint = t, this._notifyScopeListeners(), this
            }, t.prototype.setLevel = function(t) {
                return this._level = t, this._notifyScopeListeners(), this
            }, t.prototype.setTransactionName = function(t) {
                return this._transactionName = t, this._notifyScopeListeners(), this
            }, t.prototype.setTransaction = function(t) {
                return this.setTransactionName(t)
            }, t.prototype.setContext = function(t, e) {
                var n;
                return null === e ? delete this._contexts[t] : this._contexts = Object(c.a)(Object(c.a)({}, this._contexts), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
            }, t.prototype.setSpan = function(t) {
                return this._span = t, this._notifyScopeListeners(), this
            }, t.prototype.getSpan = function() {
                return this._span
            }, t.prototype.getTransaction = function() {
                var t, e, n, r, o = this.getSpan();
                return (null === (t = o) || void 0 === t ? void 0 : t.transaction) ? null === (e = o) || void 0 === e ? void 0 : e.transaction : (null === (r = null === (n = o) || void 0 === n ? void 0 : n.spanRecorder) || void 0 === r ? void 0 : r.spans[0]) ? o.spanRecorder.spans[0] : void 0
            }, t.prototype.setSession = function(t) {
                return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
            }, t.prototype.getSession = function() {
                return this._session
            }, t.prototype.update = function(e) {
                if (!e) return this;
                if ("function" == typeof e) {
                    var n = e(this);
                    return n instanceof t ? n : this
                }
                return e instanceof t ? (this._tags = Object(c.a)(Object(c.a)({}, this._tags), e._tags), this._extra = Object(c.a)(Object(c.a)({}, this._extra), e._extra), this._contexts = Object(c.a)(Object(c.a)({}, this._contexts), e._contexts), e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint)) : Object(b.h)(e) && (e = e, this._tags = Object(c.a)(Object(c.a)({}, this._tags), e.tags), this._extra = Object(c.a)(Object(c.a)({}, this._extra), e.extra), this._contexts = Object(c.a)(Object(c.a)({}, this._contexts), e.contexts), e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint)), this
            }, t.prototype.clear = function() {
                return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this
            }, t.prototype.addBreadcrumb = function(t, e) {
                var n = Object(c.a)({
                    timestamp: Object(l.a)()
                }, t);
                return this._breadcrumbs = void 0 !== e && e >= 0 ? Object(c.e)(this._breadcrumbs, [n]).slice(-e) : Object(c.e)(this._breadcrumbs, [n]), this._notifyScopeListeners(), this
            }, t.prototype.clearBreadcrumbs = function() {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this
            }, t.prototype.applyToEvent = function(t, e) {
                var n;
                if (this._extra && Object.keys(this._extra).length && (t.extra = Object(c.a)(Object(c.a)({}, this._extra), t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = Object(c.a)(Object(c.a)({}, this._tags), t.tags)), this._user && Object.keys(this._user).length && (t.user = Object(c.a)(Object(c.a)({}, this._user), t.user)), this._contexts && Object.keys(this._contexts).length && (t.contexts = Object(c.a)(Object(c.a)({}, this._contexts), t.contexts)), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
                    t.contexts = Object(c.a)({
                        trace: this._span.getTraceContext()
                    }, t.contexts);
                    var r = null === (n = this._span.transaction) || void 0 === n ? void 0 : n.name;
                    r && (t.tags = Object(c.a)({
                        transaction: r
                    }, t.tags))
                }
                return this._applyFingerprint(t), t.breadcrumbs = Object(c.e)(t.breadcrumbs || [], this._breadcrumbs), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, this._notifyEventProcessors(Object(c.e)(w(), this._eventProcessors), t, e)
            }, t.prototype._notifyEventProcessors = function(t, e, n, r) {
                var o = this;
                return void 0 === r && (r = 0), new m(function(i, a) {
                    var s = t[r];
                    if (null === e || "function" != typeof s) i(e);
                    else {
                        var u = s(Object(c.a)({}, e), n);
                        Object(b.m)(u) ? u.then(function(e) {
                            return o._notifyEventProcessors(t, e, n, r + 1).then(i)
                        }).then(null, a) : o._notifyEventProcessors(t, u, n, r + 1).then(i).then(null, a)
                    }
                })
            }, t.prototype._notifyScopeListeners = function() {
                var t = this;
                this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(function(e) {
                    e(t)
                }), this._notifyingListeners = !1)
            }, t.prototype._applyFingerprint = function(t) {
                t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
            }, t
        }();

    function w() {
        var t = Object(u.e)();
        return t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors
    }

    function x(t) {
        w().push(t)
    }! function(t) {
        t.Ok = "ok", t.Exited = "exited", t.Crashed = "crashed", t.Abnormal = "abnormal"
    }(y || (y = {}));
    var E, S = n(4),
        C = function() {
            function t(t) {
                this.errors = 0, this.sid = Object(u.i)(), this.timestamp = Date.now(), this.started = Date.now(), this.duration = 0, this.status = y.Ok, t && this.update(t)
            }
            return t.prototype.update = function(t) {
                void 0 === t && (t = {}), t.user && (t.user.ip_address && (this.ipAddress = t.user.ip_address), t.did || (this.did = t.user.id || t.user.email || t.user.username)), this.timestamp = t.timestamp || Date.now(), t.sid && (this.sid = 32 === t.sid.length ? t.sid : Object(u.i)()), t.did && (this.did = "" + t.did), "number" == typeof t.started && (this.started = t.started), "number" == typeof t.duration ? this.duration = t.duration : this.duration = this.timestamp - this.started, t.release && (this.release = t.release), t.environment && (this.environment = t.environment), t.ipAddress && (this.ipAddress = t.ipAddress), t.userAgent && (this.userAgent = t.userAgent), "number" == typeof t.errors && (this.errors = t.errors), t.status && (this.status = t.status)
            }, t.prototype.close = function(t) {
                t ? this.update({
                    status: t
                }) : this.status === y.Ok ? this.update({
                    status: y.Exited
                }) : this.update()
            }, t.prototype.toJSON = function() {
                return Object(S.a)({
                    sid: "" + this.sid,
                    init: !0,
                    started: new Date(this.started).toISOString(),
                    timestamp: new Date(this.timestamp).toISOString(),
                    status: this.status,
                    errors: this.errors,
                    did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                    duration: this.duration,
                    attrs: Object(S.a)({
                        release: this.release,
                        environment: this.environment,
                        ip_address: this.ipAddress,
                        user_agent: this.userAgent
                    })
                })
            }, t
        }(),
        O = 3,
        j = function() {
            function t(t, e, n) {
                void 0 === e && (e = new _), void 0 === n && (n = O), this._version = n, this._stack = [{}], this.getStackTop().scope = e, this.bindClient(t)
            }
            return t.prototype.isOlderThan = function(t) {
                return this._version < t
            }, t.prototype.bindClient = function(t) {
                this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
            }, t.prototype.pushScope = function() {
                var t = _.clone(this.getScope());
                return this.getStack().push({
                    client: this.getClient(),
                    scope: t
                }), t
            }, t.prototype.popScope = function() {
                return !(this.getStack().length <= 1) && !!this.getStack().pop()
            }, t.prototype.withScope = function(t) {
                var e = this.pushScope();
                try {
                    t(e)
                } finally {
                    this.popScope()
                }
            }, t.prototype.getClient = function() {
                return this.getStackTop().client
            }, t.prototype.getScope = function() {
                return this.getStackTop().scope
            }, t.prototype.getStack = function() {
                return this._stack
            }, t.prototype.getStackTop = function() {
                return this._stack[this._stack.length - 1]
            }, t.prototype.captureException = function(t, e) {
                var n = this._lastEventId = Object(u.i)(),
                    r = e;
                if (!e) {
                    var o = void 0;
                    try {
                        throw new Error("Sentry syntheticException")
                    } catch (t) {
                        o = t
                    }
                    r = {
                        originalException: t,
                        syntheticException: o
                    }
                }
                return this._invokeClient("captureException", t, Object(c.a)(Object(c.a)({}, r), {
                    event_id: n
                })), n
            }, t.prototype.captureMessage = function(t, e, n) {
                var r = this._lastEventId = Object(u.i)(),
                    o = n;
                if (!n) {
                    var i = void 0;
                    try {
                        throw new Error(t)
                    } catch (t) {
                        i = t
                    }
                    o = {
                        originalException: t,
                        syntheticException: i
                    }
                }
                return this._invokeClient("captureMessage", t, e, Object(c.a)(Object(c.a)({}, o), {
                    event_id: r
                })), r
            }, t.prototype.captureEvent = function(t, e) {
                var n = this._lastEventId = Object(u.i)();
                return this._invokeClient("captureEvent", t, Object(c.a)(Object(c.a)({}, e), {
                    event_id: n
                })), n
            }, t.prototype.lastEventId = function() {
                return this._lastEventId
            }, t.prototype.addBreadcrumb = function(t, e) {
                var n = this.getStackTop(),
                    r = n.scope,
                    o = n.client;
                if (r && o) {
                    var i = o.getOptions && o.getOptions() || {},
                        a = i.beforeBreadcrumb,
                        s = void 0 === a ? null : a,
                        d = i.maxBreadcrumbs,
                        p = void 0 === d ? 100 : d;
                    if (!(p <= 0)) {
                        var h = Object(l.a)(),
                            f = Object(c.a)({
                                timestamp: h
                            }, t),
                            g = s ? Object(u.c)(function() {
                                return s(f, e)
                            }) : f;
                        null !== g && r.addBreadcrumb(g, Math.min(p, 100))
                    }
                }
            }, t.prototype.setUser = function(t) {
                var e = this.getScope();
                e && e.setUser(t)
            }, t.prototype.setTags = function(t) {
                var e = this.getScope();
                e && e.setTags(t)
            }, t.prototype.setExtras = function(t) {
                var e = this.getScope();
                e && e.setExtras(t)
            }, t.prototype.setTag = function(t, e) {
                var n = this.getScope();
                n && n.setTag(t, e)
            }, t.prototype.setExtra = function(t, e) {
                var n = this.getScope();
                n && n.setExtra(t, e)
            }, t.prototype.setContext = function(t, e) {
                var n = this.getScope();
                n && n.setContext(t, e)
            }, t.prototype.configureScope = function(t) {
                var e = this.getStackTop(),
                    n = e.scope,
                    r = e.client;
                n && r && t(n)
            }, t.prototype.run = function(t) {
                var e = L(this);
                try {
                    t(this)
                } finally {
                    L(e)
                }
            }, t.prototype.getIntegration = function(t) {
                var e = this.getClient();
                if (!e) return null;
                try {
                    return e.getIntegration(t)
                } catch (e) {
                    return g.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
                }
            }, t.prototype.startSpan = function(t) {
                return this._callExtensionMethod("startSpan", t)
            }, t.prototype.startTransaction = function(t, e) {
                return this._callExtensionMethod("startTransaction", t, e)
            }, t.prototype.traceHeaders = function() {
                return this._callExtensionMethod("traceHeaders")
            }, t.prototype.startSession = function(t) {
                this.endSession();
                var e = this.getStackTop(),
                    n = e.scope,
                    r = e.client,
                    o = r && r.getOptions() || {},
                    i = o.release,
                    a = o.environment,
                    s = new C(Object(c.a)(Object(c.a)({
                        release: i,
                        environment: a
                    }, n && {
                        user: n.getUser()
                    }), t));
                return n && n.setSession(s), s
            }, t.prototype.endSession = function() {
                var t = this.getStackTop(),
                    e = t.scope,
                    n = t.client;
                if (e) {
                    var r = e.getSession && e.getSession();
                    r && (r.close(), n && n.captureSession && n.captureSession(r), e.setSession())
                }
            }, t.prototype._invokeClient = function(t) {
                for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                var o = this.getStackTop(),
                    i = o.scope,
                    a = o.client;
                a && a[t] && (e = a)[t].apply(e, Object(c.e)(n, [i]))
            }, t.prototype._callExtensionMethod = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                var r = k().__SENTRY__;
                if (r && r.extensions && "function" == typeof r.extensions[t]) return r.extensions[t].apply(this, e);
                g.warn("Extension method " + t + " couldn't be found, doing nothing.")
            }, t
        }();

    function k() {
        var t = Object(u.e)();
        return t.__SENTRY__ = t.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, t
    }

    function L(t) {
        var e = k(),
            n = I(e);
        return M(e, t), n
    }

    function T() {
        var t = k();
        return P(t) && !I(t).isOlderThan(O) || M(t, new j), Object(v.b)() ? function(t) {
            try {
                var e = (r = k().__SENTRY__) && r.extensions && r.extensions.domain && r.extensions.domain.active;
                if (!e) return I(t);
                if (!P(e) || I(e).isOlderThan(O)) {
                    var n = I(t).getStackTop();
                    M(e, new j(n.client, _.clone(n.scope)))
                }
                return I(e)
            } catch (e) {
                return I(t)
            }
            var r
        }(t) : I(t)
    }

    function P(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }

    function I(t) {
        return t && t.__SENTRY__ && t.__SENTRY__.hub ? t.__SENTRY__.hub : (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new j, t.__SENTRY__.hub)
    }

    function M(t, e) {
        return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = e, !0)
    }

    function A(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        var r = T();
        if (r && r[t]) return r[t].apply(r, Object(c.e)(e));
        throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
    }

    function B(t, e) {
        var n;
        try {
            throw new Error("Sentry syntheticException")
        } catch (t) {
            n = t
        }
        return A("captureException", t, {
            captureContext: e,
            originalException: t,
            syntheticException: n
        })
    }

    function D(t, e) {
        var n;
        try {
            throw new Error(t)
        } catch (t) {
            n = t
        }
        var r = "string" != typeof e ? {
            captureContext: e
        } : void 0;
        return A("captureMessage", t, "string" == typeof e ? e : void 0, Object(c.a)({
            originalException: t,
            syntheticException: n
        }, r))
    }

    function G(t) {
        return A("captureEvent", t)
    }

    function R(t) {
        A("configureScope", t)
    }

    function N(t) {
        A("addBreadcrumb", t)
    }

    function F(t, e) {
        A("setContext", t, e)
    }

    function U(t) {
        A("setExtras", t)
    }

    function H(t) {
        A("setTags", t)
    }

    function z(t, e) {
        A("setExtra", t, e)
    }

    function J(t, e) {
        A("setTag", t, e)
    }

    function q(t) {
        A("setUser", t)
    }

    function W(t) {
        A("withScope", t)
    }

    function V(t, e) {
        return A("startTransaction", Object(c.a)({}, t), e)
    }
    var Y = function() {
            function t() {
                this.name = t.id
            }
            return t.prototype.setupOnce = function() {
                E = Function.prototype.toString, Function.prototype.toString = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = this.__sentry_original__ || this;
                    return E.apply(n, t)
                }
            }, t.id = "FunctionToString", t
        }(),
        Z = n(5),
        X = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
        $ = function() {
            function t(e) {
                void 0 === e && (e = {}), this._options = e, this.name = t.id
            }
            return t.prototype.setupOnce = function() {
                x(function(e) {
                    var n = T();
                    if (!n) return e;
                    var r = n.getIntegration(t);
                    if (r) {
                        var o = n.getClient(),
                            i = o ? o.getOptions() : {},
                            a = r._mergeOptions(i);
                        if (r._shouldDropEvent(e, a)) return null
                    }
                    return e
                })
            }, t.prototype._shouldDropEvent = function(t, e) {
                return this._isSentryError(t, e) ? (g.warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(u.d)(t)), !0) : this._isIgnoredError(t, e) ? (g.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(u.d)(t)), !0) : this._isDeniedUrl(t, e) ? (g.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + Object(u.d)(t) + ".\nUrl: " + this._getEventFilterUrl(t)), !0) : !this._isAllowedUrl(t, e) && (g.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Object(u.d)(t) + ".\nUrl: " + this._getEventFilterUrl(t)), !0)
            }, t.prototype._isSentryError = function(t, e) {
                if (!e.ignoreInternal) return !1;
                try {
                    return t && t.exception && t.exception.values && t.exception.values[0] && "SentryError" === t.exception.values[0].type || !1
                } catch (t) {
                    return !1
                }
            }, t.prototype._isIgnoredError = function(t, e) {
                return !(!e.ignoreErrors || !e.ignoreErrors.length) && this._getPossibleEventMessages(t).some(function(t) {
                    return e.ignoreErrors.some(function(e) {
                        return Object(Z.a)(t, e)
                    })
                })
            }, t.prototype._isDeniedUrl = function(t, e) {
                if (!e.denyUrls || !e.denyUrls.length) return !1;
                var n = this._getEventFilterUrl(t);
                return !!n && e.denyUrls.some(function(t) {
                    return Object(Z.a)(n, t)
                })
            }, t.prototype._isAllowedUrl = function(t, e) {
                if (!e.allowUrls || !e.allowUrls.length) return !0;
                var n = this._getEventFilterUrl(t);
                return !n || e.allowUrls.some(function(t) {
                    return Object(Z.a)(n, t)
                })
            }, t.prototype._mergeOptions = function(t) {
                return void 0 === t && (t = {}), {
                    allowUrls: Object(c.e)(this._options.whitelistUrls || [], this._options.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []),
                    denyUrls: Object(c.e)(this._options.blacklistUrls || [], this._options.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []),
                    ignoreErrors: Object(c.e)(this._options.ignoreErrors || [], t.ignoreErrors || [], X),
                    ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal
                }
            }, t.prototype._getPossibleEventMessages = function(t) {
                if (t.message) return [t.message];
                if (t.exception) try {
                    var e = t.exception.values && t.exception.values[0] || {},
                        n = e.type,
                        r = void 0 === n ? "" : n,
                        o = e.value,
                        i = void 0 === o ? "" : o;
                    return ["" + i, r + ": " + i]
                } catch (e) {
                    return g.error("Cannot extract message for event " + Object(u.d)(t)), []
                }
                return []
            }, t.prototype._getEventFilterUrl = function(t) {
                try {
                    if (t.stacktrace) {
                        var e = t.stacktrace.frames;
                        return e && e[e.length - 1].filename || null
                    }
                    if (t.exception) {
                        var n = t.exception.values && t.exception.values[0].stacktrace && t.exception.values[0].stacktrace.frames;
                        return n && n[n.length - 1].filename || null
                    }
                    return null
                } catch (e) {
                    return g.error("Cannot extract url for event " + Object(u.d)(t)), null
                }
            }, t.id = "InboundFilters", t
        }(),
        K = Object.setPrototypeOf || ({
                __proto__: []
            }
            instanceof Array ? function(t, e) {
                return t.__proto__ = e, t
            } : function(t, e) {
                for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
                return t
            });
    var Q = function(t) {
            function e(e) {
                var n = this.constructor,
                    r = t.call(this, e) || this;
                return r.message = e, r.name = n.prototype.constructor.name, K(r, n.prototype), r
            }
            return Object(c.b)(e, t), e
        }(Error),
        tt = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
        et = function() {
            function t(t) {
                "string" == typeof t ? this._fromString(t) : this._fromComponents(t), this._validate()
            }
            return t.prototype.toString = function(t) {
                void 0 === t && (t = !1);
                var e = this,
                    n = e.host,
                    r = e.path,
                    o = e.pass,
                    i = e.port,
                    a = e.projectId;
                return e.protocol + "://" + e.user + (t && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r ? r + "/" : r) + a
            }, t.prototype._fromString = function(t) {
                var e = tt.exec(t);
                if (!e) throw new Q("Invalid Dsn");
                var n = Object(c.c)(e.slice(1), 6),
                    r = n[0],
                    o = n[1],
                    i = n[2],
                    a = void 0 === i ? "" : i,
                    s = n[3],
                    u = n[4],
                    l = void 0 === u ? "" : u,
                    d = "",
                    p = n[5],
                    h = p.split("/");
                if (h.length > 1 && (d = h.slice(0, -1).join("/"), p = h.pop()), p) {
                    var f = p.match(/^\d+/);
                    f && (p = f[0])
                }
                this._fromComponents({
                    host: s,
                    pass: a,
                    path: d,
                    projectId: p,
                    port: l,
                    protocol: r,
                    user: o
                })
            }, t.prototype._fromComponents = function(t) {
                this.protocol = t.protocol, this.user = t.user, this.pass = t.pass || "", this.host = t.host, this.port = t.port || "", this.path = t.path || "", this.projectId = t.projectId
            }, t.prototype._validate = function() {
                var t = this;
                if (["protocol", "user", "host", "projectId"].forEach(function(e) {
                        if (!t[e]) throw new Q("Invalid Dsn: " + e + " missing")
                    }), !this.projectId.match(/^\d+$/)) throw new Q("Invalid Dsn: Invalid projectId " + this.projectId);
                if ("http" !== this.protocol && "https" !== this.protocol) throw new Q("Invalid Dsn: Invalid protocol " + this.protocol);
                if (this.port && isNaN(parseInt(this.port, 10))) throw new Q("Invalid Dsn: Invalid port " + this.port)
            }, t
        }(),
        nt = [];

    function rt(t) {
        var e = {};
        return function(t) {
            var e = t.defaultIntegrations && Object(c.e)(t.defaultIntegrations) || [],
                n = t.integrations,
                r = [];
            if (Array.isArray(n)) {
                var o = n.map(function(t) {
                        return t.name
                    }),
                    i = [];
                e.forEach(function(t) {
                    -1 === o.indexOf(t.name) && -1 === i.indexOf(t.name) && (r.push(t), i.push(t.name))
                }), n.forEach(function(t) {
                    -1 === i.indexOf(t.name) && (r.push(t), i.push(t.name))
                })
            } else "function" == typeof n ? (r = n(e), r = Array.isArray(r) ? r : [r]) : r = Object(c.e)(e);
            var a = r.map(function(t) {
                return t.name
            });
            return -1 !== a.indexOf("Debug") && r.push.apply(r, Object(c.e)(r.splice(a.indexOf("Debug"), 1))), r
        }(t).forEach(function(t) {
            e[t.name] = t,
                function(t) {
                    -1 === nt.indexOf(t.name) && (t.setupOnce(x, T), nt.push(t.name), g.log("Integration installed: " + t.name))
                }(t)
        }), e
    }
    var ot = function() {
            function t(t, e) {
                this._integrations = {}, this._processing = 0, this._backend = new t(e), this._options = e, e.dsn && (this._dsn = new et(e.dsn))
            }
            return t.prototype.captureException = function(t, e, n) {
                var r = this,
                    o = e && e.event_id;
                return this._process(this._getBackend().eventFromException(t, e).then(function(t) {
                    return r._captureEvent(t, e, n)
                }).then(function(t) {
                    o = t
                })), o
            }, t.prototype.captureMessage = function(t, e, n, r) {
                var o = this,
                    i = n && n.event_id,
                    a = Object(b.i)(t) ? this._getBackend().eventFromMessage(String(t), e, n) : this._getBackend().eventFromException(t, n);
                return this._process(a.then(function(t) {
                    return o._captureEvent(t, n, r)
                }).then(function(t) {
                    i = t
                })), i
            }, t.prototype.captureEvent = function(t, e, n) {
                var r = e && e.event_id;
                return this._process(this._captureEvent(t, e, n).then(function(t) {
                    r = t
                })), r
            }, t.prototype.captureSession = function(t) {
                t.release ? this._sendSession(t) : g.warn("Discarded session because of missing release")
            }, t.prototype.getDsn = function() {
                return this._dsn
            }, t.prototype.getOptions = function() {
                return this._options
            }, t.prototype.flush = function(t) {
                var e = this;
                return this._isClientProcessing(t).then(function(n) {
                    return e._getBackend().getTransport().close(t).then(function(t) {
                        return n && t
                    })
                })
            }, t.prototype.close = function(t) {
                var e = this;
                return this.flush(t).then(function(t) {
                    return e.getOptions().enabled = !1, t
                })
            }, t.prototype.setupIntegrations = function() {
                this._isEnabled() && (this._integrations = rt(this._options))
            }, t.prototype.getIntegration = function(t) {
                try {
                    return this._integrations[t.id] || null
                } catch (e) {
                    return g.warn("Cannot retrieve integration " + t.id + " from the current Client"), null
                }
            }, t.prototype._updateSessionFromEvent = function(t, e) {
                var n, r, o, i = !1,
                    a = !1,
                    s = e.exception && e.exception.values;
                if (s) {
                    a = !0;
                    try {
                        for (var u = Object(c.f)(s), l = u.next(); !l.done; l = u.next()) {
                            var d = l.value.mechanism;
                            if (d && !1 === d.handled) {
                                i = !0;
                                break
                            }
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            l && !l.done && (r = u.return) && r.call(u)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }
                var p = e.user;
                if (!t.userAgent) {
                    var h = e.request ? e.request.headers : {};
                    for (var f in h)
                        if ("user-agent" === f.toLowerCase()) {
                            o = h[f];
                            break
                        }
                }
                t.update(Object(c.a)(Object(c.a)({}, i && {
                    status: y.Crashed
                }), {
                    user: p,
                    userAgent: o,
                    errors: t.errors + Number(a || i)
                }))
            }, t.prototype._sendSession = function(t) {
                this._getBackend().sendSession(t)
            }, t.prototype._isClientProcessing = function(t) {
                var e = this;
                return new m(function(n) {
                    var r = 0,
                        o = setInterval(function() {
                            0 == e._processing ? (clearInterval(o), n(!0)) : (r += 1, t && r >= t && (clearInterval(o), n(!1)))
                        }, 1)
                })
            }, t.prototype._getBackend = function() {
                return this._backend
            }, t.prototype._isEnabled = function() {
                return !1 !== this.getOptions().enabled && void 0 !== this._dsn
            }, t.prototype._prepareEvent = function(t, e, n) {
                var r = this,
                    o = this.getOptions().normalizeDepth,
                    i = void 0 === o ? 3 : o,
                    a = Object(c.a)(Object(c.a)({}, t), {
                        event_id: t.event_id || (n && n.event_id ? n.event_id : Object(u.i)()),
                        timestamp: t.timestamp || Object(l.a)()
                    });
                this._applyClientOptions(a), this._applyIntegrationsMetadata(a);
                var s = e;
                n && n.captureContext && (s = _.clone(s).update(n.captureContext));
                var d = m.resolve(a);
                return s && (d = s.applyToEvent(a, n)), d.then(function(t) {
                    return "number" == typeof i && i > 0 ? r._normalizeEvent(t, i) : t
                })
            }, t.prototype._normalizeEvent = function(t, e) {
                if (!t) return null;
                var n = Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)({}, t), t.breadcrumbs && {
                    breadcrumbs: t.breadcrumbs.map(function(t) {
                        return Object(c.a)(Object(c.a)({}, t), t.data && {
                            data: Object(S.d)(t.data, e)
                        })
                    })
                }), t.user && {
                    user: Object(S.d)(t.user, e)
                }), t.contexts && {
                    contexts: Object(S.d)(t.contexts, e)
                }), t.extra && {
                    extra: Object(S.d)(t.extra, e)
                });
                return t.contexts && t.contexts.trace && (n.contexts.trace = t.contexts.trace), n
            }, t.prototype._applyClientOptions = function(t) {
                var e = this.getOptions(),
                    n = e.environment,
                    r = e.release,
                    o = e.dist,
                    i = e.maxValueLength,
                    a = void 0 === i ? 250 : i;
                "environment" in t || (t.environment = "environment" in e ? n : "production"), void 0 === t.release && void 0 !== r && (t.release = r), void 0 === t.dist && void 0 !== o && (t.dist = o), t.message && (t.message = Object(Z.d)(t.message, a));
                var s = t.exception && t.exception.values && t.exception.values[0];
                s && s.value && (s.value = Object(Z.d)(s.value, a));
                var c = t.request;
                c && c.url && (c.url = Object(Z.d)(c.url, a))
            }, t.prototype._applyIntegrationsMetadata = function(t) {
                var e = t.sdk,
                    n = Object.keys(this._integrations);
                e && n.length > 0 && (e.integrations = n)
            }, t.prototype._sendEvent = function(t) {
                this._getBackend().sendEvent(t)
            }, t.prototype._captureEvent = function(t, e, n) {
                return this._processEvent(t, e, n).then(function(t) {
                    return t.event_id
                }, function(t) {
                    g.error(t)
                })
            }, t.prototype._processEvent = function(t, e, n) {
                var r = this,
                    o = this.getOptions(),
                    i = o.beforeSend,
                    a = o.sampleRate;
                if (!this._isEnabled()) return m.reject(new Q("SDK not enabled, will not send event."));
                var s = "transaction" === t.type;
                return !s && "number" == typeof a && Math.random() > a ? m.reject(new Q("Discarding event because it's not included in the random sample (sampling rate = " + a + ")")) : this._prepareEvent(t, n, e).then(function(t) {
                    if (null === t) throw new Q("An event processor returned null, will not send event.");
                    if (e && e.data && !0 === e.data.__sentry__ || s || !i) return t;
                    var n = i(t, e);
                    if (void 0 === n) throw new Q("`beforeSend` method has to return `null` or a valid event.");
                    return Object(b.m)(n) ? n.then(function(t) {
                        return t
                    }, function(t) {
                        throw new Q("beforeSend rejected with " + t)
                    }) : n
                }).then(function(t) {
                    if (null === t) throw new Q("`beforeSend` returned `null`, will not send event.");
                    var e = n && n.getSession && n.getSession();
                    return !s && e && r._updateSessionFromEvent(e, t), r._sendEvent(t), t
                }).then(null, function(t) {
                    if (t instanceof Q) throw t;
                    throw r.captureException(t, {
                        data: {
                            __sentry__: !0
                        },
                        originalException: t
                    }), new Q("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t)
                })
            }, t.prototype._process = function(t) {
                var e = this;
                this._processing += 1, t.then(function(t) {
                    return e._processing -= 1, t
                }, function(t) {
                    return e._processing -= 1, t
                })
            }, t
        }(),
        it = function() {
            function t() {}
            return t.prototype.sendEvent = function(t) {
                return m.resolve({
                    reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                    status: s.Skipped
                })
            }, t.prototype.close = function(t) {
                return m.resolve(!0)
            }, t
        }(),
        at = function() {
            function t(t) {
                this._options = t, this._options.dsn || g.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
            }
            return t.prototype.eventFromException = function(t, e) {
                throw new Q("Backend has to implement `eventFromException` method")
            }, t.prototype.eventFromMessage = function(t, e, n) {
                throw new Q("Backend has to implement `eventFromMessage` method")
            }, t.prototype.sendEvent = function(t) {
                this._transport.sendEvent(t).then(null, function(t) {
                    g.error("Error while sending event: " + t)
                })
            }, t.prototype.sendSession = function(t) {
                this._transport.sendSession ? this._transport.sendSession(t).then(null, function(t) {
                    g.error("Error while sending session: " + t)
                }) : g.warn("Dropping session because custom transport doesn't implement sendSession")
            }, t.prototype.getTransport = function() {
                return this._transport
            }, t.prototype._setupTransport = function() {
                return new it
            }, t
        }();

    function st() {
        if (!("fetch" in Object(u.e)())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch (t) {
            return !1
        }
    }

    function ct(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }

    function ut() {
        if (!st()) return !1;
        try {
            return new Request("_", {
                referrerPolicy: "origin"
            }), !0
        } catch (t) {
            return !1
        }
    }
    var lt = "?",
        dt = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        pt = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. \/=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        ht = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        ft = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        gt = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        vt = /Minified React error #\d+;/i;

    function bt(t) {
        var e = null,
            n = 0;
        t && ("number" == typeof t.framesToPop ? n = t.framesToPop : vt.test(t.message) && (n = 1));
        try {
            if (e = function(t) {
                    if (!t || !t.stacktrace) return null;
                    for (var e, n = t.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, o = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, i = n.split("\n"), a = [], s = 0; s < i.length; s += 2) {
                        var c = null;
                        (e = r.exec(i[s])) ? c = {
                            url: e[2],
                            func: e[3],
                            args: [],
                            line: +e[1],
                            column: null
                        }: (e = o.exec(i[s])) && (c = {
                            url: e[6],
                            func: e[3] || e[4],
                            args: e[5] ? e[5].split(",") : [],
                            line: +e[1],
                            column: +e[2]
                        }), c && (!c.func && c.line && (c.func = lt), a.push(c))
                    }
                    if (!a.length) return null;
                    return {
                        message: mt(t),
                        name: t.name,
                        stack: a
                    }
                }(t)) return yt(e, n)
        } catch (t) {}
        try {
            if (e = function(t) {
                    if (!t || !t.stack) return null;
                    for (var e, n, r, o = [], i = t.stack.split("\n"), a = 0; a < i.length; ++a) {
                        if (n = dt.exec(i[a])) {
                            var s = n[2] && 0 === n[2].indexOf("native");
                            n[2] && 0 === n[2].indexOf("eval") && (e = gt.exec(n[2])) && (n[2] = e[1], n[3] = e[2], n[4] = e[3]), r = {
                                url: n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2],
                                func: n[1] || lt,
                                args: s ? [n[2]] : [],
                                line: n[3] ? +n[3] : null,
                                column: n[4] ? +n[4] : null
                            }
                        } else if (n = ht.exec(i[a])) r = {
                            url: n[2],
                            func: n[1] || lt,
                            args: [],
                            line: +n[3],
                            column: n[4] ? +n[4] : null
                        };
                        else {
                            if (!(n = pt.exec(i[a]))) continue;
                            n[3] && n[3].indexOf(" > eval") > -1 && (e = ft.exec(n[3])) ? (n[1] = n[1] || "eval", n[3] = e[1], n[4] = e[2], n[5] = "") : 0 !== a || n[5] || void 0 === t.columnNumber || (o[0].column = t.columnNumber + 1), r = {
                                url: n[3],
                                func: n[1] || lt,
                                args: n[2] ? n[2].split(",") : [],
                                line: n[4] ? +n[4] : null,
                                column: n[5] ? +n[5] : null
                            }
                        }!r.func && r.line && (r.func = lt), o.push(r)
                    }
                    if (!o.length) return null;
                    return {
                        message: mt(t),
                        name: t.name,
                        stack: o
                    }
                }(t)) return yt(e, n)
        } catch (t) {}
        return {
            message: mt(t),
            name: t && t.name,
            stack: [],
            failed: !0
        }
    }

    function yt(t, e) {
        try {
            return Object(c.a)(Object(c.a)({}, t), {
                stack: t.stack.slice(e)
            })
        } catch (e) {
            return t
        }
    }

    function mt(t) {
        var e = t && t.message;
        return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
    }
    var _t = 50;

    function wt(t) {
        var e = Et(t.stack),
            n = {
                type: t.name,
                value: t.message
            };
        return e && e.length && (n.stacktrace = {
            frames: e
        }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
    }

    function xt(t) {
        return {
            exception: {
                values: [wt(t)]
            }
        }
    }

    function Et(t) {
        if (!t || !t.length) return [];
        var e = t,
            n = e[0].func || "",
            r = e[e.length - 1].func || "";
        return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (e = e.slice(1)), -1 !== r.indexOf("sentryWrapped") && (e = e.slice(0, -1)), e.slice(0, _t).map(function(t) {
            return {
                colno: null === t.column ? void 0 : t.column,
                filename: t.url || e[0].url,
                function: t.func || "?",
                in_app: !0,
                lineno: null === t.line ? void 0 : t.line
            }
        }).reverse()
    }

    function St(t, e, n) {
        var r = Ot(e, n && n.syntheticException || void 0, {
            attachStacktrace: t.attachStacktrace
        });
        return Object(u.a)(r, {
            handled: !0,
            type: "generic"
        }), r.level = a.Error, n && n.event_id && (r.event_id = n.event_id), m.resolve(r)
    }

    function Ct(t, e, n, r) {
        void 0 === n && (n = a.Info);
        var o = jt(e, r && r.syntheticException || void 0, {
            attachStacktrace: t.attachStacktrace
        });
        return o.level = n, r && r.event_id && (o.event_id = r.event_id), m.resolve(o)
    }

    function Ot(t, e, n) {
        var r;
        if (void 0 === n && (n = {}), Object(b.e)(t) && t.error) return r = xt(bt(t = t.error));
        if (Object(b.a)(t) || Object(b.b)(t)) {
            var o = t,
                i = o.name || (Object(b.a)(o) ? "DOMError" : "DOMException"),
                a = o.message ? i + ": " + o.message : i;
            return r = jt(a, e, n), Object(u.b)(r, a), "code" in o && (r.tags = Object(c.a)(Object(c.a)({}, r.tags), {
                "DOMException.code": "" + o.code
            })), r
        }
        return Object(b.d)(t) ? r = xt(bt(t)) : Object(b.h)(t) || Object(b.f)(t) ? (r = function(t, e, n) {
            var r = {
                exception: {
                    values: [{
                        type: Object(b.f)(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Object(S.b)(t)
                    }]
                },
                extra: {
                    __serialized__: Object(S.e)(t)
                }
            };
            if (e) {
                var o = Et(bt(e).stack);
                r.stacktrace = {
                    frames: o
                }
            }
            return r
        }(t, e, n.rejection), Object(u.a)(r, {
            synthetic: !0
        }), r) : (r = jt(t, e, n), Object(u.b)(r, "" + t, void 0), Object(u.a)(r, {
            synthetic: !0
        }), r)
    }

    function jt(t, e, n) {
        void 0 === n && (n = {});
        var r = {
            message: t
        };
        if (n.attachStacktrace && e) {
            var o = Et(bt(e).stack);
            r.stacktrace = {
                frames: o
            }
        }
        return r
    }

    function kt(t, e) {
        return {
            body: JSON.stringify({
                sent_at: (new Date).toISOString()
            }) + "\n" + JSON.stringify({
                type: "session"
            }) + "\n" + JSON.stringify(t),
            type: "session",
            url: e.getEnvelopeEndpointWithUrlEncodedAuth()
        }
    }

    function Lt(t, e) {
        var n = t.tags || {},
            r = n.__sentry_samplingMethod,
            o = n.__sentry_sampleRate,
            i = Object(c.d)(n, ["__sentry_samplingMethod", "__sentry_sampleRate"]);
        t.tags = i;
        var a = "transaction" === t.type,
            s = {
                body: JSON.stringify(t),
                type: t.type || "event",
                url: a ? e.getEnvelopeEndpointWithUrlEncodedAuth() : e.getStoreEndpointWithUrlEncodedAuth()
            };
        if (a) {
            var u = JSON.stringify({
                event_id: t.event_id,
                sent_at: (new Date).toISOString()
            }) + "\n" + JSON.stringify({
                type: t.type,
                sample_rates: [{
                    id: r,
                    rate: o
                }]
            }) + "\n" + s.body;
            s.body = u
        }
        return s
    }
    var Tt = function() {
            function t(t) {
                this.dsn = t, this._dsnObject = new et(t)
            }
            return t.prototype.getDsn = function() {
                return this._dsnObject
            }, t.prototype.getBaseApiEndpoint = function() {
                var t = this._dsnObject,
                    e = t.protocol ? t.protocol + ":" : "",
                    n = t.port ? ":" + t.port : "";
                return e + "//" + t.host + n + (t.path ? "/" + t.path : "") + "/api/"
            }, t.prototype.getStoreEndpoint = function() {
                return this._getIngestEndpoint("store")
            }, t.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                return this.getStoreEndpoint() + "?" + this._encodedAuth()
            }, t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
                return this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
            }, t.prototype.getStoreEndpointPath = function() {
                var t = this._dsnObject;
                return (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
            }, t.prototype.getRequestHeaders = function(t, e) {
                var n = this._dsnObject,
                    r = ["Sentry sentry_version=7"];
                return r.push("sentry_client=" + t + "/" + e), r.push("sentry_key=" + n.user), n.pass && r.push("sentry_secret=" + n.pass), {
                    "Content-Type": "application/json",
                    "X-Sentry-Auth": r.join(", ")
                }
            }, t.prototype.getReportDialogEndpoint = function(t) {
                void 0 === t && (t = {});
                var e = this._dsnObject,
                    n = this.getBaseApiEndpoint() + "embed/error-page/",
                    r = [];
                for (var o in r.push("dsn=" + e.toString()), t)
                    if ("dsn" !== o)
                        if ("user" === o) {
                            if (!t.user) continue;
                            t.user.name && r.push("name=" + encodeURIComponent(t.user.name)), t.user.email && r.push("email=" + encodeURIComponent(t.user.email))
                        } else r.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
                return r.length ? n + "?" + r.join("&") : n
            }, t.prototype._getEnvelopeEndpoint = function() {
                return this._getIngestEndpoint("envelope")
            }, t.prototype._getIngestEndpoint = function(t) {
                return "" + this.getBaseApiEndpoint() + this._dsnObject.projectId + "/" + t + "/"
            }, t.prototype._encodedAuth = function() {
                var t = {
                    sentry_key: this._dsnObject.user,
                    sentry_version: "7"
                };
                return Object(S.f)(t)
            }, t
        }(),
        Pt = function() {
            function t(t) {
                this._limit = t, this._buffer = []
            }
            return t.prototype.isReady = function() {
                return void 0 === this._limit || this.length() < this._limit
            }, t.prototype.add = function(t) {
                var e = this;
                return this.isReady() ? (-1 === this._buffer.indexOf(t) && this._buffer.push(t), t.then(function() {
                    return e.remove(t)
                }).then(null, function() {
                    return e.remove(t).then(null, function() {})
                }), t) : m.reject(new Q("Not adding Promise due to buffer limit reached."))
            }, t.prototype.remove = function(t) {
                return this._buffer.splice(this._buffer.indexOf(t), 1)[0]
            }, t.prototype.length = function() {
                return this._buffer.length
            }, t.prototype.drain = function(t) {
                var e = this;
                return new m(function(n) {
                    var r = setTimeout(function() {
                        t && t > 0 && n(!1)
                    }, t);
                    m.all(e._buffer).then(function() {
                        clearTimeout(r), n(!0)
                    }).then(null, function() {
                        n(!0)
                    })
                })
            }, t
        }(),
        It = function() {
            function t(t) {
                this.options = t, this._buffer = new Pt(30), this._rateLimits = {}, this._api = new Tt(this.options.dsn), this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
            }
            return t.prototype.sendEvent = function(t) {
                throw new Q("Transport Class has to implement `sendEvent` method")
            }, t.prototype.close = function(t) {
                return this._buffer.drain(t)
            }, t.prototype._handleResponse = function(t) {
                var e = t.requestType,
                    n = t.response,
                    r = t.headers,
                    o = t.resolve,
                    i = t.reject,
                    a = s.fromHttpCode(n.status);
                this._handleRateLimit(r) && g.warn("Too many requests, backing off until: " + this._disabledUntil(e)), a !== s.Success ? i(n) : o({
                    status: a
                })
            }, t.prototype._disabledUntil = function(t) {
                return this._rateLimits[t] || this._rateLimits.all
            }, t.prototype._isRateLimited = function(t) {
                return this._disabledUntil(t) > new Date(Date.now())
            }, t.prototype._handleRateLimit = function(t) {
                var e, n, r, o, i = Date.now(),
                    a = t["x-sentry-rate-limits"],
                    s = t["retry-after"];
                if (a) {
                    try {
                        for (var l = Object(c.f)(a.trim().split(",")), d = l.next(); !d.done; d = l.next()) {
                            var p = d.value.split(":", 2),
                                h = parseInt(p[0], 10),
                                f = 1e3 * (isNaN(h) ? 60 : h);
                            try {
                                for (var g = (r = void 0, Object(c.f)(p[1].split(";"))), v = g.next(); !v.done; v = g.next()) {
                                    var b = v.value;
                                    this._rateLimits[b || "all"] = new Date(i + f)
                                }
                            } catch (t) {
                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    v && !v.done && (o = g.return) && o.call(g)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            d && !d.done && (n = l.return) && n.call(l)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return !0
                }
                return !!s && (this._rateLimits.all = new Date(i + Object(u.g)(i, s)), !0)
            }, t
        }(),
        Mt = Object(u.e)(),
        At = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Object(c.b)(e, t), e.prototype.sendEvent = function(t) {
                return this._sendRequest(Lt(t, this._api), t)
            }, e.prototype.sendSession = function(t) {
                return this._sendRequest(kt(t, this._api), t)
            }, e.prototype._sendRequest = function(t, e) {
                var n = this;
                if (this._isRateLimited(t.type)) return Promise.reject({
                    event: e,
                    type: t.type,
                    reason: "Transport locked till " + this._disabledUntil(t.type) + " due to too many requests.",
                    status: 429
                });
                var r = {
                    body: t.body,
                    method: "POST",
                    referrerPolicy: ut() ? "origin" : ""
                };
                return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters), void 0 !== this.options.headers && (r.headers = this.options.headers), this._buffer.add(new m(function(e, o) {
                    Mt.fetch(t.url, r).then(function(r) {
                        var i = {
                            "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                            "retry-after": r.headers.get("Retry-After")
                        };
                        n._handleResponse({
                            requestType: t.type,
                            response: r,
                            headers: i,
                            resolve: e,
                            reject: o
                        })
                    }).catch(o)
                }))
            }, e
        }(It),
        Bt = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Object(c.b)(e, t), e.prototype.sendEvent = function(t) {
                return this._sendRequest(Lt(t, this._api), t)
            }, e.prototype.sendSession = function(t) {
                return this._sendRequest(kt(t, this._api), t)
            }, e.prototype._sendRequest = function(t, e) {
                var n = this;
                return this._isRateLimited(t.type) ? Promise.reject({
                    event: e,
                    type: t.type,
                    reason: "Transport locked till " + this._disabledUntil(t.type) + " due to too many requests.",
                    status: 429
                }) : this._buffer.add(new m(function(e, r) {
                    var o = new XMLHttpRequest;
                    for (var i in o.onreadystatechange = function() {
                            if (4 === o.readyState) {
                                var i = {
                                    "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                                    "retry-after": o.getResponseHeader("Retry-After")
                                };
                                n._handleResponse({
                                    requestType: t.type,
                                    response: o,
                                    headers: i,
                                    resolve: e,
                                    reject: r
                                })
                            }
                        }, o.open("POST", t.url), n.options.headers) n.options.headers.hasOwnProperty(i) && o.setRequestHeader(i, n.options.headers[i]);
                    o.send(t.body)
                }))
            }, e
        }(It),
        Dt = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Object(c.b)(e, t), e.prototype.eventFromException = function(t, e) {
                return St(this._options, t, e)
            }, e.prototype.eventFromMessage = function(t, e, n) {
                return void 0 === e && (e = a.Info), Ct(this._options, t, e, n)
            }, e.prototype._setupTransport = function() {
                if (!this._options.dsn) return t.prototype._setupTransport.call(this);
                var e = Object(c.a)(Object(c.a)({}, this._options.transportOptions), {
                    dsn: this._options.dsn
                });
                return this._options.transport ? new this._options.transport(e) : st() ? new At(e) : new Bt(e)
            }, e
        }(at),
        Gt = 0;

    function Rt() {
        return Gt > 0
    }

    function Nt(t, e, n) {
        if (void 0 === e && (e = {}), "function" != typeof t) return t;
        try {
            if (t.__sentry__) return t;
            if (t.__sentry_wrapped__) return t.__sentry_wrapped__
        } catch (e) {
            return t
        }
        var r = function() {
            var r = Array.prototype.slice.call(arguments);
            try {
                n && "function" == typeof n && n.apply(this, arguments);
                var o = r.map(function(t) {
                    return Nt(t, e)
                });
                return t.handleEvent ? t.handleEvent.apply(this, o) : t.apply(this, o)
            } catch (t) {
                throw Gt += 1, setTimeout(function() {
                    Gt -= 1
                }), W(function(n) {
                    n.addEventProcessor(function(t) {
                        var n = Object(c.a)({}, t);
                        return e.mechanism && (Object(u.b)(n, void 0, void 0), Object(u.a)(n, e.mechanism)), n.extra = Object(c.a)(Object(c.a)({}, n.extra), {
                            arguments: r
                        }), n
                    }), B(t)
                }), t
            }
        };
        try {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o])
        } catch (t) {}
        t.prototype = t.prototype || {}, r.prototype = t.prototype, Object.defineProperty(t, "__sentry_wrapped__", {
            enumerable: !1,
            value: r
        }), Object.defineProperties(r, {
            __sentry__: {
                enumerable: !1,
                value: !0
            },
            __sentry_original__: {
                enumerable: !1,
                value: t
            }
        });
        try {
            Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                get: function() {
                    return t.name
                }
            })
        } catch (t) {}
        return r
    }

    function Ft(t) {
        if (void 0 === t && (t = {}), t.eventId)
            if (t.dsn) {
                var e = document.createElement("script");
                e.async = !0, e.src = new Tt(t.dsn).getReportDialogEndpoint(t), t.onLoad && (e.onload = t.onLoad), (document.head || document.body).appendChild(e)
            } else g.error("Missing dsn option in showReportDialog call");
        else g.error("Missing eventId option in showReportDialog call")
    }
    var Ut, Ht = n(8),
        zt = Object(u.e)(),
        Jt = {},
        qt = {};

    function Wt(t) {
        if (!qt[t]) switch (qt[t] = !0, t) {
            case "console":
                ! function() {
                    if (!("console" in zt)) return;
                    ["debug", "info", "warn", "error", "log", "assert"].forEach(function(t) {
                        t in zt.console && Object(S.c)(zt.console, t, function(e) {
                            return function() {
                                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                Yt("console", {
                                    args: n,
                                    level: t
                                }), e && Function.prototype.apply.call(e, zt.console, n)
                            }
                        })
                    })
                }();
                break;
            case "dom":
                ! function() {
                    if (!("document" in zt)) return;
                    zt.document.addEventListener("click", ee("click", Yt.bind(null, "dom")), !1), zt.document.addEventListener("keypress", ne(Yt.bind(null, "dom")), !1), ["EventTarget", "Node"].forEach(function(t) {
                        var e = zt[t] && zt[t].prototype;
                        e && e.hasOwnProperty && e.hasOwnProperty("addEventListener") && (Object(S.c)(e, "addEventListener", function(t) {
                            return function(e, n, r) {
                                return n && n.handleEvent ? ("click" === e && Object(S.c)(n, "handleEvent", function(t) {
                                    return function(e) {
                                        return ee("click", Yt.bind(null, "dom"))(e), t.call(this, e)
                                    }
                                }), "keypress" === e && Object(S.c)(n, "handleEvent", function(t) {
                                    return function(e) {
                                        return ne(Yt.bind(null, "dom"))(e), t.call(this, e)
                                    }
                                })) : ("click" === e && ee("click", Yt.bind(null, "dom"), !0)(this), "keypress" === e && ne(Yt.bind(null, "dom"))(this)), t.call(this, e, n, r)
                            }
                        }), Object(S.c)(e, "removeEventListener", function(t) {
                            return function(e, n, r) {
                                try {
                                    t.call(this, e, n.__sentry_wrapped__, r)
                                } catch (t) {}
                                return t.call(this, e, n, r)
                            }
                        }))
                    })
                }();
                break;
            case "xhr":
                ! function() {
                    if (!("XMLHttpRequest" in zt)) return;
                    var t = [],
                        e = [],
                        n = XMLHttpRequest.prototype;
                    Object(S.c)(n, "open", function(n) {
                        return function() {
                            for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                            var i = this,
                                a = r[1];
                            i.__sentry_xhr__ = {
                                method: Object(b.k)(r[0]) ? r[0].toUpperCase() : r[0],
                                url: r[1]
                            }, Object(b.k)(a) && "POST" === i.__sentry_xhr__.method && a.match(/sentry_key/) && (i.__sentry_own_request__ = !0);
                            var s = function() {
                                if (4 === i.readyState) {
                                    try {
                                        i.__sentry_xhr__ && (i.__sentry_xhr__.status_code = i.status)
                                    } catch (t) {}
                                    try {
                                        var n = t.indexOf(i);
                                        if (-1 !== n) {
                                            t.splice(n);
                                            var o = e.splice(n)[0];
                                            i.__sentry_xhr__ && void 0 !== o[0] && (i.__sentry_xhr__.body = o[0])
                                        }
                                    } catch (t) {}
                                    Yt("xhr", {
                                        args: r,
                                        endTimestamp: Date.now(),
                                        startTimestamp: Date.now(),
                                        xhr: i
                                    })
                                }
                            };
                            return "onreadystatechange" in i && "function" == typeof i.onreadystatechange ? Object(S.c)(i, "onreadystatechange", function(t) {
                                return function() {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    return s(), t.apply(i, e)
                                }
                            }) : i.addEventListener("readystatechange", s), n.apply(i, r)
                        }
                    }), Object(S.c)(n, "send", function(n) {
                        return function() {
                            for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                            return t.push(this), e.push(r), Yt("xhr", {
                                args: r,
                                startTimestamp: Date.now(),
                                xhr: this
                            }), n.apply(this, r)
                        }
                    })
                }();
                break;
            case "fetch":
                ! function() {
                    if (! function() {
                            if (!st()) return !1;
                            var t = Object(u.e)();
                            if (ct(t.fetch)) return !0;
                            var e = !1,
                                n = t.document;
                            if (n && "function" == typeof n.createElement) try {
                                var r = n.createElement("iframe");
                                r.hidden = !0, n.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (e = ct(r.contentWindow.fetch)), n.head.removeChild(r)
                            } catch (t) {
                                g.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                            }
                            return e
                        }()) return;
                    Object(S.c)(zt, "fetch", function(t) {
                        return function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var r = {
                                args: e,
                                fetchData: {
                                    method: Zt(e),
                                    url: Xt(e)
                                },
                                startTimestamp: Date.now()
                            };
                            return Yt("fetch", Object(c.a)({}, r)), t.apply(zt, e).then(function(t) {
                                return Yt("fetch", Object(c.a)(Object(c.a)({}, r), {
                                    endTimestamp: Date.now(),
                                    response: t
                                })), t
                            }, function(t) {
                                throw Yt("fetch", Object(c.a)(Object(c.a)({}, r), {
                                    endTimestamp: Date.now(),
                                    error: t
                                })), t
                            })
                        }
                    })
                }();
                break;
            case "history":
                ! function() {
                    if (t = Object(u.e)(), e = t.chrome, n = e && e.app && e.app.runtime, r = "history" in t && !!t.history.pushState && !!t.history.replaceState, n || !r) return;
                    var t, e, n, r;
                    var o = zt.onpopstate;

                    function i(t) {
                        return function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var r = e.length > 2 ? e[2] : void 0;
                            if (r) {
                                var o = Ut,
                                    i = String(r);
                                Ut = i, Yt("history", {
                                    from: o,
                                    to: i
                                })
                            }
                            return t.apply(this, e)
                        }
                    }
                    zt.onpopstate = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var n = zt.location.href,
                            r = Ut;
                        if (Ut = n, Yt("history", {
                                from: r,
                                to: n
                            }), o) return o.apply(this, t)
                    }, Object(S.c)(zt.history, "pushState", i), Object(S.c)(zt.history, "replaceState", i)
                }();
                break;
            case "error":
                re = zt.onerror, zt.onerror = function(t, e, n, r, o) {
                    return Yt("error", {
                        column: r,
                        error: o,
                        line: n,
                        msg: t,
                        url: e
                    }), !!re && re.apply(this, arguments)
                };
                break;
            case "unhandledrejection":
                oe = zt.onunhandledrejection, zt.onunhandledrejection = function(t) {
                    return Yt("unhandledrejection", t), !oe || oe.apply(this, arguments)
                };
                break;
            default:
                g.warn("unknown instrumentation type:", t)
        }
    }

    function Vt(t) {
        t && "string" == typeof t.type && "function" == typeof t.callback && (Jt[t.type] = Jt[t.type] || [], Jt[t.type].push(t.callback), Wt(t.type))
    }

    function Yt(t, e) {
        var n, r;
        if (t && Jt[t]) try {
            for (var o = Object(c.f)(Jt[t] || []), i = o.next(); !i.done; i = o.next()) {
                var a = i.value;
                try {
                    a(e)
                } catch (e) {
                    g.error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + Object(Ht.a)(a) + "\nError: " + e)
                }
            }
        } catch (t) {
            n = {
                error: t
            }
        } finally {
            try {
                i && !i.done && (r = o.return) && r.call(o)
            } finally {
                if (n) throw n.error
            }
        }
    }

    function Zt(t) {
        return void 0 === t && (t = []), "Request" in zt && Object(b.g)(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
    }

    function Xt(t) {
        return void 0 === t && (t = []), "string" == typeof t[0] ? t[0] : "Request" in zt && Object(b.g)(t[0], Request) ? t[0].url : String(t[0])
    }
    var $t, Kt, Qt = 1e3,
        te = 0;

    function ee(t, e, n) {
        return void 0 === n && (n = !1),
            function(r) {
                $t = void 0, r && Kt !== r && (Kt = r, te && clearTimeout(te), n ? te = setTimeout(function() {
                    e({
                        event: r,
                        name: t
                    })
                }) : e({
                    event: r,
                    name: t
                }))
            }
    }

    function ne(t) {
        return function(e) {
            var n;
            try {
                n = e.target
            } catch (t) {
                return
            }
            var r = n && n.tagName;
            r && ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable) && ($t || ee("input", t)(e), clearTimeout($t), $t = setTimeout(function() {
                $t = void 0
            }, Qt))
        }
    }
    var re = null;
    var oe = null;
    var ie = n(12),
        ae = function() {
            function t(e) {
                this.name = t.id, this._options = Object(c.a)({
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0
                }, e)
            }
            return t.prototype.addSentryBreadcrumb = function(t) {
                this._options.sentry && T().addBreadcrumb({
                    category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                    event_id: t.event_id,
                    level: t.level,
                    message: Object(u.d)(t)
                }, {
                    event: t
                })
            }, t.prototype.setupOnce = function() {
                var t = this;
                this._options.console && Vt({
                    callback: function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        t._consoleBreadcrumb.apply(t, Object(c.e)(e))
                    },
                    type: "console"
                }), this._options.dom && Vt({
                    callback: function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        t._domBreadcrumb.apply(t, Object(c.e)(e))
                    },
                    type: "dom"
                }), this._options.xhr && Vt({
                    callback: function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        t._xhrBreadcrumb.apply(t, Object(c.e)(e))
                    },
                    type: "xhr"
                }), this._options.fetch && Vt({
                    callback: function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        t._fetchBreadcrumb.apply(t, Object(c.e)(e))
                    },
                    type: "fetch"
                }), this._options.history && Vt({
                    callback: function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        t._historyBreadcrumb.apply(t, Object(c.e)(e))
                    },
                    type: "history"
                })
            }, t.prototype._consoleBreadcrumb = function(t) {
                var e = {
                    category: "console",
                    data: {
                        arguments: t.args,
                        logger: "console"
                    },
                    level: a.fromString(t.level),
                    message: Object(Z.b)(t.args, " ")
                };
                if ("assert" === t.level) {
                    if (!1 !== t.args[0]) return;
                    e.message = "Assertion failed: " + (Object(Z.b)(t.args.slice(1), " ") || "console.assert"), e.data.arguments = t.args.slice(1)
                }
                T().addBreadcrumb(e, {
                    input: t.args,
                    level: t.level
                })
            }, t.prototype._domBreadcrumb = function(t) {
                var e;
                try {
                    e = t.event.target ? Object(ie.a)(t.event.target) : Object(ie.a)(t.event)
                } catch (t) {
                    e = "<unknown>"
                }
                0 !== e.length && T().addBreadcrumb({
                    category: "ui." + t.name,
                    message: e
                }, {
                    event: t.event,
                    name: t.name
                })
            }, t.prototype._xhrBreadcrumb = function(t) {
                if (t.endTimestamp) {
                    if (t.xhr.__sentry_own_request__) return;
                    var e = t.xhr.__sentry_xhr__ || {},
                        n = e.method,
                        r = e.url,
                        o = e.status_code,
                        i = e.body;
                    T().addBreadcrumb({
                        category: "xhr",
                        data: {
                            method: n,
                            url: r,
                            status_code: o
                        },
                        type: "http"
                    }, {
                        xhr: t.xhr,
                        input: i
                    })
                } else;
            }, t.prototype._fetchBreadcrumb = function(t) {
                t.endTimestamp && (t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method || (t.error ? T().addBreadcrumb({
                    category: "fetch",
                    data: t.fetchData,
                    level: a.Error,
                    type: "http"
                }, {
                    data: t.error,
                    input: t.args
                }) : T().addBreadcrumb({
                    category: "fetch",
                    data: Object(c.a)(Object(c.a)({}, t.fetchData), {
                        status_code: t.response.status
                    }),
                    type: "http"
                }, {
                    input: t.args,
                    response: t.response
                })))
            }, t.prototype._historyBreadcrumb = function(t) {
                var e = Object(u.e)(),
                    n = t.from,
                    r = t.to,
                    o = Object(u.h)(e.location.href),
                    i = Object(u.h)(n),
                    a = Object(u.h)(r);
                i.path || (i = o), o.protocol === a.protocol && o.host === a.host && (r = a.relative), o.protocol === i.protocol && o.host === i.host && (n = i.relative), T().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: n,
                        to: r
                    }
                })
            }, t.id = "Breadcrumbs", t
        }(),
        se = "sentry.javascript.browser",
        ce = function(t) {
            function e(e) {
                return void 0 === e && (e = {}), t.call(this, Dt, e) || this
            }
            return Object(c.b)(e, t), e.prototype.showReportDialog = function(t) {
                void 0 === t && (t = {}), Object(u.e)().document && (this._isEnabled() ? Ft(Object(c.a)(Object(c.a)({}, t), {
                    dsn: t.dsn || this.getDsn()
                })) : g.error("Trying to call showReportDialog with Sentry Client disabled"))
            }, e.prototype._prepareEvent = function(e, n, r) {
                return e.platform = e.platform || "javascript", e.sdk = Object(c.a)(Object(c.a)({}, e.sdk), {
                    name: se,
                    packages: Object(c.e)(e.sdk && e.sdk.packages || [], [{
                        name: "npm:@sentry/browser",
                        version: "5.30.0"
                    }]),
                    version: "5.30.0"
                }), t.prototype._prepareEvent.call(this, e, n, r)
            }, e.prototype._sendEvent = function(e) {
                var n = this.getIntegration(ae);
                n && n.addSentryBreadcrumb(e), t.prototype._sendEvent.call(this, e)
            }, e
        }(ot);
    var ue = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
        le = function() {
            function t(e) {
                this.name = t.id, this._options = Object(c.a)({
                    XMLHttpRequest: !0,
                    eventTarget: !0,
                    requestAnimationFrame: !0,
                    setInterval: !0,
                    setTimeout: !0
                }, e)
            }
            return t.prototype.setupOnce = function() {
                var t = Object(u.e)();
                (this._options.setTimeout && Object(S.c)(t, "setTimeout", this._wrapTimeFunction.bind(this)), this._options.setInterval && Object(S.c)(t, "setInterval", this._wrapTimeFunction.bind(this)), this._options.requestAnimationFrame && Object(S.c)(t, "requestAnimationFrame", this._wrapRAF.bind(this)), this._options.XMLHttpRequest && "XMLHttpRequest" in t && Object(S.c)(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)), this._options.eventTarget) && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : ue).forEach(this._wrapEventTarget.bind(this))
            }, t.prototype._wrapTimeFunction = function(t) {
                return function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var r = e[0];
                    return e[0] = Nt(r, {
                        mechanism: {
                            data: {
                                function: Object(Ht.a)(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), t.apply(this, e)
                }
            }, t.prototype._wrapRAF = function(t) {
                return function(e) {
                    return t.call(this, Nt(e, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: Object(Ht.a)(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                }
            }, t.prototype._wrapEventTarget = function(t) {
                var e = Object(u.e)(),
                    n = e[t] && e[t].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Object(S.c)(n, "addEventListener", function(e) {
                    return function(n, r, o) {
                        try {
                            "function" == typeof r.handleEvent && (r.handleEvent = Nt(r.handleEvent.bind(r), {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: Object(Ht.a)(r),
                                        target: t
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        } catch (t) {}
                        return e.call(this, n, Nt(r, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: Object(Ht.a)(r),
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), o)
                    }
                }), Object(S.c)(n, "removeEventListener", function(t) {
                    return function(e, n, r) {
                        var o, i = n;
                        try {
                            var a = null === (o = i) || void 0 === o ? void 0 : o.__sentry_wrapped__;
                            a && t.call(this, e, a, r)
                        } catch (t) {}
                        return t.call(this, e, i, r)
                    }
                }))
            }, t.prototype._wrapXHR = function(t) {
                return function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var r = this;
                    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(function(t) {
                        t in r && "function" == typeof r[t] && Object(S.c)(r, t, function(e) {
                            var n = {
                                mechanism: {
                                    data: {
                                        function: t,
                                        handler: Object(Ht.a)(e)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            };
                            return e.__sentry_original__ && (n.mechanism.data.handler = Object(Ht.a)(e.__sentry_original__)), Nt(e, n)
                        })
                    }), t.apply(this, e)
                }
            }, t.id = "TryCatch", t
        }(),
        de = function() {
            function t(e) {
                this.name = t.id, this._onErrorHandlerInstalled = !1, this._onUnhandledRejectionHandlerInstalled = !1, this._options = Object(c.a)({
                    onerror: !0,
                    onunhandledrejection: !0
                }, e)
            }
            return t.prototype.setupOnce = function() {
                Error.stackTraceLimit = 50, this._options.onerror && (g.log("Global Handler attached: onerror"), this._installGlobalOnErrorHandler()), this._options.onunhandledrejection && (g.log("Global Handler attached: onunhandledrejection"), this._installGlobalOnUnhandledRejectionHandler())
            }, t.prototype._installGlobalOnErrorHandler = function() {
                var e = this;
                this._onErrorHandlerInstalled || (Vt({
                    callback: function(n) {
                        var r = n.error,
                            o = T(),
                            i = o.getIntegration(t),
                            a = r && !0 === r.__sentry_own_request__;
                        if (i && !Rt() && !a) {
                            var s = o.getClient(),
                                c = Object(b.i)(r) ? e._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : e._enhanceEventWithInitialFrame(Ot(r, void 0, {
                                    attachStacktrace: s && s.getOptions().attachStacktrace,
                                    rejection: !1
                                }), n.url, n.line, n.column);
                            Object(u.a)(c, {
                                handled: !1,
                                type: "onerror"
                            }), o.captureEvent(c, {
                                originalException: r
                            })
                        }
                    },
                    type: "error"
                }), this._onErrorHandlerInstalled = !0)
            }, t.prototype._installGlobalOnUnhandledRejectionHandler = function() {
                var e = this;
                this._onUnhandledRejectionHandlerInstalled || (Vt({
                    callback: function(n) {
                        var r = n;
                        try {
                            "reason" in n ? r = n.reason : "detail" in n && "reason" in n.detail && (r = n.detail.reason)
                        } catch (t) {}
                        var o = T(),
                            i = o.getIntegration(t),
                            s = r && !0 === r.__sentry_own_request__;
                        if (!i || Rt() || s) return !0;
                        var c = o.getClient(),
                            l = Object(b.i)(r) ? e._eventFromRejectionWithPrimitive(r) : Ot(r, void 0, {
                                attachStacktrace: c && c.getOptions().attachStacktrace,
                                rejection: !0
                            });
                        l.level = a.Error, Object(u.a)(l, {
                            handled: !1,
                            type: "onunhandledrejection"
                        }), o.captureEvent(l, {
                            originalException: r
                        })
                    },
                    type: "unhandledrejection"
                }), this._onUnhandledRejectionHandlerInstalled = !0)
            }, t.prototype._eventFromIncompleteOnError = function(t, e, n, r) {
                var o, i = Object(b.e)(t) ? t.message : t;
                if (Object(b.k)(i)) {
                    var a = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                    a && (o = a[1], i = a[2])
                }
                var s = {
                    exception: {
                        values: [{
                            type: o || "Error",
                            value: i
                        }]
                    }
                };
                return this._enhanceEventWithInitialFrame(s, e, n, r)
            }, t.prototype._eventFromRejectionWithPrimitive = function(t) {
                return {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: "Non-Error promise rejection captured with value: " + String(t)
                        }]
                    }
                }
            }, t.prototype._enhanceEventWithInitialFrame = function(t, e, n, r) {
                t.exception = t.exception || {}, t.exception.values = t.exception.values || [], t.exception.values[0] = t.exception.values[0] || {}, t.exception.values[0].stacktrace = t.exception.values[0].stacktrace || {}, t.exception.values[0].stacktrace.frames = t.exception.values[0].stacktrace.frames || [];
                var o = isNaN(parseInt(r, 10)) ? void 0 : r,
                    i = isNaN(parseInt(n, 10)) ? void 0 : n,
                    a = Object(b.k)(e) && e.length > 0 ? e : Object(u.f)();
                return 0 === t.exception.values[0].stacktrace.frames.length && t.exception.values[0].stacktrace.frames.push({
                    colno: o,
                    filename: a,
                    function: "?",
                    in_app: !0,
                    lineno: i
                }), t
            }, t.id = "GlobalHandlers", t
        }(),
        pe = "cause",
        he = 5,
        fe = function() {
            function t(e) {
                void 0 === e && (e = {}), this.name = t.id, this._key = e.key || pe, this._limit = e.limit || he
            }
            return t.prototype.setupOnce = function() {
                x(function(e, n) {
                    var r = T().getIntegration(t);
                    return r ? r._handler(e, n) : e
                })
            }, t.prototype._handler = function(t, e) {
                if (!(t.exception && t.exception.values && e && Object(b.g)(e.originalException, Error))) return t;
                var n = this._walkErrorTree(e.originalException, this._key);
                return t.exception.values = Object(c.e)(n, t.exception.values), t
            }, t.prototype._walkErrorTree = function(t, e, n) {
                if (void 0 === n && (n = []), !Object(b.g)(t[e], Error) || n.length + 1 >= this._limit) return n;
                var r = wt(bt(t[e]));
                return this._walkErrorTree(t[e], e, Object(c.e)([r], n))
            }, t.id = "LinkedErrors", t
        }(),
        ge = Object(u.e)(),
        ve = function() {
            function t() {
                this.name = t.id
            }
            return t.prototype.setupOnce = function() {
                x(function(e) {
                    var n, r, o;
                    if (T().getIntegration(t)) {
                        if (!ge.navigator && !ge.location && !ge.document) return e;
                        var i = (null === (n = e.request) || void 0 === n ? void 0 : n.url) || (null === (r = ge.location) || void 0 === r ? void 0 : r.href),
                            a = (ge.document || {}).referrer,
                            s = (ge.navigator || {}).userAgent,
                            u = Object(c.a)(Object(c.a)(Object(c.a)({}, null === (o = e.request) || void 0 === o ? void 0 : o.headers), a && {
                                Referer: a
                            }), s && {
                                "User-Agent": s
                            }),
                            l = Object(c.a)(Object(c.a)({}, i && {
                                url: i
                            }), {
                                headers: u
                            });
                        return Object(c.a)(Object(c.a)({}, e), {
                            request: l
                        })
                    }
                    return e
                })
            }, t.id = "UserAgent", t
        }(),
        be = [new r.InboundFilters, new r.FunctionToString, new le, new ae, new de, new fe, new ve];

    function ye(t) {
        if (void 0 === t && (t = {}), void 0 === t.defaultIntegrations && (t.defaultIntegrations = be), void 0 === t.release) {
            var e = Object(u.e)();
            e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id)
        }
        void 0 === t.autoSessionTracking && (t.autoSessionTracking = !1),
            function(t, e) {
                !0 === e.debug && g.enable();
                var n = T(),
                    r = new t(e);
                n.bindClient(r)
            }(ce, t), t.autoSessionTracking && function() {
                var t = Object(u.e)(),
                    e = T(),
                    n = "complete" === document.readyState,
                    r = !1,
                    o = function() {
                        r && n && e.endSession()
                    },
                    i = function() {
                        n = !0, o(), t.removeEventListener("load", i)
                    };
                e.startSession(), n || t.addEventListener("load", i);
                try {
                    var a = new PerformanceObserver(function(t, e) {
                            t.getEntries().forEach(function(t) {
                                "first-contentful-paint" === t.name && t.startTime < s && (e.disconnect(), r = !0, o())
                            })
                        }),
                        s = "hidden" === document.visibilityState ? 0 : 1 / 0;
                    document.addEventListener("visibilitychange", function(t) {
                        s = Math.min(s, t.timeStamp)
                    }, {
                        once: !0
                    }), a.observe({
                        type: "paint",
                        buffered: !0
                    })
                } catch (t) {
                    r = !0, o()
                }
            }()
    }

    function me(t) {
        void 0 === t && (t = {}), t.eventId || (t.eventId = T().lastEventId());
        var e = T().getClient();
        e && e.showReportDialog(t)
    }

    function _e() {
        return T().lastEventId()
    }

    function we() {}

    function xe(t) {
        t()
    }

    function Ee(t) {
        var e = T().getClient();
        return e ? e.flush(t) : m.reject(!1)
    }

    function Se(t) {
        var e = T().getClient();
        return e ? e.close(t) : m.reject(!1)
    }

    function Ce(t) {
        return Nt(t)()
    }
    n.d(e, "Integrations", function() {
        return ke
    }), n.d(e, "Severity", function() {
        return a
    }), n.d(e, "Status", function() {
        return s
    }), n.d(e, "addGlobalEventProcessor", function() {
        return x
    }), n.d(e, "addBreadcrumb", function() {
        return N
    }), n.d(e, "captureException", function() {
        return B
    }), n.d(e, "captureEvent", function() {
        return G
    }), n.d(e, "captureMessage", function() {
        return D
    }), n.d(e, "configureScope", function() {
        return R
    }), n.d(e, "getHubFromCarrier", function() {
        return I
    }), n.d(e, "getCurrentHub", function() {
        return T
    }), n.d(e, "Hub", function() {
        return j
    }), n.d(e, "makeMain", function() {
        return L
    }), n.d(e, "Scope", function() {
        return _
    }), n.d(e, "startTransaction", function() {
        return V
    }), n.d(e, "setContext", function() {
        return F
    }), n.d(e, "setExtra", function() {
        return z
    }), n.d(e, "setExtras", function() {
        return U
    }), n.d(e, "setTag", function() {
        return J
    }), n.d(e, "setTags", function() {
        return H
    }), n.d(e, "setUser", function() {
        return q
    }), n.d(e, "withScope", function() {
        return W
    }), n.d(e, "BrowserClient", function() {
        return ce
    }), n.d(e, "injectReportDialog", function() {
        return Ft
    }), n.d(e, "eventFromException", function() {
        return St
    }), n.d(e, "eventFromMessage", function() {
        return Ct
    }), n.d(e, "defaultIntegrations", function() {
        return be
    }), n.d(e, "forceLoad", function() {
        return we
    }), n.d(e, "init", function() {
        return ye
    }), n.d(e, "lastEventId", function() {
        return _e
    }), n.d(e, "onLoad", function() {
        return xe
    }), n.d(e, "showReportDialog", function() {
        return me
    }), n.d(e, "flush", function() {
        return Ee
    }), n.d(e, "close", function() {
        return Se
    }), n.d(e, "wrap", function() {
        return Ce
    }), n.d(e, "SDK_NAME", function() {
        return se
    }), n.d(e, "SDK_VERSION", function() {
        return "5.30.0"
    }), n.d(e, "Transports", function() {
        return i
    });
    var Oe = {},
        je = Object(u.e)();
    je.Sentry && je.Sentry.Integrations && (Oe = je.Sentry.Integrations);
    var ke = Object(c.a)(Object(c.a)(Object(c.a)({}, Oe), r), o)
}, function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "a", function() {
            return c
        });
        var r = n(3),
            o = n(7),
            i = {
                nowSeconds: function() {
                    return Date.now() / 1e3
                }
            };
        var a = Object(o.b)() ? function() {
                try {
                    return Object(o.a)(t, "perf_hooks").performance
                } catch (t) {
                    return
                }
            }() : function() {
                var t = Object(r.e)().performance;
                if (t && t.now) return {
                    now: function() {
                        return t.now()
                    },
                    timeOrigin: Date.now() - t.now()
                }
            }(),
            s = void 0 === a ? i : {
                nowSeconds: function() {
                    return (a.timeOrigin + a.now()) / 1e3
                }
            },
            c = i.nowSeconds.bind(i);
        s.nowSeconds.bind(s),
            function() {
                var t = Object(r.e)().performance;
                if (t) t.timeOrigin ? t.timeOrigin : t.timing && t.timing.navigationStart || Date.now()
            }()
    }).call(this, n(15)(t))
}]);