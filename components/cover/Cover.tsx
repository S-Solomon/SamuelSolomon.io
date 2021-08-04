import './cover.module.scss'

const Cover = () => {
    return (
        <div className="container">
            <video autoPlay loop muted>
                <source src="/Video2.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Cover


// css-loader ts-loader sass-loader html-loader 