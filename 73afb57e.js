import {
    d as b
} from "./fa0ad9b0.js";
import {
    _ as v,
    k as y,
    r as x,
    o as i,
    c as s,
    a as o,
    h as d,
    b as r,
    w as g,
    d as n,
    g as l,
    t as h,
    l as _
} from "./5903dc4e.js";
import {
    l as F
} from "./0f33ead1.js";
import {
    _ as k,
    a as P,
    b as w,
    c as S,
    d as B,
    e as C,
    f as I,
    g as L,
    h as N,
    i as D,
    j as U,
    k as E,
    l as q,
    m as A,
    n as J,
    o as O
} from "./6d97a9f3.js";
import {
    _ as M,
    a as H,
    b as z,
    c as R,
    e as V,
    f as G,
    g as j,
    d as Q
} from "./f027640e.js";
const W = {
        data() {
            return {
                countryLock: !1,
                countryText: "English",
                navBg: !0,
                routerPath: "",
                lag: "en-us",
                landingpageLock: !0,
                loginImg_white: "/static/images/logo_white.png",
                loginImg_blue: "/static/images/logo_blue.png",
                language: F.setlang(),
                selectedlang: "",
                lang: y.getlang(),
                disclaimerShow: !1,
                loginJudge: !1,
                cointokenIframe: "",
                pageText: {
                    login: "",
                    register: "",
                    dashboard: "",
                    faq: "",
                    tos: "",
                    pp: "",
                    calculator: "",
                    proof: "",
                    cp: "",
                    cc: "",
                    contest: "",
                    rc: "",
                    rac: "",
                    ac: "",
                    oc: "",
                    comcon: "",
                    advertise: "",
                    help: "",
                    bittorrentFaucet: ""
                },
                activeLang: ""
            }
        },
        components: {
            disclaimer: b
        },
        computed: {
            isNight: function() {
                return this.$store.state.night.night
            },
            coinToUsd: function() {
                return this.$store.state.night.coinToUsd
            }
        },
        metaInfo: {
            title: "Coinpayu: earn online in an easy way | COINPAYU",
            meta: [{
                name: "description",
                content: "Get paid for browsing websites, playing games and taking surveys."
            }]
        },
        created: function() {
            this.routerPath = this.$route.name, this.$route.name == "landingpage1" || this.$route.name == "landingpage2" || this.$route.name == "landingpage3" || this.$route.name == "landingpage4" ? this.landingpageLock = !1 : this.landingpageLock = !0, this.navBg = this.$route.meta.name !== "index" && this.$route.name !== "landingpage2" && this.$route.name !== "landingpage3" && this.$route.name !== "landingpage4" && this.$route.name !== "about" && this.$route.name !== "recommendAds" && this.$route.name !== "tronStaking";
            var t = localStorage.getItem("coinPayU-lang");
            this.lag = t, t == "zh-cn" ? (this.selectedlang = this.language.mand, this.activeLang = "/static/img/china_gq.png", this.countryText = "Chinese") : t == "es-es" ? (this.selectedlang = this.language.spa, this.activeLang = "/static/img/es_gq.png", this.countryText = "Espa\xF1ol") : t == "ru-ru" ? (this.selectedlang = this.language.rus, this.activeLang = "/static/img/ru_gq.png", this.countryText = "\u0440\u0443\u0441\u0441\u043A\u0438\u0439") : (this.selectedlang = this.language.eng, this.activeLang = "/static/img/uk_gq.png", this.countryText = "English");
            var a = this.selectedlang;
            this.pageText.affiliate = a.affiliate.affiliate, this.pageText.advertise = a.advertiseIndex.advertise, this.pageText.login = a.navbar.login, this.pageText.register = a.navbar.register, this.pageText.dashboard = a.navbar.dashboard, this.pageText.faq = a.navbar.faq, this.pageText.tos = a.navbar.tos, this.pageText.aboutUs = a.about.about, this.pageText.pp = a.navbar.pp, this.pageText.calculator = a.navbar.calculator, this.pageText.proof = a.navbar.proof, this.pageText.cp = a.navbar.cp, this.pageText.cc = a.navbar.cc, this.pageText.help = a.navbar.help, this.pageText.rc = a.navbar.rc, this.pageText.ac = a.navbar.ac, this.pageText.oc = a.navbar.oc, this.pageText.rac = a.navbar.rac, this.pageText.vg = a.navbar.vg, this.pageText.contest = a.contest.contest, this.pageText.comcon = a.contest.comcon, this.pageText.about = a.footer.about, this.pageText.info = a.footer.info, this.pageText.community = a.footer.community, this.pageText.faucet = a.footer.faucet, this.pageText.testimonials = a.footer.testimonials, this.pageText.moreFaucet = a.footer.moreFaucet, this.pageText.bitcoinFaucet = a.footer.bitcoinFaucet, this.pageText.ethereumFaucet = a.footer.ethereumFaucet, this.pageText.dogecoinFaucet = a.footer.dogecoinFaucet, this.pageText.iotaFaucet = a.footer.iotaFaucet, this.pageText.oasisFaucet = a.footer.oasisFaucet, this.pageText.tronFaucet = a.footer.tronFaucet, this.pageText.dashFaucet = a.footer.dashFaucet, this.pageText.litecoinFaucet = a.footer.litecoinFaucet, this.pageText.bitcoinCashFaucet = a.footer.bitcoinCashFaucet, this.pageText.binancecoinFaucet = a.footer.binancecoinFaucet, this.pageText.bittorrentFaucet = a.footer.bittorrentFaucet, this.pageText.usdtFaucet = a.footer.usdtFaucet, this.pageText.adaFaucet = a.footer.adaFaucet, this.pageText.solanaFaucet = a.footer.solanaFaucet, this.pageText.shibaFaucet = a.footer.shibaFaucet, this.pageText.polygonFaucet = a.footer.polygonFaucet, localStorage.getItem("coinPayU-cointoken") && (this.loginJudge = !0), localStorage.getItem("coinPayU-cat") && (this.loginJudge = !0), this.$route.query.r ? document.referrer.length > 0 ? document.referrer.match(/:\/\/(.[^/]+)/)[1] === "article.coinpayu.com" ? this.Setcookie("upline", JSON.stringify({
                name: this.$route.query.r,
                type: 2
            })) : this.Setcookie("upline", JSON.stringify({
                name: this.$route.query.r,
                type: 1
            })) : this.Setcookie("upline", JSON.stringify({
                name: this.$route.query.r,
                type: 1
            })) : this.$route.params.r && this.Setcookie("upline", JSON.stringify({
                name: this.$route.params.r,
                type: 1
            })), this.createCookie("referrer_url", document.referrer, ".coinpayu.com")
        },
        mounted: function() {
            var t = $(window).width();
            t < 991 ? ($(".index-nav-left>li>a").on("click", function() {
                $(".navbar-toggler").click()
            }), $(".coinapayu-footer-box-title").on("click", function() {
                $(this).find("svg").slideToggle(), $(this).siblings(".coinapayu-footer-box-item").stop().slideToggle(200)
            }), $(".coinapayu-footer-more-faucet-btn").on("click", function() {
                $(this).siblings(".coinapayu-footer-more-faucet").stop().slideToggle(200)
            }), $(".coinapayu-footer-more-staking-btn").on("click", function() {
                $(this).siblings(".coinapayu-footer-more-staking").stop().slideToggle(200)
            })) : ($("#more-faucet-list").on("mouseenter", function() {
                $(this).find(".coinapayu-footer-more-faucet").stop().slideDown(), $(this).on("mouseleave", function() {
                    $(this).find(".coinapayu-footer-more-faucet").stop().slideUp()
                })
            }), $("#more-staking-list").on("mouseenter", function() {
                $(this).find(".coinapayu-footer-more-staking").stop().slideDown(), $(this).on("mouseleave", function() {
                    $(this).find(".coinapayu-footer-more-staking").stop().slideUp()
                })
            })), $(document).scroll(() => {
                $(document).scrollTop() > 0 ? (this.navBg = !0, $("#navbarCollapse").removeClass("show")) : (this.$route.meta.name === "index" || this.$route.name === "landingpage2" || this.$route.name === "landingpage3" || this.$route.name === "landingpage4" || this.$route.name === "about" || this.$route.name === "recommendAds" || this.$route.name === "tronStaking") && (this.navBg = !1)
            }), $(".nav-scroll").click(function() {
                $(window).width() < 991 && $("#web-btn-index").click()
            })
        },
        watch: {
            $route: {
                handler: function() {
                    this.routerPath = this.$route.name, this.navBg = this.$route.meta.name !== "index" && this.$route.name !== "landingpage2" && this.$route.name !== "landingpage3" && this.$route.name !== "landingpage4" && this.$route.name !== "okex" && this.$route.name !== "recommendAds" && this.$route.name !== "tronStaking", this.$route.name == "landingpage1" || this.$route.name == "landingpage2" || this.$route.name == "landingpage3" || this.$route.name == "landingpage4" ? this.landingpageLock = !1 : this.landingpageLock = !0
                },
                immediate: !0
            }
        },
        methods: {
            openWindow: function(t) {
                window.open(t, "_blank")
            },
            changeLogin: function(t) {
                this.loginJudge = t
            },
            setNight: function() {
                this.isNight ? (this.$cookies.set("night", 0), this.$store.commit("changeNightInfo", !1)) : (this.$cookies.set("night", 1), this.$store.commit("changeNightInfo", !0))
            },
            createCookie: function(t, a, p, f, e) {
                var c = t + "=" + escape(a) + ";";
                f && (f instanceof Date ? isNaN(f.getTime()) && (f = new Date) : f = new Date(new Date().getTime() + parseInt(f) * 1e3 * 60 * 60 * 24), c += "expires=" + f.toGMTString() + ";"), e && (c += "path=" + e + ";"), p && (c += "domain=" + p + ";"), document.cookie = c
            },
            Setcookie: function(t, a) {
                var p = new Date;
                p.setTime(p.getTime() + 24 * 60 * 60 * 1e3), document.cookie = t + "=" + a + ";expires=" + p.toGMTString() + ";path=/; domain=.coinpayu.com"
            },
            langRu: function() {
                this.selectedlang = this.language.rus;
                var t = this.selectedlang;
                this.activeLang = "/static/img/ru_gq.png", this.lag = "ru-ru", this.countryText = "\u0440\u0443\u0441\u0441\u043A\u0438\u0439", this.countryLock = !1, localStorage.setItem("coinPayU-lang", "ru-ru"), this.pageText.affiliate = t.affiliate.affiliate, this.pageText.advertise = t.advertiseIndex.advertise, this.pageText.login = t.navbar.login, this.pageText.register = t.navbar.register, this.pageText.dashboard = t.navbar.dashboard, this.pageText.faq = t.navbar.faq, this.pageText.tos = t.navbar.tos, this.pageText.aboutUs = t.about.about, this.pageText.pp = t.navbar.pp, this.pageText.calculator = t.navbar.calculator, this.pageText.proof = t.navbar.proof, this.pageText.cp = t.navbar.cp, this.pageText.cc = t.navbar.cc, this.pageText.help = t.navbar.help, this.pageText.rc = t.navbar.rc, this.pageText.ac = t.navbar.ac, this.pageText.oc = t.navbar.oc, this.pageText.rac = t.navbar.rac, this.pageText.vg = t.navbar.vg, this.pageText.contest = t.contest.contest, this.pageText.comcon = t.contest.comcon, this.pageText.about = t.footer.about, this.pageText.info = t.footer.info, this.pageText.community = t.footer.community, this.pageText.faucet = t.footer.faucet, this.pageText.testimonials = t.footer.testimonials, this.pageText.moreFaucet = t.footer.moreFaucet, this.pageText.bitcoinFaucet = t.footer.bitcoinFaucet, this.pageText.ethereumFaucet = t.footer.ethereumFaucet, this.pageText.dogecoinFaucet = t.footer.dogecoinFaucet, this.pageText.oasisFaucet = t.footer.oasisFaucet, this.pageText.iotaFaucet = t.footer.iotaFaucet, this.pageText.tronFaucet = t.footer.tronFaucet, this.pageText.dashFaucet = t.footer.dashFaucet, this.pageText.litecoinFaucet = t.footer.litecoinFaucet, this.pageText.bitcoinCashFaucet = t.footer.bitcoinCashFaucet, this.pageText.binancecoinFaucet = t.footer.binancecoinFaucet, this.pageText.bittorrentFaucet = t.footer.bittorrentFaucet, this.pageText.usdtFaucet = t.footer.usdtFaucet, this.pageText.adaFaucet = t.footer.adaFaucet, this.pageText.solanaFaucet = t.footer.solanaFaucet, this.pageText.shibaFaucet = t.footer.shibaFaucet, this.pageText.polygonFaucet = t.footer.polygonFaucet
            },
            langEs: function() {
                this.selectedlang = this.language.spa;
                var t = this.selectedlang;
                this.activeLang = "/static/img/es_gq.png", this.lag = "es-es", this.countryText = "Espa\xF1ol", this.countryLock = !1, localStorage.setItem("coinPayU-lang", "es-es"), this.pageText.affiliate = t.affiliate.affiliate, this.pageText.advertise = t.advertiseIndex.advertise, this.pageText.login = t.navbar.login, this.pageText.register = t.navbar.register, this.pageText.dashboard = t.navbar.dashboard, this.pageText.faq = t.navbar.faq, this.pageText.tos = t.navbar.tos, this.pageText.about = t.about.about, this.pageText.pp = t.navbar.pp, this.pageText.calculator = t.navbar.calculator, this.pageText.proof = t.navbar.proof, this.pageText.cp = t.navbar.cp, this.pageText.cc = t.navbar.cc, this.pageText.help = t.navbar.help, this.pageText.rc = t.navbar.rc, this.pageText.ac = t.navbar.ac, this.pageText.oc = t.navbar.oc, this.pageText.rac = t.navbar.rac, this.pageText.vg = t.navbar.vg, this.pageText.contest = t.contest.contest, this.pageText.comcon = t.contest.comcon, this.pageText.about = t.footer.about, this.pageText.info = t.footer.info, this.pageText.testimonials = t.footer.testimonials, this.pageText.community = t.footer.community, this.pageText.faucet = t.footer.faucet, this.pageText.moreFaucet = t.footer.moreFaucet, this.pageText.bitcoinFaucet = t.footer.bitcoinFaucet, this.pageText.ethereumFaucet = t.footer.ethereumFaucet, this.pageText.dogecoinFaucet = t.footer.dogecoinFaucet, this.pageText.oasisFaucet = t.footer.oasisFaucet, this.pageText.iotaFaucet = t.footer.iotaFaucet, this.pageText.tronFaucet = t.footer.tronFaucet, this.pageText.dashFaucet = t.footer.dashFaucet, this.pageText.litecoinFaucet = t.footer.litecoinFaucet, this.pageText.bitcoinCashFaucet = t.footer.bitcoinCashFaucet, this.pageText.binancecoinFaucet = t.footer.binancecoinFaucet, this.pageText.bittorrentFaucet = t.footer.bittorrentFaucet, this.pageText.usdtFaucet = t.footer.usdtFaucet, this.pageText.adaFaucet = t.footer.adaFaucet, this.pageText.solanaFaucet = t.footer.solanaFaucet, this.pageText.shibaFaucet = t.footer.shibaFaucet, this.pageText.polygonFaucet = t.footer.polygonFaucet
            },
            langEng: function() {
                this.selectedlang = this.language.eng;
                var t = this.selectedlang;
                this.activeLang = "/static/img/uk_gq.png", this.lag = "en-us", this.countryText = "English", this.countryLock = !1, localStorage.setItem("coinPayU-lang", "en-us"), this.pageText.affiliate = t.affiliate.affiliate, this.pageText.advertise = t.advertiseIndex.advertise, this.pageText.login = t.navbar.login, this.pageText.register = t.navbar.register, this.pageText.dashboard = t.navbar.dashboard, this.pageText.faq = t.navbar.faq, this.pageText.tos = t.navbar.tos, this.pageText.aboutUs = t.about.about, this.pageText.pp = t.navbar.pp, this.pageText.calculator = t.navbar.calculator, this.pageText.proof = t.navbar.proof, this.pageText.cp = t.navbar.cp, this.pageText.cc = t.navbar.cc, this.pageText.help = t.navbar.help, this.pageText.rc = t.navbar.rc, this.pageText.ac = t.navbar.ac, this.pageText.oc = t.navbar.oc, this.pageText.rac = t.navbar.rac, this.pageText.vg = t.navbar.vg, this.pageText.contest = t.contest.contest, this.pageText.comcon = t.contest.comcon, this.pageText.about = t.footer.about, this.pageText.info = t.footer.info, this.pageText.info = t.footer.info, this.pageText.testimonials = t.footer.testimonials, this.pageText.community = t.footer.community, this.pageText.faucet = t.footer.faucet, this.pageText.moreFaucet = t.footer.moreFaucet, this.pageText.bitcoinFaucet = t.footer.bitcoinFaucet, this.pageText.ethereumFaucet = t.footer.ethereumFaucet, this.pageText.dogecoinFaucet = t.footer.dogecoinFaucet, this.pageText.oasisFaucet = t.footer.oasisFaucet, this.pageText.iotaFaucet = t.footer.iotaFaucet, this.pageText.tronFaucet = t.footer.tronFaucet, this.pageText.dashFaucet = t.footer.dashFaucet, this.pageText.litecoinFaucet = t.footer.litecoinFaucet, this.pageText.bitcoinCashFaucet = t.footer.bitcoinCashFaucet, this.pageText.binancecoinFaucet = t.footer.binancecoinFaucet, this.pageText.bittorrentFaucet = t.footer.bittorrentFaucet, this.pageText.usdtFaucet = t.footer.usdtFaucet, this.pageText.adaFaucet = t.footer.adaFaucet, this.pageText.solanaFaucet = t.footer.solanaFaucet, this.pageText.shibaFaucet = t.footer.shibaFaucet, this.pageText.polygonFaucet = t.footer.polygonFaucet, localStorage.setItem("coinPayU-lang", "en-us")
            }
        },
        destroyed() {
            clearInterval(this.timer)
        }
    },
    X = {
        class: "container"
    },
    Y = ["src"],
    K = o("button", {
        id: "web-btn-index",
        class: "navbar-toggler collapsed",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarCollapse",
        "aria-controls": "navbarCollapse",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
    }, [o("span", {
        class: "fa fa-align-left",
        style: {
            color: "#333"
        }
    })], -1),
    Z = {
        class: "navbar-collapse collapse",
        id: "navbarCollapse"
    },
    tt = {
        class: "navbar-nav mr-auto index-nav-left"
    },
    et = {
        key: 0,
        class: "contestNav nav-scroll"
    },
    at = {
        key: 1,
        class: "contestNav contestNavMP"
    },
    ot = l("Leaderboard"),
    it = {
        key: 2,
        class: "contestNav nav-scroll"
    },
    st = {
        class: "index-header-faucet"
    },
    nt = {
        key: 0,
        src: k
    },
    rt = {
        key: 1,
        src: P
    },
    ct = {
        key: 2,
        src: w
    },
    ut = {
        key: 3,
        src: S
    },
    gt = {
        key: 4,
        src: B
    },
    ht = {
        key: 5,
        src: C
    },
    lt = {
        key: 6,
        src: I
    },
    pt = {
        key: 7,
        src: L
    },
    ft = {
        key: 8,
        src: N
    },
    mt = {
        key: 9,
        src: D
    },
    dt = {
        key: 10,
        src: U
    },
    _t = {
        key: 11,
        src: E
    },
    xt = {
        key: 12,
        src: q
    },
    Tt = {
        key: 13,
        src: A
    },
    bt = {
        key: 14,
        src: J
    },
    vt = {
        key: 15,
        src: O
    },
    yt = {
        key: 16
    },
    Ft = {
        key: 17
    },
    kt = {
        key: 18
    },
    Pt = {
        key: 19
    },
    wt = {
        key: 20
    },
    St = {
        key: 21
    },
    Bt = {
        key: 22
    },
    Ct = {
        key: 23
    },
    It = {
        key: 24
    },
    Lt = {
        key: 25
    },
    Nt = {
        key: 26
    },
    Dt = {
        key: 27
    },
    Ut = {
        key: 28
    },
    Et = {
        key: 29
    },
    qt = {
        key: 30
    },
    At = {
        key: 31
    },
    Jt = {
        class: "mt-2 mt-md-0 nav navbar-nav navbar-right padding-nav index-nav-right"
    },
    Ot = {
        class: "container",
        style: {
            height: "74px"
        }
    },
    Mt = ["src"],
    Ht = {
        class: "coinapayu-footer"
    },
    zt = {
        class: "coinapayu-footer-box"
    },
    Rt = {
        class: "coinapayu-footer-box-title"
    },
    Vt = _('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="coinapayu-footer-box-add"><path d="M4 11h16v2H4v-2z" fill="currentColor"></path><path d="M13 4v16h-2V4h2z" fill="currentColor"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="coinapayu-footer-box-sub"><path fill="currentColor" d="M4 11h16v2H4z"></path></svg>', 2),
    Gt = {
        class: "coinapayu-footer-box-item"
    },
    jt = {
        class: "coinapayu-footer-box-title"
    },
    Qt = _('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="coinapayu-footer-box-add"><path d="M4 11h16v2H4v-2z" fill="currentColor"></path><path d="M13 4v16h-2V4h2z" fill="currentColor"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="coinapayu-footer-box-sub"><path fill="currentColor" d="M4 11h16v2H4z"></path></svg>', 2),
    Wt = {
        class: "coinapayu-footer-box-item"
    },
    Xt = l("Leaderboard"),
    Yt = l("Forum"),
    Kt = {
        class: "coinapayu-footer-community"
    },
    Zt = {
        class: "coinapayu-footer-community-title"
    },
    $t = _('<div class="coinapayu-footer-community-link"><a href="https://twitter.com/CoinPayU" target="_blank"><img src="' + M + '"></a><a href="https://t.me/coinpayu" target="_blank"><img src="' + H + '"></a><a href="https://www.facebook.com/coinpayu" target="_blank"><img src="' + z + '"></a><a href="https://www.youtube.com/channel/UCHxyhc6svJ22rpqu4SNbH3Q" target="_blank"><img src="' + R + '"></a></div>', 1),
    te = {
        class: "coinapayu-footer-country"
    },
    ee = {
        class: "coinapayu-footer-country-logo"
    },
    ae = ["src"],
    oe = o("b", null, null, -1),
    ie = {
        key: 0
    },
    se = o("p", {
        class: "coinapayu-footer-country-logo"
    }, [o("img", {
        src: V
    })], -1),
    ne = o("span", null, "English", -1),
    re = [se, ne],
    ce = o("p", {
        class: "coinapayu-footer-country-logo"
    }, [o("img", {
        src: G
    })], -1),
    ue = o("span", null, "\u0440\u0443\u0441\u0441\u043A\u0438\u0439", -1),
    ge = [ce, ue],
    he = o("p", {
        class: "coinapayu-footer-country-logo"
    }, [o("img", {
        src: j
    })], -1),
    le = o("span", null, "Espa\xF1ol", -1),
    pe = [he, le],
    fe = ["src"],
    me = o("img", {
        src: Q,
        alt: ""
    }, null, -1),
    de = {
        class: "coinapayu-footer-copyrighted"
    };

function _e(t, a, p, f, e, c) {
    const u = x("router-link"),
        T = x("router-view");
    return i(), s("div", null, [o("div", null, [t.$route.name != "resetPassword" ? (i(), s("nav", {
        key: 0,
        class: d({
            navbar: !0,
            "navbar-expand-md": !0,
            "navbar-dark": !0,
            bgwhite: e.navBg,
            "fixed-top": t.$route.meta.name === "index" || t.$route.name == "landingpage4" || t.$route.name == "landingpage1" || t.$route.name == "landingpage2" || t.$route.name == "landingpage3" || t.$route.name == "about" || t.$route.name == "recommendAds" || t.$route.name == "tronStaking"
        })
    }, [o("div", X, [r(u, {
        to: e.loginJudge ? "/dashboard" : "/",
        class: "navbar-brand"
    }, {
        default: g(() => [o("img", {
            src: (e.navBg, e.loginImg_blue),
            style: {
                width: "130px"
            },
            alt: "",
            class: "logo-img"
        }, null, 8, Y)]),
        _: 1
    }, 8, ["to"]), K, o("div", Z, [o("ul", tt, [e.routerPath !== "faucetBitcoin" && e.routerPath !== "faucetDoge" && e.routerPath !== "faucetTron" && e.routerPath !== "faucetEth" && e.routerPath !== "faucetLtc" && e.routerPath !== "faucetDash" && e.routerPath !== "faucetBch" && e.routerPath !== "faucetBnb" && e.routerPath !== "faucetBtt" && e.routerPath !== "faucetUsdt" && e.routerPath !== "faucetAda" && e.routerPath !== "faucetSolana" && e.routerPath !== "faucetShiba" && e.routerPath !== "faucetPolygon" && e.routerPath !== "faucetIota" && e.routerPath !== "faucetOasis" && e.routerPath !== "tronStaking" ? (i(), s("li", et, [r(u, {
        to: "/advertise",
        style: {
            color: "#ffffff"
        }
    }, {
        default: g(() => [l(h(e.pageText.advertise), 1)]),
        _: 1
    })])) : n("", !0), e.landingpageLock && e.routerPath !== "faucetBitcoin" && e.routerPath !== "faucetDoge" && e.routerPath !== "faucetTron" && e.routerPath !== "faucetEth" && e.routerPath !== "faucetLtc" && e.routerPath !== "faucetDash" && e.routerPath !== "faucetBch" && e.routerPath !== "faucetBnb" && e.routerPath !== "faucetBtt" && e.routerPath !== "faucetUsdt" && e.routerPath !== "faucetAda" && e.routerPath !== "faucetSolana" && e.routerPath !== "faucetShiba" && e.routerPath !== "faucetPolygon" && e.routerPath !== "faucetIota" && e.routerPath !== "faucetOasis" && e.routerPath !== "appDownload" && e.routerPath !== "tronStaking" ? (i(), s("li", at, [r(u, {
        to: "/leaderboard",
        style: {
            color: "#ffffff"
        }
    }, {
        default: g(() => [ot]),
        _: 1
    })])) : n("", !0), e.routerPath == "faucetBitcoin" || e.routerPath == "faucetDoge" || e.routerPath == "faucetTron" || e.routerPath == "faucetEth" || e.routerPath == "faucetLtc" || e.routerPath == "faucetDash" || e.routerPath == "faucetBch" || e.routerPath == "faucetBnb" || e.routerPath == "faucetBtt" || e.routerPath == "faucetUsdt" || e.routerPath == "faucetAda" || e.routerPath == "faucetSolana" || e.routerPath == "faucetShiba" || e.routerPath == "faucetPolygon" || e.routerPath == "faucetIota" || e.routerPath == "faucetIota" ? (i(), s("li", it, [o("div", st, [e.routerPath == "faucetBitcoin" ? (i(), s("img", nt)) : n("", !0), e.routerPath == "faucetTron" ? (i(), s("img", rt)) : n("", !0), e.routerPath == "faucetDoge" ? (i(), s("img", ct)) : n("", !0), e.routerPath == "faucetEth" ? (i(), s("img", ut)) : n("", !0), e.routerPath == "faucetLtc" ? (i(), s("img", gt)) : n("", !0), e.routerPath == "faucetDash" ? (i(), s("img", ht)) : n("", !0), e.routerPath == "faucetBch" ? (i(), s("img", lt)) : n("", !0), e.routerPath == "faucetBnb" ? (i(), s("img", pt)) : n("", !0), e.routerPath == "faucetBtt" ? (i(), s("img", ft)) : n("", !0), e.routerPath == "faucetUsdt" ? (i(), s("img", mt)) : n("", !0), e.routerPath == "faucetAda" ? (i(), s("img", dt)) : n("", !0), e.routerPath == "faucetSolana" ? (i(), s("img", _t)) : n("", !0), e.routerPath == "faucetShiba" ? (i(), s("img", xt)) : n("", !0), e.routerPath == "faucetPolygon" ? (i(), s("img", Tt)) : n("", !0), e.routerPath == "faucetOasis" ? (i(), s("img", bt)) : n("", !0), e.routerPath == "faucetIota" ? (i(), s("img", vt)) : n("", !0), e.routerPath == "faucetBitcoin" ? (i(), s("span", yt, "BTC")) : n("", !0), e.routerPath == "faucetTron" ? (i(), s("span", Ft, "TRX")) : n("", !0), e.routerPath == "faucetDoge" ? (i(), s("span", kt, "DOGE")) : n("", !0), e.routerPath == "faucetEth" ? (i(), s("span", Pt, "ETH")) : n("", !0), e.routerPath == "faucetLtc" ? (i(), s("span", wt, "LTC")) : n("", !0), e.routerPath == "faucetDash" ? (i(), s("span", St, "DASH")) : n("", !0), e.routerPath == "faucetBch" ? (i(), s("span", Bt, "BCH")) : n("", !0), e.routerPath == "faucetBnb" ? (i(), s("span", Ct, "BNB")) : n("", !0), e.routerPath == "faucetBtt" ? (i(), s("span", It, "BTT")) : n("", !0), e.routerPath == "faucetUsdt" ? (i(), s("span", Lt, "USDT")) : n("", !0), e.routerPath == "faucetAda" ? (i(), s("span", Nt, "ADA")) : n("", !0), e.routerPath == "faucetSolana" ? (i(), s("span", Dt, "SOL")) : n("", !0), e.routerPath == "faucetShiba" ? (i(), s("span", Ut, "SHIB")) : n("", !0), e.routerPath == "faucetPolygon" ? (i(), s("span", Et, "MATIC")) : n("", !0), e.routerPath == "faucetOasis" ? (i(), s("span", qt, "ROSE")) : n("", !0), e.routerPath == "faucetIota" ? (i(), s("span", At, "MIOTA")) : n("", !0), l(" " + h(c.coinToUsd), 1)])])) : n("", !0)]), o("ul", Jt, [e.loginJudge ? (i(), s("li", {
        key: 0,
        class: d({
            contestNav: !0,
            "nav-scroll": !0,
            lagDashboard: e.lag == "ru-ru"
        })
    }, [r(u, {
        to: "/dashboard",
        style: {
            color: "#ffffff"
        }
    }, {
        default: g(() => [l(h(e.pageText.dashboard), 1)]),
        _: 1
    })], 2)) : n("", !0), e.loginJudge ? n("", !0) : (i(), s("li", {
        key: 1,
        class: d({
            "nav-scroll": !0,
            lagRegister: e.lag == "ru-ru"
        })
    }, [r(u, {
        to: "/register",
        style: {
            color: "#FFFFFF"
        }
    }, {
        default: g(() => [l(h(e.pageText.register), 1)]),
        _: 1
    })], 2)), e.loginJudge ? n("", !0) : (i(), s("li", {
        key: 2,
        class: d({
            "login-btn": !0,
            "nav-scroll": !0,
            lagRegister: e.lag == "es-es"
        })
    }, [r(u, {
        to: "/login",
        style: {
            color: "#FFFFFF"
        }
    }, {
        default: g(() => [l(h(e.pageText.login), 1)]),
        _: 1
    })], 2))])])])], 2)) : (i(), s("nav", {
        key: 1,
        class: d({
            navbar: !0,
            "navbar-expand-md": !0,
            "navbar-dark": !0,
            bgwhite: e.navBg,
            "fixed-top": t.$route.meta.name === "index"
        })
    }, [o("div", Ot, [r(u, {
        to: e.loginJudge ? "/dashboard" : "/",
        class: "navbar-brand"
    }, {
        default: g(() => [o("img", {
            src: e.navBg ? e.loginImg_blue : e.loginImg_white,
            style: {
                width: "130px"
            },
            alt: "",
            class: "logo-img"
        }, null, 8, Mt)]),
        _: 1
    }, 8, ["to"])])], 2)), r(T, {
        setlang: e.selectedlang,
        onFunc: c.changeLogin
    }, null, 8, ["setlang", "onFunc"]), o("footer", Ht, [o("div", zt, [o("ul", null, [o("li", null, [o("div", Rt, [l(h(e.pageText.about) + " ", 1), Vt]), o("div", Gt, [o("p", null, [r(u, {
        target: "_blank",
        to: "/support"
    }, {
        default: g(() => [l(h(e.pageText.help), 1)]),
        _: 1
    })]), o("p", null, [r(u, {
        to: "/privacy"
    }, {
        default: g(() => [l(h(e.pageText.pp), 1)]),
        _: 1
    })]), o("p", null, [r(u, {
        to: "/terms"
    }, {
        default: g(() => [l(h(e.pageText.tos), 1)]),
        _: 1
    })]), o("p", null, [r(u, {
        to: "/affiliate"
    }, {
        default: g(() => [l(h(e.pageText.affiliate), 1)]),
        _: 1
    })])])]), o("li", null, [o("div", jt, [l(h(e.pageText.info) + " ", 1), Qt]), o("div", Wt, [o("p", null, [r(u, {
        to: "/testimonials"
    }, {
        default: g(() => [l(h(e.pageText.testimonials), 1)]),
        _: 1
    })]), o("p", null, [r(u, {
        to: "/calculator"
    }, {
        default: g(() => [l(h(e.pageText.calculator), 1)]),
        _: 1
    })]), o("p", null, [r(u, {
        to: "/leaderboard"
    }, {
        default: g(() => [Xt]),
        _: 1
    })]), o("p", null, [r(u, {
        to: "/forum"
    }, {
        default: g(() => [Yt]),
        _: 1
    })])])])]), o("div", Kt, [o("div", null, [o("div", Zt, h(e.pageText.community), 1), $t]), o("div", te, [o("div", {
        class: "coinapayu-footer-country-selected",
        onClick: a[0] || (a[0] = m => e.countryLock = !e.countryLock)
    }, [o("div", null, [o("p", ee, [o("img", {
        src: e.activeLang
    }, null, 8, ae)]), o("span", null, h(e.countryText), 1)]), oe]), e.countryLock ? (i(), s("ol", ie, [o("li", {
        onClick: a[1] || (a[1] = (...m) => c.langEng && c.langEng(...m))
    }, re), o("li", {
        onClick: a[2] || (a[2] = (...m) => c.langRu && c.langRu(...m))
    }, ge), o("li", {
        onClick: a[3] || (a[3] = (...m) => c.langEs && c.langEs(...m))
    }, pe)])) : n("", !0)]), o("div", null, [o("img", {
        src: c.isNight ? "/static/images/day_type.png" : "/static/images/night_type.png",
        style: {
            cursor: "pointer",
            "margin-right": "10px"
        },
        onClick: a[4] || (a[4] = (...m) => c.setNight && c.setNight(...m))
    }, null, 8, fe), r(u, {
        to: "/app_download"
    }, {
        default: g(() => [me]),
        _: 1
    })])])]), o("p", de, h(e.pageText.cp), 1)])])])
}
const Fe = v(W, [
    ["render", _e]
]);
export {
    Fe as
    default
};