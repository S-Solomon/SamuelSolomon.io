import styles from './skills.module.scss'
import SkillsData from '../../data/SkillsData'
import  Image from 'next/image'
const Skills = () => {
    return (
        <section className={styles.skillsSection} id="skills">
            <div className={styles.container}>
                <h1>Take a look at my Skills.</h1>
                <p>
                    These are my skills and this contains all the technologies and programming languages
                    that I have learnt until now. I am constantly learning, therefore I may update this
                    section more often.
                </p>
                <div className={styles.skillsGrid}>
                    {
                        SkillsData.map((skill) => (
                            <div className={styles.skillList} key={skill.id}>
                                <span>
                                    <span>
                                        <Image src={skill.image} alt={skill.description} width={40} height={40}/>
                                    </span>
                                    <h1>{skill.title}</h1>
                                </span>
                            </div>
                        ))
                    }  
                </div>
            </div>

        </section>
    )
}

export default Skills
