import Image from "next/image";
import { Skill } from "@/models/skill";

type CardSkillProps = {
    skill: Skill;
};

function CardSkillComponent({ skill }: CardSkillProps) {
    return (
        <div className="basis-1 md:basis-1/2 lg:basis-1/3 card-skill bg-primary p-5 w-80 text-background rounded-md border-secondary border-0 border-l-8">
            <Image src={skill.icon} alt={skill.title} className={"w-5 h-5 mx-auto"} width={20} height={20} />
            <h3 className={"text-xl text-center"}>{skill.title}</h3>
            <p className={"text-center"}>
                {skill.stacks &&
                    skill.stacks.map((stack, index) => {
                        return (
                            <span key={index}>
                                {stack.title}
                                {index < skill.stacks.length - 1 ? ", " : ""}
                            </span>
                        );
                    })}
            </p>
        </div>
    );
}

export default CardSkillComponent;
