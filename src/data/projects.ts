import { Project } from "@/models/project";

import leagueoflegends from "../assets/images/leagueoflegends.jpg"
import coinmarket from "../assets/images/coinmarket.jpg"
import worldjournal from "../assets/images/worldjournal.png"


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
                name: "React",
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
    // {
    //     id: "coin-market",
    //     title: "Coin market",
    //     subtitle: "Cryptocurrency live market",
    //     description:"I created my own version of crypto currency web site inspired by site like CoinMarketCap and CoinGecko. Market live updates",
    //     link_github:"https://github.com/mattiaTuri/CoinMarket",
    //     link_preview:"https://coinmarket-cap.netlify.app/",
    //     technology: [
    //         {
    //             name: "React",
    //             icon: "mdi:react"
    //         },
    //         {
    //             name: "MUI",
    //             icon: "simple-icons:mui"
    //         },
    //         {
    //             name: "React router",
    //             icon: "simple-icons:reactrouter"
    //         },
    //         {
    //             name: "Axios",
    //             icon: "simple-icons:axios"
    //         },
    //     ],
    //     img: coinmarket,
    //     imgPosition: "center 30%"
    // },
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
]