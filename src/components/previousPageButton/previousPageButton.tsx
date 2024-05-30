import { FC } from "react"
import styles from './../../assets/app.module.scss'
import { Link } from "react-router-dom"

interface props {
    href: string
}
const PreviousButton: FC<props> = ({ href }) => {

    return (
        <Link to={href} className={styles.arrowPreviousBtn} type="button" aria-label="Go to previous page">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fe5000" stroke="#fe5000"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" /></svg>
        </Link>
    )
}
export default PreviousButton