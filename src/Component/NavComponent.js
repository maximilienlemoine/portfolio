import React from 'react';
import LinkedInIcon from '../icons/linkedin.svg';
import GitHubIcon from '../icons/github.svg';

function NavComponent() {
    return (
        <header className={"py-10 px-5"}>
            <nav className={'flex justify-between mx-3'}>
                <div className={''}><span className={'text-primary'}>&lt;C/&gt;</span> Maximilien LEMOINE</div>
                <ul className={'flex gap-5'}>
                    <li>
                        <a href={'https://www.linkedin.com/in/maximilien-lemoine/'} className={'flex gap-2'}>
                            <img src={LinkedInIcon} alt={'Icone Linkedin'}/>
                            <span className={'hidden md:block'}> Linkedin</span>
                        </a>
                    </li>
                    <li>
                        <a href={'https://github.com/maximilienlemoine'} className={'flex gap-2'}>
                            <img src={GitHubIcon} alt={'Icone GitHub'}/>
                            <span className={'hidden md:block'}> GitHub</span>
                        </a>
                    </li>
                    <li className={'hidden sm:block'}><a href={'#about'}>A propos</a></li>
                    <li className={'hidden sm:block'}><a href={'#works'}>Réalisations</a></li>
                    <li className={'hidden sm:block'}><a href={'#contact'}>Contact</a></li>
                </ul>
            </nav>
        </header>

    );
}

export default NavComponent;