import React from "react";
import BadgeStackComponent from "./BadgeStackComponent";

function CardWorkComponent(work) {
    return (
        <div className="flex flex-col gap-5 lg:gap-10 items-center content-center justify-center">
            {work.workImage ? <img src={work.workImage} alt={work.workTitle}/> : null}
            <h4 className={'text-xl md:text-4xl ubuntu'}>{work.workTitle}</h4>
            <p className={'lg:text-xl'}>{work.workDescription}</p>
            {work.workWebLink ?
                <a href={'https://' + work.workWebLink} target={'_blank'} rel="noreferrer" className={'text-sm'}>
                    Lien du projet : <span className={'text-secondary'}>{work.workWebLink}</span>
                </a>
                : null
            }
            {work.workCodeLink ?
                <a href={'https://' + work.workCodeLink} target={'_blank'} rel="noreferrer" className={'text-sm'}>
                    Lien vers le code : <span className={'text-secondary'}>{work.workCodeLink}</span>
                </a>
                : null
            }
            {work.workStack ?
                <ul className={'flex flex-row flex-wrap justify-evenly items-center gap-5'}>
                    {work.workStack.map((stack, index) => (
                        <BadgeStackComponent key={index} techStack={[stack]} />
                    ))}
                </ul>
                : null
            }
        </div>
    );
}

export default CardWorkComponent;