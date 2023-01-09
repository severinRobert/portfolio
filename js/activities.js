"use strict";

const activities = [
    {
        "title": "Devday 2020",
        "description": `Le Devday est une série conférences organisée par la communauté des développeurs belges sur des sujets divers à propos de l'informatique.
            C'est la première édition du Devday à laquelle j'ai participé. Elle s'est fait en ligne donc je n'ai pas pu rencontré des personne de la communauté.
            Je n'en ai pas moins aimé l'expérience ça m'a permis de m'intéresser à des technologies dont je n'étais pas spécialement familier.`,
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
        "description": `La BattleDev est un challenge de programmation algorithmique qui laisse au participant 2h pour résoudre 6 problèmes.
            Les problèmes sont de difficulté croissante. J'étais en 2ème BAC lorsque j'y ai participé et n'ayant pas de notion avancée d'algorithmie
            j'ai eu du mal à résoudre les problèmes. J'ai réussi à en résoudre 3 sur les 6, j'ai fini 1380ème sur 5464 participants.
            C'était le premier évènement de code que je faisais et ça m'a motivé à apprendre quelques notions d'algorithmies.`,
        "images": [
            {
                "src": "BattleDev2020.PNG",
                "alt": "BattleDev 2020 image",
            }
        ],
        "links": ["https://www.linkedin.com/showcase/battledev", "https://www.blogdumoderateur.com/battledev-inscription-novembre-2020/"],
        "workedHours": 2,
        "startDate": new Date("2020-11-26"),
        "endDate": new Date("2020-11-26"),
        "theme": "Challenge",
    },
    {
        "title": "Présentation Cognizant",
        "description": `Première présentation d'entreprise organisé par l'EPHEC. C'était intérressant d'avoir des informations sur le monde du travail.`,
        "images": [
            {
                "src": "Cognizant.PNG",
                "alt": "Conizant conference image",
            }
        ],
        "links": ["https://www.cognizant.com/us/en/about-cognizant"],
        "workedHours": 1,
        "startDate": new Date("2021-02-09"),
        "endDate": new Date("2021-02-09"),
        "theme": "Conferences",
    },
    {
        "title": "Présentation Efficy",
        "description": `Deuxième présentation d'entreprise organisé par l'EPHEC. C'était intérressant d'avoir des informations sur le monde du travail.`,
        "images": [
            {
                "src": "Efficy.PNG",
                "alt": "Efficy conference image",
            }
        ],
        "links": ["https://www.efficy.com/"],
        "workedHours": 1,
        "startDate": new Date("2021-02-23"),
        "endDate": new Date("2021-02-23"),
        "theme": "Conferences",
    },
    {
        "title": "Devday 2021",
        "description": `Le Devday est une série conférences organisée par la communauté des développeurs belges sur des sujets divers à propos de l'informatique.
            C'est la deuxième édition du Devday à laquelle j'ai participé. Elle s'est fait en présentielle donc j'ai pu rencontré des personne de la communauté et avoir
            plus de contact avec les entreprises présentent sur les lieux. Les conférences étaient plus captivantes à suivre en présentielles. Et comme la première fois,
            ça m'a permis d'augmenter ma culture générale sur l'informatique et voir des nouveaux outils/framework.`,
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
        "description": `CTEphec est un évènement organisé par l'EPHEC. C'est un évènement de capture the flag, le but est de trouver des "flags" cachés dans différents
            défis souvent lié à la cybersécurité. C'est la première fois que j'ai participé à un évènement de ce type. ça m'a permis de faire un premier pas dans le monde
            de la cybersécurité même si j'avais déjà été sur des sites comme <a href="https://www.root-me.org/">Root-me</a> ou <a href="https://tryhackme.com/">TryHackMe</a>.`,
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
        "description": `Un hackathon est un weekend (souvent du vendredi soir au dimanche midi) où des équipes de 3 à 5 personnes doivent développer un projet en 48h.
            C'est la deuxième fois que je participais à un hackathon. Le thème était sur le bien vieillir. On a développer une application web qui permet de faire des
            appels vidéo en rapport avec l'apprentissage permettant aux personnes agées de transmettre leurs savoir.`,
        "images": [
            {
                "src": "hackathoncslabs.jpg",
                "alt": "Hackathon CSLabs image",
            }
        ],
        "links": ["https://www.cslabs.be/"],
        "workedHours": 44,
        "startDate": new Date("2022-02-18"),
        "endDate": new Date("2022-02-20"),
        "theme": "Hackathon",
    },
    {
        "title": "Hackathon Ephec",
        "description": `Un hackathon est un weekend (souvent du vendredi soir au dimanche midi) où des équipes de 3 à 5 personnes doivent développer un projet en 48h.
            C'est la première fois que j'ai participé à un hackathon. C'était une expérience très enrichissante. J'ai pu apprendre à travailler en équipe et à gérer
            mon temps. Le thème était sur le développement durable. On a développer une plateforme de revente de syllabus entre étudiants de l'EPHEC et on a gagné
            le prix du meilleur projet.`,
        "images": [
            {
                "src": "teams-hackathonEPHEC.png",
                "alt": "Teams Hackathon EPHEC image",
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
        "description": `J'ai fait 1 an en tant que chef baladins (enfants de 6 à 8 ans). Cette expérience a permis développer mes compétences en communication et
            en gestion de groupe. J'ai aussi pu apprendre à gérer mon temps et à travailler en équipe. J'ai aussi pu apprendre à gérer des enfants.`,
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
        "description": `J'ai travaillé 2 à Action, c'était un travail inintéressant mais qui m'a permis de gagner de l'argent. Cette expérience m'a tout de même permis
            de développer mes compétences en communication en étant en caisse avec les clients.`,
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
        "description": `J'ai travaillé plusieurs fois chez Dogchef, dans une usine de production de nourriture pour chien. C'est un travail très physique mais
            qui m'a permis de me rendre compte de l'importance d'un bon environnement de travail et d'une bonne cohésion. Car le travail était, en apparence tout aussi
            ennuyant que chez Action pourtant il était beaucoup plus agréable de part son ambiance.`,
        "images": [
            {
                "src": "src",
                "alt": "alt",
            }
        ],
        "links": ["https://www.dogchef.com/en"],
        "workedHours": 34,
        "startDate": new Date("2022-06-25"),
        "endDate": new Date(),
        "theme": "Student Job",
    },
    {
        "title": "Lescigognes",
        "description": `Premier job étudiant directement en rapport avec mes études. Lescigognes est une asbl à but non lucratif qui fait des actions pour les plus démunis.
            Ce travail m'a permis de coder pour la première fois sur un projet déjà éxistant et en production. J'ai appris à coder en PHP et Apache OpenOffice Basic
            (le visual basic de LibreOffice et OpenOffice). J'ai aussi appris à m'adapter à la manière dont le site était codé.`,
        "images": [
            {
                "src": "src",
                "alt": "alt",
            }
        ],
        "links": ["https://www.lescigognes.be/"],
        "workedHours": 141,
        "startDate": new Date("2020-02-11"),
        "endDate": new Date(),
        "theme": "Student Job",
    },
    {
        "title": "SIEP",
        "description": `Le SIEP est un salon de l'emploi pour les étudiants. J'ai été représenter l'EPHEC pour le salon du SIEP 2022 à Namur. 
            J'ai pu apprendre à communiquer avec les étudiants et à mettre en valeur ce qu'apporte l'EPHEC dans son cursus par rapport à un autre.`,
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
        "description": `Un de mes premiers projets personnels. J'ai codé ce jeu en HTML, CSS et JavaScript. ça m'a permis d'améliorer mes compétences en Javascript et
            consolider les connaissances vu en 1ère BAC tout en étant un projet ludique.`,
        "images": [
            {
                "src": "malgache-home.png",
                "alt": "home of malgache game",
            },
            {
                "src": "malgache-board.png",
                "alt": "board of malgache game",
            },
        ],
        "links": ["https://severinrobert.github.io/jeuMalgache/jeuBoule.html"],
        "workedHours": 8,
        "startDate": new Date("2020-08-25"),
        "endDate": new Date("2020-08-25"),
        "theme": "Personnal Project",
    },
    {
        "title": "Arduino Clock",
        "description": `Un de mes projets Arduino les plus aboutis, Arduino est une organisation qui développe des cartes électroniques et modules permettant de faire
            toutes sortes de projets. J'ai codé ce projet en C++ et Arduino. J'ai appris à utiliser les bibliothèques Arduino et à utiliser les différents modules. J'ai aussi
            pu mettre en pratique mes connaissances apprisent en électronique.`,
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
        "links": ["https://github.com/severinRobert/clock_arduino"],
        "workedHours": 5,
        "startDate": new Date("2021-01-17"),
        "endDate": new Date("2021-01-18"),
        "theme": "Personnal Project",
    },
    {
        "title": "Home Server",
        "description": `Un projet qui m'a permis de mettre en pratique mes connaissances en réseau et en sécurité. J'ai codé ce projet avec Docker. J'ai mis en place un
            serveur web avec Apache2, un serveur de base de données avec PostgreSQL, un serveur de stockage en local avec Samba et VPN avec OpenVPN.`,
        "images": [
            {
                "src": "src",
                "alt": "alt",
            }
        ],
        "links": ["https://github.com/severinRobert/home-server"],
        "workedHours": 50,
        "startDate": new Date("2022-04-12"),
        "endDate": new Date("2022-09-02"),
        "theme": "Personnal Project",
    },
    {
        "title": "Building PC",
        "description": `J'ai été une après-midi chez un ami pour monter des PC dans le but d'en faire des serveurs. On a su trouver assez de pièces pour monter 2 PC sur
            lesquelles on a installé ubuntu server. J'ai appris à monter un PC et amélioré mes compétences pour installer un système d'exploitation.`,
        "images": [
            {
                "src": "montage_pc.jpg",
                "alt": "Image of me mounting a PC",
            },
            {
                "src": "montage_pc2.jpg",
                "alt": "Image of me mounting a PC",
            },
        ],
        "links": [],
        "workedHours": 5,
        "startDate": new Date("2022-04-11"),
        "endDate": new Date("2022-04-11"),
        "theme": "Personnal Project",
    },
];