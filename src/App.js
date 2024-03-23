import './App.css';
import NavComponent from "./Component/NavComponent";
import HeroComponent from "./Component/HeroComponent";
import React from "react";
import FooterComponent from "./Component/FooterComponent";
import AboutComponent from "./Component/AboutComponent";
import SkillsComponent from "./Component/SkillsComponent";

function App() {
    return (
        <div className="App bg-background">
            <NavComponent/>
            <hr className={'w-5/6 mx-auto border-gray'}/>
            <HeroComponent/>
            <AboutComponent/>
            <SkillsComponent/>
            <FooterComponent/>
        </div>
    );
}

export default App;
