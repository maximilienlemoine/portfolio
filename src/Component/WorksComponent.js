import ScrollComponent from "./ScrollComponent";
import React from "react";
import CardWorkComponent from "./CardWorkComponent";
import CircleLeftIcon from "../icons/circle-left.svg";
import CircleRightIcon from "../icons/circle-right.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function WorksComponent() {
    const renderCenterRightControls = ({nextDisabled, nextSlide}) => (
        <button
            className={'bg-background p-2 rounded-full mr-3'}
            disabled={nextDisabled}
            onClick={nextSlide}
            aria-label="Go to next slide"
        >
            <img src={CircleRightIcon} alt={'Icone de flèche droite'} className={'w-5 md:w-7'}/>
        </button>
    );

    const renderCenterLeftControls = ({previousDisabled, previousSlide}) => (
        <button
            className={'bg-background p-2 rounded-full ml-3'}
            disabled={previousDisabled}
            onClick={previousSlide}
            aria-label="Go to previous slide"
        >
            <img src={CircleLeftIcon} alt={'Icone de flèche gauche'} className={'w-5 md:w-7'}/>
        </button>
    );

    return (
        <section className={'bg-backgroundSecondary section py-14'} id='works'>
            <ScrollComponent/>
            <div className={'flex flex-col items-center gap-5'}>
                <p className={'text-3xl md:text-4xl p-3 text-primary text-center pb-0'}>Réalisations</p>
                <hr className={'border-primary w-3/12 sm:w-2/12 lg:w-1/12 my-0'}/>
                <p className={'text-center'}>Sélection de réalisation disponible.</p>
            </div>
            <div className={'flex justify-center '}>
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    centerMode={true}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={9999}
                    centerSlidePercentage={100}
                    renderCenterLeftControls={renderCenterLeftControls}
                    renderCenterRightControls={renderCenterRightControls}
                    className={'w-11/12 md:w-10/12 my-10 md:my-20'}
                >
                    <CardWorkComponent
                        workTitle={'Movie API'}
                        workGoal={['Création d\'une API REST', 'Authentification JWT', 'Recupération de mot de passe']}
                        workDescription={'Back-end API d\'un site fictif de listing de films. Sécurisation via JWT. Gestion des utilisateurs et des films. Gestion des mots de passe.'}
                        workWebLink={'movieapi.maximilien-lemoine.fr'}
                        workCodeLink={'github.com/maximilienlemoine/WR506-MovieApp'}
                        workStack={['PHP', 'Symfony']}
                    />
                    <CardWorkComponent
                        workTitle={'Movie APP'}
                        workGoal={['Création de composants réutilisables', 'Utilisation d\'une API REST']}
                        workDescription={'Front-end d\'un site fictif de listing de films. Système de recherche dynamique. Gestion de la pagination et de la navigation. Gestion de l\'authentification.'}
                        workWebLink={'movie.maximilien-lemoine.fr'}
                        workCodeLink={'github.com/maximilienlemoine/WR505-MovieApp'}
                        workStack={['JS', 'Vue.js']}
                    />
                    <CardWorkComponent
                        workTitle={'Pokedex'}
                        workGoal={['Utilisation de composants natif', 'Utilisation d\'une API REST', 'Gestion de la navigation']}
                        workDescription={'En se basant sur PokeAPI, création d\'une application mobile de listing de pokémons. Système de favoris et de recherche. Gestion de la rotation de l\'écran et de la photo de profil.'}
                        workCodeLink={'github.com/maximilienlemoine/wr510'}
                        workStack={['React Native']}
                    />
                    <CardWorkComponent
                        workTitle={'Escape the H103'}
                        workGoal={['Création d\'un environnement 3D', 'Création d\'énigmes et mécanique de jeu', 'Gestion événement VR']}
                        workDescription={'Escape game en réalité virtuelle en équipe de deux. Modélisation de la salle. Utilisation "XR interaction toolkit". Développement des égnimes.'}
                        workWebLink={'mmi21f11.mmi-troyes.fr/wr507'}
                        workCodeLink={'github.com/Antoaane/WR-507-Evaluation'}
                        workStack={['C#', 'Unity']}
                    />
                    <CardWorkComponent
                        workTitle={'SCARE'}
                        workGoal={['Calculateur en fonction de critères médicaux', 'Interface simple et intuitive', 'Référencement du site sur les moteurs de recherche']}
                        workDescription={'Calculateur du Score SCARE (SCA en REgulation), à usage des médecins régulateurs des urgences. Hebergé sur les serveurs de l\'Université de Reims Champagne-Ardenne.'}
                        workWebLink={'scare.univ-reims.fr'}
                        workCodeLink={'github.com/maximilienlemoine/scare'}
                        workStack={['JS']}
                    />
                    <CardWorkComponent
                        workTitle={'Portfolio'}
                        workGoal={['Exposition de réalisations et compétences', 'Accessibilité', 'Interface dynamique et responsive', 'Référencement', 'Rédaction de contenu']}
                        workDescription={'Mon portfolio, réalisé avec React. Il présente mes compétences, mes réalisations et mon parcours. Il est responsive et accessible.'}
                        workWebLink={'portfolio.maximilien-lemoine.fr'}
                        workCodeLink={'github.com/maximilienlemoine/portfolio'}
                        workStack={['JS', 'React']}
                    />
                    <CardWorkComponent
                        workTitle={'WS501 - Preuve de concept web'}
                        workGoal={['Travail en équipe', 'Utilisation de technologies 3D', 'Gestion de projet']}
                        workDescription={'Création d\'un configurateur d\'un modèle de vélos en 3D. Gestion de projet. Utilisation de Three.js pour l\'importation du modèle 3D. Utilisation de React pour l\'interface utilisateur.'}
                        workWebLink={'mmi21e09.mmi-troyes.fr/ws501'}
                        workCodeLink={'github.com/maximilienlemoine/ws501-app'}
                        workStack={['JS', 'Three.js', 'React']}
                    />
                    <CardWorkComponent
                        workTitle={'Platforms'}
                        workGoal={['Découverte de Godot', 'Intéractions 2D', 'Gestion de projet']}
                        workDescription={'Création d\'un jeu de plateforme en 2D. Utilisation de Godot pour le développement. Gestion de projet. Création de niveaux et de mécaniques de jeu.'}
                        workCodeLink={'github.com/maximilienlemoine/Platforms'}
                        workStack={['Godot']}
                    />
                </Carousel>
            </div>

        </section>
    );
}

export default WorksComponent;