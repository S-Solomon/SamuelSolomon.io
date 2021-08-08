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
            </div>
            <div className={styles.social}>
                <div className={styles.designby}>
                    <p>Design by Samuel Solomon</p>
                </div>
                <div className={styles.socialLinks} >
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        {/* <i className="fab fa-linkedin linkedin"></i> */}
                        <FontAwesomeIcon icon={faLinkedin} className={styles.linkedin}/>
                    </a>
                    <a href="https://stackoverflow.com" target="_blank" rel="noreferrer">
                        {/* <i className="fab fa-stack-overflow stackoverflow"></i> */}
                        <FontAwesomeIcon icon={faStackOverflow} className={styles.stackoverflow}/>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        {/* <i className="fab fa-github-square github"></i> */}
                        <FontAwesomeIcon icon={faGithubSquare} className={styles.github}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
