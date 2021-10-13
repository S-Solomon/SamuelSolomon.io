import styles from "./navbar.module.scss";
import { useState } from "react";
// import Link from "next/Link";
import { Link } from 'react-scroll'

interface Props {
  isScrolling: number;
}

const Navbar = ({ isScrolling }: Props) => {
  const [showLinks, setShowLinks] = useState(true);

  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <header
      id='home'
      className={`${styles.header} ${
        isScrolling > 20 ? `${styles.scrolling}` : null
      }`}
    >
      <div className={styles.logo} onClick={toTheTop}>
        Samuel Solomon
      </div>

      <div
        className={styles.hamburger}
        onClick={() => setShowLinks(!showLinks)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={styles.navbar} id={showLinks ? `${styles.hidden}` : ""}>
        <Link to='/' smooth={true} duration={100}>
          <a className={styles.link} onClick={toTheTop}>
            Home
          </a>
        </Link>
        <Link to='skills' smooth={true} duration={100}>
          <a className={styles.link}>Skills</a>
        </Link>
        <Link to='about' smooth={true} duration={100}>
          <a className={styles.link}>About</a>
        </Link>
        <Link to='projects' smooth={true} duration={100}>
          <a className={styles.link}>Projects</a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
