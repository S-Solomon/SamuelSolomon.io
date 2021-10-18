import React from "react";
import styles from "./drawer.module.scss";
import { Link } from "react-scroll";
import Backdrop from "./Backdrop";
import { AiOutlineClose } from 'react-icons/ai'

const SideDrawer = ({closedrawer}: any) => {
    return (
        <React.Fragment>
            <div className={styles.drawer}>
                <nav className={styles.nav}>
                    <ul>
                        <AiOutlineClose className={styles.close} onClick={closedrawer}/>  
                        <li>
                            <Link
                                to="/"
                                activeClass="active-class"
                                smooth={true}
                                duration={100}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="skills"
                                activeClass="active-class"
                                smooth={true}
                                duration={100}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="about"
                                activeClass="active-class"
                                smooth={true}
                                duration={100}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="projects"
                                activeClass="active-class"
                                smooth={true}
                                duration={100}
                            >
                                Projects
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Backdrop backdropclickhandler={closedrawer}/>
        </React.Fragment>
    );
};

export default SideDrawer;
