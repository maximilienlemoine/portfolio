import React, { useEffect } from "react";
import CardWorkComponent from "./CardWorkComponent";
import CircleLeftIcon from "../icons/circle-left.svg";
import CircleRightIcon from "../icons/circle-right.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function WorksComponent() {
    const [works, setWorks] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API_URL + "private-api/project/get", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + process.env.REACT_APP_API_SECRET,
                    },
                });
                const data = await response.json();
                setWorks(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);

    const renderCenterRightControls = ({ nextDisabled, nextSlide }) => (
        <button
            className={"bg-background p-2 rounded-full mr-3"}
            disabled={nextDisabled}
            onClick={nextSlide}
            aria-label="Go to next slide"
        >
            <img src={CircleRightIcon} alt={"Icone de flèche droite"} className={"w-5 md:w-7"} />
        </button>
    );

    const renderCenterLeftControls = ({ previousDisabled, previousSlide }) => (
        <button
            className={"bg-background p-2 rounded-full ml-3"}
            disabled={previousDisabled}
            onClick={previousSlide}
            aria-label="Go to previous slide"
        >
            <img src={CircleLeftIcon} alt={"Icone de flèche gauche"} className={"w-5 md:w-7"} />
        </button>
    );

    return (
        <section className={"bg-backgroundSecondary section py-14"} id="works">
            <div className={"flex flex-col items-center gap-5"}>
                <p className={"text-3xl md:text-4xl p-3 text-primary text-center pb-0"}>Réalisations</p>
                <hr className={"border-primary w-3/12 sm:w-2/12 lg:w-1/12 my-0"} />
                <p className={"text-center"}>Sélection de réalisation disponible.</p>
            </div>
            <div className={"flex justify-center "}>
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    centerMode={true}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={9999}
                    centerSlidePercentage={100}
                    renderCenterLeftControls={renderCenterLeftControls}
                    renderCenterRightControls={renderCenterRightControls}
                    className={"w-11/12 md:w-10/12 my-10 md:my-20"}
                >
                    {works.map((work, index) => {
                        return (
                            <CardWorkComponent
                                key={index}
                                workTitle={work.title}
                                workGoal={work.goals.map((goal, index) => {
                                    return [goal.title];
                                })}
                                workDescription={work.description}
                                workWebLink={work.projectLink}
                                workCodeLink={work.sourceCodeLink}
                                workStack={work.stacks.map((stack, index) => {
                                    return [stack.title, stack.icon];
                                })}
                            />
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
}

export default WorksComponent;
