import { h } from "preact";

export default (props) => (
    <div class="text-gray-600 min-h-screen p-10">
        <img class="mr-6" src="https://placekitten.com/g/200/200" />
        <div class="flex flex-col justify-center">
            <h4 class="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs">Playlist</h4>
            <h1 class="mt-0 mb-2 text-white text-4xl">A BLOG Radio</h1>
            <p class="text-gray-600 mb-2 text-sm">With toast as the dev environment</p>
            <p class="text-gray-600 text-sm">Created by <a href="https://github.com/danthompson41">Dan Thompson</a> - 50 songs, 3 hr 2 min</p>
        </div>
        <div class="mt-6 flex justify-between">
            <div class="flex">
                <button class="mr-2 bg-green-500 text-green-100 block py-2 px-8 rounded-full">Play</button>
                <button class="mr-2 border border-white block p-2 rounded-full"><img src="https://image.flaticon.com/icons/svg/2485/2485986.svg" height="25" width="25" /></button>
                <button class="mr-2 border border-white block p-2 rounded-full">...</button>
            </div>
            <div class="text-gray-600 text-sm tracking-widest text-right">
                <h5 class="mb-1">Followers</h5>
                <p>5,055</p>
            </div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
            <div class="p-3 w-8 flex-shrink-0">▶️</div>
            <div class="p-3 w-8 flex-shrink-0">❤️</div>
            <a class="p-3 w-full" href="about">About</a>
            <div class="p-3 w-full">Dan Thompson</div>
            <div class="p-3 w-full">About</div>
            <div class="p-3 w-12 flex-shrink-0 text-right">5:35</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
            <div class="p-3 w-8 flex-shrink-0">▶️</div>
            <div class="p-3 w-8 flex-shrink-0">❤️</div>
            <a class="p-3 w-full" href="a-post">A post</a>
            <div class="p-3 w-full">Dan Thompson</div>
            <div class="p-3 w-full">Coding</div>
            <div class="p-3 w-12 flex-shrink-0 text-right">1:26</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
            <div class="p-3 w-8 flex-shrink-0">▶️</div>
            <div class="p-3 w-8 flex-shrink-0">❤️</div>
            <a class="p-3 w-full" href="b-post">B post</a>
            <div class="p-3 w-full">Dan Thompson</div>
            <div class="p-3 w-full">Coding</div>
            <div class="p-3 w-12 flex-shrink-0 text-right">7:23</div>
        </div>
    </div>
);
