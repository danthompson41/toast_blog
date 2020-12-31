/** @jsxRuntime classic */
/** @jsx mdx */
import { mdx } from '/web_modules/@mdx-js/preact.js';
export const meta = {
    title: "C Post",
    slug: "/c-post"
};
const MDXLayout = "wrapper";
export default function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
    }, props, {
        components: components,
        mdxType: "MDXLayout"
    }), mdx("h1", Object.assign({
    }, {
        "id": "c-post"
    }), mdx("a", Object.assign({
    }, {
        "className": "heading-link-anchor",
        "href": "#c-post",
        "parentName": "h1"
    }), mdx("heading-link-icon", Object.assign({
    }, {
        "className": "heading-link-icon",
        "parentName": "a"
    }))), `C Post`), mdx("p", null, `and some content`), mdx("ul", null, mdx("li", Object.assign({
    }, {
        "parentName": "ul"
    }), `Stuff!`), mdx("li", Object.assign({
    }, {
        "parentName": "ul"
    }), `Whoah`)), mdx("p", null, `amazing`), mdx("codeblock", Object.assign({
    }, {
        "className": "language-js",
        "codestring": "const thing = {};\nconsole.log(\"code\")\nconsole.log(\"code!)"
    }), `<pre class="prism-code language-js" style="color: #d6deeb; background-color: #011627; background-color: transparent;"><div class="token-line" style="color: #d6deeb;"><span class="token keyword" style="color: rgb(127, 219, 202);">const</span><span class="token plain"> thing </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token console class-name" style="color: rgb(255, 203, 139);">console</span><span class="token punctuation" style="color: rgb(199, 146, 234);">.</span><span class="token method function property-access" style="color: rgb(130, 170, 255);">log</span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token string" style="color: rgb(173, 219, 103);">&quot;code&quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token console class-name" style="color: rgb(255, 203, 139);">console</span><span class="token punctuation" style="color: rgb(199, 146, 234);">.</span><span class="token method function property-access" style="color: rgb(130, 170, 255);">log</span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token plain">&quot;code</span><span class="token operator" style="color: rgb(127, 219, 202);">!</span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span></div></pre>`));
};
MDXContent.isMDXComponent = true;
