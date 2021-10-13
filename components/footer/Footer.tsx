import React from 'react'
import styles from './footer.module.scss'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare, faStackOverflow } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className={styles.footer} >
            <div className={styles.info}>
                <h1>Samuel Solomon</h1>
                <p>Based in Your City</p>
            </div>
            <div className={styles.contact}>
                <h3>Contact me</h3>
                <p>And let&apos;s get down to work</p>
                <a href="mailto:mrsamuelsolomon@gmail.com">@Mrsamuelsolomon@gmail.com</a>
            </div>
            <div className={styles.social}>
                <div className={styles.designby}>
                    <p>Design by Samuel Solomon</p>
                </div>
                <div className={styles.socialLinks} >
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className={styles.links}  />
                    </a>
                    <a href="https://stackoverflow.com" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faStackOverflow} className={styles.links}  />
                    </a>
                    <a href="https://github.com/S-Solomon" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare} className={styles.links}  />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
