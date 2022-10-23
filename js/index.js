"use strict";

const emojis = {
    'index.html': {
        'active' : '🏡', //🏡
        'passive' : '🏠', //🏠
    },
    'CV.html': {
        'active' : '📝', //📝
        'passive' : '📃', //📃
    },
    'Portfolio.html': {
        'active' : '📂', //📂
        'passive' : '📁', //📁
    },
}

function changeBackground(color) {
    document.querySelector("body").style.backgroundColor = color;
}

function load() {
    const href = window.location.href.split('/');
    const currentPage = href[href.length - 1];
    for(let key of Object.keys(emojis)) {
        const element = document.getElementById(key);
        element.addEventListener("mouseenter", (e) => {
            e.target.firstElementChild.innerText = emojis[key]['active'];
        });
        element.addEventListener("mouseleave", (e) => {
            if(key != currentPage) {
                e.target.firstElementChild.innerText = emojis[key]['passive'];
            }
        });
        element.firstElementChild.innerText = emojis[key][key==currentPage ? 'active' : 'passive']
    }
    if(currentPage == 'Portfolio.html') {
        buildPortfolio();
    }
    
}