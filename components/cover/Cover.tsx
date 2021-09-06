import React, { ReactElement } from 'react';
import styles from './cover.module.scss'


const Cover = (): ReactElement => {
    return (
        <div className={styles.container}>
            <video autoPlay loop muted >
                <source src="/Video2.mp4" type="video/mp4" />
            </video>
            <h1>Samuel Solomon</h1>
            <p>Developer | Designer | Content Creator</p>
        </div>
    )
}

export default Cover


// css-loader ts-loader sass-loader html-loader 