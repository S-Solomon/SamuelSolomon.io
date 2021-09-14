import styles from "./navbar.module.scss";
import { useState } from 'react'
interface Props {
    isScrolling: number;
}


const Navbar = ({ isScrolling }: Props) => {
    const [showLinks, setShowLinks] = useState(true)

    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <header className={`${styles.header} ${isScrolling > 20 ? `${styles.scrolling}` : null }`}>
            <div className={styles.logo} onClick={toTheTop}>
                Samuel Solomon
            </div>

            <div className={styles.hamburger} onClick={() => setShowLinks(!showLinks)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={styles.navbar} id={showLinks ? `${styles.hidden}` : ""}>
                <a className={styles.link} href="#" >
                    Home
                </a>
                <a className={styles.link} href="#skills">
                    Skills
                </a>
                <a className={styles.link} href="#about">
                    About
                </a>
                <a className={styles.link} href="#projects">
                    Projects
                </a>
                <a className={styles.link} href="#footer">
                    Contact
                </a>
            </nav>

        </header>
    );
};

export default Navbar;
