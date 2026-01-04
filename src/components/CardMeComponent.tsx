import React from "react";
import Image from "next/image";
import DownloadCV from "@/components/DownloadCV";
import { Me } from "@/models/me";

async function CardMeComponent() {
    const meResponse = await fetch(process.env.NEXT_PUBLIC_API_URL + "private-api/me", {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: "Bearer " + process.env.API_SECRET,
        },
    });
    const me: Me = await meResponse.json();

    return (
        <div className={"border-white border card-cv mt-3 md:mt-0"}>
            <Image
                src={me.image}
                alt={"Ma photo"}
                className={"rounded-full w-3/5 mt-10 mx-auto border-2 border-primary"}
                width={200}
                height={200}
            />
            <p className={"text-center text-4xl "}>{me.name}</p>
            <p className={"text-center font-light"}>Développeur Full-Stack</p>
            <ul className={"p-6"}>
                <li className={"flex gap-2"}>
                    <Image src={"/icons/letter.svg"} alt={"Icone de lettre"} width="14" height="12" />
                    <a href={"mailto:maximilien.lemoine.pro@gmail.com"}>maximilien.lemoine.pro@gmail.com</a>
                </li>
                <li className={"flex gap-2"}>
                    <Image src={"/icons/location.svg"} alt={"Icone de localisation"} width="12" height="14" />
                    France
                </li>
                <li className={"flex gap-2"}>
                    <Image src={"/icons/link.svg"} alt={"Icone de lien"} width="14" height="14" />
                    <a href={"https://www.maximilien-lemoine.fr"} target={"_blank"} rel="noreferrer">
                        www.maximilien-lemoine.fr
                    </a>
                </li>
                <li>
                    <ul className={"flex mt-2 justify-evenly"}>
                        <li className={"bg-primary px-2 rounded-full font-bold text-background"}>PHP</li>
                        <li className={"bg-primary px-2 rounded-full font-bold text-background"}>JS</li>
                        <li className={"bg-primary px-2 rounded-full font-bold text-background"}>C#</li>
                        <li className={"bg-primary px-2 rounded-full font-bold text-background"}>React Native</li>
                    </ul>
                </li>
                <li>
                    <DownloadCV cvLink={me.cv} />
                </li>
            </ul>
        </div>
    );
}

export default CardMeComponent;
