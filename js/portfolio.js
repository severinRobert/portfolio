"use strict";

let sortPortfolio = (column, reverse=false) => {activities.sort((a, b) => (a[column] > b[column]) ^ reverse)};

let currentSort = "endDate";
let reverse = false;
let currentActivityId = 0;

function createPopup(activity, activityId) {
    let hours = activity.workedHours;
    return `
    <button id="popup-close">X</button>
    <div id="popup-body"> 
        <h1>${activity.title}</h1>
        <p>Thème: ${activity.theme}</br>
        Heures effectuées: ${hours}</br>
        Heures validées: ${hours > 9 ? 10 : hours}</br>
        Du ${activity.startDate.toLocaleDateString("fr")} au ${activity.endDate.toLocaleDateString("fr")}</p>
        <p>${activity.description}</p>
        <div id="popup-images">
            <div class="carousel">
                ${activity.images.map(image => `<img src="assets/img/${image.src}" alt="${image.alt}"/>`).join('')}
            </div>    
        </div>
        <div id="popup-links">
            ${activity.links.length > 0 ? "<p>Liens:</p><ul>" : ""}
                ${activity.links.map(link => `<li><a href="${link}" target="_blank">${link}</a></li>`).join('')}
                ${activity.links.length > 0 ? "</ul>" : ""}
        </div>
    </div>
    <div id="popup-footer">
        <button onclick="changePopup('previous')"><</button>
        <span>${activityId+1}/${activities.length}</span>
        <button onclick="changePopup('next')">></button>
    </div>`
}

function buildPortfolio(sort="endDate") {
    reverse = (sort === currentSort) ? !reverse : false;
    currentSort = sort;
    sortPortfolio(sort, reverse);
    let portfolioTable = `
        <thead>
            <tr>
                <th>#</th>
                <th id="title" onclick="buildPortfolio('title')">Title</th>
                <th id="theme" onclick="buildPortfolio('theme')">Theme</th>
                <th id="workedHours" onclick="buildPortfolio('workedHours')">Worked Hours</th>
                <th>Validated Hours</th>
                <th id="startDate" onclick="buildPortfolio('startDate')">Start</th>
                <th id="endDate" onclick="buildPortfolio('endDate')">End</th>
            </tr>
        </thead>
    `;
    let hoursByTheme = {};

    for(let activityId in activities) {
        let activity = activities[activityId];
        let hours = activity.workedHours;
        portfolioTable += `
            <tr class="activity-row" tabindex="0" role="button" aria-pressed="true">
                <td class="activity-id">${Number(activityId)+1}</td>
                <td>${activity.title}</td>
                <td>${activity.theme}</td>
                <td>${hours}</td>
                <td>${hours > 9 ? 10 : hours}</td>
                <td>${activity["startDate"].toLocaleDateString("fr")}</td>
                <td>${activity["endDate"].toLocaleDateString("fr")}</td>
            </tr>
        `;
        hoursByTheme[activity.theme] = (hoursByTheme[activity.theme] || 0) + hours;
    }

    let summaryTable = `
        <caption>Portfolio Activities</caption>
        <thead>
            <tr>
                <th>Theme</th>
                <th>Worked Hours</th>
                <th>Validated Hours</th>
            </tr>
        </thead>
    `;
    let total = 0;
    for(let theme in hoursByTheme) {
        let hours = hoursByTheme[theme];
        let validatedHours = hours > 9 ? 10 : hours;
        total += validatedHours;
        summaryTable += `
            <tr class="summary-row">
                <td>${theme}</td>
                <td>${hours}</td>
                <td>${validatedHours}</td>
            </tr>
        `;
    }

    document.getElementById("portfolio-table").innerHTML = portfolioTable;
    document.getElementById(sort).innerHTML += reverse ? "⬆" : "⬇";
    document.getElementById("validated-hours").innerHTML = total;
    document.getElementById("summary-table").innerHTML = summaryTable;

    initPopup();
}

function removePopup(body, popup, popupContent) {
    body.classList.remove('no-scroll');
    popupContent.classList.remove('animate__zoomIn', 'animate__slideInLeft', 'animate__slideInRight', 'animate__slideOutLeft', 'animate__slideOutRight');
    popupContent.classList.add('animate__zoomOut');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 200);
}

function changePopup(direction) {
    let activityId = direction=="previous" ? currentActivityId-1 : currentActivityId+1;
    activityId = activityId < 0 ? activities.length-1 : activityId;
    activityId = activityId >= activities.length ? 0 : activityId;
    let popupContent = document.getElementById('popup-content');
    popupContent.classList.remove('animate__zoomIn', 'animate__slideInLeft', 'animate__slideInRight');
    popupContent.classList.add(direction == "previous" ? 'animate__slideOutRight' : 'animate__slideOutLeft');
    setTimeout(() => {
        popupContent.innerHTML = createPopup(activities[activityId], activityId);
        popupContent.classList.remove('animate__slideOutRight', 'animate__slideOutLeft');
        popupContent.classList.add(direction == "previous" ? 'animate__slideInLeft' : 'animate__slideInRight');
        popupContent.firstElementChild.addEventListener('click', () => {
            removePopup(body, popup, popupContent);
        });
    }, 150);
    currentActivityId = activityId;
}

function initPopup() {
    let rows = document.querySelectorAll('.activity-row');
    let body = document.querySelector('body');
    let popup = document.getElementById('popup');
    let popupContent = document.getElementById('popup-content');
    let popupOverlay = document.getElementById('popup-overlay');

    document.addEventListener('keydown', function(event) {
        if (event.repeat) { return }
        if(event.key == "ArrowLeft") {
            changePopup('previous');
        }
        else if(event.key == "ArrowRight") {
            changePopup('next');
        }
        else if(event.key == "Escape") {
            removePopup(body, popup, popupContent);
        }
    });

    rows.forEach((row) => {
        row.addEventListener('click', (e) => {
            popupContent.classList.remove('animate__zoomOut');
            let activityId = e.target.parentElement.children[0].innerHTML - 1;
            let activity = activities[activityId];
            currentActivityId = activityId;
            popupContent.innerHTML = createPopup(activity, activityId);
            popup.style.display = 'flex';
            body.classList.add('no-scroll');
            popupContent.firstElementChild.addEventListener('click', () => {
                removePopup(body, popup, popupContent);
            });
            popupContent.classList.add('animate__zoomIn');
        });
    });    

    // Add an event listener to close the popup when the user clicks outside of the popup content
    window.addEventListener('click', (event) => {
        if (event.target == popupOverlay) {
            removePopup(body, popup, popupContent);
        }
    });
}
