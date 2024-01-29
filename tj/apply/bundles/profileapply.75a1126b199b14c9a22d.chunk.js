(window.webpackJsonpApplyApp = window.webpackJsonpApplyApp || []).push([
    [1], {
        "97MO": function(e, t, n) {
            (t = n("JPst")(!1)).push([e.i, ".list-component hr {\n  margin: 1em 0;\n  border-top: 1px solid #d1d1d1;\n}\n.list-component .wrap-text {\n  word-wrap: break-word;\n}\n.list-component .list-item-actions {\n  margin-right: 10px;\n}\n.list-component .list-item-actions a {\n  margin-left: 25px;\n  cursor: pointer;\n}\n.list-component .list-item-actions a.edit {\n  color: green;\n}\n.list-component .list-item-actions a.delete {\n  color: green;\n}\n", ""]), e.exports = t
        },
        IwbN: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("/MKj"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("GIhC"),
                l = n("M/7B"),
                c = n("mJbp"),
                u = n("U0Ke"),
                s = n("vC2N");

            function p(e) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function m(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function f(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e, t) {
                return (h = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var g = function() {
                    return o.a.createElement("div", null, "Your personal statement is a chance to stand out. Summarise what you can offer an employer and why you're the right person for the job.", o.a.createElement("br", null), o.a.createElement("br", null), "Try and include:", o.a.createElement("ul", null, o.a.createElement("li", null, "Number of years experience in the field"), o.a.createElement("li", null, "Areas of expertise"), o.a.createElement("li", null, "Relevant industries you've worked in"), o.a.createElement("li", null, "Specialist or transferable skills"), o.a.createElement("li", null, "Relevant qualifications or interests"), o.a.createElement("li", null, "Qualities relevant to the role")))
                },
                b = function(e) {
                    function t(e) {
                        var n, r, a;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), r = this, (n = !(a = d(t).call(this, e)) || "object" !== p(a) && "function" != typeof a ? f(r) : a).updatePersonalStatement = n.updatePersonalStatement.bind(f(n)), n
                    }
                    var n, r, a;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && h(e, t)
                    }(t, e), n = t, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.personalStatement;
                            this.props.updatePersonalStatement(e, this.isValid(e))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.props.personalStatement;
                            this.props.updatePersonalStatement(e, !0)
                        }
                    }, {
                        key: "isValid",
                        value: function(e) {
                            return "" !== e && null != e
                        }
                    }, {
                        key: "updatePersonalStatement",
                        value: function(e) {
                            var t = e.target.value;
                            this.props.updatePersonalStatement(t, this.isValid(t))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.isEnabled,
                                n = e.personalStatement,
                                r = e.showError;
                            return o.a.createElement(c.a, {
                                label: "Statement"
                            }, o.a.createElement("textarea", {
                                maxLength: 1e3,
                                name: "personalstatement",
                                className: "form-control input-lg",
                                rows: 5,
                                placeholder: "Write at least two or three sentences about your experience and the industries you've worked in.",
                                value: n,
                                onChange: this.updatePersonalStatement,
                                disabled: !t
                            }), r && o.a.createElement(u.a, {
                                id: "personalstatement-error-message",
                                danger: !0,
                                icon: !0
                            }, "Please provide at least two or three sentences that summarise why you're interested in the role."), o.a.createElement(s.a, {
                                text: o.a.createElement(g, null)
                            }))
                        }
                    }]) && m(n.prototype, r), a && m(n, a), t
                }(o.a.PureComponent),
                y = n("TEVo"),
                v = Object(r.b)((function(e) {
                    return {
                        isEnabled: e.personalStatementSection.isEnabled,
                        personalStatement: e.personalStatementSection.personalStatement || "",
                        showError: e.hasFormBeenSubmitted && !e.fields[y.a.personalStatement].isValid
                    }
                }), (function(e) {
                    return {
                        updatePersonalStatement: function(t, n) {
                            e(Object(l.m)(y.a.personalStatement, n)), e(Object(l.x)(t))
                        }
                    }
                }))(b);

            function E(e) {
                return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function x(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function k(e) {
                return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function j(e, t) {
                return (j = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var S = function(e) {
                function t(e) {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), x(this, k(t).call(this, e))
                }
                var n, r, a;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && j(e, t)
                }(t, e), n = t, (r = [{
                    key: "render",
                    value: function() {
                        var e = this.props.isEnabled;
                        return o.a.createElement(i.a, {
                            id: "personal-statement-section",
                            title: "Personal statement",
                            enabled: e
                        }, o.a.createElement(v, null))
                    }
                }]) && w(n.prototype, r), a && w(n, a), t
            }(o.a.PureComponent);
            n.d(t, "mapStateToProps", (function() {
                return O
            }));
            var O = function(e) {
                return {
                    isEnabled: e.personalStatementSection.isEnabled
                }
            };
            t.default = Object(r.b)(O)(S)
        },
        vC2N: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n.n(r),
                o = n("vOnD");

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var l = o.b.button.withConfig({
                    displayName: "Link",
                    componentId: "sc-1uvl2n-0"
                })(["padding:10px 0;"]),
                c = o.b.div.withConfig({
                    displayName: "TextBlock",
                    componentId: "sc-1uvl2n-1"
                })(["animation-duration:0.2s;animation-fill-mode:both;animation-name:fadeInDown;@keyframes fadeInDown{0%{opacity:0;transform:translateY(-20px);}100%{opacity:1;transform:translateY(0);}}"]);
            t.a = function(e) {
                var t = i(Object(r.useState)(!1), 2),
                    n = t[0],
                    o = t[1];
                return a.a.createElement(a.a.Fragment, null, a.a.createElement(l, {
                    type: "button",
                    className: "btn btn-link ".concat(n ? "open" : ""),
                    onClick: function() {
                        o(!n)
                    }
                }, a.a.createElement("span", null, "Need help?"), a.a.createElement("span", {
                    className: "caret caret-spacer"
                })), n && a.a.createElement(c, null, e.text))
            }
        },
        xggW: function(e, t, n) {
            var r = n("LboF"),
                a = n("97MO");
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var o = {
                    insert: "head",
                    singleton: !1
                },
                i = (r(a, o), a.locals ? a.locals : {});
            e.exports = i
        },
        zgsI: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("/MKj"),
                a = n("TEVo"),
                o = n("M/7B"),
                i = n("q1tI"),
                l = n.n(i),
                c = n("vOnD"),
                u = n("GIhC"),
                s = n("U630"),
                p = function() {
                    return l.a.createElement("svg", {
                        width: "16px",
                        height: "16px",
                        viewBox: "0 0 12 12",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, l.a.createElement("title", null, "Delete"), l.a.createElement("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, l.a.createElement("g", {
                        transform: "translate(-290.000000, -1564.000000)"
                    }, l.a.createElement("g", {
                        transform: "translate(290.000000, 1564.000000)"
                    }, l.a.createElement("path", {
                        d: "M3.5,3 C3.77614237,3 4,3.22385763 4,3.5 L4,9.5 C4,9.77614237 3.77614237,10 3.5,10 C3.22385763,10 3,9.77614237 3,9.5 L3,3.5 C3,3.22385763 3.22385763,3 3.5,3 Z M5.5,3 C5.77614237,3 6,3.22385763 6,3.5 L6,9.5 C6,9.77614237 5.77614237,10 5.5,10 C5.22385763,10 5,9.77614237 5,9.5 L5,3.5 C5,3.22385763 5.22385763,3 5.5,3 Z M7.5,3 C7.77614237,3 8,3.22385763 8,3.5 L8,9.5 C8,9.77614237 7.77614237,10 7.5,10 C7.22385763,10 7,9.77614237 7,9.5 L7,3.5 C7,3.22385763 7.22385763,3 7.5,3 Z M7.75,1.44 L7.75,0.24 C7.75,0.108 7.638,2.18491891e-13 7.5,2.18491891e-13 L3.5,2.18491891e-13 C3.362,2.18491891e-13 3.25,0.108 3.25,0.24 L3.25,1.44 L0.25,1.44 C0.112,1.44 0,1.548 0,1.68 C0,1.81248 0.112,1.92 0.25,1.92 L1.25,1.92 L1.25,11.28 C1.25,11.41248 1.362,11.52 1.5,11.52 L9.5,11.52 C9.638,11.52 9.75,11.41248 9.75,11.28 L9.75,1.92 L11.25,1.92 C11.388,1.92 11.5,1.81248 11.5,1.68 C11.5,1.548 11.388,1.44 11.25,1.44 L7.75,1.44 Z",
                        id: "Fill-1305",
                        fill: "#009900"
                    }), l.a.createElement("g", {
                        transform: "translate(7.000000, 3.000000)"
                    })))))
                };
            var m = Object(i.memo)((function(e) {
                    return l.a.createElement("div", {
                        className: "list-item ".concat(e.className)
                    }, l.a.createElement("div", null, l.a.createElement("strong", null, e.title), l.a.createElement("div", {
                        className: "list-item-actions pull-right"
                    }, l.a.createElement("a", {
                        className: "edit",
                        onClick: function() {
                            e.onEdit(e.id)
                        }
                    }, l.a.createElement(s.a, null)), l.a.createElement("a", {
                        className: "delete",
                        onClick: function() {
                            e.onDelete(e.id)
                        }
                    }, l.a.createElement(p, null)))), e.line1 && l.a.createElement("div", {
                        className: "line1 wrap-text"
                    }, e.line1), e.line2 && l.a.createElement("div", {
                        className: "line2 wrap-text"
                    }, e.line2), e.line3 && l.a.createElement("div", {
                        className: "line3 wrap-text"
                    }, e.line3), l.a.createElement("hr", null))
                })),
                d = n("mJbp"),
                f = n("UXep"),
                h = n("J21I"),
                g = n.n(h),
                b = (n("xggW"), c.b.div.withConfig({
                    displayName: "AnimatedDiv",
                    componentId: "sc-1ro51fs-0"
                })(["animation:slide-up 0.4s ease;@keyframes slide-up{0%{opacity:0;transform:translateY(20px);}100%{opacity:1;transform:translateY(0px);}}"])),
                y = Object(c.b)(d.a).withConfig({
                    displayName: "StyledFormRow",
                    componentId: "sc-1ro51fs-1"
                })(["\t &.list-component-item-enter{opacity:0.01;}&.list-component-item-enter.list-component-item-enter-active{opacity:1;transition:opacity 400ms ease-in;}&.list-component-item-leave{opacity:1;}&.list-component-item-leave.list-component-item-leave-active{opacity:0.01;transition:opacity 400ms ease-in;}"]);
            var v = Object(i.memo)((function(e) {
                var t = e.listItems.map((function(t) {
                    var n = e.parentComponentName + "-item-" + t.id;
                    return e.children && t.id === e.selectedListItemId ? l.a.createElement(b, {
                        key: n,
                        id: n
                    }, e.children) : l.a.createElement(y, {
                        key: n,
                        id: n
                    }, l.a.createElement(m, t))
                }));
                return l.a.createElement("div", {
                    className: "list-component"
                }, t.length > 0 && l.a.createElement(l.a.Fragment, null, l.a.createElement(g.a, {
                    transitionName: "list-component-item",
                    transitionEnterTimeout: 400,
                    transitionLeaveTimeout: 400
                }, t), l.a.createElement(d.a, null, e.showAddAnotherButton && l.a.createElement(f.a, {
                    primary: !0,
                    onClick: e.onAddAnother
                }, "Add another work experience"))), e.children && !e.editMode && l.a.createElement(b, {
                    id: "div-add-" + e.parentComponentName
                }, e.children))
            }));

            function E() {
                return (E = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function w(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var x = c.b.input.withConfig({
                displayName: "CheckboxInput",
                componentId: "der7c3-0"
            })(["margin-right:.5em !important;"]);
            var k = Object(i.memo)((function(e) {
                    var t = e.id,
                        n = e.label,
                        r = w(e, ["id", "label"]),
                        a = "".concat(t, "-checkbox");
                    return l.a.createElement("div", {
                        id: t,
                        className: e.className
                    }, l.a.createElement(x, E({
                        type: "checkbox",
                        id: a
                    }, r)), l.a.createElement("label", {
                        className: "checkbox-label",
                        htmlFor: a
                    }, n))
                })),
                j = n("U0Ke"),
                S = n("UeJJ");

            function O(e) {
                return Math.floor(Math.random() * Math.floor(e))
            }
            var D = n("1h/R"),
                C = n.n(D);

            function I(e, t, n, r, a, o, i) {
                try {
                    var l = e[o](i),
                        c = l.value
                } catch (e) {
                    return void n(e)
                }
                l.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function N(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            I(o, r, a, i, l, "next", e)
                        }

                        function l(e) {
                            I(o, r, a, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function M(e, t) {
                return W.apply(this, arguments)
            }

            function W() {
                return (W = N(regeneratorRuntime.mark((function e(t, n) {
                    var r, a;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch(t, {
                                    headers: {
                                        Accept: "application/json",
                                        "Content-Type": "application/json"
                                    },
                                    method: "POST",
                                    body: JSON.stringify(n)
                                });
                            case 3:
                                if ((r = e.sent).ok) {
                                    e.next = 6;
                                    break
                                }
                                throw new Error(r.statusText);
                            case 6:
                                return e.next = 8, r.json();
                            case 8:
                                return a = e.sent, e.abrupt("return", a);
                            case 12:
                                return e.prev = 12, e.t0 = e.catch(0), console.log(e.t0), e.abrupt("return", Promise.reject(e.t0));
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 12]
                    ])
                })))).apply(this, arguments)
            }

            function R(e, t, n, r, a, o, i) {
                try {
                    var l = e[o](i),
                        c = l.value
                } catch (e) {
                    return void n(e)
                }
                l.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function P(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var T = c.b.div.withConfig({
                displayName: "AutoSuggestDiv",
                componentId: "a86fyx-0"
            })([".react-autosuggest__container{position:relative;}.react-autosuggest__input--focused{outline:none;}.react-autosuggest__input--open{border-bottom-left-radius:0;border-bottom-right-radius:0;}.react-autosuggest__suggestions-container{display:none;}.react-autosuggest__suggestions-container--open{display:block;position:absolute;top:51px;width:100%;border:1px solid #aaa;background-color:#fff;font-family:Helvetica,sans-serif;font-weight:300;font-size:16px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;max-height:300px;overflow-y:auto;z-index:2;}.react-autosuggest__suggestions-list{margin:0;padding:0;list-style-type:none;}.react-autosuggest__suggestion{cursor:pointer;padding:10px 20px;}.react-autosuggest__suggestion--highlighted{background-color:#ddd;}"]);
            var A = function(e) {
                    var t = e.placeholder,
                        n = e.searchValue,
                        r = e.name,
                        a = e.handleInputChange,
                        o = e.suggestionsUrl,
                        c = e.maxResults,
                        u = void 0 === c ? 15 : c,
                        s = P(Object(i.useState)([]), 2),
                        p = s[0],
                        m = s[1],
                        d = P(Object(i.useState)(""), 2),
                        f = d[0],
                        h = d[1],
                        g = function() {
                            var e, t = (e = regeneratorRuntime.mark((function e(t) {
                                var n, r;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.value, e.next = 3, M(o, {
                                                Value: n,
                                                MaxResults: u
                                            });
                                        case 3:
                                            r = e.sent, m(r);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    n = arguments;
                                return new Promise((function(r, a) {
                                    var o = e.apply(t, n);

                                    function i(e) {
                                        R(o, r, a, i, l, "next", e)
                                    }

                                    function l(e) {
                                        R(o, r, a, i, l, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            });
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        b = {
                            placeholder: t,
                            value: f || n,
                            onChange: function(e, t) {
                                var n = t.newValue;
                                h(n), a(e.target.value)
                            },
                            onBlur: function(e) {
                                h(e.target.value), a(e.target.value)
                            },
                            name: r,
                            className: "form-control input-lg"
                        };
                    return l.a.createElement(T, null, l.a.createElement(C.a, {
                        suggestions: p,
                        onSuggestionsFetchRequested: g,
                        onSuggestionsClearRequested: function() {
                            m([])
                        },
                        getSuggestionValue: function(e) {
                            return e
                        },
                        renderSuggestion: function(e) {
                            var t = new RegExp(n, "gi"),
                                r = {
                                    __html: e.replace(t, "<strong>".concat(n, "</strong>"))
                                };
                            return l.a.createElement("span", {
                                dangerouslySetInnerHTML: r
                            })
                        },
                        inputProps: b
                    }))
                },
                _ = n("zt2g");

            function L(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var J = c.b.input.withConfig({
                    displayName: "InputMonth",
                    componentId: "sc-1naimk6-0"
                })(["-webkit-min-logical-width:calc(100% - 16px);&:before{color:lightgrey;content:attr(placeholder) !important;margin-right:0.5em;}&.has-value:before{content:'' !important;display:none;}"]),
                H = c.b.select.withConfig({
                    displayName: "Select",
                    componentId: "sc-1naimk6-1"
                })(["flex:1 1 auto;@media (min-width:", ") and (max-width:", "){padding-left:2px;}&:first-child{margin-right:5px;}"], _.a.sm, _.a.md),
                Y = c.b.div.withConfig({
                    displayName: "DesktopView",
                    componentId: "sc-1naimk6-2"
                })(["display:none;@media (min-width:", "){display:flex;}"], _.a.sm),
                V = c.b.div.withConfig({
                    displayName: "MobileView",
                    componentId: "sc-1naimk6-3"
                })(["@media (min-width:", "){display:none;}"], _.a.sm),
                F = (new Date).getFullYear(),
                q = F - 50,
                B = [];

            function U(e) {
                return e < 10 ? "0".concat(e) : e.toString()
            }
            var z = Object(i.memo)((function(e) {
                    var t = e.id,
                        n = e.placeholder,
                        r = e.date,
                        a = e.className,
                        o = e.onDateChange;
                    if (0 === B.length)
                        for (var c = F; c >= q; c--) B.push(l.a.createElement("option", {
                            key: c,
                            value: c
                        }, c));
                    var u = L(Object(i.useState)(r ? U(r.getMonth() + 1) : ""), 2),
                        s = u[0],
                        p = u[1],
                        m = L(Object(i.useState)(r ? r.getFullYear().toString() : ""), 2),
                        d = m[0],
                        f = m[1],
                        h = "" !== d && "" !== s ? "".concat(d, "-").concat(s) : "";
                    return l.a.createElement("div", {
                        className: a
                    }, l.a.createElement(V, null, l.a.createElement(J, {
                        id: "".concat(t, "Input"),
                        type: "month",
                        value: h,
                        onChange: function(e) {
                            var t = new Date("".concat(e.target.value, "-01"));
                            o(t), p(U(t.getMonth() + 1)), f("".concat(t.getFullYear()))
                        },
                        placeholder: n,
                        className: "form-control input-md ".concat(r ? "has-value" : "")
                    })), l.a.createElement(Y, null, l.a.createElement(H, {
                        id: "".concat(t, "Month"),
                        value: s,
                        className: "form-control input-md",
                        onChange: function(e) {
                            var t = parseInt(e.target.value, 10),
                                n = U(t);
                            if (p(n), "" !== d) {
                                var r = isNaN(t) || isNaN(parseInt(d, 10)) ? "" : "".concat(d, "-").concat(n, "-01");
                                o(new Date(r))
                            }
                        }
                    }, l.a.createElement("option", {
                        value: ""
                    }, "Month"), l.a.createElement("option", {
                        value: "01"
                    }, "January"), l.a.createElement("option", {
                        value: "02"
                    }, "February"), l.a.createElement("option", {
                        value: "03"
                    }, "March"), l.a.createElement("option", {
                        value: "04"
                    }, "April"), l.a.createElement("option", {
                        value: "05"
                    }, "May"), l.a.createElement("option", {
                        value: "06"
                    }, "June"), l.a.createElement("option", {
                        value: "07"
                    }, "July"), l.a.createElement("option", {
                        value: "08"
                    }, "August"), l.a.createElement("option", {
                        value: "09"
                    }, "September"), l.a.createElement("option", {
                        value: "10"
                    }, "October"), l.a.createElement("option", {
                        value: "11"
                    }, "November"), l.a.createElement("option", {
                        value: "12"
                    }, "December")), l.a.createElement(H, {
                        id: "".concat(t, "Year"),
                        value: d,
                        className: "form-control input-md",
                        onChange: function(e) {
                            var t = parseInt(e.target.value, 10);
                            if (f(t.toString()), "" !== s) {
                                var n = isNaN(t) || isNaN(parseInt(s, 10)) ? "" : "".concat(t, "-").concat(s, "-01");
                                o(new Date(n))
                            }
                        }
                    }, l.a.createElement("option", {
                        value: ""
                    }, "Year"), B)))
                })),
                K = c.b.div.withConfig({
                    displayName: "Row",
                    componentId: "sc-7q3a5i-0"
                })(["display:flex;"]),
                Z = Object(c.b)(z).withConfig({
                    displayName: "StyledMonthYear",
                    componentId: "sc-7q3a5i-1"
                })(["flex:1 1 auto;&:first-child{padding-right:10px;}@media (max-width:", "){max-width:50%;width:500px;}"], _.a.sm),
                G = c.b.div.withConfig({
                    displayName: "ToPresent",
                    componentId: "sc-7q3a5i-2"
                })(["flex:1 1 auto;line-height:35px;"]),
                Q = c.b.div.withConfig({
                    displayName: "To",
                    componentId: "sc-7q3a5i-3"
                })(["display:none;margin-right:10px;line-height:35px;@media (min-width:", "){display:block;}"], _.a.sm);
            var X, $ = Object(i.memo)((function(e) {
                    return l.a.createElement(K, null, l.a.createElement(Z, {
                        id: "".concat(e.id, "-from"),
                        placeholder: "from",
                        date: e.startDate,
                        onDateChange: e.onStartDateChange
                    }), e.currentlyHere && l.a.createElement(G, null, "to present"), !e.currentlyHere && l.a.createElement(l.a.Fragment, null, l.a.createElement(Q, null, "to"), l.a.createElement(Z, {
                        id: "".concat(e.id, "-to"),
                        placeholder: "to",
                        date: e.endDate,
                        onDateChange: e.onEndDateChange
                    })))
                })),
                ee = n("vC2N");

            function te(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? te(Object(n), !0).forEach((function(t) {
                        re(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function re(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function ae(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }! function(e) {
                e[e.MissingJobTitle = 0] = "MissingJobTitle", e[e.MissingCompanyName = 1] = "MissingCompanyName", e[e.MissingWorkExpDateRange = 2] = "MissingWorkExpDateRange", e[e.MissingJobDescription = 3] = "MissingJobDescription", e[e.InvalidWorkExpDateRange = 4] = "InvalidWorkExpDateRange", e[e.InvalidWorkExpDateStartRange = 5] = "InvalidWorkExpDateStartRange", e[e.InvalidWorkExpDateEndRange = 6] = "InvalidWorkExpDateEndRange"
            }(X || (X = {}));
            var oe = c.b.div.withConfig({
                displayName: "Toolbar",
                componentId: "sc-1ybn2kg-0"
            })(["button{margin-top:.5em;min-width:9em;width:auto;@media (max-width:300px){width:100%;}}"]);
            var ie = function(e) {
                var t = e.workExperience || {
                        candidateWorkExperienceId: Math.random()
                    },
                    n = {
                        candidateWorkExperienceId: t.candidateWorkExperienceId,
                        currentlyWorkHere: t.currentlyWorkHere || e.defaultCurrentlyWorkHereValue,
                        jobDescription: t.jobDescription || "",
                        companyName: t.companyName || "",
                        jobTitle: t.jobTitle || "",
                        startDate: t.startDate,
                        endDate: t.endDate
                    },
                    r = function() {
                        var e = Object(i.useRef)(null),
                            t = Object(i.useRef)(null),
                            n = Object(i.useRef)(null),
                            r = Object(i.useRef)(null),
                            a = ae(Object(i.useState)([]), 2),
                            o = a[0],
                            c = a[1],
                            u = function(e, t, n) {
                                return e && s(e) && (t && s(t) || 1 == n)
                            },
                            s = function(e) {
                                return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime())
                            },
                            p = function(e, t, n) {
                                return e && (0 == n && t && e > t || 1 == n && e > new Date)
                            };
                        return Object(i.useEffect)((function() {
                            o.length > 0 && o[0].elementRef.current.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })
                        }), [o]), {
                            renderAlertIfErrorExists: function(e) {
                                var t = o.filter((function(t) {
                                    return e.includes(t.errorType)
                                }));
                                if (t.length > 0) return l.a.createElement(j.a, {
                                    danger: !0,
                                    icon: !0
                                }, t[0].errorMessage)
                            },
                            isValidForm: function(a) {
                                var o = [];
                                return a.jobTitle || o.push({
                                    errorType: X.MissingJobTitle,
                                    errorMessage: "Please provide a job title",
                                    elementRef: e
                                }), a.companyName || o.push({
                                    errorType: X.MissingCompanyName,
                                    errorMessage: "Please provide a company name. If you're self-employed, please state that",
                                    elementRef: t
                                }), u(a.startDate, a.endDate, a.currentlyWorkHere) || o.push({
                                    errorType: X.MissingWorkExpDateRange,
                                    errorMessage: "Please add the approximate month and year of your employment",
                                    elementRef: n
                                }), a.startDate && a.startDate > new Date && o.push({
                                    errorType: X.InvalidWorkExpDateEndRange,
                                    errorMessage: "Start date cannot be in the future",
                                    elementRef: n
                                }), a.endDate && a.endDate > new Date && o.push({
                                    errorType: X.InvalidWorkExpDateEndRange,
                                    errorMessage: "End date cannot be in the future",
                                    elementRef: n
                                }), p(a.startDate, a.endDate, a.currentlyWorkHere) && o.push({
                                    errorType: X.InvalidWorkExpDateStartRange,
                                    errorMessage: "Start date cannot be after end date",
                                    elementRef: n
                                }), a.jobDescription || o.push({
                                    errorType: X.MissingJobDescription,
                                    errorMessage: "Please provide some examples of what you did in this role",
                                    elementRef: r
                                }), c(o), 0 === o.length
                            },
                            jobTitleAlertRef: e,
                            companyNameAlertRef: t,
                            datesAlertRef: n,
                            jobDescriptionAlertRef: r
                        }
                    }(),
                    a = r.renderAlertIfErrorExists,
                    o = r.isValidForm,
                    c = r.jobTitleAlertRef,
                    u = r.companyNameAlertRef,
                    s = r.datesAlertRef,
                    p = r.jobDescriptionAlertRef,
                    m = function(e) {
                        var t = ae(Object(i.useState)(e), 2),
                            n = t[0],
                            r = t[1];
                        return {
                            workExperience: n,
                            handleInputChange: function(e) {
                                r(ne({}, n, re({}, e.target.name, e.target.value || "")))
                            },
                            updateJobTitle: function(e) {
                                r(ne({}, n, {
                                    jobTitle: e
                                }))
                            },
                            updateCurrentlyWorkHere: function(e) {
                                r(ne({}, n, {
                                    currentlyWorkHere: e.target.checked
                                }))
                            },
                            updateStartDate: function(e) {
                                r(ne({}, n, {
                                    startDate: e
                                }))
                            },
                            updateEndDate: function(e) {
                                r(ne({}, n, {
                                    endDate: e
                                }))
                            }
                        }
                    }(n),
                    h = m.workExperience,
                    g = m.handleInputChange,
                    b = m.updateJobTitle,
                    y = m.updateCurrentlyWorkHere,
                    v = m.updateStartDate,
                    E = m.updateEndDate;
                return l.a.createElement("form", {
                    id: "work-experience-form",
                    onSubmit: function(n) {
                        n.preventDefault();
                        var r = Object.assign({}, t, h),
                            a = o(h);
                        a && e.onSubmit(r, a)
                    }
                }, l.a.createElement(d.a, {
                    ref: c,
                    label: "Job title"
                }, l.a.createElement(A, {
                    searchValue: h.jobTitle || "",
                    name: "jobTitle",
                    placeholder: "e.g Regional Manager",
                    handleInputChange: b,
                    suggestionsUrl: "/apply/autosuggest/jobtitles",
                    maxResults: 15
                }), a([X.MissingJobTitle])), l.a.createElement(d.a, {
                    ref: u,
                    label: "Company/employer"
                }, l.a.createElement("input", {
                    type: "text",
                    maxLength: 200,
                    name: "companyName",
                    value: h.companyName,
                    className: "form-control input-lg",
                    placeholder: "Company name",
                    onChange: g
                }), a([X.MissingCompanyName])), l.a.createElement(d.a, null, l.a.createElement(k, {
                    id: "currently-work-here-toggle",
                    name: "currently-work-here-toggle",
                    label: "I currently work here",
                    checked: h.currentlyWorkHere,
                    onChange: y
                })), l.a.createElement(d.a, {
                    ref: s,
                    label: "Approx. dates",
                    className: "form-group"
                }, l.a.createElement($, {
                    id: "work-experience-date-range",
                    currentlyHere: !!h.currentlyWorkHere,
                    startDate: h.startDate,
                    onStartDateChange: v,
                    endDate: h.endDate,
                    onEndDateChange: E
                }), a([X.MissingWorkExpDateRange, X.InvalidWorkExpDateRange, X.InvalidWorkExpDateStartRange, X.InvalidWorkExpDateEndRange])), l.a.createElement(d.a, {
                    ref: p,
                    label: "What did you do in this job?"
                }, l.a.createElement("textarea", {
                    maxLength: 500,
                    name: "jobDescription",
                    value: h.jobDescription,
                    placeholder: "Write what you did as part of your role and the impact it had on the team and/or business.",
                    className: "form-control input-lg",
                    rows: 7,
                    onChange: g
                }), a([X.MissingJobDescription]), l.a.createElement(ee.a, {
                    text: "Think about the things you did daily as part of the role and what impact that had on the team and/or business. No matter how big or small, are there any stand out achievements or did your ideas help to change something?"
                })), l.a.createElement(d.a, null, l.a.createElement(oe, {
                    className: "btn-toolbar"
                }, l.a.createElement(f.a, {
                    submit: !0,
                    primary: !0,
                    id: "btn-submit-workexperience"
                }, "Save details"), e.showCancelButton && l.a.createElement(f.a, {
                    onClick: e.onCancel
                }, "Cancel")), e.editMode && l.a.createElement("hr", {
                    id: "hr-edit-line"
                })))
            };

            function le(e) {
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

            function ce(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var ue = Object(c.b)(k).withConfig({
                displayName: "StyledCheckbox",
                componentId: "sc-12q1lmz-0"
            })(["margin-bottom:30px;"]);

            function se(e, t) {
                return e.currentlyWorkHere && t.currentlyWorkHere ? t.startDate > e.startDate ? 1 : -1 : t.currentlyWorkHere ? 1 : e.currentlyWorkHere ? -1 : t.endDate > e.endDate ? 1 : -1
            }
            var pe = Object(i.memo)((function(e) {
                var t = e.isEnabled,
                    n = e.hasNoWorkExperience,
                    r = e.updateHasNoExperience,
                    a = e.workExperience,
                    o = e.updateWorkExperience,
                    c = e.formStateChange,
                    s = e.showErrorMessage,
                    p = ce(Object(i.useState)((function() {
                        return 0 === a.length ? {
                            candidateWorkExperienceId: O(100)
                        } : void 0
                    })), 2),
                    m = p[0],
                    f = p[1],
                    h = ce(Object(i.useState)(!1), 2),
                    g = h[0],
                    b = h[1];

                function y() {
                    return a.length > 0 || 1 == n
                }

                function E(e) {
                    var t = a.find((function(t) {
                        return t.candidateWorkExperienceId === e
                    }));
                    f(t), b(!0), c(!0)
                }

                function w(e) {
                    var t = le(a.filter((function(t) {
                        return t.candidateWorkExperienceId !== e
                    })));
                    o(t, y()), 0 === t.length && (b(!1), f({
                        candidateWorkExperienceId: O(100)
                    }))
                }
                Object(i.useEffect)((function() {
                    r(n, y())
                }), [n, a]);
                var x = a.length > 0,
                    k = 0 == a.length,
                    D = void 0 === m && a.length < 51,
                    C = null != m && null != m.candidateWorkExperienceId ? m.candidateWorkExperienceId : void 0,
                    I = [];
                a.sort(se).forEach((function(e) {
                    I.push({
                        id: e.candidateWorkExperienceId,
                        title: e.jobTitle || "",
                        line1: e.companyName,
                        line2: "".concat(S.c.formatDate(S.b["MMM YYYY"], e.startDate), " - ").concat(e.currentlyWorkHere ? "Present" : S.c.formatDate(S.b["MMM YYYY"], e.endDate), " • ").concat(S.c.dateDiff(e.startDate, e.endDate)),
                        line3: e.jobDescription,
                        onEdit: E,
                        onDelete: w
                    })
                }));
                var N = "Please fill in your work experience details and click Save details. If you don't have any work experience, select the check box.";
                return a.length > 0 && void 0 !== m && (N = "Please Save or Cancel your open work experience before continuing"), l.a.createElement(u.a, {
                    id: "work-experience-section",
                    title: "Work experience",
                    enabled: t
                }, s && l.a.createElement(d.a, null, l.a.createElement(j.a, {
                    danger: !0,
                    icon: !0
                }, N)), 0 === a.length && l.a.createElement(d.a, {
                    className: "no-entries-toggle"
                }, l.a.createElement(ue, {
                    id: "chk-no-entries-toggle",
                    name: "hasNoWorkExperience",
                    label: "I have no work experience",
                    checked: n,
                    value: "true",
                    onChange: function(e) {
                        var t = e.target.checked;
                        r(t, y())
                    }
                }), n && l.a.createElement(j.a, {
                    id: "noWorkExpMessage",
                    info: !0
                }, "You may have more experience than you think. Talk about any paid or voluntary work that provided you with useful skills and experience.")), !n && l.a.createElement(l.a.Fragment, null, l.a.createElement(v, {
                    editMode: g,
                    showAddAnotherButton: D,
                    onAddAnother: function() {
                        var e = {
                            candidateWorkExperienceId: O(100)
                        };
                        f(e), b(!1), c(!0)
                    },
                    listItems: I,
                    selectedListItemId: C,
                    parentComponentName: "workexperience"
                }, m && l.a.createElement(ie, {
                    editMode: g,
                    key: m.candidateWorkExperienceId,
                    workExperience: m,
                    onSubmit: function(e) {
                        f(void 0);
                        var t = [].concat(le(a.filter((function(t) {
                            return t.candidateWorkExperienceId !== e.candidateWorkExperienceId
                        }))), [e]);
                        t.sort(se), o(t, y())
                    },
                    showCancelButton: x,
                    defaultCurrentlyWorkHereValue: k,
                    onCancel: function() {
                        f(void 0), b(!1), c(!1)
                    }
                })), l.a.createElement("input", {
                    type: "hidden",
                    name: "workExperience",
                    value: JSON.stringify(a)
                })))
            }));
            n.d(t, "mapStateToProps", (function() {
                return me
            })), n.d(t, "mapDispatchToProps", (function() {
                return de
            }));
            var me = function(e) {
                    return {
                        isEnabled: e.workExperienceSection.isEnabled,
                        hasNoWorkExperience: e.workExperienceSection.hasNoWorkExperience,
                        workExperience: e.workExperienceSection.workExperience || [],
                        showErrorMessage: e.hasFormBeenSubmitted && !e.fields[a.a.workExperience].isValid
                    }
                },
                de = function(e) {
                    return {
                        updateHasNoExperience: function(t, n) {
                            e(Object(o.m)(a.a.workExperience, n)), e(Object(o.v)(t, n))
                        },
                        updateWorkExperience: function(t, n) {
                            e(Object(o.m)(a.a.workExperience, n)), e(Object(o.E)(t))
                        },
                        formStateChange: function(t) {
                            e(Object(o.m)(a.a.workExperience, !t))
                        }
                    }
                };
            t.default = Object(r.b)(me, de)(pe)
        }
    }
]);