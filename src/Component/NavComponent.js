import React from 'react';

function NavComponent() {
    return (
        <header className={"bg-main"}>
            <nav>
                <p><span>&lt;C/&gt;</span><span/> Maximilien LEMOINE</p>
                <ul>
                    <li><a href={".bg-main"}>Home</a></li>
                    <li><a href={".bg-main"}>About</a></li>
                    <li><a href={".bg-main"}>Services</a></li>
                    <li><a href={".bg-main"}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavComponent;