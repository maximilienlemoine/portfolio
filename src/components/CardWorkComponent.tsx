import React from "react";
import BadgeStackComponent from "./BadgeStackComponent";
import { Stack } from "@/models/stack";
import { Project } from "@/models/project";

type CardProjectProps = {
    project: Project;
};

function CardWorkComponent({ project }: CardProjectProps) {
    return (
        <div className="flex flex-col gap-5 lg:gap-10 items-center content-center justify-center">
            <h4 className={"text-xl md:text-4xl ubuntu"}>{project.title}</h4>
            <div>
                Objectif{project.goals.length > 1 ? "s" : ""} :
                <ul>
                    {project.goals.map((goal, index) => (
                        <li key={index}>- {goal.title}</li>
                    ))}
                </ul>
            </div>
            <p className={"lg:text-xl lg:w-3/5 md:w-4/5"}>{project.description}</p>
            {project.projectLink ? (
                <a href={"https://" + project.projectLink} target={"_blank"} rel="noreferrer" className={"text-sm"}>
                    Lien du projet : <span className={"text-secondary"}>{project.projectLink}</span>
                </a>
            ) : null}
            {project.sourceCodeLink ? (
                <a href={"https://" + project.sourceCodeLink} target={"_blank"} rel="noreferrer" className={"text-sm"}>
                    Lien vers le code : <span className={"text-secondary"}>{project.sourceCodeLink}</span>
                </a>
            ) : null}
            {project.stacks ? (
                <ul className={"flex flex-row flex-wrap justify-evenly items-center gap-5"}>
                    {project.stacks.map((stack: Stack, index: number) => (
                        <BadgeStackComponent key={index} title={stack.title} icon={stack.icon} />
                    ))}
                </ul>
            ) : null}
        </div>
    );
}

export default CardWorkComponent;
