/* eslint-disable @next/next/no-img-element */
import React from 'react'
import PortfolioData from '../../data/PortfolioData'
import styles from './portfolio.module.scss'
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import Image from 'next/image';

const Portfolio = () => {
    return (
        <>
        {/* <h1 className={styles.title}>Projects</h1> */}
        <section className={styles.portfolio} id="projects">
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
        </section>
        </>
    )
}

export default Portfolio
