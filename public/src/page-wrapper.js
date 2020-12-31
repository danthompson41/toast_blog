import { h } from "/web_modules/preact.js";
import { Helmet } from "/web_modules/react-helmet.js";
import { MDXProvider } from "/web_modules/@mdx-js/preact.js";
const components = {
    codeblock: (props)=>h("div", {
            class: "bg-gray-800",
            dangerouslySetInnerHTML: {
                __html: props.children
            }
        })
};
export default function PageWrapper(props) {
    return h(MDXProvider, {
        components: components
    }, h("div", {
        class: "bg-gray-900 text-gray-300 min-h-screen p-10"
    }, h("a", {
        class: "text-green-700 text-xl",
        href: "/"
    }, "Home"), h(Helmet, null, h("link", {
        rel: "stylesheet",
        href: "/styles.css"
    })), props.children));
};
