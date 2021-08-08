import React from 'react'
import styles from './footer.module.scss'
import { faGithub } from '@fortawesome/free-regular-svg-icons';


const Footer = () => {
    return (
        <footer className={styles.footer}>
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
                    Design by Samuel Solomon
                </div>
                <div className={styles.socialLinks}>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        {/* <i className="fab fa-linkedin linkedin"></i> */}
                        <faGithub />
                    </a>
                    <a href="https://stackoverflow.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-stack-overflow stackoverflow"></i>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-github-square github"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
