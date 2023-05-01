import { Project } from "@/models/project";

import leagueoflegends from "../assets/images/leagueoflegends.jpg"
import coinmarket from "../assets/images/coinmarket.jpg"
import worldjournal from "../assets/images/worldjournal.png"


export const projects: Project[] = [
    {
        id: "journal",
        title: "World Jounal",
        subtitle: "",
        img: worldjournal,
        imgPosition: "center"
    },
    {
        id: "coin-market",
        title: "Coin market",
        subtitle: "",
        img: coinmarket,
        imgPosition: "center 30%"
    },
    {
        id: "league-of-legends",
        title: "League of legends",
        subtitle: "",
        img: leagueoflegends,
        imgPosition: "center 20%"
    },
]