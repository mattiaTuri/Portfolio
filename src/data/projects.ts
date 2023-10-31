import { Project } from "@/models/project";
import leagueoflegends from "../assets/images/leagueoflegends.jpg";
import worldjournal from "../assets/images/worldjournal.png";
import dashboard from "../assets/images/dashboard.png";
import sortingalgorithms from "../assets/images/sorting-algorithms.jpg";

export const projects: Project[] = [
  {
    id: "sorting-algorithms",
    title: "Sorting Algorithms",
    subtitle: "Visualizer of the main sorting algorithms",
    description:
      "Visualizer of the main sorting algorithms: bubble, insertion, selection and counting. Logic and animations made with Javascript. On the page is include a toolbar which is possible increase and decrease the speed and also change the length of array.",
    link_github: "https://github.com/mattiaTuri/SortingAlgorithms",
    link_preview: "https://sorting-algorithms-five.vercel.app/",
    technology: [
      {
        name: "React v.18.2",
        icon: "mdi:react",
      },
      {
        name: "Javascript",
        icon: "tabler:brand-javascript",
      },
      {
        name: "MUI",
        icon: "simple-icons:mui",
      },
      {
        name: "Tailwind css",
        icon: "mdi:tailwind",
      },
      {
        name: "React router",
        icon: "simple-icons:reactrouter",
      },
    ],
    img: sortingalgorithms,
    imgPosition: "top",
  },
  {
    id: "storage",
    title: "Storage",
    subtitle: "Personal dashboard",
    description:
      "This projects serves as a manager for managing books and resources, with the option to add new items and remove them. It provides an overview with charts and data collection, and a system page with multi-language and light/dark theme.The website also provides a kanban board page where you can create a new book and move it along three columns: new, active, and complete. When a book is marked as complete, it is moved to the reference table.",
    link_github: "https://github.com/mattiaTuri/Storage",
    link_preview: "https://storage-dun.vercel.app/",
    technology: [
      {
        name: "React v.18.2",
        icon: "mdi:react",
      },
      {
        name: "Typescript",
        icon: "mdi:language-typescript",
      },
      {
        name: "MUI",
        icon: "simple-icons:mui",
      },
      {
        name: "Tailwind css",
        icon: "mdi:tailwind",
      },
      {
        name: "React router",
        icon: "simple-icons:reactrouter",
      },
      {
        name: "Redux",
        icon: "akar-icons:redux-fill",
      },
      {
        name: "Apache echarts",
        icon: "simple-icons:apacheecharts",
      },
      {
        name: "Firebase",
        icon: "mdi:firebase",
      },
    ],
    img: dashboard,
    imgPosition: "center",
  },
  {
    id: "league-of-legends",
    title: "League of legends",
    subtitle: "The universe of the most famous MOBA",
    description:
      "The webpage is a comprehensive encyclopedia about the League of Legends universe, featuring details about champions and regions. It provides in-depth information about playable characters such as their available skins, story and others.",
    link_github: "https://github.com/mattiaTuri/LeagueOfLegends",
    link_preview: "https://league-of-legends-universe.vercel.app",
    technology: [
      {
        name: "Next.js v.13",
        icon: "teenyicons:nextjs-solid",
      },
      {
        name: "Typescript",
        icon: "mdi:language-typescript",
      },
      {
        name: "Tailwind css",
        icon: "mdi:tailwind",
      },
      {
        name: "i18next",
        icon: "simple-icons:i18next",
      },
      {
        name: "Framer motion",
        icon: "tabler:brand-framer-motion",
      },

      {
        name: "Swiper.js",
        icon: "simple-icons:swiper",
      },
    ],
    img: leagueoflegends,
    imgPosition: "40% 20%",
  },
  {
    id: "journal",
    title: "World Jounal",
    subtitle: "A clone of the New York Times",
    description:
      "The web page provides up-to-date newspaper news on various topics. The main page of every sections  provides a quick overview of the news, with captivating headlines and brief excerpts that capture the essence of each article. Users can click on articles of their interest to read the entire content and stay informed about the latest updates.",
    link_github: "https://github.com/mattiaTuri/Journal",
    link_preview: "https://world-journal-react.netlify.app/",
    technology: [
      {
        name: "React v.17",
        icon: "mdi:react",
      },
      {
        name: "MUI",
        icon: "simple-icons:mui",
      },
      {
        name: "React router",
        icon: "simple-icons:reactrouter",
      },
      {
        name: "Axios",
        icon: "simple-icons:axios",
      },
    ],
    img: worldjournal,
    imgPosition: "center",
  },
];
