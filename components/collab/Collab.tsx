import React, { ReactElement } from 'react';
import styles from './collab.module.scss'

const Collab = (): ReactElement => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h1>Let&apos;s work together create and something unique</h1>
            </div>
        </div>
    )
}

export default Collab
