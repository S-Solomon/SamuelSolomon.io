/* eslint-disable @next/next/no-img-element */
// import { useState } from 'react';
import React from 'react'
import PortfolioData from '../../data/PortfolioData'
import styles from './portfolio.module.scss'
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import Image from 'next/image';
// import Buttons from '../Filter/Button'


// const allCategories = ['All', ...new Set(PortfolioData.map(item => item.category))];
// console.log(allCategories);

const Portfolio = () => {
    // const [menuItem, setMenuItem] = useState(PortfolioData)
    // const [buttons, setButtons] = useState(allCategories)

    // const filter = (button) => {
    //     if (button === 'All') {
    //         setMenuItem(PortfolioData)
    //         return;
    //     }
    //     const filteredData = PortfolioData.filter(data => data.category === button)
    //     setMenuItem(filteredData)
    // }





    return (
        <>
        <section className={styles.portfolio} id="projects">
            <div className={styles.title}>
                <h1>My Recent Works</h1>
            </div>
            {/* <Buttons button={buttons} filter={filter}/> */}
            <div className={styles.container}>
                {
                    PortfolioData.map((portfolioItem) => (
                        <div className={styles.gridItem} key={portfolioItem.id}>
                            <div className={styles.portfolioContent}>
                                <div className={styles.portfolioImage}>
                                    <Image src={portfolioItem.Image} alt="portfolio" />
                                    <ul>
                                        <li>
                                            <a href={portfolioItem.Githublink} target="_blank" rel="noreferrer">
                                                <GitHubIcon />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={portfolioItem.Livepreview} target="_blank" rel="noreferrer">
                                                <LanguageIcon />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <h6>{portfolioItem.Title}</h6>
                                <p>{portfolioItem.Text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
        </>
    )
}

export default Portfolio
