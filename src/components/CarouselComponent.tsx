"use client";

import { Project } from "@/models/project";
import CardWorkComponent from "@/components/CardWorkComponent";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

type CarouselProps = {
    projects: Project[];
};

export default function CarouselComponent({ projects }: CarouselProps) {
    const renderCenterRightControls = (clickHandler: () => void, hasNext: boolean) => {
        return (
            <button
                type="button"
                onClick={clickHandler}
                disabled={!hasNext}
                aria-label="Projet suivant"
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-background rounded-full w-6 md:w-8 lg:w-10"
            >
                <Image
                    src="/icons/circle-right.svg"
                    alt="Icone flèche droite"
                    width={20}
                    height={20}
                    className="w-5 md:w-7"
                />
            </button>
        );
    };

    const renderCenterLeftControls = (clickHandler: () => void, hasPrev: boolean) => {
        return (
            <button
                type="button"
                onClick={clickHandler}
                disabled={!hasPrev}
                aria-label="Projet précédent"
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-background rounded-full w-6 md:w-8 lg:w-10"
            >
                <Image
                    src="/icons/circle-left.svg"
                    alt="Icone flèche gauche"
                    width={20}
                    height={20}
                    className="w-5 md:w-7"
                />
            </button>
        );
    };

    return (
        <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            centerMode={true}
            infiniteLoop={false}
            autoPlay={true}
            interval={9999}
            centerSlidePercentage={100}
            renderArrowPrev={renderCenterLeftControls}
            renderArrowNext={renderCenterRightControls}
            className={"relative w-11/12 md:w-10/12 my-10 md:my-20"}
        >
            {projects.map((project: Project, index) => {
                return <CardWorkComponent key={index} project={project} />;
            })}
        </Carousel>
    );
}
