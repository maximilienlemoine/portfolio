import React from "react";
import Image from "next/image";

async function FooterComponent() {
    const date = new Date();
    return (
        <footer className={"bg-background ubuntu py-5 text-center"}>
            <hr className={"border-gray m-5"} />
            <div className={"flex flex-col-reverse sm:flex-row justify-evenly items-center gap-5"}>
                <p>© 2025 - {date.getFullYear()} Maximilien Lemoine - Tous droits réservés</p>
                <div className={"flex"}>
                    <a
                        href={"https://www.linkedin.com/in/maximilien-lemoine/"}
                        className={"bg-secondary rounded-full p-3"}
                    >
                        <Image src={"/icons/footer-linkedin.svg"} alt={"Icone de linkedin"} width="20" height="19" />
                    </a>
                    <a href={"https://github.com/maximilienlemoine/"} className={"bg-secondary rounded-full p-3 ml-5"}>
                        <Image src={"/icons/footer-github.svg"} alt={"Icone de GitHub"} width="20" height="20" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;
