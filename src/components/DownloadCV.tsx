"use client";

import React from "react";
import Image from "next/image";

export default function DownloadCV({ cvLink }: { cvLink: string }) {
    const handleDownload = async () => {
        const response = await fetch(cvLink);
        const blob = await response.blob();

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "CV_Maximilien_LEMOINE.pdf";
        a.click();
        window.URL.revokeObjectURL(url);
    };

    return (
        <button
            onClick={handleDownload}
            className={"bg-white text-background ubuntu rounded-full p-2 mt-4 mx-auto flex gap-2 font-bold"}
        >
            Curriculum Vitae
            <Image src={"/icons/download.svg"} alt={"Icone de téléchargement"} width="20" height="20" />
        </button>
    );
}
