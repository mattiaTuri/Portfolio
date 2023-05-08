import { StaticImageData } from "next/image";

export interface Project{
    id:string;
    title:string;
    subtitle: string;
    description:string;
    link_github:string;
    link_preview:string;
    technology: Technology[];
    img:StaticImageData;
    imgPosition: string;
}

interface Technology{
    name:string;
    icon:string;
}