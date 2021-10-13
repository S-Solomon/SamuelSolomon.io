import React, { ReactElement } from 'react';
import styles from './cover.module.scss'


const Cover = (): ReactElement => {
    return (
        <div className={styles.container}>
            <video autoPlay loop muted >
                <source src="/coverVideo.mp4" type="video/mp4" />
            </video>
            <h1>Samuel Solomon</h1>
            <p>Javascript | React | Developer</p>
            <svg className={styles.scroll} xmlns="http://www.w3.org/2000/svg" width="40" height="77" viewBox="0 0 40 77">
                    <g id="scroll" transform="translate(-253 -787)">
                        <g id="Rectangle_12" data-name="Rectangle 12" transform="translate(253 787)" fill="none" stroke="#fff" strokeWidth="4">
                            <rect width="40" height="77" rx="20" stroke="none"/>
                            <rect x="2" y="2" width="36" height="73" rx="18" fill="none"/>
                        </g>
                        <circle className={styles.circle} id="Ellipse_1" data-name="Ellipse 1" cx="11" cy="11" r="11" transform="translate(262 798)" fill="#fff"/>
                    </g>
            </svg>
        </div>
    )
}

export default Cover


// css-loader ts-loader sass-loader html-loader 