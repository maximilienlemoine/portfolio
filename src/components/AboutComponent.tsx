import { Me } from "@/models/me";
import React from "react";

async function AboutComponent() {
    const meResponse = await fetch(process.env.NEXT_PUBLIC_API_URL + "private-api/me", {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + process.env.API_SECRET,
        },
    });
    const me: Me = await meResponse.json();

    return (
        <section className={"bg-backgroundSecondary section py-14 flex items-stretch"} id="about">
            <div className={"container flex flex-col lg:flex-row items-center pb-20"}>
                <div className={"flex flex-col items-center"}>
                    <p
                        className={
                            "text-3xl md:text-4xl bg-background inline-block p-3 border border-primary rounded-tl-3xl rounded-br-3xl"
                        }
                    >
                        A propos
                    </p>
                    <div className={"bg-background m-10 p-5 rounded-2xl"}>
                        <span>
                            <span className={"text-secondary"}>&lt;p&gt;</span>
                        </span>
                        <div className={"pl-3 py-2"} dangerouslySetInnerHTML={{ __html: me.description }}></div>
                        <span className={"text-secondary"}>&lt;p/&gt;</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutComponent;
