import React from 'react';
import PhpIcon from '../icons/php.svg';
import JsIcon from '../icons/js.svg';
import ReactIcon from '../icons/react.svg';
import SymfonyIcon from '../icons/symfony.svg';
import UnityIcon from '../icons/unity.svg';
import CSharpIcon from '../icons/csharp.svg';
import VueJsIcon from '../icons/vuejs.svg';
import ThreeJsIcon from '../icons/Threejs.svg';

function BadgeComponent(props) {
    const techStack = props.techStack;

    const renderIcon = (tech) => {
        switch (tech) {
            case 'PHP':
                return <img src={PhpIcon} alt={'Logo de PHP'} className={'w-14 md:w-20 h-14 md:h-20'}/>;
            case 'JS':
            case 'Node.js':
                return <img src={JsIcon} alt={'Logo de JavaScript'} className={'w-14 md:w-20 h-14 md:h-20'}/>;
            case 'React':
            case 'React Native':
                return <img src={ReactIcon} alt={'Logo de React'} className={'w-14 md:w-20 h-14 md:h-20'}/>;
            case 'Symfony':
                return <img src={SymfonyIcon} alt={'Logo de Symfony'} className={'w-14 md:w-20 h-14 md:h-20'}/>;
            case 'Unity':
                return <img src={UnityIcon} alt={'Logo de Unity'} className={'w-14 md:w-20 h-14 md:h-20'}/>;
            case 'C#':
                return <img src={CSharpIcon} alt={'Logo de C#'} className={'w-14 md:w-20 h-14 md:h-20'}/>;
            case 'Vue.js':
                return <img src={VueJsIcon} alt={'Logo de Vue.js'} className={'w-14 md:w-20 h-14 md:h-20'}/>;
            case 'Three.js':
                return <img src={ThreeJsIcon} alt={'Logo de Three.js'} className={'w-14 md:w-20 h-14 md:h-20'}/>;
            default:
                return null;
        }
    };

    return (
        <li className="badge">
            {techStack.map((tech, index) => (
                <div key={index}>
                    {renderIcon(tech)}
                    <span className="badge-name">{tech}</span>
                </div>
            ))}
        </li>
    );
}

export default BadgeComponent;