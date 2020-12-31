/** @jsxRuntime classic */
/** @jsx mdx */
import { mdx } from '/web_modules/@mdx-js/preact.js';
export const meta = {
    title: "About",
    slug: "/about"
};
const MDXLayout = "wrapper";
export default function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
    }, props, {
        components: components,
        mdxType: "MDXLayout"
    }), mdx("h1", Object.assign({
    }, {
        "id": "about"
    }), mdx("a", Object.assign({
    }, {
        "className": "heading-link-anchor",
        "href": "#about",
        "parentName": "h1"
    }), mdx("heading-link-icon", Object.assign({
    }, {
        "className": "heading-link-icon",
        "parentName": "a"
    }))), `About`), mdx("p", null, `This site was incrementally generated, using the develop command!\nNo need to rerun the builder on each pass through`), mdx("p", null, `I haven't figured out how to make it hot reload yet though`), mdx("codeblock", Object.assign({
    }, {
        "className": "language-c",
        "codestring": "#include stdio.h\n\nint main() {\n  printf(\"Hello, world!\");\n  return 0\n}"
    }), `<pre class="prism-code language-c" style="color: #d6deeb; background-color: #011627; background-color: transparent;"><div class="token-line" style="color: #d6deeb;"><span class="token macro property directive-hash" style="color: rgb(128, 203, 196);">#</span><span class="token macro property directive keyword" style="color: rgb(127, 219, 202);">include</span><span class="token macro property" style="color: rgb(128, 203, 196);"> </span><span class="token macro property expression" style="color: rgb(128, 203, 196);">stdio</span><span class="token macro property expression punctuation" style="color: rgb(199, 146, 234);">.</span><span class="token macro property expression" style="color: rgb(128, 203, 196);">h</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain" style="display: inline-block;"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token keyword" style="color: rgb(127, 219, 202);">int</span><span class="token plain"> </span><span class="token function" style="color: rgb(130, 170, 255);">main</span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token function" style="color: rgb(130, 170, 255);">printf</span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token string" style="color: rgb(173, 219, 103);">&quot;Hello, world!&quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token keyword" style="color: rgb(127, 219, 202);">return</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">0</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span></div></pre>`));
};
MDXContent.isMDXComponent = true;
