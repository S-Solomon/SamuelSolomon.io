import styles from './drawer.module.scss'

const Backdrop = ({ backdropclickhandler }: any) => {
    return <div className={styles.backdrop} onClick={backdropclickhandler}></div>;
};

export default Backdrop
