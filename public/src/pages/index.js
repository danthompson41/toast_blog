import { h } from "/web_modules/preact.js";
export default ((props)=>h("div", {
        class: "text-gray-600 min-h-screen p-10"
    }, h("img", {
        class: "mr-6",
        src: "https://placekitten.com/g/200/200"
    }), h("div", {
        class: "flex flex-col justify-center"
    }, h("h4", {
        class: "mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs"
    }, "Playlist"), h("h1", {
        class: "mt-0 mb-2 text-white text-4xl"
    }, "A BLOG Radio"), h("p", {
        class: "text-gray-600 mb-2 text-sm"
    }, "With toast as the dev environment"), h("p", {
        class: "text-gray-600 text-sm"
    }, "Created by ", h("a", {
        href: "https://github.com/danthompson41"
    }, "Dan Thompson"), " - 50 songs, 3 hr 2 min")), h("div", {
        class: "mt-6 flex justify-between"
    }, h("div", {
        class: "flex"
    }, h("button", {
        class: "mr-2 bg-green-500 text-green-100 block py-2 px-8 rounded-full"
    }, "Play"), h("button", {
        class: "mr-2 border border-white block p-2 rounded-full"
    }, h("img", {
        src: "https://image.flaticon.com/icons/svg/2485/2485986.svg",
        height: "25",
        width: "25"
    })), h("button", {
        class: "mr-2 border border-white block p-2 rounded-full"
    }, "...")), h("div", {
        class: "text-gray-600 text-sm tracking-widest text-right"
    }, h("h5", {
        class: "mb-1"
    }, "Followers"), h("p", null, "5,055"))), h("div", {
        class: "flex border-b border-gray-800 hover:bg-gray-800"
    }, h("div", {
        class: "p-3 w-8 flex-shrink-0"
    }, "▶️"), h("div", {
        class: "p-3 w-8 flex-shrink-0"
    }, "❤️"), h("a", {
        class: "p-3 w-full",
        href: "about"
    }, "About"), h("div", {
        class: "p-3 w-full"
    }, "Dan Thompson"), h("div", {
        class: "p-3 w-full"
    }, "About"), h("div", {
        class: "p-3 w-12 flex-shrink-0 text-right"
    }, "5:35")), h("div", {
        class: "flex border-b border-gray-800 hover:bg-gray-800"
    }, h("div", {
        class: "p-3 w-8 flex-shrink-0"
    }, "▶️"), h("div", {
        class: "p-3 w-8 flex-shrink-0"
    }, "❤️"), h("a", {
        class: "p-3 w-full",
        href: "a-post"
    }, "A post"), h("div", {
        class: "p-3 w-full"
    }, "Dan Thompson"), h("div", {
        class: "p-3 w-full"
    }, "Coding"), h("div", {
        class: "p-3 w-12 flex-shrink-0 text-right"
    }, "1:26")), h("div", {
        class: "flex border-b border-gray-800 hover:bg-gray-800"
    }, h("div", {
        class: "p-3 w-8 flex-shrink-0"
    }, "▶️"), h("div", {
        class: "p-3 w-8 flex-shrink-0"
    }, "❤️"), h("a", {
        class: "p-3 w-full",
        href: "b-post"
    }, "B post"), h("div", {
        class: "p-3 w-full"
    }, "Dan Thompson"), h("div", {
        class: "p-3 w-full"
    }, "Coding"), h("div", {
        class: "p-3 w-12 flex-shrink-0 text-right"
    }, "7:23")))
);
