/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from 'react';
import styles from './about.module.scss'
import Image from 'next/image'


const About = (): ReactElement => {
    return (
      <div className={styles.container} id='about'>
        <div className={styles.description}>
          <h1>Hi, I’m Samuel. Nice to meet you.</h1>
          <p>
            I&apos;m a highly motivated person, enthusiastic about technology,
            proactive in identifying areas of improvement, and keen to develop
            myself and help the wider team to succeed. 
          </p>
        </div>
        <div className={styles.wrapper}>
          <Image
            src='/svgRemix.svg'
            width={450}
            height={250}
            alt='picture of the author'
          />
        </div>
      </div>
    );
}

export default About
