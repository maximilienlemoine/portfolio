import React from "react";
import Image from "next/image";

function BadgeComponent(props: { title: string; icon: string }) {
    return (
        <li className="badge">
            <div key={props.title} className={"app-icon-size"}>
                <Image src={props.icon} alt={props.title} className={"h-14 md:h-20 mb-4"} width={56} height={56} />
                <span className="badge-name">{props.title}</span>
            </div>
        </li>
    );
}

export default BadgeComponent;
