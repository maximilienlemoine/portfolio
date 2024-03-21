import React from 'react';

function NavComponent() {
    return (
        <header className={"bg-main "}>
            <nav className={'flex justify-between'}>
                <p className={''}><span className={'primary-color'}>&lt;C/&gt;</span> Maximilien LEMOINE</p>
                <ul className={'flex gap-2'}>
                    <li className={'hidden sm:block'}><a href={'#about'}>A propos</a></li>
                    <li className={'hidden sm:block'}><a href={'#projects'}>Projets</a></li>
                    <li><a href={'#contact'}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavComponent;