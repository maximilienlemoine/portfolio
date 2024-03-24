import ScrollComponent from "./ScrollComponent";
import React, {useEffect, useState} from "react";
import SendIcon from "../icons/send.svg";
import CloseIcon from "../icons/xmark.svg";

function ContactComponent() {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [formErrors, setFormErrors] = useState({name: '', email: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [flashMessage, setFlashMessage] = useState('');

    useEffect(() => {
        if (isLoading) {
            return sendEmail();
        }
    }, [isLoading]);

    const sendEmail = async () => {
        if (isErrors())
            return;

        try {
            const response = await fetch(process.env.REACT_APP_BACK_APP_URL + '/send-email', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            setFlashMessage(data.message);
            if (response.ok) {
                setFormData({name: '', email: '', message: ''});
            }
        } catch (e) {
            console.error(e);
        }
        setIsLoading(false);
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        handleErrors(e);
    }

    const isErrors = () => {
        return !!(formErrors.name || formErrors.email || formErrors.message);
    }

    const handleErrors = (e) => {
        setFormErrors({name: '', email: '', message: ''});

        // Check if name is not null
        if (!formData.name.trim()) {
            setFormErrors((errors) => ({...errors, name: 'Renseignez votre nom.'}));
        }

        // Check if email is not null and is a valid email
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            setFormErrors((errors) => ({...errors, email: 'Renseignez une adresse email valide.'}));
        }

        // Check if message is not null
        if (!formData.message.trim()) {
            setFormErrors((errors) => ({...errors, message: 'Renseignez un message.'}));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleErrors(e);

        setIsLoading(true);
    }

    const clearFlash = () => {
        setFlashMessage('');
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
                <div className="flex justify-center">
                    <div
                        className={'text-background p-2 rounded-md ubuntu md:text-xl bg-red-300 w-4/6 flex justify-between'}>
                        <p>Formulaire momentanément indisponible, veuillez utiliser l'adresse : <a href={'mailto:maximilien.lemoine.pro@gmail.com'}>maximilien.lemoine.pro@gmail.com</a></p>
                    </div>
                </div>
                {flashMessage && <div className="flex justify-center">
                    <div
                        className={'text-background p-2 rounded-md ubuntu md:text-xl bg-green-500 w-4/6 flex justify-between'}>
                        <p>{flashMessage}</p>
                        <button onClick={clearFlash}>
                            <img src={CloseIcon} alt={'close'} className={'w-5 h-5'}/>
                        </button>
                    </div>
                </div>}
                <form className={'flex flex-col items-center gap-3 gap-y-12 mt-10'} id={'form-contact'}>
                    <div className={'container flex flex-col md:flex-row items-center gap-3 md:gap-28 md:w-4/6'}>
                        <label className={'flex flex-col text-primary w-5/6 md:w-3/6'}>
                            Nom *
                            <input
                                type={'text'}
                                name={'name'}
                                required={true}
                                placeholder={'Reinseignez votre nom complet'}
                                className={'p-3 bg-background border-0 border-secondary border-b-2 text-white'}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <p className={formErrors.name ? 'text-red-600' : 'hidden'}>
                                {formErrors.name}
                            </p>
                        </label>
                        <label className={'flex flex-col text-primary w-5/6 md:w-3/6'}>
                            Email *
                            <input
                                type={'email'}
                                name={'email'}
                                required={true}
                                placeholder={'Reinseignez votre adresse email'}
                                className={'p-3 bg-background border-0 border-secondary border-b-2 text-white'}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <p className={formErrors.email ? 'text-red-600' : 'hidden'}>
                                {formErrors.email}
                            </p>
                        </label>
                    </div>
                    <label className={'container flex flex-col text-primary w-5/6 sm:w-9/12 md:w-4/6'}>
                        Message *
                        <textarea
                            name={'message'}
                            placeholder={'Renseignez votre message ici...'}
                            className={'p-3 bg-background border-0 border-secondary border-b-2 text-white'}
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <p className={formErrors.message ? 'text-red-600' : 'hidden'}>
                            {formErrors.message}
                        </p>
                    </label>
                    <button
                        className={'bg-primary text-background p-3 rounded-2xl flex items-center text-xl ubuntu'}
                        type={'button'}
                        id={'form-contact-submit'}
                        onClick={handleSubmit}
                        disabled={true} //TODO: Enable button when form is available
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