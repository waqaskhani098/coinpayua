import {
    _ as T,
    k as b,
    r as f,
    o as h,
    c as m,
    a as t,
    b as u,
    w as x,
    t as o,
    F as _,
    i as A,
    l as w,
    h as y,
    p as k,
    f as I,
    g as E
} from "./5903dc4e.js";
import {
    l as R
} from "./0f33ead1.js";
import {
    l as B
} from "./1a369c98.js";
import {
    _ as g
} from "./d69c227d.js";
const U = "/static/img/agvertise_img.png",
    C = "/static/img/coin/payeer.svg",
    D = "/static/img/coin/bitcoin.svg",
    L = "/static/images/index/amazon_icon.svg",
    q = "/static/img/coin/litecoin.svg",
    Q = "/static/img/coin/faucet.svg",
    O = "/static/img/coin/dogecoin.svg",
    S = "/static/img/coin/walmart.svg",
    V = "/static/images/index/visa.svg",
    F = "/static/img/coin/eth.svg",
    j = "/static/img/coin/goolge_play.svg",
    N = "/static/img/map.png",
    P = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAjCAYAAAAnvgICAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEmklEQVRogcXZW4hVdRTH8c+MU5malUV0Q8pwIM1QouxBMA1TqodK6MEKJAzMQLCbD1FpJSRWD1EPRkUmZU5kvthFqbRIoxLtMhgjWJhoeAm80WV07GHtw5w5s/c5e+850heG2Zfz/6219v5f1vrvlvY1XXJwI2bgOpyJXfgCa/FvHoEmcybuwBSMSnzYik/wTaPGLQ2CvgCvJwbS6MKT6MjrbRO4G8+iPeP+WszBoSyB1jriF2Oz7IAlhldjbp3fVLgGr+IHHENP4thmLMSFOTTmJvayAib83Sz8T6Xem16PaTkcqXADvsu49wwexdl12v+Gefg44/71+LaAPxtwS9qNrDd9j2IBE10ujdfEEKgXMFyBj3BrQf0spok4+pEV9OyCBipGRtdceyD5K8JKXFZzbbTiL4GMONKCPkPMiEVpxYSq8xF4roTOCLxUc22C+vNPFqNEPH1IEzoHQ0sYIByuMBMXldSZiSszdIswVMTTh7Sgj+J4SSNHq44nl9SAQWLiStMtwvG0tmlBd2NbCQOnsKXqPM8SVI/Lq463JPpF2Sbi6UPWOHmlhIEPRaZW4awSGtUMqjrelegXJTWOrKA3Yl1BA4trzg8WbF/L7gb6jVgn4uhHvRlxjnzdvBuz8GPN9U15PMvgL32HikR/lpTumsI24X8q9YL+AxOxVPZEsgHjsCrl3ip18t8GvK//m65ojkvspnFU+DtR+J9Ko4KjwijchrFiGdiLz/Fpg3YL8XweA1Wcwhj80uB30zEVl4pZulN06V31GpE/6IGwEvcW+P0cvHGafEG5LKco9+FxjevunbjTaQ4Y2mrOR4vK5GoMln9tbMFJ0e036j+JLRPV0zzcLsq+NjFhdeI9EezhFO3JuEl040EFffobO0TFuLNyozroxXgYw3KKVnMKR7BdTF47sa/GwZ9F0AtxVWJnD34XDyzN6UvExDUF4zE8uV6UYyKff5reMb1M1Ltl6BEz7Vti/O7GiZJaabRhpBgms5PjssPyBTzW0r6ma7rYWypDj3irS7BG+Zw9D0NxF54Qw7Bs4DPasGAAjuwX3aYD/yTXxovl7Vqcm1wrkje3iIe5F9/jAxwQD7RDbEYsVmc7qAELWtrXdB0UG4BF6ca7mC/Gc5tYkx/EkJIOpbFb7Ly8nZwPx8siO+tXK+fgUKvyDu7HOyJg4i08MgC9LEZiBe5Pzo8kdveX1BvSKrpOUU6KpWZrcj5frLGnk+Vi6Ejsdkqf9RtxoFW5wuCkWJ4Oiw8Bi0poFKVNdHOJ3e3KBb2pVSToRemuMjoT55fQKMPU5H/loeepuGpZ2iq6yeyCDY/qzXDGlDBclvOqjncqvo00G52VtW4FJokvA3kSiwMi4/o/2SfffHRCxDVJxNknDf1aVEM3i9RvmOwHsEPvzkiX7A36ZlP9Zg/iTVEnpNEm0s+f8Bl+rdxoRmk5WWR0gwcqlIP1oo4eEM0oLTfhxSbo5GFJM0SaVU8vwldN0sriKXzZDKFmBX1CjOvlTdKr5k88pPgHvExqNxEGwjHx/bhDfGwbq3fDv6eATqtYh/eIb9mrVU1CzeA/w44D4Up946UAAAAASUVORK5CYII=",
    W = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAhCAYAAADK6cvnAAACwklEQVRIS73WwUsUcRQH8O93XaPCiDIiqNs6O5uGdAk6FEoQQVawq6xBQYeSUCKCyg5hh/IgGEUEHQQ7WIfc8Ld5qKRD/gNdOog7vxULMy9FGh08uDsvZmzD0t2dWd39HXfee5/fm9l58yM8rv1q6kCW2U4Ij0AQArEVwDwBC+CoVNuD+rT5vVg5FgtwrhtJfZeCGwC2FIj/DEqXjppvC9UsCoZVegCQDi8bc2NsadFt5pt88QXBsLI6AA54xpYDfyAjjTpufl0rLy/YkJjYuRSsngSw2ycIQBI6Zrb7AkvsLmdkGbQN60zk0/9o3g4NpZ8TOOe/u+UMku1W1Eh4B5N6jIITpYKAXNcx84F3UOlxAs2lggJ0p2Phfj/gSwJtpYIQOatbzWHPYDhpXYHwcYngYiZTFZmOh2Y8gxE1WWujygJQ6x/lkI4ZF3y9Fk6wqdK3BNLnExTYUq/bzJRv0EkIK+sZwPNeUZKXrKgxWNJoyyUZSt8k0AtgU75CAqRJ6dZR81WhzRUd3rlk5/OUEbuLxCkAewAECSwKMAHIi0wmODgdD/0sdic8g7lC5mhqm20HQhSpCdCeTS1FviDObDEod9036LXwup7hepGV+as6NJL6IAQthDQKud0dxCLiFRWSFNoQe07ID5LhyFTc+LbqljaPjwfnFvb1UaRT4J5XNmSRmBGRHh0zh9zN56qGlVYAohuirFGE4EUrZjx1QUPpqwQelQv7UzcjxCHWjaQPByjOoWdHmUGnvKKpdL/APQJWYi0wnNSvIThZCc3901QcNJL6IQXXKtThL9apdFMAMgZgc7lRAu/c18JUuleA2+UGRdDkgu6Umd/7HsDRcqEU3LFaw/f+Tpr6xERNNlh9X4DLG4z+gLBHtxpP/hltOcRUqWMCHqewAcQu53cBba+bICQggPN9nAX4kcHs8Moj/28p7vpE43WgJQAAAABJRU5ErkJggg==",
    Y = "data:image/png;base64,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",
    J = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAYAAAA+stv/AAACSklEQVRYR+1Wv2tTURg9572kGpO2IHYpimLzo+iqizgXkVYw8TcIShGFopTq4KboJrgKDvUPCDQqdVBcRDfBwanNa+OgEKRIpbVJa827R14JxdhUXpInguRuF77vnPOd+93vXiKg1TtZ3BZdLQ/TMhch7ANRNLByEu4V0vG5zWjYKv/O7KdINLRyTdAFAP2/4kmERb2PhRcPvRs6UK7H1ZKAxIRzmdRVgPv/WIh0w8mk7gcmIJnLn4E4BuKgHwdltOCa0O4Pp/oWfo/37UDvZH5H16oZcGGP0ifxOpkAhDjuHItfAunt1pcvAT3ZuVh3+NvdECrnjfgZQAnAdz/VV2PCEIgODTpDqS8NC2iAqOHQNQf6H0/tcWUfIWQLdDegSEbAMigD0WqYRRJIEoiQCHv5FkIvp9N9DuNPZoYsaRxCT8PArSV8JXmFyZyzCKCzNayms5c9ATVd2TRUk4ltAW0H/lMHhAphxg2s16SiRtba8NnwEFkKB+6AwEW6ZtA5mXrj52YGLgDiiJNJPEhMOOcsYlTgW7MV12ePJuo+XoELMOKuckd0PvZjaR7AFs8FAw7PphOP6h5D0JPQNnYy3LlUXClFPgLY7pGSPJ0/nsj+fQHeUKduOenUnWSucBhyRwS8mskkH27WD4EfAagSZZ/Ip+PP/00TVlldmqckpi3XNoLsumKIruAdqDIRBASo9gu4cRYE3YR+bK/5E7YFtB1oO5DKzbwQNNDo9Qkofop7s4Vum+5t2jgLIQaiEhD4ZjDeVHQFPJN48yev1vvx4qXHVwAAAABJRU5ErkJggg==";
const K = {
        name: "index",
        data() {
            return {
                bannerStr: "",
                starMsg: {
                    comment_count: 0,
                    avg_rating: 5
                },
                lag: "en-us",
                bgUrl: "/static/img/index_bg.jpg",
                indexShareLock: !1,
                byType: 0,
                mapIndex: 0,
                language: R.setlang(),
                selectedlang: this.$props.setlang,
                lang: b.getlang(),
                time: null,
                map_show: [],
                comment: [],
                total_users: 0,
                active_users_weekly: 0,
                advertisement_impression_weekly: 0,
                time_of_successful_payments: 0,
                topAndLeft: [{
                    left: "15px",
                    top: "10px"
                }, {
                    left: "120px",
                    top: "200px"
                }, {
                    left: "500px",
                    top: "50px"
                }, {
                    left: "30px",
                    top: "70px"
                }, {
                    left: "800px",
                    top: "20px"
                }],
                topAndLeftPad: [{
                    left: "10px",
                    top: "10px"
                }, {
                    left: "80px",
                    top: "200px"
                }, {
                    left: "400px",
                    top: "50px"
                }],
                topAndLeftMP: [{
                    left: "40px",
                    top: "10px"
                }, {
                    left: "120px",
                    top: "200px"
                }],
                pageText: {
                    heroMsg: "",
                    adsTitle: "",
                    adsMsg: "",
                    adsBtn: "",
                    userMsg: "",
                    totalUser: "",
                    clickMsg: "",
                    payMsg: "",
                    joinFree: "",
                    heroMsgOne: "",
                    heroMsgTwo: "",
                    heroMsgThree: "",
                    mapMsg: ""
                },
                faqIndex: -1
            }
        },
        metaInfo: {
            title: "Coinpayu: Earn Online in an Easy Way",
            meta: [{
                name: "description",
                content: "Get paid for browsing websites, playing games and taking surveys."
            }]
        },
        props: {
            setlang: {
                type: Object,
                required: !0
            }
        },
        components: {
            logo: B
        },
        watch: {
            setlang: function(e, a) {
                var i = e;
                this.lag = localStorage.getItem("coinPayU-lang"), this.pageText.heroMsg = i.index.heroMsg, this.pageText.adsTitle = i.index.adsTitle, this.pageText.adsMsg = i.index.adsMsg, this.pageText.adsBtn = i.index.adsBtn, this.pageText.userMsg = i.index.userMsg, this.pageText.totalUser = i.index.totalUser, this.pageText.clickMsg = i.index.clickMsg, this.pageText.payMsg = i.index.payMsg, this.pageText.joinFree = i.index.joinFree, this.pageText.heroMsgOne = i.index.heroMsgOne, this.pageText.heroMsgTwo = i.index.heroMsgTwo, this.pageText.heroMsgThree = i.index.heroMsgThree, this.pageText.mapMsg = i.index.mapMsg
            }
        },
        created: function() {
            Math.round(Math.random()) * 10 > 5 ? this.indexShareLock = !0 : this.indexShareLock = !1;
            var e = this.setlang;
            this.lag = localStorage.getItem("coinPayU-lang"), this.pageText.heroMsg = e.index.heroMsg, this.pageText.adsTitle = e.index.adsTitle, this.pageText.adsMsg = e.index.adsMsg, this.pageText.adsBtn = e.index.adsBtn, this.pageText.userMsg = e.index.userMsg, this.pageText.totalUser = e.index.totalUser, this.pageText.clickMsg = e.index.clickMsg, this.pageText.payMsg = e.index.payMsg, this.pageText.joinFree = e.index.joinFree, this.pageText.heroMsgOne = e.index.heroMsgOne, this.pageText.heroMsgTwo = e.index.heroMsgTwo, this.pageText.heroMsgThree = e.index.heroMsgThree, this.pageText.mapMsg = e.index.mapMsg, this.axios({
                method: "POST",
                url: "/user/homedata?lang=" + localStorage.getItem("coinPayU-lang"),
                headers: {
                    cointoken: "36d4635ae108fb89322cd4bee9aef7999eca4b17"
                }
            }).then(a => {
                this.total_users = a.data.data.total_users, this.active_users_weekly = a.data.data.active_users_weekly, this.advertisement_impression_weekly = a.data.data.advertisement_impression_weekly, this.time_of_successful_payments = a.data.data.time_of_successful_payments, this.comment = a.data.data.comment, this.starMsg.avg_rating = a.data.data.avg_rating, this.starMsg.comment_count = a.data.data.comment_count
            })
        },
        mounted: function() {
            let e = this;
            document.body.clientWidth <= 576 ? e.bgUrl = "/static/img/bg_ph.jpg" : e.bgUrl = "/static/img/index_bg.jpg", window.onresize = function() {
                document.body.clientWidth <= 576 ? e.bgUrl = "/static/img/bg_ph.jpg" : e.bgUrl = "/static/img/index_bg.jpg"
            }, this.time = setInterval(() => {
                $(".heroMsg i").animate({
                    width: 0
                }, 1e3, "linear", function() {
                    e.byType = ++e.byType % 3, $(".heroMsg i").animate({
                        width: "100%"
                    }, 1e3, "linear")
                }), $(".mapMsg").eq(this.mapIndex).hide(), document.body.clientWidth <= 580 ? (this.mapIndex = ++this.mapIndex % 2, $(".mapMsg").eq(this.mapIndex).css({
                    top: this.topAndLeftMP[this.mapIndex].top,
                    left: this.topAndLeftMP[this.mapIndex].left
                }).fadeIn(1e3)) : document.body.clientWidth <= 960 ? (this.mapIndex = ++this.mapIndex % 3, $(".mapMsg").eq(this.mapIndex).css({
                    top: this.topAndLeftPad[this.mapIndex].top,
                    left: this.topAndLeftPad[this.mapIndex].left
                }).fadeIn(1e3)) : (this.mapIndex = ++this.mapIndex % 5, $(".mapMsg").eq(this.mapIndex).css({
                    top: this.topAndLeft[this.mapIndex].top,
                    left: this.topAndLeft[this.mapIndex].left
                }).fadeIn(1e3))
            }, 5e3);
            var a = $(window),
                i = a.height() * 1.1;
            a.on("scroll", v);

            function v() {
                var p = a.scrollTop();
                $(".revealOnScroll:not(.animated)").each(function() {
                    var n = $(this),
                        l = n.offset().top;
                    p + i > l && (n.data("timeout") ? window.setTimeout(function() {
                        n.addClass("animated " + n.data("animation"))
                    }, parseInt(n.data("timeout"), 10)) : n.addClass("animated " + n.data("animation")))
                })
            }

            function s(p) {
                p.parents(".features-info").find(".features-tc").fadeToggle(100)
            }
            var d = $(window).width();
            d > 991 ? $(".features-info img").hover(function() {
                s($(this))
            }) : $(".features-info>img").on("click", function() {
                s($(this))
            });
            let r = this;
            $(".coinpayu-index-faq-title").on("click", function() {
                $(this).parent().siblings().find(".coinpayu-index-faq-content").slideUp(200).siblings().find("img").css({
                    transform: "rotateZ(0deg)"
                }), r.faqIndex === $(this).parent().index() ? (r.faqIndex = -1, $(this).find("img").css({
                    transform: "rotateZ(0deg)"
                })) : (r.faqIndex = $(this).parent().index(), $(this).find("img").css({
                    transform: "rotateZ(-45deg)"
                })), $(this).siblings().slideToggle(200)
            })
        },
        methods: {
            getRandomInt: function(e, a) {
                return e = Math.ceil(e), a = Math.floor(a), Math.floor(Math.random() * (a - e + 1)) + e
            },
            toTestimonials: function() {
                this.$router.push("/testimonials")
            },
            randomNum: function(e, a) {
                switch (arguments.length) {
                    case 1:
                        return parseInt(Math.random() * e + 1, 10);
                    case 2:
                        return parseInt(Math.random() * (a - e + 1) + e, 10);
                    default:
                        return 0
                }
            }
        },
        destroyed: function() {
            clearInterval(this.time)
        }
    },
    c = e => (k("data-v-c939e819"), e = e(), I(), e),
    H = {
        class: "map-main"
    },
    G = ["src"],
    z = {
        class: "index_bg_title"
    },
    X = c(() => t("p", null, [t("span", null, "Get paid"), E(" for browsing websites, playing games and taking surveys ")], -1)),
    Z = {
        class: "index-intro fm-pingfang"
    },
    tt = {
        class: "clearfix",
        style: {
            margin: "auto",
            "max-width": "1400px"
        }
    },
    et = c(() => t("div", {
        class: "intro-detail col-xs-12 col-sm-4 col-md-6 f-left revealOnScroll",
        "data-animation": "index-info-left"
    }, [t("img", {
        src: U,
        alt: "",
        class: "pintu"
    })], -1)),
    st = {
        class: "intro-detail col-xs-12 col-sm-8 col-md-6 f-right"
    },
    at = {
        class: "for-two revealOnScroll",
        "data-animation": "index-info-right-top"
    },
    it = {
        class: "for-title"
    },
    ot = {
        class: "for-content"
    },
    nt = {
        class: "revealOnScroll",
        "data-animation": "index-info-right-bottom"
    },
    ct = {
        class: "advertised-platform"
    },
    lt = w('<section class="be-rewarded-via" data-v-c939e819><h2 data-v-c939e819>Be rewarded via</h2><ul data-v-c939e819><li data-v-c939e819><img src="' + C + '" data-v-c939e819></li><li data-v-c939e819><img src="' + D + '" data-v-c939e819></li><li data-v-c939e819><img src="' + L + '" data-v-c939e819></li><li data-v-c939e819><img src="' + q + '" data-v-c939e819></li><li data-v-c939e819><img src="' + Q + '" data-v-c939e819></li><li data-v-c939e819><img src="' + O + '" data-v-c939e819></li><li data-v-c939e819><img src="' + S + '" alt="" data-v-c939e819></li><li data-v-c939e819><img src="' + V + '" data-v-c939e819></li><li data-v-c939e819><img src="' + F + '" data-v-c939e819></li><li data-v-c939e819><img src="' + j + '" alt="" data-v-c939e819></li></ul></section>', 1),
    dt = {
        class: "index_contry"
    },
    rt = {
        style: {
            color: "#545454"
        },
        class: "index_contry_title"
    },
    gt = {
        class: "index_contry_star"
    },
    pt = ["src"],
    ht = ["src"],
    mt = {
        class: "index_contry_div"
    },
    ut = c(() => t("img", {
        src: N,
        alt: ""
    }, null, -1)),
    vt = c(() => t("i", null, null, -1)),
    ft = c(() => t("span", null, null, -1)),
    xt = w('<section data-v-c939e819><div class="coinpayu-index-faq" data-v-c939e819><h3 data-v-c939e819>Frequently Asked Questions</h3><ul data-v-c939e819><li data-v-c939e819><div class="coinpayu-index-faq-title" data-v-c939e819><p data-v-c939e819>What\u2019s the concept behind Coinpayu?</p><img src="' + g + '" alt="" data-v-c939e819></div><div class="coinpayu-index-faq-content collapse" data-v-c939e819><p data-v-c939e819>Coinpayu is built to help ordinary people to earn online in an easy way, simply by browsing websites, playing games, taking surveys or testing apps.</p></div></li><li data-v-c939e819><div class="coinpayu-index-faq-title" data-v-c939e819><p data-v-c939e819>How much money can I earn here?</p><img src="' + g + '" alt="" data-v-c939e819></div><div class="coinpayu-index-faq-content collapse" data-v-c939e819><p data-v-c939e819>It is easily possible to earn more than $50 to $500+ monthly. You can check out the\xA0<a href="https://www.coinpayu.com/leaderboard" target="_blank" data-v-c939e819>Leaderboard</a>\xA0to see how much the most active Coinpayu users earn.</p></div></li><li data-v-c939e819><div class="coinpayu-index-faq-title" data-v-c939e819><p data-v-c939e819>How long does it take to cash out your money?</p><img src="' + g + '" alt="" data-v-c939e819></div><div class="coinpayu-index-faq-content collapse" data-v-c939e819><p data-v-c939e819>Within 48 business hours.</p></div></li><li data-v-c939e819><div class="coinpayu-index-faq-title" data-v-c939e819><p data-v-c939e819>How is Coinpayu able to pay users?</p><img src="' + g + '" alt="" data-v-c939e819></div><div class="coinpayu-index-faq-content collapse" data-v-c939e819><p data-v-c939e819>Advertisers want to acquire new users and expand their brand awareness for their products or services. They pay Coinpayu advertising fees to create various campaigns, and we share 60%~90% revenues to our users.</p></div></li><li data-v-c939e819><div class="coinpayu-index-faq-title" data-v-c939e819><p data-v-c939e819>What is anti-bot verification?</p><img src="' + g + '" alt="" data-v-c939e819></div><div class="coinpayu-index-faq-content collapse" data-v-c939e819><p data-v-c939e819>At present more than 50% of traffic at internet is generated by bot. Anti-bot verification is a security step to combat bot traffic and ensure that it is a real and unique user using our platform. It is an easy procedure takes ~1 minutes, no government IDs required or images stored.This procedure is processed by third party service provider <a href="https://www.verisoul.ai/" target="_blank" data-v-c939e819>Verisoul</a>. <br data-v-c939e819><br data-v-c939e819> Anti-bot verification happens only when we consider it is necessary or our system detects the following potential risks including but not limited to suspicious multiple accounts, proxy/vpn ip usage, suspicious automation/bot behaviors. We implement this to allow our advertisers to deliver best offers for most valued users.</p></div></li><li data-v-c939e819><div class="coinpayu-index-faq-title" data-v-c939e819><p data-v-c939e819>Is your advertising effect good?</p><img src="' + g + '" alt="" data-v-c939e819></div><div class="coinpayu-index-faq-content collapse" data-v-c939e819><p data-v-c939e819>Yes! <br data-v-c939e819>We have realized that to provide high quality traffic to the advertisers is the key to success. So we have no tolerance to fake traffic. High percentage of our revenue is invested to develop our own algorithms to combat fake traffic, and we also work with various third parties together to strengthen the technology of this.</p></div></li></ul></div></section>', 1),
    _t = {
        class: "pc_msg row"
    },
    At = {
        class: "col-sm-12 col-md-3"
    },
    yt = c(() => t("img", {
        src: P,
        alt: ""
    }, null, -1)),
    wt = {
        class: "col-sm-12 col-md-3"
    },
    Mt = c(() => t("img", {
        src: W,
        alt: ""
    }, null, -1)),
    Tt = {
        class: "col-sm-12 col-md-3"
    },
    bt = c(() => t("img", {
        src: Y,
        alt: ""
    }, null, -1)),
    kt = {
        class: "col-sm-12 col-md-3"
    },
    It = c(() => t("img", {
        src: J,
        alt: ""
    }, null, -1)),
    Et = c(() => t("img", {
        src: "https://forum.coinpayu.com/assets/img/avatar.png",
        alt: "",
        style: {
            display: "none"
        }
    }, null, -1));

function Rt(e, a, i, v, s, d) {
    const r = f("router-link"),
        p = f("logo");
    return h(), m("div", null, [t("main", H, [t("img", {
        src: s.bgUrl,
        class: "index_bg"
    }, null, 8, G), t("div", z, [X, u(r, {
        to: "/register"
    }, {
        default: x(() => [t("button", {
            class: y({
                lagBtn: s.lag == "ru-ru"
            })
        }, o(s.pageText.joinFree), 3)]),
        _: 1
    })])]), t("section", Z, [t("div", tt, [et, t("div", st, [t("div", at, [t("div", it, o(s.pageText.adsTitle), 1), t("div", ot, o(s.pageText.adsMsg), 1)]), t("div", nt, [u(r, {
        to: "/advertise"
    }, {
        default: x(() => [t("button", {
            class: y({
                "for-btn": !0,
                "for-btn-ru": s.lag == "ru-ru"
            })
        }, o(s.pageText.adsBtn), 3)]),
        _: 1
    })])])]), t("div", ct, [u(p)])]), lt, t("section", null, [t("div", dt, [t("p", rt, o(s.pageText.mapMsg), 1), t("div", gt, [t("div", null, [(h(), m(_, null, A(5, (n, l) => t("p", {
        key: l
    }, [t("img", {
        src: s.starMsg.avg_rating - l - 1 > -1 ? "/static/images/star_left.png" : "/static/images/star_left_1.png",
        alt: ""
    }, null, 8, pt), t("img", {
        src: s.starMsg.avg_rating - l - 1 >= 0 ? "/static/images/star_right.png" : "/static/images/star_right_1.png",
        alt: ""
    }, null, 8, ht)])), 64))]), t("p", {
        style: {
            cursor: "pointer"
        },
        class: "index_contry_star_night",
        onClick: a[0] || (a[0] = (...n) => d.toTestimonials && d.toTestimonials(...n))
    }, "score: " + o(s.starMsg.avg_rating.toFixed(1)) + " | " + o(s.starMsg.comment_count) + " reviews", 1)]), t("div", mt, [ut, t("ul", null, [(h(!0), m(_, null, A(s.comment, (n, l) => (h(), m("li", {
        key: l,
        class: "mapMsg",
        onClick: a[1] || (a[1] = (...M) => d.toTestimonials && d.toTestimonials(...M))
    }, [t("div", null, [vt, t("p", null, o(n.content), 1)]), ft]))), 128))])])])]), xt, t("section", null, [t("ul", _t, [t("li", At, [yt, t("p", null, o(s.total_users), 1), t("span", null, o(s.pageText.totalUser), 1)]), t("li", wt, [Mt, t("p", null, o(s.active_users_weekly), 1), t("span", null, o(s.pageText.userMsg), 1)]), t("li", Tt, [bt, t("p", null, o(s.advertisement_impression_weekly), 1), t("span", null, o(s.pageText.clickMsg), 1)]), t("li", kt, [It, t("p", null, o(s.time_of_successful_payments), 1), t("span", null, o(s.pageText.payMsg), 1)])]), Et])])
}
const Lt = T(K, [
    ["render", Rt],
    ["__scopeId", "data-v-c939e819"]
]);
export {
    Lt as
    default
};