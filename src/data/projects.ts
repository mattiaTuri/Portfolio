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
        technology: [
            "React",
            "MUI",
            "React router",
            "Axios with New York Times api"
        ],
        img: worldjournal,
        imgPosition: "center"
    },
    {
        id: "coin-market",
        title: "Coin market",
        subtitle: "Cryptocurrency live market",
        description:"I created my own version of crypto currency web site inspired by site like CoinMarketCap and CoinGecko. Market live updates",
        technology: [
            "React",
            "MUI",
            "React router",
            "Axios with Coinmarket / CoinGecko api"
        ],
        img: coinmarket,
        imgPosition: "center 30%"
    },
    {
        id: "league-of-legends",
        title: "League of legends",
        subtitle: "The universe of the most famous MOBA",
        description:"A single page web app that show champions and region of the League of Legends universe",
        technology: [
            "Next.js",
            "Tailwind css",
            "i18next for translation (it, en)",
            "Framer motion as animation library",
            "Custom json data and translation"
        ],
        img: leagueoflegends,
        imgPosition: "center 20%"
    },
]