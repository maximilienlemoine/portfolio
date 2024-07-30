import React from "react";

function CardStackComponent(props) {
    return (
        <div className={'app-stack-icon-size flex items-center flex-col'}>
            <div className="p-4 rounded-full" style={{backgroundColor: props.color}}>
                <img src={props.icon} alt={'logo de ' + props.title} className={'w-24 h-24 m-2'}/>
            </div>
            <p className={'text-center text-xl ubuntu mt-3'}>{props.title}</p>
        </div>
    );
}

export default CardStackComponent;