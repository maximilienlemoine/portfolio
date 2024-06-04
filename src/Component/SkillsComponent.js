import ScrollComponent from "./ScrollComponent";
import React from "react";
import CardSkillComponent from "./CardSkillComponent";
import FrontEndIcon from "../icons/front-end.svg";
import BackEndIcon from "../icons/back-end.svg";
import MobileIcon from "../icons/mobile.svg";
import InteractiveIcon from "../icons/interactive.svg";
import NetworkIcon from "../icons/network.svg";
import ToolsIcon from "../icons/tools.svg";
import PhpIcon from "../icons/php.svg";
import JsIcon from "../icons/js.svg";
import ReactIcon from "../icons/react.svg";
import UnityIcon from "../icons/unity.svg";
import GodotIcon from "../icons/godot.svg";

function SkillsComponent() {
    return (
        <section className={'bg-background section'} id='skills'>
            <ScrollComponent/>
            <div>
                <div className={'flex flex-col items-center gap-3'}>
                    <p className={'text-3xl md:text-4xl bg-background p-3 text-primary text-center pb-0'}>Compétences</p>
                    <hr className={'border-primary w-3/12 sm:w-2/12 lg:w-1/12 my-0'}/>
                    <p className={'text-center'}>Je n'arrête jamais d'apprendre et de m'améliorer.</p>
                </div>
                <div className={'flex flex-col md:flex-row justify-center flex-wrap items-center gap-8 mt-10'}>
                    <CardSkillComponent skillTitle={'Front-end'} skillDescription={'JavaScript (React, Vue.js), Tailwind'} skillImage={FrontEndIcon}/>
                    <CardSkillComponent skillTitle={'Back-end'} skillDescription={'PHP (Symfony), Node.js (Express.js), Sql'} skillImage={BackEndIcon}/>
                    <CardSkillComponent skillTitle={'Développement Mobile'} skillDescription={'React Native'} skillImage={MobileIcon}/>
                    <CardSkillComponent skillTitle={'Dispositif interactif'} skillDescription={'C#, Unity, Godot, Blender'} skillImage={InteractiveIcon}/>
                    <CardSkillComponent skillTitle={'Administration Réseau'} skillDescription={'Linux, Docker'} skillImage={NetworkIcon}/>
                    <CardSkillComponent skillTitle={'Outils de développement'} skillDescription={'Git, GitHub, PhpStorm'} skillImage={ToolsIcon}/>
                </div>
                <div className={'flex flex-row flex-wrap justify-evenly items-center gap-10 my-10 lg:my-20'}>
                    <div>
                        <img src={PhpIcon} alt={'Php'} className={'w-28 h-28 bg-php p-4 rounded-full'}/>
                        <p className={'text-center text-xl ubuntu mt-3'}>PHP</p>
                    </div>
                    <div>
                        <img src={JsIcon} alt={'JavaScript'} className={'w-28 h-28 bg-javascript p-4 rounded-full'}/>
                        <p className={'text-center text-xl ubuntu mt-3'}>JavaScript</p>
                    </div>
                    <div>
                        <img src={ReactIcon} alt={'React'} className={'w-28 h-28 bg-react p-4 rounded-full'}/>
                        <p className={'text-center text-xl ubuntu mt-3'}>React Native</p>
                    </div>
                    <div>
                        <img src={UnityIcon} alt={'Unity'} className={'w-28 h-28 bg-unity p-4 rounded-full'}/>
                        <p className={'text-center text-xl ubuntu mt-3'}>Unity</p>
                    </div>
                    <div>
                        <img src={GodotIcon} alt={'Godot'} className={'w-28 h-28 bg-godot p-4 rounded-full'}/>
                        <p className={'text-center text-xl ubuntu mt-3'}>Godot</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsComponent;