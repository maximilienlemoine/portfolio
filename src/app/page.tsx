import NavComponent from "@/components/NavComponent";
import HeroComponent from "@/components/HeroComponent";
import AboutComponent from "@/components/AboutComponent";
import SkillsComponent from "@/components/SkillsComponent";
import WorksComponent from "@/components/WorksComponent";
import ContactComponent from "@/components/ContactComponent";
import FooterComponent from "@/components/FooterComponent";

export default function Home() {
    return (
        <>
            <NavComponent />
            <hr className={"w-5/6 mx-auto border-gray"} />
            <HeroComponent />
            <AboutComponent />
            <SkillsComponent />
            <WorksComponent />
            <ContactComponent />
            <FooterComponent />
        </>
    );
}
