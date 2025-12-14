"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import { getCaptchaToken } from "@/utils/captcha";
import { contactUsAction } from "@/actions/FormContact";

export default function FormContact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [formErrors, setFormErrors] = useState({ name: "", email: "", message: "", captcha: "" });
    const [flashMessage, setFlashMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isErrors = () => {
        return !!(formErrors.name || formErrors.email || formErrors.message || formErrors.captcha);
    };

    const handleErrors = () => {
        setFormErrors({ name: "", email: "", message: "", captcha: "" });

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

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        handleErrors();

        if (isErrors()) return;

        setLoading(true);

        const formDataSend = new FormData();
        formDataSend.append("name", formData.name);
        formDataSend.append("email", formData.email);
        formDataSend.append("message", formData.message);

        const token = await getCaptchaToken();
        const res = await contactUsAction(token, formDataSend);

        if (!res.success) {
            setLoading(false);
            setFormErrors((errors) => ({ ...errors, captcha: res.message }));
        }

        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
        setFlashMessage(res.message);
    };

    const clearFlash = () => {
        setFlashMessage("");
    };

    return (
        <>
            {flashMessage && (
                <div className="flex justify-center">
                    <div
                        className={
                            "text-background p-2 rounded-md ubuntu md:text-xl bg-green-500 w-4/6 flex justify-between"
                        }
                    >
                        <p>{flashMessage}</p>
                        <button onClick={clearFlash}>
                            <Image
                                src={"/icons/xmark.svg"}
                                alt={"Icone de fermeture des messages d'alerte"}
                                width="20"
                                height="20"
                            />
                        </button>
                    </div>
                </div>
            )}
            <form
                className={"flex flex-col items-center gap-3 gap-y-12 mt-10"}
                id={"form-contact"}
                onSubmit={handleSubmit}
            >
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
                <button
                    className={"bg-primary text-background p-3 rounded-2xl flex items-center text-xl ubuntu"}
                    type={"submit"}
                    id={"form-contact-submit"}
                    disabled={loading}
                >
                    Envoyer
                    <Image src={"/icons/send.svg"} alt={"Icone de d'envoi"} width="22" height="22" />
                </button>
            </form>
        </>
    );
}
