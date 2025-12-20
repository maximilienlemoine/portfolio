import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Maximilien LEMOINE, Développeur",
    description: "Portfolio de Maximilien LEMOINE, développeur web fullstack",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="fr">
            <Script
                src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}`}
            ></Script>
            <body className={`antialiased bg-background`}>{children}</body>
        </html>
    );
}
