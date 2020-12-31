/** @jsxRuntime classic */
/** @jsx mdx */
import { mdx } from '/web_modules/@mdx-js/preact.js';
export const meta = {
    title: "A Post",
    slug: "/b-post"
};
const MDXLayout = "wrapper";
export default function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
    }, props, {
        components: components,
        mdxType: "MDXLayout"
    }), mdx("h1", Object.assign({
    }, {
        "id": "b-post"
    }), mdx("a", Object.assign({
    }, {
        "className": "heading-link-anchor",
        "href": "#b-post",
        "parentName": "h1"
    }), mdx("heading-link-icon", Object.assign({
    }, {
        "className": "heading-link-icon",
        "parentName": "a"
    }))), `B Post`), mdx("p", null, `and some content`), mdx("codeblock", Object.assign({
    }, {
        "className": "language-js",
        "codestring": "const thing = {};"
    }), `<pre class="prism-code language-js" style="color: #d6deeb; background-color: #011627; background-color: transparent;"><div class="token-line" style="color: #d6deeb;"><span class="token keyword" style="color: rgb(127, 219, 202);">const</span><span class="token plain"> thing </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span></div></pre>`), mdx("h1", null, mdx("p", null, `test`)), mdx("a", {
        href: "/"
    }, mdx("p", null, `test link`)));
};
MDXContent.isMDXComponent = true;
