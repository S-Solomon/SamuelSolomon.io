import React from 'react'
import styles from './button.module.scss'

const Buttons = ({ button, filter}) => {
    return (
        <div className={styles.container}>
            {
                button.map((cat, idx) => {
                    return <button key={idx} type="button" onClick={()=> filter(cat)} className={styles.btn}>{cat}</button>
                })
            }
        </div>
    )
}

export default Buttons
