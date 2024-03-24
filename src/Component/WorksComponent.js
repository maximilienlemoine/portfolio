import ScrollComponent from "./ScrollComponent";
import React from "react";
import CardWorkComponent from "./CardWorkComponent";
import CircleLeftIcon from "../icons/circle-left.svg";
import CircleRightIcon from "../icons/circle-right.svg";
import ReactDOM from 'react-dom';
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
                <h2 className={'text-3xl md:text-4xl p-3 text-primary text-center pb-0'}>Réalisations</h2>
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
                        workDescription={'Back-end API d\'un site fictif de listing de films'}
                        workWebLink={'movieapi.maximilien-lemoine.fr'}
                        workCodeLink={'github.com/maximilienlemoine/WR506-MovieApp'}
                        workStack={['PHP', 'Symfony']}
                    />
                    <CardWorkComponent
                        workTitle={'Movie APP'}
                        workDescription={'Front-end d\'un site fictif de listing de films'}
                        workWebLink={'movie.maximilien-lemoine.fr'}
                        workCodeLink={'github.com/maximilienlemoine/WR505-MovieApp'}
                        workStack={['JS', 'Vue.js']}
                    />
                    <CardWorkComponent
                        workTitle={'Pokedex'}
                        workDescription={'Application mobile simulant un pokedex'}
                        workCodeLink={'github.com/maximilienlemoine/wr510'}
                        workStack={['React Native']}
                    />
                    <CardWorkComponent
                        workTitle={'Escape Room'}
                        workDescription={'Escape Room en réalité virtuelle'}
                        workWebLink={'mmi21f11.mmi-troyes.fr/wr507'}
                        workCodeLink={'github.com/Antoaane/WR-507-Evaluation'}
                        workStack={['C#', 'Unity']}
                    />
                    <CardWorkComponent
                        workTitle={'SCARE'}
                        workDescription={'Calculateur du Score SCARE (SCA en REgulation), à usage des médecins régulateurs des urgences'}
                        workWebLink={'scare.univ-reims.fr'}
                        workCodeLink={'github.com/maximilienlemoine/scare'}
                        workStack={['JS']}
                    />
                    <CardWorkComponent
                        workTitle={'Portfolio'}
                        workDescription={'Mon portfolio, réalisé avec React'}
                        workWebLink={'portfolio.maximilien-lemoine.fr'}
                        workCodeLink={'github.com/maximilienlemoine/portfolio'}
                        workStack={['JS', 'React']}
                    />
                </Carousel>
            </div>

        </section>
    );
}

export default WorksComponent;