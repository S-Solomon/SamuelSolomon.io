import styles from "./navbar.module.scss";

interface Props {
    isScrolling: number;
}

const Navbar = ( {isScrolling}: Props ) => {

    const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
    <nav
        className={styles.navbar}
    >
        <div className={styles.logo} onClick={toTheTop}>
        Samuel Solomon
        </div>
    </nav>
    );
};

export default Navbar;
