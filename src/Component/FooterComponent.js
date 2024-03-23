import React from "react";
import LinkedInIcon from "../icons/footer-linkedin.svg";
import GitHubIcon from "../icons/footer-github.svg";

function FooterComponent() {
    const date = new Date();
    return (
        <footer className={'bg-background ubuntu py-5 text-center'}>
            <hr className={'border-gray m-5'}/>
            <div className={'flex flex-col-reverse sm:flex-row justify-evenly items-center gap-5'}>
                <p>© {date.getFullYear()} Maximilien Lemoine - Tous droits réservés</p>
                <div className={'flex'}>
                    <a href={'https://www.linkedin.com/in/maximilien-lemoine/'} className={'bg-secondary rounded-full p-3'}>
                        <img src={LinkedInIcon} alt={'Icone de linkedin'}/>
                    </a>
                    <a href={'https://github.com/maximilienlemoine/'} className={'text-primary ml-5'}>
                        <img src={GitHubIcon} alt={'Icone de GitHub'} className={'bg-secondary rounded-full p-3'}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;