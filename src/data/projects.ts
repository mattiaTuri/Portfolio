import { Project } from "@/models/project";
import leagueoflegends from "../assets/images/leagueoflegends.jpg"
import worldjournal from "../assets/images/worldjournal.png"
import dashboard from "../assets/images/dashboard.jpg"


export const projects: Project[] = [
    {
        id: "journal",
        title: "World Jounal",
        subtitle: "A clone of the New York Times",
        description:"A single page web app for display articles organised by category. The main page reports the latest news.",
        link_github:"https://github.com/mattiaTuri/Journal",
        link_preview:"https://world-journal-react.netlify.app/",
        technology: [
            {
                name: "React v.17",
                icon: "mdi:react"
            },
            {
                name: "MUI",
                icon: "simple-icons:mui"
            },
            {
                name: "React router",
                icon: "simple-icons:reactrouter"
            },
            {
                name: "Axios",
                icon: "simple-icons:axios"
            },
        ],
        img: worldjournal,
        imgPosition: "center"
    },
    {
        id: "league-of-legends",
        title: "League of legends",
        subtitle: "The universe of the most famous MOBA",
        description:"A single page web app that show champions and region of the League of Legends universe",
        link_github:"https://github.com/mattiaTuri/LeagueOfLegends",
        link_preview:"https://league-of-legends-universe.vercel.app",
        technology: [
            {
                name: "Next.js v.13",
                icon: "teenyicons:nextjs-solid"
            },
            {
                name: "Typescript",
                icon: "mdi:language-typescript"
            },
            {
                name: "Tailwind css",
                icon: "mdi:tailwind"
            },
            {
                name: "i18next",
                icon: "simple-icons:i18next"
            },
            {
                name: "Framer motion",
                icon: "tabler:brand-framer-motion"
            },

            {
                name: "Swiper.js",
                icon: "simple-icons:swiper"
            },
        ],
        img: leagueoflegends,
        imgPosition: "40% 20%"
    },
    {
        id: "storage",
        title: "Storage",
        subtitle: "Personal dashboard",
        description:"Dashboard to catalogue books and resources so you can keep track of what you read. It includes a summary page with charts and a page on system/user options.",
        link_github:"https://github.com/mattiaTuri/Storage",
        link_preview:"https://storage-dun.vercel.app/",
        technology: [
            {
                name: "React v.18.2",
                icon: "mdi:react"
            },
            {
                name: "Typescript",
                icon: "mdi:language-typescript"
            },
            {
                name: "MUI",
                icon: "simple-icons:mui"
            },
            {
                name: "Tailwind css",
                icon: "mdi:tailwind"
            },
            {
                name: "React router",
                icon: "simple-icons:reactrouter"
            },
            {
                name: "Apache echarts",
                icon: "simple-icons:apacheecharts"
            },
            {
                name: "Firebase",
                icon: "mdi:firebase"
            },

        ],
        img: dashboard,
        imgPosition: "center"
    },
]