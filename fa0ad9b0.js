import {
    _ as a,
    o as d,
    c as n,
    a as e,
    p as r,
    f as A
} from "./5903dc4e.js";
const _ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVQ4jZ3RsXHCMBSA4Q+FEVylD7hIkxEgA2QBLm3YKEcdejbAHUPQhwVYII19p7yTHF1eK//fyU+Lvu+f8Il33LTNI76wTzjgFefxoCUesMUhYYcr1g3IFK/GZpfGa28akBhvcEvjYUSGgBRjSNlHObLKkGoMy3DNCRkyRC0uASVELY6/8K8pAfGf405mgdLCSostArVt117nFzD7VHNIaohzZBuRhGNDPM13QI4PXddd8Iy3P+Jp7jjhBR8/3JlKru/C53IAAAAASUVORK5CYII=";
const l = {
        methods: {
            hideTc: function() {
                this.$emit("hideTc", !0)
            }
        }
    },
    s = o => (r("data-v-0ad3911b"), o = o(), A(), o),
    h = {
        class: "tc-cover"
    },
    p = {
        class: "bgwhite auto-auto disclaimer-tc fz-16"
    },
    u = s(() => e("h6", null, "Disclaimer", -1)),
    f = s(() => e("div", {
        class: "word fz-16"
    }, " The information provided on Bitcionbeet.com does not constitute financial and investment advice. You are using information available here AT YOUR OWN RISK. ", -1)),
    m = s(() => e("div", {
        class: "word fz-16"
    }, " Do conduct your own due diligence and consult your financial advisory before making decisions. ", -1));

function v(o, t, I, g, B, c) {
    return d(), n("div", h, [e("div", p, [e("img", {
        src: _,
        class: "close-btn-static",
        onClick: t[0] || (t[0] = (...i) => c.hideTc && c.hideTc(...i))
    }), u, f, m])])
}
const y = a(l, [
    ["render", v],
    ["__scopeId", "data-v-0ad3911b"]
]);
export {
    y as d
};