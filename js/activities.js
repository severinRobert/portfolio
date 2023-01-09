"use strict";

const activities = [
    {
        "title": "Devday 2020",
        "description": "Description 1",
        "images": [
            {
                "src": "Devday2020(1).PNG",
                "alt": "Devday 2020 image",
            },
            {
                "src": "Devday2020(2).PNG",
                "alt": "Devday 2020 image",
            },
        ],
        "links": ["https://www.devday.be"],
        "workedHours": 11,
        "startDate": new Date("2020-11-16"),
        "endDate": new Date("2020-11-17"),
        "theme": "Conferences",
    },
    {
        "title": "BattleDev 2020",
        "description": "Description",
        "images": [
            {
                "src": "BattleDev2020.PNG",
                "alt": "BattleDev 2020 image",
            }
        ],
        "links": ["https://www.linkedin.com/showcase/battledev"],
        "workedHours": 2,
        "startDate": new Date("2020-11-26"),
        "endDate": new Date("2020-11-26"),
        "theme": "Challenge",
    },
    {
        "title": "Présentation Cognizant",
        "description": "Description",
        "images": [
            {
                "src": "Cognizant.PNG",
                "alt": "Conizant conference image",
            }
        ],
        "links": [],
        "workedHours": 1,
        "startDate": new Date("2021-02-09"),
        "endDate": new Date("2021-02-09"),
        "theme": "Conferences",
    },
    {
        "title": "Présentation Efficy",
        "description": "Description",
        "images": [
            {
                "src": "Efficy.PNG",
                "alt": "Efficy conference image",
            }
        ],
        "links": [],
        "workedHours": 1,
        "startDate": new Date("2021-02-23"),
        "endDate": new Date("2021-02-23"),
        "theme": "Conferences",
    },
    {
        "title": "Devday 2021",
        "description": "Description",
        "images": [
            {
                "src": "Devday2021.jpg",
                "alt": "Devday 2021 image",
            }
        ],
        "links": ["https://www.devday.be"],
        "workedHours": 6,
        "startDate": new Date("2021-11-23"),
        "endDate": new Date("2021-11-23"),
        "theme": "Conferences",
    },
    {
        "title": "CTEphec",
        "description": "Description",
        "images": [
            {
                "src": "teams-CTEPHEC.png",
                "alt": "alt",
            }
        ],
        "links": [],
        "workedHours": 12,
        "startDate": new Date("2022-02-26"),
        "endDate": new Date("2022-02-26"),
        "theme": "Capture The Flag",
    },
    {
        "title": "Hackathon CSLabs",
        "description": "Description",
        "images": [
            {
                "src": "hackathoncslabs.jpg",
                "alt": "Hackathon CSLabs image",
            }
        ],
        "links": [],
        "workedHours": 44,
        "startDate": new Date("2022-02-18"),
        "endDate": new Date("2022-02-20"),
        "theme": "Hackathon",
    },
    {
        "title": "Hackathon Ephec",
        "description": "Description",
        "images": [
            {
                "src": "teams-hackathonEPHEC.png",
                "alt": "alt",
            }
        ],
        "links": [],
        "workedHours": 44,
        "startDate": new Date("2021-10-29"),
        "endDate": new Date("2021-10-31"),
        "theme": "Hackathon",
    },
    {
        "title": "Chef Baladins",
        "description": "Description",
        "images": [
            {
                "src": "scout.jpeg",
                "alt": "Staff scout image",
            }
        ],
        "links": ["https://lesscouts.be/fr"],
        "workedHours": Infinity,
        "startDate": new Date("2021-09-01"),
        "endDate": new Date("2022-09-01"),
        "theme": "Scout",
    },
    {
        "title": "Action",
        "description": "Description",
        "images": [
            {
                "src": "contrat_action.png",
                "alt": "Contrat action image",
            }
        ],
        "links": ["https://www.action.com/"],
        "workedHours": 14,
        "startDate": new Date("2020-09-25"),
        "endDate": new Date("2020-10-03"),
        "theme": "Student Job",
    },
    {
        "title": "Dogchef",
        "description": "Description",
        "images": [
            {
                "src": "src",
                "alt": "alt",
            }
        ],
        "links": [],
        "workedHours": 34,
        "startDate": new Date("2022-06-25"),
        "endDate": new Date(),
        "theme": "Student Job",
    },
    {
        "title": "Lescigognes",
        "description": "Description",
        "images": [
            {
                "src": "src",
                "alt": "alt",
            }
        ],
        "links": [],
        "workedHours": 141,
        "startDate": new Date("2020-02-11"),
        "endDate": new Date(),
        "theme": "Student Job",
    },
    {
        "title": "SIEP",
        "description": "Description",
        "images": [
            {
                "src": "src",
                "alt": "alt",
            }
        ],
        "links": [],
        "workedHours": 4,
        "startDate": new Date("2022-02-18"),
        "endDate": new Date("2022-02-18"),
        "theme": "EPHEC representative",
    },
    {
        "title": "Malgache Game",
        "description": "https://severinrobert.github.io/jeuMalgache/jeuBoule.html",
        "images": [
            {
                "src": "src",
                "alt": "alt",
            }
        ],
        "links": [],
        "workedHours": 8,
        "startDate": new Date("2020-08-25"),
        "endDate": new Date("2020-08-25"),
        "theme": "Personnal Project",
    },
    {
        "title": "Arduino Clock",
        "description": "https://github.com/severinRobert/clock_arduino",
        "images": [
            {
                "src": "clock1.jpg",
                "alt": "Prototype image",
            },
            {
                "src": "clock2.jpg",
                "alt": "Clock image",
            },
            {
                "src": "clock3.jpg",
                "alt": "Clock image",
            },
        ],
        "links": [],
        "workedHours": 5,
        "startDate": new Date("2021-01-17"),
        "endDate": new Date("2021-01-18"),
        "theme": "Personnal Project",
    },
    {
        "title": "Home Server",
        "description": "https://github.com/severinRobert/home-server",
        "images": [
            {
                "src": "src",
                "alt": "alt",
            }
        ],
        "links": [],
        "workedHours": 50,
        "startDate": new Date("2022-04-12"),
        "endDate": new Date("2022-09-02"),
        "theme": "Personnal Project",
    },
    {
        "title": "Building PC",
        "description": "",
        "images": [
            {
                "src": "src",
                "alt": "alt",
            }
        ],
        "links": [],
        "workedHours": 5,
        "startDate": new Date("2022-04-11"),
        "endDate": new Date("2022-04-11"),
        "theme": "Personnal Project",
    },
];