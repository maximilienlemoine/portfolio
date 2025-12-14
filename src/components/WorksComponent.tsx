import { Project } from "@/models/project";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import CarouselComponent from "@/components/CarouselComponent";

async function WorksComponent() {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "private-api/project/get", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.API_SECRET,
        },
    });
    const projects: Project[] = await response.json();

    return (
        <section className={"bg-backgroundSecondary section py-14"} id="works">
            <div className={"flex flex-col items-center gap-5"}>
                <p className={"text-3xl md:text-4xl p-3 text-primary text-center pb-0"}>Réalisations</p>
                <hr className={"border-primary w-3/12 sm:w-2/12 lg:w-1/12 my-0"} />
                <p className={"text-center"}>Sélection de réalisation disponible.</p>
            </div>
            <div className={"flex justify-center "}>
                <CarouselComponent projects={projects} />
            </div>
        </section>
    );
}

export default WorksComponent;
