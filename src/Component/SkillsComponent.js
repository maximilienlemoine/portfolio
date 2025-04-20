import React, { useEffect, useState } from "react";
import CardSkillComponent from "./CardSkillComponent";
import CardStackComponent from "./CardStackComponent";

function SkillsComponent() {
    const [skills, setSkills] = useState([]);
    const [stacks, setStacks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API_URL + "private-api/skill/get", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + process.env.REACT_APP_API_SECRET,
                    },
                });
                const data = await response.json();
                setSkills(data);
            } catch (error) {
                console.error("Error:", error);
            }

            try {
                const response = await fetch(process.env.REACT_APP_API_URL + "private-api/stack/get", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + process.env.REACT_APP_API_SECRET,
                    },
                });
                const data = await response.json();
                setStacks(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className={"bg-background section py-14"} id="skills">
            <div>
                <div className={"flex flex-col items-center gap-3"}>
                    <p className={"text-3xl md:text-4xl bg-background p-3 text-primary text-center pb-0"}>
                        Compétences
                    </p>
                    <hr className={"border-primary w-3/12 sm:w-2/12 lg:w-1/12 my-0"} />
                    <p className={"text-center"}>Je n'arrête jamais d'apprendre et de m'améliorer.</p>
                </div>
                <div className={"flex flex-col md:flex-row justify-center flex-wrap items-center gap-8 mt-10"}>
                    {skills.map((skill, index) => {
                        return (
                            <CardSkillComponent
                                key={index}
                                skillTitle={skill.title}
                                skillDescription={skill.stacks.map((stack, index) => {
                                    return (
                                        <span key={index}>
                                            {stack.title}
                                            {index < skill.stacks.length - 1 ? ", " : ""}
                                        </span>
                                    );
                                })}
                                skillImage={skill.icon}
                            />
                        );
                    })}
                </div>
                <div className={"flex flex-row flex-wrap justify-evenly items-center mx-10 gap-10 my-10 lg:my-20"}>
                    {stacks.map((stack, index) => {
                        return (
                            <CardStackComponent key={index} title={stack.title} icon={stack.icon} color={stack.color} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default SkillsComponent;
