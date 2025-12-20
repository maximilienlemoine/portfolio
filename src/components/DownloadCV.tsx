"use client";

import React from "react";
import Image from "next/image";

export default function DownloadCV({cvLink}: {cvLink: string}) {
    return (
        <button
            className={"bg-white text-background ubuntu rounded-full p-2 mt-4 mx-auto flex gap-2 font-bold"}
            onClick={() => window.open(cvLink, "_blank")}
        >
            Curriculum Vitae
            <Image src={"/icons/download.svg"} alt={"Icone de téléchargement"} width="20" height="20" />
        </button>
    );
}
