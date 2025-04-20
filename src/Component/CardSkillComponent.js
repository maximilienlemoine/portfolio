function CardSkillComponent(props) {
    return (
        <div className="basis-1 md:basis-1/2 lg:basis-1/3 card-skill bg-primary p-5 w-80 text-background rounded-md border-secondary border-0 border-l-8">
            <img src={props.skillImage} alt={props.skillTitle} className={"w-5 h-5 mx-auto"} />
            <h3 className={"text-xl text-center"}>{props.skillTitle}</h3>
            <p className={"text-center"}>{props.skillDescription}</p>
        </div>
    );
}

export default CardSkillComponent;
