"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[847],{

/***/ 778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {
    return /*html*/`
        <div class="path">
            <h1 class="h1 path__name">${window.location.pathname.slice(1)}</h1>
            <p class="path__description">${description}</p>
        </div>
    `
});

/***/ }),

/***/ 847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(778);
/* harmony import */ var _components_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(975);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {
    return /*html*/ `
        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ description: t.description })}
        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({ title: t.decent, filter: (p) => !p.isSmall }, t2.projects)}
        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({ title: t.small, filter: (p) => p.isSmall && !p.isInProgress }, t2.projects)}
    `;
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