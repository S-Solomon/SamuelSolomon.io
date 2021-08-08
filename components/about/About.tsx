/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './about.module.scss'
// import removeBg from '../../public/removeBg.png'
import Image from 'next/image'


const about = () => {
    return (
        <div className={styles.container} id="about">
            <div className={styles.description}>
                <h3>Let me tell you something about me</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet autem deleniti quam quos soluta, reiciendis totam veritatis dicta sunt maxime? Iure eaque veniam repellat soluta distinctio eveniet, culpa dolores recusandae?</p>
            </div>
            <div className={styles.wrapper}>
                <Image src="/removeBg.png" width={250} height={250} alt="picture of the author"  />
            </div>
        </div>
    )
}

export default about
