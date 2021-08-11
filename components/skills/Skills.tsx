/* eslint-disable @next/next/no-img-element */
import styles from './skills.module.scss'
import SkillsData from '../../data/SkillsData'
import  Image from 'next/image'
const Skills = () => {
    return (
        <section className={styles.skillsSection} id="skills">
            <div className={styles.title}>
                <h1>Technologies and languages I speak.</h1>
                <p>
                    These are the skills and programming languages
                    that I have learnt until now. I am constantly learning new <br />technologies, consequently updating this
                    section more often.
                </p>
            </div>
            
            <div className={styles.container}>
                {
                    SkillsData.map((skill) => (
                        <div className={styles.cards} key={skill.id}>
                            <div className={styles.card}>
                                <div className={styles.icon}>
                                    <Image src={skill.image} alt={skill.description} />
                                </div>
                                <h1>{skill.title}</h1>
                            </div>
                        </div>
                    ))
                }  
            </div>
            
        </section>
    )
}

export default Skills
