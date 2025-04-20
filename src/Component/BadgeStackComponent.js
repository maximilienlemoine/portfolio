import React from "react";
function BadgeComponent(props) {
    return (
        <li className="badge">
            <div key={props.title} className={"app-icon-size"}>
                <img src={props.icon} alt={props.title} className={"h-14 md:h-20 mb-4"} />
                <span className="badge-name">{props.title}</span>
            </div>
        </li>
    );
}

export default BadgeComponent;
