import MaximilienImage from "../images/maximilien.webp";
import LetterIcon from "../icons/letter.svg";
import LocationIcon from "../icons/location.svg";
import LinkIcon from "../icons/link.svg";
import DownloadIcon from "../icons/download.svg";
import React from "react";

function CardMeComponent() {
    return (
        <div className={"border-white border card-cv mt-10 md:mt-0"}>
            <img
                src={MaximilienImage}
                alt={"Photographie de Maximilien"}
                height={200}
                width={200}
                className={"rounded-full w-3/5 mt-10 mx-auto border-2 border-primary"}
            />
            <p className={"text-center text-4xl "}>Maximilien</p>
            <p className={"text-center font-light"}>Développeur Full-Stack</p>
            <ul className={"p-6"}>
                <li className={"flex gap-2"}>
                    <img src={LetterIcon} alt={"Icone de lettre"} />
                    <a href={"mailto:maximilien.lemoine.pro@gmail.com"}>maximilien.lemoine.pro@gmail.com</a>
                </li>
                <li className={"flex gap-2"}>
                    <img src={LocationIcon} alt={"Icone de localisation"} /> France
                </li>
                <li className={"flex gap-2"}>
                    <img src={LinkIcon} alt={"Icone de lien"} />
                    <a href={"https://www.maximilien-lemoine.fr"} target={"_blank"} rel="noreferrer">
                        www.maximilien-lemoine.fr
                    </a>
                </li>
                <li>
                    <ul className={"flex mt-2 justify-evenly"}>
                        <li className={"bg-primary px-2 rounded-full font-bold text-background"}>PHP</li>
                        <li className={"bg-primary px-2 rounded-full font-bold text-background"}>JS</li>
                        <li className={"bg-primary px-2 rounded-full font-bold text-background"}>C#</li>
                        <li className={"bg-primary px-2 rounded-full font-bold text-background"}>React Native</li>
                    </ul>
                </li>
                <li>
                    <button
                        className={"bg-white text-background ubuntu rounded-full p-2 mt-4 mx-auto flex gap-2 font-bold"}
                        onClick={() =>
                            window.open("https://www.maximilien-lemoine.fr/CV_Maximilien_LEMOINE.pdf", "_blank")
                        }
                    >
                        Curriculum Vitae <img src={DownloadIcon} alt={"Icone de téléchargement"} />
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default CardMeComponent;
