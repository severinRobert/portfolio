"use strict";

let sortPortfolio = (column, reverse=false) => {activities.sort((a, b) => (a[column] > b[column]) ^ reverse)};

let currentSort = "endDate";
let reverse = false;


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
            <tr class="portfolio-row">
                <td>${Number(activityId)+1}</td>
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
}