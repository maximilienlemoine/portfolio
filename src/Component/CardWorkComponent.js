import React from "react";
import BadgeStackComponent from "./BadgeStackComponent";

function CardWorkComponent(work) {
    return (
        <div className="flex flex-col gap-5 lg:gap-10 items-center content-center justify-center">
            {work.workImage ? <img src={work.workImage} alt={work.workTitle} /> : null}
            <h4 className={"text-xl md:text-4xl ubuntu"}>{work.workTitle}</h4>
            <div>
                Objectif{work.workGoal.length > 1 ? "s" : ""} :
                <ul>
                    {work.workGoal.map((goal, index) => (
                        <li key={index}>- {goal}</li>
                    ))}
                </ul>
            </div>
            <p className={"lg:text-xl lg:w-3/5 md:w-4/5"}>{work.workDescription}</p>
            {work.workWebLink ? (
                <a href={"https://" + work.workWebLink} target={"_blank"} rel="noreferrer" className={"text-sm"}>
                    Lien du projet : <span className={"text-secondary"}>{work.workWebLink}</span>
                </a>
            ) : null}
            {work.workCodeLink ? (
                <a href={"https://" + work.workCodeLink} target={"_blank"} rel="noreferrer" className={"text-sm"}>
                    Lien vers le code : <span className={"text-secondary"}>{work.workCodeLink}</span>
                </a>
            ) : null}
            {work.workStack ? (
                <ul className={"flex flex-row flex-wrap justify-evenly items-center gap-5"}>
                    {work.workStack.map((stack, index) => (
                        <BadgeStackComponent key={index} title={[stack[0]]} icon={[stack[1]]} />
                    ))}
                </ul>
            ) : null}
        </div>
    );
}

export default CardWorkComponent;
