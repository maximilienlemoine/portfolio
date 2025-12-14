"use server";

import { verifyCaptchaToken } from "@/utils/captcha";

export async function contactUsAction(token: string | null, formData: FormData) {
    if (!token) {
        return {
            success: false,
            message: "Token introuvable",
        };
    }

    const captchaData = await verifyCaptchaToken(token);

    if (!captchaData) {
        return {
            success: false,
            message: "Captcha invalide",
        };
    }

    if (!captchaData.success || captchaData.score < 0.5) {
        return {
            success: false,
            message: "Captcha invalide",
            errors: !captchaData.success ? captchaData["error-codes"] : undefined,
        };
    }

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "private-api/send-mail", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + process.env.API_SECRET,
        },
        body: formData,
    });
    const data = await response.json();

    return {
        success: true,
        message: data.message,
    };
}
