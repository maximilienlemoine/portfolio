import React from "react";
import Image from "next/image";
import { Stack } from "@/models/stack";

type CardStackProps = {
    stack: Stack;
};

function CardStackComponent({ stack }: CardStackProps) {
    return (
        <div className={"app-stack-icon-size flex items-center flex-col"}>
            <div className="p-4 rounded-full" style={{ backgroundColor: stack.color }}>
                <Image
                    src={stack.icon}
                    alt={"Logo de " + stack.title}
                    className={"w-12 h-12 m-2"}
                    width={48}
                    height={48}
                />
            </div>
            <p className={"text-center text-xl ubuntu mt-3"}>{stack.title}</p>
        </div>
    );
}

export default CardStackComponent;
