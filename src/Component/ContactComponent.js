import React, { useState } from "react";
import SendIcon from "../icons/send.svg";
import CloseIcon from "../icons/xmark.svg";
import ReCAPTCHA from "react-google-recaptcha";

function ContactComponent() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [formErrors, setFormErrors] = useState({ name: "", email: "", message: "" });
    const [flashMessage, setFlashMessage] = useState("");
    const [recaptcha, setRecaptcha] = useState(null);

    const sendEmail = async () => {
        if (isErrors()) return;

        // send data in formData
        let formDataSend = new FormData();
        formDataSend.append("name", formData.name);
        formDataSend.append("email", formData.email);
        formDataSend.append("message", formData.message);

        try {
            const response = await fetch(process.env.REACT_APP_API_URL + "private-api/send-mail", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + process.env.REACT_APP_API_SECRET,
                },
                body: formDataSend,
            });
            const data = await response.json();
            setFlashMessage(data.message);
            if (response.ok) {
                setFormData({ name: "", email: "", message: "" });
            }
        } catch (e) {
            console.error(e);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isErrors = () => {
        return !!(formErrors.name || formErrors.email || formErrors.message);
    };

    const handleErrors = () => {
        setFormErrors({ name: "", email: "", message: "" });

        // Check if name is not null
        if (!formData.name.trim()) {
            setFormErrors((errors) => ({ ...errors, name: "Renseignez votre nom." }));
        }

        // Check if email is not null and is a valid email
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            setFormErrors((errors) => ({ ...errors, email: "Renseignez une adresse email valide." }));
        }

        // Check if message is not null
        if (!formData.message.trim()) {
            setFormErrors((errors) => ({ ...errors, message: "Renseignez un message." }));
        }
    };

    const handleSubmit = async (e) => {
        if (!recaptcha) return;

        e.preventDefault();
        handleErrors(e);

        await sendEmail();
    };

    const clearFlash = () => {
        setFlashMessage("");
    };

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
                {flashMessage && (
                    <div className="flex justify-center">
                        <div
                            className={
                                "text-background p-2 rounded-md ubuntu md:text-xl bg-green-500 w-4/6 flex justify-between"
                            }
                        >
                            <p>{flashMessage}</p>
                            <button onClick={clearFlash}>
                                <img src={CloseIcon} alt={"close"} className={"w-5 h-5"} />
                            </button>
                        </div>
                    </div>
                )}
                <form className={"flex flex-col items-center gap-3 gap-y-12 mt-10"} id={"form-contact"}>
                    <div className={"container flex flex-col md:flex-row items-center gap-3 md:gap-28 md:w-4/6"}>
                        <label className={"flex flex-col text-primary w-5/6 md:w-3/6"}>
                            Nom *
                            <input
                                type={"text"}
                                name={"name"}
                                required={true}
                                placeholder={"Renseignez votre nom complet"}
                                className={"p-3 bg-background border-0 border-secondary border-b-2 text-white"}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <p className={formErrors.name ? "text-red-600" : "hidden"}>{formErrors.name}</p>
                        </label>
                        <label className={"flex flex-col text-primary w-5/6 md:w-3/6"}>
                            Email *
                            <input
                                type={"email"}
                                name={"email"}
                                required={true}
                                placeholder={"Renseignez votre adresse email"}
                                className={"p-3 bg-background border-0 border-secondary border-b-2 text-white"}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <p className={formErrors.email ? "text-red-600" : "hidden"}>{formErrors.email}</p>
                        </label>
                    </div>
                    <label className={"container flex flex-col text-primary w-5/6 sm:w-9/12 md:w-4/6"}>
                        Message *
                        <textarea
                            name={"message"}
                            placeholder={"Renseignez votre message ici..."}
                            className={"p-3 bg-background border-0 border-secondary border-b-2 text-white"}
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <p className={formErrors.message ? "text-red-600" : "hidden"}>{formErrors.message}</p>
                    </label>
                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        onChange={(value) => setRecaptcha(value)}
                    />
                    <button
                        className={"bg-primary text-background p-3 rounded-2xl flex items-center text-xl ubuntu"}
                        type={"button"}
                        id={"form-contact-submit"}
                        onClick={handleSubmit}
                        disabled={!recaptcha}
                    >
                        Envoyer
                        <img src={SendIcon} alt={"send"} className={"w-5 h-5 ml-2"} />
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactComponent;
