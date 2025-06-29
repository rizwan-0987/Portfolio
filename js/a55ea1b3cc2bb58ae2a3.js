"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[36],{

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

;// ./src/app/components/Dots.js
const radius = 4;
const gap = 16;

/* harmony default export */ const Dots = (({ width = 5, height = 5 } = {}) => {
    const svgWidth = (radius * 2 + gap) * width - gap
    const svgHeight = (radius * 2 + gap) * height - gap

    return /*html*/ `
        <svg width="100%" class="dots" viewBox="0 0 ${svgWidth} ${svgHeight}">
            ${new Array(width)
                .fill(new Array(height).fill(""))
                .map((arr, i) =>
                    arr.map((_, j) => {
                        const x = radius + i * (radius * 2 + gap);
                        const y = radius + j * (radius * 2 + gap);

                        return /*html*/ `<circle cx="${x}" cy="${y}" r="${radius}" />`;
                    }).join("")
                )
                .join("")}
        </svg>
    `;
});

;// ./src/app/blocks/home/Hero.js


/* harmony default export */ const Hero = ((t) => {
    return /*html*/ `
        <section class="hero">
            <div class="hero__content">
                <h1 class="hero__title">${t.title}</h1>
                <div class="hero__description">${t.description}</div>
                <a class="button button__primary" href="#contacts">${t.button} =></a>
            </div>
            <div class="hero__illustrations">
                <img src="/images/logo-outline.svg" alt="" class="hero__logo">
                <img src="/images/hero.png" alt="Elias" class="hero__image">
                <div class="hero__status">${t.status}</div>
                ${Dots({})}
            </div>
        </section>
    `;
});

;// ./src/app/blocks/home/Quote.js
/* harmony default export */ const Quote = ((t) => {
    return /*html*/`
        <figure class="quote">
            <blockquote class="quote__text">${t.text}</blockquote>
            <figcaption class="quote__author">${t.author}</figcaption>
        </figure>
    `
});
// EXTERNAL MODULE: ./src/app/components/ProjectList.js + 2 modules
var ProjectList = __webpack_require__(975);
;// ./src/app/blocks/home/Projects.js


/* harmony default export */ const Projects = ((t, t2) => {
    return /*html*/ `
        <section class="projects">
            <div class="projects__header">
                <h2 class="h2">${t.title}</h2>
                <a class="projects__link" href="/projects">${t.button} ~~></a>
            </div>
            ${(0,ProjectList/* default */.A)({ limit: 3 }, t2)}
        </section>
    `;
});

// EXTERNAL MODULE: ./src/app/components/SkillBlock.js
var SkillBlock = __webpack_require__(427);
// EXTERNAL MODULE: ./src/app/consts/skills.js
var skills = __webpack_require__(515);
;// ./src/app/blocks/home/Skills.js




/* harmony default export */ const Skills = ((t, t2) => {
    return /*html*/ `
        <sections class="skills">
            <h2 class="h2">${t.title}</h2>
            <div class="skills__content">
                <div class="skills__illustrations illustrations">
                    <img src="/images/logo-outline.svg" alt="" class="illustrations__logo">
                    ${Dots({ width: 4, height: 4 })}
                    ${Dots({ width: 6, height: 6 })}
                </div>
                <div class="skills__list">
                    ${Object.keys(skills/* default */.A)
                        .filter(id => id !== "tool")
                        .map((id) => (0,SkillBlock/* default */.A)({ id }, t2))
                        .join("")}
                </div>

            </div>

        </sections>
    `;
});

;// ./src/app/blocks/home/About.js
/* harmony default export */ const About = ((t) => {
    return /*html*/ `
        <section class="about">
            <div class="about__content">
                <h2 class="h2">${t.title}</h2>
                <div class="about__text">
                    ${t.description.map(
                        (text) =>
                            /*html*/ `<p class="about__description">${text}</p>`
                    ).join("")}
                </div>

                <a href="/about-me" class="button">${t.button} -></a>
            </div>
            <img src="/images/about-me.png" alt="" class="about__image">
        </section>
    `;
});

// EXTERNAL MODULE: ./src/app/consts/media.js + 1 modules
var media = __webpack_require__(934);
;// ./src/app/blocks/home/Contacts.js


const contacts = [
    {
        name: "discord",
        text: media/* default */.A.discordTag,
    },
    {
        name: "email",
        text: media/* default */.A.emailRaw,
    }
];

/* harmony default export */ const Contacts = ((t) => {
    return /*html*/ `
        <sections class="contacts" id="contacts">
            <h2 class="h2">${t.title}</h2>
            <div class="contacts__content">
                <p class="contacts__description">${t.text}</p>
                <div class="contacts__media">
                    <h3 class="contacts__title">${t.media}</h3>
                    <div class="contacts__list">
                        ${contacts
                            .map(
                                (contact) => /*html*/ `
                            <a class="contact" href="${media/* default */.A[contact.name]}">
                                <img src="/images/icons/${
                                    contact.name
                                }.svg" alt="">
                                <div class="contact__name">${contact.text}</div>
                            </a>
                        `
                            )
                            .join("")}
                    </div>
                </div>
            </div>

        </sections>
    `;
});

;// ./src/app/views/Home.js










/* harmony default export */ const Home = ((t, locale) => {
    return /*html*/`
        ${Hero(t.hero)}
        ${Quote(t.quote)}
        ${Projects(t.projects, locale.projects)}
        ${Skills(t.skills, locale.skills)}
        ${About(t.about)}
        ${Contacts(t.contacts)}
    `;
});


/***/ }),

/***/ 427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _consts_skills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(515);
/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(928);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {
    return /*html*/ `
        <div class="skill-block">
            <div class="skill-block__name">${t[id]}</div>
            <ul class="skill-block__list">
                ${(_consts_skills__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A[id].map((techIndex) => _consts_techs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[techIndex]))
                    .map(
                        (tech) =>
                            /*html*/ `<li class="skill-block__skill">${tech}</li>`
                    )
                    .join("")}
            </ul>
        </div>
    `;
});


/***/ }),

/***/ 515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    language: ["js"],
    other: ["html", "css"],
    tool: ["vscode", "figma", "git"],
    framework: ["react"]   
});

/***/ }),

/***/ 928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    ts: "TypeScript",
    js: "JavaScript",
    python: "Python",
    sqlite: "SQLite",
    mongo: "MongoDB",
    postgreSql: "PostgreSQL",
    html: "HTML",
    css: "CSS",
    sass: "SASS",
    scss: "SCSS",
    less: "Less",
    stylus: "Stylus",
    ejs: "EJS",
    jinja: "Jinja2",
    node: "Node.js",
    vscode: "VSCode",
    nvim: "NeoVim",
    figma: "Figma",
    git: "Git & GitHub",
    xfce: "XFCE",
    react: "React",
    discordJs: "Discord.js",
    flask: "Flask",
    quart: "Quart",
    express: "Express",
    rtk: "RTK",
    zod: "Zod",
    webpack: "WebPack",
    pug: "Pug",
    gulp: "Gulp",
    next: "Next",
    deno: "Deno",
    pixijs: "PixiJS",
    preact: "Preact",
});

/***/ }),

/***/ 975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProjectList)
});

;// ./src/app/consts/projects.js
/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    {
        id: "wscube",
        links: {
            live: "wscubes.netlify.app",
            github: "rizwan-0987/wscube"
        },
        techs: ["html", "css"],
        hasImage: true,
    },
    {
        id: "chowdeck",
        links: {
            live: "chowdeck-rizwan.netlify.app",
            github: "rizwan-0987/chowdeck.com",
        },
        techs: ["html", "css"],
        hasImage: true
    },
    {
        id: "weatherapp",
        links: {
            live: "playful-douhua-953623.netlify.app",
            github: "rizwan-0987/weather-app"
        },
        techs: ["html", "css", "js"],
        hasImage: true,
    },
    {
        id: "restaurant",
        techs: ["html", "css"],
        links: {
            live: "magenta-panda-5c2c6a.netlify.app",
            github: "rizwan-0987/resturant"
        },
        hasImage: true,
    },
    {
        id: "positivus",
        links: {
            live: "startling-gumption-e2574c.netlify.app",
            github: "rizwan-0987/landing"
        },
        techs: ["html", "css","js"],
        hasImage: true,
    },
    {
        id: "calculator",
        techs: ["html", "css", "js"],
        links: {
            live: "dazzling-melba-121f63.netlify.app",
            github: "rizwan-0987/calculator.io"
        },
        hasImage: true,
    },
    {
        id: "tictactoe",
        techs: ["html", "css", "js"],
        links: {
            live: "serene-panda-972fee.netlify.app",
            github: "rizwan-0987/tic-tac-toe",
        },
        hasImage: true,
    },
    {
        id: "pomodoro",
        techs: ["html", "css", "js"],
        links: {
            live: "beautiful-bonbon-7a8fe3.netlify.app",
            github: "rizwan-0987/pomodoro-technique",
        },
        hasImage: true,
    },
    {
        id: "portfolio",
        techs: ["html", "css", "js", "react"],
        links: {
            github: "/EliasDevis.github.io",
            live: "eliasdevis.github.io"
        },
        hasImage: true,
    },

    {
        id: "clock",
        techs: ["html", "css", "js"],
        links: {
            live: "meek-churros-ec554b.netlify.app",
            github: "rizwan-0987/analog-digital-clock",
        },
        isSmall: true,
    },
    {
        id: "login",
        techs: ["html", "css", "js"],
        links: {
            live: "deft-dasik-04dc25.netlify.app",
            github: "rizwan-0987/login",
        },
        isSmall: true,
    },
   
];

/* harmony default export */ const consts_projects = (projects);

// EXTERNAL MODULE: ./src/app/consts/websites.js
var websites = __webpack_require__(175);
// EXTERNAL MODULE: ./src/app/consts/techs.js
var techs = __webpack_require__(928);
// EXTERNAL MODULE: ./src/app/consts/media.js + 1 modules
var media = __webpack_require__(934);
;// ./src/app/components/Project.js





function mapLinks(links) {
    function map(link) {
        let href =
        "https://" + (link === "live" ? "" : websites/* default */.A[link]) + links[link];

        if (link === "figma") href = `https://figma.com/community/file/${links[link]}`
        if (link === "github" && links[link].startsWith("/")) href = media/* default */.A.github + links[link]


        const className = link === "cached" ? "button__secondary" : "";
        const name = `${link[0].toUpperCase()}${link.slice(1)}`;

        return /*html*/ `<a href="${href}" class="button ${className}">${name} =></a>`;
    }

    return Object.keys(links).map(map).join("");
}

/* harmony default export */ const Project = (({ id }, t) => {
    const { hasImage, techs: projectTech, links } = consts_projects.find(
        (project) => project.id === id
    );

    return /*html*/ `
        <div class="project">
            ${
                hasImage
                    ? `<img src="/images/projects/${id}.webp" alt="${t[id].name}" class="project__image">`
                    : ""
            }
            
            <ul class="project__techs">
                ${projectTech
                    .map(
                        (tech) =>
                            /*html*/ `<li class="project__tech">${techs/* default */.A[tech]}</li>`
                    )
                    .join("")}
            </ul> 

            <div class="project__content">
                <div class="project__name">${t[id].name}</div>
                <div class="project__description">${t[id].description}</div>
                <div class="project__links">${mapLinks(links)}</div>
            </div>
        </div> 
    `;
});

;// ./src/app/components/ProjectList.js




/* harmony default export */ const ProjectList = (({ title, filter = () => true, limit = consts_projects.length }, t) => {
    return /*html*/ `
            ${title ? `<div> <h2 class="h2">${title}</h2>` : ""}
            <div class="project-list">
                ${consts_projects
                    .filter(filter)
                    .slice(0, limit)
                    .sort((a, b) => a.hasImage - b.hasImage)
                    .map(({ id }) => Project({ id }, t))
                    .join("")}
            </div>
        ${title ? "</div>" : ""}
    `;
});


/***/ })

}]);