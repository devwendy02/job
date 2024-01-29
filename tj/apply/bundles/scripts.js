function setParent(e) {
    var t = e.attr("data-parent"),
        n = $('input[value="' + t + '"]').first();
    0 === $('[data-parent="' + t + '"]').filter(":not(:checked)").length ? n.prop("checked", !0).trigger("change", !0) : n.prop("checked") && n.prop("checked", !1).trigger("change", !0)
}

function setChilds(e) {
    var t = e.val();
    if (t) {
        var n = $('[data-parent="' + t + '"]');
        if (0 < n.length) {
            var i = $('input[value="' + t + '"]').prop("checked");
            $(n).each(function(e, t) {
                $('input[value="' + $(t).attr("value") + '"]').prop("checked", i).trigger("change", !0)
            })
        }
    }
}

function deselectAllAndSelectDefault(e) {
    var t = $(e).closest(".multiselect-container"),
        n = $("li:not(.deselect-all) input:checked", t),
        i = $(e).prop("checked"),
        r = t.closest(".multiselect-ddl").siblings("select");
    i && $(n).each(function(e, t) {
        var n = $(t).prop("value");
        r.multiselect("deselect", n)
    }), r.multiselect("select", 0)
}

function selectDefaultOption(e) {
    var t = $(e).closest(".multiselect-container"),
        n = 0 === $("li:not(.deselect-all) input:checked", t).length ? "select" : "deselect";
    t.closest(".multiselect-ddl").siblings("select").multiselect(n, 0)
}! function(v, Z, ee) {
    "use strict";

    function x(o) {
        return function() {
            var e, t, n, i = arguments[0],
                r = arguments;
            for (e = (e = "[" + (o ? o + ":" : "") + i + "] " + arguments[1].replace(/\{\d+\}/g, function(e) {
                    var t, n = +e.slice(1, -1);
                    return 2 + n < r.length ? "function" == typeof(t = r[2 + n]) ? t.toString().replace(/ ?\{[\s\S]*$/, "") : void 0 === t ? "undefined" : "string" != typeof t ? W(t) : t : e
                })) + "\nhttp://errors.angularjs.org/1.2.32/" + (o ? o + "/" : "") + i, t = 2; t < arguments.length; t++) e = e + (2 == t ? "?" : "&") + "p" + (t - 2) + "=" + encodeURIComponent("function" == typeof(n = arguments[t]) ? n.toString().replace(/ \{[\s\S]*$/, "") : void 0 === n ? "undefined" : "string" != typeof n ? JSON.stringify(n) : n);
            return new Error(e)
        }
    }
    var S = "validity",
        C = function(e) {
            return oe(e) ? e.toLowerCase() : e
        },
        A = Object.prototype.hasOwnProperty,
        c = function(e) {
            return oe(e) ? e.toUpperCase() : e
        };
    "i" !== "I".toLowerCase() && (C = function(e) {
        return oe(e) ? e.replace(/[A-Z]/g, function(e) {
            return String.fromCharCode(32 | e.charCodeAt(0))
        }) : e
    }, c = function(e) {
        return oe(e) ? e.replace(/[a-z]/g, function(e) {
            return String.fromCharCode(-33 & e.charCodeAt(0))
        }) : e
    });
    var te, ne, h, d, _, u = [].slice,
        e = [].push,
        s = Object.prototype.toString,
        p = x("ng"),
        f = v.angular || (v.angular = {}),
        n = ["0", "0", "0"];

    function T(e) {
        if (null != e && !M(e)) {
            var t = e.length;
            return 1 === e.nodeType && t || (oe(e) || ae(e) || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }
    }

    function ie(e, t, n) {
        var i;
        if (e)
            if (se(e))
                for (i in e) "prototype" == i || "length" == i || "name" == i || e.hasOwnProperty && !e.hasOwnProperty(i) || t.call(n, e[i], i);
            else if (ae(e) || T(e))
            for (i = 0; i < e.length; i++) t.call(n, e[i], i);
        else if (e.forEach && e.forEach !== ie) e.forEach(t, n);
        else
            for (i in e) e.hasOwnProperty(i) && t.call(n, e[i], i);
        return e
    }

    function L(e) {
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && t.push(n);
        return t.sort()
    }

    function m(n) {
        return function(e, t) {
            n(t, e)
        }
    }

    function r() {
        for (var e, t = n.length; t;) {
            if (57 == (e = n[--t].charCodeAt(0))) return n[t] = "A", n.join("");
            if (90 != e) return n[t] = String.fromCharCode(e + 1), n.join("");
            n[t] = "0"
        }
        return n.unshift("0"), n.join("")
    }

    function g(e, t) {
        t ? e.$$hashKey = t : delete e.$$hashKey
    }

    function F(n) {
        var e = n.$$hashKey;
        return ie(arguments, function(e) {
            e !== n && ie(e, function(e, t) {
                n[t] = e
            })
        }), g(n, e), n
    }

    function k(e) {
        return parseInt(e, 10)
    }

    function $(e, t) {
        return F(new(F(function() {}, {
            prototype: e
        })), t)
    }

    function E() {}

    function y(e) {
        return e
    }

    function w(e) {
        return function() {
            return e
        }
    }

    function O(e) {
        return void 0 === e
    }

    function H(e) {
        return void 0 !== e
    }

    function re(e) {
        return null != e && "object" == typeof e
    }

    function oe(e) {
        return "string" == typeof e
    }

    function b(e) {
        return "number" == typeof e
    }

    function I(e) {
        return "[object Date]" === s.call(e)
    }
    te = k((/msie (\d+)/.exec(C(navigator.userAgent)) || [])[1]), isNaN(te) && (te = k((/trident\/.*; rv:(\d+)/.exec(C(navigator.userAgent)) || [])[1])), E.$inject = [], y.$inject = [];
    var ae = se(Array.isArray) ? Array.isArray : function(e) {
        return "[object Array]" === s.call(e)
    };

    function se(e) {
        return "function" == typeof e
    }

    function V(e) {
        return "[object RegExp]" === s.call(e)
    }

    function M(e) {
        return e && e.document && e.location && e.alert && e.setInterval
    }

    function P(e) {
        return e && e.$evalAsync && e.$watch
    }

    function N(e) {
        return e && se(e.then)
    }
    var le = String.prototype.trim ? function(e) {
        return oe(e) ? e.trim() : e
    } : function(e) {
        return oe(e) ? e.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : e
    };

    function o(e) {
        return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
    }

    function R(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var n = 0; n < e.length; n++)
            if (t === e[n]) return n;
        return -1
    }

    function D(e, t) {
        var n = R(e, t);
        return 0 <= n && e.splice(n, 1), t
    }

    function q(e, n, t, i) {
        if (M(e) || P(e)) throw p("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (n) {
            if (e === n) throw p("cpi", "Can't copy! Source and destination are identical.");
            if (t = t || [], i = i || [], re(e)) {
                var r = R(t, e);
                if (-1 !== r) return i[r];
                t.push(e), i.push(n)
            }
            var o;
            if (ae(e))
                for (var a = n.length = 0; a < e.length; a++) o = q(e[a], null, t, i), re(e[a]) && (t.push(e[a]), i.push(o)), n.push(o);
            else {
                var s = n.$$hashKey;
                for (var l in ae(n) ? n.length = 0 : ie(n, function(e, t) {
                        delete n[t]
                    }), e) o = q(e[l], null, t, i), re(e[l]) && (t.push(e[l]), i.push(o)), n[l] = o;
                g(n, s)
            }
        } else(n = e) && (ae(e) ? n = q(e, [], t, i) : I(e) ? n = new Date(e.getTime()) : V(e) ? (n = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0])).lastIndex = e.lastIndex : re(e) && (n = q(e, {}, t, i)));
        return n
    }

    function ce(e, t) {
        if (ae(e)) {
            t = t || [];
            for (var n = 0; n < e.length; n++) t[n] = e[n]
        } else if (re(e))
            for (var i in t = t || {}, e) !A.call(e, i) || "$" === i.charAt(0) && "$" === i.charAt(1) || (t[i] = e[i]);
        return t || e
    }

    function ue(e, t) {
        if (e === t) return !0;
        if (null === e || null === t) return !1;
        if (e != e && t != t) return !0;
        var n, i, r, o = typeof e;
        if (o == typeof t && "object" == o) {
            if (!ae(e)) {
                if (I(e)) return !!I(t) && (isNaN(e.getTime()) && isNaN(t.getTime()) || e.getTime() === t.getTime());
                if (V(e) && V(t)) return e.toString() == t.toString();
                if (P(e) || P(t) || M(e) || M(t) || ae(t)) return !1;
                for (i in r = {}, e)
                    if ("$" !== i.charAt(0) && !se(e[i])) {
                        if (!ue(e[i], t[i])) return !1;
                        r[i] = !0
                    }
                for (i in t)
                    if (!r.hasOwnProperty(i) && "$" !== i.charAt(0) && t[i] !== ee && !se(t[i])) return !1;
                return !0
            }
            if (!ae(t)) return !1;
            if ((n = e.length) == t.length) {
                for (i = 0; i < n; i++)
                    if (!ue(e[i], t[i])) return !1;
                return !0
            }
        }
        return !1
    }
    _ = te < 9 ? function(e) {
        return (e = e.nodeName ? e : e[0]).scopeName && "HTML" != e.scopeName ? c(e.scopeName + ":" + e.nodeName) : e.nodeName
    } : function(e) {
        return e.nodeName ? e.nodeName : e[0].nodeName
    };
    var j = function() {
        if (H(j.isActive_)) return j.isActive_;
        var t = !(!Z.querySelector("[ng-csp]") && !Z.querySelector("[data-ng-csp]"));
        if (!t) try {
            new Function("")
        } catch (e) {
            t = !0
        }
        return j.isActive_ = t
    };

    function U(e, t, n) {
        return e.concat(u.call(t, n))
    }

    function pe(e, t) {
        return u.call(e, t || 0)
    }

    function B(e, t) {
        var n = 2 < arguments.length ? pe(arguments, 2) : [];
        return !se(t) || t instanceof RegExp ? t : n.length ? function() {
            return arguments.length ? t.apply(e, n.concat(u.call(arguments, 0))) : t.apply(e, n)
        } : function() {
            return arguments.length ? t.apply(e, arguments) : t.call(e)
        }
    }

    function i(e, t) {
        var n = t;
        return "string" == typeof e && "$" === e.charAt(0) ? n = ee : M(t) ? n = "$WINDOW" : t && Z === t ? n = "$DOCUMENT" : P(t) && (n = "$SCOPE"), n
    }

    function W(e, t) {
        return void 0 === e ? ee : JSON.stringify(e, i, t ? "  " : null)
    }

    function a(e) {
        return oe(e) ? JSON.parse(e) : e
    }

    function J(e) {
        if ("function" == typeof e) e = !0;
        else if (e && 0 !== e.length) {
            var t = C("" + e);
            e = !("f" == t || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)
        } else e = !1;
        return e
    }

    function fe(e) {
        e = ne(e).clone();
        try {
            e.empty()
        } catch (e) {}
        var t = ne("<div>").append(e).html();
        try {
            return 3 === e[0].nodeType ? C(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
                return "<" + C(t)
            })
        } catch (e) {
            return C(t)
        }
    }

    function l(e) {
        try {
            return decodeURIComponent(e)
        } catch (e) {}
    }

    function z(e) {
        var n, i, r = {};
        return ie((e || "").split("&"), function(e) {
            if (e && (n = e.replace(/\+/g, "%20").split("="), H(i = l(n[0])))) {
                var t = !H(n[1]) || l(n[1]);
                A.call(r, i) ? ae(r[i]) ? r[i].push(t) : r[i] = [r[i], t] : r[i] = t
            }
        }), r
    }

    function Q(e) {
        var n = [];
        return ie(e, function(e, t) {
            ae(e) ? ie(e, function(e) {
                n.push(Y(t, !0) + (!0 === e ? "" : "=" + Y(e, !0)))
            }) : n.push(Y(t, !0) + (!0 === e ? "" : "=" + Y(e, !0)))
        }), n.length ? n.join("&") : ""
    }

    function G(e) {
        return Y(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Y(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
    }

    function K(n, i) {
        function t() {
            if ((n = ne(n)).injector()) {
                var e = n[0] === Z ? "document" : fe(n);
                throw p("btstrpd", "App Already Bootstrapped with this Element '{0}'", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }(i = i || []).unshift(["$provide", function(e) {
                e.value("$rootElement", n)
            }]), i.unshift("ng");
            var t = ut(i);
            return t.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(e, t, n, i, r) {
                e.$apply(function() {
                    t.data("$injector", i), n(t)(e)
                })
            }]), t
        }
        var e = /^NG_DEFER_BOOTSTRAP!/;
        if (v && !e.test(v.name)) return t();
        v.name = v.name.replace(e, ""), f.resumeBootstrap = function(e) {
            ie(e, function(e) {
                i.push(e)
            }), t()
        }
    }
    var t = /[A-Z]/g;

    function de(e, n) {
        return n = n || "_", e.replace(t, function(e, t) {
            return (t ? n : "") + e.toLowerCase()
        })
    }

    function he(e, t, n) {
        if (!e) throw p("areq", "Argument '{0}' is {1}", t || "?", n || "required");
        return e
    }

    function X(e, t, n) {
        return n && ae(e) && (e = e[e.length - 1]), he(se(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
    }

    function ve(e, t) {
        if ("hasOwnProperty" === e) throw p("badname", "hasOwnProperty is not a valid {0} name", t)
    }

    function me(e, t, n) {
        if (!t) return e;
        for (var i, r = t.split("."), o = e, a = r.length, s = 0; s < a; s++) i = r[s], e = e && (o = e)[i];
        return !n && se(e) ? B(o, e) : e
    }

    function ge(e) {
        var t = e[0],
            n = e[e.length - 1];
        if (t === n) return ne(t);
        var i = t,
            r = [i];
        do {
            if (!(i = i.nextSibling)) break;
            r.push(i)
        } while (i !== n);
        return ne(r)
    }
    var $e = {
        full: "1.2.32",
        major: 1,
        minor: 2,
        dot: 32,
        codeName: "alternation-intention"
    };
    Fe.expando = "ng339";
    var ye = Fe.cache = {},
        we = 1,
        be = v.document.addEventListener ? function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : function(e, t, n) {
            e.attachEvent("on" + t, n)
        },
        Se = v.document.removeEventListener ? function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            e.detachEvent("on" + t, n)
        };
    Fe._data = function(e) {
        return this.cache[e[this.expando]] || {}
    };
    var xe = /([\:\-\_]+(.))/g,
        Ce = /^moz([A-Z])/,
        Ae = x("jqLite");

    function ke(e) {
        return e.replace(xe, function(e, t, n, i) {
            return i ? n.toUpperCase() : n
        }).replace(Ce, "Moz$1")
    }

    function Ee(e, u, p, f) {
        var d = h.fn[e];

        function t(e) {
            var t, n, i, r, o, a, s, l = p && e ? [this.filter(e)] : [this],
                c = u;
            if (!f || null != e)
                for (; l.length;)
                    for (n = 0, i = (t = l.shift()).length; n < i; n++)
                        for (r = ne(t[n]), c ? r.triggerHandler("$destroy") : c = !c, o = 0, a = (s = r.children()).length; o < a; o++) l.push(h(s[o]));
            return d.apply(this, arguments)
        }
        d = d.$original || d, t.$original = d, h.fn[e] = t
    }
    var Oe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Ie = /<|&#?\w+;/,
        Te = /<([\w:]+)/,
        Ve = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Me = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function Pe(e) {
        return !Ie.test(e)
    }

    function _e(e, t) {
        var n;
        return t = t || Z, (n = Oe.exec(e)) ? [t.createElement(n[1])] : function(e, t) {
            var n, i, r, o, a, s, l = t.createDocumentFragment(),
                c = [];
            if (Pe(e)) c.push(t.createTextNode(e));
            else {
                for (n = l.appendChild(t.createElement("div")), i = (Te.exec(e) || ["", ""])[1].toLowerCase(), r = Me[i] || Me._default, n.innerHTML = "<div>&#160;</div>" + r[1] + e.replace(Ve, "<$1></$2>") + r[2], n.removeChild(n.firstChild), o = r[0]; o--;) n = n.lastChild;
                for (a = 0, s = n.childNodes.length; a < s; ++a) c.push(n.childNodes[a]);
                (n = l.firstChild).textContent = ""
            }
            return l.textContent = "", l.innerHTML = "", c
        }(e, t)
    }

    function Fe(e) {
        if (e instanceof Fe) return e;
        if (oe(e) && (e = le(e)), !(this instanceof Fe)) {
            if (oe(e) && "<" != e.charAt(0)) throw Ae("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new Fe(e)
        }
        oe(e) ? (We(this, _e(e)), ne(Z.createDocumentFragment()).append(this)) : We(this, e)
    }

    function Ne(e) {
        return e.cloneNode(!0)
    }

    function Re(e) {
        Le(e);
        for (var t = 0, n = e.childNodes || []; t < n.length; t++) Re(n[t])
    }

    function De(n, e, t, i) {
        if (H(i)) throw Ae("offargs", "jqLite#off() does not support the `selector` argument");
        var r = He(n, "events");
        He(n, "handle") && (O(e) ? ie(r, function(e, t) {
            Se(n, t, e), delete r[t]
        }) : ie(e.split(" "), function(e) {
            O(t) ? (Se(n, e, r[e]), delete r[e]) : D(r[e] || [], t)
        }))
    }

    function Le(e, t) {
        var n = e.ng339,
            i = ye[n];
        if (i) {
            if (t) return void delete ye[n].data[t];
            i.handle && (i.events.$destroy && i.handle({}, "$destroy"), De(e)), delete ye[n], e.ng339 = ee
        }
    }

    function He(e, t, n) {
        var i = e.ng339,
            r = ye[i || -1];
        if (!H(n)) return r && r[t];
        r || (e.ng339 = i = ++we, r = ye[i] = {}), r[t] = n
    }

    function qe(e, t, n) {
        var i = He(e, "data"),
            r = H(n),
            o = !r && H(t),
            a = o && !re(t);
        if (i || a || He(e, "data", i = {}), r) i[t] = n;
        else {
            if (!o) return i;
            if (a) return i && i[t];
            F(i, t)
        }
    }

    function je(e, t) {
        return !!e.getAttribute && -1 < (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ")
    }

    function Ue(t, e) {
        e && t.setAttribute && ie(e.split(" "), function(e) {
            t.setAttribute("class", le((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + le(e) + " ", " ")))
        })
    }

    function Be(e, t) {
        if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            ie(t.split(" "), function(e) {
                e = le(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
            }), e.setAttribute("class", le(n))
        }
    }

    function We(e, t) {
        if (t) {
            t = t.nodeName || !H(t.length) || M(t) ? [t] : t;
            for (var n = 0; n < t.length; n++) e.push(t[n])
        }
    }

    function Je(e, t) {
        return ze(e, "$" + (t || "ngController") + "Controller")
    }

    function ze(e, t, n) {
        9 == e.nodeType && (e = e.documentElement);
        for (var i = ae(t) ? t : [t]; e;) {
            for (var r = 0, o = i.length; r < o; r++)
                if ((n = ne.data(e, i[r])) !== ee) return n;
            e = e.parentNode || 11 === e.nodeType && e.host
        }
    }

    function Qe(e) {
        for (var t = 0, n = e.childNodes; t < n.length; t++) Re(n[t]);
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }
    Me.optgroup = Me.option, Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead, Me.th = Me.td;
    var Ge = Fe.prototype = {
            ready: function(e) {
                var t = !1;

                function n() {
                    t || (t = !0, e())
                }
                "complete" === Z.readyState ? setTimeout(n) : (this.on("DOMContentLoaded", n), Fe(v).on("load", n))
            },
            toString: function() {
                var t = [];
                return ie(this, function(e) {
                    t.push("" + e)
                }), "[" + t.join(", ") + "]"
            },
            eq: function(e) {
                return ne(0 <= e ? this[e] : this[this.length + e])
            },
            length: 0,
            push: e,
            sort: [].sort,
            splice: [].splice
        },
        Ye = {};
    ie("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(e) {
        Ye[C(e)] = e
    });
    var Ke, Xe = {};

    function Ze(e, t) {
        var n = Ye[t.toLowerCase()];
        return n && Xe[e.nodeName] && n
    }

    function et(e, t) {
        var n = Ke[e.nodeType];
        if (O(t)) return n ? e[n] : "";
        e[n] = t
    }

    function tt(i, r) {
        function e(t, e) {
            if (t.preventDefault || (t.preventDefault = function() {
                    t.returnValue = !1
                }), t.stopPropagation || (t.stopPropagation = function() {
                    t.cancelBubble = !0
                }), t.target || (t.target = t.srcElement || Z), O(t.defaultPrevented)) {
                var n = t.preventDefault;
                t.preventDefault = function() {
                    t.defaultPrevented = !0, n.call(t)
                }, t.defaultPrevented = !1
            }
            t.isDefaultPrevented = function() {
                return t.defaultPrevented || !1 === t.returnValue
            }, ie(ce(r[e || t.type] || []), function(e) {
                e.call(i, t)
            }), te <= 8 ? (t.preventDefault = null, t.stopPropagation = null, t.isDefaultPrevented = null) : (delete t.preventDefault, delete t.stopPropagation, delete t.isDefaultPrevented)
        }
        return e.elem = i, e
    }

    function nt(e, t) {
        var n, i = typeof e;
        return "function" == i || "object" == i && null !== e ? "function" == typeof(n = e.$$hashKey) ? n = e.$$hashKey() : n === ee && (n = e.$$hashKey = (t || r)()) : n = e, i + ":" + n
    }

    function it(e, t) {
        if (t) {
            var n = 0;
            this.nextUid = function() {
                return ++n
            }
        }
        ie(e, this.put, this)
    }
    ie("input,select,option,textarea,button,form,details".split(","), function(e) {
        Xe[c(e)] = !0
    }), ie({
        data: qe,
        removeData: Le
    }, function(e, t) {
        Fe[t] = e
    }), ie({
        data: qe,
        inheritedData: ze,
        scope: function(e) {
            return ne.data(e, "$scope") || ze(e.parentNode || e, ["$isolateScope", "$scope"])
        },
        isolateScope: function(e) {
            return ne.data(e, "$isolateScope") || ne.data(e, "$isolateScopeNoTemplate")
        },
        controller: Je,
        injector: function(e) {
            return ze(e, "$injector")
        },
        removeAttr: function(e, t) {
            e.removeAttribute(t)
        },
        hasClass: je,
        css: function(e, t, n) {
            var i;
            if (t = ke(t), !H(n)) return te <= 8 && "" === (i = e.currentStyle && e.currentStyle[t]) && (i = "auto"), i = i || e.style[t], te <= 8 && (i = "" === i ? ee : i), i;
            e.style[t] = n
        },
        attr: function(e, t, n) {
            var i = C(t);
            if (Ye[i]) {
                if (!H(n)) return e[t] || (e.attributes.getNamedItem(t) || E).specified ? i : ee;
                n ? (e[t] = !0, e.setAttribute(t, i)) : (e[t] = !1, e.removeAttribute(i))
            } else if (H(n)) e.setAttribute(t, n);
            else if (e.getAttribute) {
                var r = e.getAttribute(t, 2);
                return null === r ? ee : r
            }
        },
        prop: function(e, t, n) {
            if (!H(n)) return e[t];
            e[t] = n
        },
        text: (Ke = [], te < 9 ? (Ke[1] = "innerText", Ke[3] = "nodeValue") : Ke[1] = Ke[3] = "textContent", et.$dv = "", et),
        val: function(e, t) {
            if (O(t)) {
                if ("SELECT" === _(e) && e.multiple) {
                    var n = [];
                    return ie(e.options, function(e) {
                        e.selected && n.push(e.value || e.text)
                    }), 0 === n.length ? null : n
                }
                return e.value
            }
            e.value = t
        },
        html: function(e, t) {
            if (O(t)) return e.innerHTML;
            for (var n = 0, i = e.childNodes; n < i.length; n++) Re(i[n]);
            e.innerHTML = t
        },
        empty: Qe
    }, function(c, e) {
        Fe.prototype[e] = function(e, t) {
            var n, i, r = this.length;
            if (c !== Qe && (2 == c.length && c !== je && c !== Je ? e : t) === ee) {
                if (re(e)) {
                    for (n = 0; n < r; n++)
                        if (c === qe) c(this[n], e);
                        else
                            for (i in e) c(this[n], i, e[i]);
                    return this
                }
                for (var o = c.$dv, a = o === ee ? Math.min(r, 1) : r, s = 0; s < a; s++) {
                    var l = c(this[s], e, t);
                    o = o ? o + l : l
                }
                return o
            }
            for (n = 0; n < r; n++) c(this[n], e, t);
            return this
        }
    }), ie({
        removeData: Le,
        dealoc: Re,
        on: function t(r, e, o, n) {
            if (H(n)) throw Ae("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            var a = He(r, "events"),
                s = He(r, "handle");
            a || He(r, "events", a = {}), s || He(r, "handle", s = tt(r, a)), ie(e.split(" "), function(n) {
                var e = a[n];
                if (!e) {
                    if ("mouseenter" == n || "mouseleave" == n) {
                        var i = Z.body.contains || Z.body.compareDocumentPosition ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        };
                        a[n] = [];
                        t(r, {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        }[n], function(e) {
                            var t = e.relatedTarget;
                            t && (t === this || i(this, t)) || s(e, n)
                        })
                    } else be(r, n, s), a[n] = [];
                    e = a[n]
                }
                e.push(o)
            })
        },
        off: De,
        one: function(t, n, i) {
            (t = ne(t)).on(n, function e() {
                t.off(n, i), t.off(n, e)
            }), t.on(n, i)
        },
        replaceWith: function(t, e) {
            var n, i = t.parentNode;
            Re(t), ie(new Fe(e), function(e) {
                n ? i.insertBefore(e, n.nextSibling) : i.replaceChild(e, t), n = e
            })
        },
        children: function(e) {
            var t = [];
            return ie(e.childNodes, function(e) {
                1 === e.nodeType && t.push(e)
            }), t
        },
        contents: function(e) {
            return e.contentDocument || e.childNodes || []
        },
        append: function(t, e) {
            ie(new Fe(e), function(e) {
                1 !== t.nodeType && 11 !== t.nodeType || t.appendChild(e)
            })
        },
        prepend: function(t, e) {
            if (1 === t.nodeType) {
                var n = t.firstChild;
                ie(new Fe(e), function(e) {
                    t.insertBefore(e, n)
                })
            }
        },
        wrap: function(e, t) {
            t = ne(t)[0];
            var n = e.parentNode;
            n && n.replaceChild(t, e), t.appendChild(e)
        },
        remove: function(e) {
            Re(e);
            var t = e.parentNode;
            t && t.removeChild(e)
        },
        after: function(e, t) {
            var n = e,
                i = e.parentNode;
            ie(new Fe(t), function(e) {
                i.insertBefore(e, n.nextSibling), n = e
            })
        },
        addClass: Be,
        removeClass: Ue,
        toggleClass: function(n, e, i) {
            e && ie(e.split(" "), function(e) {
                var t = i;
                O(t) && (t = !je(n, e)), (t ? Be : Ue)(n, e)
            })
        },
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        next: function(e) {
            if (e.nextElementSibling) return e.nextElementSibling;
            for (var t = e.nextSibling; null != t && 1 !== t.nodeType;) t = t.nextSibling;
            return t
        },
        find: function(e, t) {
            return e.getElementsByTagName ? e.getElementsByTagName(t) : []
        },
        clone: Ne,
        triggerHandler: function(t, e, n) {
            var i, r, o, a = e.type || e,
                s = (He(t, "events") || {})[a];
            s && (i = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented
                },
                stopPropagation: E,
                type: a,
                target: t
            }, e.type && (i = F(i, e)), r = ce(s), o = n ? [i].concat(n) : [i], ie(r, function(e) {
                e.apply(t, o)
            }))
        }
    }, function(o, e) {
        Fe.prototype[e] = function(e, t, n) {
            for (var i, r = 0; r < this.length; r++) O(i) ? H(i = o(this[r], e, t, n)) && (i = ne(i)) : We(i, o(this[r], e, t, n));
            return H(i) ? i : this
        }, Fe.prototype.bind = Fe.prototype.on, Fe.prototype.unbind = Fe.prototype.off
    }), it.prototype = {
        put: function(e, t) {
            this[nt(e, this.nextUid)] = t
        },
        get: function(e) {
            return this[nt(e, this.nextUid)]
        },
        remove: function(e) {
            var t = this[e = nt(e, this.nextUid)];
            return delete this[e], t
        }
    };
    var rt = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        ot = /,/,
        at = /^\s*(_?)(\S+?)\1\s*$/,
        st = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        lt = x("$injector");

    function ct(e) {
        var i, t;
        return "function" == typeof e ? (i = e.$inject) || (i = [], e.length && ie(e.toString().replace(st, "").match(rt)[1].split(ot), function(e) {
            e.replace(at, function(e, t, n) {
                i.push(n)
            })
        }), e.$inject = i) : ae(e) ? (X(e[t = e.length - 1], "fn"), i = e.slice(0, t)) : X(e, "fn", !0), i
    }

    function ut(e) {
        var i = {},
            r = "Provider",
            a = [],
            c = new it([], !0),
            s = {
                $provide: {
                    provider: t(l),
                    factory: t(p),
                    service: t(function(e, t) {
                        return p(e, ["$injector", function(e) {
                            return e.instantiate(t)
                        }])
                    }),
                    value: t(function(e, t) {
                        return p(e, w(t))
                    }),
                    constant: t(function(e, t) {
                        ve(e, "constant"), s[e] = t, n[e] = t
                    }),
                    decorator: function(e, t) {
                        var n = u.get(e + r),
                            i = n.$get;
                        n.$get = function() {
                            var e = o.invoke(i, n);
                            return o.invoke(t, null, {
                                $delegate: e
                            })
                        }
                    }
                }
            },
            u = s.$injector = f(s, function() {
                throw lt("unpr", "Unknown provider: {0}", a.join(" <- "))
            }),
            n = {},
            o = n.$injector = f(n, function(e) {
                var t = u.get(e + r);
                return o.invoke(t.$get, t)
            });
        return ie(function i(e) {
            var r, o, a, s, l = [];
            ie(e, function(t) {
                if (!c.get(t)) {
                    c.put(t, !0);
                    try {
                        if (oe(t))
                            for (r = d(t), l = l.concat(i(r.requires)).concat(r._runBlocks), o = r._invokeQueue, a = 0, s = o.length; a < s; a++) {
                                var e = o[a],
                                    n = u.get(e[0]);
                                n[e[1]].apply(n, e[2])
                            } else se(t) || ae(t) ? l.push(u.invoke(t)) : X(t, "module")
                    } catch (e) {
                        throw ae(t) && (t = t[t.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), lt("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, e.stack || e.message || e)
                    }
                }
            });
            return l
        }(e), function(e) {
            o.invoke(e || E)
        }), o;

        function t(n) {
            return function(e, t) {
                if (!re(e)) return n(e, t);
                ie(e, m(n))
            }
        }

        function l(e, t) {
            if (ve(e, "service"), (se(t) || ae(t)) && (t = u.instantiate(t)), !t.$get) throw lt("pget", "Provider '{0}' must define $get factory method.", e);
            return s[e + r] = t
        }

        function p(e, t) {
            return l(e, {
                $get: t
            })
        }

        function f(n, e) {
            function l(t) {
                if (n.hasOwnProperty(t)) {
                    if (n[t] === i) throw lt("cdep", "Circular dependency found: {0}", t + " <- " + a.join(" <- "));
                    return n[t]
                }
                try {
                    return a.unshift(t), n[t] = i, n[t] = e(t)
                } catch (e) {
                    throw n[t] === i && delete n[t], e
                } finally {
                    a.shift()
                }
            }

            function o(e, t, n) {
                var i, r, o, a = [],
                    s = ct(e);
                for (r = 0, i = s.length; r < i; r++) {
                    if ("string" != typeof(o = s[r])) throw lt("itkn", "Incorrect injection token! Expected service name as string, got {0}", o);
                    a.push(n && n.hasOwnProperty(o) ? n[o] : l(o))
                }
                return ae(e) && (e = e[i]), e.apply(t, a)
            }
            return {
                invoke: o,
                instantiate: function(e, t) {
                    function n() {}
                    var i, r;
                    return n.prototype = (ae(e) ? e[e.length - 1] : e).prototype, re(r = o(e, i = new n, t)) || se(r) ? r : i
                },
                get: l,
                annotate: ct,
                has: function(e) {
                    return s.hasOwnProperty(e + r) || n.hasOwnProperty(e)
                }
            }
        }
    }

    function pt() {
        var n = !0;
        this.disableAutoScrolling = function() {
            n = !1
        }, this.$get = ["$window", "$location", "$rootScope", function(r, o, e) {
            var a = r.document;

            function t() {
                var e, t, n, i = o.hash();
                i ? (e = a.getElementById(i)) ? e.scrollIntoView() : (t = a.getElementsByName(i), n = null, ie(t, function(e) {
                    n || "a" !== C(e.nodeName) || (n = e)
                }), (e = n) ? e.scrollIntoView() : "top" === i && r.scrollTo(0, 0)) : r.scrollTo(0, 0)
            }
            return n && e.$watch(function() {
                return o.hash()
            }, function() {
                e.$evalAsync(t)
            }), t
        }]
    }
    var ft = x("$animate"),
        dt = ["$provide", function(i) {
            this.$$selectors = {}, this.register = function(e, t) {
                var n = e + "-animation";
                if (e && "." != e.charAt(0)) throw ft("notcsel", "Expecting class selector starting with '.' got '{0}'.", e);
                this.$$selectors[e.substr(1)] = n, i.factory(n, t)
            }, this.classNameFilter = function(e) {
                return 1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null), this.$$classNameFilter
            }, this.$get = ["$timeout", "$$asyncCallback", function(e, t) {
                function r(e) {
                    e && t(e)
                }
                return {
                    enter: function(e, t, n, i) {
                        n ? n.after(e) : (t && t[0] || (t = n.parent()), t.append(e)), r(i)
                    },
                    leave: function(e, t) {
                        e.remove(), r(t)
                    },
                    move: function(e, t, n, i) {
                        this.enter(e, t, n, i)
                    },
                    addClass: function(e, t, n) {
                        t = oe(t) ? t : ae(t) ? t.join(" ") : "", ie(e, function(e) {
                            Be(e, t)
                        }), r(n)
                    },
                    removeClass: function(e, t, n) {
                        t = oe(t) ? t : ae(t) ? t.join(" ") : "", ie(e, function(e) {
                            Ue(e, t)
                        }), r(n)
                    },
                    setClass: function(e, t, n, i) {
                        ie(e, function(e) {
                            Be(e, t), Ue(e, n)
                        }), r(i)
                    },
                    enabled: E
                }
            }]
        }];

    function ht() {
        this.$get = ["$$rAF", "$timeout", function(t, n) {
            return t.supported ? function(e) {
                return t(e)
            } : function(e) {
                return n(e, 0, !1)
            }
        }]
    }

    function vt(o, e, s, a) {
        var l = this,
            c = e[0],
            u = o.location,
            p = o.history,
            i = o.setTimeout,
            t = o.clearTimeout,
            r = {};
        l.isMock = !1;
        var f = 0,
            n = [];

        function d(e) {
            try {
                e.apply(null, pe(arguments, 1))
            } finally {
                if (0 === --f)
                    for (; n.length;) try {
                        n.pop()()
                    } catch (e) {
                        s.error(e)
                    }
            }
        }
        l.$$completeOutstandingRequest = d, l.$$incOutstandingRequestCount = function() {
            f++
        }, l.notifyWhenNoOutstandingRequests = function(e) {
            ie(v, function(e) {
                e()
            }), 0 === f ? e() : n.push(e)
        };
        var h, v = [];
        l.addPollFn = function(e) {
            var t, n;
            return O(h) && (t = 100, n = i, function e() {
                ie(v, function(e) {
                    e()
                }), h = n(e, t)
            }()), v.push(e), e
        };
        var m = u.href,
            g = e.find("base"),
            $ = null;
        l.url = function(e, t) {
            if (u !== o.location && (u = o.location), p !== o.history && (p = o.history), e) {
                if (m == e) return;
                var n = m && Wt(m) === Wt(e);
                return m = e, !n && a.history ? t ? p.replaceState(null, "", e) : (p.pushState(null, "", e), g.attr("href", g.attr("href"))) : (n || ($ = e), t ? u.replace(e) : n ? u.hash = -1 === (r = (i = e).indexOf("#")) ? "" : i.substr(r + 1) : u.href = e), l
            }
            return $ || u.href.replace(/%27/g, "'");
            var i, r
        };
        var y = [],
            w = !1;

        function b() {
            m != l.url() && (m = l.url(), ie(y, function(e) {
                e(l.url())
            }))
        }
        l.onUrlChange = function(e) {
            return w || (a.history && ne(o).on("popstate", b), a.hashchange ? ne(o).on("hashchange", b) : l.addPollFn(b), w = !0), y.push(e), e
        }, l.$$checkUrlChange = b, l.baseHref = function() {
            var e = g.attr("href");
            return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var S = {},
            x = "",
            C = l.baseHref();
        l.cookies = function(e, t) {
            var n, i, r, o, a;
            if (!e) {
                if (c.cookie !== x)
                    for (i = (x = c.cookie).split("; "), S = {}, o = 0; o < i.length; o++) 0 < (a = (r = i[o]).indexOf("=")) && (e = unescape(r.substring(0, a)), S[e] === ee && (S[e] = unescape(r.substring(a + 1))));
                return S
            }
            t === ee ? c.cookie = escape(e) + "=;path=" + C + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : oe(t) && 4096 < (n = (c.cookie = escape(e) + "=" + escape(t) + ";path=" + C).length + 1) && s.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + n + " > 4096 bytes)!")
        }, l.defer = function(e, t) {
            var n;
            return f++, n = i(function() {
                delete r[n], d(e)
            }, t || 0), r[n] = !0, n
        }, l.defer.cancel = function(e) {
            return !!r[e] && (delete r[e], t(e), d(E), !0)
        }
    }

    function mt() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, i) {
            return new vt(e, i, t, n)
        }]
    }

    function gt() {
        this.$get = function() {
            var p = {};

            function e(e, t) {
                if (e in p) throw x("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
                var n = 0,
                    i = F({}, t, {
                        id: e
                    }),
                    r = {},
                    o = t && t.capacity || Number.MAX_VALUE,
                    a = {},
                    s = null,
                    l = null;
                return p[e] = {
                    put: function(e, t) {
                        o < Number.MAX_VALUE && c(a[e] || (a[e] = {
                            key: e
                        }));
                        if (!O(t)) return e in r || n++, r[e] = t, o < n && this.remove(l.key), t
                    },
                    get: function(e) {
                        if (o < Number.MAX_VALUE) {
                            var t = a[e];
                            if (!t) return;
                            c(t)
                        }
                        return r[e]
                    },
                    remove: function(e) {
                        if (o < Number.MAX_VALUE) {
                            var t = a[e];
                            if (!t) return;
                            t == s && (s = t.p), t == l && (l = t.n), u(t.n, t.p), delete a[e]
                        }
                        delete r[e], n--
                    },
                    removeAll: function() {
                        r = {}, n = 0, a = {}, s = l = null
                    },
                    destroy: function() {
                        a = i = r = null, delete p[e]
                    },
                    info: function() {
                        return F({}, i, {
                            size: n
                        })
                    }
                };

                function c(e) {
                    e != s && (l ? l == e && (l = e.n) : l = e, u(e.n, e.p), u(e, s), (s = e).n = null)
                }

                function u(e, t) {
                    e != t && (e && (e.p = t), t && (t.n = e))
                }
            }
            return e.info = function() {
                var n = {};
                return ie(p, function(e, t) {
                    n[t] = e.info()
                }), n
            }, e.get = function(e) {
                return p[e]
            }, e
        }
    }

    function $t() {
        this.$get = ["$cacheFactory", function(e) {
            return e("templates")
        }]
    }
    var yt = x("$compile");

    function wt(n, t) {
        var d = {},
            h = "Directive",
            M = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
            P = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
            c = /^(on[a-z]+|formaction)$/;
        this.directive = function e(a, t) {
            return ve(a, "directive"), oe(a) ? (he(t, "directiveFactory"), d.hasOwnProperty(a) || (d[a] = [], n.factory(a + h, ["$injector", "$exceptionHandler", function(i, r) {
                var o = [];
                return ie(d[a], function(e, t) {
                    try {
                        var n = i.invoke(e);
                        se(n) ? n = {
                            compile: w(n)
                        } : !n.compile && n.link && (n.compile = w(n.link)), n.priority = n.priority || 0, n.index = t, n.name = n.name || a, n.require = n.require || n.controller && n.name, n.restrict = n.restrict || "A", o.push(n)
                    } catch (e) {
                        r(e)
                    }
                }), o
            }])), d[a].push(t)) : ie(a, m(e)), this
        }, this.aHrefSanitizationWhitelist = function(e) {
            return H(e) ? (t.aHrefSanitizationWhitelist(e), this) : t.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return H(e) ? (t.imgSrcSanitizationWhitelist(e), this) : t.imgSrcSanitizationWhitelist()
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(f, N, R, e, t, D, L, o, n, s, r, l) {
            var H = function(e, t) {
                this.$$element = e, this.$attr = t || {}
            };
            H.prototype = {
                $normalize: St,
                $addClass: function(e) {
                    e && 0 < e.length && r.addClass(this.$$element, e)
                },
                $removeClass: function(e) {
                    e && 0 < e.length && r.removeClass(this.$$element, e)
                },
                $updateClass: function(e, t) {
                    var n = xt(e, t),
                        i = xt(t, e);
                    0 === n.length ? r.removeClass(this.$$element, i) : 0 === i.length ? r.addClass(this.$$element, n) : r.setClass(this.$$element, n, i)
                },
                $set: function(e, t, n, i) {
                    var r, o = Ze(this.$$element[0], e);
                    o && (this.$$element.prop(e, t), i = o), this[e] = t, i ? this.$attr[e] = i : (i = this.$attr[e]) || (this.$attr[e] = i = de(e, "-")), ("A" === (r = _(this.$$element).toUpperCase()) && ("href" === e || "xlinkHref" === e) || "IMG" === r && "src" === e) && (this[e] = t = l(t, "src" === e)), !1 !== n && (null === t || t === ee ? this.$$element.removeAttr(i) : this.$$element.attr(i, t));
                    var a = this.$$observers;
                    a && ie(a[e], function(e) {
                        try {
                            e(t)
                        } catch (e) {
                            R(e)
                        }
                    })
                },
                $observe: function(e, t) {
                    var n = this,
                        i = n.$$observers || (n.$$observers = {}),
                        r = i[e] || (i[e] = []);
                    return r.push(t), o.$evalAsync(function() {
                        r.$$inter || t(n[e])
                    }), t
                }
            };
            var i = N.startSymbol(),
                a = N.endSymbol(),
                q = "{{" == i || "}}" == a ? y : function(e) {
                    return e.replace(/\{\{/g, i).replace(/}}/g, a)
                },
                A = /^ngAttr[A-Z]/;
            return j;

            function j(l, e, t, n, i) {
                l instanceof ne || (l = ne(l)), ie(l, function(e, t) {
                    3 == e.nodeType && e.nodeValue.match(/\S+/) && (l[t] = e = ne(e).wrap("<span></span>").parent()[0])
                });
                var c = E(l, e, l, t, n, i);
                return U(l, "ng-scope"),
                    function(e, t, n, i) {
                        he(e, "scope");
                        var r = t ? Ge.clone.call(l) : l;
                        ie(n, function(e, t) {
                            r.data("$" + t + "Controller", e)
                        });
                        for (var o = 0, a = r.length; o < a; o++) {
                            var s = r[o].nodeType;
                            1 !== s && 9 !== s || r.eq(o).data("$scope", e)
                        }
                        return t && t(r, e), c && c(e, r, r, i), r
                    }
            }

            function U(e, t) {
                try {
                    e.addClass(t)
                } catch (e) {}
            }

            function E(e, h, t, n, i, r) {
                for (var o, a, s, l, c, u, v = [], p = 0; p < e.length; p++) o = new H, (s = (a = B(e[p], [], o, 0 === p ? n : ee, i)).length ? I(a, e[p], o, h, t, null, [], [], r) : null) && s.scope && U(o.$$element, "ng-scope"), c = s && s.terminal || !(l = e[p].childNodes) || !l.length ? null : E(l, s ? (s.transcludeOnThisElement || !s.templateOnThisElement) && s.transclude : h), v.push(s, c), u = u || s || c, r = null;
                return u ? function(e, t, n, i) {
                    var r, o, a, s, l, c, u, p, f = t.length,
                        d = new Array(f);
                    for (l = 0; l < f; l++) d[l] = t[l];
                    for (u = l = 0, c = v.length; l < c; u++) a = d[u], r = v[l++], o = v[l++], r ? (r.scope ? (s = e.$new(), ne.data(a, "$scope", s)) : s = e, p = r.transcludeOnThisElement ? O(e, r.transclude, i) : !r.templateOnThisElement && i ? i : !i && h ? O(e, h) : null, r(o, s, a, n, p)) : o && o(e, a.childNodes, ee, i)
                } : null
            }

            function O(o, a, s) {
                return function(e, t, n) {
                    var i = !1;
                    e || (i = (e = o.$new()).$$transcluded = !0);
                    var r = a(e, t, n, s);
                    return i && r.on("$destroy", function() {
                        e.$destroy()
                    }), r
                }
            }

            function B(e, t, n, i, r) {
                var o, a, s, l, c, u, p = e.nodeType,
                    f = n.$attr;
                switch (p) {
                    case 1:
                        k(t, St(a = _(e).toLowerCase()), "E", i, r);
                        for (var d, h, v, m, g, $, y = e.attributes, w = 0, b = y && y.length; w < b; w++) {
                            var S = !1,
                                x = !1;
                            if (d = y[w], !te || 8 <= te || d.specified) {
                                h = d.name, g = le(d.value), m = St(h), ($ = A.test(m)) && (h = de(m.substr(6), "-"));
                                var C = m.replace(/(Start|End)$/, "");
                                m === C + "Start" && (x = (S = h).substr(0, h.length - 5) + "end", h = h.substr(0, h.length - 6)), f[v = St(h.toLowerCase())] = h, !$ && n.hasOwnProperty(v) || (n[v] = g, Ze(e, v) && (n[v] = !0)), V(e, t, g, v), k(t, v, "A", i, r, S, x)
                            }
                        }
                        if ("input" === a && "hidden" === e.getAttribute("type") && e.setAttribute("autocomplete", "off"), oe(s = e.className) && "" !== s)
                            for (; o = P.exec(s);) k(t, v = St(o[2]), "C", i, r) && (n[v] = le(o[3])), s = s.substr(o.index + o[0].length);
                        break;
                    case 3:
                        if (11 === te)
                            for (; e.parentNode && e.nextSibling && 3 === e.nextSibling.nodeType;) e.nodeValue = e.nodeValue + e.nextSibling.nodeValue, e.parentNode.removeChild(e.nextSibling);
                        l = t, c = e.nodeValue, (u = N(c, !0)) && l.push({
                            priority: 0,
                            compile: function(e) {
                                var r = e.parent().length;
                                return r && U(e.parent(), "ng-binding"),
                                    function(e, t) {
                                        var n = t.parent(),
                                            i = n.data("$binding") || [];
                                        i.push(u), n.data("$binding", i), r || U(n, "ng-binding"), e.$watch(u, function(e) {
                                            t[0].nodeValue = e
                                        })
                                    }
                            }
                        });
                        break;
                    case 8:
                        try {
                            (o = M.exec(e.nodeValue)) && k(t, v = St(o[1]), "M", i, r) && (n[v] = le(o[2]))
                        } catch (e) {}
                }
                return t.sort(T), t
            }

            function W(e, t, n) {
                var i = [],
                    r = 0;
                if (t && e.hasAttribute && e.hasAttribute(t)) {
                    do {
                        if (!e) throw yt("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
                        1 == e.nodeType && (e.hasAttribute(t) && r++, e.hasAttribute(n) && r--), i.push(e), e = e.nextSibling
                    } while (0 < r)
                } else i.push(e);
                return ne(i)
            }

            function J(o, a, s) {
                return function(e, t, n, i, r) {
                    return t = W(t[0], a, s), o(e, t, n, i, r)
                }
            }

            function I(e, m, g, t, n, i, $, y, r) {
                r = r || {};
                for (var o, a, s, l, c, u, p = -Number.MAX_VALUE, w = r.controllerDirectives, b = r.newIsolateScopeDirective, S = r.templateDirective, f = r.nonTlbTranscludeDirective, d = !1, h = !1, x = r.hasElementTranscludeDirective, v = g.$$element = ne(m), C = i, A = t, k = 0, E = e.length; k < E; k++) {
                    var O = (a = e[k]).$$start,
                        I = a.$$end;
                    if (O && (v = W(m, O, I)), l = ee, p > a.priority) break;
                    if ((u = a.scope) && (o = o || a, a.templateUrl || (Y("new/isolated scope", b, a, v), re(u) && (b = a))), s = a.name, !a.templateUrl && a.controller && (u = a.controller, Y("'" + s + "' controller", (w = w || {})[s], a, v), w[s] = a), (u = a.transclude) && (d = !0, a.$$tlb || (Y("transclusion", f, a, v), f = a), A = "element" == u ? (x = !0, p = a.priority, l = v, v = g.$$element = ne(Z.createComment(" " + s + ": " + g[s] + " ")), m = v[0], K(n, pe(l), m), j(l, t, p, C && C.name, {
                            nonTlbTranscludeDirective: f
                        })) : (l = ne(Ne(m)).contents(), v.empty(), j(l, t))), a.template)
                        if (h = !0, Y("template", S, a, v), u = se((S = a).template) ? a.template(v, g) : a.template, u = q(u), a.replace) {
                            if (C = a, l = Pe(u) ? [] : ne(le(u)), m = l[0], 1 != l.length || 1 !== m.nodeType) throw yt("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", s, "");
                            K(n, v, m);
                            var T = {
                                    $attr: {}
                                },
                                V = B(m, [], T),
                                M = e.splice(k + 1, e.length - (k + 1));
                            b && z(V), e = e.concat(V).concat(M), Q(g, T), E = e.length
                        } else v.html(u);
                    if (a.templateUrl) h = !0, Y("template", S, a, v), (S = a).replace && (C = a), F = G(e.splice(k, e.length - k), v, g, n, d && A, $, y, {
                        controllerDirectives: w,
                        newIsolateScopeDirective: b,
                        templateDirective: S,
                        nonTlbTranscludeDirective: f
                    }), E = e.length;
                    else if (a.compile) try {
                        se(c = a.compile(v, g, A)) ? P(null, c, O, I) : c && P(c.pre, c.post, O, I)
                    } catch (e) {
                        R(e, fe(v))
                    }
                    a.terminal && (F.terminal = !0, p = Math.max(p, a.priority))
                }
                return F.scope = o && !0 === o.scope, F.transcludeOnThisElement = d, F.templateOnThisElement = h, F.transclude = A, r.hasElementTranscludeDirective = x, F;

                function P(e, t, n, i) {
                    e && (n && (e = J(e, n, i)), e.require = a.require, e.directiveName = s, b !== a && !a.$$isolateScope || (e = X(e, {
                        isolateScope: !0
                    })), $.push(e)), t && (n && (t = J(t, n, i)), t.require = a.require, t.directiveName = s, b !== a && !a.$$isolateScope || (t = X(t, {
                        isolateScope: !0
                    })), y.push(t))
                }

                function _(t, e, n, i) {
                    var r, o = "data",
                        a = !1;
                    if (oe(e)) {
                        for (;
                            "^" == (r = e.charAt(0)) || "?" == r;) e = e.substr(1), "^" == r && (o = "inheritedData"), a = a || "?" == r;
                        if (r = null, i && "data" === o && (r = i[e]), !(r = r || n[o]("$" + e + "Controller")) && !a) throw yt("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", e, t);
                        return r
                    }
                    return ae(e) && (r = [], ie(e, function(e) {
                        r.push(_(t, e, n, i))
                    })), r
                }

                function F(e, u, t, n, i) {
                    var p, r, o, a, s, l, f, c, d = {};
                    if (p = m === t ? g : ce(g, new H(ne(t), g.$attr)), r = p.$$element, b) {
                        var h = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        f = u.$new(!0), !S || S !== b && S !== b.$$originalDirective ? r.data("$isolateScopeNoTemplate", f) : r.data("$isolateScope", f), U(r, "ng-isolate-scope"), ie(b.scope, function(e, t) {
                            var n, i, r, o, a = e.match(h) || [],
                                s = a[3] || t,
                                l = "?" == a[2],
                                c = a[1];
                            switch (f.$$isolateBindings[t] = c + s, c) {
                                case "@":
                                    p.$observe(s, function(e) {
                                        f[t] = e
                                    }), p.$$observers[s].$$scope = u, p[s] && (f[t] = N(p[s])(u));
                                    break;
                                case "=":
                                    if (l && !p[s]) return;
                                    i = D(p[s]), o = i.literal ? ue : function(e, t) {
                                        return e === t || e != e && t != t
                                    }, r = i.assign || function() {
                                        throw n = f[t] = i(u), yt("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", p[s], b.name)
                                    }, n = f[t] = i(u), f.$watch(function() {
                                        var e = i(u);
                                        return o(e, f[t]) || (o(e, n) ? r(u, e = f[t]) : f[t] = e), n = e
                                    }, null, i.literal);
                                    break;
                                case "&":
                                    i = D(p[s]), f[t] = function(e) {
                                        return i(u, e)
                                    };
                                    break;
                                default:
                                    throw yt("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", b.name, t, e)
                            }
                        })
                    }
                    for (c = i && function(e, t) {
                            var n;
                            arguments.length < 2 && (t = e, e = ee);
                            x && (n = d);
                            return i(e, t, n)
                        }, w && ie(w, function(e) {
                            var t, n = {
                                $scope: e === b || e.$$isolateScope ? f : u,
                                $element: r,
                                $attrs: p,
                                $transclude: c
                            };
                            "@" == (l = e.controller) && (l = p[e.name]), t = L(l, n), d[e.name] = t, x || r.data("$" + e.name + "Controller", t), e.controllerAs && (n.$scope[e.controllerAs] = t)
                        }), o = 0, a = $.length; o < a; o++) try {
                        (s = $[o])(s.isolateScope ? f : u, r, p, s.require && _(s.directiveName, s.require, r, d), c)
                    } catch (e) {
                        R(e, fe(r))
                    }
                    var v = u;
                    for (b && (b.template || null === b.templateUrl) && (v = f), e && e(v, t.childNodes, ee, i), o = y.length - 1; 0 <= o; o--) try {
                        (s = y[o])(s.isolateScope ? f : u, r, p, s.require && _(s.directiveName, s.require, r, d), c)
                    } catch (e) {
                        R(e, fe(r))
                    }
                }
            }

            function z(e) {
                for (var t = 0, n = e.length; t < n; t++) e[t] = $(e[t], {
                    $$isolateScope: !0
                })
            }

            function k(e, t, n, i, r, o, a) {
                if (t !== r) {
                    var s = null;
                    if (d.hasOwnProperty(t))
                        for (var l, c = f.get(t + h), u = 0, p = c.length; u < p; u++) try {
                            l = c[u], (i === ee || i > l.priority) && -1 != l.restrict.indexOf(n) && (o && (l = $(l, {
                                $$start: o,
                                $$end: a
                            })), e.push(l), s = l)
                        } catch (e) {
                            R(e)
                        }
                    return s
                }
            }

            function Q(n, i) {
                var r = i.$attr,
                    o = n.$attr,
                    a = n.$$element;
                ie(n, function(e, t) {
                    "$" != t.charAt(0) && (i[t] && i[t] !== e && (e += ("style" === t ? ";" : " ") + i[t]), n.$set(t, e, !0, r[t]))
                }), ie(i, function(e, t) {
                    "class" == t ? (U(a, e), n.class = (n.class ? n.class + " " : "") + e) : "style" == t ? (a.attr("style", a.attr("style") + ";" + e), n.style = (n.style ? n.style + ";" : "") + e) : "$" == t.charAt(0) || n.hasOwnProperty(t) || (n[t] = e, o[t] = r[t])
                })
            }

            function G(f, d, h, v, m, g, $, y) {
                var w, b, S = [],
                    x = d[0],
                    C = f.shift(),
                    A = F({}, C, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: C
                    }),
                    k = se(C.templateUrl) ? C.templateUrl(d, h) : C.templateUrl;
                return d.empty(), e.get(s.getTrustedResourceUrl(k), {
                        cache: t
                    }).success(function(e) {
                        var n, t, i, r;
                        if (e = q(e), C.replace) {
                            if (i = Pe(e) ? [] : ne(le(e)), n = i[0], 1 != i.length || 1 !== n.nodeType) throw yt("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", C.name, k);
                            t = {
                                $attr: {}
                            }, K(v, d, n);
                            var o = B(n, [], t);
                            re(C.scope) && z(o), f = o.concat(f), Q(h, t)
                        } else n = x, d.html(e);
                        for (f.unshift(A), w = I(f, n, h, m, d, C, g, $, y), ie(v, function(e, t) {
                                e == n && (v[t] = d[0])
                            }), b = E(d[0].childNodes, m); S.length;) {
                            var a = S.shift(),
                                s = S.shift(),
                                l = S.shift(),
                                c = S.shift(),
                                u = d[0];
                            if (s !== x) {
                                var p = s.className;
                                y.hasElementTranscludeDirective && C.replace || (u = Ne(n)), K(l, ne(s), u), U(ne(u), p)
                            }
                            r = w.transcludeOnThisElement ? O(a, w.transclude, c) : c, w(b, a, u, v, r)
                        }
                        S = null
                    }).error(function(e, t, n, i) {
                        throw yt("tpload", "Failed to load template: {0}", i.url)
                    }),
                    function(e, t, n, i, r) {
                        var o = r;
                        S ? (S.push(t), S.push(n), S.push(i), S.push(o)) : (w.transcludeOnThisElement && (o = O(t, w.transclude, r)), w(b, t, n, i, o))
                    }
            }

            function T(e, t) {
                var n = t.priority - e.priority;
                return 0 != n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
            }

            function Y(e, t, n, i) {
                if (t) throw yt("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", t.name, n.name, e, fe(i))
            }

            function V(r, e, t, o) {
                var a = N(t, !0);
                if (a) {
                    if ("multiple" === o && "SELECT" === _(r)) throw yt("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", fe(r));
                    e.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(e, t, n) {
                                    var i = n.$$observers || (n.$$observers = {});
                                    if (c.test(o)) throw yt("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    (a = N(n[o], !0, function(e, t) {
                                        if ("srcdoc" == t) return s.HTML;
                                        var n = _(e);
                                        return "xlinkHref" == t || "FORM" == n && "action" == t || "LINK" == n && "href" == t || "IMG" != n && ("src" == t || "ngSrc" == t) ? s.RESOURCE_URL : void 0
                                    }(r, o))) && (n[o] = a(e), (i[o] || (i[o] = [])).$$inter = !0, (n.$$observers && n.$$observers[o].$$scope || e).$watch(a, function(e, t) {
                                        "class" === o && e != t ? n.$updateClass(e, t) : n.$set(o, e)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function K(e, t, n) {
                var i, r, o = t[0],
                    a = t.length,
                    s = o.parentNode;
                if (e)
                    for (i = 0, r = e.length; i < r; i++)
                        if (e[i] == o) {
                            e[i++] = n;
                            for (var l = i, c = l + a - 1, u = e.length; l < u; l++, c++) c < u ? e[l] = e[c] : delete e[l];
                            e.length -= a - 1;
                            break
                        }
                s && s.replaceChild(n, o);
                var p = Z.createDocumentFragment();
                p.appendChild(o), n[ne.expando] = o[ne.expando];
                for (var f = 1, d = t.length; f < d; f++) {
                    var h = t[f];
                    ne(h).remove(), p.appendChild(h), delete t[f]
                }
                t[0] = n, t.length = 1
            }

            function X(e, t) {
                return F(function() {
                    return e.apply(null, arguments)
                }, e, t)
            }
        }]
    }
    var bt = /^(x[\:\-_]|data[\:\-_])/i;

    function St(e) {
        return ke(e.replace(bt, ""))
    }

    function xt(e, t) {
        var n = "",
            i = e.split(/\s+/),
            r = t.split(/\s+/);
        e: for (var o = 0; o < i.length; o++) {
            for (var a = i[o], s = 0; s < r.length; s++)
                if (a == r[s]) continue e;
            n += (0 < n.length ? " " : "") + a
        }
        return n
    }

    function Ct() {
        var l = {},
            c = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(e, t) {
            ve(e, "controller"), re(e) ? F(l, e) : l[e] = t
        }, this.$get = ["$injector", "$window", function(a, s) {
            return function(e, t) {
                var n, i, r, o;
                if (oe(e) && (r = (i = e.match(c))[1], o = i[3], X(e = l.hasOwnProperty(r) ? l[r] : me(t.$scope, r, !0) || me(s, r, !0), r, !0)), n = a.instantiate(e, t), o) {
                    if (!t || "object" != typeof t.$scope) throw x("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", r || e.name, o);
                    t.$scope[o] = n
                }
                return n
            }
        }]
    }

    function At() {
        this.$get = ["$window", function(e) {
            return ne(e.document)
        }]
    }

    function kt() {
        this.$get = ["$log", function(n) {
            return function(e, t) {
                n.error.apply(n, arguments)
            }
        }]
    }

    function Et(e) {
        var t, n, i, r = {};
        return e && ie(e.split("\n"), function(e) {
            i = e.indexOf(":"), t = C(le(e.substr(0, i))), n = le(e.substr(i + 1)), t && (r[t] = r[t] ? r[t] + ", " + n : n)
        }), r
    }

    function Ot(t) {
        var n = re(t) ? t : ee;
        return function(e) {
            return n = n || Et(t), e ? n[C(e)] || null : n
        }
    }

    function It(t, n, e) {
        return se(e) ? e(t, n) : (ie(e, function(e) {
            t = e(t, n)
        }), t)
    }

    function Tt(e) {
        return 200 <= e && e < 300
    }

    function Vt() {
        var t = /^\s*(\[|\{[^\{])/,
            n = /[\}\]]\s*$/,
            i = /^\)\]\}',?\n/,
            e = {
                "Content-Type": "application/json;charset=utf-8"
            },
            g = this.defaults = {
                transformResponse: [function(e) {
                    return oe(e) && (e = e.replace(i, ""), t.test(e) && n.test(e) && (e = a(e))), e
                }],
                transformRequest: [function(e) {
                    return re(e) && (n = e, "[object File]" !== s.call(n)) && (t = e, "[object Blob]" !== s.call(t)) ? W(e) : e;
                    var t, n
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: ce(e),
                    put: ce(e),
                    patch: ce(e)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            },
            r = this.interceptors = [],
            o = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(p, f, e, d, h, i) {
            var v = e("$http"),
                l = [];

            function m(e) {
                var n = {
                        method: "get",
                        transformRequest: g.transformRequest,
                        transformResponse: g.transformResponse
                    },
                    i = function(e) {
                        var t, n, i, r = g.headers,
                            o = F({}, e.headers);
                        r = F({}, r.common, r[C(e.method)]);
                        e: for (t in r) {
                            for (i in n = C(t), o)
                                if (C(i) === n) continue e;
                            o[t] = r[t]
                        }
                        return function(n) {
                            var i;
                            ie(n, function(e, t) {
                                se(e) && (null != (i = e()) ? n[t] = i : delete n[t])
                            })
                        }(o), o
                    }(e);
                F(n, e), n.headers = i, n.method = c(n.method);
                var t = [function(e) {
                        i = e.headers;
                        var t = It(e.data, Ot(i), e.transformRequest);
                        return O(t) && ie(i, function(e, t) {
                                "content-type" === C(t) && delete i[t]
                            }), O(e.withCredentials) && !O(g.withCredentials) && (e.withCredentials = g.withCredentials),
                            function(r, e, t) {
                                var o, n, a = h.defer(),
                                    i = a.promise,
                                    s = function(e, t) {
                                        if (!t) return e;
                                        var n = [];
                                        (function(e, t, n) {
                                            for (var i = L(e), r = 0; r < i.length; r++) t.call(n, e[i[r]], i[r])
                                        })(t, function(e, t) {
                                            null === e || O(e) || (ae(e) || (e = [e]), ie(e, function(e) {
                                                re(e) && (e = I(e) ? e.toISOString() : W(e)), n.push(Y(t) + "=" + Y(e))
                                            }))
                                        }), 0 < n.length && (e += (-1 == e.indexOf("?") ? "?" : "&") + n.join("&"));
                                        return e
                                    }(r.url, r.params);
                                m.pendingRequests.push(r), i.then(u, u), !r.cache && !g.cache || !1 === r.cache || "GET" !== r.method && "JSONP" !== r.method || (o = re(r.cache) ? r.cache : re(g.cache) ? g.cache : v);
                                if (o)
                                    if (H(n = o.get(s))) {
                                        if (N(n)) return n.then(u, u), n;
                                        ae(n) ? c(n[1], n[0], ce(n[2]), n[3]) : c(n, 200, {}, "OK")
                                    } else o.put(s, i);
                                if (O(n)) {
                                    var l = Nn(r.url) ? f.cookies()[r.xsrfCookieName || g.xsrfCookieName] : ee;
                                    l && (t[r.xsrfHeaderName || g.xsrfHeaderName] = l), p(r.method, s, e, function(e, t, n, i) {
                                        o && (Tt(e) ? o.put(s, [e, t, Et(n), i]) : o.remove(s));
                                        c(t, e, n, i), d.$$phase || d.$apply()
                                    }, t, r.timeout, r.withCredentials, r.responseType)
                                }
                                return i;

                                function c(e, t, n, i) {
                                    (Tt(t = Math.max(t, 0)) ? a.resolve : a.reject)({
                                        data: e,
                                        status: t,
                                        headers: Ot(n),
                                        config: r,
                                        statusText: i
                                    })
                                }

                                function u() {
                                    var e = R(m.pendingRequests, r); - 1 !== e && m.pendingRequests.splice(e, 1)
                                }
                            }(e, t, i).then(s, s)
                    }, ee],
                    r = h.when(n);
                for (ie(l, function(e) {
                        (e.request || e.requestError) && t.unshift(e.request, e.requestError), (e.response || e.responseError) && t.push(e.response, e.responseError)
                    }); t.length;) {
                    var o = t.shift(),
                        a = t.shift();
                    r = r.then(o, a)
                }
                return r.success = function(t) {
                    return r.then(function(e) {
                        t(e.data, e.status, e.headers, n)
                    }), r
                }, r.error = function(t) {
                    return r.then(null, function(e) {
                        t(e.data, e.status, e.headers, n)
                    }), r
                }, r;

                function s(e) {
                    var t = F({}, e, {
                        data: It(e.data, e.headers, n.transformResponse)
                    });
                    return Tt(e.status) ? t : h.reject(t)
                }
            }
            return ie(r, function(e) {
                    l.unshift(oe(e) ? i.get(e) : i.invoke(e))
                }), ie(o, function(e, t) {
                    var n = oe(e) ? i.get(e) : i.invoke(e);
                    l.splice(t, 0, {
                        response: function(e) {
                            return n(h.when(e))
                        },
                        responseError: function(e) {
                            return n(h.reject(e))
                        }
                    })
                }), m.pendingRequests = [],
                function(e) {
                    ie(arguments, function(n) {
                        m[n] = function(e, t) {
                            return m(F(t || {}, {
                                method: n,
                                url: e
                            }))
                        }
                    })
                }("get", "delete", "head", "jsonp"),
                function(e) {
                    ie(arguments, function(i) {
                        m[i] = function(e, t, n) {
                            return m(F(n || {}, {
                                method: i,
                                url: e,
                                data: t
                            }))
                        }
                    })
                }("post", "put", "patch"), m.defaults = g, m
        }]
    }

    function Mt(e) {
        if (te <= 8 && (!e.match(/^(get|post|head|put|delete|options)$/i) || !v.XMLHttpRequest)) return new v.ActiveXObject("Microsoft.XMLHTTP");
        if (v.XMLHttpRequest) return new v.XMLHttpRequest;
        throw x("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.")
    }

    function Pt() {
        this.$get = ["$browser", "$window", "$document", function(e, t, n) {
            return m = Mt, g = (v = e).defer, $ = t.angular.callbacks, y = n[0],
                function(e, o, t, i, n, r, a, s) {
                    var l;
                    if (v.$$incOutstandingRequestCount(), o = o || v.url(), "jsonp" == C(e)) {
                        var c = "_" + ($.counter++).toString(36);
                        $[c] = function(e) {
                            $[c].data = e, $[c].called = !0
                        };
                        var u = function(e, i, r) {
                            var o = y.createElement("script"),
                                a = null;
                            return o.type = "text/javascript", o.src = e, o.async = !0, a = function(e) {
                                Se(o, "load", a), Se(o, "error", a), y.body.removeChild(o), o = null;
                                var t = -1,
                                    n = "unknown";
                                e && ("load" !== e.type || $[i].called || (e = {
                                    type: "error"
                                }), n = e.type, t = "error" === e.type ? 404 : 200), r && r(t, n)
                            }, be(o, "load", a), be(o, "error", a), te <= 8 && (o.onreadystatechange = function() {
                                oe(o.readyState) && /loaded|complete/.test(o.readyState) && (o.onreadystatechange = null, a({
                                    type: "load"
                                }))
                            }), y.body.appendChild(o), a
                        }(o.replace("JSON_CALLBACK", "angular.callbacks." + c), c, function(e, t) {
                            h(i, e, $[c].data, "", t), $[c] = E
                        })
                    } else {
                        var p = m(e);
                        if (p.open(e, o, !0), ie(n, function(e, t) {
                                H(e) && p.setRequestHeader(t, e)
                            }), p.onreadystatechange = function() {
                                if (p && 4 == p.readyState) {
                                    var e = null,
                                        t = null,
                                        n = ""; - 1 !== l && (e = p.getAllResponseHeaders(), t = "response" in p ? p.response : p.responseText), -1 === l && te < 10 || (n = p.statusText), h(i, l || p.status, t, e, n)
                                }
                            }, a && (p.withCredentials = !0), s) try {
                            p.responseType = s
                        } catch (e) {
                            if ("json" !== s) throw e
                        }
                        p.send(t || null)
                    }
                    if (0 < r) var f = g(d, r);
                    else N(r) && r.then(d);

                    function d() {
                        l = -1, u && u(), p && p.abort()
                    }

                    function h(e, t, n, i, r) {
                        f && g.cancel(f), u = p = null, 0 === t && (t = n ? 200 : "file" == Fn(o).protocol ? 404 : 0), e(t = 1223 === t ? 204 : t, n, i, r = r || ""), v.$$completeOutstandingRequest(E)
                    }
                };
            var v, m, g, $, y
        }]
    }
    var _t = x("$interpolate");

    function Ft() {
        var g = "{{",
            $ = "}}";
        this.startSymbol = function(e) {
            return e ? (g = e, this) : g
        }, this.endSymbol = function(e) {
            return e ? ($ = e, this) : $
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(f, d, h) {
            var v = g.length,
                m = $.length;

            function e(o, e, a) {
                for (var t, n, i, r, s = 0, l = [], c = o.length, u = !1, p = []; s < c;) - 1 != (t = o.indexOf(g, s)) && -1 != (n = o.indexOf($, t + v)) ? (s != t && l.push(o.substring(s, t)), l.push(i = f(r = o.substring(t + v, n))), i.exp = r, s = n + m, u = !0) : (s != c && l.push(o.substring(s)), s = c);
                if ((c = l.length) || (l.push(""), c = 1), a && 1 < l.length) throw _t("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", o);
                if (!e || u) return p.length = c, (i = function(e) {
                    try {
                        for (var t, n = 0, i = c; n < i; n++) {
                            if ("function" == typeof(t = l[n]))
                                if (t = t(e), null == (t = a ? h.getTrusted(a, t) : h.valueOf(t))) t = "";
                                else switch (typeof t) {
                                    case "string":
                                        break;
                                    case "number":
                                        t = "" + t;
                                        break;
                                    default:
                                        t = W(t)
                                }
                            p[n] = t
                        }
                        return p.join("")
                    } catch (e) {
                        var r = _t("interr", "Can't interpolate: {0}\n{1}", o, e.toString());
                        d(r)
                    }
                }).exp = o, i.parts = l, i
            }
            return e.startSymbol = function() {
                return g
            }, e.endSymbol = function() {
                return $
            }, e
        }]
    }

    function Nt() {
        this.$get = ["$rootScope", "$window", "$q", function(u, p, f) {
            var d = {};

            function e(e, t, n, i) {
                var r = p.setInterval,
                    o = p.clearInterval,
                    a = f.defer(),
                    s = a.promise,
                    l = 0,
                    c = H(i) && !i;
                return n = H(n) ? n : 0, s.then(null, null, e), s.$$intervalId = r(function() {
                    a.notify(l++), 0 < n && n <= l && (a.resolve(l), o(s.$$intervalId), delete d[s.$$intervalId]), c || u.$apply()
                }, t), d[s.$$intervalId] = a, s
            }
            return e.cancel = function(e) {
                return !!(e && e.$$intervalId in d) && (d[e.$$intervalId].reject("canceled"), p.clearInterval(e.$$intervalId), delete d[e.$$intervalId], !0)
            }, e
        }]
    }

    function Rt() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    short: "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(e) {
                    return 1 === e ? "one" : "other"
                }
            }
        }
    }
    var Dt = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        Lt = {
            http: 80,
            https: 443,
            ftp: 21
        },
        Ht = x("$location");

    function qt(e) {
        for (var t = e.split("/"), n = t.length; n--;) t[n] = G(t[n]);
        return t.join("/")
    }

    function jt(e, t, n) {
        var i = Fn(e, n);
        t.$$protocol = i.protocol, t.$$host = i.hostname, t.$$port = k(i.port) || Lt[i.protocol] || null
    }

    function Ut(e, t, n) {
        var i = "/" !== e.charAt(0);
        i && (e = "/" + e);
        var r = Fn(e, n);
        t.$$path = decodeURIComponent(i && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), t.$$search = z(r.search), t.$$hash = decodeURIComponent(r.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
    }

    function Bt(e, t) {
        if (0 === t.indexOf(e)) return t.substr(e.length)
    }

    function Wt(e) {
        var t = e.indexOf("#");
        return -1 == t ? e : e.substr(0, t)
    }

    function Jt(e) {
        return e.replace(/(#.+)|#$/, "$1")
    }

    function zt(e) {
        return e.substr(0, Wt(e).lastIndexOf("/") + 1)
    }

    function Qt(o, a) {
        this.$$html5 = !0, a = a || "";
        var s = zt(o);
        jt(o, this, o), this.$$parse = function(e) {
            var t = Bt(s, e);
            if (!oe(t)) throw Ht("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, s);
            Ut(t, this, o), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var e = Q(this.$$search),
                t = this.$$hash ? "#" + G(this.$$hash) : "";
            this.$$url = qt(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = s + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function(e, t) {
            var n, i, r;
            return (n = Bt(o, e)) !== ee ? r = (n = Bt(a, i = n)) !== ee ? s + (Bt("/", n) || n) : o + i : (n = Bt(s, e)) !== ee ? r = s + n : s == e + "/" && (r = s), r && this.$$parse(r), !!r
        }
    }

    function Gt(i, r) {
        var o = zt(i);
        jt(i, this, i), this.$$parse = function(e) {
            var t = Bt(i, e) || Bt(o, e),
                n = "#" == t.charAt(0) ? Bt(r, t) : this.$$html5 ? t : "";
            if (!oe(n)) throw Ht("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', e, r);
            Ut(n, this, i), this.$$path = function(e, t, n) {
                var i, r = /^\/[A-Z]:(\/.*)/;
                0 === t.indexOf(n) && (t = t.replace(n, ""));
                if (r.exec(t)) return e;
                return (i = r.exec(e)) ? i[1] : e
            }(this.$$path, n, i), this.$$compose()
        }, this.$$compose = function() {
            var e = Q(this.$$search),
                t = this.$$hash ? "#" + G(this.$$hash) : "";
            this.$$url = qt(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = i + (this.$$url ? r + this.$$url : "")
        }, this.$$parseLinkUrl = function(e, t) {
            return Wt(i) == Wt(e) && (this.$$parse(e), !0)
        }
    }

    function Yt(r, o) {
        this.$$html5 = !0, Gt.apply(this, arguments);
        var a = zt(r);
        this.$$parseLinkUrl = function(e, t) {
            var n, i;
            return r == Wt(e) ? n = e : (i = Bt(a, e)) ? n = r + o + i : a === e + "/" && (n = a), n && this.$$parse(n), !!n
        }, this.$$compose = function() {
            var e = Q(this.$$search),
                t = this.$$hash ? "#" + G(this.$$hash) : "";
            this.$$url = qt(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = r + o + this.$$url
        }
    }

    function Kt(e) {
        return function() {
            return this[e]
        }
    }

    function Xt(t, n) {
        return function(e) {
            return O(e) ? this[t] : (this[t] = n(e), this.$$compose(), this)
        }
    }

    function Zt() {
        var d = "",
            h = !1;
        this.hashPrefix = function(e) {
            return H(e) ? (d = e, this) : d
        }, this.html5Mode = function(e) {
            return H(e) ? (h = e, this) : h
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(r, o, e, a) {
            var s, t, n, i, l = o.baseHref(),
                c = o.url();
            t = h ? (n = (i = c).substring(0, i.indexOf("/", i.indexOf("//") + 2)) + (l || "/"), e.history ? Qt : Yt) : (n = Wt(c), Gt), (s = new t(n, "#" + d)).$$parseLinkUrl(c, c);
            var u = /^\s*(javascript|mailto):/i;
            a.on("click", function(e) {
                if (!e.ctrlKey && !e.metaKey && 2 != e.which) {
                    for (var t = ne(e.target);
                        "a" !== C(t[0].nodeName);)
                        if (t[0] === a[0] || !(t = t.parent())[0]) return;
                    var n = t.prop("href"),
                        i = t.attr("href") || t.attr("xlink:href");
                    re(n) && "[object SVGAnimatedString]" === n.toString() && (n = Fn(n.animVal).href), u.test(n) || !n || t.attr("target") || e.isDefaultPrevented() || s.$$parseLinkUrl(n, i) && (e.preventDefault(), s.absUrl() != o.url() && (r.$apply(), v.angular["ff-684208-preventDefault"] = !0))
                }
            }), s.absUrl() != c && o.url(s.absUrl(), !0), o.onUrlChange(function(t) {
                s.absUrl() != t && (r.$evalAsync(function() {
                    var e = s.absUrl();
                    s.$$parse(t), r.$broadcast("$locationChangeStart", t, e).defaultPrevented ? (s.$$parse(e), o.url(e)) : f(e)
                }), r.$$phase || r.$digest())
            });
            var p = 0;
            return r.$watch(function() {
                var e = Jt(o.url()),
                    t = Jt(s.absUrl()),
                    n = s.$$replace;
                return p && e == t || (p++, r.$evalAsync(function() {
                    r.$broadcast("$locationChangeStart", s.absUrl(), e).defaultPrevented ? s.$$parse(e) : (o.url(s.absUrl(), n), f(e))
                })), s.$$replace = !1, p
            }), s;

            function f(e) {
                r.$broadcast("$locationChangeSuccess", s.absUrl(), e)
            }
        }]
    }

    function en() {
        var n = !0,
            i = this;
        this.debugEnabled = function(e) {
            return H(e) ? (n = e, this) : n
        }, this.$get = ["$window", function(r) {
            return {
                log: t("log"),
                info: t("info"),
                warn: t("warn"),
                error: t("error"),
                debug: (e = t("debug"), function() {
                    n && e.apply(i, arguments)
                })
            };
            var e;

            function t(e) {
                var t = r.console || {},
                    i = t[e] || t.log || E,
                    n = !1;
                try {
                    n = !!i.apply
                } catch (e) {}
                return n ? function() {
                    var n = [];
                    return ie(arguments, function(e) {
                        var t;
                        n.push(((t = e) instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t))
                    }), i.apply(t, n)
                } : function(e, t) {
                    i(e, null == t ? "" : t)
                }
            }
        }]
    }
    Yt.prototype = Gt.prototype = Qt.prototype = {
        $$html5: !(wt.$inject = ["$provide", "$$sanitizeUriProvider"]),
        $$replace: !1,
        absUrl: Kt("$$absUrl"),
        url: function(e) {
            if (O(e)) return this.$$url;
            var t = Dt.exec(e);
            return t[1] && this.path(decodeURIComponent(t[1])), (t[2] || t[1]) && this.search(t[3] || ""), this.hash(t[5] || ""), this
        },
        protocol: Kt("$$protocol"),
        host: Kt("$$host"),
        port: Kt("$$port"),
        path: Xt("$$path", function(e) {
            return "/" == (e = null !== e ? e.toString() : "").charAt(0) ? e : "/" + e
        }),
        search: function(n, e) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (oe(n) || b(n)) n = n.toString(), this.$$search = z(n);
                    else {
                        if (!re(n)) throw Ht("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                        ie(n, function(e, t) {
                            null == e && delete n[t]
                        }), this.$$search = n
                    }
                    break;
                default:
                    O(e) || null === e ? delete this.$$search[n] : this.$$search[n] = e
            }
            return this.$$compose(), this
        },
        hash: Xt("$$hash", function(e) {
            return null !== e ? e.toString() : ""
        }),
        replace: function() {
            return this.$$replace = !0, this
        }
    };
    var tn, nn = x("$parse"),
        rn = {};

    function on(e, t) {
        if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw nn("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
        return e
    }

    function an(e, t) {
        if (!oe(e += "")) throw nn("iseccst", "Cannot convert object to primitive value! Expression: {0}", t);
        return e
    }

    function sn(e, t) {
        if (e) {
            if (e.constructor === e) throw nn("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
            if (e.document && e.location && e.alert && e.setInterval) throw nn("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
            if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw nn("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
            if (e === Object) throw nn("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
        }
        return e
    }
    var ln = Function.prototype.call,
        cn = Function.prototype.apply,
        un = Function.prototype.bind;
    var pn = {
            null: function() {
                return null
            },
            true: function() {
                return !0
            },
            false: function() {
                return !1
            },
            undefined: E,
            "+": function(e, t, n, i) {
                return n = n(e, t), i = i(e, t), H(n) ? H(i) ? n + i : n : H(i) ? i : ee
            },
            "-": function(e, t, n, i) {
                return n = n(e, t), i = i(e, t), (H(n) ? n : 0) - (H(i) ? i : 0)
            },
            "*": function(e, t, n, i) {
                return n(e, t) * i(e, t)
            },
            "/": function(e, t, n, i) {
                return n(e, t) / i(e, t)
            },
            "%": function(e, t, n, i) {
                return n(e, t) % i(e, t)
            },
            "^": function(e, t, n, i) {
                return n(e, t) ^ i(e, t)
            },
            "=": E,
            "===": function(e, t, n, i) {
                return n(e, t) === i(e, t)
            },
            "!==": function(e, t, n, i) {
                return n(e, t) !== i(e, t)
            },
            "==": function(e, t, n, i) {
                return n(e, t) == i(e, t)
            },
            "!=": function(e, t, n, i) {
                return n(e, t) != i(e, t)
            },
            "<": function(e, t, n, i) {
                return n(e, t) < i(e, t)
            },
            ">": function(e, t, n, i) {
                return n(e, t) > i(e, t)
            },
            "<=": function(e, t, n, i) {
                return n(e, t) <= i(e, t)
            },
            ">=": function(e, t, n, i) {
                return n(e, t) >= i(e, t)
            },
            "&&": function(e, t, n, i) {
                return n(e, t) && i(e, t)
            },
            "||": function(e, t, n, i) {
                return n(e, t) || i(e, t)
            },
            "&": function(e, t, n, i) {
                return n(e, t) & i(e, t)
            },
            "|": function(e, t, n, i) {
                return i(e, t)(e, t, n(e, t))
            },
            "!": function(e, t, n) {
                return !n(e, t)
            }
        },
        fn = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        },
        dn = function(e) {
            this.options = e
        };
    dn.prototype = {
        constructor: dn,
        lex: function(e) {
            for (this.text = e, this.index = 0, this.ch = ee, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) {
                if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
                else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(this.ch)) this.readIdent();
                else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch
                }), this.index++;
                else {
                    if (this.isWhitespace(this.ch)) {
                        this.index++;
                        continue
                    }
                    var t = this.ch + this.peek(),
                        n = t + this.peek(2),
                        i = pn[this.ch],
                        r = pn[t],
                        o = pn[n];
                    o ? (this.tokens.push({
                        index: this.index,
                        text: n,
                        fn: o
                    }), this.index += 3) : r ? (this.tokens.push({
                        index: this.index,
                        text: t,
                        fn: r
                    }), this.index += 2) : i ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: i
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
                this.lastCh = this.ch
            }
            return this.tokens
        },
        is: function(e) {
            return -1 !== e.indexOf(this.ch)
        },
        was: function(e) {
            return -1 !== e.indexOf(this.lastCh)
        },
        peek: function(e) {
            var t = e || 1;
            return this.index + t < this.text.length && this.text.charAt(this.index + t)
        },
        isNumber: function(e) {
            return "0" <= e && e <= "9"
        },
        isWhitespace: function(e) {
            return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || " " === e
        },
        isIdent: function(e) {
            return "a" <= e && e <= "z" || "A" <= e && e <= "Z" || "_" === e || "$" === e
        },
        isExpOperator: function(e) {
            return "-" === e || "+" === e || this.isNumber(e)
        },
        throwError: function(e, t, n) {
            n = n || this.index;
            var i = H(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
            throw nn("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, i, this.text)
        },
        readNumber: function() {
            for (var e = "", t = this.index; this.index < this.text.length;) {
                var n = C(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n)) e += n;
                else {
                    var i = this.peek();
                    if ("e" == n && this.isExpOperator(i)) e += n;
                    else if (this.isExpOperator(n) && i && this.isNumber(i) && "e" == e.charAt(e.length - 1)) e += n;
                    else {
                        if (!this.isExpOperator(n) || i && this.isNumber(i) || "e" != e.charAt(e.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            e = +e, this.tokens.push({
                index: t,
                text: e,
                literal: !0,
                constant: !0,
                fn: function() {
                    return e
                }
            })
        },
        readIdent: function() {
            for (var e, t, n, i, r = this, o = "", a = this.index; this.index < this.text.length && ("." === (i = this.text.charAt(this.index)) || this.isIdent(i) || this.isNumber(i));) "." === i && (e = this.index), o += i, this.index++;
            if (e)
                for (t = this.index; t < this.text.length;) {
                    if ("(" === (i = this.text.charAt(t))) {
                        n = o.substr(e - a + 1), o = o.substr(0, e - a), this.index = t;
                        break
                    }
                    if (!this.isWhitespace(i)) break;
                    t++
                }
            var s = {
                index: a,
                text: o
            };
            if (pn.hasOwnProperty(o)) s.fn = pn[o], s.literal = !0, s.constant = !0;
            else {
                var l = wn(o, this.options, this.text);
                s.fn = F(function(e, t) {
                    return l(e, t)
                }, {
                    assign: function(e, t) {
                        return vn(e, o, t, r.text, r.options)
                    }
                })
            }
            this.tokens.push(s), n && (this.tokens.push({
                index: e,
                text: "."
            }), this.tokens.push({
                index: e + 1,
                text: n
            }))
        },
        readString: function(e) {
            var t = this.index;
            this.index++;
            for (var n = "", i = e, r = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index);
                if (i += o, r) {
                    if ("u" === o) {
                        var a = this.text.substring(this.index + 1, this.index + 5);
                        a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
                    } else {
                        n += fn[o] || o
                    }
                    r = !1
                } else if ("\\" === o) r = !0;
                else {
                    if (o === e) return this.index++, void this.tokens.push({
                        index: t,
                        text: i,
                        string: n,
                        literal: !0,
                        constant: !0,
                        fn: function() {
                            return n
                        }
                    });
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", t)
        }
    };
    var hn = function(e, t, n) {
        this.lexer = e, this.$filter = t, this.options = n
    };

    function vn(e, t, n, i, r) {
        sn(e, i), r = r || {};
        for (var o, a = t.split("."); 1 < a.length; 0) {
            var s = sn(e[o = on(a.shift(), i)], i);
            s || (s = {}, e[o] = s), (e = s).then && r.unwrapPromises && (tn(i), "$$v" in e || function(t) {
                t.then(function(e) {
                    t.$$v = e
                })
            }(e), e.$$v === ee && (e.$$v = {}), e = e.$$v)
        }
        return sn(e[o = on(a.shift(), i)], i), e[o] = n
    }
    hn.ZERO = F(function() {
        return 0
    }, {
        constant: !0
    }), hn.prototype = {
        constructor: hn,
        parse: function(e) {
            this.text = e, this.tokens = this.lexer.lex(e);
            var t = this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t.literal = !!t.literal, t.constant = !!t.constant, t
        },
        primary: function() {
            var e, t, n;
            if (this.expect("(")) e = this.filterChain(), this.consume(")");
            else if (this.expect("[")) e = this.arrayDeclaration();
            else if (this.expect("{")) e = this.object();
            else {
                var i = this.expect();
                (e = i.fn) || this.throwError("not a primary expression", i), e.literal = !!i.literal, e.constant = !!i.constant
            }
            for (; t = this.expect("(", "[", ".");) "(" === t.text ? (e = this.functionCall(e, n), n = null) : "[" === t.text ? (n = e, e = this.objectIndex(e)) : "." === t.text ? (n = e, e = this.fieldAccess(e)) : this.throwError("IMPOSSIBLE");
            return e
        },
        throwError: function(e, t) {
            throw nn("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw nn("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        },
        peek: function(e, t, n, i) {
            if (0 < this.tokens.length) {
                var r = this.tokens[0],
                    o = r.text;
                if (o === e || o === t || o === n || o === i || !e && !t && !n && !i) return r
            }
            return !1
        },
        expect: function(e, t, n, i) {
            var r = this.peek(e, t, n, i);
            return !!r && (this.tokens.shift(), r)
        },
        consume: function(e) {
            this.expect(e) || this.throwError("is unexpected, expecting [" + e + "]", this.peek())
        },
        unaryFn: function(n, i) {
            return F(function(e, t) {
                return n(e, t, i)
            }, {
                constant: i.constant
            })
        },
        ternaryFn: function(n, i, r) {
            return F(function(e, t) {
                return (n(e, t) ? i : r)(e, t)
            }, {
                constant: n.constant && i.constant && r.constant
            })
        },
        binaryFn: function(n, i, r) {
            return F(function(e, t) {
                return i(e, t, n, r)
            }, {
                constant: n.constant && r.constant
            })
        },
        statements: function() {
            for (var o = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && o.push(this.filterChain()), !this.expect(";")) return 1 === o.length ? o[0] : function(e, t) {
                    for (var n, i = 0; i < o.length; i++) {
                        var r = o[i];
                        r && (n = r(e, t))
                    }
                    return n
                }
        },
        filterChain: function() {
            for (var e, t = this.expression();;) {
                if (!(e = this.expect("|"))) return t;
                t = this.binaryFn(t, e.fn, this.filter())
            }
        },
        filter: function() {
            for (var e = this.expect(), o = this.$filter(e.text), a = [];;) {
                if (!(e = this.expect(":"))) {
                    var t = function(e, t, n) {
                        for (var i = [n], r = 0; r < a.length; r++) i.push(a[r](e, t));
                        return o.apply(e, i)
                    };
                    return function() {
                        return t
                    }
                }
                a.push(this.expression())
            }
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var n, e, i = this.ternary();
            return (e = this.expect("=")) ? (i.assign || this.throwError("implies assignment but [" + this.text.substring(0, e.index) + "] can not be assigned to", e), n = this.ternary(), function(e, t) {
                return i.assign(e, n(e, t), t)
            }) : i
        },
        ternary: function() {
            var e, t, n = this.logicalOR();
            return (t = this.expect("?")) ? (e = this.assignment(), (t = this.expect(":")) ? this.ternaryFn(n, e, this.assignment()) : void this.throwError("expected :", t)) : n
        },
        logicalOR: function() {
            for (var e, t = this.logicalAND();;) {
                if (!(e = this.expect("||"))) return t;
                t = this.binaryFn(t, e.fn, this.logicalAND())
            }
        },
        logicalAND: function() {
            var e, t = this.equality();
            return (e = this.expect("&&")) && (t = this.binaryFn(t, e.fn, this.logicalAND())), t
        },
        equality: function() {
            var e, t = this.relational();
            return (e = this.expect("==", "!=", "===", "!==")) && (t = this.binaryFn(t, e.fn, this.equality())), t
        },
        relational: function() {
            var e, t = this.additive();
            return (e = this.expect("<", ">", "<=", ">=")) && (t = this.binaryFn(t, e.fn, this.relational())), t
        },
        additive: function() {
            for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = this.binaryFn(t, e.fn, this.multiplicative());
            return t
        },
        multiplicative: function() {
            for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = this.binaryFn(t, e.fn, this.unary());
            return t
        },
        unary: function() {
            var e;
            return this.expect("+") ? this.primary() : (e = this.expect("-")) ? this.binaryFn(hn.ZERO, e.fn, this.unary()) : (e = this.expect("!")) ? this.unaryFn(e.fn, this.unary()) : this.primary()
        },
        fieldAccess: function(r) {
            var o = this,
                a = this.expect().text,
                i = wn(a, this.options, this.text);
            return F(function(e, t, n) {
                return i(n || r(e, t))
            }, {
                assign: function(e, t, n) {
                    var i = r(e, n);
                    return i || r.assign(e, i = {}), vn(i, a, t, o.text, o.options)
                }
            })
        },
        objectIndex: function(a) {
            var s = this,
                l = this.expression();
            return this.consume("]"), F(function(e, t) {
                var n, i, r = a(e, t),
                    o = an(l(e, t), s.text);
                return on(o, s.text), r ? ((n = sn(r[o], s.text)) && n.then && s.options.unwrapPromises && ("$$v" in (i = n) || (i.$$v = ee, i.then(function(e) {
                    i.$$v = e
                })), n = n.$$v), n) : ee
            }, {
                assign: function(e, t, n) {
                    var i = on(an(l(e, n), s.text), s.text),
                        r = sn(a(e, n), s.text);
                    return r || a.assign(e, r = {}), r[i] = t
                }
            })
        },
        functionCall: function(a, s) {
            var l = [];
            if (")" !== this.peekToken().text)
                for (; l.push(this.expression()), this.expect(","););
            this.consume(")");
            var c = this;
            return function(e, t) {
                for (var n = [], i = s ? s(e, t) : e, r = 0; r < l.length; r++) n.push(sn(l[r](e, t), c.text));
                var o = a(e, t, i) || E;
                return sn(i, c.text),
                    function(e, t) {
                        if (e) {
                            if (e.constructor === e) throw nn("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
                            if (e === ln || e === cn || un && e === un) throw nn("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
                        }
                    }(o, c.text), sn(o.apply ? o.apply(i, n) : o(n[0], n[1], n[2], n[3], n[4]), c.text)
            }
        },
        arrayDeclaration: function() {
            var r = [],
                e = !0;
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    var t = this.expression();
                    r.push(t), t.constant || (e = !1)
                } while (this.expect(","));
            return this.consume("]"), F(function(e, t) {
                for (var n = [], i = 0; i < r.length; i++) n.push(r[i](e, t));
                return n
            }, {
                literal: !0,
                constant: e
            })
        },
        object: function() {
            var o = [],
                e = !0;
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    var t = this.expect(),
                        n = t.string || t.text;
                    this.consume(":");
                    var i = this.expression();
                    o.push({
                        key: n,
                        value: i
                    }), i.constant || (e = !1)
                } while (this.expect(","));
            return this.consume("}"), F(function(e, t) {
                for (var n = {}, i = 0; i < o.length; i++) {
                    var r = o[i];
                    n[r.key] = r.value(e, t)
                }
                return n
            }, {
                literal: !0,
                constant: e
            })
        }
    };
    var mn = {},
        gn = {};

    function $n(e) {
        return "constructor" == e
    }

    function yn(r, o, a, s, l, c, e) {
        on(r, c), on(o, c), on(a, c), on(s, c), on(l, c);

        function t(e) {
            return sn(e, c)
        }
        var n = e.expensiveChecks,
            u = n || $n(r) ? t : y,
            p = n || $n(o) ? t : y,
            f = n || $n(a) ? t : y,
            d = n || $n(s) ? t : y,
            h = n || $n(l) ? t : y;
        return e.unwrapPromises ? function(e, t) {
            var n, i = t && t.hasOwnProperty(r) ? t : e;
            return null == i ? i : ((i = u(i[r])) && i.then && (tn(c), "$$v" in i || ((n = i).$$v = ee, n.then(function(e) {
                n.$$v = u(e)
            })), i = u(i.$$v)), o ? null == i ? ee : ((i = p(i[o])) && i.then && (tn(c), "$$v" in i || ((n = i).$$v = ee, n.then(function(e) {
                n.$$v = p(e)
            })), i = p(i.$$v)), a ? null == i ? ee : ((i = f(i[a])) && i.then && (tn(c), "$$v" in i || ((n = i).$$v = ee, n.then(function(e) {
                n.$$v = f(e)
            })), i = f(i.$$v)), s ? null == i ? ee : ((i = d(i[s])) && i.then && (tn(c), "$$v" in i || ((n = i).$$v = ee, n.then(function(e) {
                n.$$v = d(e)
            })), i = d(i.$$v)), l ? null == i ? ee : ((i = h(i[l])) && i.then && (tn(c), "$$v" in i || ((n = i).$$v = ee, n.then(function(e) {
                n.$$v = h(e)
            })), i = h(i.$$v)), i) : i) : i) : i) : i)
        } : function(e, t) {
            var n = t && t.hasOwnProperty(r) ? t : e;
            return null == n ? n : (n = u(n[r]), o ? null == n ? ee : (n = p(n[o]), a ? null == n ? ee : (n = f(n[a]), s ? null == n ? ee : (n = d(n[s]), l ? null == n ? ee : n = h(n[l]) : n) : n) : n) : n)
        }
    }

    function wn(e, r, o) {
        var a = r.expensiveChecks,
            t = a ? gn : mn;
        if (t.hasOwnProperty(e)) return t[e];
        var n, i, s, l = e.split("."),
            c = l.length;
        if (r.csp) n = c < 6 ? yn(l[0], l[1], l[2], l[3], l[4], o, r) : function(e, t) {
            for (var n, i = 0; n = yn(l[i++], l[i++], l[i++], l[i++], l[i++], o, r)(e, t), t = ee, e = n, i < c;);
            return n
        };
        else {
            var u = "var p;\n";
            a && (u += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var p = a;
            ie(l, function(e, t) {
                on(e, o);
                var n = (t ? "s" : '((l&&l.hasOwnProperty("' + e + '"))?l:s)') + '["' + e + '"]',
                    i = a || $n(e);
                i && (n = "eso(" + n + ", fe)", p = !0), u += "if(s == null) return undefined;\ns=" + n + ";\n", r.unwrapPromises && (u += 'if (s && s.then) {\n pw("' + o.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=' + (i ? "eso(v)" : "v") + ";});\n}\n s=" + (i ? "eso(s.$$v)" : "s.$$v") + "\n}\n")
            }), u += "return s;";
            var f = new Function("s", "l", "pw", "eso", "fe", u);
            f.toString = w(u), (p || r.unwrapPromises) && (i = f, s = o, f = function(e, t) {
                return i(e, t, tn, sn, s)
            }), n = f
        }
        return "hasOwnProperty" !== e && (t[e] = n), n
    }

    function bn() {
        var l = {},
            c = {},
            u = {
                csp: !1,
                unwrapPromises: !1,
                logPromiseWarnings: !0,
                expensiveChecks: !1
            };
        this.unwrapPromises = function(e) {
            return H(e) ? (u.unwrapPromises = !!e, this) : u.unwrapPromises
        }, this.logPromiseWarnings = function(e) {
            return H(e) ? (u.logPromiseWarnings = e, this) : u.logPromiseWarnings
        }, this.$get = ["$filter", "$sniffer", "$log", function(a, e, t) {
            u.csp = e.csp;
            var s = {
                csp: u.csp,
                unwrapPromises: u.unwrapPromises,
                logPromiseWarnings: u.logPromiseWarnings,
                expensiveChecks: !0
            };
            return tn = function(e) {
                    u.logPromiseWarnings && !rn.hasOwnProperty(e) && (rn[e] = !0, t.warn("[$parse] Promise found in the expression `" + e + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
                },
                function(e, t) {
                    var n;
                    switch (typeof e) {
                        case "string":
                            var i = t ? c : l;
                            if (i.hasOwnProperty(e)) return i[e];
                            var r = t ? s : u,
                                o = new dn(r);
                            return n = new hn(o, a, r).parse(e), "hasOwnProperty" !== e && (i[e] = n), n;
                        case "function":
                            return e;
                        default:
                            return E
                    }
                }
        }]
    }

    function Sn() {
        this.$get = ["$rootScope", "$exceptionHandler", function(t, e) {
            return p = function(e) {
                t.$evalAsync(e)
            }, f = e, d = function() {
                var s, t, l = [];
                return t = {
                    resolve: function(e) {
                        if (l) {
                            var i = l;
                            l = ee, s = h(e), i.length && p(function() {
                                for (var e, t = 0, n = i.length; t < n; t++) e = i[t], s.then(e[0], e[1], e[2])
                            })
                        }
                    },
                    reject: function(e) {
                        t.resolve(n(e))
                    },
                    notify: function(n) {
                        if (l) {
                            var i = l;
                            l.length && p(function() {
                                for (var e = 0, t = i.length; e < t; e++) i[e][2](n)
                            })
                        }
                    },
                    promise: {
                        then: function(t, n, i) {
                            function e(e) {
                                try {
                                    a.resolve((se(t) ? t : c)(e))
                                } catch (e) {
                                    a.reject(e), f(e)
                                }
                            }

                            function r(e) {
                                try {
                                    a.resolve((se(n) ? n : u)(e))
                                } catch (e) {
                                    a.reject(e), f(e)
                                }
                            }

                            function o(e) {
                                try {
                                    a.notify((se(i) ? i : c)(e))
                                } catch (e) {
                                    f(e)
                                }
                            }
                            var a = d();
                            return l ? l.push([e, r, o]) : s.then(e, r, o), a.promise
                        },
                        catch: function(e) {
                            return this.then(null, e)
                        },
                        finally: function(i) {
                            function r(e, t) {
                                var n = d();
                                return t ? n.resolve(e) : n.reject(e), n.promise
                            }

                            function t(e, t) {
                                var n = null;
                                try {
                                    n = (i || c)()
                                } catch (e) {
                                    return r(e, !1)
                                }
                                return N(n) ? n.then(function() {
                                    return r(e, t)
                                }, function(e) {
                                    return r(e, !1)
                                }) : r(e, t)
                            }
                            return this.then(function(e) {
                                return t(e, !0)
                            }, function(e) {
                                return t(e, !1)
                            })
                        }
                    }
                }
            }, h = function(n) {
                return N(n) ? n : {
                    then: function(e) {
                        var t = d();
                        return p(function() {
                            t.resolve(e(n))
                        }), t.promise
                    }
                }
            }, v = function(e) {
                var t = d();
                return t.reject(e), t.promise
            }, n = function(i) {
                return {
                    then: function(e, t) {
                        var n = d();
                        return p(function() {
                            try {
                                n.resolve((se(t) ? t : u)(i))
                            } catch (e) {
                                n.reject(e), f(e)
                            }
                        }), n.promise
                    }
                }
            }, {
                defer: d,
                reject: v,
                when: function(e, t, n, i) {
                    function r(e) {
                        try {
                            return (se(t) ? t : c)(e)
                        } catch (e) {
                            return f(e), v(e)
                        }
                    }

                    function o(e) {
                        try {
                            return (se(n) ? n : u)(e)
                        } catch (e) {
                            return f(e), v(e)
                        }
                    }

                    function a(e) {
                        try {
                            return (se(i) ? i : c)(e)
                        } catch (e) {
                            f(e)
                        }
                    }
                    var s, l = d();
                    return p(function() {
                        h(e).then(function(e) {
                            s || (s = !0, l.resolve(h(e).then(r, o, a)))
                        }, function(e) {
                            s || (s = !0, l.resolve(o(e)))
                        }, function(e) {
                            s || l.notify(a(e))
                        })
                    }), l.promise
                },
                all: function(e) {
                    var n = d(),
                        i = 0,
                        r = ae(e) ? [] : {};
                    return ie(e, function(e, t) {
                        i++, h(e).then(function(e) {
                            r.hasOwnProperty(t) || (r[t] = e, --i || n.resolve(r))
                        }, function(e) {
                            r.hasOwnProperty(t) || n.reject(e)
                        })
                    }), 0 === i && n.resolve(r), n.promise
                }
            };

            function c(e) {
                return e
            }

            function u(e) {
                return v(e)
            }
            var p, f, d, h, v, n
        }]
    }

    function xn() {
        this.$get = ["$window", "$timeout", function(e, n) {
            var i = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame,
                r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
                t = !!i,
                o = t ? function(e) {
                    var t = i(e);
                    return function() {
                        r(t)
                    }
                } : function(e) {
                    var t = n(e, 16.66, !1);
                    return function() {
                        n.cancel(t)
                    }
                };
            return o.supported = t, o
        }]
    }

    function Cn() {
        var w = 10,
            b = x("$rootScope"),
            S = null;
        this.digestTtl = function(e) {
            return arguments.length && (w = e), w
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(e, v, h, m) {
            function n() {
                this.$id = r(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.this = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}
            }
            n.prototype = {
                constructor: n,
                $new: function(e) {
                    var t;
                    return e ? ((t = new n).$root = this.$root, t.$$asyncQueue = this.$$asyncQueue, t.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = r(), this.$$childScopeClass = null
                    }, this.$$childScopeClass.prototype = this), t = new this.$$childScopeClass), (t.this = t).$parent = this, t.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = t, this.$$childTail = t) : this.$$childHead = this.$$childTail = t, t
                },
                $watch: function(e, t, n) {
                    var i = l(e, "watch"),
                        r = this.$$watchers,
                        o = {
                            fn: t,
                            last: y,
                            get: i,
                            exp: e,
                            eq: !!n
                        };
                    if (S = null, !se(t)) {
                        var a = l(t || E, "listener");
                        o.fn = function(e, t, n) {
                            a(n)
                        }
                    }
                    if ("string" == typeof e && i.constant) {
                        var s = o.fn;
                        o.fn = function(e, t, n) {
                            s.call(this, e, t, n), D(r, o)
                        }
                    }
                    return (r = r || (this.$$watchers = [])).unshift(o),
                        function() {
                            D(r, o), S = null
                        }
                },
                $watchCollection: function(e, n) {
                    var i, r, o, a = this,
                        s = 1 < n.length,
                        l = 0,
                        c = h(e),
                        u = [],
                        p = {},
                        f = !0,
                        d = 0;
                    return this.$watch(function() {
                        var e, t;
                        if (re(i = c(a)))
                            if (T(i)) {
                                r !== u && (d = (r = u).length = 0, l++), e = i.length, d !== e && (l++, r.length = d = e);
                                for (var n = 0; n < e; n++) r[n] != r[n] && i[n] != i[n] || r[n] === i[n] || (l++, r[n] = i[n])
                            } else {
                                for (t in r !== p && (r = p = {}, d = 0, l++), e = 0, i) i.hasOwnProperty(t) && (e++, r.hasOwnProperty(t) ? r[t] != r[t] && i[t] != i[t] || r[t] === i[t] || (l++, r[t] = i[t]) : (d++, r[t] = i[t], l++));
                                if (e < d)
                                    for (t in l++, r) r.hasOwnProperty(t) && !i.hasOwnProperty(t) && (d--, delete r[t])
                            }
                        else r !== i && (r = i, l++);
                        return l
                    }, function() {
                        if (f ? (f = !1, n(i, i, a)) : n(i, o, a), s)
                            if (re(i))
                                if (T(i)) {
                                    o = new Array(i.length);
                                    for (var e = 0; e < i.length; e++) o[e] = i[e]
                                } else
                                    for (var t in o = {}, i) A.call(i, t) && (o[t] = i[t]);
                        else o = i
                    })
                },
                $digest: function() {
                    var e, t, n, i, r, o, a, s, l, c, u, p = this.$$asyncQueue,
                        f = this.$$postDigestQueue,
                        d = w,
                        h = [];
                    g("$digest"), m.$$checkUrlChange(), S = null;
                    do {
                        for (o = !1, s = this; p.length;) {
                            try {
                                (u = p.shift()).scope.$eval(u.expression)
                            } catch (e) {
                                $(), v(e)
                            }
                            S = null
                        }
                        e: do {
                            if (i = s.$$watchers)
                                for (r = i.length; r--;) try {
                                    if (e = i[r])
                                        if ((t = e.get(s)) === (n = e.last) || (e.eq ? ue(t, n) : "number" == typeof t && "number" == typeof n && isNaN(t) && isNaN(n))) {
                                            if (e === S) {
                                                o = !1;
                                                break e
                                            }
                                        } else o = !0, (S = e).last = e.eq ? q(t, null) : t, e.fn(t, n === y ? t : n, s), d < 5 && (h[l = 4 - d] || (h[l] = []), c = se(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp, c += "; newVal: " + W(t) + "; oldVal: " + W(n), h[l].push(c))
                                } catch (e) {
                                    $(), v(e)
                                }
                            if (!(a = s.$$childHead || s !== this && s.$$nextSibling))
                                for (; s !== this && !(a = s.$$nextSibling);) s = s.$parent
                        } while (s = a);
                        if ((o || p.length) && !d--) throw $(), b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", w, W(h))
                    } while (o || p.length);
                    for ($(); f.length;) try {
                        f.shift()()
                    } catch (e) {
                        v(e)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var e = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this !== t && (ie(this.$$listenerCount, B(null, o, this)), e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = E, this.$on = this.$watch = function() {
                            return E
                        })
                    }
                },
                $eval: function(e, t) {
                    return h(e)(this, t)
                },
                $evalAsync: function(e) {
                    t.$$phase || t.$$asyncQueue.length || m.defer(function() {
                        t.$$asyncQueue.length && t.$digest()
                    }), this.$$asyncQueue.push({
                        scope: this,
                        expression: e
                    })
                },
                $$postDigest: function(e) {
                    this.$$postDigestQueue.push(e)
                },
                $apply: function(e) {
                    try {
                        return g("$apply"), this.$eval(e)
                    } catch (e) {
                        v(e)
                    } finally {
                        $();
                        try {
                            t.$digest()
                        } catch (e) {
                            throw v(e), e
                        }
                    }
                },
                $on: function(t, n) {
                    var i = this.$$listeners[t];
                    i || (this.$$listeners[t] = i = []), i.push(n);
                    for (var e = this; e.$$listenerCount[t] || (e.$$listenerCount[t] = 0), e.$$listenerCount[t]++, e = e.$parent;);
                    var r = this;
                    return function() {
                        var e = R(i, n); - 1 !== e && (i[e] = null, o(r, 1, t))
                    }
                },
                $emit: function(e, t) {
                    var n, i, r, o = [],
                        a = this,
                        s = !1,
                        l = {
                            name: e,
                            targetScope: a,
                            stopPropagation: function() {
                                s = !0
                            },
                            preventDefault: function() {
                                l.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        c = U([l], arguments, 1);
                    do {
                        for (n = a.$$listeners[e] || o, l.currentScope = a, i = 0, r = n.length; i < r; i++)
                            if (n[i]) try {
                                n[i].apply(null, c)
                            } catch (e) {
                                v(e)
                            } else n.splice(i, 1), i--, r--;
                        if (s) return l;
                        a = a.$parent
                    } while (a);
                    return l
                },
                $broadcast: function(e, t) {
                    for (var n, i, r, o = this, a = o, s = o, l = {
                            name: e,
                            targetScope: o,
                            preventDefault: function() {
                                l.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        }, c = U([l], arguments, 1); a = s;) {
                        for (i = 0, r = (n = (l.currentScope = a).$$listeners[e] || []).length; i < r; i++)
                            if (n[i]) try {
                                n[i].apply(null, c)
                            } catch (e) {
                                v(e)
                            } else n.splice(i, 1), i--, r--;
                        if (!(s = a.$$listenerCount[e] && a.$$childHead || a !== o && a.$$nextSibling))
                            for (; a !== o && !(s = a.$$nextSibling);) a = a.$parent
                    }
                    return l
                }
            };
            var t = new n;
            return t;

            function g(e) {
                if (t.$$phase) throw b("inprog", "{0} already in progress", t.$$phase);
                t.$$phase = e
            }

            function $() {
                t.$$phase = null
            }

            function l(e, t) {
                var n = h(e);
                return X(n, t), n
            }

            function o(e, t, n) {
                for (; e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n], e = e.$parent;);
            }

            function y() {}
        }]
    }

    function An() {
        var r = /^\s*(https?|ftp|mailto|tel|file):/,
            o = /^\s*((https?|ftp|file):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(e) {
            return H(e) ? (r = e, this) : r
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return H(e) ? (o = e, this) : o
        }, this.$get = function() {
            return function(e, t) {
                var n, i = t ? o : r;
                return te && !(8 <= te) || "" === (n = Fn(e).href) || n.match(i) ? e : "unsafe:" + n
            }
        }
    }
    var kn = x("$sce"),
        En = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        };

    function On(e) {
        var t = [];
        return H(e) && ie(e, function(e) {
            t.push(function(e) {
                if ("self" === e) return e;
                if (oe(e)) {
                    if (-1 < e.indexOf("***")) throw kn("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
                    return e = e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
                }
                if (V(e)) return new RegExp("^" + e.source + "$");
                throw kn("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
            }(e))
        }), t
    }

    function In() {
        this.SCE_CONTEXTS = En;
        var a = ["self"],
            s = [];
        this.resourceUrlWhitelist = function(e) {
            return arguments.length && (a = On(e)), a
        }, this.resourceUrlBlacklist = function(e) {
            return arguments.length && (s = On(e)), s
        }, this.$get = ["$injector", function(e) {
            var i = function() {
                throw kn("unsafe", "Attempting to use an unsafe value in a safe context.")
            };

            function o(e, t) {
                return "self" === e ? Nn(t) : e.exec(t.href)
            }

            function t(e) {
                function t(e) {
                    this.$$unwrapTrustedValue = function() {
                        return e
                    }
                }
                return e && (t.prototype = new e), t.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                }, t.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                }, t
            }
            e.has("$sanitize") && (i = e.get("$sanitize"));
            var n = t(),
                r = {};
            return r[En.HTML] = t(n), r[En.CSS] = t(n), r[En.URL] = t(n), r[En.JS] = t(n), r[En.RESOURCE_URL] = t(r[En.URL]), {
                trustAs: function(e, t) {
                    var n = r.hasOwnProperty(e) ? r[e] : null;
                    if (!n) throw kn("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
                    if (null === t || t === ee || "" === t) return t;
                    if ("string" != typeof t) throw kn("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
                    return new n(t)
                },
                getTrusted: function(e, t) {
                    if (null === t || t === ee || "" === t) return t;
                    var n = r.hasOwnProperty(e) ? r[e] : null;
                    if (n && t instanceof n) return t.$$unwrapTrustedValue();
                    if (e === En.RESOURCE_URL) {
                        if (function(e) {
                                var t, n, i = Fn(e.toString()),
                                    r = !1;
                                for (t = 0, n = a.length; t < n; t++)
                                    if (o(a[t], i)) {
                                        r = !0;
                                        break
                                    }
                                if (r)
                                    for (t = 0, n = s.length; t < n; t++)
                                        if (o(s[t], i)) {
                                            r = !1;
                                            break
                                        }
                                return r
                            }(t)) return t;
                        throw kn("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
                    }
                    if (e === En.HTML) return i(t);
                    throw kn("unsafe", "Attempting to use an unsafe value in a safe context.")
                },
                valueOf: function(e) {
                    return e instanceof n ? e.$$unwrapTrustedValue() : e
                }
            }
        }]
    }

    function Tn() {
        var s = !0;
        this.enabled = function(e) {
            return arguments.length && (s = !!e), s
        }, this.$get = ["$parse", "$sniffer", "$sceDelegate", function(t, e, n) {
            if (s && e.msie && e.msieDocumentMode < 8) throw kn("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var r = ce(En);
            r.isEnabled = function() {
                return s
            }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, s || (r.trustAs = r.getTrusted = function(e, t) {
                return t
            }, r.valueOf = y), r.parseAs = function(n, e) {
                var i = t(e);
                return i.literal && i.constant ? i : function(e, t) {
                    return r.getTrusted(n, i(e, t))
                }
            };
            var i = r.parseAs,
                o = r.getTrusted,
                a = r.trustAs;
            return ie(En, function(t, e) {
                var n = C(e);
                r[ke("parse_as_" + n)] = function(e) {
                    return i(t, e)
                }, r[ke("get_trusted_" + n)] = function(e) {
                    return o(t, e)
                }, r[ke("trust_as_" + n)] = function(e) {
                    return a(t, e)
                }
            }), r
        }]
    }

    function Vn() {
        this.$get = ["$window", "$document", function(e, t) {
            var n, i, r = {},
                o = k((/android (\d+)/.exec(C((e.navigator || {}).userAgent)) || [])[1]),
                a = /Boxee/i.test((e.navigator || {}).userAgent),
                s = t[0] || {},
                l = s.documentMode,
                c = /^(Moz|webkit|O|ms)(?=[A-Z])/,
                u = s.body && s.body.style,
                p = !1,
                f = !1;
            if (u) {
                for (var d in u)
                    if (i = c.exec(d)) {
                        n = (n = i[0]).substr(0, 1).toUpperCase() + n.substr(1);
                        break
                    }
                n = n || "WebkitOpacity" in u && "webkit", p = !!("transition" in u || n + "Transition" in u), f = !!("animation" in u || n + "Animation" in u), !o || p && f || (p = oe(s.body.style.webkitTransition), f = oe(s.body.style.webkitAnimation))
            }
            return {
                history: !(!e.history || !e.history.pushState || o < 4 || a),
                hashchange: "onhashchange" in e && (!l || 7 < l),
                hasEvent: function(e) {
                    if ("input" == e && 9 == te) return !1;
                    if (O(r[e])) {
                        var t = s.createElement("div");
                        r[e] = "on" + e in t
                    }
                    return r[e]
                },
                csp: j(),
                vendorPrefix: n,
                transitions: p,
                animations: f,
                android: o,
                msie: te,
                msieDocumentMode: l
            }
        }]
    }

    function Mn() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(s, l, c, u) {
            var p = {};

            function e(e, t, n) {
                var i, r = c.defer(),
                    o = r.promise,
                    a = H(n) && !n;
                return i = l.defer(function() {
                    try {
                        r.resolve(e())
                    } catch (e) {
                        r.reject(e), u(e)
                    } finally {
                        delete p[o.$$timeoutId]
                    }
                    a || s.$apply()
                }, t), o.$$timeoutId = i, p[i] = r, o
            }
            return e.cancel = function(e) {
                return !!(e && e.$$timeoutId in p) && (p[e.$$timeoutId].reject("canceled"), delete p[e.$$timeoutId], l.defer.cancel(e.$$timeoutId))
            }, e
        }]
    }
    var Pn = Z.createElement("a"),
        _n = Fn(v.location.href, !0);

    function Fn(e) {
        var t = e;
        return te && (Pn.setAttribute("href", t), t = Pn.href), Pn.setAttribute("href", t), {
            href: Pn.href,
            protocol: Pn.protocol ? Pn.protocol.replace(/:$/, "") : "",
            host: Pn.host,
            search: Pn.search ? Pn.search.replace(/^\?/, "") : "",
            hash: Pn.hash ? Pn.hash.replace(/^#/, "") : "",
            hostname: Pn.hostname,
            port: Pn.port,
            pathname: "/" === Pn.pathname.charAt(0) ? Pn.pathname : "/" + Pn.pathname
        }
    }

    function Nn(e) {
        var t = oe(e) ? Fn(e) : e;
        return t.protocol === _n.protocol && t.host === _n.host
    }

    function Rn() {
        this.$get = w(v)
    }

    function Dn(i) {
        var r = "Filter";

        function o(e, t) {
            if (re(e)) {
                var n = {};
                return ie(e, function(e, t) {
                    n[t] = o(t, e)
                }), n
            }
            return i.factory(e + r, t)
        }
        this.register = o, this.$get = ["$injector", function(t) {
            return function(e) {
                return t.get(e + r)
            }
        }], o("currency", Hn), o("date", Yn), o("filter", Ln), o("json", Kn), o("limitTo", ei), o("lowercase", Xn), o("number", qn), o("orderBy", ti), o("uppercase", Zn)
    }

    function Ln() {
        return function(e, n, r) {
            if (!ae(e)) return e;
            var t = typeof r,
                i = [];
            i.check = function(e) {
                for (var t = 0; t < i.length; t++)
                    if (!i[t](e)) return !1;
                return !0
            }, "function" != t && (r = "boolean" == t && r ? function(e, t) {
                return f.equals(e, t)
            } : function(e, t) {
                if (e && t && "object" == typeof e && "object" == typeof t) {
                    for (var n in e)
                        if ("$" !== n.charAt(0) && A.call(e, n) && r(e[n], t[n])) return !0;
                    return !1
                }
                return t = ("" + t).toLowerCase(), -1 < ("" + e).toLowerCase().indexOf(t)
            });
            var o = function(e, t) {
                if ("string" == typeof t && "!" === t.charAt(0)) return !o(e, t.substr(1));
                switch (typeof e) {
                    case "boolean":
                    case "number":
                    case "string":
                        return r(e, t);
                    case "object":
                        switch (typeof t) {
                            case "object":
                                return r(e, t);
                            default:
                                for (var n in e)
                                    if ("$" !== n.charAt(0) && o(e[n], t)) return !0
                        }
                        return !1;
                    case "array":
                        for (var i = 0; i < e.length; i++)
                            if (o(e[i], t)) return !0;
                        return !1;
                    default:
                        return !1
                }
            };
            switch (typeof n) {
                case "boolean":
                case "number":
                case "string":
                    n = {
                        $: n
                    };
                case "object":
                    for (var a in n) ! function(t) {
                        void 0 !== n[t] && i.push(function(e) {
                            return o("$" == t ? e : e && e[t], n[t])
                        })
                    }(a);
                    break;
                case "function":
                    i.push(n);
                    break;
                default:
                    return e
            }
            for (var s = [], l = 0; l < e.length; l++) {
                var c = e[l];
                i.check(c) && s.push(c)
            }
            return s
        }
    }

    function Hn(e) {
        var n = e.NUMBER_FORMATS;
        return function(e, t) {
            return O(t) && (t = n.CURRENCY_SYM), Un(e, n.PATTERNS[1], n.GROUP_SEP, n.DECIMAL_SEP, 2).replace(/\u00A4/g, t)
        }
    }

    function qn(e) {
        var n = e.NUMBER_FORMATS;
        return function(e, t) {
            return Un(e, n.PATTERNS[0], n.GROUP_SEP, n.DECIMAL_SEP, t)
        }
    }
    Dn.$inject = ["$provide"], Hn.$inject = ["$locale"], qn.$inject = ["$locale"];
    var jn = ".";

    function Un(e, t, n, i, r) {
        if (null == e || !isFinite(e) || re(e)) return "";
        var o = e < 0,
            a = (e = Math.abs(e)) + "",
            s = "",
            l = [],
            c = !1;
        if (-1 !== a.indexOf("e")) {
            var u = a.match(/([\d\.]+)e(-?)(\d+)/);
            u && "-" == u[2] && u[3] > r + 1 ? (a = "0", e = 0) : (s = a, c = !0)
        }
        if (c) 0 < r && -1 < e && e < 1 && (s = e.toFixed(r));
        else {
            var p = (a.split(jn)[1] || "").length;
            O(r) && (r = Math.min(Math.max(t.minFrac, p), t.maxFrac)), 0 === (e = +(Math.round(+(e.toString() + "e" + r)).toString() + "e" + -r)) && (o = !1);
            var f = ("" + e).split(jn),
                d = f[0];
            f = f[1] || "";
            var h, v = 0,
                m = t.lgSize,
                g = t.gSize;
            if (d.length >= m + g)
                for (v = d.length - m, h = 0; h < v; h++)(v - h) % g == 0 && 0 !== h && (s += n), s += d.charAt(h);
            for (h = v; h < d.length; h++)(d.length - h) % m == 0 && 0 !== h && (s += n), s += d.charAt(h);
            for (; f.length < r;) f += "0";
            r && "0" !== r && (s += i + f.substr(0, r))
        }
        return l.push(o ? t.negPre : t.posPre), l.push(s), l.push(o ? t.negSuf : t.posSuf), l.join("")
    }

    function Bn(e, t, n) {
        var i = "";
        for (e < 0 && (i = "-", e = -e), e = "" + e; e.length < t;) e = "0" + e;
        return n && (e = e.substr(e.length - t)), i + e
    }

    function Wn(n, i, r, o) {
        return r = r || 0,
            function(e) {
                var t = e["get" + n]();
                return (0 < r || -r < t) && (t += r), 0 === t && -12 == r && (t = 12), Bn(t, i, o)
            }
    }

    function Jn(i, r) {
        return function(e, t) {
            var n = e["get" + i]();
            return t[c(r ? "SHORT" + i : i)][n]
        }
    }
    var zn = {
            yyyy: Wn("FullYear", 4),
            yy: Wn("FullYear", 2, 0, !0),
            y: Wn("FullYear", 1),
            MMMM: Jn("Month"),
            MMM: Jn("Month", !0),
            MM: Wn("Month", 2, 1),
            M: Wn("Month", 1, 1),
            dd: Wn("Date", 2),
            d: Wn("Date", 1),
            HH: Wn("Hours", 2),
            H: Wn("Hours", 1),
            hh: Wn("Hours", 2, -12),
            h: Wn("Hours", 1, -12),
            mm: Wn("Minutes", 2),
            m: Wn("Minutes", 1),
            ss: Wn("Seconds", 2),
            s: Wn("Seconds", 1),
            sss: Wn("Milliseconds", 3),
            EEEE: Jn("Day"),
            EEE: Jn("Day", !0),
            a: function(e, t) {
                return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
            },
            Z: function(e) {
                var t = -1 * e.getTimezoneOffset(),
                    n = 0 <= t ? "+" : "";
                return n += Bn(Math[0 < t ? "floor" : "ceil"](t / 60), 2) + Bn(Math.abs(t % 60), 2)
            }
        },
        Qn = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
        Gn = /^\-?\d+$/;

    function Yn(a) {
        var p = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(t, e) {
            var n, i, r = "",
                o = [];
            if (e = e || "mediumDate", e = a.DATETIME_FORMATS[e] || e, oe(t) && (t = (Gn.test(t) ? k : function(e) {
                    var t;
                    if (t = e.match(p)) {
                        var n = new Date(0),
                            i = 0,
                            r = 0,
                            o = t[8] ? n.setUTCFullYear : n.setFullYear,
                            a = t[8] ? n.setUTCHours : n.setHours;
                        t[9] && (i = k(t[9] + t[10]), r = k(t[9] + t[11])), o.call(n, k(t[1]), k(t[2]) - 1, k(t[3]));
                        var s = k(t[4] || 0) - i,
                            l = k(t[5] || 0) - r,
                            c = k(t[6] || 0),
                            u = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                        return a.call(n, s, l, c, u), n
                    }
                    return e
                })(t)), b(t) && (t = new Date(t)), !I(t)) return t;
            for (; e;) e = (i = Qn.exec(e)) ? (o = U(o, i, 1)).pop() : (o.push(e), null);
            return ie(o, function(e) {
                n = zn[e], r += n ? n(t, a.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), r
        }
    }

    function Kn() {
        return function(e) {
            return W(e, !0)
        }
    }
    Yn.$inject = ["$locale"];
    var Xn = w(C),
        Zn = w(c);

    function ei() {
        return function(e, t) {
            return ae(e) || oe(e) ? (t = (Math.abs(Number(t)) === 1 / 0 ? Number : k)(t)) ? 0 < t ? e.slice(0, t) : e.slice(t) : oe(e) ? "" : [] : e
        }
    }

    function ti(c) {
        return function(e, r, t) {
            return T(e) ? (0 === (r = ae(r) ? r : [r]).length && (r = ["+"]), i = function(e) {
                var t = !1,
                    n = e || y;
                if (oe(e)) {
                    if ("+" != e.charAt(0) && "-" != e.charAt(0) || (t = "-" == e.charAt(0), e = e.substring(1)), "" === e) return s(function(e, t) {
                        return l(e, t)
                    }, t);
                    if ((n = c(e)).constant) {
                        var i = n();
                        return s(function(e, t) {
                            return l(e[i], t[i])
                        }, t)
                    }
                }
                return s(function(e, t) {
                    return l(n(e), n(t))
                }, t)
            }, a = [], ie(r, function(e, t, n) {
                a.push(i.call(o, e, t, n))
            }), r = a, u.call(e).sort(s(function(e, t) {
                for (var n = 0; n < r.length; n++) {
                    var i = r[n](e, t);
                    if (0 !== i) return i
                }
                return 0
            }, t))) : e;
            var i, o, a;

            function s(n, e) {
                return J(e) ? function(e, t) {
                    return n(t, e)
                } : n
            }

            function l(e, t) {
                var n = typeof e,
                    i = typeof t;
                return n == i ? (I(e) && I(t) && (e = e.valueOf(), t = t.valueOf()), "string" == n && (e = e.toLowerCase(), t = t.toLowerCase()), e === t ? 0 : e < t ? -1 : 1) : n < i ? -1 : 1
            }
        }
    }

    function ni(e) {
        return se(e) && (e = {
            link: e
        }), e.restrict = e.restrict || "AC", w(e)
    }
    ti.$inject = ["$parse"];
    var ii = w({
            restrict: "E",
            compile: function(e, t) {
                if (te <= 8 && (t.href || t.name || t.$set("href", ""), e.append(Z.createComment("IE fix"))), !t.href && !t.xlinkHref && !t.name) return function(e, t) {
                    var n = "[object SVGAnimatedString]" === s.call(t.prop("href")) ? "xlink:href" : "href";
                    t.on("click", function(e) {
                        t.attr(n) || e.preventDefault()
                    })
                }
            }
        }),
        ri = {};
    ie(Ye, function(e, i) {
        if ("multiple" != e) {
            var r = St("ng-" + i);
            ri[r] = function() {
                return {
                    priority: 100,
                    link: function(e, t, n) {
                        e.$watch(n[r], function(e) {
                            n.$set(i, !!e)
                        })
                    }
                }
            }
        }
    }), ie(["src", "srcset", "href"], function(o) {
        var a = St("ng-" + o);
        ri[a] = function() {
            return {
                priority: 99,
                link: function(e, t, n) {
                    var i = o,
                        r = o;
                    "href" === o && "[object SVGAnimatedString]" === s.call(t.prop("href")) && (r = "xlinkHref", n.$attr[r] = "xlink:href", i = null), n.$observe(a, function(e) {
                        e ? (n.$set(r, e), te && i && t.prop(i, n[r])) : "href" === o && n.$set(r, null)
                    })
                }
            }
        }
    });
    var oi = {
        $addControl: E,
        $removeControl: E,
        $setValidity: E,
        $setDirty: E,
        $setPristine: E
    };

    function ai(n, e, t, i) {
        var r = this,
            o = n.parent().controller("form") || oi,
            a = 0,
            s = r.$error = {},
            l = [];

        function c(e, t) {
            t = t ? "-" + de(t, "-") : "", i.setClass(n, (e ? xi : Ci) + t, (e ? Ci : xi) + t)
        }
        r.$name = e.name || e.ngForm, r.$dirty = !1, r.$pristine = !0, r.$valid = !0, r.$invalid = !1, o.$addControl(r), n.addClass(Ai), c(!0), r.$addControl = function(e) {
            ve(e.$name, "input"), l.push(e), e.$name && (r[e.$name] = e)
        }, r.$removeControl = function(n) {
            n.$name && r[n.$name] === n && delete r[n.$name], ie(s, function(e, t) {
                r.$setValidity(t, !0, n)
            }), D(l, n)
        }, r.$setValidity = function(e, t, n) {
            var i = s[e];
            if (t) i && (D(i, n), i.length || (--a || (c(t), r.$valid = !0, r.$invalid = !1), c(!(s[e] = !1), e), o.$setValidity(e, !0, r)));
            else {
                if (a || c(t), i) {
                    if (-1 != R(i, n)) return
                } else s[e] = i = [], a++, c(!1, e), o.$setValidity(e, !1, r);
                i.push(n), r.$valid = !1, r.$invalid = !0
            }
        }, r.$setDirty = function() {
            i.removeClass(n, Ai), i.addClass(n, ki), r.$dirty = !0, r.$pristine = !1, o.$setDirty()
        }, r.$setPristine = function() {
            i.removeClass(n, ki), i.addClass(n, Ai), r.$dirty = !1, r.$pristine = !0, ie(l, function(e) {
                e.$setPristine()
            })
        }
    }
    ai.$inject = ["$element", "$attrs", "$scope", "$animate"];

    function si(e) {
        return ["$timeout", function(s) {
            return {
                name: "form",
                restrict: e ? "EAC" : "E",
                controller: ai,
                compile: function() {
                    return {
                        pre: function(e, t, n, i) {
                            if (!n.action) {
                                var r = function(e) {
                                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                                };
                                be(t[0], "submit", r), t.on("$destroy", function() {
                                    s(function() {
                                        Se(t[0], "submit", r)
                                    }, 0, !1)
                                })
                            }
                            var o = t.parent().controller("form"),
                                a = n.name || n.ngForm;
                            a && vn(e, a, i, a), o && t.on("$destroy", function() {
                                o.$removeControl(i), a && vn(e, a, ee, a), F(i, oi)
                            })
                        }
                    }
                }
            }
        }]
    }
    var li = si(),
        ci = si(!0),
        ui = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        pi = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        fi = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        di = {
            text: mi,
            number: function(e, t, n, i, r, o) {
                if (mi(e, t, n, i, r, o), i.$parsers.push(function(e) {
                        var t = i.$isEmpty(e);
                        return t || fi.test(e) ? (i.$setValidity("number", !0), "" === e ? null : t ? e : parseFloat(e)) : (i.$setValidity("number", !1), ee)
                    }), function(t, n, i, r, o) {
                        if (re(o)) {
                            t.$$hasNativeValidators = !0;
                            t.$parsers.push(function(e) {
                                if (t.$error[n] || vi(o, r) || !vi(o, i)) return e;
                                t.$setValidity(n, !1)
                            })
                        }
                    }(i, "number", gi, null, i.$$validityState), i.$formatters.push(function(e) {
                        return i.$isEmpty(e) ? "" : "" + e
                    }), n.min) {
                    var a = function(e) {
                        var t = parseFloat(n.min);
                        return hi(i, "min", i.$isEmpty(e) || t <= e, e)
                    };
                    i.$parsers.push(a), i.$formatters.push(a)
                }
                if (n.max) {
                    var s = function(e) {
                        var t = parseFloat(n.max);
                        return hi(i, "max", i.$isEmpty(e) || e <= t, e)
                    };
                    i.$parsers.push(s), i.$formatters.push(s)
                }
                i.$formatters.push(function(e) {
                    return hi(i, "number", i.$isEmpty(e) || b(e), e)
                })
            },
            url: function(e, t, n, i, r, o) {
                mi(e, t, n, i, r, o);

                function a(e) {
                    return hi(i, "url", i.$isEmpty(e) || ui.test(e), e)
                }
                i.$formatters.push(a), i.$parsers.push(a)
            },
            email: function(e, t, n, i, r, o) {
                mi(e, t, n, i, r, o);

                function a(e) {
                    return hi(i, "email", i.$isEmpty(e) || pi.test(e), e)
                }
                i.$formatters.push(a), i.$parsers.push(a)
            },
            radio: function(e, t, n, i) {
                O(n.name) && t.attr("name", r());
                t.on("click", function() {
                    t[0].checked && e.$apply(function() {
                        i.$setViewValue(n.value)
                    })
                }), i.$render = function() {
                    var e = n.value;
                    t[0].checked = e == i.$viewValue
                }, n.$observe("value", i.$render)
            },
            checkbox: function(e, t, n, i) {
                var r = n.ngTrueValue,
                    o = n.ngFalseValue;
                oe(r) || (r = !0);
                oe(o) || (o = !1);
                t.on("click", function() {
                    e.$apply(function() {
                        i.$setViewValue(t[0].checked)
                    })
                }), i.$render = function() {
                    t[0].checked = i.$viewValue
                }, i.$isEmpty = function(e) {
                    return e !== r
                }, i.$formatters.push(function(e) {
                    return e === r
                }), i.$parsers.push(function(e) {
                    return e ? r : o
                })
            },
            hidden: E,
            button: E,
            submit: E,
            reset: E,
            file: E
        };

    function hi(e, t, n, i) {
        return e.$setValidity(t, n), n ? i : ee
    }

    function vi(e, t) {
        var n;
        if (t)
            for (n = 0; n < t.length; ++n)
                if (e[t[n]]) return 1
    }

    function mi(i, r, o, a, e, t) {
        var s = r.prop(S),
            l = r[0].placeholder,
            c = {},
            u = C(r[0].type);
        if (a.$$validityState = s, !e.android) {
            var p = !1;
            r.on("compositionstart", function(e) {
                p = !0
            }), r.on("compositionend", function() {
                p = !1, n()
            })
        }
        var n = function(e) {
            if (!p) {
                var t = r.val();
                if (te && "input" === (e || c).type && r[0].placeholder !== l) l = r[0].placeholder;
                else {
                    "password" !== u && J(o.ngTrim || "T") && (t = le(t));
                    var n = s && a.$$hasNativeValidators;
                    (a.$viewValue !== t || "" === t && n) && (i.$root.$$phase ? a.$setViewValue(t) : i.$apply(function() {
                        a.$setViewValue(t)
                    }))
                }
            }
        };
        if (e.hasEvent("input")) r.on("input", n);
        else {
            var f, d = function() {
                f = f || t.defer(function() {
                    n(), f = null
                })
            };
            r.on("keydown", function(e) {
                var t = e.keyCode;
                91 === t || 15 < t && t < 19 || 37 <= t && t <= 40 || d()
            }), e.hasEvent("paste") && r.on("paste cut", d)
        }
        r.on("change", n), a.$render = function() {
            r.val(a.$isEmpty(a.$viewValue) ? "" : a.$viewValue)
        };
        var h, v, m = o.ngPattern;
        if (m) {
            var g = function(e, t) {
                return hi(a, "pattern", a.$isEmpty(t) || e.test(t), t)
            };
            h = (v = m.match(/^\/(.*)\/([gim]*)$/)) ? (m = new RegExp(v[1], v[2]), function(e) {
                return g(m, e)
            }) : function(e) {
                var t = i.$eval(m);
                if (!t || !t.test) throw x("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", m, t, fe(r));
                return g(t, e)
            }, a.$formatters.push(h), a.$parsers.push(h)
        }
        if (o.ngMinlength) {
            var $ = k(o.ngMinlength),
                y = function(e) {
                    return hi(a, "minlength", a.$isEmpty(e) || e.length >= $, e)
                };
            a.$parsers.push(y), a.$formatters.push(y)
        }
        if (o.ngMaxlength) {
            var w = k(o.ngMaxlength),
                b = function(e) {
                    return hi(a, "maxlength", a.$isEmpty(e) || e.length <= w, e)
                };
            a.$parsers.push(b), a.$formatters.push(b)
        }
    }
    var gi = ["badInput"];

    function $i() {
        return {
            require: ["ngModel", "^?form"],
            controller: Ei,
            link: function(e, t, n, i) {
                var r = i[0],
                    o = i[1] || oi;
                o.$addControl(r), e.$on("$destroy", function() {
                    o.$removeControl(r)
                })
            }
        }
    }

    function yi() {
        return {
            require: "?ngModel",
            link: function(e, t, n, i) {
                if (i) {
                    n.required = !0;
                    var r = function(e) {
                        return n.required && i.$isEmpty(e) ? void i.$setValidity("required", !1) : (i.$setValidity("required", !0), e)
                    };
                    i.$formatters.push(r), i.$parsers.unshift(r), n.$observe("required", function() {
                        r(i.$viewValue)
                    })
                }
            }
        }
    }

    function wi() {
        return {
            require: "ngModel",
            link: function(e, t, n, i) {
                var r = /\/(.*)\//.exec(n.ngList),
                    o = r && new RegExp(r[1]) || n.ngList || ",";
                i.$parsers.push(function(e) {
                    if (!O(e)) {
                        var t = [];
                        return e && ie(e.split(o), function(e) {
                            e && t.push(le(e))
                        }), t
                    }
                }), i.$formatters.push(function(e) {
                    return ae(e) ? e.join(", ") : ee
                }), i.$isEmpty = function(e) {
                    return !e || !e.length
                }
            }
        }
    }

    function bi() {
        return {
            priority: 100,
            compile: function(e, t) {
                return Ii.test(t.ngValue) ? function(e, t, n) {
                    n.$set("value", e.$eval(n.ngValue))
                } : function(e, t, n) {
                    e.$watch(n.ngValue, function(e) {
                        n.$set("value", e)
                    })
                }
            }
        }
    }
    var Si = ["$browser", "$sniffer", function(r, o) {
            return {
                restrict: "E",
                require: "?ngModel",
                link: function(e, t, n, i) {
                    i && (di[C(n.type)] || di.text)(e, t, n, i, o, r)
                }
            }
        }],
        xi = "ng-valid",
        Ci = "ng-invalid",
        Ai = "ng-pristine",
        ki = "ng-dirty",
        Ei = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function(i, n, e, r, t, o) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = e.name;
            var a = t(e.ngModel),
                s = a.assign;
            if (!s) throw x("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", e.ngModel, fe(r));
            this.$render = E, this.$isEmpty = function(e) {
                return O(e) || "" === e || null === e || e != e
            };
            var l = r.inheritedData("$formController") || oi,
                c = 0,
                u = this.$error = {};

            function p(e, t) {
                t = t ? "-" + de(t, "-") : "", o.removeClass(r, (e ? Ci : xi) + t), o.addClass(r, (e ? xi : Ci) + t)
            }
            r.addClass(Ai), p(!0), this.$setValidity = function(e, t) {
                u[e] !== !t && (t ? (u[e] && c--, c || (p(!0), this.$valid = !0, this.$invalid = !1)) : (p(!1), this.$invalid = !0, this.$valid = !1, c++), u[e] = !t, p(t, e), l.$setValidity(e, t, this))
            }, this.$setPristine = function() {
                this.$dirty = !1, this.$pristine = !0, o.removeClass(r, ki), o.addClass(r, Ai)
            }, this.$setViewValue = function(t) {
                this.$viewValue = t, this.$pristine && (this.$dirty = !0, this.$pristine = !1, o.removeClass(r, Ai), o.addClass(r, ki), l.$setDirty()), ie(this.$parsers, function(e) {
                    t = e(t)
                }), this.$modelValue !== t && (this.$modelValue = t, s(i, t), ie(this.$viewChangeListeners, function(e) {
                    try {
                        e()
                    } catch (e) {
                        n(e)
                    }
                }))
            };
            var f = this;
            i.$watch(function() {
                var e = a(i);
                if (f.$modelValue !== e) {
                    var t = f.$formatters,
                        n = t.length;
                    for (f.$modelValue = e; n--;) e = t[n](e);
                    f.$viewValue !== e && (f.$viewValue = e, f.$render())
                }
                return e
            })
        }],
        Oi = w({
            require: "ngModel",
            link: function(e, t, n, i) {
                i.$viewChangeListeners.push(function() {
                    e.$eval(n.ngChange)
                })
            }
        }),
        Ii = /^(true|false|\d+)$/,
        Ti = ni({
            compile: function(e) {
                return e.addClass("ng-binding"),
                    function(e, t, n) {
                        t.data("$binding", n.ngBind), e.$watch(n.ngBind, function(e) {
                            t.text(e == ee ? "" : e)
                        })
                    }
            }
        }),
        Vi = ["$interpolate", function(r) {
            return function(e, t, n) {
                var i = r(t.attr(n.$attr.ngBindTemplate));
                t.addClass("ng-binding").data("$binding", i), n.$observe("ngBindTemplate", function(e) {
                    t.text(e)
                })
            }
        }],
        Mi = ["$sce", "$parse", function(r, o) {
            return {
                compile: function(e) {
                    return e.addClass("ng-binding"),
                        function(e, t, n) {
                            t.data("$binding", n.ngBindHtml);
                            var i = o(n.ngBindHtml);
                            e.$watch(function() {
                                return (i(e) || "").toString()
                            }, function() {
                                t.html(r.getTrustedHtml(i(e)) || "")
                            })
                        }
                }
            }
        }];

    function Pi(a, v) {
        return a = "ngClass" + a, ["$animate", function(f) {
            return {
                restrict: "AC",
                link: function(s, l, o) {
                    var c;

                    function u(e) {
                        var t = p(e, 1);
                        o.$addClass(t)
                    }

                    function p(e, t) {
                        var n = l.data("$classCounts") || {},
                            i = [];
                        return ie(e, function(e) {
                            (0 < t || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(0 < t) && i.push(e))
                        }), l.data("$classCounts", n), i.join(" ")
                    }

                    function t(e) {
                        if (!0 === v || s.$index % 2 === v) {
                            var t = h(e || []);
                            if (c) {
                                if (!ue(e, c)) {
                                    var n = h(c);
                                    o = d(r = t, i = n), a = p(a = d(i, r), -1), 0 === (o = p(o, 1)).length ? f.removeClass(l, a) : 0 === a.length ? f.addClass(l, o) : f.setClass(l, o, a)
                                }
                            } else u(t)
                        }
                        var i, r, o, a;
                        c = ce(e)
                    }
                    s.$watch(o[a], t, !0), o.$observe("class", function(e) {
                        t(s.$eval(o[a]))
                    }), "ngClass" !== a && s.$watch("$index", function(e, t) {
                        var n, i = 1 & e;
                        if (i != (1 & t)) {
                            var r = h(s.$eval(o[a]));
                            i === v ? u(r) : (n = p(r, -1), o.$removeClass(n))
                        }
                    })
                }
            };

            function d(e, t) {
                var n = [];
                e: for (var i = 0; i < e.length; i++) {
                    for (var r = e[i], o = 0; o < t.length; o++)
                        if (r == t[o]) continue e;
                    n.push(r)
                }
                return n
            }

            function h(e) {
                if (ae(e)) return e;
                if (oe(e)) return e.split(" ");
                if (re(e)) {
                    var n = [];
                    return ie(e, function(e, t) {
                        e && (n = n.concat(t.split(" ")))
                    }), n
                }
                return e
            }
        }]
    }
    var _i = Pi("", !0),
        Fi = Pi("Odd", 0),
        Ni = Pi("Even", 1),
        Ri = ni({
            compile: function(e, t) {
                t.$set("ngCloak", ee), e.removeClass("ng-cloak")
            }
        }),
        Di = [function() {
            return {
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        Li = {},
        Hi = {
            blur: !0,
            focus: !0
        };
    ie("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(o) {
        var a = St("ng-" + o);
        Li[a] = ["$parse", "$rootScope", function(n, r) {
            return {
                compile: function(e, t) {
                    var i = n(t[a], !0);
                    return function(n, e) {
                        e.on(o, function(e) {
                            function t() {
                                i(n, {
                                    $event: e
                                })
                            }
                            Hi[o] && r.$$phase ? n.$evalAsync(t) : n.$apply(t)
                        })
                    }
                }
            }
        }]
    });
    var qi = ["$animate", function(l) {
            return {
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(t, n, i, e, r) {
                    var o, a, s;
                    t.$watch(i.ngIf, function(e) {
                        J(e) ? a || (a = t.$new(), r(a, function(e) {
                            e[e.length++] = Z.createComment(" end ngIf: " + i.ngIf + " "), o = {
                                clone: e
                            }, l.enter(e, n.parent(), n)
                        })) : (s && (s.remove(), s = null), a && (a.$destroy(), a = null), o && (s = ge(o.clone), l.leave(s, function() {
                            s = null
                        }), o = null))
                    })
                }
            }
        }],
        ji = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(v, m, g, $, i) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: f.noop,
                compile: function(e, t) {
                    var n = t.ngInclude || t.src,
                        d = t.onload || "",
                        h = t.autoscroll;
                    return function(o, a, e, s, l) {
                        function c() {
                            t && (t.remove(), t = null), u && (u.$destroy(), u = null), p && ($.leave(p, function() {
                                t = null
                            }), t = p, p = null)
                        }
                        var u, t, p, f = 0;
                        o.$watch(i.parseAsResourceUrl(n), function(e) {
                            function i() {
                                !H(h) || h && !o.$eval(h) || g()
                            }
                            var r = ++f;
                            e ? (v.get(e, {
                                cache: m
                            }).success(function(e) {
                                if (r === f) {
                                    var t = o.$new();
                                    s.template = e;
                                    var n = l(t, function(e) {
                                        c(), $.enter(e, null, a, i)
                                    });
                                    p = n, (u = t).$emit("$includeContentLoaded"), o.$eval(d)
                                }
                            }).error(function() {
                                r === f && c()
                            }), o.$emit("$includeContentRequested")) : (c(), s.template = null)
                        })
                    }
                }
            }
        }],
        Ui = ["$compile", function(r) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(e, t, n, i) {
                    t.html(i.template), r(t.contents())(e)
                }
            }
        }],
        Bi = ni({
            priority: 450,
            compile: function() {
                return {
                    pre: function(e, t, n) {
                        e.$eval(n.ngInit)
                    }
                }
            }
        }),
        Wi = ni({
            terminal: !0,
            priority: 1e3
        }),
        Ji = ["$locale", "$interpolate", function(p, f) {
            var d = /{}/g;
            return {
                restrict: "EA",
                link: function(t, n, i) {
                    var r = i.count,
                        e = i.$attr.when && n.attr(i.$attr.when),
                        o = i.offset || 0,
                        a = t.$eval(e) || {},
                        s = {},
                        l = f.startSymbol(),
                        c = f.endSymbol(),
                        u = /^when(Minus)?(.+)$/;
                    ie(i, function(e, t) {
                        u.test(t) && (a[C(t.replace("when", "").replace("Minus", "-"))] = n.attr(i.$attr[t]))
                    }), ie(a, function(e, t) {
                        s[t] = f(e.replace(d, l + r + "-" + o + c))
                    }), t.$watch(function() {
                        var e = parseFloat(t.$eval(r));
                        return isNaN(e) ? "" : (e in a || (e = p.pluralCat(e - o)), s[e](t, n, !0))
                    }, function(e) {
                        n.text(e)
                    })
                }
            }
        }],
        zi = ["$parse", "$animate", function(l, k) {
            var E = "$$NG_REMOVED",
                O = x("ngRepeat");
            return {
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                link: function(m, g, e, t, $) {
                    var n, i, y, w, b, r, o, S, x, C = e.ngRepeat,
                        a = C.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                        s = {
                            $id: nt
                        };
                    if (!a) throw O("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", C);
                    if (r = a[1], o = a[2], (n = a[3]) ? (i = l(n), y = function(e, t, n) {
                            return x && (s[x] = e), s[S] = t, s.$index = n, i(m, s)
                        }) : (w = function(e, t) {
                            return nt(t)
                        }, b = function(e) {
                            return e
                        }), !(a = r.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/))) throw O("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", r);
                    S = a[3] || a[1], x = a[2];
                    var A = {};
                    m.$watchCollection(o, function(e) {
                        var t, n, i, r, o, a, s, l, c, u, p, f, d = g[0],
                            h = {},
                            v = [];
                        if (T(e)) u = e, c = y || w;
                        else {
                            for (a in c = y || b, u = [], e) e.hasOwnProperty(a) && "$" != a.charAt(0) && u.push(a);
                            u.sort()
                        }
                        for (r = u.length, n = v.length = u.length, t = 0; t < n; t++)
                            if (ve(l = c(a = e === u ? t : u[t], s = e[a], t), "`track by` id"), A.hasOwnProperty(l)) p = A[l], delete A[l], h[l] = p, v[t] = p;
                            else {
                                if (h.hasOwnProperty(l)) throw ie(v, function(e) {
                                    e && e.scope && (A[e.id] = e)
                                }), O("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", C, l, W(s));
                                v[t] = {
                                    id: l
                                }, h[l] = !1
                            }
                        for (a in A) A.hasOwnProperty(a) && (f = ge((p = A[a]).clone), k.leave(f), ie(f, function(e) {
                            e[E] = !0
                        }), p.scope.$destroy());
                        for (t = 0, n = u.length; t < n; t++) {
                            if (s = e[a = e === u ? t : u[t]], p = v[t], v[t - 1] && (d = I(v[t - 1])), p.scope) {
                                for (o = p.scope, i = d;
                                    (i = i.nextSibling) && i[E];);
                                p.clone[0] != i && k.move(ge(p.clone), null, ne(d)), d = I(p)
                            } else o = m.$new();
                            o[S] = s, x && (o[x] = a), o.$index = t, o.$first = 0 === t, o.$last = t === r - 1, o.$middle = !(o.$first || o.$last), o.$odd = !(o.$even = 0 == (1 & t)), p.scope || $(o, function(e) {
                                e[e.length++] = Z.createComment(" end ngRepeat: " + C + " "), k.enter(e, null, ne(d)), d = e, p.scope = o, p.clone = e, h[p.id] = p
                            })
                        }
                        A = h
                    })
                }
            };

            function I(e) {
                return e.clone[e.clone.length - 1]
            }
        }],
        Qi = ["$animate", function(i) {
            return function(e, t, n) {
                e.$watch(n.ngShow, function(e) {
                    i[J(e) ? "removeClass" : "addClass"](t, "ng-hide")
                })
            }
        }],
        Gi = ["$animate", function(i) {
            return function(e, t, n) {
                e.$watch(n.ngHide, function(e) {
                    i[J(e) ? "addClass" : "removeClass"](t, "ng-hide")
                })
            }
        }],
        Yi = ni(function(e, n, t) {
            e.$watch(t.ngStyle, function(e, t) {
                t && e !== t && ie(t, function(e, t) {
                    n.css(t, "")
                }), e && n.css(e)
            }, !0)
        }),
        Ki = ["$animate", function(p) {
            return {
                restrict: "EA",
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(r, e, o, a) {
                    var t = o.ngSwitch || o.on,
                        s = [],
                        l = [],
                        c = [],
                        u = [];
                    r.$watch(t, function(e) {
                        var t, n;
                        for (t = 0, n = c.length; t < n; ++t) c[t].remove();
                        for (c.length = 0, t = 0, n = u.length; t < n; ++t) {
                            var i = l[t];
                            u[t].$destroy(), c[t] = i, p.leave(i, function() {
                                c.splice(t, 1)
                            })
                        }
                        l.length = 0, u.length = 0, (s = a.cases["!" + e] || a.cases["?"]) && (r.$eval(o.change), ie(s, function(n) {
                            var e = r.$new();
                            u.push(e), n.transclude(e, function(e) {
                                var t = n.element;
                                l.push(e), p.enter(e, t.parent(), t)
                            })
                        }))
                    })
                }
            }
        }],
        Xi = ni({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function(e, t, n, i, r) {
                i.cases["!" + n.ngSwitchWhen] = i.cases["!" + n.ngSwitchWhen] || [], i.cases["!" + n.ngSwitchWhen].push({
                    transclude: r,
                    element: t
                })
            }
        }),
        Zi = ni({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function(e, t, n, i, r) {
                i.cases["?"] = i.cases["?"] || [], i.cases["?"].push({
                    transclude: r,
                    element: t
                })
            }
        }),
        er = ni({
            link: function(e, t, n, i, r) {
                if (!r) throw x("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", fe(t));
                r(function(e) {
                    t.empty(), t.append(e)
                })
            }
        }),
        tr = ["$templateCache", function(r) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(e, t) {
                    if ("text/ng-template" == t.type) {
                        var n = t.id,
                            i = e[0].text;
                        r.put(n, i)
                    }
                }
            }
        }],
        nr = x("ngOptions"),
        ir = w({
            terminal: !0
        }),
        rr = ["$compile", "$parse", function(y, w) {
            var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                s = {
                    $setViewValue: E
                };
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function(n, e, t) {
                    var i, r = this,
                        o = {},
                        a = s;
                    r.databound = t.ngModel, r.init = function(e, t, n) {
                        a = e, i = n
                    }, r.addOption = function(e) {
                        ve(e, '"option value"'), o[e] = !0, a.$viewValue == e && (n.val(e), i.parent() && i.remove())
                    }, r.removeOption = function(e) {
                        this.hasOption(e) && (delete o[e], a.$viewValue == e && this.renderUnknownOption(e))
                    }, r.renderUnknownOption = function(e) {
                        var t = "? " + nt(e) + " ?";
                        i.val(t), n.prepend(i), n.val(t), i.prop("selected", !0)
                    }, r.hasOption = function(e) {
                        return o.hasOwnProperty(e)
                    }, e.$on("$destroy", function() {
                        r.renderUnknownOption = E
                    })
                }],
                link: function(e, t, n, i) {
                    if (i[1]) {
                        for (var r, o, a, s, l, c, u, p, f, _ = i[0], d = i[1], F = n.multiple, h = n.ngOptions, N = !1, R = ne(Z.createElement("option")), D = ne(Z.createElement("optgroup")), v = R.clone(), m = 0, g = t.children(), $ = g.length; m < $; m++)
                            if ("" === g[m].value) {
                                r = N = g.eq(m);
                                break
                            }
                        _.init(d, N, v), F && (d.$isEmpty = function(e) {
                            return !e || 0 === e.length
                        }), h ? function(x, C, A) {
                            var e;
                            if (!(e = h.match(b))) throw nr("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", h, fe(C));
                            var k = w(e[2] || e[1]),
                                E = e[4] || e[6],
                                O = e[5],
                                I = w(e[3] || ""),
                                T = w(e[2] ? e[1] : E),
                                V = w(e[7]),
                                M = e[8] ? w(e[8]) : null,
                                P = [
                                    [{
                                        element: C,
                                        label: ""
                                    }]
                                ];
                            N && (y(N)(x), N.removeClass("ng-scope"), N.remove());
                            C.empty(), C.on("change", function() {
                                x.$apply(function() {
                                    var e, t, n, i, r, o, a, s, l, c = V(x) || [],
                                        u = {};
                                    if (F) {
                                        for (n = [], o = 0, s = P.length; o < s; o++)
                                            for (r = 1, a = (e = P[o]).length; r < a; r++)
                                                if ((i = e[r].element)[0].selected) {
                                                    if (t = i.val(), O && (u[O] = t), M)
                                                        for (l = 0; l < c.length && (u[E] = c[l], M(x, u) != t); l++);
                                                    else u[E] = c[t];
                                                    n.push(T(x, u))
                                                }
                                    } else if ("?" == (t = C.val())) n = ee;
                                    else if ("" === t) n = null;
                                    else if (M) {
                                        for (l = 0; l < c.length; l++)
                                            if (u[E] = c[l], M(x, u) == t) {
                                                n = T(x, u);
                                                break
                                            }
                                    } else u[E] = c[t], O && (u[O] = t), n = T(x, u);
                                    A.$setViewValue(n), p()
                                })
                            }), A.$render = p, x.$watchCollection(V, p), x.$watchCollection(function() {
                                var e = {},
                                    t = V(x);
                                if (t) {
                                    for (var n = new Array(t.length), i = 0, r = t.length; i < r; i++) e[E] = t[i], n[i] = k(x, e);
                                    return n
                                }
                            }, p), F && x.$watchCollection(function() {
                                return A.$modelValue
                            }, p);

                            function p() {
                                var e, t, n, i, r, o, a, s, l, c, u, p, f, d, h, v = {
                                        "": []
                                    },
                                    m = [""],
                                    g = A.$modelValue,
                                    $ = V(x) || [],
                                    y = O ? L($) : $,
                                    w = {},
                                    b = function() {
                                        var e = !1;
                                        if (F) {
                                            var t = A.$modelValue;
                                            if (M && ae(t)) {
                                                e = new it([]);
                                                for (var n = {}, i = 0; i < t.length; i++) n[E] = t[i], e.put(M(x, n), t[i])
                                            } else e = new it(t)
                                        }
                                        return e
                                    }();
                                for (u = 0; u < (l = y.length); u++) {
                                    if (a = u, O) {
                                        if ("$" === (a = y[u]).charAt(0)) continue;
                                        w[O] = a
                                    }
                                    if (w[E] = $[a], (t = v[e = I(x, w) || ""]) || (t = v[e] = [], m.push(e)), F) p = H(b.remove((M || T)(x, w)));
                                    else {
                                        if (M) {
                                            var S = {};
                                            S[E] = g, p = M(x, S) === M(x, w)
                                        } else p = g === T(x, w);
                                        b = b || p
                                    }
                                    h = H(h = k(x, w)) ? h : "", t.push({
                                        id: M ? M(x, w) : O ? y[u] : u,
                                        label: h,
                                        selected: p
                                    })
                                }
                                for (F || (N || null === g ? v[""].unshift({
                                        id: "",
                                        label: "",
                                        selected: !b
                                    }) : b || v[""].unshift({
                                        id: "?",
                                        label: "",
                                        selected: !0
                                    })), c = 0, s = m.length; c < s; c++) {
                                    for (t = v[e = m[c]], P.length <= c ? (r = [i = {
                                            element: D.clone().attr("label", e),
                                            label: t.label
                                        }], P.push(r), C.append(i.element)) : (i = (r = P[c])[0]).label != e && i.element.attr("label", i.label = e), f = null, u = 0, l = t.length; u < l; u++) n = t[u], (o = r[u + 1]) ? (f = o.element, o.label !== n.label && (f.text(o.label = n.label), f.prop("label", o.label)), o.id !== n.id && f.val(o.id = n.id), f[0].selected !== n.selected && (f.prop("selected", o.selected = n.selected), te && f.prop("selected", o.selected))) : ("" === n.id && N ? d = N : (d = R.clone()).val(n.id).prop("selected", n.selected).attr("selected", n.selected).prop("label", n.label).text(n.label), r.push(o = {
                                        element: d,
                                        label: n.label,
                                        id: n.id,
                                        selected: n.selected
                                    }), _.addOption(n.label, d), f ? f.after(d) : i.element.append(d), f = d);
                                    for (u++; r.length > u;) n = r.pop(), _.removeOption(n.label), n.element.remove()
                                }
                                for (; P.length > c;) P.pop()[0].element.remove()
                            }
                        }(e, t, d) : F ? (c = e, u = t, (p = d).$render = function() {
                            var t = new it(p.$viewValue);
                            ie(u.find("option"), function(e) {
                                e.selected = H(t.get(e.value))
                            })
                        }, c.$watch(function() {
                            ue(f, p.$viewValue) || (f = ce(p.$viewValue), p.$render())
                        }), u.on("change", function() {
                            c.$apply(function() {
                                var t = [];
                                ie(u.find("option"), function(e) {
                                    e.selected && t.push(e.value)
                                }), p.$setViewValue(t)
                            })
                        })) : (o = e, a = t, l = _, (s = d).$render = function() {
                            var e = s.$viewValue;
                            l.hasOption(e) ? (v.parent() && v.remove(), a.val(e), "" === e && r.prop("selected", !0)) : O(e) && r ? a.val("") : l.renderUnknownOption(e)
                        }, a.on("change", function() {
                            o.$apply(function() {
                                v.parent() && v.remove(), s.$setViewValue(a.val())
                            })
                        }))
                    }
                }
            }
        }],
        or = ["$interpolate", function(n) {
            var s = {
                addOption: E,
                removeOption: E
            };
            return {
                restrict: "E",
                priority: 100,
                compile: function(e, t) {
                    if (O(t.value)) {
                        var a = n(e.text(), !0);
                        a || t.$set("value", e.text())
                    }
                    return function(e, t, n) {
                        var i = "$selectController",
                            r = t.parent(),
                            o = r.data(i) || r.parent().data(i);
                        o && o.databound ? t.prop("selected", !1) : o = s, a ? e.$watch(a, function(e, t) {
                            n.$set("value", e), e !== t && o.removeOption(t), o.addOption(e)
                        }) : o.addOption(n.value), t.on("$destroy", function() {
                            o.removeOption(n.value)
                        })
                    }
                }
            }
        }],
        ar = w({
            restrict: "E",
            terminal: !0
        });
    v.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((h = v.jQuery) && h.fn.on ? (F((ne = h).fn, {
        scope: Ge.scope,
        isolateScope: Ge.isolateScope,
        controller: Ge.controller,
        injector: Ge.injector,
        inheritedData: Ge.inheritedData
    }), Ee("remove", !0, !0, !1), Ee("empty", !1, !1, !1), Ee("html", !1, !1, !0)) : ne = Fe, f.element = ne, function(e) {
        function t(e, t, n) {
            return e[t] || (e[t] = n())
        }
        var l, n, i;
        F(e, {
            bootstrap: K,
            copy: q,
            extend: F,
            equals: ue,
            element: ne,
            forEach: ie,
            injector: ut,
            noop: E,
            bind: B,
            toJson: W,
            fromJson: a,
            identity: y,
            isUndefined: O,
            isDefined: H,
            isString: oe,
            isFunction: se,
            isObject: re,
            isNumber: b,
            isElement: o,
            isArray: ae,
            version: $e,
            isDate: I,
            lowercase: C,
            uppercase: c,
            callbacks: {
                counter: 0
            },
            $$minErr: x,
            $$csp: j
        }), l = x("$injector"), n = x("ng"), (i = t(v, "angular", Object)).$$minErr = i.$$minErr || x, d = t(i, "module", function() {
            var e = {};
            return function(o, a, s) {
                return function(e, t) {
                    if ("hasOwnProperty" === e) throw n("badname", "hasOwnProperty is not a valid {0} name", t)
                }(o, "module"), a && e.hasOwnProperty(o) && (e[o] = null), t(e, o, function() {
                    if (!a) throw l("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", o);
                    var i = [],
                        t = [],
                        e = n("$injector", "invoke"),
                        r = {
                            _invokeQueue: i,
                            _runBlocks: t,
                            requires: a,
                            name: o,
                            provider: n("$provide", "provider"),
                            factory: n("$provide", "factory"),
                            service: n("$provide", "service"),
                            value: n("$provide", "value"),
                            constant: n("$provide", "constant", "unshift"),
                            animation: n("$animateProvider", "register"),
                            filter: n("$filterProvider", "register"),
                            controller: n("$controllerProvider", "register"),
                            directive: n("$compileProvider", "directive"),
                            config: e,
                            run: function(e) {
                                return t.push(e), this
                            }
                        };
                    return s && e(s), r;

                    function n(e, t, n) {
                        return function() {
                            return i[n || "push"]([e, t, arguments]), r
                        }
                    }
                })
            }
        });
        try {
            d("ngLocale")
        } catch (e) {
            d("ngLocale", []).provider("$locale", Rt)
        }
        d("ng", ["ngLocale"], ["$provide", function(e) {
            e.provider({
                $$sanitizeUri: An
            }), e.provider("$compile", wt).directive({
                a: ii,
                input: Si,
                textarea: Si,
                form: li,
                script: tr,
                select: rr,
                style: ar,
                option: or,
                ngBind: Ti,
                ngBindHtml: Mi,
                ngBindTemplate: Vi,
                ngClass: _i,
                ngClassEven: Ni,
                ngClassOdd: Fi,
                ngCloak: Ri,
                ngController: Di,
                ngForm: ci,
                ngHide: Gi,
                ngIf: qi,
                ngInclude: ji,
                ngInit: Bi,
                ngNonBindable: Wi,
                ngPluralize: Ji,
                ngRepeat: zi,
                ngShow: Qi,
                ngStyle: Yi,
                ngSwitch: Ki,
                ngSwitchWhen: Xi,
                ngSwitchDefault: Zi,
                ngOptions: ir,
                ngTransclude: er,
                ngModel: $i,
                ngList: wi,
                ngChange: Oi,
                required: yi,
                ngRequired: yi,
                ngValue: bi
            }).directive({
                ngInclude: Ui
            }).directive(ri).directive(Li), e.provider({
                $anchorScroll: pt,
                $animate: dt,
                $browser: mt,
                $cacheFactory: gt,
                $controller: Ct,
                $document: At,
                $exceptionHandler: kt,
                $filter: Dn,
                $interpolate: Ft,
                $interval: Nt,
                $http: Vt,
                $httpBackend: Pt,
                $location: Zt,
                $log: en,
                $parse: bn,
                $rootScope: Cn,
                $q: Sn,
                $sce: Tn,
                $sceDelegate: In,
                $sniffer: Vn,
                $templateCache: $t,
                $timeout: Mn,
                $window: Rn,
                $$rAF: xn,
                $$asyncCallback: ht
            })
        }])
    }(f), ne(Z).ready(function() {
        function t(e) {
            e && o.push(e)
        }
        var n, e, i, r, o, a, s;
        e = K, o = [n = Z], s = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/, ie(a = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], function(e) {
            a[e] = !0, t(Z.getElementById(e)), e = e.replace(":", "\\:"), n.querySelectorAll && (ie(n.querySelectorAll("." + e), t), ie(n.querySelectorAll("." + e + "\\:"), t), ie(n.querySelectorAll("[" + e + "]"), t))
        }), ie(o, function(t) {
            if (!i) {
                var e = " " + t.className + " ",
                    n = s.exec(e);
                n ? (i = t, r = (n[2] || "").replace(/\s+/g, ",")) : ie(t.attributes, function(e) {
                    !i && a[e.name] && (i = t, r = e.value)
                })
            }
        }), i && e(i, r ? [r] : [])
    }))
}(window, document), window.angular.$$csp() || window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'), angular.module("abandonedApplicationModule", ["reduxModule"]).factory("abandonedApplicationService", ["$http", "reduxService", function(i, r) {
        var e = {},
            o = "/apply/AbandonedApplication/RecordApplicationStarted",
            t = "/apply/AbandonedApplication/DeleteRecord";
        return e.recordApplicationStarted = function(e) {
            var t = r.getState(),
                n = new URLSearchParams(window.location.search).get("locale") || "en-GB";
            return i({
                method: "POST",
                url: o,
                data: {
                    jobId: e,
                    integrationMethod: t.jobModel.integrationMethod,
                    integrationType: t.jobModel.integrationType,
                    isExternal: t.jobModel.isExternal,
                    locale: n.replace("_", "-")
                }
            }).then(function(e) {
                return e.data
            })
        }, e.deleteRecord = function(e) {
            return i({
                method: "POST",
                url: t,
                data: {
                    jobId: e
                }
            }).then(function(e) {
                return e.data
            })
        }, e
    }]), angular.module("analyticsModule", []).factory("analyticsService", ["$window", "utilsService", function(a, e) {
        isCalledFromApp = function() {
            return "true" === e.getQueryStringParameter(a, "fromApp")
        };
        null !== sessionStorage.getItem("applyFormTrackingDisabled") && (window.analyticsService.sendLinkEvent = function() {}, window.analyticsService.sendViewEvent = function() {});
        var t = {};

        function u() {
            "undefined" != typeof utag_data && (utag_data.analytics.loginStatus = "logged-in", -1 !== a.location.href.indexOf("stepstone") && (utag_data.analytics.legacy.candidate__login_status = "logged-in candidate"))
        }

        function p(e) {
            return "undefined" != typeof utag_data && (-1 !== window.location.href.indexOf("stepstone.de") ? (e.dlpValue = window.utag_data.analytics.dlpValue, e.legacy.listing__event_dlp_value = window.utag_data.analytics.legacy.listing__event_dlp_value) : -1 !== window.location.href.indexOf("stepstone") && (e.listingviewValue = window.utag_data.analytics.listingviewValue, e.legacy.listing__event_listingview_value = window.utag_data.analytics.listingviewValue)), e
        }

        function f(e, t, n, i) {
            if (-1 === a.location.href.indexOf("stepstone")) {
                function r(e) {
                    o += 0 === o.length ? e : "," + e
                }
                var o = "";
                e.split(",").forEach(function(e) {
                    void 0 !== i[e] ? r(e + ":" + i[e]) : r(e)
                }), "undefined" != typeof analLib && analLib.fireNonStandardOnClickEvent(o, e, t, n, i), window.analytics && window.analytics.fireGoogleAdwordsNewEmailConversionEventFromKrux && window.analytics.fireGoogleAdwordsNewEmailConversionEventFromKrux()
            }
        }
        return t.trackEmailVerificationEvents = function() {
            var e = "applyEmailVerification",
                t = {
                    events: ["tabClick"],
                    pageTabName: e,
                    legacy: {
                        events: ["tab_click"],
                        directsearch__profile_tab_name: e,
                        page__tab_name: e,
                        page__tab_interaction: e
                    }
                };
            window.analyticsService.sendLinkEvent("ApplyEmailVerification", t)
        }, t.trackExistingUserEmailVerifiedPageView = function() {
            window.utag_data.analytics.pageName = "applyLoginForm", window.utag_data.analytics.legacy.page__pagename = "Candidate Login Popover", window.analyticsService.sendViewEvent("ApplyLoginForm", {})
        }, t.trackRegistrationPageView = function() {
            var e = {
                legacy: {}
            };
            window.utag_data.analytics.pageName = "applyRegistrationForm", window.utag_data.analytics.legacy.page__pagename = "Candidate Registration Popover", window.analyticsService.sendViewEvent("ApplyRegistrationForm", e)
        }, t.trackNewUserRegisteredPageView = function(e) {
            var t = "registration-on-apply",
                n = {
                    jobagentSubscriptionFormType: t,
                    loginSource: "applyForm",
                    events: ["candidateAccountCreation", "candidateLogin", "candidateAccountConfirmation", "jobagentCreation", "jobagentConfirmation", "applicationStart", "cvMadeSearchable"],
                    legacy: {
                        jobagent_subscription_form_type: t,
                        candidate__login_source: e ? "External_Apply" : "Internal_Apply"
                    }
                };
            window.utag_data.analytics.pageName = "firstPartyApplyForm", window.utag_data.analytics.legacy.page__pagename = "OAF_ApplyNowFirstPage", u(), p(n), window.analyticsService.sendViewEvent("FirstPartyApplyForm", n)
        }, t.trackUserStartApplicationEvents = function() {
            if (!isCalledFromApp()) {
                var e = {};
                "undefined" != typeof s && void 0 !== s.visitorID && void 0 !== s.eVar29 && (e.event252 = s.eVar29 + s.visitorID), "undefined" != typeof utag_data && "undefined" != typeof s && void 0 !== utag_data["cp.utag_main_ses_id"] && void 0 !== s.eVar29 && (e.event251 = s.eVar29 + utag_data["cp.utag_main_ses_id"]);
                f("event250,event251,event252", "prop1,eVar1,prop4,eVar5,eVar7,eVar8,eVar17,eVar18,eVar19,eVar20,eVar23,eVar25,eVar26,eVar27,eVar28,eVar29,eVar30,eVar33,eVar34,eVar35,eVar36,eVar40,evar223,evar233,prop40,eVar54,eVar59,eVar141,prop63,prop71,list2,list3", "User confirms email", e), s.clearVars()
            }
        }, t.trackUserRegistrationEvents = function(e, t, n, i) {
            var r = "event21,event3,event5,event79,event250,event251,event252";
            isCalledFromApp() && (r = "event21,event3,event5,event79");
            var o = {},
                a = "registration-on-apply",
                l = "applyPasswordCreation",
                c = {
                    events: ["candidateAccountCreation", "candidateLogin", "candidateAccountConfirmation", "jobagentCreation", "jobagentConfirmation", "applicationStart", "tabClick"],
                    jobagentSubscriptionFormType: a,
                    pageTabName: l,
                    loginSource: "applyForm",
                    legacy: {
                        events: ["account_creation", "login", "creation", "applicationStart", "tab_click"],
                        jobagent_subscription_form_type: a,
                        directsearch__profile_tab_name: l,
                        page__tab_name: l,
                        page__tab_interaction: l,
                        candidate__login_source: i ? "External_Apply" : "Internal_Apply"
                    }
                };
            "undefined" != typeof s && void 0 !== s.visitorID && void 0 !== s.eVar29 && (o.event252 = s.eVar29 + s.visitorID), "undefined" != typeof utag_data && "undefined" != typeof s && void 0 !== utag_data["cp.utag_main_ses_id"] && void 0 !== s.eVar29 && (o.event251 = s.eVar29 + utag_data["cp.utag_main_ses_id"]), e && (r += ",event94"), t && (r += ",event95"), -1 < n.indexOf(3) && (r += ",event140"), -1 < n.indexOf(2) && (r += ",event145", o.eVar141 = "No Default", c.events.push("profileApplyOptionPresent"));
            f(r, "prop1,eVar1,prop4,eVar5,eVar7,eVar17,eVar18,eVar19,eVar20,eVar23,eVar25,eVar26,eVar27,eVar28,eVar29,eVar30,eVar33,eVar34,eVar35,eVar36,eVar40,prop40,eVar54,eVar59,eVar141,eVar165,eVar201,evar223,evar233,prop63,prop71,list2,list3", "New JS email - AOL page", o), u(), p(c), window.analyticsService.sendLinkEvent("ApplyPasswordCreation", c)
        }, t.trackForgottenPasswordEvents = function() {
            -1 !== a.location.href.indexOf("stepstone") ? (window.utag_data.analytics.pageName = "applyLoginForm", window.utag_data.analytics.legacy.page__pagename = "Candidate Login Popover", window.analyticsService.sendLinkEvent("ApplyLoginForm", {})) : window.analyticsService.sendLinkEvent("ResetPassword", {})
        }, t.fireContinueWithoutSigningInEvent = function() {
            var e = "event135,event145,event250,event251,event252";
            isCalledFromApp() && (e = "event135,event145");
            var t = e,
                n = {
                    eVar141: "No Default"
                };
            "undefined" != typeof s && void 0 !== s.visitorID && void 0 !== s.eVar29 && (e = e.replace("event252", "event252:" + s.eVar29 + s.visitorID)), "undefined" != typeof utag_data && "undefined" != typeof s && void 0 !== utag_data["cp.utag_main_ses_id"] && void 0 !== s.eVar29 && (e = e.replace("event251", "event251:" + s.eVar29 + utag_data["cp.utag_main_ses_id"])), analLib.fireNonStandardOnClickEvent(e, t, "prop1,eVar1,prop4,eVar5,eVar7,eVar17,eVar18,eVar19,eVar20,eVar23,eVar25,eVar26,eVar27,eVar28,eVar29,eVar30,eVar33,eVar34,eVar35,eVar36,eVar40,prop40,eVar54,eVar59,eVar141,prop63,prop71,list2,list3", "Continue without signing in", n)
        }, t.fireCopyCvEvent = function() {
            var e = "event166";
            analLib.fireNonStandardOnClickEvent(e, "event166", "prop1,eVar1,prop4,eVar5,eVar7,eVar17,eVar18,eVar19,eVar20,eVar23,eVar25,eVar26,eVar27,eVar28,eVar29,eVar30,eVar33,eVar34,eVar35,eVar36,eVar40,prop40,eVar54,eVar59,prop63,prop71,list2,list3", "Cv Copied")
        }, t.suppressReloadAnalytics = function(e, t) {
            e && (window.sessionStorage.setItem("isPageReload", "true"), window.sessionStorage.setItem("acceptableEventsOnPageReload", t.join(",")))
        }, t.trackPasswordValidationError = function(e) {
            var t = "",
                n = "",
                i = {},
                r = {
                    events: ["formError"],
                    formFieldErrors: t
                };
            if ("password" === e) t = "applyRegistrationPasswordNotValid", n = "Apply_Registration_Password_Not_Valid", -1 !== a.location.href.indexOf("stepstone") && (i = {
                form__fields_errors: n
            }, window.utag_data.analytics.pageName = "applyRegistrationForm", window.utag_data.analytics.legacy.page__pagename = "Candidate Registration Popover", r.formFieldErrors = t, r.legacy = i);
            else {
                if ("loginPassword" !== e) return;
                t = "applyLoginPasswordNotValid", n = "Apply_Login_Password_Not_Valid", -1 !== a.location.href.indexOf("stepstone") && (i = {
                    form__fields_errors: n
                }, window.utag_data.analytics.pageName = "applyLoginForm", window.utag_data.analytics.legacy.page__pagename = "Candidate Login Popover", r.formFieldErrors = t, r.legacy = i)
            }
            window.analyticsService.sendLinkEvent("ApplyPasswordValidationError", r)
        }, t
    }]), angular.module("applyApp", ["emailModule", "cvModule", "detailsModule", "loaderModule", "sessionModule", "validationModule", "abandonedApplicationModule", "utilsModule", "reduxModule", "analyticsModule"]).controller("applyController", ["$scope", "$window", "$timeout", "sessionService", "applyService", "abandonedApplicationService", "utilsService", "reduxService", "detailsService", "analyticsService", function(d, o, h, v, a, e, m, g, $, n) {
        var t, i;
        d.session = v.session, v.loadForm(o.location.pathname), window.Account && window.Account.AccountBenefits && (new Account.AccountBenefits.AccountBenefitsModal).configure({
            launcher: document.getElementById("accountBenefitsLauncher")
        }), t = +m.getQueryStringParameter(o, "AbandonedApplication"), i = "true" === m.getQueryStringParameter(o, "fromApp"), d.session.view.isLoggedIn && 1 != t && !i && e.recordApplicationStarted(d.session.jobId), h(function() {
            angular.element("#txtEmail").focus()
        }), d.isBrowserSupported = -1 == o.navigator.userAgent.indexOf("MSIE 8"), d.submitted = apply.initState.submitted, d.locked = !1, d.removeCopyCvSection = function(e) {
            e.preventDefault();
            var t = document.getElementById("copyCvConfirmation");
            t && (t.style.display = "none"), g.setIsCvSectionEnabled(!0)
        }, d.copyCv = function(e) {
            e.preventDefault();
            var t = document.getElementById("copyCvConfirmation");
            t && (t.style.display = "none"), g.copyDetailsFromOtherSite(apply.fromSourceSite.initState.form.cvFileName, apply.fromSourceSite.initState.form.cvTimeStamp, 0, apply.fromSourceSite.initState.form.cvUploadDate, {
                phoneNumber: apply.fromSourceSite.initState.form.phoneNumber,
                countryOfResidenceId: apply.fromSourceSite.initState.form.countryOfResidence,
                personalStatement: apply.fromSourceSite.initState.form.personalStatement
            }), v.session.form = {
                currentJobTitle: apply.fromSourceSite.initState.form.currentJobTitle,
                cvdbOptIn: !0,
                applicationHistoryOptIn: !0,
                ocaOptIn: !0,
                applicationsMatchingOptIn: !0,
                thirdPartyMarketingOptIn: !1,
                education: apply.fromSourceSite.initState.form.education,
                currentStatus: apply.fromSourceSite.initState.form.currentStatus,
                email: apply.fromSourceSite.initState.form.email,
                firstName: apply.fromSourceSite.initState.form.firstName,
                originalFirstName: apply.fromSourceSite.initState.form.firstName,
                salaryRange: apply.fromSourceSite.initState.form.salaryRange,
                salaryRateType: apply.fromSourceSite.initState.form.salaryRateType,
                surname: apply.fromSourceSite.initState.form.surname,
                educationHistory: apply.fromSourceSite.initState.form.educationHistory,
                educationHistoryNotes: apply.fromSourceSite.initState.form.educationHistoryNotes,
                desiredLocations: apply.fromSourceSite.initState.form.desiredLocations,
                schoolLeavingYear: apply.fromSourceSite.initState.form.schoolLeavingYear,
                preferredSectors: apply.fromSourceSite.initState.form.preferredSectors,
                copyCvFrom: apply.fromSourceSite.initState.siteId
            }, v.session.validation.cvErrorMessage = "", g.setIsCvSectionEnabled(!0), v.session.view.detailsSectionDisabled = !1, n.fireCopyCvEvent()
        }, d.submitQuickApplyForm = function(e, t) {
            return !0 === d.locked ? (e.preventDefault(), !1) : (void 0 !== t && !1 !== t || (d.locked = !0), s(angular.element("#quickApplyForm")), !0)
        }, d.submitApplyForm = function(e, t) {
            if (!0 === d.locked) return e.preventDefault(), !1;
            d.submitted = !0, void 0 !== t && !1 !== t || (d.locked = !0), a.clearDataForHiddenEducation(d.session);
            var n, i = a.isValidForm(d.applicationForm),
                r = angular.element("#standardForm");
            return i ? (function() {
                try {
                    return sessionStorage.setItem("name", "value"), sessionStorage.removeItem("name"), 1
                } catch (e) {
                    return
                }
            }() && (v.saveForm(v.session.jobId), g.saveSessionState()), -1 !== o.location.href.indexOf("stepstone") && (v.session.view.userRegisteredSuccessfully || v.session.view.showCvDbOptInFlag) && window.sessionStorage.setItem("ApplyProfileVisibilityGranted", v.session.form.cvdbOptIn.toString()), s(r), !!t || (e.preventDefault(), !1)) : (g.openDetailsSectionOnErrors(), n = r, h(function() {
                var e = n.find("div.alert-danger:visible:first");
                0 < e.length && e[0].parentNode.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }), d.locked = !1, e.preventDefault(), !1)
        }, d.saveForm = function(e) {
            v.saveForm(e)
        };
        var y = g.getState();

        function r() {
            var t = g.getState(),
                e = t.fields,
                n = !0,
                i = !1,
                r = v.session.view.showOCAFlag,
                o = v.session.view.showProfilePreferences,
                a = v.session.view.showApplicationPreferences,
                s = v.session.view.showApplicationsMatchingFlag,
                l = !1,
                c = !1,
                u = !0,
                p = d.session.form;
            if (t.detailsSection && (n = t.fields.cv.isRequired && !t.detailsSection.isEnabled, i = t.detailsSection.showCvDbOptInFlag, t.detailsSection.cvdbOptIn && !i && (l = !0), u = t.detailsSection.isOpen), t.additionalJobsSection.selected && (c = !0), y.profileSelectorSection && t.profileSelectorSection && y.profileSelectorSection.selectedProfileSiteId != t.profileSelectorSection.selectedProfileSiteId) {
                var f = t.profileSelectorSection.candidateProfiles.filter(function(e) {
                    return e.candidate.siteId === t.profileSelectorSection.selectedProfileSiteId
                });
                p = m.mapCandidateModelToForm(p, f[0].candidate), $.setSalaryRate(null != p.salaryRateType && null != p.salaryRange ? p.salaryRateType : 0, $.model)
            }
            h(function() {
                d.session.view.detailsSectionDisabled = n, d.session.view.showCvDbOptInFlag = i, d.session.view.showOCAFlag = r, d.session.view.showProfilePreferences = o, d.session.view.showApplicationPreferences = a, d.session.view.showApplicationsMatchingFlag = s, d.session.view.additionalJobsSelected = c, d.session.form = p, d.session.view.isDetailsSectionOpen = u, d.session.view.fields = e, l && (d.session.form.cvdbOptIn = !0)
            }, 0), y = t
        }

        function s(e) {
            o.setTimeout(function() {
                d.locked = !0, e.submit()
            }, 100)
        }
        g.store.subscribe(r), r()
    }]).directive("sectionDisabled", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {
                e.$watch(n.sectionDisabled, function(e) {
                    e ? t.addClass("section-disabled") : t.removeClass("section-disabled")
                })
            }
        }
    }).factory("applyService", ["validationService", "sessionService", "reduxService", function(u, p, f) {
        var e = {
            isValidForm: function(e) {
                var t = p.session.form,
                    n = p.session.view.fields,
                    i = p.session.temp,
                    r = f.checkReduxStoreValidation(),
                    o = !0;
                if (n.recentSalary.isDisplayed) {
                    var a = parseInt(t.salaryRange);
                    o = 0 === a && 0 === t.salaryRateType || 0 !== a && 0 !== t.salaryRateType
                }
                var s = u.isQualificationValid(p.session.temp.qualification, !1),
                    l = u.educationHistoryIsValid(t, n, i);
                p.session.temp.qualification.showErrorMsg = !s || !l;
                var c = u.educationHistoryNotesIsValid(t, n, i);
                return e.$valid && r && o && s && l && c
            },
            clearDataForHiddenEducation: function(e) {
                e.temp.educationHistoryIsShowing || (e.form.educationHistory = [], e.temp.qualification = {
                    showErrorMsg: !1,
                    courseTitle: "",
                    disciplineId: "",
                    disciplineText: "",
                    gradeId: "",
                    gradeText: "",
                    institutionIsUk: !0,
                    institutionUk: "",
                    institutionOther: "",
                    getInstitution: function() {
                        return this.institutionIsUk ? this.institutionUk : this.institutionOther
                    },
                    qualificationId: "",
                    qualificationText: "",
                    yearAttained: ""
                }), e.temp.educationHistoryNotesIsShowing || (e.form.educationHistoryNotes = "")
            }
        };
        return e
    }]).directive("validationMessage", ["$compile", function(i) {
        return {
            priority: 1001,
            terminal: !0,
            compile: function(e, t) {
                e.removeAttr("validation-message"), t.field && e.attr("ng-show", "(submitted && applicationForm." + t.field + ".$invalid) || (applicationForm." + t.field + ".$invalid && applicationForm." + t.field + ".$dirty)"), e.attr("tabindex", "0"), e.attr("class", "alert alert-danger alert-danger-icon alert-extensions ng-hide"), e.attr("role", "alert");
                var n = i(e);
                return function(e) {
                    n(e)
                }
            }
        }
    }]).directive("focusWhen", ["$timeout", function(n) {
        return {
            scope: {
                trigger: "=focusWhen"
            },
            link: function(e, t) {
                e.$watch("trigger", function(e) {
                    !0 == !!e && n(function() {
                        t[0].focus()
                    })
                })
            }
        }
    }]), angular.module("sessionModule", []).factory("sessionService", function() {
        return {
            session: {
                showLoader: !1,
                form: {
                    coverLetter: apply.initState.form.coverLetter,
                    coverLetterOpen: apply.initState.form.coverLetterOpen,
                    currentJobTitle: apply.initState.form.currentJobTitle,
                    cvdbOptIn: apply.initState.form.cvdbOptIn,
                    applicationHistoryOptIn: apply.initState.form.applicationHistoryOptIn,
                    ocaOptIn: apply.initState.form.ocaOptIn,
                    applicationsMatchingOptIn: apply.initState.form.applicationsMatchingOptIn,
                    thirdPartyMarketingOptIn: !1,
                    cvFileName: apply.initState.form.cvFileName,
                    cvTimeStamp: apply.initState.form.cvTimeStamp,
                    education: apply.initState.form.education,
                    currentStatus: apply.initState.form.currentStatus,
                    email: apply.initState.form.email,
                    firstName: apply.initState.form.firstName,
                    originalFirstName: apply.initState.form.firstName,
                    salaryRange: apply.initState.form.salaryRange,
                    salaryRateType: apply.initState.form.salaryRateType,
                    surname: apply.initState.form.surname,
                    educationHistory: apply.initState.form.educationHistory,
                    educationHistoryNotes: apply.initState.form.educationHistoryNotes,
                    desiredLocations: apply.initState.form.desiredLocations,
                    schoolLeavingYear: apply.initState.form.schoolLeavingYear,
                    preferredSectors: apply.initState.form.preferredSectors,
                    nationality: apply.initState.form.nationality,
                    currentJobLevel: apply.initState.form.currentJobLevel,
                    currentJobLocation: apply.initState.form.currentJobLocation,
                    copyCv: !1,
                    gender: apply.initState.form.gender,
                    maritalStatus: apply.initState.form.maritalStatus
                },
                validation: {
                    cvErrorMessage: apply.initState.validation.cvErrorMessage,
                    emailErrorMessage: apply.initState.validation.emailErrorMessage
                },
                view: {
                    showApplyForm: apply.initState.view.showApplyForm,
                    showExternalBypassApplyForm: apply.initState.view.showExternalBypassApplyForm,
                    isExternalJobAndNotATSIntegrated: apply.initState.view.isExternalJobAndNotATSIntegrated,
                    showEmailConfirmationBox: apply.initState.view.showEmailConfirmationBox,
                    isLoggedIn: apply.initState.view.isLoggedIn,
                    showLoginSection: !1,
                    showCreateAccount: !1,
                    detailsSectionDisabled: apply.initState.view.detailsSectionDisabled,
                    hasContinuedWithoutSigningIn: !1,
                    showOCAFlag: apply.initState.view.showOCAFlag,
                    showApplicationsMatchingFlag: apply.initState.view.showApplicationsMatchingFlag,
                    showCvDbOptInFlag: apply.initState.view.showCvDbOptInFlag,
                    showProfilePreferences: apply.initState.view.showProfilePreferences,
                    showApplicationPreferences: apply.initState.view.showApplicationPreferences,
                    showPasswordResetConfirmation: !1,
                    fields: apply.initState.view.fields,
                    educationHistoryParentField: apply.initState.view.educationHistoryParentField,
                    educationHistoryNotesParentField: apply.initState.view.educationHistoryNotesParentField,
                    additionalJobsSelected: apply.initState.view.additionalJobsSelected
                },
                temp: {
                    qualification: {
                        showErrorMsg: !1,
                        courseTitle: "",
                        disciplineId: "",
                        disciplineText: "",
                        gradeId: "",
                        gradeText: "",
                        institutionIsUk: !0,
                        institutionUk: "",
                        institutionOther: "",
                        getInstitution: function() {
                            return this.institutionIsUk ? this.institutionUk : this.institutionOther
                        },
                        qualificationId: "",
                        qualificationText: "",
                        yearAttained: ""
                    }
                },
                jobId: apply.initState.jobId,
                keywords: apply.initState.keywords
            },
            saveForm: function(e) {
                var t = {};
                t.jobId = e, t.email = this.session.form.email, t.coverLetter = this.session.form.coverLetter, t.coverLetterOpen = this.session.form.coverLetterOpen, t.firstName = this.session.form.firstName, t.surname = this.session.form.surname, t.education = this.session.form.education, t.currentStatus = this.session.form.currentStatus, t.educationHistory = this.session.form.educationHistory, t.educationHistoryNotes = this.session.form.educationHistoryNotes, t.currentJobTitle = this.session.form.currentJobTitle, t.cvdbOptIn = this.session.form.cvdbOptIn, t.applicationHistoryOptIn = this.session.form.applicationHistoryOptIn, t.ocaOptIn = this.session.form.ocaOptIn, t.applicationsMatchingOptIn = this.session.form.applicationsMatchingOptIn, t.salaryRateType = this.session.form.salaryRateType, t.salaryRange = this.session.form.salaryRange, t.desiredLocations = this.session.form.desiredLocations, t.preferredSectors = this.session.form.preferredSectors, t.schoolLeavingYear = this.session.form.schoolLeavingYear, t.nationality = this.session.form.nationality, t.currentJobLevel = this.session.form.currentJobLevel, t.currentJobLocation = this.session.form.currentJobLocation, t.gender = this.session.form.gender, t.maritalStatus = this.session.form.maritalStatus, t.showApplyForm = this.session.view.showApplyForm, t.isExternalJobAndNotATSIntegrated = this.session.view.isExternalJobAndNotATSIntegrated, t.showEmailConfirmationBox = this.session.view.showEmailConfirmationBox, t.isLoggedIn = this.session.view.isLoggedIn, t.showLoginSection = this.session.view.showLoginSection, t.detailsSectionDisabled = this.session.view.detailsSectionDisabled, t.hasContinuedWithoutSigningIn = this.session.view.hasContinuedWithoutSigningIn, t.showOCAFlag = this.session.view.showOCAFlag, t.showApplicationsMatchingFlag = this.session.view.showApplicationsMatchingFlag, t.showCvDbOptInFlag = this.session.view.showCvDbOptInFlag, t.showProfilePreferences = this.session.view.showProfilePreferences, t.showApplicationPreferences = this.session.view.showApplicationPreferences, t.fields = this.session.view.fields, sessionStorage.applyForm = JSON.stringify(t)
            },
            loadForm: function(e) {
                var t = sessionStorage.applyForm;
                if (t) {
                    var n = JSON.parse(t);
                    n && null != e.match(n.jobId) && (this.session.form.email = n.email, this.session.form.coverLetter = n.coverLetter, this.session.form.coverLetterOpen = n.coverLetterOpen, this.session.form.firstName = n.firstName, this.session.form.surname = n.surname, this.session.form.education = n.education, this.session.form.currentStatus = n.currentStatus, this.session.form.currentJobTitle = n.currentJobTitle, this.session.form.cvdbOptIn = n.cvdbOptIn, this.session.form.applicationHistoryOptIn = n.applicationHistoryOptIn, this.session.form.ocaOptIn = n.ocaOptIn, this.session.form.applicationsMatchingOptIn = n.applicationsMatchingOptIn, this.session.form.salaryRateType = n.salaryRateType, this.session.form.salaryRange = n.salaryRange, this.session.form.educationHistory = n.educationHistory, this.session.form.educationHistoryNotes = n.educationHistoryNotes, this.session.form.desiredLocations = n.desiredLocations, this.session.form.preferredSectors = n.preferredSectors, this.session.form.schoolLeavingYear = n.schoolLeavingYear, this.session.form.nationality = n.nationality, this.session.form.currentJobLevel = n.currentJobLevel, this.session.form.currentJobLocation = n.currentJobLocation, this.session.form.gender = n.gender, this.session.form.maritalStatus = n.maritalStatus, this.session.view.showApplyForm = n.showApplyForm, this.session.view.isExternalJobAndNotATSIntegrated = n.isExternalJobAndNotATSIntegrated, this.session.view.showEmailConfirmationBox = n.showEmailConfirmationBox, this.session.view.isLoggedIn = n.isLoggedIn, this.session.view.showLoginSection = n.showLoginSection, this.session.view.detailsSectionDisabled = n.detailsSectionDisabled, this.session.view.hasContinuedWithoutSigningIn = n.hasContinuedWithoutSigningIn, this.session.view.showOCAFlag = n.showOCAFlag, this.session.view.showApplicationsMatchingFlag = n.showApplicationsMatchingFlag, this.session.view.showCvDbOptInFlag = n.showCvDbOptInFlag, this.session.view.showProfilePreferences = n.showProfilePreferences, this.session.view.showApplicationPreferences = n.showApplicationPreferences, this.session.view.fields = n.fields, sessionStorage.removeItem("applyForm"))
                }
            },
            resetForm: function() {
                sessionStorage.removeItem("applyForm")
            }
        }
    }), angular.module("utilsModule", []).factory("utilsService", function() {
        var e = {
            getQueryStringParameter: function(e, t) {
                t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var n = new RegExp("[\\?&]" + t + "=([^&#]*)", "i").exec(e.location.search);
                return null == n ? "" : n[1]
            },
            mapCandidateModelToForm: function(e, t) {
                return Object.assign(e, t, {
                    education: t.educationId,
                    salaryRateType: t.salaryRangeType
                })
            }
        };
        return e
    }), angular.module("validationModule", []).factory("validationService", ["sessionService", "detailsService", function(i, n) {
        var r = {
            cv: {
                sizeLimit: 1048576,
                invalidExtensionMsg: "The file format is not supported.",
                invalidSizeMsg: "Please ensure your CV is no more than 1MB.",
                requiredMsg: "You must attach a CV to apply.",
                validExtensions: ["pdf", "doc", "docx", "rtf"]
            },
            email: {
                invalidDomainMsg: "Please provide a valid email domain.",
                invalidFormatMsg: "Please provide a valid email address."
            }
        };
        return r.validateCv = function(e, t) {
            var n = function(e) {
                for (var t = 0; t < r.cv.validExtensions.length; ++t) {
                    var n = "\\." + r.cv.validExtensions[t] + "$";
                    if (e.match(n)) return ""
                }
                return r.cv.invalidExtensionMsg
            }(e.toLowerCase());
            return 0 === n.length && (n = t > r.cv.sizeLimit ? r.cv.invalidSizeMsg : ""), n
        }, r.getFileSize = function(e) {
            return e[0].files && 0 < e[0].files.length ? e[0].files[0].size : 1
        }, r.educationHistoryIsValid = function(e, t, n) {
            return !t.educationHistory.isDisplayed || !n.educationHistoryIsShowing || !(!e.educationHistory || 0 === e.educationHistory.length)
        }, r.educationHistoryNotesIsValid = function(e, t) {
            return !t.educationHistory.isDisplayed || (!n.showEducationHistoryNotesField(i.session) || !(!e.educationHistoryNotes || 0 === e.educationHistoryNotes.length))
        }, r.isQualificationValid = function(e, t) {
            return t ? function(e) {
                if (i.session.view.fields.universityOrInstitute.isDisplayed && "" === e.getInstitution()) return !1;
                if ("" === e.qualificationId) return !1;
                if ("" === e.disciplineId) return !1;
                var t = i.session.view.fields.educationCourseTitle;
                if (t.isDisplayed && t.isRequired && "" === e.courseTitle) return !1;
                if ("" === e.yearAttained) return !1;
                var n = i.session.view.fields.educationCourseGrade;
                if (n.isDisplayed && n.isRequired && "" === e.gradeId) return !1;
                return !0
            }(e) : "" == (n = e).getInstitution() && "" == n.qualificationId && "" == n.disciplineId && "" == n.courseTitle && "" == n.yearAttained && "" == n.gradeId;
            var n
        }, r
    }]), angular.module("bootstrap-multiselect-indented", []),
    function(u) {
        "use strict";

        function l(e) {
            return ko.isObservable(e) && void 0 !== e.destroyAll
        }

        function i(e, t) {
            this.options = this.mergeOptions(t), this.$select = u(e), this.originalOptions = this.$select.clone()[0].options, this.query = "", this.searchTimeout = null, this.options.multiple = "multiple" === this.$select.attr("multiple"), this.options.onChange = u.proxy(this.options.onChange, this), this.options.onDropdownShow = u.proxy(this.options.onDropdownShow, this), this.options.onDropdownHide = u.proxy(this.options.onDropdownHide, this), this.buildContainer(), this.buildButton(), this.buildDropdown(), this.buildSelectAll(), this.buildDropdownOptions(), this.buildFilter(), this.updateButtonText(), this.updateSelectAll(), this.$select.hide().after(this.$container)
        }
        null !== Array.prototype.forEach && void 0 !== Array.prototype.forEach || (Array.prototype.forEach = function(e) {
            var t;
            for (t = 0; t < this.length; ++t) e(this[t])
        }), "undefined" != typeof ko && ko.bindingHandlers && !ko.bindingHandlers.multiselect && (ko.bindingHandlers.multiselect = {
            init: function(i, e, t, n, r) {
                var o = t().selectedOptions,
                    a = ko.utils.unwrapObservable(e());
                u(i).multiselect(a), l(o) && (u(i).multiselect("select", ko.utils.unwrapObservable(o)), o.subscribe(function(e) {
                    var t = [],
                        n = [];
                    e.forEach(function(e) {
                        switch (e.status) {
                            case "added":
                                t.push(e.value);
                                break;
                            case "deleted":
                                n.push(e.value)
                        }
                    }), 0 < t.length && u(i).multiselect("select", t), 0 < n.length && u(i).multiselect("deselect", n)
                }, null, "arrayChange"))
            },
            update: function(t, e, n, i, r) {
                var o = n().options,
                    a = u(t).data("multiselect"),
                    s = ko.utils.unwrapObservable(e());
                l(o) && o.subscribe(function(e) {
                    u(t).multiselect("rebuild")
                }), a ? a.updateOriginalOptions() : u(t).multiselect(s)
            }
        }), i.prototype = {
            defaults: {
                buttonText: function(e, t) {
                    if (0 === e.length) return this.nonSelectedText + ' <b class="caret"></b>';
                    if (e.length > this.numberDisplayed) return e.length + " " + this.nSelectedText + ' <b class="caret"></b>';
                    var n = "";
                    return e.each(function() {
                        var e = void 0 !== u(this).attr("label") ? u(this).attr("label") : u(this).html();
                        n += e + ", "
                    }), n.substr(0, n.length - 2) + ' <b class="caret"></b>'
                },
                buttonTitle: function(e, t) {
                    if (0 === e.length) return this.nonSelectedText;
                    var n = "";
                    return e.each(function() {
                        n += u(this).text() + ", "
                    }), n.substr(0, n.length - 2)
                },
                label: function(e) {
                    return u(e).attr("label") || u(e).html()
                },
                onChange: function(e, t) {},
                onDropdownShow: function(e) {},
                onDropdownHide: function(e) {},
                buttonClass: "btn btn-default",
                dropRight: !1,
                selectedClass: "active",
                buttonWidth: "auto",
                buttonContainer: '<div class="btn-group" />',
                maxHeight: !1,
                checkboxName: "multiselect",
                includeSelectAllOption: !1,
                includeSelectAllIfMoreThan: 0,
                selectAllText: " Select all",
                selectAllValue: "multiselect-all",
                enableFiltering: !1,
                enableCaseInsensitiveFiltering: !1,
                filterPlaceholder: "Search",
                filterBehavior: "text",
                preventInputChangeEvent: !1,
                nonSelectedText: "None selected",
                nSelectedText: "selected",
                numberDisplayed: 3,
                templates: {
                    button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"></button>',
                    ul: '<ul class="multiselect-container dropdown-menu"></ul>',
                    filter: '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
                    li: '<li><a href="javascript:void(0);"><label></label></a></li>',
                    divider: '<li class="multiselect-item divider"></li>',
                    liGroup: '<li class="multiselect-item group"><label class="multiselect-group"></label></li>'
                }
            },
            constructor: i,
            buildContainer: function() {
                this.$container = u(this.options.buttonContainer), this.$container.on("show.bs.dropdown", this.options.onDropdownShow), this.$container.on("hide.bs.dropdown", this.options.onDropdownHide)
            },
            buildButton: function() {
                this.$button = u(this.options.templates.button).addClass(this.options.buttonClass), this.$select.prop("disabled") ? this.disable() : this.enable(), this.options.buttonWidth && "auto" !== this.options.buttonWidth && (this.$button.css({
                    width: this.options.buttonWidth
                }), this.$container.css({
                    width: this.options.buttonWidth
                }));
                var e = this.$select.attr("tabindex");
                e && this.$button.attr("tabindex", e), this.$container.prepend(this.$button)
            },
            buildDropdown: function() {
                this.$ul = u(this.options.templates.ul), this.options.dropRight && this.$ul.addClass("pull-right"), this.options.maxHeight && this.$ul.css({
                    "max-height": this.options.maxHeight + "px",
                    "overflow-y": "auto",
                    "overflow-x": "hidden"
                }), this.$container.append(this.$ul)
            },
            buildDropdownOptions: function() {
                this.$select.children().each(u.proxy(function(e, t) {
                    var n = u(t).prop("tagName").toLowerCase();
                    u(t).prop("value") != this.options.selectAllValue && ("optgroup" === n ? this.createOptgroup(t) : "option" === n && ("divider" === u(t).data("role") ? this.createDivider() : this.createOptionValue(t)))
                }, this)), u("li input", this.$ul).on("change", u.proxy(function(e) {
                    var t = u(e.target),
                        n = t.prop("checked") || !1,
                        i = t.val() === this.options.selectAllValue;
                    this.options.selectedClass && (n ? t.parents("li").addClass(this.options.selectedClass) : t.parents("li").removeClass(this.options.selectedClass));
                    var r = t.val(),
                        o = this.getOptionByValue(r),
                        a = u("option", this.$select).not(o),
                        s = u("input", this.$container).not(t);
                    if (i && (n ? this.selectall() : this.deselectall()), i || (n ? (o.prop("selected", !0), this.options.multiple ? o.prop("selected", !0) : (this.options.selectedClass && u(s).parents("li").removeClass(this.options.selectedClass), u(s).prop("checked", !1), a.prop("selected", !1), this.$button.click())) : o.prop("selected", !1)), this.$select.change(), this.updateButtonText(), this.updateSelectAll(), this.options.onChange(o, n), this.options.preventInputChangeEvent) return !1
                }, this)), u("li a", this.$ul).on("touchstart click", function(e) {
                    e.stopPropagation();
                    var t = u(e.target);
                    if (e.shiftKey && (t.prop("checked") || !1)) {
                        var n = t.parents("li:last").siblings('li[class="active"]:first'),
                            i = t.parents("li").index();
                        n.index() < i ? t.parents("li:last").prevUntil(n).each(function() {
                            u(this).find("input:first").prop("checked", !0).trigger("change")
                        }) : t.parents("li:last").nextUntil(n).each(function() {
                            u(this).find("input:first").prop("checked", !0).trigger("change")
                        })
                    }
                    t.blur()
                }), this.$container.off("keydown.multiselect").on("keydown.multiselect", u.proxy(function(e) {
                    if (!u('input[type="text"]', this.$container).is(":focus"))
                        if (9 !== e.keyCode && 27 !== e.keyCode || !this.$container.hasClass("open")) {
                            var t = u(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");
                            if (!t.length) return;
                            var n = t.index(t.filter(":focus"));
                            38 === e.keyCode && 0 < n ? n-- : 40 === e.keyCode && n < t.length - 1 ? n++ : ~n || (n = 0);
                            var i = t.eq(n);
                            if (i.focus(), 32 === e.keyCode || 13 === e.keyCode) {
                                var r = i.find("input");
                                r.prop("checked", !r.prop("checked")), r.change()
                            }
                            e.stopPropagation(), e.preventDefault()
                        } else this.$button.click()
                }, this))
            },
            createOptionValue: function(e) {
                u(e).is(":selected") && u(e).prop("selected", !0);
                var t = this.options.label(e),
                    n = u(e).val(),
                    i = this.options.multiple ? "checkbox" : "radio",
                    r = u(this.options.templates.li);
                u("label", r).addClass(i), u("label", r).append('<input type="' + i + '" name="' + this.options.checkboxName + '" />');
                var o = u(e).prop("selected") || !1,
                    a = u("input", r);
                a.val(n), n === this.options.selectAllValue && (r.addClass("multiselect-item multiselect-all"), a.parent().parent().addClass("multiselect-all")), u("label", r).append(" " + t), this.$ul.append(r), u(e).is(":disabled") && a.attr("disabled", "disabled").prop("disabled", !0).parents("a").attr("tabindex", "-1").parents("li").addClass("disabled"), a.prop("checked", o), o && this.options.selectedClass && a.parents("li").addClass(this.options.selectedClass)
            },
            createDivider: function(e) {
                var t = u(this.options.templates.divider);
                this.$ul.append(t)
            },
            createOptgroup: function(e) {
                var t = u(e).prop("label"),
                    n = u(this.options.templates.liGroup);
                u("label", n).text(t), this.$ul.append(n), u(e).is(":disabled") && n.addClass("disabled"), u("option", e).each(u.proxy(function(e, t) {
                    this.createOptionValue(t)
                }, this))
            },
            buildSelectAll: function() {
                if (!this.hasSelectAll() && this.options.includeSelectAllOption && this.options.multiple && u("option", this.$select).length > this.options.includeSelectAllIfMoreThan) {
                    this.options.includeSelectAllDivider && this.$ul.prepend(u(this.options.templates.divider));
                    var e = u(this.options.templates.li);
                    u("label", e).addClass("checkbox"), u("label", e).append('<input type="checkbox" name="' + this.options.checkboxName + '" />');
                    var t = u("input", e);
                    t.val(this.options.selectAllValue), e.addClass("multiselect-item multiselect-all"), t.parent().parent().addClass("multiselect-all"), u("label", e).append(" " + this.options.selectAllText), this.$ul.prepend(e), t.prop("checked", !1)
                }
            },
            buildFilter: function() {
                if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
                    var e = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);
                    this.$select.find("option").length >= e && (this.$filter = u(this.options.templates.filter), u("input", this.$filter).attr("placeholder", this.options.filterPlaceholder), this.$ul.prepend(this.$filter), this.$filter.val(this.query).on("click", function(e) {
                        e.stopPropagation()
                    }).on("input keydown", u.proxy(function(e) {
                        clearTimeout(this.searchTimeout), this.searchTimeout = this.asyncFunction(u.proxy(function() {
                            this.query !== e.target.value && (this.query = e.target.value, u.each(u("li", this.$ul), u.proxy(function(e, t) {
                                var n = u("input", t).val(),
                                    i = u("label", t).text(),
                                    r = "";
                                if ("text" === this.options.filterBehavior ? r = i : "value" === this.options.filterBehavior ? r = n : "both" === this.options.filterBehavior && (r = i + "\n" + n), n !== this.options.selectAllValue && i) {
                                    var o = !1;
                                    (this.options.enableCaseInsensitiveFiltering && -1 < r.toLowerCase().indexOf(this.query.toLowerCase()) || -1 < r.indexOf(this.query)) && (o = !0), o ? u(t).show().removeClass("filter-hidden") : u(t).hide().addClass("filter-hidden")
                                }
                            }, this))), this.updateSelectAll()
                        }, this), 300, this)
                    }, this)))
                }
            },
            destroy: function() {
                this.$container.remove(), this.$select.show(), this.$select.data("multiselect", null)
            },
            refresh: function() {
                u("option", this.$select).each(u.proxy(function(e, t) {
                    var n = u("li input", this.$ul).filter(function() {
                        return u(this).val() === u(t).val()
                    });
                    u(t).is(":selected") ? (n.prop("checked", !0), this.options.selectedClass && n.parents("li").addClass(this.options.selectedClass)) : (n.prop("checked", !1), this.options.selectedClass && n.parents("li").removeClass(this.options.selectedClass)), u(t).is(":disabled") ? n.attr("disabled", "disabled").prop("disabled", !0).parents("li").addClass("disabled") : n.prop("disabled", !1).parents("li").removeClass("disabled")
                }, this)), this.updateButtonText(), this.updateSelectAll()
            },
            select: function(e) {
                u.isArray(e) || (e = [e]);
                for (var t = 0; t < e.length; t++) {
                    var n = e[t],
                        i = this.getOptionByValue(n),
                        r = this.getInputByValue(n);
                    void 0 !== i && void 0 !== r && (this.options.selectedClass && r.parents("li").addClass(this.options.selectedClass), r.prop("checked", !0), i.prop("selected", !0))
                }
                this.updateButtonText()
            },
            clearSelection: function() {
                this.deselectall(!1), this.updateButtonText(), this.updateSelectAll()
            },
            deselect: function(e) {
                u.isArray(e) || (e = [e]);
                for (var t = 0; t < e.length; t++) {
                    var n = e[t],
                        i = this.getOptionByValue(n),
                        r = this.getInputByValue(n);
                    void 0 !== i && void 0 !== r && (this.options.selectedClass && r.parents("li").removeClass(this.options.selectedClass), r.prop("checked", !1), i.prop("selected", !1))
                }
                this.updateButtonText()
            },
            selectall: function() {
                var e = u("li input[type='checkbox']:enabled", this.$ul),
                    t = e.filter(":visible"),
                    n = e.length,
                    i = t.length;
                if (t.prop("checked", !0), u("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").addClass(this.options.selectedClass), n === i) u("option:enabled", this.$select).prop("selected", !0);
                else {
                    var r = t.map(function() {
                        return u(this).val()
                    }).get();
                    u("option:enabled", this.$select).filter(function(e) {
                        return -1 !== u.inArray(u(this).val(), r)
                    }).prop("selected", !0)
                }
            },
            deselectall: function(e) {
                var t = u("li input[type='checkbox']:enabled", this.$ul),
                    n = void 0;
                if (e = void 0 === e || e) {
                    var i;
                    (n = t.filter(":visible")).prop("checked", !1), i = n.map(function() {
                        return u(this).val()
                    }).get(), u("option:enabled", this.$select).filter(function(e) {
                        return -1 !== u.inArray(u(this).val(), i)
                    }).prop("selected", !1), u("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").removeClass(this.options.selectedClass)
                } else t.prop("checked", !1), u("option:enabled", this.$select).prop("selected", !1), u("li:not(.divider):not(.disabled)", this.$ul).removeClass(this.options.selectedClass)
            },
            rebuild: function() {
                this.$ul.html(""), this.options.multiple = "multiple" === this.$select.attr("multiple"), this.buildSelectAll(), this.buildDropdownOptions(), this.buildFilter(), this.updateButtonText(), this.updateSelectAll(), this.options.dropRight && this.$ul.addClass("pull-right")
            },
            dataprovider: function(e) {
                var n = "",
                    i = 0;
                u.each(e, function(e, t) {
                    u.isArray(t.children) ? (i++, n += '<optgroup label="' + (t.title || "Group " + i) + '">', t.children.forEach(function(e) {
                        n += '<option value="' + e.value + '">' + (e.label || e.value) + "</option>"
                    }), n += "</optgroup>") : n += '<option value="' + t.value + '">' + (t.label || t.value) + "</option>"
                }), this.$select.html(n), this.rebuild()
            },
            enable: function() {
                this.$select.prop("disabled", !1), this.$button.prop("disabled", !1).removeClass("disabled")
            },
            disable: function() {
                this.$select.prop("disabled", !0), this.$button.prop("disabled", !0).addClass("disabled")
            },
            setOptions: function(e) {
                this.options = this.mergeOptions(e)
            },
            mergeOptions: function(e) {
                return u.extend(!0, {}, this.defaults, e)
            },
            hasSelectAll: function() {
                return 0 < u("li." + this.options.selectAllValue, this.$ul).length
            },
            updateSelectAll: function() {
                if (this.hasSelectAll()) {
                    var e = u("li:not(.multiselect-item):not(.filter-hidden) input:enabled", this.$ul),
                        t = e.length,
                        n = e.filter(":checked").length,
                        i = u("li." + this.options.selectAllValue, this.$ul),
                        r = i.find("input");
                    0 < n && n === t ? (r.prop("checked", !0), i.addClass(this.options.selectedClass)) : (r.prop("checked", !1), i.removeClass(this.options.selectedClass))
                }
            },
            updateButtonText: function() {
                var e = this.getSelected();
                u("button", this.$container).html(this.options.buttonText(e, this.$select)), u("button", this.$container).attr("title", this.options.buttonTitle(e, this.$select))
            },
            getSelected: function() {
                return u("option", this.$select).filter(":selected")
            },
            getOptionByValue: function(e) {
                for (var t = u("option", this.$select), n = e.toString(), i = 0; i < t.length; i += 1) {
                    var r = t[i];
                    if (r.value === n) return u(r)
                }
            },
            getInputByValue: function(e) {
                for (var t = u("li input", this.$ul), n = e.toString(), i = 0; i < t.length; i += 1) {
                    var r = t[i];
                    if (r.value === n) return u(r)
                }
            },
            updateOriginalOptions: function() {
                this.originalOptions = this.$select.clone()[0].options
            },
            asyncFunction: function(e, t, n) {
                var i = Array.prototype.slice.call(arguments, 3);
                return setTimeout(function() {
                    e.apply(n || window, i)
                }, t)
            }
        }, u.fn.multiselect = function(t, n) {
            return this.each(function() {
                var e = u(this).data("multiselect");
                e || (e = new i(this, "object" == typeof t && t), u(this).data("multiselect", e)), "string" == typeof t && (e[t](n), "destroy" === t && u(this).data("multiselect", !1))
            })
        }, u.fn.multiselect.Constructor = i, u(function() {
            u("select[data-role=multiselect]").multiselect()
        }), u.fn.multiselect.Constructor.prototype.createOptionValue = function(e) {
            u(e).is(":selected") && u(e).prop("selected", !0);
            var t = this.options.label(e),
                n = u(e).val(),
                i = this.options.multiple ? "checkbox" : "radio",
                r = u(this.options.templates.li);
            u("label", r).addClass(i);
            var o = 0 < u(e).siblings(".indentedItem").length,
                a = u(e).hasClass("indentedItem"),
                s = u(e).hasClass("default-option");
            r.addClass(u(e).attr("class")), u("label", r).append('<input type="' + i + '" name="' + this.options.checkboxName + '" data-parent="' + u(e).attr("data-parent-value") + '" />');
            var l = !u(e).prop("checked"),
                c = u("input", r);
            c.val(n), n === this.options.selectAllValue && (r.addClass("multiselect-item multiselect-all"), c.parent().parent().addClass("multiselect-all")), u("label", r).append(" " + t), this.$ul.append(r), u(e).is(":disabled") && c.attr("disabled", "disabled").prop("disabled", !0).parents("a").attr("tabindex", "-1").parents("li").addClass("disabled"), c.prop("checked", l), l && this.options.selectedClass && c.parents("li").addClass(this.options.selectedClass), o && (s ? r.find("input").change(function(e, t) {
                t || deselectAllAndSelectDefault(u(this))
            }) : r.find("input").change(function(e, t) {
                if (!t) {
                    var n = u(this);
                    (a ? setParent : setChilds)(n), selectDefaultOption(n)
                }
            }))
        }
    }(window.jQuery), angular.module("cvModule", ["sessionModule"]).controller("cvController", ["$scope", "sessionService", function(e, t) {
        e.session = t.session;
        var n = e.session.view.fields.cv.isRequired,
            i = e.session.form.cvFileName && 0 < e.session.form.cvFileName.length;
        e.session.view.detailsSectionDisabled = n && !i
    }]), angular.module("detailsModule", ["sessionModule", "validationModule", "analyticsModule", "ui.bootstrap.typeahead", "bootstrap-multiselect-indented"]).controller("detailsController", ["$scope", "sessionService", "detailsService", "validationService", "institutionsListService", "$timeout", function(i, e, r, t, n, o) {
        i.session = e.session, i.model = r.model, i.isNewUser = function() {
            return !i.session.view.hasContinuedWithoutSigningIn && !i.session.view.isLoggedIn
        }, i.showSchoolLeavingYear = function() {
            return r.shouldShowSchoolLeavingYear(i.session.form.currentStatus)
        }, i.showEducationHistorySection = function() {
            if (!i.session.view.fields.educationHistory.isDisplayed) return !1;
            var e = i.session.view.educationHistoryParentField,
                t = i.session.form[e.key],
                n = r.containsRelatedFieldValue(t, e.targetValues);
            return i.session.temp.educationHistoryIsShowing = n
        }, i.showEducationHistoryNotesField = function() {
            var e = r.showEducationHistoryNotesField(i.session);
            return i.session.temp.educationHistoryNotesIsShowing = e
        }, i.showUniversityOrInstitute = function() {
            return i.session.view.fields.universityOrInstitute.isDisplayed
        }, i.showRecentJobTitle = function() {
            return i.session.view.fields.recentJobTitle.isDisplayed
        }, i.openQualificationSection = function() {
            i.showQualificationSection = !0
        }, i.hideAddQualificationLink = function() {
            var e = i.session.form.educationHistory,
                t = 0;
            return e && (t = e.length), i.showQualificationSection = i.showQualificationSection || !e || 0 === t, i.showQualificationSection || !e || 0 === t || 5 <= t
        }, i.addQualification = function() {
            var e = i.session.temp.qualification;
            t.isQualificationValid(e, !0) ? (r.addQualification(i.session.form, e), e.showErrorMsg = !1, i.showQualificationSection = !1, o(function() {
                window.location.hash = "details-section"
            })) : e.showErrorMsg = !0
        }, i.clearQualification = function() {
            r.clearQualification(i.session.temp.qualification)
        }, i.removeQualification = function(e) {
            i.session.form.educationHistory.splice(e, 1)
        }, i.changeSalaryRateType = function(e) {
            i.session.form.salaryRateType = e, i.session.form.salaryRange = 0, r.setSalaryRate(e, i.model)
        }, r.setSalaryRate(i.session.form.salaryRateType, i.model), i.orderByWordMatch = function(i) {
            return function(e) {
                var t = i.toLowerCase(),
                    n = e.toLowerCase();
                return 0 === n.indexOf(t) ? 0 : 0 < n.indexOf(" " + t) ? 1 : 2
            }
        }, i.ensureValidInstitution = function(e) {
            var t = $(e.currentTarget); - 1 === $.inArray(t.val(), i.institutionsList) && t.val("")
        }, i.$watch("shouldLoadInstitutionsList", function(e) {
            e && n.fetchInstitutionsList().then(function(e) {
                i.institutionsList = e
            })
        })
    }]).factory("detailsService", function() {
        var i = {
                model: {
                    salaryText: "",
                    isSalaryRateAnnual: !0,
                    isSalaryRateDaily: !1,
                    isSalaryRateHourly: !1,
                    isSalaryRateNone: !1
                }
            },
            n = "Not applicable",
            r = "Select daily rate",
            o = "Select hourly rate",
            a = "Select annual salary",
            t = ["1554", "1550"];

        function s(e, t, n, i, r) {
            r.isSalaryRateAnnual = e, r.isSalaryRateDaily = t, r.isSalaryRateHourly = n, r.isSalaryRateNone = i
        }
        return i.shouldShowSchoolLeavingYear = function(e) {
            return -1 !== t.indexOf(e)
        }, i.containsRelatedFieldValue = function(e, t) {
            return null != e && "" !== e && -1 < t.indexOf(parseInt(e, 10))
        }, i.addQualification = function(e, t) {
            var n = {
                discipline: t.disciplineText,
                disciplineId: t.disciplineId,
                institution: t.getInstitution(),
                qualificationGrade: t.gradeText,
                qualificationGradeId: t.gradeId,
                qualificationTitle: t.courseTitle,
                qualificationType: t.qualificationText,
                qualificationTypeId: t.qualificationId,
                yearOfCompletion: t.yearAttained,
                text: t.qualificationText + ", " + t.disciplineText + ", " + t.getInstitution() + ", " + ("" !== t.courseTitle ? t.courseTitle + ", " : "") + ("" !== t.gradeText ? t.gradeText + ", " : "") + t.yearAttained
            };
            e.educationHistory ? e.educationHistory.push(n) : e.educationHistory = [n], i.clearQualification(t)
        }, i.setSalaryRate = function(e, t) {
            switch (e) {
                case 0:
                    t.salaryText = n, s(!1, !1, !1, !0, t);
                    break;
                case 4:
                    t.salaryText = r, s(!1, !0, !1, !1, t);
                    break;
                case 5:
                    t.salaryText = o, s(!1, !1, !0, !1, t);
                    break;
                default:
                    t.salaryText = a, s(!0, !1, !1, !1, t)
            }
        }, i.clearQualification = function(e) {
            e.qualificationId = "", e.qualificationText = "", e.institutionIsUk = !0, e.institutionUk = "", e.institutionOther = "", e.disciplineId = "", e.disciplineText = "", e.courseTitle = "", e.yearAttained = "", e.gradeId = "", e.gradeText = "", e.showErrorMsg = !1
        }, i.showEducationHistoryNotesField = function(e) {
            if (!e.view.fields.educationHistory.isDisplayed) return !1;
            var t = e.view.educationHistoryNotesParentField;
            if (null == t) return !1;
            var n = e.form[t.key];
            return i.containsRelatedFieldValue(n, t.targetValues)
        }, i
    }).directive("showPasswordErrorOnBlur", ["analyticsService", function(r) {
        return {
            restrict: "A",
            require: "^form",
            link: function(e, t, n, i) {
                t.bind("blur", function() {
                    var e = i[n.name];
                    e.$dirty && (t.parent().toggleClass("validation-error", e.$invalid), e.$invalid && r.trackPasswordValidationError(e.$name))
                })
            }
        }
    }]).directive("focusOnShow", function() {
        return {
            restrict: "A",
            link: function(t, e, n) {
                var i = angular.element(e);
                t.$watch(n.focusOnShow, function() {
                    var e = t.$eval(n.focusOnShow);
                    i.toggleClass("ng-hide", !e), e && i.focus()
                })
            }
        }
    }).directive("resetModelTrigger", function() {
        return {
            require: "ngModel",
            restrict: "A",
            link: function(e, t, n, i) {
                e.$watch(n.resetModelTrigger, function() {
                    i.$setViewValue(""), i.$render()
                })
            }
        }
    }).directive("dropdownSelectedText", function() {
        return {
            restrict: "A",
            scope: {
                textModel: "="
            },
            link: function(n, e) {
                var i = angular.element(e);
                i.bind("change", function() {
                    var e = i[0].selectedIndex,
                        t = i[0][e].text;
                    n.textModel = t, n.$digest()
                })
            }
        }
    }).directive("multiSelect", function() {
        return {
            link: function(n, i, e) {
                var r = e.formProperty || e.id,
                    o = e.multiSelectDefaultValue;
                i.multiselect({
                    buttonClass: "form-control input-lg",
                    buttonContainer: '<div class="btn-group multiselect-ddl" />',
                    maxHeight: 215,
                    selectedClass: "",
                    numberDisplayed: 4,
                    nonSelectedText: "- Please select -"
                }), n.$watch(function() {
                    return i[0].length && n.session.form[r] && 0 === n.session.form[r].length
                }, function() {
                    var e = n.session.form[r],
                        t = null == e || 0 === e.length;
                    void 0 !== o && t && (n.session.form[r] = [o], i.multiselect("select", o))
                }), n.$watch(function() {
                    return n.session.view.detailsSectionDisabled
                }, function() {
                    n.session.view.detailsSectionDisabled ? i.multiselect("disable") : (i.multiselect("enable"), i.multiselect("refresh"))
                })
            }
        }
    }).factory("institutionsListService", ["$http", function(e) {
        var t = {},
            n = "/account/Scripts/institutions/list.json";
        return t.fetchInstitutionsList = function() {
            return e({
                method: "GET",
                url: n
            }).then(function(e) {
                return e.data
            })
        }, t
    }]), angular.module("emailModule", ["sessionModule", "analyticsModule", "abandonedApplicationModule", "reduxModule", "utilsModule"]).controller("emailController", ["$scope", "$location", "$anchorScroll", "emailService", "sessionService", "validationService", "$window", "analyticsService", "abandonedApplicationService", "$timeout", "reduxService", "utilsService", function(i, r, o, e, t, n, a, s, l, c, u, p) {
        i.session = t.session, i.loginSubmitted = !1, i.keepMeSignedIn = !0;
        var f = "?locale=" + p.getQueryStringParameter(a, "locale");

        function d() {
            return -1 === window.location.href.indexOf("stepstone")
        }

        function h(e, t, n) {
            e.$error && angular.forEach(e.$error.required, function(e) {
                ! function(e, t, n) {
                    if (!e) return;
                    var i = angular.element(t).find("input[name='" + e.$name + "']");
                    !e.$invalid || n && !e.$dirty ? i.parent().removeClass("validation-error") : i.parent().addClass("validation-error")
                }(e, t, n)
            })
        }

        function v(e) {
            var t = !!e.cvSectionEnabled,
                n = !t || e.isCvRequired;
            u.setIsCvSectionEnabled(t), u.setIsDetailsSectionEnabled(!n), i.session.view.showCreateAccount = !!e.showCreateAccount, i.session.view.detailsSectionDisabled = n, i.session.view.hasContinuedWithoutSigningIn = !!e.hasContinuedWithoutSigningIn, i.session.view.showEmailConfirmationBox = !!e.showEmailConfirmationBox, i.session.view.showApplyForm = !!e.showApplyForm, i.session.view.showExternalBypassApplyForm = !!e.showExternalBypassApplyForm, i.session.view.showLoginSection = !!e.showLoginSection, i.session.view.showCvDbOptInFlag = !!e.showCvDbOptInFlag
        }
        i.continueWithoutSigningIn = function() {
            var e = i.session.view.fields.cv.isRequired;
            i.session.view.showLoginSection = !1, i.session.view.showProfilePreferences = !1, i.session.view.showApplicationPreferences = !1, u.continueWithoutSignIn(), i.session.view.detailsSectionDisabled = e, i.session.view.hasContinuedWithoutSigningIn = !0, i.session.view.showEmailConfirmationBox = !0, c(function() {
                i.session.view.showOCAFlag = !1
            }, 0), apply.initState.form.notsignedin = !0, s.fireContinueWithoutSigningInEvent(), sessionStorage.setItem("hasContinuedWithoutSigningIn", "true")
        }, i.signIn = function() {
            i.loginSubmitted = !0, i.loginPassword && (i.session.showLoader = !0, i.notAuthenticatedWithJobsiteAccount = !1, i.session.view.showPasswordResetConfirmation = !1, e.signIn(i.session.form.email, i.loginPassword, i.keepMeSignedIn).then(function(e) {
                switch (r.hash("loginForm"), o(), e) {
                    case "Authenticated":
                        s.suppressReloadAnalytics(!0, ["event145", "event250", function() {
                            try {
                                var e = analytics.JobId,
                                    t = document.cookie.split(";").find(function(e) {
                                        return e.trim().startsWith("utag_main")
                                    }).split("$").find(function(e) {
                                        return e.trim().startsWith("ses_id")
                                    }).split(":")[1].split("%")[0];
                                return "event251:" + e + t
                            } catch (e) {
                                a.DD_RUM ? a.DD_RUM.onReady(function() {
                                    a.DD_RUM.addError(e)
                                }) : console.log(e)
                            }
                            return "event251"
                        }(), function() {
                            try {
                                var e = analytics.JobId,
                                    t = document.cookie.split(";").find(function(e) {
                                        return e.trim().startsWith("sc_vid")
                                    }).split("=")[1];
                                return "event252:" + e + t
                            } catch (e) {
                                a.DD_RUM ? a.DD_RUM.onReady(function() {
                                    a.DD_RUM.addError(e)
                                }) : console.log(e)
                            }
                            return "event252"
                        }()]), sessionStorage.setItem("isLoginEvent", "true"), a.location.reload(!0);
                        break;
                    case "NotAuthenticatedWithJobsiteAccount":
                        i.notAuthenticatedWithJobsiteAccount = !0, i.loginPassword = "", i.session.showLoader = !1, s.trackPasswordValidationError("loginPassword");
                        break;
                    case "NotAuthenticated":
                    case "ServiceFail":
                    default:
                        i.loginPassword = "", i.session.showLoader = !1, s.trackPasswordValidationError("loginPassword")
                }
            }))
        }, i.signOut = function(e) {
            s.suppressReloadAnalytics(!0, []), l.deleteRecord(i.session.jobId).finally(function() {
                u.signout(e)
            })
        }, i.register = function() {
            if (h(i.createAccountForm, "#createAccountForm", !1), i.createAccountForm.$valid) {
                var n = document.querySelector("#txtPassword[type=text]");
                n && (n.type = "password"), i.session.showLoader = !0, e.register(i.session.form.email, i.session.form.password, i.session.form.cvdbOptIn, i.session.form.applicationHistoryOptIn, i.session.form.thirdPartyMarketingOptIn, i.session.jobId, i.session.keywords).then(function(e) {
                    switch (r.hash("loginForm"), o(), e.Status) {
                        case "Success":
                            i.session.view.userRegisteredSuccessfully = !0, l.recordApplicationStarted(i.session.jobId), v({
                                cvSectionEnabled: !0,
                                showEmailConfirmationBox: !0,
                                showApplyForm: !0,
                                isCvRequired: i.session.view.fields.cv.isRequired
                            }), u.registerEmailSuccess(i.session.form.email), -1 !== window.location.href.indexOf("stepstone") && (i.session.form.cvdbOptIn = !0, "undefined" != typeof utag_data && (utag_data.analytics.pii.candidateId = e.CeCandidateId, utag_data.analytics.legacy.candidate__candidate_id = e.CeCandidateId));
                            try {
                                var t = u.getState(); - 1 !== a.location.href.indexOf("stepstone") ? s.trackNewUserRegisteredPageView(t.jobModel.isExternal) : s.trackUserRegistrationEvents(e.HasFullPreRegProfile, i.session.form.cvdbOptIn, t.cvSection.supportedApplicationPaths, t.jobModel.isExternal)
                            } catch (e) {
                                a.DD_RUM ? a.DD_RUM.onReady(function() {
                                    a.DD_RUM.addError(e)
                                }) : console.log(e)
                            }
                            break;
                        default:
                            i.session.validation.registerErrorStatus = e, n && (n.type = "text")
                    }
                    i.session.showLoader = !1
                })
            }
        }, i.resetPassword = function() {
            i.session.form.email && (i.session.showLoader = !0, e.resetPassword(i.session.form.email, i.session.jobId).then(function() {
                i.session.showLoader = !1, i.session.view.showPasswordResetConfirmation = !0, s.trackForgottenPasswordEvents()
            }))
        }, i.verifyEmail = function() {
            i.session.showLoader = !0, e.verifyEmail(i.session.form.email, i.session.jobId, f).then(function(e) {
                if (i.session.showLoader = !1, "Success" === e.EmailStatus) switch (i.session.validation.emailErrorMessage = "", e.AccountStatus) {
                    case "ExistingWithProfile":
                        var t = i.session.view.isLoggedIn && e.HasAllAolMandatoryFields && i.session.view.isExternalJobAndNotATSIntegrated,
                            n = !i.session.view.isExternalJobAndNotATSIntegrated;
                        n = n && d(), v({
                            showLoginSection: !0,
                            hasContinuedWithoutSigningIn: !i.session.view.isExternalJobAndNotATSIntegrated,
                            showApplyForm: n,
                            showExternalBypassApplyForm: t,
                            showCvDbOptInFlag: !0,
                            isCvRequired: i.session.view.fields.cv.isRequired
                        }), -1 !== a.location.href.indexOf("stepstone") && s.trackExistingUserEmailVerifiedPageView();
                        break;
                    case "ExistingWithoutProfile":
                        v({
                            cvSectionEnabled: !0,
                            hasContinuedWithoutSigningIn: !0,
                            showApplyForm: d(),
                            showEmailConfirmationBox: !0,
                            showCvDbOptInFlag: !0,
                            isCvRequired: i.session.view.fields.cv.isRequired
                        });
                        break;
                    case "NewUser":
                        i.session.form.password = "", i.createAccountForm.$setPristine(), c(function() {
                            h(i.createAccountForm, "#createAccountForm", !0)
                        }), v({
                            showApplyForm: d(),
                            showCreateAccount: !0,
                            showCvDbOptInFlag: !1,
                            isCvRequired: i.session.view.fields.cv.isRequired
                        }), -1 !== a.location.href.indexOf("stepstone") && s.trackRegistrationPageView();
                        break;
                    case "Unknown":
                    default:
                        v({
                            cvSectionEnabled: !0,
                            hasContinuedWithoutSigningIn: !0,
                            showApplyForm: d(),
                            showEmailConfirmationBox: !0,
                            showCvDbOptInFlag: !0,
                            isCvRequired: i.session.view.fields.cv.isRequired
                        }), i.session.validation.emailErrorMessage = e.TranslatedValidationMessage
                } else i.session.validation.emailErrorMessage = e.TranslatedValidationMessage;
                s.trackEmailVerificationEvents()
            }), -1 === a.location.href.indexOf("stepstone") && s.trackEmailVerificationEvents()
        }, i.onEmailChanged = function() {
            i.session.view.showLoginSection = !1, i.session.view.showCreateAccount = !1, i.session.view.showExternalBypassApplyForm = !1, i.session.view.showPasswordResetConfirmation = !1, i.notAuthenticatedWithJobsiteAccount = !1
        }
    }]).factory("emailService", ["$http", function(s) {
        var e = {},
            i = "/apply/service/verify",
            r = "/apply/service/signin",
            l = "/apply/service/register",
            n = "/apply/service/sendforgottenpasswordemail";
        return e.verifyEmail = function(e, t, n) {
            return s({
                method: "POST",
                url: i + n,
                data: {
                    account: e,
                    jobId: t
                }
            }).then(function(e) {
                return angular.fromJson(e.data)
            })
        }, e.signIn = function(e, t, n) {
            return s({
                method: "POST",
                url: r,
                data: {
                    email: e,
                    password: t,
                    isPersistent: n
                }
            }).then(function(e) {
                return angular.fromJson(e.data)
            })
        }, e.register = function(e, t, n, i, r, o, a) {
            return s({
                method: "POST",
                url: l,
                data: {
                    email: e,
                    password: t,
                    cvdbOptIn: n,
                    applicationHistoryOptIn: i,
                    thirdPartyMarketingOptIn: r,
                    jobId: o,
                    keywords: a
                }
            }).then(function(e) {
                return angular.fromJson(e.data)
            })
        }, e.resetPassword = function(e, t) {
            return s({
                method: "POST",
                url: n,
                data: {
                    email: e,
                    jobId: t
                }
            })
        }, e
    }]), angular.module("loaderModule", ["sessionModule"]).controller("loaderController", ["$scope", "sessionService", function(e, t) {
        e.session = t.session
    }]).directive("modalShow", function() {
        return {
            restrict: "A",
            link: function(t, n, i) {
                t.showModal = function(e, t) {
                    t = t || n, e ? $(t).modal("show") : $(t).modal("hide")
                }, t.$watch(i.modalShow, function(e) {
                    t.showModal(e, i.$$element)
                })
            }
        }
    }), angular.module("reduxModule", []).factory("reduxService", ["$window", function(e) {
        return e.ApplyApp.reduxService
    }]), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function() {
        return function(e, t, n) {
            t.addClass("ng-binding").data("$binding", n.bindHtmlUnsafe), e.$watch(n.bindHtmlUnsafe, function(e) {
                t.html(e || "")
            })
        }
    }), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function(o, i) {
        function a(e) {
            return "static" === (n = "position", ((t = e).currentStyle ? t.currentStyle[n] : i.getComputedStyle ? i.getComputedStyle(t)[n] : t.style[n]) || "static");
            var t, n
        }
        return {
            position: function(e) {
                var t = this.offset(e),
                    n = {
                        top: 0,
                        left: 0
                    },
                    i = function(e) {
                        for (var t = o[0], n = e.offsetParent || t; n && n !== t && a(n);) n = n.offsetParent;
                        return n || t
                    }(e[0]);
                i != o[0] && ((n = this.offset(angular.element(i))).top += i.clientTop - i.scrollTop, n.left += i.clientLeft - i.scrollLeft);
                var r = e[0].getBoundingClientRect();
                return {
                    width: r.width || e.prop("offsetWidth"),
                    height: r.height || e.prop("offsetHeight"),
                    top: t.top - n.top,
                    left: t.left - n.left
                }
            },
            offset: function(e) {
                var t = e[0].getBoundingClientRect();
                return {
                    width: t.width || e.prop("offsetWidth"),
                    height: t.height || e.prop("offsetHeight"),
                    top: t.top + (i.pageYOffset || o[0].documentElement.scrollTop),
                    left: t.left + (i.pageXOffset || o[0].documentElement.scrollLeft)
                }
            },
            positionElements: function(e, t, n, i) {
                var r, o, a, s, l = n.split("-"),
                    c = l[0],
                    u = l[1] || "center";
                r = i ? this.offset(e) : this.position(e), o = t.prop("offsetWidth"), a = t.prop("offsetHeight");
                var p = {
                        center: function() {
                            return r.left + r.width / 2 - o / 2
                        },
                        left: function() {
                            return r.left
                        },
                        right: function() {
                            return r.left + r.width
                        }
                    },
                    f = {
                        center: function() {
                            return r.top + r.height / 2 - a / 2
                        },
                        top: function() {
                            return r.top
                        },
                        bottom: function() {
                            return r.top + r.height
                        }
                    };
                switch (c) {
                    case "right":
                        s = {
                            top: f[u](),
                            left: p[c]()
                        };
                        break;
                    case "left":
                        s = {
                            top: f[u](),
                            left: r.left - o
                        };
                        break;
                    case "bottom":
                        s = {
                            top: f[c](),
                            left: p[u]()
                        };
                        break;
                    default:
                        s = {
                            top: r.top - a,
                            left: p[u]()
                        }
                }
                return s
            }
        }
    }]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html", "template/typeahead/custom-template.html"]).factory("typeaheadParser", ["$parse", function(n) {
        var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
        return {
            parse: function(e) {
                var t = e.match(i);
                if (!t) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + e + '".');
                return {
                    itemName: t[3],
                    source: n(t[4]),
                    viewMapper: n(t[2] || t[1]),
                    modelMapper: n(t[1])
                }
            }
        }
    }]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", "$http", function(E, O, I, T, V, M, P, _) {
        var F = [9, 13, 27, 38, 40];
        return {
            require: "ngModel",
            link: function(o, a, e, s) {
                var l, n = o.$eval(e.typeaheadMinLength) || 1,
                    i = o.$eval(e.typeaheadWaitMs) || 0,
                    r = !1 !== o.$eval(e.typeaheadEditable),
                    c = O(e.typeaheadLoading).assign || angular.noop,
                    u = O(e.typeaheadOnSelect),
                    p = e.typeaheadInputFormatter ? O(e.typeaheadInputFormatter) : void 0,
                    f = !!e.typeaheadAppendToBody && o.$eval(e.typeaheadAppendToBody),
                    d = !1 !== o.$eval(e.typeaheadFocusFirst),
                    h = O(e.ngModel).assign,
                    v = P.parse(e.typeahead),
                    m = o.$new();
                o.$on("$destroy", function() {
                    m.$destroy()
                });
                var t = "typeahead-" + m.$id + "-" + Math.floor(1e4 * Math.random());
                a.attr({
                    "aria-autocomplete": "list",
                    "aria-expanded": !1,
                    "aria-owns": t
                });
                var g = angular.element("<div typeahead-popup></div>");
                g.attr({
                    id: t,
                    matches: "matches",
                    active: "activeIdx",
                    select: "select(activeIdx)",
                    query: "query",
                    position: "position"
                }), angular.isDefined(e.typeaheadTemplateUrl) && g.attr("template-url", e.typeaheadTemplateUrl);

                function y() {
                    m.matches = [], m.activeIdx = -1, a.attr("aria-expanded", !1)
                }

                function w(e) {
                    return t + "-option-" + e
                }
                m.$watch("activeIdx", function(e) {
                    e < 0 ? a.removeAttr("aria-activedescendant") : a.attr("aria-activedescendant", w(e))
                });
                var b = e.typeaheadMaxResults;
                $(window).width() < 768 && (b = e.typeaheadMaxResultsMobile);

                function S(r) {
                    if (e.typeaheadSourceUrl) _({
                        method: "POST",
                        url: e.typeaheadSourceUrl,
                        data: {
                            value: r,
                            MaxResults: b
                        }
                    }).then(function(e) {
                        o.jobTitles = e.data;
                        var i = {
                            $viewValue: r
                        };
                        c(o, !0), I.when(v.source(o, i)).then(function(e) {
                            var t = r === s.$viewValue;
                            if (t && l)
                                if (0 < e.length) {
                                    m.activeIdx = d ? 0 : -1;
                                    for (var n = m.matches.length = 0; n < e.length; n++) i[v.itemName] = e[n], m.matches.push({
                                        id: w(n),
                                        label: v.viewMapper(m, i),
                                        model: e[n]
                                    });
                                    m.query = r, m.position = f ? M.offset(a) : M.position(a), m.position.top = m.position.top + a.prop("offsetHeight"), a.attr("aria-expanded", !0)
                                } else y();
                            t && c(o, !1)
                        }, function() {
                            y(), c(o, !1)
                        })
                    });
                    else {
                        var n = {
                            $viewValue: r
                        };
                        I.when(v.source(m, n)).then(function(e) {
                            if (r === s.$viewValue)
                                if (0 < e.length) {
                                    m.activeIdx = 0;
                                    for (var t = m.matches.length = 0; t < e.length; t++) n[v.itemName] = e[t], m.matches.push({
                                        label: v.viewMapper(m, n),
                                        model: e[t]
                                    });
                                    m.query = r
                                } else y()
                        }, y)
                    }
                }
                var x;
                y(), m.query = void 0;

                function C() {
                    x && T.cancel(x)
                }
                s.$parsers.unshift(function(e) {
                    var t;
                    return l = !0, e && e.length >= n ? 0 < i ? (C(), t = e, x = T(function() {
                        S(t)
                    }, i)) : S(e) : (c(o, !1), C(), y()), r ? e : e ? void s.$setValidity("editable", !1) : (s.$setValidity("editable", !0), e)
                }), s.$formatters.push(function(e) {
                    var t, n = {};
                    return p ? (n.$model = e, p(o, n)) : (n[v.itemName] = e, t = v.viewMapper(o, n), n[v.itemName] = void 0, t !== v.viewMapper(o, n) ? t : e)
                }), m.select = function(e) {
                    var t, n, i = {};
                    i[v.itemName] = n = m.matches[e].model, t = v.modelMapper(o, i), h(o, t), s.$setValidity("editable", !0), u(o, {
                        $item: n,
                        $model: t,
                        $label: v.viewMapper(o, i)
                    }), y(), T(function() {
                        a[0].focus()
                    }, 0, !1)
                }, a.bind("keydown", function(e) {
                    0 !== m.matches.length && -1 !== F.indexOf(e.which) && (-1 != m.activeIdx || 13 !== e.which && 9 !== e.which) && (e.preventDefault(), 40 === e.which ? (m.activeIdx = (m.activeIdx + 1) % m.matches.length, m.$digest()) : 38 === e.which ? (m.activeIdx = (0 < m.activeIdx ? m.activeIdx : m.matches.length) - 1, m.$digest()) : 13 === e.which || 9 === e.which ? m.$apply(function() {
                        m.select(m.activeIdx)
                    }) : 27 === e.which && (e.stopPropagation(), y(), m.$digest()))
                }), a.bind("blur", function(e) {
                    l = !1
                });

                function A(e) {
                    a[0] !== e.target && (y(), m.$digest())
                }
                V.bind("click", A), o.$on("$destroy", function() {
                    V.unbind("click", A), f && k.remove()
                });
                var k = E(g)(m);
                f ? V.find("body").append(k) : a.after(k)
            }
        }
    }]).directive("typeaheadPopup", function() {
        return {
            restrict: "EA",
            scope: {
                matches: "=",
                query: "=",
                active: "=",
                position: "=",
                select: "&"
            },
            replace: !0,
            templateUrl: "template/typeahead/typeahead-popup.html",
            link: function(t, e, n) {
                t.templateUrl = n.templateUrl, t.isOpen = function() {
                    return 0 < t.matches.length
                }, t.isActive = function(e) {
                    return t.active == e
                }, t.selectActive = function(e) {
                    t.active = e
                }, t.selectMatch = function(e) {
                    t.select({
                        activeIdx: e
                    })
                }
            }
        }
    }).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function(r, o, a, s) {
        return {
            restrict: "EA",
            scope: {
                index: "=",
                match: "=",
                query: "="
            },
            link: function(t, n, e) {
                var i = s(e.templateUrl)(t.$parent) || "template/typeahead/typeahead-match.html";
                r.get(i, {
                    cache: o
                }).success(function(e) {
                    n.replaceWith(a(e.trim())(t))
                })
            }
        }
    }]).filter("typeaheadHighlight", function() {
        return function(e, t) {
            return t ? ("" + e).replace(new RegExp(t.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "gi"), "<strong>$&</strong>") : e
        }
    }), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function(e) {
        e.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
    }]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function(e) {
        e.put("template/typeahead/typeahead-popup.html", "<ul class=\"dropdown-menu ui-autocomplete\" ng-style=\"{display: isOpen()&&'block' || 'none', top: position.top+'px', left: position.left+'px'}\">\n" + '    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>')
    }]), angular.module("template/typeahead/custom-template.html", []).run(["$templateCache", function(e) {
        e.put("template/typeahead/custom-template.html", '<a><span bind-html-unsafe="match.label | typeaheadHighlight:query"></span></a>')
    }]);
//# sourceMappingURL=scripts.js.map