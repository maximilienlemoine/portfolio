import React from "react";
import FormContact from "@/components/FormContact";

async function ContactComponent() {
    return (
        <section className={"bg-background section py-14"} id="contact">
            <div>
                <div className={"flex flex-col items-center gap-4"}>
                    <p className={"text-3xl md:text-4xl bg-background p-3 text-primary text-center pb-0"}>Contact</p>
                    <hr className={"border-primary w-3/12 sm:w-2/12 lg:w-1/12 my-0"} />
                    <p className={"text-center"}>Disponible pour tout renseignement.</p>
                    <h3
                        className={
                            "text-2xl sm:text-3xl md:text-4xl text-primary bg-background m-10 inline-block p-3 border border-primary rounded-tl-3xl rounded-br-3xl"
                        }
                    >
                        Envoyez-moi un message!
                    </h3>
                    <a href={"mailto:maximilien.lemoine.pro@gmail.com"} className={"text-center"}>
                        maximilien.lemoine.pro@gmail.com
                    </a>
                    <p className={"text-center"}>Ou depuis ce formulaire !</p>
                </div>
                <FormContact />
            </div>
        </section>
    );
}

export default ContactComponent;
