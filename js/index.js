"use strict";

const emojis = {
    'index.html': {
        'active' : '&#127969;', //🏡
        'passive' : '&#127968;', //🏠
    },
    'CV.html': {
        'active' : '&#128221;', //📝
        'passive' : '&#128195;', //📃
    },
    'Portfolio.html': {
        'active' : '&#128194;', //📂
        'passive' : '&#128193;', //📁
    },
}

function load() {
    const href = window.location.href.split('/');
    const currentPage = href[href.length - 1];
    if(currentPage == 'Portfolio.html') {
        let table = `
        <tr>
            <th>#</th>
            <th>Titre</th>
            <th>Thème</th>
            <th>Debut</th>
            <th>Fin</th>
        </tr>
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