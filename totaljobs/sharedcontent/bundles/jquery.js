! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = t.length,
            i = st.type(t);
        return "function" !== i && !st.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }

    function n(t, e, i) {
        if (st.isFunction(e)) return st.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return st.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (dt.test(e)) return st.filter(e, t, i);
            e = st.filter(e, t)
        }
        return st.grep(t, function(t) {
            return st.inArray(t, e) >= 0 !== i
        })
    }

    function s(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function o(t) {
        var e = _t[t] = {};
        return st.each(t.match(yt) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function a() {
        ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1)) : (ft.detachEvent("onreadystatechange", r), t.detachEvent("onload", r))
    }

    function r() {
        (ft.addEventListener || "load" === event.type || "complete" === ft.readyState) && (a(), st.ready())
    }

    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Dt, "-$1").toLowerCase();
            if (i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Ct.test(i) ? st.parseJSON(i) : i)
                } catch (s) {}
                st.data(t, e, i)
            } else i = void 0
        }
        return i
    }

    function h(t) {
        var e;
        for (e in t)
            if (("data" !== e || !st.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function c(t, e, i, n) {
        if (st.acceptData(t)) {
            var s, o, a = st.expando,
                r = t.nodeType,
                l = r ? st.cache : t,
                h = r ? t[a] : t[a] && a;
            if (h && l[h] && (n || l[h].data) || void 0 !== i || "string" != typeof e) return h || (h = r ? t[a] = X.pop() || st.guid++ : a), l[h] || (l[h] = r ? {} : {
                toJSON: st.noop
            }), "object" != typeof e && "function" != typeof e || (n ? l[h] = st.extend(l[h], e) : l[h].data = st.extend(l[h].data, e)), o = l[h], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[st.camelCase(e)] = i), "string" == typeof e ? (s = o[e], null == s && (s = o[st.camelCase(e)])) : s = o, s
        }
    }

    function u(t, e, i) {
        if (st.acceptData(t)) {
            var n, s, o = t.nodeType,
                a = o ? st.cache : t,
                r = o ? t[st.expando] : st.expando;
            if (a[r]) {
                if (e && (n = i ? a[r] : a[r].data)) {
                    st.isArray(e) ? e = e.concat(st.map(e, st.camelCase)) : e in n ? e = [e] : (e = st.camelCase(e), e = e in n ? [e] : e.split(" ")), s = e.length;
                    for (; s--;) delete n[e[s]];
                    if (i ? !h(n) : !st.isEmptyObject(n)) return
                }(i || (delete a[r].data, h(a[r]))) && (o ? st.cleanData([t], !0) : it.deleteExpando || a != a.window ? delete a[r] : a[r] = null)
            }
        }
    }

    function d() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return ft.activeElement
        } catch (t) {}
    }

    function g(t) {
        var e = Wt.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i
    }

    function m(t, e) {
        var i, n, s = 0,
            o = typeof t.getElementsByTagName !== kt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== kt ? t.querySelectorAll(e || "*") : void 0;
        if (!o)
            for (o = [], i = t.childNodes || t; null != (n = i[s]); s++) !e || st.nodeName(n, e) ? o.push(n) : st.merge(o, m(n, e));
        return void 0 === e || e && st.nodeName(t, e) ? st.merge([t], o) : o
    }

    function v(t) {
        Nt.test(t.type) && (t.defaultChecked = t.checked)
    }

    function b(t, e) {
        return st.nodeName(t, "table") && st.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function y(t) {
        return t.type = (null !== st.find.attr(t, "type")) + "/" + t.type, t
    }

    function _(t) {
        var e = Kt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function w(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) st._data(i, "globalEval", !e || st._data(e[n], "globalEval"))
    }

    function x(t, e) {
        if (1 === e.nodeType && st.hasData(t)) {
            var i, n, s, o = st._data(t),
                a = st._data(e, o),
                r = o.events;
            if (r) {
                delete a.handle, a.events = {};
                for (i in r)
                    for (n = 0, s = r[i].length; n < s; n++) st.event.add(e, i, r[i][n])
            }
            a.data && (a.data = st.extend({}, a.data))
        }
    }

    function k(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !it.noCloneEvent && e[st.expando]) {
                s = st._data(e);
                for (n in s.events) st.removeEvent(e, n, s.handle);
                e.removeAttribute(st.expando)
            }
            "script" === i && e.text !== t.text ? (y(e).text = t.text, _(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), it.html5Clone && t.innerHTML && !st.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Nt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }
    }

    function C(e, i) {
        var n, s = st(i.createElement(e)).appendTo(i.body),
            o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : st.css(s[0], "display");
        return s.detach(), o
    }

    function D(t) {
        var e = ft,
            i = Zt[t];
        return i || (i = C(t, e), "none" !== i && i || (Jt = (Jt || st("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Jt[0].contentWindow || Jt[0].contentDocument).document, e.write(), e.close(), i = C(t, e), Jt.detach()), Zt[t] = i), i
    }

    function T(t, e) {
        return {
            get: function() {
                var i = t();
                if (null != i) return i ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function S(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = de.length; s--;)
            if (e = de[s] + i, e in t) return e;
        return n
    }

    function I(t, e) {
        for (var i, n, s, o = [], a = 0, r = t.length; a < r; a++) n = t[a], n.style && (o[a] = st._data(n, "olddisplay"), i = n.style.display, e ? (o[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && It(n) && (o[a] = st._data(n, "olddisplay", D(n.nodeName)))) : (s = It(n), (i && "none" !== i || !s) && st._data(n, "olddisplay", s ? i : st.css(n, "display"))));
        for (a = 0; a < r; a++) n = t[a], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[a] || "" : "none"));
        return t
    }

    function M(t, e, i) {
        var n = le.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function N(t, e, i, n, s) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; o < 4; o += 2) "margin" === i && (a += st.css(t, i + St[o], !0, s)), n ? ("content" === i && (a -= st.css(t, "padding" + St[o], !0, s)), "margin" !== i && (a -= st.css(t, "border" + St[o] + "Width", !0, s))) : (a += st.css(t, "padding" + St[o], !0, s), "padding" !== i && (a += st.css(t, "border" + St[o] + "Width", !0, s)));
        return a
    }

    function P(t, e, i) {
        var n = !0,
            s = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = te(t),
            a = it.boxSizing && "border-box" === st.css(t, "boxSizing", !1, o);
        if (s <= 0 || null == s) {
            if (s = ee(t, e, o), (s < 0 || null == s) && (s = t.style[e]), ne.test(s)) return s;
            n = a && (it.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + N(t, e, i || (a ? "border" : "content"), n, o) + "px"
    }

    function E(t, e, i, n, s) {
        return new E.prototype.init(t, e, i, n, s)
    }

    function A() {
        return setTimeout(function() {
            pe = void 0
        }), pe = st.now()
    }

    function H(t, e) {
        var i, n = {
                height: t
            },
            s = 0;
        for (e = e ? 1 : 0; s < 4; s += 2 - e) i = St[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function z(t, e, i) {
        for (var n, s = (ye[e] || []).concat(ye["*"]), o = 0, a = s.length; o < a; o++)
            if (n = s[o].call(i, e, t)) return n
    }

    function W(t, e, i) {
        var n, s, o, a, r, l, h, c, u = this,
            d = {},
            p = t.style,
            f = t.nodeType && It(t),
            g = st._data(t, "fxshow");
        i.queue || (r = st._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function() {
            r.unqueued || l()
        }), r.unqueued++, u.always(function() {
            u.always(function() {
                r.unqueued--, st.queue(t, "fx").length || r.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], h = st.css(t, "display"), c = "none" === h ? st._data(t, "olddisplay") || D(t.nodeName) : h, "inline" === c && "none" === st.css(t, "float") && (it.inlineBlockNeedsLayout && "inline" !== D(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", it.shrinkWrapBlocks() || u.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (s = e[n], ge.exec(s)) {
                if (delete e[n], o = o || "toggle" === s, s === (f ? "hide" : "show")) {
                    if ("show" !== s || !g || void 0 === g[n]) continue;
                    f = !0
                }
                d[n] = g && g[n] || st.style(t, n)
            } else h = void 0;
        if (st.isEmptyObject(d)) "inline" === ("none" === h ? D(t.nodeName) : h) && (p.display = h);
        else {
            g ? "hidden" in g && (f = g.hidden) : g = st._data(t, "fxshow", {}), o && (g.hidden = !f), f ? st(t).show() : u.done(function() {
                st(t).hide()
            }), u.done(function() {
                var e;
                st._removeData(t, "fxshow");
                for (e in d) st.style(t, e, d[e])
            });
            for (n in d) a = z(f ? g[n] : 0, n, u), n in g || (g[n] = a.start, f && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function O(t, e) {
        var i, n, s, o, a;
        for (i in t)
            if (n = st.camelCase(i), s = e[n], o = t[i], st.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), a = st.cssHooks[n], a && "expand" in a) {
                o = a.expand(o), delete t[n];
                for (i in o) i in t || (t[i] = o[i], e[i] = s)
            } else e[n] = s
    }

    function j(t, e, i) {
        var n, s, o = 0,
            a = be.length,
            r = st.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = pe || A(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, o = 1 - n, a = 0, l = h.tweens.length; a < l; a++) h.tweens[a].run(o);
                return r.notifyWith(t, [h, o, i]), o < 1 && l ? i : (r.resolveWith(t, [h]), !1)
            },
            h = r.promise({
                elem: t,
                props: st.extend({}, e),
                opts: st.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: pe || A(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = st.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? h.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < n; i++) h.tweens[i].run(1);
                    return e ? r.resolveWith(t, [h, e]) : r.rejectWith(t, [h, e]), this
                }
            }),
            c = h.props;
        for (O(c, h.opts.specialEasing); o < a; o++)
            if (n = be[o].call(h, t, c, h.opts)) return n;
        return st.map(c, z, h), st.isFunction(h.opts.start) && h.opts.start.call(t, h), st.fx.timer(st.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    function L(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
                o = e.toLowerCase().match(yt) || [];
            if (st.isFunction(i))
                for (; n = o[s++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function F(t, e, i, n) {
        function s(r) {
            var l;
            return o[r] = !0, st.each(t[r] || [], function(t, r) {
                var h = r(e, i, n);
                return "string" != typeof h || a || o[h] ? a ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), !1)
            }), l
        }
        var o = {},
            a = t === qe;
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }

    function R(t, e) {
        var i, n, s = st.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
        return i && st.extend(!0, t, i), t
    }

    function B(t, e, i) {
        for (var n, s, o, a, r = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s)
            for (a in r)
                if (r[a] && r[a].test(s)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in i) o = l[0];
        else {
            for (a in i) {
                if (!l[0] || t.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                n || (n = a)
            }
            o = o || n
        }
        if (o) return o !== l[0] && l.unshift(o), i[o]
    }

    function q(t, e, i, n) {
        var s, o, a, r, l, h = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (a in t.converters) h[a.toLowerCase()] = t.converters[a];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = h[l + " " + o] || h["* " + o], !a)
                for (s in h)
                    if (r = s.split(" "), r[1] === o && (a = h[l + " " + r[0]] || h["* " + r[0]])) {
                        a === !0 ? a = h[s] : h[s] !== !0 && (o = r[0], c.unshift(r[1]));
                        break
                    }
            if (a !== !0)
                if (a && t["throws"]) e = a(e);
                else try {
                    e = a(e)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: a ? u : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function Y(t, e, i, n) {
        var s;
        if (st.isArray(e)) st.each(e, function(e, s) {
            i || Ke.test(t) ? n(t, s) : Y(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
        });
        else if (i || "object" !== st.type(e)) n(t, e);
        else
            for (s in e) Y(t + "[" + s + "]", e[s], i, n)
    }

    function $() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function U() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function K(t) {
        return st.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var X = [],
        V = X.slice,
        Q = X.concat,
        G = X.push,
        J = X.indexOf,
        Z = {},
        tt = Z.toString,
        et = Z.hasOwnProperty,
        it = {},
        nt = "1.11.1",
        st = function(t, e) {
            return new st.fn.init(t, e)
        },
        ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        at = /^-ms-/,
        rt = /-([\da-z])/gi,
        lt = function(t, e) {
            return e.toUpperCase()
        };
    st.fn = st.prototype = {
        jquery: nt,
        constructor: st,
        selector: "",
        length: 0,
        toArray: function() {
            return V.call(this)
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : V.call(this)
        },
        pushStack: function(t) {
            var e = st.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return st.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(st.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(V.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: X.sort,
        splice: X.splice
    }, st.extend = st.fn.extend = function() {
        var t, e, i, n, s, o, a = arguments[0] || {},
            r = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof a && (h = a, a = arguments[r] || {}, r++), "object" == typeof a || st.isFunction(a) || (a = {}), r === l && (a = this, r--); r < l; r++)
            if (null != (s = arguments[r]))
                for (n in s) t = a[n], i = s[n], a !== i && (h && i && (st.isPlainObject(i) || (e = st.isArray(i))) ? (e ? (e = !1, o = t && st.isArray(t) ? t : []) : o = t && st.isPlainObject(t) ? t : {}, a[n] = st.extend(h, o, i)) : void 0 !== i && (a[n] = i));
        return a
    }, st.extend({
        expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === st.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === st.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !st.isArray(t) && t - parseFloat(t) >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== st.type(t) || t.nodeType || st.isWindow(t)) return !1;
            try {
                if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (it.ownLast)
                for (e in t) return et.call(t, e);
            for (e in t);
            return void 0 === e || et.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[tt.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && st.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(at, "ms-").replace(rt, lt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var s, o = 0,
                a = t.length,
                r = i(t);
            if (n) {
                if (r)
                    for (; o < a && (s = e.apply(t[o], n), s !== !1); o++);
                else
                    for (o in t)
                        if (s = e.apply(t[o], n), s === !1) break
            } else if (r)
                for (; o < a && (s = e.call(t[o], o, t[o]), s !== !1); o++);
            else
                for (o in t)
                    if (s = e.call(t[o], o, t[o]), s === !1) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(ot, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? st.merge(n, "string" == typeof t ? [t] : t) : G.call(n, t)), n
        },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (J) return J.call(e, t, i);
                for (n = e.length, i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
                    if (i in e && e[i] === t) return i
            }
            return -1
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i;) t[s++] = e[n++];
            if (i !== i)
                for (; void 0 !== e[n];) t[s++] = e[n++];
            return t.length = s, t
        },
        grep: function(t, e, i) {
            for (var n, s = [], o = 0, a = t.length, r = !i; o < a; o++) n = !e(t[o], o), n !== r && s.push(t[o]);
            return s
        },
        map: function(t, e, n) {
            var s, o = 0,
                a = t.length,
                r = i(t),
                l = [];
            if (r)
                for (; o < a; o++) s = e(t[o], o, n), null != s && l.push(s);
            else
                for (o in t) s = e(t[o], o, n), null != s && l.push(s);
            return Q.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            if ("string" == typeof e && (s = t[e], e = t, t = s), st.isFunction(t)) return i = V.call(arguments, 2), n = function() {
                return t.apply(e || this, i.concat(V.call(arguments)))
            }, n.guid = t.guid = t.guid || st.guid++, n
        },
        now: function() {
            return +new Date
        },
        support: it
    }), st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ht = function(t) {
        function e(t, e, i, n) {
            var s, o, a, r, l, h, u, p, f, g;
            if ((e ? e.ownerDocument || e : F) !== E && P(e), e = e || E, i = i || [], !t || "string" != typeof t) return i;
            if (1 !== (r = e.nodeType) && 9 !== r) return [];
            if (H && !n) {
                if (s = bt.exec(t))
                    if (a = s[1]) {
                        if (9 === r) {
                            if (o = e.getElementById(a), !o || !o.parentNode) return i;
                            if (o.id === a) return i.push(o), i
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && j(e, o) && o.id === a) return i.push(o), i
                    } else {
                        if (s[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
                        if ((a = s[3]) && w.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(a)), i
                    }
                if (w.qsa && (!z || !z.test(t))) {
                    if (p = u = L, f = e, g = 9 === r && t, 1 === r && "object" !== e.nodeName.toLowerCase()) {
                        for (h = D(t), (u = e.getAttribute("id")) ? p = u.replace(_t, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = h.length; l--;) h[l] = p + d(h[l]);
                        f = yt.test(t) && c(e.parentNode) || e, g = h.join(",")
                    }
                    if (g) try {
                        return Z.apply(i, f.querySelectorAll(g)), i
                    } catch (m) {} finally {
                        u || e.removeAttribute("id")
                    }
                }
            }
            return S(t.replace(lt, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[L] = !0, t
        }

        function s(t) {
            var e = E.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) x.attrHandle[i[n]] = e
        }

        function a(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function r(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function h(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var s, o = t([], i.length, e), a = o.length; a--;) i[s = o[a]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function c(t) {
            return t && typeof t.getElementsByTagName !== K && t
        }

        function u() {}

        function d(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function p(t, e, i) {
            var n = e.dir,
                s = i && "parentNode" === n,
                o = B++;
            return e.first ? function(e, i, o) {
                for (; e = e[n];)
                    if (1 === e.nodeType || s) return t(e, i, o)
            } : function(e, i, a) {
                var r, l, h = [R, o];
                if (a) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || s) && t(e, i, a)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) {
                            if (l = e[L] || (e[L] = {}), (r = l[n]) && r[0] === R && r[1] === o) return h[2] = r[2];
                            if (l[n] = h, h[2] = t(e, i, a)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var s = t.length; s--;)
                    if (!t[s](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function g(t, i, n) {
            for (var s = 0, o = i.length; s < o; s++) e(t, i[s], n);
            return n
        }

        function m(t, e, i, n, s) {
            for (var o, a = [], r = 0, l = t.length, h = null != e; r < l; r++)(o = t[r]) && (i && !i(o, n, s) || (a.push(o), h && e.push(r)));
            return a
        }

        function v(t, e, i, s, o, a) {
            return s && !s[L] && (s = v(s)), o && !o[L] && (o = v(o, a)), n(function(n, a, r, l) {
                var h, c, u, d = [],
                    p = [],
                    f = a.length,
                    v = n || g(e || "*", r.nodeType ? [r] : r, []),
                    b = !t || !n && e ? v : m(v, d, t, r, l),
                    y = i ? o || (n ? t : f || s) ? [] : a : b;
                if (i && i(b, y, r, l), s)
                    for (h = m(y, p), s(h, [], r, l), c = h.length; c--;)(u = h[c]) && (y[p[c]] = !(b[p[c]] = u));
                if (n) {
                    if (o || t) {
                        if (o) {
                            for (h = [], c = y.length; c--;)(u = y[c]) && h.push(b[c] = u);
                            o(null, y = [], h, l)
                        }
                        for (c = y.length; c--;)(u = y[c]) && (h = o ? et.call(n, u) : d[c]) > -1 && (n[h] = !(a[h] = u))
                    }
                } else y = m(y === a ? y.splice(f, y.length) : y), o ? o(null, a, y, l) : Z.apply(a, y)
            })
        }

        function b(t) {
            for (var e, i, n, s = t.length, o = x.relative[t[0].type], a = o || x.relative[" "], r = o ? 1 : 0, l = p(function(t) {
                    return t === e
                }, a, !0), h = p(function(t) {
                    return et.call(e, t) > -1
                }, a, !0), c = [function(t, i, n) {
                    return !o && (n || i !== I) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n))
                }]; r < s; r++)
                if (i = x.relative[t[r].type]) c = [p(f(c), i)];
                else {
                    if (i = x.filter[t[r].type].apply(null, t[r].matches), i[L]) {
                        for (n = ++r; n < s && !x.relative[t[n].type]; n++);
                        return v(r > 1 && f(c), r > 1 && d(t.slice(0, r - 1).concat({
                            value: " " === t[r - 2].type ? "*" : ""
                        })).replace(lt, "$1"), i, r < n && b(t.slice(r, n)), n < s && b(t = t.slice(n)), n < s && d(t))
                    }
                    c.push(i)
                }
            return f(c)
        }

        function y(t, i) {
            var s = i.length > 0,
                o = t.length > 0,
                a = function(n, a, r, l, h) {
                    var c, u, d, p = 0,
                        f = "0",
                        g = n && [],
                        v = [],
                        b = I,
                        y = n || o && x.find.TAG("*", h),
                        _ = R += null == b ? 1 : Math.random() || .1,
                        w = y.length;
                    for (h && (I = a !== E && a); f !== w && null != (c = y[f]); f++) {
                        if (o && c) {
                            for (u = 0; d = t[u++];)
                                if (d(c, a, r)) {
                                    l.push(c);
                                    break
                                }
                            h && (R = _)
                        }
                        s && ((c = !d && c) && p--, n && g.push(c))
                    }
                    if (p += f, s && f !== p) {
                        for (u = 0; d = i[u++];) d(g, v, a, r);
                        if (n) {
                            if (p > 0)
                                for (; f--;) g[f] || v[f] || (v[f] = G.call(l));
                            v = m(v)
                        }
                        Z.apply(l, v), h && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return h && (R = _, I = b), g
                };
            return s ? n(a) : a
        }
        var _, w, x, k, C, D, T, S, I, M, N, P, E, A, H, z, W, O, j, L = "sizzle" + -new Date,
            F = t.document,
            R = 0,
            B = 0,
            q = i(),
            Y = i(),
            $ = i(),
            U = function(t, e) {
                return t === e && (N = !0), 0
            },
            K = "undefined",
            X = 1 << 31,
            V = {}.hasOwnProperty,
            Q = [],
            G = Q.pop,
            J = Q.push,
            Z = Q.push,
            tt = Q.slice,
            et = Q.indexOf || function(t) {
                for (var e = 0, i = this.length; e < i; e++)
                    if (this[e] === t) return e;
                return -1
            },
            it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ot = st.replace("w", "w#"),
            at = "\\[" + nt + "*(" + st + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
            rt = ":(" + st + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|.*)\\)|)",
            lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            ht = new RegExp("^" + nt + "*," + nt + "*"),
            ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            dt = new RegExp(rt),
            pt = new RegExp("^" + ot + "$"),
            ft = {
                ID: new RegExp("^#(" + st + ")"),
                CLASS: new RegExp("^\\.(" + st + ")"),
                TAG: new RegExp("^(" + st.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + at),
                PSEUDO: new RegExp("^" + rt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + it + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            gt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            _t = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            xt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            };
        try {
            Z.apply(Q = tt.call(F.childNodes), F.childNodes), Q[F.childNodes.length].nodeType
        } catch (kt) {
            Z = {
                apply: Q.length ? function(t, e) {
                    J.apply(t, tt.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        w = e.support = {}, C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, P = e.setDocument = function(t) {
            var e, i = t ? t.ownerDocument || t : F,
                n = i.defaultView;
            return i !== E && 9 === i.nodeType && i.documentElement ? (E = i, A = i.documentElement, H = !C(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
                P()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                P()
            })), w.attributes = s(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = s(function(t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = vt.test(i.getElementsByClassName) && s(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), w.getById = s(function(t) {
                return A.appendChild(t).id = L, !i.getElementsByName || !i.getElementsByName(L).length
            }), w.getById ? (x.find.ID = function(t, e) {
                if (typeof e.getElementById !== K && H) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, x.filter.ID = function(t) {
                var e = t.replace(wt, xt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete x.find.ID, x.filter.ID = function(t) {
                var e = t.replace(wt, xt);
                return function(t) {
                    var i = typeof t.getAttributeNode !== K && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), x.find.TAG = w.getElementsByTagName ? function(t, e) {
                if (typeof e.getElementsByTagName !== K) return e.getElementsByTagName(t)
            } : function(t, e) {
                var i, n = [],
                    s = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }, x.find.CLASS = w.getElementsByClassName && function(t, e) {
                if (typeof e.getElementsByClassName !== K && H) return e.getElementsByClassName(t)
            }, W = [], z = [], (w.qsa = vt.test(i.querySelectorAll)) && (s(function(t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && z.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || z.push("\\[" + nt + "*(?:value|" + it + ")"), t.querySelectorAll(":checked").length || z.push(":checked")
            }), s(function(t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && z.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), z.push(",.*:")
            })), (w.matchesSelector = vt.test(O = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && s(function(t) {
                w.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), W.push("!=", rt)
            }), z = z.length && new RegExp(z.join("|")), W = W.length && new RegExp(W.join("|")), e = vt.test(A.compareDocumentPosition), j = e || vt.test(A.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function(t, e) {
                if (t === e) return N = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === F && j(F, t) ? -1 : e === i || e.ownerDocument === F && j(F, e) ? 1 : M ? et.call(M, t) - et.call(M, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return N = !0, 0;
                var n, s = 0,
                    o = t.parentNode,
                    r = e.parentNode,
                    l = [t],
                    h = [e];
                if (!o || !r) return t === i ? -1 : e === i ? 1 : o ? -1 : r ? 1 : M ? et.call(M, t) - et.call(M, e) : 0;
                if (o === r) return a(t, e);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (n = e; n = n.parentNode;) h.unshift(n);
                for (; l[s] === h[s];) s++;
                return s ? a(l[s], h[s]) : l[s] === F ? -1 : h[s] === F ? 1 : 0
            }, i) : E
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== E && P(t), i = i.replace(ut, "='$1']"), w.matchesSelector && H && (!W || !W.test(i)) && (!z || !z.test(i))) try {
                var n = O.call(t, i);
                if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (s) {}
            return e(i, E, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== E && P(t), j(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== E && P(t);
            var i = x.attrHandle[e.toLowerCase()],
                n = i && V.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !H) : void 0;
            return void 0 !== n ? n : w.attributes || !H ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                s = 0;
            if (N = !w.detectDuplicates, M = !w.sortStable && t.slice(0), t.sort(U), N) {
                for (; e = t[s++];) e === t[s] && (n = i.push(s));
                for (; n--;) t.splice(i[n], 1)
            }
            return M = null, t
        }, k = e.getText = function(t) {
            var e, i = "",
                n = 0,
                s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += k(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else
                for (; e = t[n++];) i += k(e);
            return i
        }, x = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && dt.test(i) && (e = D(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(wt, xt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = q[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && q(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== K && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(s) {
                        var o = e.attr(s, t);
                        return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, e, i, n, s) {
                    var o = "nth" !== t.slice(0, 3),
                        a = "last" !== t.slice(-4),
                        r = "of-type" === e;
                    return 1 === n && 0 === s ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var h, c, u, d, p, f, g = o !== a ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = r && e.nodeName.toLowerCase(),
                            b = !l && !r;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (u = e; u = u[g];)
                                        if (r ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? m.firstChild : m.lastChild], a && b) {
                                for (c = m[L] || (m[L] = {}), h = c[t] || [], p = h[0] === R && h[1], d = h[0] === R && h[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (d = p = 0) || f.pop();)
                                    if (1 === u.nodeType && ++d && u === e) {
                                        c[t] = [R, p, d];
                                        break
                                    }
                            } else if (b && (h = (e[L] || (e[L] = {}))[t]) && h[0] === R) d = h[1];
                            else
                                for (;
                                    (u = ++p && u && u[g] || (d = p = 0) || f.pop()) && ((r ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (b && ((u[L] || (u[L] = {}))[t] = [R, d]), u !== e)););
                            return d -= s, d === n || d % n === 0 && d / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var s, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[L] ? o(i) : o.length > 1 ? (s = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, s = o(t, i), a = s.length; a--;) n = et.call(t, s[a]), t[n] = !(e[n] = s[a])
                    }) : function(t) {
                        return o(t, 0, s)
                    }) : o
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        s = T(t.replace(lt, "$1"));
                    return s[L] ? n(function(t, e, i, n) {
                        for (var o, a = s(t, null, n, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
                    }) : function(t, n, o) {
                        return e[0] = t, s(e, null, o, i), !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                    }
                }),
                lang: n(function(t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = H ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === A
                },
                focus: function(t) {
                    return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !x.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return gt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: h(function() {
                    return [0]
                }),
                last: h(function(t, e) {
                    return [e - 1]
                }),
                eq: h(function(t, e, i) {
                    return [i < 0 ? i + e : i]
                }),
                even: h(function(t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t
                }),
                odd: h(function(t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t
                }),
                lt: h(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: h(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (_ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[_] = r(_);
        for (_ in {
                submit: !0,
                reset: !0
            }) x.pseudos[_] = l(_);
        return u.prototype = x.filters = x.pseudos, x.setFilters = new u, D = e.tokenize = function(t, i) {
            var n, s, o, a, r, l, h, c = Y[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (r = t, l = [], h = x.preFilter; r;) {
                n && !(s = ht.exec(r)) || (s && (r = r.slice(s[0].length) || r), l.push(o = [])), n = !1, (s = ct.exec(r)) && (n = s.shift(), o.push({
                    value: n,
                    type: s[0].replace(lt, " ")
                }), r = r.slice(n.length));
                for (a in x.filter) !(s = ft[a].exec(r)) || h[a] && !(s = h[a](s)) || (n = s.shift(), o.push({
                    value: n,
                    type: a,
                    matches: s
                }), r = r.slice(n.length));
                if (!n) break
            }
            return i ? r.length : r ? e.error(t) : Y(t, l).slice(0)
        }, T = e.compile = function(t, e) {
            var i, n = [],
                s = [],
                o = $[t + " "];
            if (!o) {
                for (e || (e = D(t)), i = e.length; i--;) o = b(e[i]), o[L] ? n.push(o) : s.push(o);
                o = $(t, y(s, n)), o.selector = t
            }
            return o
        }, S = e.select = function(t, e, i, n) {
            var s, o, a, r, l, h = "function" == typeof t && t,
                u = !n && D(t = h.selector || t);
            if (i = i || [], 1 === u.length) {
                if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === e.nodeType && H && x.relative[o[1].type]) {
                    if (e = (x.find.ID(a.matches[0].replace(wt, xt), e) || [])[0], !e) return i;
                    h && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (s = ft.needsContext.test(t) ? 0 : o.length; s-- && (a = o[s], !x.relative[r = a.type]);)
                    if ((l = x.find[r]) && (n = l(a.matches[0].replace(wt, xt), yt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(s, 1), t = n.length && d(o), !t) return Z.apply(i, n), i;
                        break
                    }
            }
            return (h || T(t, u))(n, e, !H, i, yt.test(t) && c(e.parentNode) || e), i
        }, w.sortStable = L.split("").sort(U).join("") === L, w.detectDuplicates = !!N, P(), w.sortDetached = s(function(t) {
            return 1 & t.compareDocumentPosition(E.createElement("div"))
        }), s(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && s(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), s(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(it, function(t, e, i) {
            var n;
            if (!i) return t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    st.find = ht, st.expr = ht.selectors, st.expr[":"] = st.expr.pseudos, st.unique = ht.uniqueSort, st.text = ht.getText, st.isXMLDoc = ht.isXML, st.contains = ht.contains;
    var ct = st.expr.match.needsContext,
        ut = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        dt = /^.[^:#\[\.,]*$/;
    st.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? st.find.matchesSelector(n, t) ? [n] : [] : st.find.matches(t, st.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, st.fn.extend({
        find: function(t) {
            var e, i = [],
                n = this,
                s = n.length;
            if ("string" != typeof t) return this.pushStack(st(t).filter(function() {
                for (e = 0; e < s; e++)
                    if (st.contains(n[e], this)) return !0
            }));
            for (e = 0; e < s; e++) st.find(t, n[e], i);
            return i = this.pushStack(s > 1 ? st.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && ct.test(t) ? st(t) : t || [], !1).length
        }
    });
    var pt, ft = t.document,
        gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        mt = st.fn.init = function(t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : gt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || pt).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof st ? e[0] : e, st.merge(this, st.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : ft, !0)), ut.test(i[1]) && st.isPlainObject(e))
                        for (i in e) st.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                if (n = ft.getElementById(i[2]), n && n.parentNode) {
                    if (n.id !== i[2]) return pt.find(t);
                    this.length = 1, this[0] = n
                }
                return this.context = ft, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : st.isFunction(t) ? "undefined" != typeof pt.ready ? pt.ready(t) : t(st) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), st.makeArray(t, this))
        };
    mt.prototype = st.fn, pt = st(ft);
    var vt = /^(?:parents|prev(?:Until|All))/,
        bt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    st.extend({
        dir: function(t, e, i) {
            for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !st(s).is(i));) 1 === s.nodeType && n.push(s), s = s[e];
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), st.fn.extend({
        has: function(t) {
            var e, i = st(t, this),
                n = i.length;
            return this.filter(function() {
                for (e = 0; e < n; e++)
                    if (st.contains(this, i[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, s = this.length, o = [], a = ct.test(t) || "string" != typeof t ? st(t, e || this.context) : 0; n < s; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && st.find.matchesSelector(i, t))) {
                        o.push(i);
                        break
                    }
            return this.pushStack(o.length > 1 ? st.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? st.inArray(this[0], st(t)) : st.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(st.unique(st.merge(this.get(), st(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), st.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return st.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return st.dir(t, "parentNode", i)
        },
        next: function(t) {
            return s(t, "nextSibling")
        },
        prev: function(t) {
            return s(t, "previousSibling")
        },
        nextAll: function(t) {
            return st.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return st.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return st.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return st.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return st.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return st.sibling(t.firstChild)
        },
        contents: function(t) {
            return st.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : st.merge([], t.childNodes)
        }
    }, function(t, e) {
        st.fn[t] = function(i, n) {
            var s = st.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = st.filter(n, s)), this.length > 1 && (bt[t] || (s = st.unique(s)), vt.test(t) && (s = s.reverse())), this.pushStack(s)
        }
    });
    var yt = /\S+/g,
        _t = {};
    st.Callbacks = function(t) {
        t = "string" == typeof t ? _t[t] || o(t) : st.extend({}, t);
        var e, i, n, s, a, r, l = [],
            h = !t.once && [],
            c = function(o) {
                for (i = t.memory && o, n = !0, a = r || 0, r = 0, s = l.length, e = !0; l && a < s; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        i = !1;
                        break
                    }
                e = !1, l && (h ? h.length && c(h.shift()) : i ? l = [] : u.disable())
            },
            u = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function o(e) {
                            st.each(e, function(e, i) {
                                var n = st.type(i);
                                "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                            })
                        }(arguments), e ? s = l.length : i && (r = n, c(i))
                    }
                    return this
                },
                remove: function() {
                    return l && st.each(arguments, function(t, i) {
                        for (var n;
                            (n = st.inArray(i, l, n)) > -1;) l.splice(n, 1), e && (n <= s && s--, n <= a && a--)
                    }), this
                },
                has: function(t) {
                    return t ? st.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = h = i = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return h = void 0, i || u.disable(), this
                },
                locked: function() {
                    return !h
                },
                fireWith: function(t, i) {
                    return !l || n && !h || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? h.push(i) : c(i)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return u
    }, st.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", st.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", st.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", st.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return st.Deferred(function(i) {
                            st.each(e, function(e, o) {
                                var a = st.isFunction(t[e]) && t[e];
                                s[o[1]](function() {
                                    var t = a && a.apply(this, arguments);
                                    t && st.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? st.extend(t, n) : n
                    }
                },
                s = {};
            return n.pipe = n.then, st.each(e, function(t, o) {
                var a = o[2],
                    r = o[3];
                n[o[1]] = a.add, r && a.add(function() {
                    i = r
                }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() {
                    return s[o[0] + "With"](this === s ? n : this, arguments), this
                }, s[o[0] + "With"] = a.fireWith
            }), n.promise(s), t && t.call(s, s), s
        },
        when: function(t) {
            var e, i, n, s = 0,
                o = V.call(arguments),
                a = o.length,
                r = 1 !== a || t && st.isFunction(t.promise) ? a : 0,
                l = 1 === r ? t : st.Deferred(),
                h = function(t, i, n) {
                    return function(s) {
                        i[t] = this, n[t] = arguments.length > 1 ? V.call(arguments) : s, n === e ? l.notifyWith(i, n) : --r || l.resolveWith(i, n)
                    }
                };
            if (a > 1)
                for (e = new Array(a), i = new Array(a), n = new Array(a); s < a; s++) o[s] && st.isFunction(o[s].promise) ? o[s].promise().done(h(s, n, o)).fail(l.reject).progress(h(s, i, e)) : --r;
            return r || l.resolveWith(n, o), l.promise()
        }
    });
    var wt;
    st.fn.ready = function(t) {
        return st.ready.promise().done(t), this
    }, st.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? st.readyWait++ : st.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--st.readyWait : !st.isReady) {
                if (!ft.body) return setTimeout(st.ready);
                st.isReady = !0, t !== !0 && --st.readyWait > 0 || (wt.resolveWith(ft, [st]), st.fn.triggerHandler && (st(ft).triggerHandler("ready"), st(ft).off("ready")))
            }
        }
    }), st.ready.promise = function(e) {
        if (!wt)
            if (wt = st.Deferred(), "complete" === ft.readyState) setTimeout(st.ready);
            else if (ft.addEventListener) ft.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1);
        else {
            ft.attachEvent("onreadystatechange", r), t.attachEvent("onload", r);
            var i = !1;
            try {
                i = null == t.frameElement && ft.documentElement
            } catch (n) {}
            i && i.doScroll && ! function s() {
                if (!st.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (t) {
                        return setTimeout(s, 50)
                    }
                    a(), st.ready()
                }
            }()
        }
        return wt.promise(e)
    };
    var xt, kt = "undefined";
    for (xt in st(it)) break;
    it.ownLast = "0" !== xt, it.inlineBlockNeedsLayout = !1, st(function() {
            var t, e, i, n;
            i = ft.getElementsByTagName("body")[0], i && i.style && (e = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== kt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", it.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
        }),
        function() {
            var t = ft.createElement("div");
            if (null == it.deleteExpando) {
                it.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    it.deleteExpando = !1
                }
            }
            t = null
        }(), st.acceptData = function(t) {
            var e = st.noData[(t.nodeName + " ").toLowerCase()],
                i = +t.nodeType || 1;
            return (1 === i || 9 === i) && (!e || e !== !0 && t.getAttribute("classid") === e)
        };
    var Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Dt = /([A-Z])/g;
    st.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? st.cache[t[st.expando]] : t[st.expando], !!t && !h(t)
        },
        data: function(t, e, i) {
            return c(t, e, i)
        },
        removeData: function(t, e) {
            return u(t, e)
        },
        _data: function(t, e, i) {
            return c(t, e, i, !0)
        },
        _removeData: function(t, e) {
            return u(t, e, !0)
        }
    }), st.fn.extend({
        data: function(t, e) {
            var i, n, s, o = this[0],
                a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (s = st.data(o), 1 === o.nodeType && !st._data(o, "parsedAttrs"))) {
                    for (i = a.length; i--;) a[i] && (n = a[i].name, 0 === n.indexOf("data-") && (n = st.camelCase(n.slice(5)), l(o, n, s[n])));
                    st._data(o, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function() {
                st.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                st.data(this, t, e)
            }) : o ? l(o, t, st.data(o, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                st.removeData(this, t)
            })
        }
    }), st.extend({
        queue: function(t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = st._data(t, e), i && (!n || st.isArray(i) ? n = st._data(t, e, st.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = st.queue(t, e),
                n = i.length,
                s = i.shift(),
                o = st._queueHooks(t, e),
                a = function() {
                    st.dequeue(t, e)
                };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, a, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return st._data(t, i) || st._data(t, i, {
                empty: st.Callbacks("once memory").add(function() {
                    st._removeData(t, e + "queue"), st._removeData(t, i)
                })
            })
        }
    }), st.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? st.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = st.queue(this, t, e);
                st._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && st.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                st.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                s = st.Deferred(),
                o = this,
                a = this.length,
                r = function() {
                    --n || s.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) i = st._data(o[a], t + "queueHooks"), i && i.empty && (n++, i.empty.add(r));
            return r(), s.promise(e)
        }
    });
    var Tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        St = ["Top", "Right", "Bottom", "Left"],
        It = function(t, e) {
            return t = e || t, "none" === st.css(t, "display") || !st.contains(t.ownerDocument, t)
        },
        Mt = st.access = function(t, e, i, n, s, o, a) {
            var r = 0,
                l = t.length,
                h = null == i;
            if ("object" === st.type(i)) {
                s = !0;
                for (r in i) st.access(t, e, r, i[r], !0, o, a)
            } else if (void 0 !== n && (s = !0, st.isFunction(n) || (a = !0), h && (a ? (e.call(t, n), e = null) : (h = e, e = function(t, e, i) {
                    return h.call(st(t), i)
                })), e))
                for (; r < l; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
            return s ? t : h ? e.call(t) : l ? e(t[0], i) : o
        },
        Nt = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = ft.createElement("input"),
            e = ft.createElement("div"),
            i = ft.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", it.leadingWhitespace = 3 === e.firstChild.nodeType, it.tbody = !e.getElementsByTagName("tbody").length, it.htmlSerialize = !!e.getElementsByTagName("link").length, it.html5Clone = "<:nav></:nav>" !== ft.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), it.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, it.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                it.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == it.deleteExpando) {
            it.deleteExpando = !0;
            try {
                delete e.test
            } catch (n) {
                it.deleteExpando = !1
            }
        }
    }(),
    function() {
        var e, i, n = ft.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + e, (it[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), it[e + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var Pt = /^(?:input|select|textarea)$/i,
        Et = /^key/,
        At = /^(?:mouse|pointer|contextmenu)|click/,
        Ht = /^(?:focusinfocus|focusoutblur)$/,
        zt = /^([^.]*)(?:\.(.+)|)$/;
    st.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var o, a, r, l, h, c, u, d, p, f, g, m = st._data(t);
            if (m) {
                for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = st.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function(t) {
                        return typeof st === kt || t && st.event.triggered === t.type ? void 0 : st.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(yt) || [""], r = e.length; r--;) o = zt.exec(e[r]) || [], p = g = o[1], f = (o[2] || "").split(".").sort(), p && (h = st.event.special[p] || {}, p = (s ? h.delegateType : h.bindType) || p, h = st.event.special[p] || {}, u = st.extend({
                    type: p,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && st.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, l), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, h.setup && h.setup.call(t, n, f, c) !== !1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), st.event.global[p] = !0);
                t = null
            }
        },
        remove: function(t, e, i, n, s) {
            var o, a, r, l, h, c, u, d, p, f, g, m = st.hasData(t) && st._data(t);
            if (m && (c = m.events)) {
                for (e = (e || "").match(yt) || [""], h = e.length; h--;)
                    if (r = zt.exec(e[h]) || [], p = g = r[1], f = (r[2] || "").split(".").sort(), p) {
                        for (u = st.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = c[p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) a = d[o], !s && g !== a.origType || i && i.guid !== a.guid || r && !r.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, u.remove && u.remove.call(t, a));
                        l && !d.length && (u.teardown && u.teardown.call(t, f, m.handle) !== !1 || st.removeEvent(t, p, m.handle), delete c[p])
                    } else
                        for (p in c) st.event.remove(t, p + e[h], i, n, !0);
                st.isEmptyObject(c) && (delete m.handle, st._removeData(t, "events"))
            }
        },
        trigger: function(e, i, n, s) {
            var o, a, r, l, h, c, u, d = [n || ft],
                p = et.call(e, "type") ? e.type : e,
                f = et.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = c = n = n || ft, 3 !== n.nodeType && 8 !== n.nodeType && !Ht.test(p + st.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[st.expando] ? e : new st.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : st.makeArray(i, [e]), h = st.event.special[p] || {}, s || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                if (!s && !h.noBubble && !st.isWindow(n)) {
                    for (l = h.delegateType || p, Ht.test(l + p) || (r = r.parentNode); r; r = r.parentNode) d.push(r), c = r;
                    c === (n.ownerDocument || ft) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (u = 0;
                    (r = d[u++]) && !e.isPropagationStopped();) e.type = u > 1 ? l : h.bindType || p, o = (st._data(r, "events") || {})[e.type] && st._data(r, "handle"), o && o.apply(r, i), o = a && r[a], o && o.apply && st.acceptData(r) && (e.result = o.apply(r, i), e.result === !1 && e.preventDefault());
                if (e.type = p, !s && !e.isDefaultPrevented() && (!h._default || h._default.apply(d.pop(), i) === !1) && st.acceptData(n) && a && n[p] && !st.isWindow(n)) {
                    c = n[a], c && (n[a] = null), st.event.triggered = p;
                    try {
                        n[p]()
                    } catch (g) {}
                    st.event.triggered = void 0, c && (n[a] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = st.event.fix(t);
            var e, i, n, s, o, a = [],
                r = V.call(arguments),
                l = (st._data(this, "events") || {})[t.type] || [],
                h = st.event.special[t.type] || {};
            if (r[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
                for (a = st.event.handlers.call(this, t, l), e = 0;
                    (s = a[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = s.elem, o = 0;
                        (n = s.handlers[o++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(n.namespace) || (t.handleObj = n, t.data = n.data, i = ((st.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, r), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, o, a = [],
                r = e.delegateCount,
                l = t.target;
            if (r && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (s = [], o = 0; o < r; o++) n = e[o], i = n.selector + " ", void 0 === s[i] && (s[i] = n.needsContext ? st(i, this).index(l) >= 0 : st.find(i, this, null, [l]).length), s[i] && s.push(n);
                        s.length && a.push({
                            elem: l,
                            handlers: s
                        })
                    }
            return r < e.length && a.push({
                elem: this,
                handlers: e.slice(r)
            }), a
        },
        fix: function(t) {
            if (t[st.expando]) return t;
            var e, i, n, s = t.type,
                o = t,
                a = this.fixHooks[s];
            for (a || (this.fixHooks[s] = a = At.test(s) ? this.mouseHooks : Et.test(s) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, t = new st.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
            return t.target || (t.target = o.srcElement || ft), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, s, o = e.button,
                    a = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || ft, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === f() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (st.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(t) {
                    return st.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var s = st.extend(new st.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? st.event.trigger(s, null, e) : st.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
        }
    }, st.removeEvent = ft.removeEventListener ? function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    } : function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === kt && (t[n] = null), t.detachEvent(n, i))
    }, st.Event = function(t, e) {
        return this instanceof st.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : p) : this.type = t, e && st.extend(this, e), this.timeStamp = t && t.timeStamp || st.now(), void(this[st.expando] = !0)) : new st.Event(t, e)
    }, st.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, st.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        st.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    s = t.relatedTarget,
                    o = t.handleObj;
                return s && (s === n || st.contains(n, s)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), it.submitBubbles || (st.event.special.submit = {
        setup: function() {
            return !st.nodeName(this, "form") && void st.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    i = st.nodeName(e, "input") || st.nodeName(e, "button") ? e.form : void 0;
                i && !st._data(i, "submitBubbles") && (st.event.add(i, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), st._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && st.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return !st.nodeName(this, "form") && void st.event.remove(this, "._submit")
        }
    }), it.changeBubbles || (st.event.special.change = {
        setup: function() {
            return Pt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (st.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), st.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), st.event.simulate("change", this, t, !0)
            })), !1) : void st.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Pt.test(e.nodeName) && !st._data(e, "changeBubbles") && (st.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || st.event.simulate("change", this.parentNode, t, !0)
                }), st._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return st.event.remove(this, "._change"), !Pt.test(this.nodeName)
        }
    }), it.focusinBubbles || st.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            st.event.simulate(e, t.target, st.event.fix(t), !0)
        };
        st.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    s = st._data(n, e);
                s || n.addEventListener(t, i, !0), st._data(n, e, (s || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    s = st._data(n, e) - 1;
                s ? st._data(n, e, s) : (n.removeEventListener(t, i, !0), st._removeData(n, e))
            }
        }
    }), st.fn.extend({
        on: function(t, e, i, n, s) {
            var o, a;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (o in t) this.on(o, e, i, t[o], s);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = p;
            else if (!n) return this;
            return 1 === s && (a = n, n = function(t) {
                return st().off(t), a.apply(this, arguments)
            }, n.guid = a.guid || (a.guid = st.guid++)), this.each(function() {
                st.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, st(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = p), this.each(function() {
                st.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                st.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            if (i) return st.event.trigger(t, e, i, !0)
        }
    });
    var Wt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ot = / jQuery\d+="(?:null|\d+)"/g,
        jt = new RegExp("<(?:" + Wt + ")[\\s/>]", "i"),
        Lt = /^\s+/,
        Ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Rt = /<([\w:]+)/,
        Bt = /<tbody/i,
        qt = /<|&#?\w+;/,
        Yt = /<(?:script|style|link)/i,
        $t = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ut = /^$|\/(?:java|ecma)script/i,
        Kt = /^true\/(.*)/,
        Xt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Vt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: it.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Qt = g(ft),
        Gt = Qt.appendChild(ft.createElement("div"));
    Vt.optgroup = Vt.option, Vt.tbody = Vt.tfoot = Vt.colgroup = Vt.caption = Vt.thead, Vt.th = Vt.td, st.extend({
        clone: function(t, e, i) {
            var n, s, o, a, r, l = st.contains(t.ownerDocument, t);
            if (it.html5Clone || st.isXMLDoc(t) || !jt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Gt.innerHTML = t.outerHTML, Gt.removeChild(o = Gt.firstChild)), !(it.noCloneEvent && it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || st.isXMLDoc(t)))
                for (n = m(o), r = m(t), a = 0; null != (s = r[a]); ++a) n[a] && k(s, n[a]);
            if (e)
                if (i)
                    for (r = r || m(t), n = n || m(o), a = 0; null != (s = r[a]); a++) x(s, n[a]);
                else x(t, o);
            return n = m(o, "script"), n.length > 0 && w(n, !l && m(t, "script")), n = r = s = null, o
        },
        buildFragment: function(t, e, i, n) {
            for (var s, o, a, r, l, h, c, u = t.length, d = g(e), p = [], f = 0; f < u; f++)
                if (o = t[f], o || 0 === o)
                    if ("object" === st.type(o)) st.merge(p, o.nodeType ? [o] : o);
                    else if (qt.test(o)) {
                for (r = r || d.appendChild(e.createElement("div")), l = (Rt.exec(o) || ["", ""])[1].toLowerCase(), c = Vt[l] || Vt._default, r.innerHTML = c[1] + o.replace(Ft, "<$1></$2>") + c[2], s = c[0]; s--;) r = r.lastChild;
                if (!it.leadingWhitespace && Lt.test(o) && p.push(e.createTextNode(Lt.exec(o)[0])), !it.tbody)
                    for (o = "table" !== l || Bt.test(o) ? "<table>" !== c[1] || Bt.test(o) ? 0 : r : r.firstChild, s = o && o.childNodes.length; s--;) st.nodeName(h = o.childNodes[s], "tbody") && !h.childNodes.length && o.removeChild(h);
                for (st.merge(p, r.childNodes), r.textContent = ""; r.firstChild;) r.removeChild(r.firstChild);
                r = d.lastChild
            } else p.push(e.createTextNode(o));
            for (r && d.removeChild(r), it.appendChecked || st.grep(m(p, "input"), v), f = 0; o = p[f++];)
                if ((!n || st.inArray(o, n) === -1) && (a = st.contains(o.ownerDocument, o), r = m(d.appendChild(o), "script"), a && w(r), i))
                    for (s = 0; o = r[s++];) Ut.test(o.type || "") && i.push(o);
            return r = null, d
        },
        cleanData: function(t, e) {
            for (var i, n, s, o, a = 0, r = st.expando, l = st.cache, h = it.deleteExpando, c = st.event.special; null != (i = t[a]); a++)
                if ((e || st.acceptData(i)) && (s = i[r], o = s && l[s])) {
                    if (o.events)
                        for (n in o.events) c[n] ? st.event.remove(i, n) : st.removeEvent(i, n, o.handle);
                    l[s] && (delete l[s], h ? delete i[r] : typeof i.removeAttribute !== kt ? i.removeAttribute(r) : i[r] = null, X.push(s))
                }
        }
    }), st.fn.extend({
        text: function(t) {
            return Mt(this, function(t) {
                return void 0 === t ? st.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ft).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = b(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = b(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? st.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || st.cleanData(m(i)), i.parentNode && (e && st.contains(i.ownerDocument, i) && w(m(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && st.cleanData(m(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && st.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return st.clone(this, t, e)
            })
        },
        html: function(t) {
            return Mt(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Ot, "") : void 0;
                if ("string" == typeof t && !Yt.test(t) && (it.htmlSerialize || !jt.test(t)) && (it.leadingWhitespace || !Lt.test(t)) && !Vt[(Rt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Ft, "<$1></$2>");
                    try {
                        for (; i < n; i++) e = this[i] || {}, 1 === e.nodeType && (st.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (s) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, st.cleanData(m(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = Q.apply([], t);
            var i, n, s, o, a, r, l = 0,
                h = this.length,
                c = this,
                u = h - 1,
                d = t[0],
                p = st.isFunction(d);
            if (p || h > 1 && "string" == typeof d && !it.checkClone && $t.test(d)) return this.each(function(i) {
                var n = c.eq(i);
                p && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
            });
            if (h && (r = st.buildFragment(t, this[0].ownerDocument, !1, this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
                for (o = st.map(m(r, "script"), y), s = o.length; l < h; l++) n = r, l !== u && (n = st.clone(n, !0, !0), s && st.merge(o, m(n, "script"))), e.call(this[l], n, l);
                if (s)
                    for (a = o[o.length - 1].ownerDocument, st.map(o, _), l = 0; l < s; l++) n = o[l], Ut.test(n.type || "") && !st._data(n, "globalEval") && st.contains(a, n) && (n.src ? st._evalUrl && st._evalUrl(n.src) : st.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Xt, "")));
                r = i = null
            }
            return this
        }
    }), st.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        st.fn[t] = function(t) {
            for (var i, n = 0, s = [], o = st(t), a = o.length - 1; n <= a; n++) i = n === a ? this : this.clone(!0), st(o[n])[e](i), G.apply(s, i.get());
            return this.pushStack(s)
        }
    });
    var Jt, Zt = {};
    ! function() {
        var t;
        it.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, i, n;
            return i = ft.getElementsByTagName("body")[0], i && i.style ? (e = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== kt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ft.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
        }
    }();
    var te, ee, ie = /^margin/,
        ne = new RegExp("^(" + Tt + ")(?!px)[a-z%]+$", "i"),
        se = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (te = function(t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }, ee = function(t, e, i) {
            var n, s, o, a, r = t.style;
            return i = i || te(t), a = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== a || st.contains(t.ownerDocument, t) || (a = st.style(t, e)), ne.test(a) && ie.test(e) && (n = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, r.minWidth = s, r.maxWidth = o)), void 0 === a ? a : a + ""
        }) : ft.documentElement.currentStyle && (te = function(t) {
            return t.currentStyle
        }, ee = function(t, e, i) {
            var n, s, o, a, r = t.style;
            return i = i || te(t), a = i ? i[e] : void 0, null == a && r && r[e] && (a = r[e]), ne.test(a) && !se.test(e) && (n = r.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), r.left = "fontSize" === e ? "1em" : a, a = r.pixelLeft + "px", r.left = n, o && (s.left = o)), void 0 === a ? a : a + "" || "auto"
        }),
        function() {
            function e() {
                var e, i, n, s;
                i = ft.getElementsByTagName("body")[0], i && i.style && (e = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, a = "4px" === (t.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, s = e.appendChild(ft.createElement("div")), s.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = e.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === s[0].offsetHeight, r && (s[0].style.display = "", s[1].style.display = "none", r = 0 === s[0].offsetHeight), i.removeChild(n))
            }
            var i, n, s, o, a, r, l;
            i = ft.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", s = i.getElementsByTagName("a")[0], n = s && s.style, n && (n.cssText = "float:left;opacity:.5", it.opacity = "0.5" === n.opacity, it.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === i.style.backgroundClip, it.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, st.extend(it, {
                reliableHiddenOffsets: function() {
                    return null == r && e(), r
                },
                boxSizingReliable: function() {
                    return null == a && e(), a
                },
                pixelPosition: function() {
                    return null == o && e(), o
                },
                reliableMarginRight: function() {
                    return null == l && e(), l
                }
            }))
        }(), st.swap = function(t, e, i, n) {
            var s, o, a = {};
            for (o in e) a[o] = t.style[o], t.style[o] = e[o];
            s = i.apply(t, n || []);
            for (o in e) t.style[o] = a[o];
            return s
        };
    var oe = /alpha\([^)]*\)/i,
        ae = /opacity\s*=\s*([^)]*)/,
        re = /^(none|table(?!-c[ea]).+)/,
        le = new RegExp("^(" + Tt + ")(.*)$", "i"),
        he = new RegExp("^([+-])=(" + Tt + ")", "i"),
        ce = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ue = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        de = ["Webkit", "O", "Moz", "ms"];
    st.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = ee(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": it.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, a, r = st.camelCase(e),
                    l = t.style;
                if (e = st.cssProps[r] || (st.cssProps[r] = S(l, r)), a = st.cssHooks[e] || st.cssHooks[r], void 0 === i) return a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s : l[e];
                if (o = typeof i, "string" === o && (s = he.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(st.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || st.cssNumber[r] || (i += "px"), it.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (i = a.set(t, i, n))))) try {
                    l[e] = i
                } catch (h) {}
            }
        },
        css: function(t, e, i, n) {
            var s, o, a, r = st.camelCase(e);
            return e = st.cssProps[r] || (st.cssProps[r] = S(t.style, r)), a = st.cssHooks[e] || st.cssHooks[r], a && "get" in a && (o = a.get(t, !0, i)), void 0 === o && (o = ee(t, e, n)), "normal" === o && e in ue && (o = ue[e]), "" === i || i ? (s = parseFloat(o), i === !0 || st.isNumeric(s) ? s || 0 : o) : o
        }
    }), st.each(["height", "width"], function(t, e) {
        st.cssHooks[e] = {
            get: function(t, i, n) {
                if (i) return re.test(st.css(t, "display")) && 0 === t.offsetWidth ? st.swap(t, ce, function() {
                    return P(t, e, n)
                }) : P(t, e, n)
            },
            set: function(t, i, n) {
                var s = n && te(t);
                return M(t, i, n ? N(t, e, n, it.boxSizing && "border-box" === st.css(t, "boxSizing", !1, s), s) : 0)
            }
        }
    }), it.opacity || (st.cssHooks.opacity = {
        get: function(t, e) {
            return ae.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var i = t.style,
                n = t.currentStyle,
                s = st.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === st.trim(o.replace(oe, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = oe.test(o) ? o.replace(oe, s) : o + " " + s)
        }
    }), st.cssHooks.marginRight = T(it.reliableMarginRight, function(t, e) {
        if (e) return st.swap(t, {
            display: "inline-block"
        }, ee, [t, "marginRight"])
    }), st.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        st.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[t + St[n] + e] = o[n] || o[n - 2] || o[0];
                return s
            }
        }, ie.test(t) || (st.cssHooks[t + e].set = M)
    }), st.fn.extend({
        css: function(t, e) {
            return Mt(this, function(t, e, i) {
                var n, s, o = {},
                    a = 0;
                if (st.isArray(e)) {
                    for (n = te(t), s = e.length; a < s; a++) o[e[a]] = st.css(t, e[a], !1, n);
                    return o
                }
                return void 0 !== i ? st.style(t, e, i) : st.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return I(this, !0)
        },
        hide: function() {
            return I(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                It(this) ? st(this).show() : st(this).hide()
            })
        }
    }), st.Tween = E, E.prototype = {
        constructor: E,
        init: function(t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (st.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = E.propHooks[this.prop];
            return t && t.get ? t.get(this) : E.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = E.propHooks[this.prop];
            return this.options.duration ? this.pos = e = st.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : E.propHooks._default.set(this), this
        }
    }, E.prototype.init.prototype = E.prototype, E.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = st.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                st.fx.step[t.prop] ? st.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[st.cssProps[t.prop]] || st.cssHooks[t.prop]) ? st.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, E.propHooks.scrollTop = E.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, st.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, st.fx = E.prototype.init, st.fx.step = {};
    var pe, fe, ge = /^(?:toggle|show|hide)$/,
        me = new RegExp("^(?:([+-])=|)(" + Tt + ")([a-z%]*)$", "i"),
        ve = /queueHooks$/,
        be = [W],
        ye = {
            "*": [function(t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    s = me.exec(e),
                    o = s && s[3] || (st.cssNumber[t] ? "" : "px"),
                    a = (st.cssNumber[t] || "px" !== o && +n) && me.exec(st.css(i.elem, t)),
                    r = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], s = s || [], a = +n || 1;
                    do r = r || ".5", a /= r, st.style(i.elem, t, a + o); while (r !== (r = i.cur() / n) && 1 !== r && --l)
                }
                return s && (a = i.start = +a || +n || 0, i.unit = o, i.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]), i
            }]
        };
    st.Animation = st.extend(j, {
            tweener: function(t, e) {
                st.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, s = t.length; n < s; n++) i = t[n], ye[i] = ye[i] || [], ye[i].unshift(e)
            },
            prefilter: function(t, e) {
                e ? be.unshift(t) : be.push(t)
            }
        }), st.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? st.extend({}, t) : {
                complete: i || !i && e || st.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !st.isFunction(e) && e
            };
            return n.duration = st.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in st.fx.speeds ? st.fx.speeds[n.duration] : st.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                st.isFunction(n.old) && n.old.call(this), n.queue && st.dequeue(this, n.queue)
            }, n
        }, st.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(It).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var s = st.isEmptyObject(t),
                    o = st.speed(e, i, n),
                    a = function() {
                        var e = j(this, st.extend({}, t), o);
                        (s || st._data(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, s || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        s = null != t && t + "queueHooks",
                        o = st.timers,
                        a = st._data(this);
                    if (s) a[s] && a[s].stop && n(a[s]);
                    else
                        for (s in a) a[s] && a[s].stop && ve.test(s) && n(a[s]);
                    for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                    !e && i || st.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = st._data(this),
                        n = i[t + "queue"],
                        s = i[t + "queueHooks"],
                        o = st.timers,
                        a = n ? n.length : 0;
                    for (i.finish = !0, st.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), st.each(["toggle", "show", "hide"], function(t, e) {
            var i = st.fn[e];
            st.fn[e] = function(t, n, s) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(H(e, !0), t, n, s)
            }
        }), st.each({
            slideDown: H("show"),
            slideUp: H("hide"),
            slideToggle: H("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            st.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), st.timers = [], st.fx.tick = function() {
            var t, e = st.timers,
                i = 0;
            for (pe = st.now(); i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
            e.length || st.fx.stop(), pe = void 0
        }, st.fx.timer = function(t) {
            st.timers.push(t), t() ? st.fx.start() : st.timers.pop()
        }, st.fx.interval = 13, st.fx.start = function() {
            fe || (fe = setInterval(st.fx.tick, st.fx.interval))
        }, st.fx.stop = function() {
            clearInterval(fe), fe = null
        }, st.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, st.fn.delay = function(t, e) {
            return t = st.fx ? st.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var t, e, i, n, s;
            e = ft.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = ft.createElement("select"), s = i.appendChild(ft.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", it.getSetAttribute = "t" !== e.className, it.style = /top/.test(n.getAttribute("style")), it.hrefNormalized = "/a" === n.getAttribute("href"), it.checkOn = !!t.value, it.optSelected = s.selected, it.enctype = !!ft.createElement("form").enctype, i.disabled = !0, it.optDisabled = !s.disabled, t = ft.createElement("input"), t.setAttribute("value", ""), it.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), it.radioValue = "t" === t.value
        }();
    var _e = /\r/g;
    st.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0]; {
                if (arguments.length) return n = st.isFunction(t), this.each(function(i) {
                    var s;
                    1 === this.nodeType && (s = n ? t.call(this, i, st(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : st.isArray(s) && (s = st.map(s, function(t) {
                        return null == t ? "" : t + ""
                    })), e = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                });
                if (s) return e = st.valHooks[s.type] || st.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(_e, "") : null == i ? "" : i)
            }
        }
    }), st.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = st.find.attr(t, "value");
                    return null != e ? e : st.trim(st.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || s < 0, a = o ? null : [], r = o ? s + 1 : n.length, l = s < 0 ? r : o ? s : 0; l < r; l++)
                        if (i = n[l], (i.selected || l === s) && (it.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !st.nodeName(i.parentNode, "optgroup"))) {
                            if (e = st(i).val(), o) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, o = st.makeArray(e), a = s.length; a--;)
                        if (n = s[a], st.inArray(st.valHooks.option.get(n), o) >= 0) try {
                            n.selected = i = !0
                        } catch (r) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), st.each(["radio", "checkbox"], function() {
        st.valHooks[this] = {
            set: function(t, e) {
                if (st.isArray(e)) return t.checked = st.inArray(st(t).val(), e) >= 0
            }
        }, it.checkOn || (st.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var we, xe, ke = st.expr.attrHandle,
        Ce = /^(?:checked|selected)$/i,
        De = it.getSetAttribute,
        Te = it.input;
    st.fn.extend({
        attr: function(t, e) {
            return Mt(this, st.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                st.removeAttr(this, t)
            })
        }
    }), st.extend({
        attr: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === kt ? st.prop(t, e, i) : (1 === o && st.isXMLDoc(t) || (e = e.toLowerCase(), n = st.attrHooks[e] || (st.expr.match.bool.test(e) ? xe : we)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = st.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void st.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var i, n, s = 0,
                o = e && e.match(yt);
            if (o && 1 === t.nodeType)
                for (; i = o[s++];) n = st.propFix[i] || i, st.expr.match.bool.test(i) ? Te && De || !Ce.test(i) ? t[n] = !1 : t[st.camelCase("default-" + i)] = t[n] = !1 : st.attr(t, i, ""), t.removeAttribute(De ? i : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!it.radioValue && "radio" === e && st.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), xe = {
        set: function(t, e, i) {
            return e === !1 ? st.removeAttr(t, i) : Te && De || !Ce.test(i) ? t.setAttribute(!De && st.propFix[i] || i, i) : t[st.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, st.each(st.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = ke[e] || st.find.attr;
        ke[e] = Te && De || !Ce.test(e) ? function(t, e, n) {
            var s, o;
            return n || (o = ke[e], ke[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, ke[e] = o), s
        } : function(t, e, i) {
            if (!i) return t[st.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Te && De || (st.attrHooks.value = {
        set: function(t, e, i) {
            return st.nodeName(t, "input") ? void(t.defaultValue = e) : we && we.set(t, e, i)
        }
    }), De || (we = {
        set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            if (n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i)) return e
        }
    }, ke.id = ke.name = ke.coords = function(t, e, i) {
        var n;
        if (!i) return (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }, st.valHooks.button = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            if (i && i.specified) return i.value
        },
        set: we.set
    }, st.attrHooks.contenteditable = {
        set: function(t, e, i) {
            we.set(t, "" !== e && e, i)
        }
    }, st.each(["width", "height"], function(t, e) {
        st.attrHooks[e] = {
            set: function(t, i) {
                if ("" === i) return t.setAttribute(e, "auto"), i
            }
        }
    })), it.style || (st.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Se = /^(?:input|select|textarea|button|object)$/i,
        Ie = /^(?:a|area)$/i;
    st.fn.extend({
        prop: function(t, e) {
            return Mt(this, st.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = st.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), st.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, i) {
            var n, s, o, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !st.isXMLDoc(t), o && (e = st.propFix[e] || e, s = st.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = st.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Se.test(t.nodeName) || Ie.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), it.hrefNormalized || st.each(["href", "src"], function(t, e) {
        st.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), it.optSelected || (st.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), st.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        st.propFix[this.toLowerCase()] = this
    }), it.enctype || (st.propFix.enctype = "encoding");
    var Me = /[\t\r\n\f]/g;
    st.fn.extend({
        addClass: function(t) {
            var e, i, n, s, o, a, r = 0,
                l = this.length,
                h = "string" == typeof t && t;
            if (st.isFunction(t)) return this.each(function(e) {
                st(this).addClass(t.call(this, e, this.className))
            });
            if (h)
                for (e = (t || "").match(yt) || []; r < l; r++)
                    if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Me, " ") : " ")) {
                        for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        a = st.trim(n), i.className !== a && (i.className = a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, s, o, a, r = 0,
                l = this.length,
                h = 0 === arguments.length || "string" == typeof t && t;
            if (st.isFunction(t)) return this.each(function(e) {
                st(this).removeClass(t.call(this, e, this.className))
            });
            if (h)
                for (e = (t || "").match(yt) || []; r < l; r++)
                    if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Me, " ") : "")) {
                        for (o = 0; s = e[o++];)
                            for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                        a = t ? st.trim(n) : "", i.className !== a && (i.className = a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : st.isFunction(t) ? this.each(function(i) {
                st(this).toggleClass(t.call(this, i, this.className, e), e)
            }) : this.each(function() {
                if ("string" === i)
                    for (var e, n = 0, s = st(this), o = t.match(yt) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else i !== kt && "boolean" !== i || (this.className && st._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : st._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; i < n; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Me, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        st.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), st.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var Ne = st.now(),
        Pe = /\?/,
        Ee = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    st.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i, n = null,
            s = st.trim(e + "");
        return s && !st.trim(s.replace(Ee, function(t, e, s, o) {
            return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !o - !s, "")
        })) ? Function("return " + s)() : st.error("Invalid JSON: " + e)
    }, st.parseXML = function(e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch (s) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || st.error("Invalid XML: " + e), i
    };
    var Ae, He, ze = /#.*$/,
        We = /([?&])_=[^&]*/,
        Oe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        je = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Le = /^(?:GET|HEAD)$/,
        Fe = /^\/\//,
        Re = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Be = {},
        qe = {},
        Ye = "*/".concat("*");
    try {
        He = location.href
    } catch ($e) {
        He = ft.createElement("a"), He.href = "", He = He.href
    }
    Ae = Re.exec(He.toLowerCase()) || [], st.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: He,
            type: "GET",
            isLocal: je.test(Ae[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ye,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": st.parseJSON,
                "text xml": st.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? R(R(t, st.ajaxSettings), e) : R(st.ajaxSettings, t)
        },
        ajaxPrefilter: L(Be),
        ajaxTransport: L(qe),
        ajax: function(t, e) {
            function i(t, e, i, n) {
                var s, c, v, b, _, x = e;
                2 !== y && (y = 2, r && clearTimeout(r), h = void 0, a = n || "", w.readyState = t > 0 ? 4 : 0, s = t >= 200 && t < 300 || 304 === t, i && (b = B(u, w, i)), b = q(u, b, w, s), s ? (u.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (st.lastModified[o] = _), _ = w.getResponseHeader("etag"), _ && (st.etag[o] = _)), 204 === t || "HEAD" === u.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, c = b.data, v = b.error, s = !v)) : (v = x, !t && x || (x = "error", t < 0 && (t = 0))), w.status = t, w.statusText = (e || x) + "", s ? f.resolveWith(d, [c, x, w]) : f.rejectWith(d, [w, x, v]), w.statusCode(m), m = void 0, l && p.trigger(s ? "ajaxSuccess" : "ajaxError", [w, u, s ? c : v]), g.fireWith(d, [w, x]), l && (p.trigger("ajaxComplete", [w, u]), --st.active || st.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, s, o, a, r, l, h, c, u = st.ajaxSetup({}, e),
                d = u.context || u,
                p = u.context && (d.nodeType || d.jquery) ? st(d) : st.event,
                f = st.Deferred(),
                g = st.Callbacks("once memory"),
                m = u.statusCode || {},
                v = {},
                b = {},
                y = 0,
                _ = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === y) {
                            if (!c)
                                for (c = {}; e = Oe.exec(a);) c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return y || (t = b[i] = b[i] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return y || (u.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (y < 2)
                                for (e in t) m[e] = [m[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || _;
                        return h && h.abort(e), i(0, e), this
                    }
                };
            if (f.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, u.url = ((t || u.url || He) + "").replace(ze, "").replace(Fe, Ae[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = st.trim(u.dataType || "*").toLowerCase().match(yt) || [""], null == u.crossDomain && (n = Re.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === Ae[1] && n[2] === Ae[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Ae[3] || ("http:" === Ae[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = st.param(u.data, u.traditional)), F(Be, u, e, w), 2 === y) return w;
            l = u.global, l && 0 === st.active++ && st.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Le.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (Pe.test(o) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = We.test(o) ? o.replace(We, "$1_=" + Ne++) : o + (Pe.test(o) ? "&" : "?") + "_=" + Ne++)), u.ifModified && (st.lastModified[o] && w.setRequestHeader("If-Modified-Since", st.lastModified[o]), st.etag[o] && w.setRequestHeader("If-None-Match", st.etag[o])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Ye + "; q=0.01" : "") : u.accepts["*"]);
            for (s in u.headers) w.setRequestHeader(s, u.headers[s]);
            if (u.beforeSend && (u.beforeSend.call(d, w, u) === !1 || 2 === y)) return w.abort();
            _ = "abort";
            for (s in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[s](u[s]);
            if (h = F(qe, u, e, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (r = setTimeout(function() {
                    w.abort("timeout")
                }, u.timeout));
                try {
                    y = 1, h.send(v, i)
                } catch (x) {
                    if (!(y < 2)) throw x;
                    i(-1, x)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, i) {
            return st.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return st.get(t, void 0, e, "script")
        }
    }), st.each(["get", "post"], function(t, e) {
        st[e] = function(t, i, n, s) {
            return st.isFunction(i) && (s = s || n, n = i, i = void 0), st.ajax({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            })
        }
    }), st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        st.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), st._evalUrl = function(t) {
        return st.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, st.fn.extend({
        wrapAll: function(t) {
            if (st.isFunction(t)) return this.each(function(e) {
                st(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = st(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return st.isFunction(t) ? this.each(function(e) {
                st(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = st(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = st.isFunction(t);
            return this.each(function(i) {
                st(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
            }).end()
        }
    }), st.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !it.reliableHiddenOffsets() && "none" === (t.style && t.style.display || st.css(t, "display"))
    }, st.expr.filters.visible = function(t) {
        return !st.expr.filters.hidden(t)
    };
    var Ue = /%20/g,
        Ke = /\[\]$/,
        Xe = /\r?\n/g,
        Ve = /^(?:submit|button|image|reset|file)$/i,
        Qe = /^(?:input|select|textarea|keygen)/i;
    st.param = function(t, e) {
        var i, n = [],
            s = function(t, e) {
                e = st.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(t) || t.jquery && !st.isPlainObject(t)) st.each(t, function() {
            s(this.name, this.value)
        });
        else
            for (i in t) Y(i, t[i], e, s);
        return n.join("&").replace(Ue, "+")
    }, st.fn.extend({
        serialize: function() {
            return st.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = st.prop(this, "elements");
                return t ? st.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !st(this).is(":disabled") && Qe.test(this.nodeName) && !Ve.test(t) && (this.checked || !Nt.test(t))
            }).map(function(t, e) {
                var i = st(this).val();
                return null == i ? null : st.isArray(i) ? st.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Xe, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Xe, "\r\n")
                }
            }).get()
        }
    }), st.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $() || U()
    } : $;
    var Ge = 0,
        Je = {},
        Ze = st.ajaxSettings.xhr();
    t.ActiveXObject && st(t).on("unload", function() {
        for (var t in Je) Je[t](void 0, !0)
    }), it.cors = !!Ze && "withCredentials" in Ze, Ze = it.ajax = !!Ze, Ze && st.ajaxTransport(function(t) {
        if (!t.crossDomain || it.cors) {
            var e;
            return {
                send: function(i, n) {
                    var s, o = t.xhr(),
                        a = ++Ge;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) o[s] = t.xhrFields[s];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
                    o.send(t.hasContent && t.data || null), e = function(i, s) {
                        var r, l, h;
                        if (e && (s || 4 === o.readyState))
                            if (delete Je[a], e = void 0, o.onreadystatechange = st.noop, s) 4 !== o.readyState && o.abort();
                            else {
                                h = {}, r = o.status, "string" == typeof o.responseText && (h.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (c) {
                                    l = ""
                                }
                                r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = h.text ? 200 : 404
                            }
                        h && n(r, l, h, o.getAllResponseHeaders())
                    }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Je[a] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }), st.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return st.globalEval(t), t
            }
        }
    }), st.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), st.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i = ft.head || st("head")[0] || ft.documentElement;
            return {
                send: function(n, s) {
                    e = ft.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                    }, i.insertBefore(e, i.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var ti = [],
        ei = /(=)\?(?=&|$)|\?\?/;
    st.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ti.pop() || st.expando + "_" + Ne++;
            return this[t] = !0, t
        }
    }), st.ajaxPrefilter("json jsonp", function(e, i, n) {
        var s, o, a, r = e.jsonp !== !1 && (ei.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ei.test(e.data) && "data");
        if (r || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = st.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(ei, "$1" + s) : e.jsonp !== !1 && (e.url += (Pe.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
            return a || st.error(s + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[s], t[s] = function() {
            a = arguments
        }, n.always(function() {
            t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, ti.push(s)), a && st.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), st.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || ft;
        var n = ut.exec(t),
            s = !i && [];
        return n ? [e.createElement(n[1])] : (n = st.buildFragment([t], e, s), s && s.length && st(s).remove(), st.merge([], n.childNodes))
    };
    var ii = st.fn.load;
    st.fn.load = function(t, e, i) {
        if ("string" != typeof t && ii) return ii.apply(this, arguments);
        var n, s, o, a = this,
            r = t.indexOf(" ");
        return r >= 0 && (n = st.trim(t.slice(r, t.length)), t = t.slice(0, r)), st.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && st.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, a.html(n ? st("<div>").append(st.parseHTML(t)).find(n) : t)
        }).complete(i && function(t, e) {
            a.each(i, s || [t.responseText, e, t])
        }), this
    }, st.expr.filters.animated = function(t) {
        return st.grep(st.timers, function(e) {
            return t === e.elem
        }).length
    };
    var ni = t.document.documentElement;
    st.offset = {
        setOffset: function(t, e, i) {
            var n, s, o, a, r, l, h, c = st.css(t, "position"),
                u = st(t),
                d = {};
            "static" === c && (t.style.position = "relative"), r = u.offset(), o = st.css(t, "top"), l = st.css(t, "left"), h = ("absolute" === c || "fixed" === c) && st.inArray("auto", [o, l]) > -1, h ? (n = u.position(), a = n.top, s = n.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0), st.isFunction(e) && (e = e.call(t, i, r)), null != e.top && (d.top = e.top - r.top + a), null != e.left && (d.left = e.left - r.left + s), "using" in e ? e.using.call(t, d) : u.css(d)
        }
    }, st.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                st.offset.setOffset(this, t, e)
            });
            var e, i, n = {
                    top: 0,
                    left: 0
                },
                s = this[0],
                o = s && s.ownerDocument;
            if (o) return e = o.documentElement, st.contains(e, s) ? (typeof s.getBoundingClientRect !== kt && (n = s.getBoundingClientRect()), i = K(o), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n
        },
        position: function() {
            if (this[0]) {
                var t, e, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === st.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), st.nodeName(t[0], "html") || (i = t.offset()), i.top += st.css(t[0], "borderTopWidth", !0), i.left += st.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - st.css(n, "marginTop", !0),
                    left: e.left - i.left - st.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || ni; t && !st.nodeName(t, "html") && "static" === st.css(t, "position");) t = t.offsetParent;
                return t || ni
            })
        }
    }), st.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = /Y/.test(e);
        st.fn[t] = function(n) {
            return Mt(this, function(t, n, s) {
                var o = K(t);
                return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void(o ? o.scrollTo(i ? st(o).scrollLeft() : s, i ? s : st(o).scrollTop()) : t[n] = s)
            }, t, n, arguments.length, null)
        }
    }), st.each(["top", "left"], function(t, e) {
        st.cssHooks[e] = T(it.pixelPosition, function(t, i) {
            if (i) return i = ee(t, e), ne.test(i) ? st(t).position()[e] + "px" : i
        })
    }), st.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        st.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            st.fn[n] = function(n, s) {
                var o = arguments.length && (i || "boolean" != typeof n),
                    a = i || (n === !0 || s === !0 ? "margin" : "border");
                return Mt(this, function(e, i, n) {
                    var s;
                    return st.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? st.css(e, i, a) : st.style(e, i, n, a);
                }, e, o ? n : void 0, o, null)
            }
        })
    }), st.fn.size = function() {
        return this.length
    }, st.fn.andSelf = st.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return st
    });
    var si = t.jQuery,
        oi = t.$;
    return st.noConflict = function(e) {
        return t.$ === st && (t.$ = oi), e && t.jQuery === st && (t.jQuery = si), st
    }, typeof e === kt && (t.jQuery = t.$ = st), st
}),
function(t) {
    "use strict";
    t(["jquery"], function(t) {
        function e(e) {
            return t.isFunction(e) || t.isPlainObject(e) ? e : {
                top: e,
                left: e
            }
        }
        var i = t.scrollTo = function(e, i, n) {
            return t(window).scrollTo(e, i, n)
        };
        return i.defaults = {
            axis: "xy",
            duration: 0,
            limit: !0
        }, i.window = function() {
            return t(window)._scrollable()
        }, t.fn._scrollable = function() {
            return this.map(function() {
                var e = this,
                    i = !e.nodeName || t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) !== -1;
                if (!i) return e;
                var n = (e.contentWindow || e).document || e.ownerDocument || e;
                return /webkit/i.test(navigator.userAgent) || "BackCompat" === n.compatMode ? n.body : n.documentElement
            })
        }, t.fn.scrollTo = function(n, s, o) {
            return "object" == typeof s && (o = s, s = 0), "function" == typeof o && (o = {
                onAfter: o
            }), "max" === n && (n = 9e9), o = t.extend({}, i.defaults, o), s = s || o.duration, o.queue = o.queue && o.axis.length > 1, o.queue && (s /= 2), o.offset = e(o.offset), o.over = e(o.over), this._scrollable().each(function() {
                function a(t) {
                    h.animate(u, s, o.easing, t && function() {
                        t.call(this, c, o)
                    })
                }
                if (null !== n) {
                    var r, l = this,
                        h = t(l),
                        c = n,
                        u = {},
                        d = h.is("html,body");
                    switch (typeof c) {
                        case "number":
                        case "string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(c)) {
                                c = e(c);
                                break
                            }
                            if (c = d ? t(c) : t(c, this), !c.length) return;
                        case "object":
                            (c.is || c.style) && (r = (c = t(c)).offset())
                    }
                    var p = t.isFunction(o.offset) && o.offset(l, c) || o.offset;
                    t.each(o.axis.split(""), function(t, e) {
                        var n = "x" === e ? "Left" : "Top",
                            s = n.toLowerCase(),
                            f = "scroll" + n,
                            g = l[f],
                            m = i.max(l, e);
                        if (r) u[f] = r[s] + (d ? 0 : g - h.offset()[s]), o.margin && (u[f] -= parseInt(c.css("margin" + n), 10) || 0, u[f] -= parseInt(c.css("border" + n + "Width"), 10) || 0), u[f] += p[s] || 0, o.over[s] && (u[f] += c["x" === e ? "width" : "height"]() * o.over[s]);
                        else {
                            var v = c[s];
                            u[f] = v.slice && "%" === v.slice(-1) ? parseFloat(v) / 100 * m : v
                        }
                        o.limit && /^\d+$/.test(u[f]) && (u[f] = u[f] <= 0 ? 0 : Math.min(u[f], m)), !t && o.queue && (g !== u[f] && a(o.onAfterFirst), delete u[f])
                    }), a(o.onAfter)
                }
            }).end()
        }, i.max = function(e, i) {
            var n = "x" === i ? "Width" : "Height",
                s = "scroll" + n;
            if (!t(e).is("html,body")) return e[s] - t(e)[n.toLowerCase()]();
            var o = "client" + n,
                a = e.ownerDocument.documentElement,
                r = e.ownerDocument.body;
            return Math.max(a[s], r[s]) - Math.min(a[o], r[o])
        }, i
    })
}("function" == typeof define && define.amd ? define : function(t, e) {
    "use strict";
    "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}),
function(t, e) {
    function i(e, i) {
        var s, o, a, r = e.nodeName.toLowerCase();
        return "area" === r ? (s = e.parentNode, o = s.name, !(!e.href || !o || "map" !== s.nodeName.toLowerCase()) && (a = t("img[usemap=#" + o + "]")[0], !!a && n(a))) : (/input|select|textarea|button|object/.test(r) ? !e.disabled : "a" === r ? e.href || i : i) && n(e)
    }

    function n(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    var s = 0,
        o = /^ui-id-\d+$/;
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        focus: function(e) {
            return function(i, n) {
                return "number" == typeof i ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(), n && n.call(e)
                    }, i)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus),
        scrollParent: function() {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        },
        zIndex: function(i) {
            if (i !== e) return this.css("zIndex", i);
            if (this.length)
                for (var n, s, o = t(this[0]); o.length && o[0] !== document;) {
                    if (n = o.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(o.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    o = o.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++s)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                o.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        }) : function(e, i, n) {
            return !!t.data(e, n[3])
        },
        focusable: function(e) {
            return i(e, !isNaN(t.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var n = t.attr(e, "tabindex"),
                s = isNaN(n);
            return (s || n >= 0) && i(e, !s)
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(i, n) {
        function s(e, i, n, s) {
            return t.each(o, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), s && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), i
        }
        var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            a = n.toLowerCase(),
            r = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
        t.fn["inner" + n] = function(i) {
            return i === e ? r["inner" + n].call(this) : this.each(function() {
                t(this).css(a, s(this, i) + "px")
            })
        }, t.fn["outer" + n] = function(e, i) {
            return "number" != typeof e ? r["outer" + n].call(this, e) : this.each(function() {
                t(this).css(a, s(this, e, !0, i) + "px")
            })
        }
    }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
        }
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({
        disableSelection: function() {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), t.extend(t.ui, {
        plugin: {
            add: function(e, i, n) {
                var s, o = t.ui[e].prototype;
                for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
            },
            call: function(t, e, i) {
                var n, s = t.plugins[e];
                if (s && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                    for (n = 0; n < s.length; n++) t.options[s[n][0]] && s[n][1].apply(t.element, i)
            }
        },
        hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                s = !1;
            return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
        }
    })
}(jQuery),
function(t, e) {
    var i = 0,
        n = Array.prototype.slice,
        s = t.cleanData;
    t.cleanData = function(e) {
        for (var i, n = 0; null != (i = e[n]); n++) try {
            t(i).triggerHandler("remove")
        } catch (o) {}
        s(e)
    }, t.widget = function(e, i, n) {
        var s, o, a, r, l = {},
            h = e.split(".")[0];
        e = e.split(".")[1], s = h + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][s.toLowerCase()] = function(e) {
            return !!t.data(e, s)
        }, t[h] = t[h] || {}, o = t[h][e], a = t[h][e] = function(t, e) {
            return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new a(t, e)
        }, t.extend(a, o, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), r = new i, r.options = t.widget.extend({}, r.options), t.each(n, function(e, n) {
            return t.isFunction(n) ? void(l[e] = function() {
                var t = function() {
                        return i.prototype[e].apply(this, arguments)
                    },
                    s = function(t) {
                        return i.prototype[e].apply(this, t)
                    };
                return function() {
                    var e, i = this._super,
                        o = this._superApply;
                    return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                }
            }()) : void(l[e] = n)
        }), a.prototype = t.widget.extend(r, {
            widgetEventPrefix: o ? r.widgetEventPrefix || e : e
        }, l, {
            constructor: a,
            namespace: h,
            widgetName: e,
            widgetFullName: s
        }), o ? (t.each(o._childConstructors, function(e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, a, i._proto)
        }), delete o._childConstructors) : i._childConstructors.push(a), t.widget.bridge(e, a)
    }, t.widget.extend = function(i) {
        for (var s, o, a = n.call(arguments, 1), r = 0, l = a.length; r < l; r++)
            for (s in a[r]) o = a[r][s], a[r].hasOwnProperty(s) && o !== e && (t.isPlainObject(o) ? i[s] = t.isPlainObject(i[s]) ? t.widget.extend({}, i[s], o) : t.widget.extend({}, o) : i[s] = o);
        return i
    }, t.widget.bridge = function(i, s) {
        var o = s.prototype.widgetFullName || i;
        t.fn[i] = function(a) {
            var r = "string" == typeof a,
                l = n.call(arguments, 1),
                h = this;
            return a = !r && l.length ? t.widget.extend.apply(null, [a].concat(l)) : a, r ? this.each(function() {
                var n, s = t.data(this, o);
                return s ? t.isFunction(s[a]) && "_" !== a.charAt(0) ? (n = s[a].apply(s, l), n !== s && n !== e ? (h = n && n.jquery ? h.pushStack(n.get()) : n, !1) : void 0) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + a + "'")
            }) : this.each(function() {
                var e = t.data(this, o);
                e ? e.option(a || {})._init() : t.data(this, o, new s(a, this))
            }), h
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === n && this.destroy()
                }
            }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(i, n) {
            var s, o, a, r = i;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (r = {}, s = i.split("."), i = s.shift(), s.length) {
                    for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; a < s.length - 1; a++) o[s[a]] = o[s[a]] || {}, o = o[s[a]];
                    if (i = s.pop(), 1 === arguments.length) return o[i] === e ? null : o[i];
                    o[i] = n
                } else {
                    if (1 === arguments.length) return this.options[i] === e ? null : this.options[i];
                    r[i] = n
                }
            return this._setOptions(r), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(e, i, n) {
            var s, o = this;
            "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, a) {
                function r() {
                    if (e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof a ? o[a] : a).apply(o, arguments)
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/),
                    h = l[1] + o.eventNamespace,
                    c = l[2];
                c ? s.delegate(c, h, r) : i.bind(h, r)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments)
            }
            var n = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, n) {
            var s, o, a = this.options[e];
            if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (s in o) s in i || (i[s] = o[s]);
            return this.element.trigger(i, n), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(n, s, o) {
            "string" == typeof s && (s = {
                effect: s
            });
            var a, r = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
            s = s || {}, "number" == typeof s && (s = {
                duration: s
            }), a = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), a && t.effects && t.effects.effect[r] ? n[e](s) : r !== e && n[r] ? n[r](s.duration, s.easing, o) : n.queue(function(i) {
                t(this)[e](), o && o.call(n[0]), i()
            })
        }
    })
}(jQuery),
function(t, e) {
    var i = !1;
    t(document).mouseup(function() {
        i = !1
    }), t.widget("ui.mouse", {
        version: "1.10.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(i) {
                if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!i) {
                this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var n = this,
                    s = 1 === e.which,
                    o = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(s && !o && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    n.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return n._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return n._mouseUp(t)
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), i = !0, !0))
            }
        },
        _mouseMove: function(e) {
            return t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery),
function(t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }

    function n(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }

    function s(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }
    t.ui = t.ui || {};
    var o, a = Math.max,
        r = Math.abs,
        l = Math.round,
        h = /left|center|right/,
        c = /top|center|bottom/,
        u = /[\+\-]\d+(\.[\d]+)?%?/,
        d = /^\w+/,
        p = /%$/,
        f = t.fn.position;
    t.position = {
            scrollbarWidth: function() {
                if (o !== e) return o;
                var i, n, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    a = s.children()[0];
                return t("body").append(s), i = a.offsetWidth, s.css("overflow", "scroll"), n = a.offsetWidth, i === n && (n = s[0].clientWidth), s.remove(), o = i - n
            },
            getScrollInfo: function(e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                    n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                    s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                    o = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
                return {
                    width: o ? t.position.scrollbarWidth() : 0,
                    height: s ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(e) {
                var i = t(e || window),
                    n = t.isWindow(i[0]),
                    s = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: n,
                    isDocument: s,
                    offset: i.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: n ? i.width() : i.outerWidth(),
                    height: n ? i.height() : i.outerHeight()
                }
            }
        }, t.fn.position = function(e) {
            if (!e || !e.of) return f.apply(this, arguments);
            e = t.extend({}, e);
            var o, p, g, m, v, b, y = t(e.of),
                _ = t.position.getWithinInfo(e.within),
                w = t.position.getScrollInfo(_),
                x = (e.collision || "flip").split(" "),
                k = {};
            return b = s(y), y[0].preventDefault && (e.at = "left top"), p = b.width, g = b.height, m = b.offset, v = t.extend({}, m), t.each(["my", "at"], function() {
                var t, i, n = (e[this] || "").split(" ");
                1 === n.length && (n = h.test(n[0]) ? n.concat(["center"]) : c.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = h.test(n[0]) ? n[0] : "center", n[1] = c.test(n[1]) ? n[1] : "center", t = u.exec(n[0]), i = u.exec(n[1]), k[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(n[0])[0], d.exec(n[1])[0]]
            }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), o = i(k.at, p, g), v.left += o[0], v.top += o[1], this.each(function() {
                var s, h, c = t(this),
                    u = c.outerWidth(),
                    d = c.outerHeight(),
                    f = n(this, "marginLeft"),
                    b = n(this, "marginTop"),
                    C = u + f + n(this, "marginRight") + w.width,
                    D = d + b + n(this, "marginBottom") + w.height,
                    T = t.extend({}, v),
                    S = i(k.my, c.outerWidth(), c.outerHeight());
                "right" === e.my[0] ? T.left -= u : "center" === e.my[0] && (T.left -= u / 2), "bottom" === e.my[1] ? T.top -= d : "center" === e.my[1] && (T.top -= d / 2), T.left += S[0], T.top += S[1], t.support.offsetFractions || (T.left = l(T.left), T.top = l(T.top)), s = {
                    marginLeft: f,
                    marginTop: b
                }, t.each(["left", "top"], function(i, n) {
                    t.ui.position[x[i]] && t.ui.position[x[i]][n](T, {
                        targetWidth: p,
                        targetHeight: g,
                        elemWidth: u,
                        elemHeight: d,
                        collisionPosition: s,
                        collisionWidth: C,
                        collisionHeight: D,
                        offset: [o[0] + S[0], o[1] + S[1]],
                        my: e.my,
                        at: e.at,
                        within: _,
                        elem: c
                    })
                }), e.using && (h = function(t) {
                    var i = m.left - T.left,
                        n = i + p - u,
                        s = m.top - T.top,
                        o = s + g - d,
                        l = {
                            target: {
                                element: y,
                                left: m.left,
                                top: m.top,
                                width: p,
                                height: g
                            },
                            element: {
                                element: c,
                                left: T.left,
                                top: T.top,
                                width: u,
                                height: d
                            },
                            horizontal: n < 0 ? "left" : i > 0 ? "right" : "center",
                            vertical: o < 0 ? "top" : s > 0 ? "bottom" : "middle"
                        };
                    p < u && r(i + n) < p && (l.horizontal = "center"), g < d && r(s + o) < g && (l.vertical = "middle"), a(r(i), r(n)) > a(r(s), r(o)) ? l.important = "horizontal" : l.important = "vertical", e.using.call(this, t, l)
                }), c.offset(t.extend(T, {
                    using: h
                }))
            })
        }, t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, n = e.within,
                        s = n.isWindow ? n.scrollLeft : n.offset.left,
                        o = n.width,
                        r = t.left - e.collisionPosition.marginLeft,
                        l = s - r,
                        h = r + e.collisionWidth - o - s;
                    e.collisionWidth > o ? l > 0 && h <= 0 ? (i = t.left + l + e.collisionWidth - o - s, t.left += l - i) : h > 0 && l <= 0 ? t.left = s : l > h ? t.left = s + o - e.collisionWidth : t.left = s : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = a(t.left - r, t.left)
                },
                top: function(t, e) {
                    var i, n = e.within,
                        s = n.isWindow ? n.scrollTop : n.offset.top,
                        o = e.within.height,
                        r = t.top - e.collisionPosition.marginTop,
                        l = s - r,
                        h = r + e.collisionHeight - o - s;
                    e.collisionHeight > o ? l > 0 && h <= 0 ? (i = t.top + l + e.collisionHeight - o - s, t.top += l - i) : h > 0 && l <= 0 ? t.top = s : l > h ? t.top = s + o - e.collisionHeight : t.top = s : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = a(t.top - r, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i, n, s = e.within,
                        o = s.offset.left + s.scrollLeft,
                        a = s.width,
                        l = s.isWindow ? s.scrollLeft : s.offset.left,
                        h = t.left - e.collisionPosition.marginLeft,
                        c = h - l,
                        u = h + e.collisionWidth - a - l,
                        d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        f = -2 * e.offset[0];
                    c < 0 ? (i = t.left + d + p + f + e.collisionWidth - a - o, (i < 0 || i < r(c)) && (t.left += d + p + f)) : u > 0 && (n = t.left - e.collisionPosition.marginLeft + d + p + f - l, (n > 0 || r(n) < u) && (t.left += d + p + f))
                },
                top: function(t, e) {
                    var i, n, s = e.within,
                        o = s.offset.top + s.scrollTop,
                        a = s.height,
                        l = s.isWindow ? s.scrollTop : s.offset.top,
                        h = t.top - e.collisionPosition.marginTop,
                        c = h - l,
                        u = h + e.collisionHeight - a - l,
                        d = "top" === e.my[1],
                        p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        g = -2 * e.offset[1];
                    c < 0 ? (n = t.top + p + f + g + e.collisionHeight - a - o, t.top + p + f + g > c && (n < 0 || n < r(c)) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || r(i) < u) && (t.top += p + f + g))
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var e, i, n, s, o, a = document.getElementsByTagName("body")[0],
                r = document.createElement("div");
            e = document.createElement(a ? "div" : "body"), n = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, a && t.extend(n, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (o in n) e.style[o] = n[o];
            e.appendChild(r), i = a || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", s = t(r).offset().left, t.support.offsetFractions = s > 10 && s < 11, e.innerHTML = "", i.removeChild(e)
        }()
}(jQuery),
function(t, e) {
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(t(this).offset()).appendTo("body")
            }), !0))
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _mouseDrag: function(e, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var n = this._uiHash();
                if (this._trigger("drag", e, n) === !1) return this._mouseUp({}), !1;
                this.position = n.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = this,
                n = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), !("original" === this.options.helper && !t.contains(this.element[0].ownerDocument, this.element[0])) && ("invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", e) !== !1 && i._clear()
            }) : this._trigger("stop", e) !== !1 && this._clear(), !1)
        },
        _mouseUp: function(e) {
            return t("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(e) {
            return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
        },
        _createHelper: function(e) {
            var i = this.options,
                n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, n, s = this.options;
            return s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = t(s.containment), n = i[0], void(n && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i))) : void(this.containment = null)
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1,
                s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: s.scrollTop(),
                left: s.scrollLeft()
            }), {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * n
            }
        },
        _generatePosition: function(e) {
            var i, n, s, o, a = this.options,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = e.pageX,
                h = e.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: r.scrollTop(),
                left: r.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (n = this.relative_container.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), a.grid && (s = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - a.grid[1] : s + a.grid[1] : s, o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o)), {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(e, i, n) {
            return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, n)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i) {
            var n = t(this).data("ui-draggable"),
                s = n.options,
                o = t.extend({}, i, {
                    item: n.element
                });
            n.sortables = [], t(s.connectToSortable).each(function() {
                var i = t.data(this, "ui-sortable");
                i && !i.options.disabled && (n.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", e, o))
            })
        },
        stop: function(e, i) {
            var n = t(this).data("ui-draggable"),
                s = t.extend({}, i, {
                    item: n.element
                });
            t.each(n.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === n.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, s))
            })
        },
        drag: function(e, i) {
            var n = t(this).data("ui-draggable"),
                s = this;
            t.each(n.sortables, function() {
                var o = !1,
                    a = this;
                this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, t.each(n.sortables, function() {
                    return this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this !== a && this.instance._intersectsWith(this.instance.containerCache) && t.contains(a.instance.element[0], this.instance.element[0]) && (o = !1), o
                })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(s).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = n.offset.click.top, this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, n._trigger("toSortable", e), n.dropped = this.instance.element, n.currentItem = n.element, this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), n._trigger("fromSortable", e), n.dropped = !1)
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var e = t("body"),
                i = t(this).data("ui-draggable").options;
            e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
        },
        stop: function() {
            var e = t(this).data("ui-draggable").options;
            e._cursor && t("body").css("cursor", e._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i) {
            var n = t(i.helper),
                s = t(this).data("ui-draggable").options;
            n.css("opacity") && (s._opacity = n.css("opacity")), n.css("opacity", s.opacity)
        },
        stop: function(e, i) {
            var n = t(this).data("ui-draggable").options;
            n._opacity && t(i.helper).css("opacity", n._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var e = t(this).data("ui-draggable");
            e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
        },
        drag: function(e) {
            var i = t(this).data("ui-draggable"),
                n = i.options,
                s = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (n.axis && "x" === n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + n.scrollSpeed : e.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + n.scrollSpeed : e.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(document).scrollTop() < n.scrollSensitivity ? s = t(document).scrollTop(t(document).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < n.scrollSensitivity && (s = t(document).scrollTop(t(document).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(document).scrollLeft() < n.scrollSensitivity ? s = t(document).scrollLeft(t(document).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < n.scrollSensitivity && (s = t(document).scrollLeft(t(document).scrollLeft() + n.scrollSpeed)))), s !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function() {
            var e = t(this).data("ui-draggable"),
                i = e.options;
            e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var i = t(this),
                    n = i.offset();
                this !== e.element[0] && e.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: n.top,
                    left: n.left
                })
            })
        },
        drag: function(e, i) {
            var n, s, o, a, r, l, h, c, u, d, p = t(this).data("ui-draggable"),
                f = p.options,
                g = f.snapTolerance,
                m = i.offset.left,
                v = m + p.helperProportions.width,
                b = i.offset.top,
                y = b + p.helperProportions.height;
            for (u = p.snapElements.length - 1; u >= 0; u--) r = p.snapElements[u].left, l = r + p.snapElements[u].width, h = p.snapElements[u].top, c = h + p.snapElements[u].height, v < r - g || m > l + g || y < h - g || b > c + g || !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), {
                snapItem: p.snapElements[u].item
            })), p.snapElements[u].snapping = !1) : ("inner" !== f.snapMode && (n = Math.abs(h - y) <= g, s = Math.abs(c - b) <= g, o = Math.abs(r - v) <= g, a = Math.abs(l - m) <= g, n && (i.position.top = p._convertPositionTo("relative", {
                top: h - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), s && (i.position.top = p._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top - p.margins.top), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: r - p.helperProportions.width
            }).left - p.margins.left), a && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left - p.margins.left)), d = n || s || o || a, "outer" !== f.snapMode && (n = Math.abs(h - b) <= g, s = Math.abs(c - y) <= g, o = Math.abs(r - m) <= g, a = Math.abs(l - v) <= g, n && (i.position.top = p._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top - p.margins.top), s && (i.position.top = p._convertPositionTo("relative", {
                top: c - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: r
            }).left - p.margins.left), a && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l - p.helperProportions.width
            }).left - p.margins.left)), !p.snapElements[u].snapping && (n || s || o || a || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), {
                snapItem: p.snapElements[u].item
            })), p.snapElements[u].snapping = n || s || o || a || d)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function() {
            var e, i = this.data("ui-draggable").options,
                n = t.makeArray(t(i.stack)).sort(function(e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
            n.length && (e = parseInt(t(n[0]).css("zIndex"), 10) || 0, t(n).each(function(i) {
                t(this).css("zIndex", e + i)
            }), this.css("zIndex", e + n.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i) {
            var n = t(i.helper),
                s = t(this).data("ui-draggable").options;
            n.css("zIndex") && (s._zIndex = n.css("zIndex")), n.css("zIndex", s.zIndex)
        },
        stop: function(e, i) {
            var n = t(this).data("ui-draggable").options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex)
        }
    })
}(jQuery),
function(t, e) {
    function i(t, e, i) {
        return t > e && t < e + i
    }
    t.widget("ui.droppable", {
        version: "1.10.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var e, i = this.options,
                n = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(n) ? n : function(t) {
                return t.is(n)
            }, this.proportions = function() {
                return arguments.length ? void(e = arguments[0]) : e ? e : e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            }, t.ui.ddmanager.droppables[i.scope] = t.ui.ddmanager.droppables[i.scope] || [], t.ui.ddmanager.droppables[i.scope].push(this), i.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; e < i.length; e++) i[e] === this && i.splice(e, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(e, i) {
            "accept" === e && (this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            }), t.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var n = i || t.ui.ddmanager.current,
                s = !1;
            return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var e = t.data(this, "ui-droppable");
                if (e.options.greedy && !e.options.disabled && e.options.scope === n.options.scope && e.accept.call(e.element[0], n.currentItem || n.element) && t.ui.intersect(n, t.extend(e, {
                        offset: e.element.offset()
                    }), e.options.tolerance)) return s = !0, !1
            }), !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(n)), this.element)))
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        }
    }), t.ui.intersect = function(t, e, n) {
        if (!e.offset) return !1;
        var s, o, a = (t.positionAbs || t.position.absolute).left,
            r = (t.positionAbs || t.position.absolute).top,
            l = a + t.helperProportions.width,
            h = r + t.helperProportions.height,
            c = e.offset.left,
            u = e.offset.top,
            d = c + e.proportions().width,
            p = u + e.proportions().height;
        switch (n) {
            case "fit":
                return c <= a && l <= d && u <= r && h <= p;
            case "intersect":
                return c < a + t.helperProportions.width / 2 && l - t.helperProportions.width / 2 < d && u < r + t.helperProportions.height / 2 && h - t.helperProportions.height / 2 < p;
            case "pointer":
                return s = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, o = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, i(o, u, e.proportions().height) && i(s, c, e.proportions().width);
            case "touch":
                return (r >= u && r <= p || h >= u && h <= p || r < u && h > p) && (a >= c && a <= d || l >= c && l <= d || a < c && l > d);
            default:
                return !1
        }
    }, t.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(e, i) {
            var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                a = i ? i.type : null,
                r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (n = 0; n < o.length; n++)
                if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                    for (s = 0; s < r.length; s++)
                        if (r[s] === o[n].element[0]) {
                            o[n].proportions().height = 0;
                            continue t
                        }
                    o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === a && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({
                        width: o[n].element[0].offsetWidth,
                        height: o[n].element[0].offsetHeight
                    }))
                }
        },
        drop: function(e, i) {
            var n = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), n
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").bind("scroll.droppable", function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var n, s, o, a = t.ui.intersect(e, this, this.options.tolerance),
                        r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (s = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
                        return t.data(this, "ui-droppable").options.scope === s
                    }), o.length && (n = t.data(o[0], "ui-droppable"), n.greedyChild = "isover" === r)), n && "isover" === r && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), n && "isout" === r && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                }
            })
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }
}(jQuery),
function(t, e) {
    function i(t) {
        return parseInt(t, 10) || 0
    }

    function n(t) {
        return !isNaN(parseInt(t, 10))
    }
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var e, i, n, s, o, a = this,
                r = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!r.aspectRatio,
                    aspectRatio: r.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; i < e.length; i++) n = t.trim(e[i]), o = "ui-resizable-" + n, s = t("<div class='ui-resizable-handle " + o + "'></div>"), s.css({
                    zIndex: r.zIndex
                }), "se" === n && s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[n] = ".ui-resizable-" + n, this.element.append(s);
            this._renderAxis = function(e) {
                var i, n, s, o;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), t(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                a.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = s && s[1] ? s[1] : "se")
            }), r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                r.disabled || (t(this).removeClass("ui-resizable-autohide"), a._handles.show())
            }).mouseleave(function() {
                r.disabled || a.resizing || (t(this).addClass("ui-resizable-autohide"), a._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function(e) {
            var i, n, s = !1;
            for (i in this.handles) n = t(this.handles[i])[0], (n === e.target || t.contains(n, e.target)) && (s = !0);
            return !this.options.disabled && s
        },
        _mouseStart: function(e) {
            var n, s, o, a = this.options,
                r = this.element.position(),
                l = this.element;
            return this.resizing = !0, /absolute/.test(l.css("position")) ? l.css({
                position: "absolute",
                top: l.css("top"),
                left: l.css("left")
            }) : l.is(".ui-draggable") && l.css({
                position: "absolute",
                top: r.top,
                left: r.left
            }), this._renderProxy(), n = i(this.helper.css("left")), s = i(this.helper.css("top")), a.containment && (n += t(a.containment).scrollLeft() || 0, s += t(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: n,
                top: s
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: l.width(),
                height: l.height()
            }, this.originalSize = this._helper ? {
                width: l.outerWidth(),
                height: l.outerHeight()
            } : {
                width: l.width(),
                height: l.height()
            }, this.originalPosition = {
                left: n,
                top: s
            }, this.sizeDiff = {
                width: l.outerWidth() - l.width(),
                height: l.outerHeight() - l.height()
            }, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === o ? this.axis + "-resize" : o), l.addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function(e) {
            var i, n = this.helper,
                s = {},
                o = this.originalMousePosition,
                a = this.axis,
                r = this.position.top,
                l = this.position.left,
                h = this.size.width,
                c = this.size.height,
                u = e.pageX - o.left || 0,
                d = e.pageY - o.top || 0,
                p = this._change[a];
            return !!p && (i = p.apply(this, [e, u, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== r && (s.top = this.position.top + "px"), this.position.left !== l && (s.left = this.position.left + "px"), this.size.width !== h && (s.width = this.size.width + "px"), this.size.height !== c && (s.height = this.size.height + "px"), n.css(s), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || this._trigger("resize", e, this.ui()), !1)
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, n, s, o, a, r, l, h = this.options,
                c = this;
            return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && t.ui.hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = n ? 0 : c.sizeDiff.width, a = {
                width: c.helper.width() - o,
                height: c.helper.height() - s
            }, r = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, l = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(t.extend(a, {
                top: l,
                left: r
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, s, o, a, r = this.options;
            a = {
                minWidth: n(r.minWidth) ? r.minWidth : 0,
                maxWidth: n(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: n(r.minHeight) ? r.minHeight : 0,
                maxHeight: n(r.maxHeight) ? r.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, o = a.maxWidth / this.aspectRatio, e > a.minWidth && (a.minWidth = e), s > a.minHeight && (a.minHeight = s), i < a.maxWidth && (a.maxWidth = i), o < a.maxHeight && (a.maxHeight = o)), this._vBoundaries = a
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(), n(t.left) && (this.position.left = t.left), n(t.top) && (this.position.top = t.top), n(t.height) && (this.size.height = t.height), n(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position,
                i = this.size,
                s = this.axis;
            return n(t.height) ? t.width = t.height * this.aspectRatio : n(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                i = this.axis,
                s = n(t.width) && e.maxWidth && e.maxWidth < t.width,
                o = n(t.height) && e.maxHeight && e.maxHeight < t.height,
                a = n(t.width) && e.minWidth && e.minWidth > t.width,
                r = n(t.height) && e.minHeight && e.minHeight > t.height,
                l = this.originalPosition.left + this.originalSize.width,
                h = this.position.top + this.size.height,
                c = /sw|nw|w/.test(i),
                u = /nw|ne|n/.test(i);
            return a && (t.width = e.minWidth), r && (t.height = e.minHeight), s && (t.width = e.maxWidth), o && (t.height = e.maxHeight), a && c && (t.left = l - e.minWidth), s && c && (t.left = l - e.maxWidth), r && u && (t.top = h - e.minHeight), o && u && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var t, e, i, n, s, o = this.helper || this.element;
                for (t = 0; t < this._proportionallyResizeElements.length; t++) {
                    if (s = this._proportionallyResizeElements[t], !this.borderDif)
                        for (this.borderDif = [], i = [s.css("borderTopWidth"), s.css("borderRightWidth"), s.css("borderBottomWidth"), s.css("borderLeftWidth")], n = [s.css("paddingTop"), s.css("paddingRight"), s.css("paddingBottom"), s.css("paddingLeft")], e = 0; e < i.length; e++) this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(n[e], 10) || 0);
                    s.css({
                        height: o.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: o.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize,
                    n = this.originalPosition;
                return {
                    left: n.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var n = this.originalSize,
                    s = this.originalPosition;
                return {
                    top: s.top + i,
                    height: n.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
            },
            sw: function(e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
            },
            ne: function(e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
            },
            nw: function(e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).data("ui-resizable"),
                n = i.options,
                s = i._proportionallyResizeElements,
                o = s.length && /textarea/i.test(s[0].nodeName),
                a = o && t.ui.hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                r = o ? 0 : i.sizeDiff.width,
                l = {
                    width: i.size.width - r,
                    height: i.size.height - a
                },
                h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, c && h ? {
                top: c,
                left: h
            } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function() {
                    var n = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    s && s.length && t(s[0]).css({
                        width: n.width,
                        height: n.height
                    }), i._updateCache(n), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, n, s, o, a, r, l, h = t(this).data("ui-resizable"),
                c = h.options,
                u = h.element,
                d = c.containment,
                p = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
            p && (h.containerElement = t(p), /document/.test(d) || d === document ? (h.containerOffset = {
                left: 0,
                top: 0
            }, h.containerPosition = {
                left: 0,
                top: 0
            }, h.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(p), n = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
                n[t] = i(e.css("padding" + s))
            }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
                height: e.innerHeight() - n[3],
                width: e.innerWidth() - n[1]
            }, s = h.containerOffset, o = h.containerSize.height, a = h.containerSize.width, r = t.ui.hasScroll(p, "left") ? p.scrollWidth : a, l = t.ui.hasScroll(p) ? p.scrollHeight : o, h.parentData = {
                element: p,
                left: s.left,
                top: s.top,
                width: r,
                height: l
            }))
        },
        resize: function(e) {
            var i, n, s, o, a = t(this).data("ui-resizable"),
                r = a.options,
                l = a.containerOffset,
                h = a.position,
                c = a._aspectRatio || e.shiftKey,
                u = {
                    top: 0,
                    left: 0
                },
                d = a.containerElement;
            d[0] !== document && /static/.test(d.css("position")) && (u = l), h.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio), a.position.left = r.helper ? l.left : 0), h.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio), a.position.top = a._helper ? l.top : 0), a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top, i = Math.abs((a._helper ? a.offset.left - u.left : a.offset.left - u.left) + a.sizeDiff.width), n = Math.abs((a._helper ? a.offset.top - u.top : a.offset.top - l.top) + a.sizeDiff.height), s = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), s && o && (i -= Math.abs(a.parentData.left)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio)), n + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - n, c && (a.size.width = a.size.height * a.aspectRatio))
        },
        stop: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                n = e.containerOffset,
                s = e.containerPosition,
                o = e.containerElement,
                a = t(e.helper),
                r = a.offset(),
                l = a.outerWidth() - e.sizeDiff.width,
                h = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: r.left - s.left - n.left,
                width: l,
                height: h
            }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: r.left - s.left - n.left,
                width: l,
                height: h
            })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                n = function(e) {
                    t(e).each(function() {
                        var e = t(this);
                        e.data("ui-resizable-alsoresize", {
                            width: parseInt(e.width(), 10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10)
                        })
                    })
                };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? n(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], n(i.alsoResize)) : t.each(i.alsoResize, function(t) {
                n(t)
            })
        },
        resize: function(e, i) {
            var n = t(this).data("ui-resizable"),
                s = n.options,
                o = n.originalSize,
                a = n.originalPosition,
                r = {
                    height: n.size.height - o.height || 0,
                    width: n.size.width - o.width || 0,
                    top: n.position.top - a.top || 0,
                    left: n.position.left - a.left || 0
                },
                l = function(e, n) {
                    t(e).each(function() {
                        var e = t(this),
                            s = t(this).data("ui-resizable-alsoresize"),
                            o = {},
                            a = n && n.length ? n : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        t.each(a, function(t, e) {
                            var i = (s[e] || 0) + (r[e] || 0);
                            i && i >= 0 && (o[e] = i || null)
                        }), e.css(o)
                    })
                };
            "object" != typeof s.alsoResize || s.alsoResize.nodeType ? l(s.alsoResize) : t.each(s.alsoResize, function(t, e) {
                l(t, e)
            })
        },
        stop: function() {
            t(this).removeData("resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                n = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: n.height,
                width: n.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                n = e.size,
                s = e.originalSize,
                o = e.originalPosition,
                a = e.axis,
                r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                l = r[0] || 1,
                h = r[1] || 1,
                c = Math.round((n.width - s.width) / l) * l,
                u = Math.round((n.height - s.height) / h) * h,
                d = s.width + c,
                p = s.height + u,
                f = i.maxWidth && i.maxWidth < d,
                g = i.maxHeight && i.maxHeight < p,
                m = i.minWidth && i.minWidth > d,
                v = i.minHeight && i.minHeight > p;
            i.grid = r, m && (d += l), v && (p += h), f && (d -= l), g && (p -= h), /^(se|s|e)$/.test(a) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.top = o.top - u) : /^(sw)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.left = o.left - c) : (p - h > 0 ? (e.size.height = p, e.position.top = o.top - u) : (e.size.height = h, e.position.top = o.top + s.height - h), d - l > 0 ? (e.size.width = d, e.position.left = o.left - c) : (e.size.width = l, e.position.left = o.left + s.width - l))
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.selectable", t.ui.mouse, {
        version: "1.10.4",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var e, i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function() {
                    var e = t(this),
                        i = e.offset();
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: i.left,
                        top: i.top,
                        right: i.left + e.outerWidth(),
                        bottom: i.top + e.outerHeight(),
                        startselected: !1,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function(e) {
            var i = this,
                n = this.options;
            this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var n = t.data(this, "selectable-item");
                n.startselected = !0, e.metaKey || e.ctrlKey || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
                    unselecting: n.element
                }))
            }), t(e.target).parents().addBack().each(function() {
                var n, s = t.data(this, "selectable-item");
                if (s) return n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), s.$element.removeClass(n ? "ui-unselecting" : "ui-selected").addClass(n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
                    selecting: s.element
                }) : i._trigger("unselecting", e, {
                    unselecting: s.element
                }), !1
            }))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, n = this,
                    s = this.options,
                    o = this.opos[0],
                    a = this.opos[1],
                    r = e.pageX,
                    l = e.pageY;
                return o > r && (i = r, r = o, o = i), a > l && (i = l, l = a, a = i), this.helper.css({
                    left: o,
                    top: a,
                    width: r - o,
                    height: l - a
                }), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"),
                        h = !1;
                    i && i.element !== n.element[0] && ("touch" === s.tolerance ? h = !(i.left > r || i.right < o || i.top > l || i.bottom < a) : "fit" === s.tolerance && (h = i.left > o && i.right < r && i.top > a && i.bottom < l), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, {
                        unselecting: i.element
                    }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {
                        unselecting: i.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                var n = t.data(this, "selectable-item");
                n.$element.removeClass("ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, {
                    unselected: n.element
                })
            }), t(".ui-selecting", this.element[0]).each(function() {
                var n = t.data(this, "selectable-item");
                n.$element.removeClass("ui-selecting").addClass("ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, {
                    selected: n.element
                })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    })
}(jQuery),
function(t, e) {
    function i(t, e, i) {
        return t > e && t < e + i
    }

    function n(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = !!this.items.length && ("x" === t.axis || n(this.items[0].item)), this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(e, i) {
            var n = null,
                s = !1,
                o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() {
                if (t.data(this, o.widgetName + "-item") === o) return n = t(this), !1
            }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), !!n && (!(this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each(function() {
                this === e.target && (s = !0)
            }), !s)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function(e, i, n) {
            var s, o, a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var i, n, s, o, a = this.options,
                r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (n = this.items[i], s = n.item[0], o = this._intersectsWithPointer(n), o && n.instance === this.currentContainer && !(s === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === s || t.contains(this.placeholder[0], s) || "semi-dynamic" === this.options.type && t.contains(this.element[0], s))) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                    this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var n = this,
                        s = this.placeholder.offset(),
                        o = this.options.axis,
                        a = {};
                    o && "x" !== o || (a.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                        n._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !n.length && e.key && n.push(e.key + "="), n.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, i.each(function() {
                n.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), n
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                n = this.positionAbs.top,
                s = n + this.helperProportions.height,
                o = t.left,
                a = o + t.width,
                r = t.top,
                l = r + t.height,
                h = this.offset.click.top,
                c = this.offset.click.left,
                u = "x" === this.options.axis || n + h > r && n + h < l,
                d = "y" === this.options.axis || e + c > o && e + c < a,
                p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function(t) {
            var e = "x" === this.options.axis || i(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                n = "y" === this.options.axis || i(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                s = e && n,
                o = this._getDragVerticalDirection(),
                a = this._getDragHorizontalDirection();
            return !!s && (this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1))
        },
        _intersectsWithSides: function(t) {
            var e = i(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                n = i(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                s = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && n || "left" === o && !n : s && ("down" === s && e || "up" === s && !e)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            function i() {
                r.push(this)
            }
            var n, s, o, a, r = [],
                l = [],
                h = this._connectWith();
            if (h && e)
                for (n = h.length - 1; n >= 0; n--)
                    for (o = t(h[n]), s = o.length - 1; s >= 0; s--) a = t.data(o[s], this.widgetFullName), a && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
            return t(r)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; i < e.length; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i, n, s, o, a, r, l, h, c = this.items,
                u = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (s = t(d[i]), n = s.length - 1; n >= 0; n--) o = t.data(s[n], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                        item: this.currentItem
                    }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (a = u[i][1], r = u[i][0], n = 0, h = r.length; n < h; n++) l = t(r[n]), l.data(this.widgetName + "-item", a), c.push({
                    item: l,
                    instance: a,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, n, s, o;
            for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, n = e.options;
            n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                element: function() {
                    var n = e.currentItem[0].nodeName.toLowerCase(),
                        s = t("<" + n + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === n ? e.currentItem.children().each(function() {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(s)
                    }) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                },
                update: function(t, s) {
                    i && !n.forcePlaceholderSize || (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function(e) {
            var s, o, a, r, l, h, c, u, d, p, f = null,
                g = null;
            for (s = this.containers.length - 1; s >= 0; s--)
                if (!t.contains(this.currentItem[0], this.containers[s].element[0]))
                    if (this._intersectsWith(this.containers[s].containerCache)) {
                        if (f && t.contains(this.containers[s].element[0], f.element[0])) continue;
                        f = this.containers[s], g = s
                    } else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", e, this._uiHash(this)), this.containers[s].containerCache.over = 0);
            if (f)
                if (1 === this.containers.length) this.containers[g].containerCache.over || (this.containers[g]._trigger("over", e, this._uiHash(this)), this.containers[g].containerCache.over = 1);
                else {
                    for (a = 1e4, r = null, p = f.floating || n(this.currentItem), l = p ? "left" : "top", h = p ? "width" : "height", c = this.positionAbs[l] + this.offset.click[l], o = this.items.length - 1; o >= 0; o--) t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (p && !i(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height) || (u = this.items[o].item.offset()[l], d = !1, Math.abs(u - c) > Math.abs(u + this.items[o][h] - c) && (d = !0, u += this.items[o][h]), Math.abs(u - c) < a && (a = Math.abs(u - c), r = this.items[o], this.direction = d ? "up" : "down")));
                    if (!r && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[g]) return;
                    r ? this._rearrange(e, r, null, !0) : this._rearrange(e, null, this.containers[g].element, !0), this._trigger("change", e, this._uiHash()), this.containers[g]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", e, this._uiHash(this)), this.containers[g].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options,
                n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), n[0].style.width && !i.forceHelperSize || n.width(this.currentItem.width()), n[0].style.height && !i.forceHelperSize || n.height(this.currentItem.height()), n
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, n, s = this.options;
            "parent" === s.containment && (s.containment = this.helper[0].parentNode), "document" !== s.containment && "window" !== s.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === s.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === s.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1,
                s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
            }
        },
        _generatePosition: function(e) {
            var i, n, s = this.options,
                o = e.pageX,
                a = e.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay(function() {
                s === this.counter && this.refreshPositions(!n)
            })
        },
        _clear: function(t, e) {
            function i(t, e, i) {
                return function(n) {
                    i._trigger(t, n, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var n, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (n in this._storedCSS) "auto" !== this._storedCSS[n] && "static" !== this._storedCSS[n] || (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && s.push(function(t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (e || (s.push(function(t) {
                    this._trigger("remove", t, this._uiHash())
                }), s.push(function(t) {
                    return function(e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), s.push(function(t) {
                    return function(e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), n = 0; n < s.length; n++) s[n].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (n = 0; n < s.length; n++) s[n].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
}(jQuery),
function(t, e) {
    var i = 0,
        n = {},
        s = {};
    n.height = n.paddingTop = n.paddingBottom = n.borderTopWidth = n.borderBottomWidth = "hide", s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show", t.widget("ui.accordion", {
        version: "1.10.4",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : t(),
                content: this.active.length ? this.active.next() : t()
            }
        },
        _createIcons: function() {
            var e = this.options.icons;
            e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var t;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void("disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e)))
        },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode,
                    n = this.headers.length,
                    s = this.headers.index(e.target),
                    o = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(s + 1) % n];
                        break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(s - 1 + n) % n];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        o = this.headers[0];
                        break;
                    case i.END:
                        o = this.headers[n - 1]
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), e.preventDefault())
            }
        },
        _panelKeyDown: function(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
        },
        refresh: function() {
            var e = this.options;
            this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var e, n = this.options,
                s = n.heightStyle,
                o = this.element.parent(),
                a = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++i);
            this.active = this._findActive(n.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(e) {
                var i = t(this),
                    n = i.attr("id"),
                    s = i.next(),
                    o = s.attr("id");
                n || (n = a + "-header-" + e, i.attr("id", n)), o || (o = a + "-panel-" + e, s.attr("id", o)), i.attr("aria-controls", o), s.attr("aria-labelledby", n)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(n.event), "fill" === s ? (e = o.height(), this.element.siblings(":visible").each(function() {
                var i = t(this),
                    n = i.css("position");
                "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
            }), this.headers.each(function() {
                e -= t(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() {
                e = Math.max(e, t(this).css("height", "").height())
            }).height(e))
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : t()
        },
        _setupEvents: function(e) {
            var i = {
                keydown: "_keydown"
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(e) {
            var i = this.options,
                n = this.active,
                s = t(e.currentTarget),
                o = s[0] === n[0],
                a = o && i.collapsible,
                r = a ? t() : s.next(),
                l = n.next(),
                h = {
                    oldHeader: n,
                    oldPanel: l,
                    newHeader: a ? t() : s,
                    newPanel: r
                };
            e.preventDefault(), o && !i.collapsible || this._trigger("beforeActivate", e, h) === !1 || (i.active = !a && this.headers.index(s), this.active = o ? t() : s, this._toggle(h), n.removeClass("ui-accordion-header-active ui-state-active"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), o || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(e) {
            var i = e.newPanel,
                n = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({
                "aria-hidden": "true"
            }), n.prev().attr("aria-selected", "false"), i.length && n.length ? n.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                tabIndex: 0,
                "aria-expanded": "true"
            })
        },
        _animate: function(t, e, i) {
            var o, a, r, l = this,
                h = 0,
                c = t.length && (!e.length || t.index() < e.index()),
                u = this.options.animate || {},
                d = c && u.down || u,
                p = function() {
                    l._toggleComplete(i)
                };
            return "number" == typeof d && (r = d), "string" == typeof d && (a = d), a = a || d.easing || u.easing, r = r || d.duration || u.duration, e.length ? t.length ? (o = t.show().outerHeight(), e.animate(n, {
                duration: r,
                easing: a,
                step: function(t, e) {
                    e.now = Math.round(t)
                }
            }), void t.hide().animate(s, {
                duration: r,
                easing: a,
                complete: p,
                step: function(t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? h += i.now : "content" !== l.options.heightStyle && (i.now = Math.round(o - e.outerHeight() - h), h = 0)
                }
            })) : e.animate(n, r, a, p) : t.animate(s, r, a, p)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel;
            e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.autocomplete", {
        version: "1.10.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var e, i, n, s = this.element[0].nodeName.toLowerCase(),
                o = "textarea" === s,
                a = "input" === s;
            this.isMultiLine = !!o || !a && this.element.prop("isContentEditable"), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(s) {
                    if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
                    e = !1, n = !1, i = !1;
                    var o = t.ui.keyCode;
                    switch (s.keyCode) {
                        case o.PAGE_UP:
                            e = !0, this._move("previousPage", s);
                            break;
                        case o.PAGE_DOWN:
                            e = !0, this._move("nextPage", s);
                            break;
                        case o.UP:
                            e = !0, this._keyEvent("previous", s);
                            break;
                        case o.DOWN:
                            e = !0, this._keyEvent("next", s);
                            break;
                        case o.ENTER:
                        case o.NUMPAD_ENTER:
                            this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                            break;
                        case o.TAB:
                            this.menu.active && this.menu.select(s);
                            break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(s), s.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(s)
                    }
                },
                keypress: function(n) {
                    if (e) return e = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || n.preventDefault());
                    if (!i) {
                        var s = t.ui.keyCode;
                        switch (n.keyCode) {
                            case s.PAGE_UP:
                                this._move("previousPage", n);
                                break;
                            case s.PAGE_DOWN:
                                this._move("nextPage", n);
                                break;
                            case s.UP:
                                this._keyEvent("previous", n);
                                break;
                            case s.DOWN:
                                this._keyEvent("next", n)
                        }
                    }
                },
                input: function(t) {
                    return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                }
            }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                        var e = this;
                        this.document.one("mousedown", function(n) {
                            n.target === e.element[0] || n.target === i || t.contains(i, n.target) || e.close()
                        })
                    })
                },
                menufocus: function(e, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                        t(e.target).trigger(e.originalEvent)
                    });
                    var n = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", e, {
                        item: n
                    }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value) : this.liveRegion.text(n.value)
                },
                menuselect: function(t, e) {
                    var i = e.item.data("ui-autocomplete-item"),
                        n = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function() {
                        this.previous = n, this.selectedItem = i
                    })), !1 !== this._trigger("select", t, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                }
            }), this.liveRegion = t("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
        },
        _initSource: function() {
            var e, i, n = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) {
                n(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, s) {
                n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        s(t)
                    },
                    error: function() {
                        s([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
        },
        _search: function(t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var e = ++this.requestIndex;
            return t.proxy(function(t) {
                e === this.requestIndex && this.__response(t), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {
                content: t
            }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function(t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function(t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                }, e)
            })
        },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var n = this;
            t.each(i, function(t, i) {
                n._renderItemData(e, i)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function(e, i) {
            return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
        },
        _move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault())
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, i) {
            var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function(t) {
                return n.test(t.label || t.value || t)
            })
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var e;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
        }
    })
}(jQuery),
function(t, e) {
    var i, n = "ui-button ui-widget ui-state-default ui-corner-all",
        s = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        o = function() {
            var e = t(this);
            setTimeout(function() {
                e.find(":ui-button").button("refresh")
            }, 1)
        },
        a = function(e) {
            var i = e.name,
                n = e.form,
                s = t([]);
            return i && (i = i.replace(/'/g, "\\'"), s = n ? t(n).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function() {
                return !this.form
            })), s
        };
    t.widget("ui.button", {
        version: "1.10.4",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, o), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var e = this,
                s = this.options,
                r = "checkbox" === this.type || "radio" === this.type,
                l = r ? "" : "ui-state-active";
            null === s.label && (s.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(n).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                s.disabled || this === i && t(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                s.disabled || t(this).removeClass(l)
            }).bind("click" + this.eventNamespace, function(t) {
                s.disabled && (t.preventDefault(), t.stopImmediatePropagation())
            }), this._on({
                focus: function() {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function() {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            }), r && this.element.bind("change" + this.eventNamespace, function() {
                e.refresh()
            }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (s.disabled) return !1
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (s.disabled) return !1;
                t(this).addClass("ui-state-active"), e.buttonElement.attr("aria-pressed", "true");
                var i = e.element[0];
                a(i).not(i).map(function() {
                    return t(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return !s.disabled && (t(this).addClass("ui-state-active"), i = this, void e.document.one("mouseup", function() {
                    i = null
                }))
            }).bind("mouseup" + this.eventNamespace, function() {
                return !s.disabled && void t(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(e) {
                return !s.disabled && void(e.keyCode !== t.ui.keyCode.SPACE && e.keyCode !== t.ui.keyCode.ENTER || t(this).addClass("ui-state-active"))
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                t(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                e.keyCode === t.ui.keyCode.SPACE && t(this).click()
            })), this._setOption("disabled", s.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var t, e, i;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(n + " ui-state-active " + s).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(t, e) {
            return this._super(t, e), "disabled" === t ? (this.element.prop("disabled", !!e), void(e && this.buttonElement.removeClass("ui-state-focus"))) : void this._resetButton()
        },
        refresh: function() {
            var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? a(this.element[0]).each(function() {
                t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
            var e = this.buttonElement.removeClass(s),
                i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                n = this.options.icons,
                o = n.primary && n.secondary,
                a = [];
            n.primary || n.secondary ? (this.options.text && a.push("ui-button-text-icon" + (o ? "s" : n.primary ? "-primary" : "-secondary")), n.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (a.push(o ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : a.push("ui-button-text-only"), e.addClass(a.join(" "))
        }
    }), t.widget("ui.buttonset", {
        version: "1.10.4",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(t, e) {
            "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
        },
        refresh: function() {
            var e = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery),
function(t, e) {
    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function n(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(i, "mouseout", function() {
            t(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && t(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && t(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function() {
            t.datepicker._isDisabledDatepicker(o.inline ? e.parent()[0] : o.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && t(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && t(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function s(e, i) {
        t.extend(e, i);
        for (var n in i) null == i[n] && (e[n] = i[n]);
        return e
    }
    t.extend(t.ui, {
        datepicker: {
            version: "1.10.4"
        }
    });
    var o, a = "datepicker";
    t.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return s(this._defaults, t || {}), this
        },
        _attachDatepicker: function(e, i) {
            var n, s, o;
            n = e.nodeName.toLowerCase(), s = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), s), o.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
        },
        _newInst: function(e, i) {
            var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, i) {
            var n = t(e);
            i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, a, i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var n, s, o, a = this._get(i, "appendText"),
                r = this._get(i, "isRTL");
            i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), "focus" !== n && "both" !== n || e.focus(this._showDatepicker), "button" !== n && "both" !== n || (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: o,
                alt: s,
                title: s
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                src: o,
                alt: s,
                title: s
            }) : s)), e[r ? "before" : "after"](i.trigger), i.trigger.click(function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
            }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, n, s, o = new Date(2009, 11, 20),
                    a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function(t) {
                    for (i = 0, n = 0, s = 0; s < t.length; s++) t[s].length > i && (i = t[s].length, n = s);
                    return n
                }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var n = t(e);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, a, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, n, o, r) {
            var l, h, c, u, d, p = this._dialogInst;
            return p || (this.uuid += 1, l = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + l + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, t.data(this._dialogInput[0], a, p)), s(p.settings, o || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, this._pos || (h = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, c / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], a, p), this
        },
        _destroyDatepicker: function(e) {
            var i, n = t(e),
                s = t.data(e, a);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, a), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" !== i && "span" !== i || n.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(e) {
            var i, n, s = t(e),
                o = t.data(e, a);
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : "div" !== i && "span" !== i || (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function(e) {
            var i, n, s = t(e),
                o = t.data(e, a);
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : "div" !== i && "span" !== i || (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; e < this._disabledInputs.length; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return t.data(e, a)
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(i, n, o) {
            var a, r, l, h, c = this._getInst(i);
            return 2 === arguments.length && "string" == typeof n ? "defaults" === n ? t.extend({}, t.datepicker._defaults) : c ? "all" === n ? t.extend({}, c.settings) : this._get(c, n) : null : (a = n || {}, "string" == typeof n && (a = {}, a[n] = o), void(c && (this._curInst === c && this._hideDatepicker(), r = this._getDateDatepicker(i, !0), l = this._getMinMaxDate(c, "min"), h = this._getMinMaxDate(c, "max"), s(c.settings, a), null !== l && a.dateFormat !== e && a.minDate === e && (c.settings.minDate = this._formatDate(c, l)), null !== h && a.dateFormat !== e && a.maxDate === e && (c.settings.maxDate = this._formatDate(c, h)), "disabled" in a && (a.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), c), this._autoSize(c), this._setDate(c, r), this._updateAlternate(c), this._updateDatepicker(c))))
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function(e) {
            var i, n, s, o = t.datepicker._getInst(e.target),
                a = !0,
                r = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), a = !1;
                    break;
                case 13:
                    return s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), s[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), i = t.datepicker._get(o, "onSelect"), i ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                default:
                    a = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
            a && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) {
            var i, n, s = t.datepicker._getInst(e.target);
            if (t.datepicker._get(s, "constrainInput")) return i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || n < " " || !i || i.indexOf(n) > -1
        },
        _doKeyUp: function(e) {
            var i, n = t.datepicker._getInst(e.target);
            if (n.input.val() !== n.lastVal) try {
                i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n)), i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n))
            } catch (s) {}
            return !0
        },
        _showDatepicker: function(e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var i, n, o, a, r, l, h;
                i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(i, "beforeShow"), o = n ? n.apply(e, [e, i]) : {}, o !== !1 && (s(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), a = !1, t(e).parents().each(function() {
                    return a |= "fixed" === t(this).css("position"), !a
                }), r = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(i), r = t.datepicker._checkOffset(i, r, a), i.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute",
                    display: "none",
                    left: r.left + "px",
                    top: r.top + "px"
                }), i.inline || (l = t.datepicker._get(i, "showAnim"), h = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), h) : i.dpDiv[l || "show"](l ? h : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, o = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, n = this._getNumberOfMonths(e),
                s = n[1],
                a = 17;
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
                s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", a * s + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                    i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
                }, 0))
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function(e, i, n) {
            var s = e.dpDiv.outerWidth(),
                o = e.dpDiv.outerHeight(),
                a = e.input ? e.input.outerWidth() : 0,
                r = e.input ? e.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                h = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? s - a : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + r) : 0), i
        },
        _findPos: function(e) {
            for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"];
            return i = t(e).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(e) {
            var i, n, s, o, r = this._curInst;
            !r || e && r !== t.data(e, a) || this._datepickerShowing && (i = this._get(r, "showAnim"), n = this._get(r, "duration"), s = function() {
                t.datepicker._tidyDialog(r)
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), n, s) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, o = this._get(r, "onClose"), o && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    n = t.datepicker._getInst(i[0]);
                (i[0].id === t.datepicker._mainDivId || 0 !== i.parents("#" + t.datepicker._mainDivId).length || i.hasClass(t.datepicker.markerClassName) || i.closest("." + t.datepicker._triggerClass).length || !t.datepicker._datepickerShowing || t.datepicker._inDialog && t.blockUI) && (!i.hasClass(t.datepicker.markerClassName) || t.datepicker._curInst === n) || t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, n) {
            var s = t(e),
                o = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
        },
        _gotoToday: function(e) {
            var i, n = t(e),
                s = this._getInst(n[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
        },
        _selectMonthYear: function(e, i, n) {
            var s = t(e),
                o = this._getInst(s[0]);
            o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s)
        },
        _selectDay: function(e, i, n, s) {
            var o, a = t(e);
            t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var n, s = t(e),
                o = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), n = this._get(o, "onSelect"), n ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, n, s, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).each(function() {
                t(this).val(s)
            }))
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [e > 0 && e < 6, ""]
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function(e, i, n) {
            if (null == e || null == i) throw "Invalid arguments";
            if (i = "object" == typeof i ? i.toString() : i + "", "" === i) return null;
            var s, o, a, r, l = 0,
                h = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (n ? n.dayNames : null) || this._defaults.dayNames,
                p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (n ? n.monthNames : null) || this._defaults.monthNames,
                g = -1,
                m = -1,
                v = -1,
                b = -1,
                y = !1,
                _ = function(t) {
                    var i = s + 1 < e.length && e.charAt(s + 1) === t;
                    return i && s++, i
                },
                w = function(t) {
                    var e = _(t),
                        n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        s = new RegExp("^\\d{1," + n + "}"),
                        o = i.substring(l).match(s);
                    if (!o) throw "Missing number at position " + l;
                    return l += o[0].length, parseInt(o[0], 10)
                },
                x = function(e, n, s) {
                    var o = -1,
                        a = t.map(_(e) ? s : n, function(t, e) {
                            return [
                                [e, t]
                            ]
                        }).sort(function(t, e) {
                            return -(t[1].length - e[1].length)
                        });
                    if (t.each(a, function(t, e) {
                            var n = e[1];
                            if (i.substr(l, n.length).toLowerCase() === n.toLowerCase()) return o = e[0], l += n.length, !1
                        }), o !== -1) return o + 1;
                    throw "Unknown name at position " + l
                },
                k = function() {
                    if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (s = 0; s < e.length; s++)
                if (y) "'" !== e.charAt(s) || _("'") ? k() : y = !1;
                else switch (e.charAt(s)) {
                    case "d":
                        v = w("d");
                        break;
                    case "D":
                        x("D", u, d);
                        break;
                    case "o":
                        b = w("o");
                        break;
                    case "m":
                        m = w("m");
                        break;
                    case "M":
                        m = x("M", p, f);
                        break;
                    case "y":
                        g = w("y");
                        break;
                    case "@":
                        r = new Date(w("@")), g = r.getFullYear(), m = r.getMonth() + 1, v = r.getDate();
                        break;
                    case "!":
                        r = new Date((w("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, v = r.getDate();
                        break;
                    case "'":
                        _("'") ? k() : y = !0;
                        break;
                    default:
                        k()
                }
            if (l < i.length && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
            if (g === -1 ? g = (new Date).getFullYear() : g < 100 && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (g <= c ? 0 : -100)), b > -1)
                for (m = 1, v = b;;) {
                    if (o = this._getDaysInMonth(g, m - 1), v <= o) break;
                    m++, v -= o
                }
            if (r = this._daylightSavingAdjust(new Date(g, m - 1, v)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== v) throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(t, e, i) {
            if (!e) return "";
            var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function(e) {
                    var i = n + 1 < t.length && t.charAt(n + 1) === e;
                    return i && n++, i
                },
                h = function(t, e, i) {
                    var n = "" + e;
                    if (l(t))
                        for (; n.length < i;) n = "0" + n;
                    return n
                },
                c = function(t, e, i, n) {
                    return l(t) ? n[e] : i[e]
                },
                u = "",
                d = !1;
            if (e)
                for (n = 0; n < t.length; n++)
                    if (d) "'" !== t.charAt(n) || l("'") ? u += t.charAt(n) : d = !1;
                    else switch (t.charAt(n)) {
                        case "d":
                            u += h("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += c("D", e.getDay(), s, o);
                            break;
                        case "o":
                            u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += h("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += c("M", e.getMonth(), a, r);
                            break;
                        case "y":
                            u += l("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(n)
                    }
            return u
        },
        _possibleChars: function(t) {
            var e, i = "",
                n = !1,
                s = function(i) {
                    var n = e + 1 < t.length && t.charAt(e + 1) === i;
                    return n && e++, n
                };
            for (e = 0; e < t.length; e++)
                if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
            return i
        },
        _get: function(t, i) {
            return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    n = t.lastVal = t.input ? t.input.val() : null,
                    s = this._getDefaultDate(t),
                    o = s,
                    a = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, n, a) || s
                } catch (r) {
                    n = e ? "" : n
                }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(e, i, n) {
            var s = function(t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t), e
                },
                o = function(i) {
                    try {
                        return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                    } catch (n) {}
                    for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = s.getFullYear(), a = s.getMonth(), r = s.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = l.exec(i); h;) {
                        switch (h[2] || "d") {
                            case "d":
                            case "D":
                                r += parseInt(h[1], 10);
                                break;
                            case "w":
                            case "W":
                                r += 7 * parseInt(h[1], 10);
                                break;
                            case "m":
                            case "M":
                                a += parseInt(h[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
                                break;
                            case "y":
                            case "Y":
                                o += parseInt(h[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
                        }
                        h = l.exec(i)
                    }
                    return new Date(o, a, r)
                },
                a = null == i || "" === i ? n : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? n : s(i) : new Date(i.getTime());
            return a = a && "Invalid Date" === a.toString() ? n : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function(t, e, i) {
            var n = !e,
                s = t.selectedMonth,
                o = t.selectedYear,
                a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return e
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"),
                n = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        t.datepicker._adjustDate(n, -i, "M")
                    },
                    next: function() {
                        t.datepicker._adjustDate(n, +i, "M")
                    },
                    hide: function() {
                        t.datepicker._hideDatepicker()
                    },
                    today: function() {
                        t.datepicker._gotoToday(n)
                    },
                    selectDay: function() {
                        return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return t.datepicker._selectMonthYear(n, this, "M"), !1
                    },
                    selectYear: function() {
                        return t.datepicker._selectMonthYear(n, this, "Y"), !1
                    }
                };
                t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, n, s, o, a, r, l, h, c, u, d, p, f, g, m, v, b, y, _, w, x, k, C, D, T, S, I, M, N, P, E, A, H, z, W, O, j, L, F = new Date,
                R = this._daylightSavingAdjust(new Date(F.getFullYear(), F.getMonth(), F.getDate())),
                B = this._get(t, "isRTL"),
                q = this._get(t, "showButtonPanel"),
                Y = this._get(t, "hideIfNoPrevNext"),
                $ = this._get(t, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(t),
                K = this._get(t, "showCurrentAtPos"),
                X = this._get(t, "stepMonths"),
                V = 1 !== U[0] || 1 !== U[1],
                Q = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                G = this._getMinMaxDate(t, "min"),
                J = this._getMinMaxDate(t, "max"),
                Z = t.drawMonth - K,
                tt = t.drawYear;
            if (Z < 0 && (Z += 12, tt--), J)
                for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = G && e < G ? G : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) Z--, Z < 0 && (Z = 11, tt--);
            for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = $ ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - X, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : Y ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = $ ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, Z + X, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>" : Y ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? Q : R, a = $ ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (B ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), b = this._get(t, "selectOtherMonths"), y = this._getDefaultDate(t), _ = "", x = 0; x < U[0]; x++) {
                for (k = "", this.maxRows = 4, C = 0; C < U[1]; C++) {
                    if (D = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), T = " ui-corner-all", S = "", V) {
                        if (S += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                            case 0:
                                S += " ui-datepicker-group-first", T = " ui-corner-" + (B ? "right" : "left");
                                break;
                            case U[1] - 1:
                                S += " ui-datepicker-group-last", T = " ui-corner-" + (B ? "left" : "right");
                                break;
                            default:
                                S += " ui-datepicker-group-middle", T = ""
                        }
                        S += "'>"
                    }
                    for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === x ? B ? o : n : "") + (/all|right/.test(T) && 0 === x ? B ? n : o : "") + this._generateMonthYearHeader(t, Z, tt, G, J, x > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", I = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; w < 7; w++) M = (w + c) % 7, I += "<th" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[M] + "'>" + p[M] + "</span></th>";
                    for (S += I + "</tr></thead><tbody>", N = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, N)), P = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, E = Math.ceil((P + N) / 7), A = V && this.maxRows > E ? this.maxRows : E, this.maxRows = A, H = this._daylightSavingAdjust(new Date(tt, Z, 1 - P)), z = 0; z < A; z++) {
                        for (S += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "", w = 0; w < 7; w++) O = m ? m.apply(t.input ? t.input[0] : null, [H]) : [!0, ""], j = H.getMonth() !== Z, L = j && !b || !O[0] || G && H < G || J && H > J, W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (j ? " ui-datepicker-other-month" : "") + (H.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || y.getTime() === H.getTime() && y.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (j && !v ? "" : " " + O[1] + (H.getTime() === Q.getTime() ? " " + this._currentClass : "") + (H.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (j && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (j && !v ? "&#xa0;" : L ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === R.getTime() ? " ui-state-highlight" : "") + (H.getTime() === Q.getTime() ? " ui-state-active" : "") + (j ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
                        S += W + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, tt++), S += "</tbody></table>" + (V ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += S
                }
                _ += k
            }
            return _ += h, t._keyEvent = !1, _
        },
        _generateMonthYearHeader: function(t, e, i, n, s, o, a, r) {
            var l, h, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
                v = this._get(t, "changeYear"),
                b = this._get(t, "showMonthAfterYear"),
                y = "<div class='ui-datepicker-title'>",
                _ = "";
            if (o || !m) _ += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
            else {
                for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++)(!l || c >= n.getMonth()) && (!h || c <= s.getMonth()) && (_ += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                _ += "</select>"
            }
            if (b || (y += _ + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", o || !v) y += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
                            var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                            return isNaN(e) ? d : e
                        }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, g = s ? Math.min(g, s.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= g; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", y += t.yearshtml, t.yearshtml = null
                }
            return y += this._get(t, "yearSuffix"), b && (y += (!o && m && v ? "" : "&#xa0;") + _), y += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var n = t.drawYear + ("Y" === i ? e : 0),
                s = t.drawMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                n = this._getMinMaxDate(t, "max"),
                s = i && e < i ? i : e;
            return n && s > n ? n : s
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function(t, e, i, n) {
            var s = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, n + (e < 0 ? e : s[0] * s[1]), 1));
            return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function(t, e) {
            var i, n, s = this._getMinMaxDate(t, "min"),
                o = this._getMinMaxDate(t, "max"),
                a = null,
                r = null,
                l = this._get(t, "yearRange");
            return l && (i = l.split(":"), n = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += n), i[1].match(/[+\-].*/) && (r += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || e.getFullYear() <= r)
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, n) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
        }
    }), t.fn.datepicker = function(e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.4"
}(jQuery),
function(t, e) {
    var i = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        n = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    t.widget("ui.dialog", {
        version: "1.10.4",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    i < 0 && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i, n = this;
            if (this._isOpen && this._trigger("beforeClose", e) !== !1) {
                if (this._isOpen = !1, this._destroyOverlay(), !this.opener.filter(":focusable").focus().length) try {
                    i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && t(i).blur()
                } catch (s) {}
                this._hide(this.uiDialog, this.options.hide, function() {
                    n._trigger("close", e)
                })
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, e) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !e && this._trigger("focus", t), i
        },
        open: function() {
            var e = this;
            return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                e._focusTabbable(), e._trigger("focus")
            }), void this._trigger("open"))
        },
        _focusTabbable: function() {
            var t = this.element.find("[autofocus]");
            t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
        },
        _keepFocus: function(e) {
            function i() {
                var e = this.document[0].activeElement,
                    i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                i || this._focusTabbable()
            }
            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB) {
                        var i = this.uiDialog.find(":tabbable"),
                            n = i.filter(":first"),
                            s = i.filter(":last");
                        e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (s.focus(1), e.preventDefault()) : (n.focus(1), e.preventDefault())
                    }
                },
                mousedown: function(t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function(e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function(t) {
                    t.preventDefault(), this.close(t)
                }
            }), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            })
        },
        _title: function(t) {
            this.options.title || t.html("&#160;"), t.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function() {
            var e = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(i, function(i, n) {
                var s, o;
                n = t.isFunction(n) ? {
                    click: n,
                    text: i
                } : n, n = t.extend({
                    type: "button"
                }, n), s = n.click, n.click = function() {
                    s.apply(e.element[0], arguments)
                }, o = {
                    icons: n.icons,
                    text: n.showText
                }, delete n.icons, delete n.showText, t("<button></button>", n).button(o).appendTo(e.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            var i = this,
                n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(n, s) {
                    t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s))
                },
                drag: function(t, n) {
                    i._trigger("drag", t, e(n))
                },
                stop: function(s, o) {
                    n.position = [o.position.left - i.document.scrollLeft(), o.position.top - i.document.scrollTop()], t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o))
                }
            })
        },
        _makeResizable: function() {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            var i = this,
                n = this.options,
                s = n.resizable,
                o = this.uiDialog.css("position"),
                a = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: this._minHeight(),
                handles: a,
                start: function(n, s) {
                    t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s))
                },
                resize: function(t, n) {
                    i._trigger("resize", t, e(n))
                },
                stop: function(s, o) {
                    n.height = t(this).height(), n.width = t(this).width(), t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o))
                }
            }).css("position", o)
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function(e) {
            var s = this,
                o = !1,
                a = {};
            t.each(e, function(t, e) {
                s._setOption(t, e), t in i && (o = !0), t in n && (a[t] = e)
            }), o && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", a)
        },
        _setOption: function(t, e) {
            var i, n, s = this.uiDialog;
            "dialogClass" === t && s.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                label: "" + e
            }), "draggable" === t && (i = s.is(":data(ui-draggable)"), i && !e && s.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (n = s.is(":data(ui-resizable)"), n && !e && s.resizable("destroy"), n && "string" == typeof e && s.resizable("option", "handles", e), n || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, e, i, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(e) {
            return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = this,
                    i = this.widgetFullName;
                t.ui.dialog.overlayInstances || this._delay(function() {
                    t.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(n) {
                        e._allowInteraction(n) || (n.preventDefault(), t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                    })
                }), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), t.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function() {
            this.options.modal && this.overlay && (t.ui.dialog.overlayInstances--, t.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    }), t.ui.dialog.overlayInstances = 0, t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
        _position: function() {
            var e, i = this.options.position,
                n = [],
                s = [0, 0];
            i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (n = i.split ? i.split(" ") : [i[0], i[1]], 1 === n.length && (n[1] = n[0]), t.each(["left", "top"], function(t, e) {
                +n[t] === n[t] && (s[t] = n[t], n[t] = e)
            }), i = {
                my: n[0] + (s[0] < 0 ? s[0] : "+" + s[0]) + " " + n[1] + (s[1] < 0 ? s[1] : "+" + s[1]),
                at: n.join(" ")
            }), i = t.extend({}, t.ui.dialog.prototype.options.position, i)) : i = t.ui.dialog.prototype.options.position, e = this.uiDialog.is(":visible"), e || this.uiDialog.show(), this.uiDialog.position(i), e || this.uiDialog.hide()
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.menu", {
        version: "1.10.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function(t) {
                this.options.disabled && t.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-state-disabled > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(e) {
                    var i = t(e.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(e) {
                    t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var n, s, o, a, r, l = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    l = !1, s = this.previousFilter || "", o = String.fromCharCode(e.keyCode), a = !1, clearTimeout(this.filterTimer), o === s ? a = !0 : o = s + o, r = new RegExp("^" + i(o), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return r.test(t(this).children("a").text())
                    }), n = a && n.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : n, n.length || (o = String.fromCharCode(e.keyCode), r = new RegExp("^" + i(o), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return r.test(t(this).children("a").text())
                    })), n.length ? (this.focus(e, n), n.length > 1 ? (this.previousFilter = o, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            l && e.preventDefault()
        },
        _activate: function(t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var e, i = this.options.icons.submenu,
                n = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), n.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this),
                    n = e.prev("a"),
                    s = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                n.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", n.attr("id"))
            }), e = n.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), e.children(":not(.ui-menu-item)").each(function() {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
        },
        focus: function(t, e) {
            var i, n;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(e) {
            var i, n, s, o, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.height(), s < 0 ? this.activeMenu.scrollTop(o + s) : s + r > a && this.activeMenu.scrollTop(o + s - a + r))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                item: this.active
            }))
        },
        _startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function(e) {
            var i = t.extend({ of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                n.length || (n = this.element), this._close(n), this.blur(e), this.activeMenu = n
            }, this.delay)
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var n;
            this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, n)
        },
        nextPage: function(e) {
            var i, n, s;
            return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = t(this), i.offset().top - n - s < 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(e)
        },
        previousPage: function(e) {
            var i, n, s;
            return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = t(this), i.offset().top - n + s > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(e)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.progressbar", {
        version: "1.10.4",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function(t) {
            return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
        },
        _constrainedValue: function(t) {
            return t === e && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var e = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    })
}(jQuery),
function(t, e) {
    var i = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var e, i, n = this.options,
                s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                a = [];
            for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; e < i; e++) a.push(o);
            this.handles = s.add(t(a.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function() {
            var e = this.options,
                i = "";
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            var t = this.handles.add(this.range).filter("a");
            this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, n, s, o, a, r, l, h, c = this,
                u = this.options;
            return !u.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var i = Math.abs(n - c.values(e));
                (s > i || s === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (s = i, o = t(this), a = e)
            }), r = this._start(e, a), r !== !1 && (this._mouseSliding = !0, this._handleIndex = a, o.addClass("ui-state-active").focus(), l = o.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - l.left - o.width() / 2,
                top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, n), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                    x: t.pageX,
                    y: t.pageY
                },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, n, s, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), n < 0 && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o)
        },
        _start: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
        },
        _slide: function(t, e, i) {
            var n, s, o;
            this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > n || 1 === e && i < n) && (i = n), i !== this.values(e) && (s = this.values(), s[e] = i, o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: s
            }), n = this.values(e ? 0 : 1), o !== !1 && this.values(e, i))) : i !== this.value() && (o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }), o !== !1 && this.value(i))
        },
        _stop: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
        },
        _change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
            }
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(e, i) {
            var n, s, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (n = this.options.values, s = arguments[0], o = 0; o < n.length; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var n, s = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), n = 0; n < s; n += 1) this._change(null, n);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, n;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (t <= this._valueMin()) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                n = t - i;
            return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var e, i, n, s, o, a = this.options.range,
                r = this.options,
                l = this,
                h = !this._animateOff && r.animate,
                c = {};
            this.options.values && this.options.values.length ? this.handles.each(function(n) {
                i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate), 1 === n && l.range[h ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate), 1 === n && l.range[h ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), e = i
            }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === a && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === a && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }))
        },
        _handleEvents: {
            keydown: function(e) {
                var n, s, o, a, r = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), n = this._start(e, r), n === !1)) return
                }
                switch (a = this.options.step, s = o = this.options.values && this.options.values.length ? this.values(r) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        o = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        o = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        o = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / i);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        o = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / i);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (s === this._valueMax()) return;
                        o = this._trimAlignValue(s + a);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (s === this._valueMin()) return;
                        o = this._trimAlignValue(s - a)
                }
                this._slide(e, r, o)
            },
            click: function(t) {
                t.preventDefault()
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
            }
        }
    })
}(jQuery),
function(t) {
    function e(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }
    t.widget("ui.spinner", {
        version: "1.10.4",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var e = {},
                i = this.element;
            return t.each(["min", "max", "step"], function(t, n) {
                var s = i.attr(n);
                void 0 !== s && s.length && (e[n] = s)
            }), e
        },
        _events: {
            keydown: function(t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(t) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
            },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(t)
                    }, 100), t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() {
                    var t = this.element[0] === this.document[0].activeElement;
                    t || (this.element.focus(), this.previous = n, this._delay(function() {
                        this.previous = n
                    }))
                }
                var n;
                n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, i.call(this)
                }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) {
                if (t(e.currentTarget).hasClass("ui-state-active")) return this._start(e) !== !1 && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
        },
        _keydown: function(e) {
            var i = this.options,
                n = t.ui.keyCode;
            switch (e.keyCode) {
                case n.UP:
                    return this._repeat(null, 1, e), !0;
                case n.DOWN:
                    return this._repeat(null, -1, e), !0;
                case n.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case n.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
        },
        _start: function(t) {
            return !(!this.spinning && this._trigger("start", t) === !1) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
        },
        _repeat: function(t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, e, i)
            }, t), this._spin(e * this.options.step, i)
        },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
                value: i
            }) === !1 || (this._value(i), this.counter++)
        },
        _increment: function(e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function(t) {
            var e = t.toString(),
                i = e.indexOf(".");
            return i === -1 ? 0 : e.length - i - 1
        },
        _adjustValue: function(t) {
            var e, i, n = this.options;
            return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && t < n.min ? n.min : t
        },
        _stop: function(t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },
        _setOption: function(t, e) {
            if ("culture" === t || "numberFormat" === t) {
                var i = this._parse(this.element.val());
                return this.options[t] = e, void this.element.val(this._format(i))
            }
            "max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: e(function(t) {
            this._super(t), this._value(this.element.val())
        }),
        _parse: function(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        },
        _format: function(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function(t, e) {
            var i;
            "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function(t) {
            this._stepUp(t)
        }),
        _stepUp: function(t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
        },
        stepDown: e(function(t) {
            this._stepDown(t)
        }),
        _stepDown: function(t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
        },
        pageUp: e(function(t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: e(function(t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function(t) {
            return arguments.length ? void e(this._value).call(this, t) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    })
}(jQuery),
function(t, e) {
    function i() {
        return ++s
    }

    function n(t) {
        return t = t.cloneNode(!1), t.hash.length > 1 && decodeURIComponent(t.href.replace(o, "")) === decodeURIComponent(location.href.replace(o, ""))
    }
    var s = 0,
        o = /#.*$/;
    t.widget("ui.tabs", {
        version: "1.10.4",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var e = this,
                i = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var e = this.options.active,
                i = this.options.collapsible,
                n = location.hash.substring(1);
            return null === e && (n && this.tabs.each(function(i, s) {
                if (t(s).attr("aria-controls") === n) return e = i, !1
            }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== e && e !== -1 || (e = !!this.tabs.length && 0)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), e === -1 && (e = !i && 0)), !i && e === !1 && this.anchors.length && (e = 0), e
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            }
        },
        _tabKeydown: function(e) {
            var i = t(this.document[0].activeElement).closest("li"),
                n = this.tabs.index(i),
                s = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        n++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        s = !1, n--;
                        break;
                    case t.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);
                    default:
                        return
                }
                e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", n)
                }, this.delay))
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(e, i) {
            function n() {
                return e > s && (e = 0), e < 0 && (e = s), e
            }
            for (var s = this.tabs.length - 1; t.inArray(n(), this.options.disabled) !== -1;) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
        },
        _tabId: function(t) {
            return t.attr("aria-controls") || "ui-tabs-" + i()
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t)
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var e = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return t("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = t(), this.anchors.each(function(i, s) {
                var o, a, r, l = t(s).uniqueId().attr("id"),
                    h = t(s).closest("li"),
                    c = h.attr("aria-controls");
                n(s) ? (o = s.hash, a = e.element.find(e._sanitizeSelector(o))) : (r = e._tabId(h), o = "#" + r, a = e.element.find(o), a.length || (a = e._createPanel(r), a.insertAfter(e.panels[i - 1] || e.tablist)), a.attr("aria-live", "polite")), a.length && (e.panels = e.panels.add(a)), c && h.data("ui-tabs-aria-controls", c), h.attr({
                    "aria-controls": o.substring(1),
                    "aria-labelledby": l
                }), a.attr("aria-labelledby", l)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var i, n = 0; i = this.tabs[n]; n++) e === !0 || t.inArray(n, e) !== -1 ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e
        },
        _setupEvents: function(e) {
            var i = {
                click: function(t) {
                    t.preventDefault()
                }
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, n = this.element.parent();
            "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                    n = e.css("position");
                "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options,
                n = this.active,
                s = t(e.currentTarget),
                o = s.closest("li"),
                a = o[0] === n[0],
                r = a && i.collapsible,
                l = r ? t() : this._getPanelForTab(o),
                h = n.length ? this._getPanelForTab(n) : t(),
                c = {
                    oldTab: n,
                    oldPanel: h,
                    newTab: r ? t() : o,
                    newPanel: l
                };
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = !r && this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
        },
        _toggle: function(e, i) {
            function n() {
                o.running = !1, o._trigger("activate", e, i)
            }

            function s() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, n) : (a.show(), n())
            }
            var o = this,
                a = i.newPanel,
                r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), s()), r.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), i.oldTab.attr("aria-selected", "false"), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), a.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), i.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(e) {
            var i, n = this._findActive(e);
            n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return e === !1 ? t() : this.tabs.eq(e)
        },
        _getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(i) {
            var n = this.options.disabled;
            n !== !1 && (i === e ? n = !1 : (i = this._getIndex(i), n = t.isArray(n) ? t.map(n, function(t) {
                return t !== i ? t : null
            }) : t.map(this.tabs, function(t, e) {
                return e !== i ? e : null
            })), this._setupDisabled(n))
        },
        disable: function(i) {
            var n = this.options.disabled;
            if (n !== !0) {
                if (i === e) n = !0;
                else {
                    if (i = this._getIndex(i), t.inArray(i, n) !== -1) return;
                    n = t.isArray(n) ? t.merge([i], n).sort() : [i]
                }
                this._setupDisabled(n)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var s = this,
                o = this.tabs.eq(e),
                a = o.find(".ui-tabs-anchor"),
                r = this._getPanelForTab(o),
                l = {
                    tab: o,
                    panel: r
                };
            n(a[0]) || (this.xhr = t.ajax(this._ajaxSettings(a, i, l)), this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function(t) {
                setTimeout(function() {
                    r.html(t), s._trigger("load", i, l)
                }, 1)
            }).complete(function(t, e) {
                setTimeout(function() {
                    "abort" === e && s.panels.stop(!1, !0), o.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(e, i, n) {
            var s = this;
            return {
                url: e.attr("href"),
                beforeSend: function(e, o) {
                    return s._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: o
                    }, n))
                }
            }
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
}(jQuery),
function(t) {
    function e(e, i) {
        var n = (e.attr("aria-describedby") || "").split(/\s+/);
        n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
    }

    function i(e) {
        var i = e.data("ui-tooltip-id"),
            n = (e.attr("aria-describedby") || "").split(/\s+/),
            s = t.inArray(i, n);
        s !== -1 && n.splice(s, 1), e.removeData("ui-tooltip-id"), n = t.trim(n.join(" ")), n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
    }
    var n = 0;
    t.widget("ui.tooltip", {
        version: "1.10.4",
        options: {
            content: function() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
        },
        _setOption: function(e, i) {
            var n = this;
            return "disabled" === e ? (this[i ? "_disable" : "_enable"](), void(this.options[e] = i)) : (this._super(e, i), void("content" === e && t.each(this.tooltips, function(t, e) {
                n._updateContent(e)
            })))
        },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, n) {
                var s = t.Event("blur");
                s.target = s.currentTarget = n[0], e.close(s, !0)
            }), this.element.find(this.options.items).addBack().each(function() {
                var e = t(this);
                e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            })
        },
        open: function(e) {
            var i = this,
                n = t(e ? e.target : this.element).closest(this.options.items);
            n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() {
                var e, n = t(this);
                n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: n.attr("title")
                }, n.attr("title", ""))
            }), this._updateContent(n, e))
        },
        _updateContent: function(t, e) {
            var i, n = this.options.content,
                s = this,
                o = e ? e.type : null;
            return "string" == typeof n ? this._open(e, t, n) : (i = n.call(t[0], function(i) {
                t.data("ui-tooltip-open") && s._delay(function() {
                    e && (e.type = o), this._open(e, t, i)
                })
            }), void(i && this._open(e, t, i)))
        },
        _open: function(i, n, s) {
            function o(t) {
                h.of = t, a.is(":hidden") || a.position(h)
            }
            var a, r, l, h = t.extend({}, this.options.position);
            if (s) {
                if (a = this._find(n), a.length) return void a.find(".ui-tooltip-content").html(s);
                n.is("[title]") && (i && "mouseover" === i.type ? n.attr("title", "") : n.removeAttr("title")), a = this._tooltip(n), e(n, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
                    mousemove: o
                }), o(i)) : a.position(t.extend({ of: n
                }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (l = this.delayedShow = setInterval(function() {
                    a.is(":visible") && (o(h.of), clearInterval(l))
                }, t.fx.interval)), this._trigger("open", i, {
                    tooltip: a
                }), r = {
                    keyup: function(e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var i = t.Event(e);
                            i.currentTarget = n[0], this.close(i, !0)
                        }
                    },
                    remove: function() {
                        this._removeTooltip(a)
                    }
                }, i && "mouseover" !== i.type || (r.mouseleave = "close"), i && "focusin" !== i.type || (r.focusout = "close"), this._on(!0, n, r)
            }
        },
        close: function(e) {
            var n = this,
                s = t(e ? e.currentTarget : this.element),
                o = this._find(s);
            this.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && s.attr("title", s.data("ui-tooltip-title")), i(s), o.stop(!0), this._hide(o, this.options.hide, function() {
                n._removeTooltip(t(this))
            }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                t(i.element).attr("title", i.title), delete n.parents[e]
            }), this.closing = !0, this._trigger("close", e, {
                tooltip: o
            }), this.closing = !1)
        },
        _tooltip: function(e) {
            var i = "ui-tooltip-" + n++,
                s = t("<div>").attr({
                    id: i,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return t("<div>").addClass("ui-tooltip-content").appendTo(s), s.appendTo(this.document[0].body), this.tooltips[i] = e, s
        },
        _find: function(e) {
            var i = e.data("ui-tooltip-id");
            return i ? t("#" + i) : t()
        },
        _removeTooltip: function(t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, n) {
                var s = t.Event("blur");
                s.target = s.currentTarget = n[0], e.close(s, !0), t("#" + i).remove(), n.data("ui-tooltip-title") && (n.attr("title", n.data("ui-tooltip-title")), n.removeData("ui-tooltip-title"))
            })
        }
    })
}(jQuery),
function(t, e) {
    var i = "ui-effects-";
    t.effects = {
            effect: {}
        },
        function(t, e) {
            function i(t, e, i) {
                var n = u[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
            }

            function n(e) {
                var i = h(),
                    n = i._rgba = [];
                return e = e.toLowerCase(), f(l, function(t, s) {
                    var o, a = s.re.exec(e),
                        r = a && s.parse(a),
                        l = s.space || "rgba";
                    if (r) return o = i[l](r), i[c[l].cache] = o[c[l].cache], n = i._rgba = o._rgba, !1
                }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), i) : o[e]
            }

            function s(t, e, i) {
                return i = (i + 1) % 1, 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                r = /^([\-+])=\s*(\d+\.?\d*)/,
                l = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }],
                h = t.Color = function(e, i, n, s) {
                    return new t.Color.fn.parse(e, i, n, s)
                },
                c = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                u = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                d = h.support = {},
                p = t("<p>")[0],
                f = t.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) {
                e.cache = "_" + t, e.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), h.fn = t.extend(h.prototype, {
                parse: function(s, a, r, l) {
                    if (s === e) return this._rgba = [null, null, null, null], this;
                    (s.jquery || s.nodeType) && (s = t(s).css(a), a = e);
                    var u = this,
                        d = t.type(s),
                        p = this._rgba = [];
                    return a !== e && (s = [s, a, r, l], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
                        p[e.idx] = i(s[e.idx], e)
                    }), this) : "object" === d ? (s instanceof h ? f(c, function(t, e) {
                        s[e.cache] && (u[e.cache] = s[e.cache].slice())
                    }) : f(c, function(e, n) {
                        var o = n.cache;
                        f(n.props, function(t, e) {
                            if (!u[o] && n.to) {
                                if ("alpha" === t || null == s[t]) return;
                                u[o] = n.to(u._rgba)
                            }
                            u[o][e.idx] = i(s[t], e, !0)
                        }), u[o] && t.inArray(null, u[o].slice(0, 3)) < 0 && (u[o][3] = 1, n.from && (u._rgba = n.from(u[o])))
                    }), this) : void 0
                },
                is: function(t) {
                    var e = h(t),
                        i = !0,
                        n = this;
                    return f(c, function(t, s) {
                        var o, a = e[s.cache];
                        return a && (o = n[s.cache] || s.to && s.to(n._rgba) || [], f(s.props, function(t, e) {
                            if (null != a[e.idx]) return i = a[e.idx] === o[e.idx]
                        })), i
                    }), i
                },
                _space: function() {
                    var t = [],
                        e = this;
                    return f(c, function(i, n) {
                        e[n.cache] && t.push(i)
                    }), t.pop()
                },
                transition: function(t, e) {
                    var n = h(t),
                        s = n._space(),
                        o = c[s],
                        a = 0 === this.alpha() ? h("transparent") : this,
                        r = a[o.cache] || o.to(a._rgba),
                        l = r.slice();
                    return n = n[o.cache], f(o.props, function(t, s) {
                        var o = s.idx,
                            a = r[o],
                            h = n[o],
                            c = u[s.type] || {};
                        null !== h && (null === a ? l[o] = h : (c.mod && (h - a > c.mod / 2 ? a += c.mod : a - h > c.mod / 2 && (a -= c.mod)), l[o] = i((h - a) * e + a, s)))
                    }), this[s](l)
                },
                blend: function(e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        n = i.pop(),
                        s = h(e)._rgba;
                    return h(t.map(i, function(t, e) {
                        return (1 - n) * s[e] + n * t
                    }))
                },
                toRgbaString: function() {
                    var e = "rgba(",
                        i = t.map(this._rgba, function(t, e) {
                            return null == t ? e > 2 ? 1 : 0 : t
                        });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                },
                toHslaString: function() {
                    var e = "hsla(",
                        i = t.map(this.hsla(), function(t, e) {
                            return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
                        });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                },
                toHexString: function(e) {
                    var i = this._rgba.slice(),
                        n = i.pop();
                    return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) {
                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), h.fn.parse.prototype = h.fn, c.hsla.to = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, n = t[0] / 255,
                    s = t[1] / 255,
                    o = t[2] / 255,
                    a = t[3],
                    r = Math.max(n, s, o),
                    l = Math.min(n, s, o),
                    h = r - l,
                    c = r + l,
                    u = .5 * c;
                return e = l === r ? 0 : n === r ? 60 * (s - o) / h + 360 : s === r ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240, i = 0 === h ? 0 : u <= .5 ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
            }, c.hsla.from = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    n = t[2],
                    o = t[3],
                    a = n <= .5 ? n * (1 + i) : n + i - n * i,
                    r = 2 * n - a;
                return [Math.round(255 * s(r, a, e + 1 / 3)), Math.round(255 * s(r, a, e)), Math.round(255 * s(r, a, e - 1 / 3)), o]
            }, f(c, function(n, s) {
                var o = s.props,
                    a = s.cache,
                    l = s.to,
                    c = s.from;
                h.fn[n] = function(n) {
                    if (l && !this[a] && (this[a] = l(this._rgba)), n === e) return this[a].slice();
                    var s, r = t.type(n),
                        u = "array" === r || "object" === r ? n : arguments,
                        d = this[a].slice();
                    return f(o, function(t, e) {
                        var n = u["object" === r ? t : e.idx];
                        null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
                    }), c ? (s = h(c(d)), s[a] = d, s) : h(d)
                }, f(o, function(e, i) {
                    h.fn[e] || (h.fn[e] = function(s) {
                        var o, a = t.type(s),
                            l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                            h = this[l](),
                            c = h[i.idx];
                        return "undefined" === a ? c : ("function" === a && (s = s.call(this, c), a = t.type(s)), null == s && i.empty ? this : ("string" === a && (o = r.exec(s), o && (s = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[i.idx] = s, this[l](h)))
                    })
                })
            }), h.hook = function(e) {
                var i = e.split(" ");
                f(i, function(e, i) {
                    t.cssHooks[i] = {
                        set: function(e, s) {
                            var o, a, r = "";
                            if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                if (s = h(o || s), !d.rgba && 1 !== s._rgba[3]) {
                                    for (a = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === r || "transparent" === r) && a && a.style;) try {
                                        r = t.css(a, "backgroundColor"), a = a.parentNode
                                    } catch (l) {}
                                    s = s.blend(r && "transparent" !== r ? r : "_default")
                                }
                                s = s.toRgbaString()
                            }
                            try {
                                e.style[i] = s
                            } catch (l) {}
                        }
                    }, t.fx.step[i] = function(e) {
                        e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                    }
                })
            }, h.hook(a), t.cssHooks.borderColor = {
                expand: function(t) {
                    var e = {};
                    return f(["Top", "Right", "Bottom", "Left"], function(i, n) {
                        e["border" + n + "Color"] = t
                    }), e
                }
            }, o = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(jQuery),
        function() {
            function i(e) {
                var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    o = {};
                if (s && s.length && s[0] && s[s[0]])
                    for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
                else
                    for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                return o
            }

            function n(e, i) {
                var n, s, a = {};
                for (n in i) s = i[n], e[n] !== s && (o[n] || !t.fx.step[n] && isNaN(parseFloat(s)) || (a[n] = s));
                return a
            }
            var s = ["add", "remove", "toggle"],
                o = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                t.fx.step[i] = function(t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t.effects.animateClass = function(e, o, a, r) {
                var l = t.speed(o, a, r);
                return this.queue(function() {
                    var o, a = t(this),
                        r = a.attr("class") || "",
                        h = l.children ? a.find("*").addBack() : a;
                    h = h.map(function() {
                        var e = t(this);
                        return {
                            el: e,
                            start: i(this)
                        }
                    }), o = function() {
                        t.each(s, function(t, i) {
                            e[i] && a[i + "Class"](e[i])
                        })
                    }, o(), h = h.map(function() {
                        return this.end = i(this.el[0]), this.diff = n(this.start, this.end), this
                    }), a.attr("class", r), h = h.map(function() {
                        var e = this,
                            i = t.Deferred(),
                            n = t.extend({}, l, {
                                queue: !1,
                                complete: function() {
                                    i.resolve(e)
                                }
                            });
                        return this.el.animate(this.diff, n), i.promise()
                    }), t.when.apply(t, h.get()).done(function() {
                        o(), t.each(arguments, function() {
                            var e = this.el;
                            t.each(this.diff, function(t) {
                                e.css(t, "")
                            })
                        }), l.complete.call(a[0])
                    })
                })
            }, t.fn.extend({
                addClass: function(e) {
                    return function(i, n, s, o) {
                        return n ? t.effects.animateClass.call(this, {
                            add: i
                        }, n, s, o) : e.apply(this, arguments)
                    }
                }(t.fn.addClass),
                removeClass: function(e) {
                    return function(i, n, s, o) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {
                            remove: i
                        }, n, s, o) : e.apply(this, arguments)
                    }
                }(t.fn.removeClass),
                toggleClass: function(i) {
                    return function(n, s, o, a, r) {
                        return "boolean" == typeof s || s === e ? o ? t.effects.animateClass.call(this, s ? {
                            add: n
                        } : {
                            remove: n
                        }, o, a, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
                            toggle: n
                        }, s, o, a)
                    }
                }(t.fn.toggleClass),
                switchClass: function(e, i, n, s, o) {
                    return t.effects.animateClass.call(this, {
                        add: i,
                        remove: e
                    }, n, s, o)
                }
            })
        }(),
        function() {
            function n(e, i, n, s) {
                return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                    effect: e
                }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e
            }

            function s(e) {
                return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
            }
            t.extend(t.effects, {
                version: "1.10.4",
                save: function(t, e) {
                    for (var n = 0; n < e.length; n++) null !== e[n] && t.data(i + e[n], t[0].style[e[n]])
                },
                restore: function(t, n) {
                    var s, o;
                    for (o = 0; o < n.length; o++) null !== n[o] && (s = t.data(i + n[o]), s === e && (s = ""), t.css(n[o], s))
                },
                setMode: function(t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                },
                getBaseline: function(t, e) {
                    var i, n;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            n = 0;
                            break;
                        case "center":
                            n = .5;
                            break;
                        case "right":
                            n = 1;
                            break;
                        default:
                            n = t[1] / e.width
                    }
                    return {
                        x: n,
                        y: i
                    }
                },
                createWrapper: function(e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = {
                            width: e.outerWidth(!0),
                            height: e.outerHeight(!0),
                            "float": e.css("float")
                        },
                        n = t("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        s = {
                            width: e.width(),
                            height: e.height()
                        },
                        o = document.activeElement;
                    try {
                        o.id
                    } catch (a) {
                        o = document.body
                    }
                    return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), n = e.parent(), "static" === e.css("position") ? (n.css({
                        position: "relative"
                    }), e.css({
                        position: "relative"
                    })) : (t.extend(i, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }), t.each(["top", "left", "bottom", "right"], function(t, n) {
                        i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                    }), e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), e.css(s), n.css(i).show()
                },
                removeWrapper: function(e) {
                    var i = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                },
                setTransition: function(e, i, n, s) {
                    return s = s || {}, t.each(i, function(t, i) {
                        var o = e.cssUnit(i);
                        o[0] > 0 && (s[i] = o[0] * n + o[1])
                    }), s
                }
            }), t.fn.extend({
                effect: function() {
                    function e(e) {
                        function n() {
                            t.isFunction(o) && o.call(s[0]), t.isFunction(e) && e()
                        }
                        var s = t(this),
                            o = i.complete,
                            r = i.mode;
                        (s.is(":hidden") ? "hide" === r : "show" === r) ? (s[r](), n()) : a.call(s[0], i, n)
                    }
                    var i = n.apply(this, arguments),
                        s = i.mode,
                        o = i.queue,
                        a = t.effects.effect[i.effect];
                    return t.fx.off || !a ? s ? this[s](i.duration, i.complete) : this.each(function() {
                        i.complete && i.complete.call(this)
                    }) : o === !1 ? this.each(e) : this.queue(o || "fx", e)
                },
                show: function(t) {
                    return function(e) {
                        if (s(e)) return t.apply(this, arguments);
                        var i = n.apply(this, arguments);
                        return i.mode = "show", this.effect.call(this, i)
                    }
                }(t.fn.show),
                hide: function(t) {
                    return function(e) {
                        if (s(e)) return t.apply(this, arguments);
                        var i = n.apply(this, arguments);
                        return i.mode = "hide", this.effect.call(this, i)
                    }
                }(t.fn.hide),
                toggle: function(t) {
                    return function(e) {
                        if (s(e) || "boolean" == typeof e) return t.apply(this, arguments);
                        var i = n.apply(this, arguments);
                        return i.mode = "toggle", this.effect.call(this, i)
                    }
                }(t.fn.toggle),
                cssUnit: function(e) {
                    var i = this.css(e),
                        n = [];
                    return t.each(["em", "px", "%", "pt"], function(t, e) {
                        i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                    }), n
                }
            })
        }(),
        function() {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
                e[i] = function(e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {
                Sine: function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function(t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function(t) {
                    for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function(e, i) {
                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                    return 1 - i(1 - t)
                }, t.easing["easeInOut" + e] = function(t) {
                    return t < .5 ? i(2 * t) / 2 : 1 - i(t * -2 + 2) / 2
                }
            })
        }()
}(jQuery),
function(t, e) {
    var i = /up|down|vertical/,
        n = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function(e, s) {
        var o, a, r, l = t(this),
            h = ["position", "top", "bottom", "left", "right", "height", "width"],
            c = t.effects.setMode(l, e.mode || "hide"),
            u = e.direction || "up",
            d = i.test(u),
            p = d ? "height" : "width",
            f = d ? "top" : "left",
            g = n.test(u),
            m = {},
            v = "show" === c;
        l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), h) : t.effects.save(l, h), l.show(), o = t.effects.createWrapper(l).css({
            overflow: "hidden"
        }), a = o[p](), r = parseFloat(o.css(f)) || 0, m[p] = v ? a : 0, g || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
            position: "absolute"
        }), m[f] = v ? r : a + r), v && (o.css(p, 0), g || o.css(f, r + a)), o.animate(m, {
            duration: e.duration,
            easing: e.easing,
            queue: !1,
            complete: function() {
                "hide" === c && l.hide(), t.effects.restore(l, h), t.effects.removeWrapper(l), s()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.bounce = function(e, i) {
        var n, s, o, a = t(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = t.effects.setMode(a, e.mode || "effect"),
            h = "hide" === l,
            c = "show" === l,
            u = e.direction || "up",
            d = e.distance,
            p = e.times || 5,
            f = 2 * p + (c || h ? 1 : 0),
            g = e.duration / f,
            m = e.easing,
            v = "up" === u || "down" === u ? "top" : "left",
            b = "up" === u || "left" === u,
            y = a.queue(),
            _ = y.length;
        for ((c || h) && r.push("opacity"), t.effects.save(a, r), a.show(), t.effects.createWrapper(a), d || (d = a["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (o = {
                opacity: 1
            }, o[v] = 0, a.css("opacity", 0).css(v, b ? 2 * -d : 2 * d).animate(o, g, m)), h && (d /= Math.pow(2, p - 1)), o = {}, o[v] = 0, n = 0; n < p; n++) s = {}, s[v] = (b ? "-=" : "+=") + d, a.animate(s, g, m).animate(o, g, m), d = h ? 2 * d : d / 2;
        h && (s = {
            opacity: 0
        }, s[v] = (b ? "-=" : "+=") + d, a.animate(s, g, m)), a.queue(function() {
            h && a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i()
        }), _ > 1 && y.splice.apply(y, [1, 0].concat(y.splice(_, f + 1))), a.dequeue()
    }
}(jQuery),
function(t, e) {
    t.effects.effect.clip = function(e, i) {
        var n, s, o, a = t(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = t.effects.setMode(a, e.mode || "hide"),
            h = "show" === l,
            c = e.direction || "vertical",
            u = "vertical" === c,
            d = u ? "height" : "width",
            p = u ? "top" : "left",
            f = {};
        t.effects.save(a, r), a.show(), n = t.effects.createWrapper(a).css({
            overflow: "hidden"
        }), s = "IMG" === a[0].tagName ? n : a, o = s[d](), h && (s.css(d, 0), s.css(p, o / 2)), f[d] = h ? o : 0, f[p] = h ? 0 : o / 2, s.animate(f, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                h || a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.drop = function(e, i) {
        var n, s = t(this),
            o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            a = t.effects.setMode(s, e.mode || "hide"),
            r = "show" === a,
            l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l ? "pos" : "neg",
            u = {
                opacity: r ? 1 : 0
            };
        t.effects.save(s, o), s.show(), t.effects.createWrapper(s), n = e.distance || s["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, r && s.css("opacity", 0).css(h, "pos" === c ? -n : n), u[h] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + n, s.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === a && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.explode = function(e, i) {
        function n() {
            y.push(this), y.length === u * d && s()
        }

        function s() {
            p.css({
                visibility: "visible"
            }), t(y).remove(), g || p.hide(), i()
        }
        var o, a, r, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
            d = u,
            p = t(this),
            f = t.effects.setMode(p, e.mode || "hide"),
            g = "show" === f,
            m = p.show().css("visibility", "hidden").offset(),
            v = Math.ceil(p.outerWidth() / d),
            b = Math.ceil(p.outerHeight() / u),
            y = [];
        for (o = 0; o < u; o++)
            for (l = m.top + o * b, c = o - (u - 1) / 2, a = 0; a < d; a++) r = m.left + a * v, h = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -a * v,
                top: -o * b
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: v,
                height: b,
                left: r + (g ? h * v : 0),
                top: l + (g ? c * b : 0),
                opacity: g ? 0 : 1
            }).animate({
                left: r + (g ? 0 : h * v),
                top: l + (g ? 0 : c * b),
                opacity: g ? 1 : 0
            }, e.duration || 500, e.easing, n)
    }
}(jQuery),
function(t, e) {
    t.effects.effect.fade = function(e, i) {
        var n = t(this),
            s = t.effects.setMode(n, e.mode || "toggle");
        n.animate({
            opacity: s
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.fold = function(e, i) {
        var n, s, o = t(this),
            a = ["position", "top", "bottom", "left", "right", "height", "width"],
            r = t.effects.setMode(o, e.mode || "hide"),
            l = "show" === r,
            h = "hide" === r,
            c = e.size || 15,
            u = /([0-9]+)%/.exec(c),
            d = !!e.horizFirst,
            p = l !== d,
            f = p ? ["width", "height"] : ["height", "width"],
            g = e.duration / 2,
            m = {},
            v = {};
        t.effects.save(o, a), o.show(), n = t.effects.createWrapper(o).css({
            overflow: "hidden"
        }), s = p ? [n.width(), n.height()] : [n.height(), n.width()], u && (c = parseInt(u[1], 10) / 100 * s[h ? 0 : 1]), l && n.css(d ? {
            height: 0,
            width: c
        } : {
            height: c,
            width: 0
        }), m[f[0]] = l ? s[0] : c, v[f[1]] = l ? s[1] : 0, n.animate(m, g, e.easing).animate(v, g, e.easing, function() {
            h && o.hide(), t.effects.restore(o, a), t.effects.removeWrapper(o), i()
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.highlight = function(e, i) {
        var n = t(this),
            s = ["backgroundImage", "backgroundColor", "opacity"],
            o = t.effects.setMode(n, e.mode || "show"),
            a = {
                backgroundColor: n.css("backgroundColor")
            };
        "hide" === o && (a.opacity = 0), t.effects.save(n, s), n.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(a, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && n.hide(), t.effects.restore(n, s), i()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.pulsate = function(e, i) {
        var n, s = t(this),
            o = t.effects.setMode(s, e.mode || "show"),
            a = "show" === o,
            r = "hide" === o,
            l = a || "hide" === o,
            h = 2 * (e.times || 5) + (l ? 1 : 0),
            c = e.duration / h,
            u = 0,
            d = s.queue(),
            p = d.length;
        for (!a && s.is(":visible") || (s.css("opacity", 0).show(), u = 1), n = 1; n < h; n++) s.animate({
            opacity: u
        }, c, e.easing), u = 1 - u;
        s.animate({
            opacity: u
        }, c, e.easing), s.queue(function() {
            r && s.hide(), i()
        }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, h + 1))), s.dequeue()
    }
}(jQuery),
function(t, e) {
    t.effects.effect.puff = function(e, i) {
        var n = t(this),
            s = t.effects.setMode(n, e.mode || "hide"),
            o = "hide" === s,
            a = parseInt(e.percent, 10) || 150,
            r = a / 100,
            l = {
                height: n.height(),
                width: n.width(),
                outerHeight: n.outerHeight(),
                outerWidth: n.outerWidth()
            };
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: s,
            complete: i,
            percent: o ? a : 100,
            from: o ? l : {
                height: l.height * r,
                width: l.width * r,
                outerHeight: l.outerHeight * r,
                outerWidth: l.outerWidth * r
            }
        }), n.effect(e)
    }, t.effects.effect.scale = function(e, i) {
        var n = t(this),
            s = t.extend(!0, {}, e),
            o = t.effects.setMode(n, e.mode || "effect"),
            a = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
            r = e.direction || "both",
            l = e.origin,
            h = {
                height: n.height(),
                width: n.width(),
                outerHeight: n.outerHeight(),
                outerWidth: n.outerWidth()
            },
            c = {
                y: "horizontal" !== r ? a / 100 : 1,
                x: "vertical" !== r ? a / 100 : 1
            };
        s.effect = "size", s.queue = !1, s.complete = i, "effect" !== o && (s.origin = l || ["middle", "center"], s.restore = !0), s.from = e.from || ("show" === o ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : h), s.to = {
            height: h.height * c.y,
            width: h.width * c.x,
            outerHeight: h.outerHeight * c.y,
            outerWidth: h.outerWidth * c.x
        }, s.fade && ("show" === o && (s.from.opacity = 0, s.to.opacity = 1), "hide" === o && (s.from.opacity = 1, s.to.opacity = 0)), n.effect(s)
    }, t.effects.effect.size = function(e, i) {
        var n, s, o, a = t(this),
            r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            h = ["width", "height", "overflow"],
            c = ["fontSize"],
            u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            p = t.effects.setMode(a, e.mode || "effect"),
            f = e.restore || "effect" !== p,
            g = e.scale || "both",
            m = e.origin || ["middle", "center"],
            v = a.css("position"),
            b = f ? r : l,
            y = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        "show" === p && a.show(), n = {
            height: a.height(),
            width: a.width(),
            outerHeight: a.outerHeight(),
            outerWidth: a.outerWidth()
        }, "toggle" === e.mode && "show" === p ? (a.from = e.to || y, a.to = e.from || n) : (a.from = e.from || ("show" === p ? y : n), a.to = e.to || ("hide" === p ? y : n)), o = {
            from: {
                y: a.from.height / n.height,
                x: a.from.width / n.width
            },
            to: {
                y: a.to.height / n.height,
                x: a.to.width / n.width
            }
        }, "box" !== g && "both" !== g || (o.from.y !== o.to.y && (b = b.concat(u), a.from = t.effects.setTransition(a, u, o.from.y, a.from), a.to = t.effects.setTransition(a, u, o.to.y, a.to)), o.from.x !== o.to.x && (b = b.concat(d), a.from = t.effects.setTransition(a, d, o.from.x, a.from), a.to = t.effects.setTransition(a, d, o.to.x, a.to))), "content" !== g && "both" !== g || o.from.y !== o.to.y && (b = b.concat(c).concat(h), a.from = t.effects.setTransition(a, c, o.from.y, a.from), a.to = t.effects.setTransition(a, c, o.to.y, a.to)), t.effects.save(a, b), a.show(), t.effects.createWrapper(a), a.css("overflow", "hidden").css(a.from), m && (s = t.effects.getBaseline(m, n), a.from.top = (n.outerHeight - a.outerHeight()) * s.y, a.from.left = (n.outerWidth - a.outerWidth()) * s.x, a.to.top = (n.outerHeight - a.to.outerHeight) * s.y, a.to.left = (n.outerWidth - a.to.outerWidth) * s.x), a.css(a.from), "content" !== g && "both" !== g || (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), h = r.concat(u).concat(d), a.find("*[width]").each(function() {
            var i = t(this),
                n = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                };
            f && t.effects.save(i, h), i.from = {
                height: n.height * o.from.y,
                width: n.width * o.from.x,
                outerHeight: n.outerHeight * o.from.y,
                outerWidth: n.outerWidth * o.from.x
            }, i.to = {
                height: n.height * o.to.y,
                width: n.width * o.to.x,
                outerHeight: n.height * o.to.y,
                outerWidth: n.width * o.to.x
            }, o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, u, o.from.y, i.from), i.to = t.effects.setTransition(i, u, o.to.y, i.to)), o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, d, o.from.x, i.from), i.to = t.effects.setTransition(i, d, o.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
                f && t.effects.restore(i, h)
            })
        })), a.animate(a.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                0 === a.to.opacity && a.css("opacity", a.from.opacity), "hide" === p && a.hide(), t.effects.restore(a, b), f || ("static" === v ? a.css({
                    position: "relative",
                    top: a.to.top,
                    left: a.to.left
                }) : t.each(["top", "left"], function(t, e) {
                    a.css(e, function(e, i) {
                        var n = parseInt(i, 10),
                            s = t ? a.to.left : a.to.top;
                        return "auto" === i ? s + "px" : n + s + "px"
                    })
                })), t.effects.removeWrapper(a), i()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.shake = function(e, i) {
        var n, s = t(this),
            o = ["position", "top", "bottom", "left", "right", "height", "width"],
            a = t.effects.setMode(s, e.mode || "effect"),
            r = e.direction || "left",
            l = e.distance || 20,
            h = e.times || 3,
            c = 2 * h + 1,
            u = Math.round(e.duration / c),
            d = "up" === r || "down" === r ? "top" : "left",
            p = "up" === r || "left" === r,
            f = {},
            g = {},
            m = {},
            v = s.queue(),
            b = v.length;
        for (t.effects.save(s, o), s.show(), t.effects.createWrapper(s), f[d] = (p ? "-=" : "+=") + l, g[d] = (p ? "+=" : "-=") + 2 * l, m[d] = (p ? "-=" : "+=") + 2 * l, s.animate(f, u, e.easing), n = 1; n < h; n++) s.animate(g, u, e.easing).animate(m, u, e.easing);
        s.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function() {
            "hide" === a && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i()
        }), b > 1 && v.splice.apply(v, [1, 0].concat(v.splice(b, c + 1))), s.dequeue()
    }
}(jQuery),
function(t, e) {
    t.effects.effect.slide = function(e, i) {
        var n, s = t(this),
            o = ["position", "top", "bottom", "left", "right", "width", "height"],
            a = t.effects.setMode(s, e.mode || "show"),
            r = "show" === a,
            l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l,
            u = {};
        t.effects.save(s, o), s.show(), n = e.distance || s["top" === h ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(s).css({
            overflow: "hidden"
        }), r && s.css(h, c ? isNaN(n) ? "-" + n : -n : n), u[h] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + n, s.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === a && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.transfer = function(e, i) {
        var n = t(this),
            s = t(e.to),
            o = "fixed" === s.css("position"),
            a = t("body"),
            r = o ? a.scrollTop() : 0,
            l = o ? a.scrollLeft() : 0,
            h = s.offset(),
            c = {
                top: h.top - r,
                left: h.left - l,
                height: s.innerHeight(),
                width: s.innerWidth()
            },
            u = n.offset(),
            d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
                top: u.top - r,
                left: u.left - l,
                height: n.innerHeight(),
                width: n.innerWidth(),
                position: o ? "fixed" : "absolute"
            }).animate(c, e.duration, e.easing, function() {
                d.remove(), i()
            })
    }
}(jQuery);
//# sourceMappingURL=jquery.js.map