import proxy from "../proxies/media"

const media = {
    discord: {
        id: "914240860101681163",
        tag: "rizwan.dev",
    },
    stackOverflow: {
        id: "19758208",
        name: "rizwan",
    },
    github: "rizwan-0987",
    figma: "rizwan36",
    replit: "RizwanDev",
    codewars: "RizwanAhmad",
    devTo: "rizwanahmad",
    cssBattle: "rizwan_dev",
    codepen: "rizwan_dev",
    dribble: "Rizwan_dev",
    email: "rizwan171111@gmail.com"
}

export default new Proxy(media, proxy);

