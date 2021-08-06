import styles from './cover.module.scss'

const Cover = () => {
    return (
        <div className={styles.container}>
            <video autoPlay loop muted >
                <source src="/Video2.mp4" type="video/mp4" />
            </video>
            <h1>Name LastName</h1>
            <p>Developer | Designer | Content Creator</p>
        </div>
    )
}

export default Cover


// css-loader ts-loader sass-loader html-loader 