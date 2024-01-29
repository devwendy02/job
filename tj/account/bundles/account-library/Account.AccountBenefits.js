var Account = Account || {};
Account.AccountBenefits = webpackJsonpAccount__name_([2], {
    200: function(n, e, t) {
        "use strict";

        function a(n, e) {
            if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), t.d(e, "AccountBenefitsModal", function() {
            return d
        });
        var o = t(0),
            r = t.n(o),
            i = t(5),
            s = t.n(i),
            c = t(201),
            l = t(19),
            m = function() {
                function n(n, e) {
                    for (var t = 0; t < e.length; t++) {
                        var a = e[t];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
                    }
                }
                return function(e, t, a) {
                    return t && n(e.prototype, t), a && n(e, a), e
                }
            }(),
            d = function() {
                function n() {
                    a(this, n)
                }
                return m(n, [{
                    key: "configure",
                    value: function(n) {
                        var e = this;
                        if (!n) return console.error("Error initialising AccountBenefitsModal: No options specified.");
                        if (!n.launcher) return console.error("Error initialising AccountBenefitsModal: No options.launcher specified.");
                        var t = Object(l.c)(window.location.hostname),
                            a = "Saon" === t.brandGroup,
                            o = document.createElement("div");
                        o.id = "accountBenefitsModalContainer", document.body.appendChild(o), this.modal = s.a.render(r.a.createElement(c.a, {
                            currentBrand: t.name,
                            isSaonBrands: a
                        }), o), n.launcher.addEventListener("click", function(n) {
                            n.preventDefault(), e.modal.open()
                        })
                    }
                }]), n
            }()
    },
    201: function(n, e, t) {
        "use strict";

        function a(n, e) {
            if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(n, e) {
            if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? n : e
        }

        function r(n, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            n.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : n.__proto__ = e)
        }
        var i = t(0),
            s = t.n(i),
            c = t(20),
            l = t.n(c),
            m = t(3),
            d = t.n(m),
            u = t(202),
            f = (t.n(u), function() {
                function n(n, e) {
                    for (var t = 0; t < e.length; t++) {
                        var a = e[t];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
                    }
                }
                return function(e, t, a) {
                    return t && n(e.prototype, t), a && n(e, a), e
                }
            }()),
            p = function(n) {
                function e(n) {
                    a(this, e);
                    var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));
                    return t.state = {
                        showModal: !1
                    }, t.open = t.open.bind(t), t.close = t.close.bind(t), t
                }
                return r(e, n), f(e, [{
                    key: "open",
                    value: function() {
                        this.setState({
                            showModal: !0
                        })
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.setState({
                            showModal: !1
                        })
                    }
                }, {
                    key: "createUrl",
                    value: function(n) {
                        if (this.props.isSaonBrands) {
                            return "/account/Images/" + ("Jobs.ie" == this.props.currentBrand ? "Jobsie" : this.props.currentBrand) + "/account-benefits/" + n
                        }
                        return "/account/Images/Shared/account-benefits/" + n
                    }
                }, {
                    key: "startsWithVowel",
                    value: function(n) {
                        var e = ["a", "e", "i", "o", "u"],
                            t = n.charAt(0).toLowerCase();
                        return e.includes(t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var n = this.startsWithVowel(this.props.currentBrand) ? "an" : "a";
                        return s.a.createElement(l.a, {
                            show: this.state.showModal,
                            onHide: this.close,
                            className: u.accountBenefitsModal,
                            "aria-labelledby": "accountBenefitsModalTitle"
                        }, s.a.createElement(l.a.Header, {
                            closeButton: !0
                        }, s.a.createElement(l.a.Title, {
                            id: "accountBenefitsModalTitle"
                        }, "Why create ", n, " ", this.props.currentBrand, " account")), s.a.createElement(l.a.Body, null, s.a.createElement("div", {
                            className: u.accountBenefitsContent
                        }, s.a.createElement("div", {
                            className: u.accountBenefit
                        }, s.a.createElement("div", null, s.a.createElement("img", {
                            src: this.createUrl("job-details.min.svg"),
                            alt: "Job details logo"
                        })), s.a.createElement("p", null, "Enter your details just once & apply for jobs faster, from anywhere")), s.a.createElement("div", {
                            className: u.accountBenefit
                        }, s.a.createElement("div", null, s.a.createElement("img", {
                            src: this.createUrl("jobs-email.min.svg"),
                            alt: "Jobs by email logo"
                        })), s.a.createElement("p", null, "Get new, matching jobs sent directly to your inbox")), s.a.createElement("div", {
                            className: u.accountBenefit
                        }, s.a.createElement("div", null, s.a.createElement("img", {
                            src: this.createUrl("candidate-activity.min.svg"),
                            alt: "Candidate activity logo"
                        })), s.a.createElement("p", null, "Keep track of your application history")), s.a.createElement("div", {
                            className: u.accountBenefit
                        }, s.a.createElement("div", null, s.a.createElement("img", {
                            src: this.createUrl("help.min.svg"),
                            alt: "Help logo"
                        })), s.a.createElement("p", null, "Get expert career advice emails, including CV & interview tips")))))
                    }
                }]), e
            }(i.Component);
        e.a = p, p.propTypes = {
            currentBrand: d.a.string.isRequired,
            isSaonBrands: d.a.bool.isRequired
        }
    },
    202: function(n, e, t) {
        var a = t(203);
        "string" == typeof a && (a = [
            [n.i, a, ""]
        ]);
        var o = {
            hmr: !0
        };
        o.transform = void 0, o.insertInto = void 0;
        t(15)(a, o);
        a.locals && (n.exports = a.locals)
    },
    203: function(n, e, t) {
        e = n.exports = t(14)(!1), e.push([n.i, "/* Licensed MIT; Copyright (c) 2011-2014 Twitter, Inc <https://github.com/twbs/bootstrap/blob/master/LICENSE> */\n/* Licensed MIT; Copyright (c) 2011-2014 Twitter, Inc <https://github.com/twbs/bootstrap/blob/master/LICENSE> */\n/*\nAnimate.css - http://daneden.me/animate\nLicensed under the ☺ license (http://licence.visualidiot.com/)\nCopyright (c) 2012 Dan Eden*/\n.animated {\n  -webkit-animation-duration: 1s;\n  -moz-animation-duration: 1s;\n  -o-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  -moz-animation-fill-mode: both;\n  -o-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes shake {\n  0%,\n  100% {\n    -webkit-transform: translateX(0);\n  }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translateX(-10px);\n  }\n  20%,\n  40%,\n  60%,\n  80% {\n    -webkit-transform: translateX(10px);\n  }\n}\n@-moz-keyframes shake {\n  0%,\n  100% {\n    -moz-transform: translateX(0);\n  }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -moz-transform: translateX(-10px);\n  }\n  20%,\n  40%,\n  60%,\n  80% {\n    -moz-transform: translateX(10px);\n  }\n}\n@-o-keyframes shake {\n  0%,\n  100% {\n    -o-transform: translateX(0);\n  }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -o-transform: translateX(-10px);\n  }\n  20%,\n  40%,\n  60%,\n  80% {\n    -o-transform: translateX(10px);\n  }\n}\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-10px);\n  }\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(10px);\n  }\n}\n.shake {\n  -webkit-animation-name: shake;\n  -moz-animation-name: shake;\n  -o-animation-name: shake;\n  animation-name: shake;\n}\n.modal {\n  display: block;\n}\n.modal-content > .close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n@media (min-width: 768px) {\n  .modal-sm > .modal-dialog {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg > .modal-dialog {\n    width: 900px;\n  }\n}\n.MVqqUFBV4MnR1NdhCgIyC .modal-content {\n  background-color: #f2f2f2;\n}\n@media (min-width: 768px) {\n  .MVqqUFBV4MnR1NdhCgIyC .modal-content {\n    max-width: 550px;\n  }\n}\n.MVqqUFBV4MnR1NdhCgIyC .modal-header {\n  border: 0;\n  padding: 20px;\n}\n.MVqqUFBV4MnR1NdhCgIyC .modal-header .close {\n  opacity: 0.8;\n}\n.MVqqUFBV4MnR1NdhCgIyC .modal-header .close:focus,\n.MVqqUFBV4MnR1NdhCgIyC .modal-header .close:hover {\n  opacity: 1;\n}\n.MVqqUFBV4MnR1NdhCgIyC .modal-title {\n  font-size: 1.4em;\n}\n@media (min-width: 475px) {\n  .MVqqUFBV4MnR1NdhCgIyC .modal-title {\n    font-size: 1.8em;\n  }\n}\n.MVqqUFBV4MnR1NdhCgIyC .modal-body {\n  padding: 0 20px 20px 20px;\n}\n.MVqqUFBV4MnR1NdhCgIyC ._2hrquRqUnUC6zwaMIKRV4F {\n  display: flex;\n  flex-wrap: wrap;\n}\n.MVqqUFBV4MnR1NdhCgIyC .AO_mVrfTmz2-nsLY7ouXM {\n  display: flex;\n  width: 100%;\n}\n.MVqqUFBV4MnR1NdhCgIyC .AO_mVrfTmz2-nsLY7ouXM:not(:last-child) {\n  margin-bottom: 20px;\n}\n.MVqqUFBV4MnR1NdhCgIyC .AO_mVrfTmz2-nsLY7ouXM div {\n  flex: 0 0 50px;\n  margin-right: 20px;\n}\n@media (min-width: 536px) {\n  .MVqqUFBV4MnR1NdhCgIyC .AO_mVrfTmz2-nsLY7ouXM div {\n    flex: 0 0 80px;\n  }\n}\n.MVqqUFBV4MnR1NdhCgIyC .AO_mVrfTmz2-nsLY7ouXM img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.MVqqUFBV4MnR1NdhCgIyC .AO_mVrfTmz2-nsLY7ouXM p {\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n}\n", ""]), e.locals = {
            "account-benefits-modal": "MVqqUFBV4MnR1NdhCgIyC",
            accountBenefitsModal: "MVqqUFBV4MnR1NdhCgIyC",
            "account-benefits-content": "_2hrquRqUnUC6zwaMIKRV4F",
            accountBenefitsContent: "_2hrquRqUnUC6zwaMIKRV4F",
            "account-benefit": "AO_mVrfTmz2-nsLY7ouXM",
            accountBenefit: "AO_mVrfTmz2-nsLY7ouXM"
        }
    }
}, [200]);
//# sourceMappingURL=Account.AccountBenefits.js.map