import CardSkillComponent from "./CardSkillComponent";
import CardStackComponent from "./CardStackComponent";
import { Skill } from "@/models/skill";
import { Stack } from "@/models/stack";

async function SkillsComponent() {
    const skillsResponse = await fetch(process.env.NEXT_PUBLIC_API_URL + "private-api/skill", {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
            Authorization: "Bearer " + process.env.API_SECRET,
        },
    });
    const skills: Skill[] = await skillsResponse.json();

    const stackResponse = await fetch(process.env.NEXT_PUBLIC_API_URL + "private-api/stack", {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
            Authorization: "Bearer " + process.env.API_SECRET,
        },
    });
    const stacks: Stack[] = await stackResponse.json();

    return (
        <section className={"bg-background section py-14"} id="skills">
            <div>
                <div className={"flex flex-col items-center gap-3"}>
                    <p className={"text-3xl md:text-4xl bg-background p-3 text-primary text-center pb-0"}>
                        Compétences
                    </p>
                    <hr className={"border-primary w-3/12 sm:w-2/12 lg:w-1/12 my-0"} />
                    <p className={"text-center"}>Je n&#39;arrête jamais d&#39;apprendre et de m&#39;améliorer.</p>
                </div>
                <div className={"flex flex-col md:flex-row justify-center flex-wrap items-center gap-8 mt-10"}>
                    {skills.map((skill, index) => {
                        return <CardSkillComponent key={index} skill={skill} />;
                    })}
                </div>
                <div className={"flex flex-row flex-wrap justify-evenly items-center mx-10 gap-10 my-10 lg:my-20"}>
                    {stacks.map((stack, index) => {
                        return <CardStackComponent key={index} stack={stack} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default SkillsComponent;
