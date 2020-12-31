import { h } from "/web_modules/preact.js";
export default function Welcome(props) {
    return h("h1", null, "Hello, ", props.name);
};
