import React from "react";
import Background from "../images/background.jpg";
import ScrollComponent from "./ScrollComponent";

function AboutComponent() {
    return (
        <section className={'bg-backgroundSecondary section'}>
            <ScrollComponent/>
            <div className={'container flex flex-col lg:flex-row items-center pb-20'}>
                <div className={'flex flex-col items-center'}>
                    <h2 className={'text-3xl md:text-4xl bg-background inline-block p-3 border border-primary rounded-tl-3xl rounded-br-3xl'}>
                        A propos
                    </h2>
                    <div className={'bg-background m-10 p-5 rounded-2xl'}>
                        <span><span className={'text-secondary'}>&lt;p&gt;</span></span>
                        <p className={'pl-3 py-2 lg:text-xl'}>
                            <span className={'text-primary text-2xl'}>Bonjour!</span> <br/>
                            My name is Sinan and I specialize in web developement that utilizes HTML, CSS, JS, and REACT
                            etc. <br/>
                            I am a highly motivated individual and eternal optimist dedicated to writing clear, concise,
                            robust code that works. <br/> Striving to never stop learning and improving. <br/>
                            When I'm not coding, I am writing bolgs, reading, or picking up some new hands-on art
                            project like photography. <br/>
                            I like to have my perspective and belief systems challenged so that I see the world through
                            new eyes. <br/>
                        </p>
                        <span className={'text-secondary'}>&lt;p/&gt;</span>
                    </div>
                </div>
                <img src={Background} alt={'background'} className={'rounded-2xl w-4/6 lg:w-2/6'}/>
            </div>
        </section>
    );
}

export default AboutComponent;