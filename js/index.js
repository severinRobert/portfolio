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
        document.getElementById(key).addEventListener("mouseenter", (e) => {
            e.target.firstElementChild.innerText = emojis[key]['active'];
        });
        document.getElementById(key).addEventListener("mouseleave", (e) => {
            if(key != currentPage) {
                e.target.firstElementChild.innerText = emojis[key]['passive'];
            }
        });
    }
    if(currentPage == 'Portfolio.html') {
        let table = `
        <thead>
            <tr>
                <th>#</th>
                <th>Titre</th>
                <th>Thème</th>
                <th>Debut</th>
                <th>Fin</th>
            </tr>
        </thead>
        `;

        for(let activityId in activities) {
            let activity = activities[activityId];
            table += `
            <tr>
                <td>${Number(activityId)+1}</td>
                <td>${activity.title}</td>
                <td>${activity.theme}</td>
                <td>${activity["startDate"].toLocaleDateString("fr")}</td>
                <td>${activity["endDate"].toLocaleDateString("fr")}</td>
            </tr>
            `;
        }
        document.getElementById("portfolio-table").innerHTML = table;
    }
    
}