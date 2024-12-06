import { Tag } from "./Tag";

export interface Project{

    id: number;
    name:string;
    summary: string;
    description: string;
    projectsLink: string;
    pictures: string[];
    tags: Tag[]
}