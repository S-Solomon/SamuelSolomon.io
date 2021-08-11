/* eslint-disable @next/next/no-img-element */
import styles from './about.module.scss'
import Image from 'next/image'

const About = () => {
    return (
        <div className={styles.container} id="about">
            <div className={styles.description}>
                <h1>Hi, I’m Samuel. Nice to meet you.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet autem deleniti quam quos soluta, reiciendis totam veritatis dicta sunt maxime? Iure eaque veniam repellat soluta distinctio eveniet, culpa dolores recusandae?</p>
            </div>
            <div className={styles.wrapper}>
                <Image src="/removeBg.png" width={250} height={250} alt="picture of the author"  />
            </div>
        </div>
    )
}

export default About
