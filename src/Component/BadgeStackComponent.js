import React from 'react';
import PhpIcon from '../icons/php.svg';
import JsIcon from '../icons/js.svg';
import ReactIcon from '../icons/react.svg';
import SymfonyIcon from '../icons/symfony.svg';
import UnityIcon from '../icons/unity.svg';
import CSharpIcon from '../icons/csharp.svg';
import VueJsIcon from '../icons/vuejs.svg';

function BadgeComponent(props) {
    const techStack = props.techStack;

    const renderIcon = (tech) => {
        switch (tech) {
            case 'PHP':
                return <img src={PhpIcon} alt={'PHP'} className={'w-14 md:w-20 h-14 md:h-20'}/>;
            case 'JS':
            case 'Node.js':
                return <img src={JsIcon} alt={'JavaScript'} className={'w-14 md:w-20 h-14 md:h-20'}/>;
            case 'React':
            case 'React Native':
                return <img src={ReactIcon} alt={'React'} className={'w-14 md:w-20 h-14 md:h-20'}/>;
            case 'Symfony':
                return <img src={SymfonyIcon} alt={'Symfony'} className={'w-14 md:w-20 h-14 md:h-20'}/>;
            case 'Unity':
                return <img src={UnityIcon} alt={'Unity'} className={'w-14 md:w-20 h-14 md:h-20'}/>;
            case 'C#':
                return <img src={CSharpIcon} alt={'C#'} className={'w-14 md:w-20 h-14 md:h-20'}/>;
            case 'Vue.js':
                return <img src={VueJsIcon} alt={'Vue.js'} className={'w-14 md:w-20 h-14 md:h-20'}/>;
            default:
                return null;
        }
    };

    return (
        <div className="badge">
            {techStack.map((tech, index) => (
                <div key={index}>
                    {renderIcon(tech)}
                    <span className="badge-name">{tech}</span>
                </div>
            ))}
        </div>
    );
}

export default BadgeComponent;