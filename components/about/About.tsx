/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from 'react';
import styles from './about.module.scss'

const About = (): ReactElement => {
    return (
        <div className={styles.container} id="about">
            <div className={styles.description}>
                <h1>Hi, I’m Samuel. Nice to meet you.</h1>
                <p>
                    I&apos;m a highly motivated self-taught developer, seeking
                    to launch a career building and maintaining web applications
                    and services.
                </p>
                <br />
                <a
                    className={styles.cv}
                    href="/files/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download cv
                </a>
            </div>
        </div>
    );
}

export default About
