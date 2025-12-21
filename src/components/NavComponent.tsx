import React from "react";
import Image from "next/image";

async function NavComponent() {
    return (
        <header className={"py-10 px-5"}>
            <nav className={"flex justify-between mx-3"}>
                <div>
                    <span className={"text-primary"}>&lt;ML/&gt;</span> Maximilien LEMOINE
                </div>
                <ul className={"flex gap-5"}>
                    <li>
                        <a href={"https://www.linkedin.com/in/maximilien-lemoine/"} className={"flex gap-2"}>
                            <Image src={"/icons/linkedin.svg"} alt={"Icone de Linkedin"} width="20" height="19" />
                            <span className={"hidden md:block"}> Linkedin</span>
                        </a>
                    </li>
                    <li>
                        <a href={"https://github.com/maximilienlemoine"} className={"flex gap-2"}>
                            <Image src={"/icons/github.svg"} alt={"Icone de GitHub"} width="18" height="18" />
                            <span className={"hidden md:block"}> GitHub</span>
                        </a>
                    </li>
                    <li className={"hidden sm:block"}>
                        <a href={"#about"}>A propos</a>
                    </li>
                    <li className={"hidden sm:block"}>
                        <a href={"#works"}>Réalisations</a>
                    </li>
                    <li className={"hidden sm:block"}>
                        <a href={"#contact"}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavComponent;
