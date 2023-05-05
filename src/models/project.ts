import { StaticImageData } from "next/image";

export interface Project{
    id:string;
    title:string;
    subtitle: string;
    description:string;
    technology: string[];
    img:StaticImageData;
    imgPosition: string;
}