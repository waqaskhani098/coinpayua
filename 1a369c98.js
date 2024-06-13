import {
    _ as t,
    o as a,
    c,
    l as o
} from "./5903dc4e.js";
const d = "/assets/svg/bitdeer_1-40d4a81e.svg",
    i = "/assets/svg/bitdeer_2-6b159eaf.svg",
    _ = "/assets/svg/alibaba_1-f494b1aa.svg",
    e = "/assets/svg/alibaba_2-8e1efa8b.svg",
    v = "/assets/svg/bybit_1-f9451c67.svg",
    g = "/assets/svg/bybit_2-6f957e4a.svg",
    r = "/assets/svg/etoro_1-5441375c.svg",
    l = "/assets/svg/etoro_2-49d30e47.svg",
    m = "/assets/svg/okx_1-6a70de2f.svg",
    n = "/assets/svg/okx_2-b29328b4.svg",
    p = "/assets/svg/tiktok_1-114b6deb.svg",
    b = "/assets/svg/tiktok_2-b8d134f8.svg",
    f = "/assets/svg/bitfufu_1-0eea450b.svg",
    u = "/assets/svg/bitfufu_2-0959c2bf.svg",
    h = "/assets/svg/hbomax_1-88c1f756.svg",
    x = "/assets/svg/hbomax_2-09ffac9b.svg",
    w = "/assets/svg/indoex_1-de75cad5.svg",
    k = "/assets/svg/indoex_2-5374fc99.svg",
    y = "/assets/svg/stormgain_1-b542fe35.svg",
    L = "/assets/svg/stormgain_2-e0b6f9b0.svg";
const B = {
        props: {
            text: {
                type: String
            }
        },
        data() {
            return {
                showLogo: !0
            }
        },
        created() {
            let s = this;
            $(window).resize(function() {
                $(window).width() < 600 ? s.showLogo = !1 : s.showLogo = !0
            })
        }
    },
    S = {
        class: "website-logo"
    },
    z = o('<p data-v-72875cd4>Our Advertisers</p><ul data-v-72875cd4><li data-v-72875cd4><img src="' + d + '" alt="" data-v-72875cd4><img src="' + i + '" alt="" data-v-72875cd4></li><li data-v-72875cd4><img src="' + _ + '" alt="" data-v-72875cd4><img src="' + e + '" alt="" data-v-72875cd4></li><li data-v-72875cd4><img src="' + v + '" alt="" data-v-72875cd4><img src="' + g + '" alt="" data-v-72875cd4></li><li data-v-72875cd4><img src="' + r + '" alt="" data-v-72875cd4><img src="' + l + '" alt="" data-v-72875cd4></li><li data-v-72875cd4><img src="' + m + '" alt="" data-v-72875cd4><img src="' + n + '" alt="" data-v-72875cd4></li><li data-v-72875cd4><img src="' + p + '" alt="" data-v-72875cd4><img src="' + b + '" alt="" data-v-72875cd4></li><li data-v-72875cd4><img src="' + f + '" alt="" data-v-72875cd4><img src="' + u + '" alt="" data-v-72875cd4></li><li data-v-72875cd4><img src="' + h + '" alt="" data-v-72875cd4><img src="' + x + '" alt="" data-v-72875cd4></li><li data-v-72875cd4><img src="' + w + '" alt="" data-v-72875cd4><img src="' + k + '" alt="" data-v-72875cd4></li><li data-v-72875cd4><img src="' + y + '" alt="" data-v-72875cd4><img src="' + L + '" alt="" data-v-72875cd4></li></ul>', 2),
    A = [z];

function E(s, I, N, O, V, j) {
    return a(), c("div", S, A)
}
const C = t(B, [
    ["render", E],
    ["__scopeId", "data-v-72875cd4"]
]);
export {
    C as l
};