import React from "react";
import Background from "../images/background.jpg";
import ScrollComponent from "./ScrollComponent";

function AboutComponent() {
    return (
        <section className={'bg-backgroundSecondary section'} id='about'>
            <ScrollComponent/>
            <div className={'container flex flex-col lg:flex-row items-center pb-20'}>
                <div className={'flex flex-col items-center'}>
                    <h2 className={'text-3xl md:text-4xl bg-background inline-block p-3 border border-primary rounded-tl-3xl rounded-br-3xl'}>
                        A propos
                    </h2>
                    <div className={'bg-background m-10 p-5 rounded-2xl'}>
                        <span><span className={'text-secondary'}>&lt;p&gt;</span></span>
                        <p className={'pl-3 py-2'}>
                            <span className={'text-primary text-2xl'}>Bonjour!</span> <br/> <br/>
                            Passionné par le développement, notamment <span className={'text-primary'}>web</span>, je
                            suis actuellement alternant en formation à l'IUT de Troyes en BUT Métiers du Multimédia et
                            de l'Internet, avec une expertise croissante dans le domaine du <span
                            className={'text-primary'}>développement back-end</span>. <br/> <br/>
                            Avec un large éventail de langages de programmation, je possède des compétences avancées
                            en <span className={'text-primary'}>PHP</span>, <span
                            className={'text-primary'}>JavaScript</span> (y compris les frameworks comme <span
                            className={'text-primary'}>React</span>, <span className={'text-primary'}>Vue.js</span>) ou
                            encore <span className={'text-primary'}>Node.js</span>, ainsi que des base en <span
                            className={'text-primary'}>C#</span>. <br/> <br/>

                            Je me suis rapidement familiarisé avec le Framework <span
                            className={'text-primary'}>Symfony</span>, où je suis désormais à un niveau intermédiaire,
                            j'ai également acquis une expérience pratique avec <span
                            className={'text-primary'}>Express.js</span> pour le développement d'<span
                            className={'text-primary'}>API</span> et <span className={'text-primary'}>Unity</span> pour
                            la création d'applications et de jeux vidéo (<span
                            className={'text-primary'}>3D</span>, <span
                            className={'text-primary'}>Réalité augmentée</span> et <span
                            className={'text-primary'}>virtuelle</span>). <br/>

                            Cette combinaison de compétences me permet de concevoir et de mettre en œuvre des solutions
                            web et logicielles <span className={'text-primary'}>robustes</span> et <span
                            className={'text-primary'}>innovantes</span>, tout en étant capable de m'<span
                            className={'text-primary'}>adapter aux besoins spécifiques</span> de chaque projet. <br/>
                            <br/>

                            De plus, je suis familier avec les outils essentiels de la suite <span
                            className={'text-primary'}>Adobe</span>, tels que <span className={'text-primary'}>Premiere Pro</span>, <span
                            className={'text-primary'}>Photoshop</span> et <span
                            className={'text-primary'}>Illustrator</span>, ce qui me permet d'apporter une touche
                            créative à mes projets. <br/> <br/>

                            Doté d'une forte orientation vers le travail d'équipe, j'apprécie collaborer avec mes pairs
                            pour relever des défis et réaliser des projets ambitieux. Je m'efforce également de rester à
                            l'affût des dernières avancées et tendances dans le domaine du web, afin de maintenir mes
                            compétences à jour afin de garantir des solutions innovantes et pertinentes.
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