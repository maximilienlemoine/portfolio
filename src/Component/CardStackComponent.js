import React from "react";

function CardStackComponent(props) {
    return (
        <div className={'app-stack-icon-size'}>
            <img src={props.icon} alt={'logo de '+props.title} style={{backgroundColor: props.color}} className={'w-28 h-28 p-4 rounded-full'}/>
            <p className={'text-center text-xl ubuntu mt-3'}>{props.title}</p>
        </div>
    );
}

export default CardStackComponent;