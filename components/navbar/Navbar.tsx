import styles from "./navbar.module.scss";
// import { motion } from "framer-motion"

interface Props {
    isScrolling: number;
}


const Navbar = ({ isScrolling }: Props) => {


    const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <header className={`${styles.header} ${isScrolling > 20 ? `${styles.scrolling}` : null }`}>
            <div className={styles.logo} onClick={toTheTop}>
                Samuel Solomon
            </div>

            <div className={styles.hamburger}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={styles.navbar}>
                <a className={styles.link} href="#" >
                    <span>Home</span>
                </a>
                <a className={styles.link} href="#about">
                    <span>About</span>
                </a>
                <a className={styles.link} href="#projects">
                    <span>Projects</span>
                </a>
                <a className={styles.link} href="#footer">
                    <span>Contact</span>
                </a>
            </nav>

        </header>
    );
};

export default Navbar;
