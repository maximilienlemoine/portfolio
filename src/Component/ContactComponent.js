import ScrollComponent from "./ScrollComponent";
import React from "react";
import SendIcon from "../icons/send.svg";
import Mailjet, {Client as MailJet} from "node-mailjet";

function ContactComponent() {
    const mailjet = MailJet.apiConnect(
        `${process.env.REACT_APP_MAILJET_API_KEY}`,
        `${process.env.REACT_APP_MAILJET_SECRET_KEY}`,
    );

    const sendEmail = async () => {
        const request = await mailjet.post('send', {'version': 'v3.1'})
            .request({
                "Messages": [
                    {
                        "From": {
                            "Email": process.env.REACT_APP_MAILJET_SENDER_EMAIL,
                            "Name": process.env.REACT_APP_MAILJET_SENDER_NAME
                        },
                        "To": [
                            {
                                "Email": "maximilien.lemoine.pro@gmail.com",
                                "Name": "TEST"
                            }
                        ],
                        "Subject": "TEST",
                        "TextPart": "TEESSST",
                        "HTMLPart": "TEEEESTT",
                    }
                ]
            });
        console.log(request);
    }

    return (
        <section className={'bg-background section py-14'} id='contact'>
            <ScrollComponent/>
            <div>
                <div className={'flex flex-col items-center gap-4'}>
                    <h2 className={'text-3xl md:text-4xl bg-background p-3 text-primary text-center pb-0'}>Contact</h2>
                    <hr className={'border-primary w-3/12 sm:w-2/12 lg:w-1/12 my-0'}/>
                    <p className={'text-center'}>Disponible pour tout renseignement.</p>
                    <h3 className={'text-2xl sm:text-3xl md:text-4xl text-primary bg-background m-10 inline-block p-3 border border-primary rounded-tl-3xl rounded-br-3xl'}>
                        Envoyez-moi un message!
                    </h3>
                </div>
                <form className={'flex flex-col items-center gap-3 gap-y-12 mt-10'}>
                    <div className={'container flex flex-col md:flex-row items-center gap-3 md:gap-28 md:w-4/6'}>
                        <label className={'flex flex-col text-primary w-5/6 md:w-3/6'}>
                            Nom *
                            <input
                                type={'text'}
                                placeholder={'Reinseignez votre nom complet'}
                                className={'p-3 bg-background border-0 border-secondary border-b-2 text-white'}
                            />
                        </label>
                        <label className={'flex flex-col text-primary w-5/6 md:w-3/6'}>
                            Email *
                            <input
                                type={'email'}
                                placeholder={'Renseignez votre adresse email'}
                                className={'p-3 bg-background border-0 border-secondary border-b-2 text-white'}
                            />
                        </label>
                    </div>
                    <label className={'container flex flex-col text-primary w-5/6 sm:w-9/12 md:w-4/6'}>
                        Message *
                        <textarea
                            placeholder={'Renseignez votre message ici...'}
                            className={'p-3 bg-background border-0 border-secondary border-b-2 text-white'}
                        />
                    </label>
                    <button
                        className={'bg-primary text-background p-3 rounded-2xl flex items-center text-xl ubuntu'}
                        onClick={sendEmail}
                    >
                        Envoyer
                        <img src={SendIcon} alt={'send'} className={'w-5 h-5 ml-2'}/>
                    </button>
                </form>

            </div>
        </section>
    );
}

export default ContactComponent;