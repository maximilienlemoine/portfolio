import React from "react";
import CardMeComponent from "./CardMeComponent";

function HeroComponent() {
    return (
        <section className={"pb-10 hero"}>
            <p className={"text-secondary text-center hidden md:block text-7xl py-10 pt-20"}>Développeur</p>
            <div className={"flex flex-col items-center xl:flex-row xl:justify-evenly"}>
                <CardMeComponent />
                <div className={"mx-4 my-7 xl:my-0"}>
                    <div>
                        <span className={"text-secondary"}>&lt;h1&gt;</span>
                        <br />
                        <h1 className={"text-3xl sm:text-5xl md:text-6xl pl-5 inline-block"}>
                            Hey,
                            <br /> Je suis <span className={"text-primary"}>Maximilien</span>,<br /> Développeur
                            Full-Stack.
                        </h1>
                        <br />
                        <span className={"text-secondary"}>&lt;h1/&gt;</span>
                    </div>
                    <div className={"mt-5"}>
                        <span className={"text-secondary"}>&lt;p&gt;</span>
                        <h2 className={"font-light pl-5"}>
                            J'aime créer des expériences Web incroyables. Si vous recherchez un développeur qui aime
                            faire avancer les choses,
                        </h2>
                        <span className={"text-secondary"}>&lt;p/&gt;</span>
                    </div>
                    <div className={"mt-3"}>
                        <span className={"text-secondary"}>&lt;a&gt;</span>
                        <br />
                        <a href={"#contact"} className={"text-primary text-2xl pl-5"}>
                            Contactez moi !
                        </a>{" "}
                        <br />
                        <span className={"text-secondary"}>&lt;a/&gt;</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroComponent;
