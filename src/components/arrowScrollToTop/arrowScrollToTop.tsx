import styles from './../../assets/app.module.scss'

function ArrowScrollToTop() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={scrollToTop} className={`${styles.scrollButton} ${styles.scrollToTop}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="#fff" fill="#fff"><path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" /></svg>
        </button>
    )
}
export default ArrowScrollToTop