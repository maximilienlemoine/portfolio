import './App.css';
import NavComponent from "./Component/NavComponent";
import HeroComponent from "./Component/HeroComponent";
import React from "react";
import FooterComponent from "./Component/FooterComponent";
import AboutComponent from "./Component/AboutComponent";

function App() {
    return (
        <div className="App bg-background">
            <NavComponent/>
            <hr className={'w-5/6 mx-auto border-gray'}/>
            <HeroComponent/>
            <AboutComponent/>
            <FooterComponent/>
        </div>
    );
}

export default App;
