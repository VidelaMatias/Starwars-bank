import { FC } from "react";
import styles from "./planet.module.scss"
import { Planet } from "../../types";
import { Link } from "react-router-dom";

interface props {
    planet: Planet
}

const Planets: FC<props> = ({ planet }) => {
    return (
        <Link className={styles.card} to={`/planets/${planet.id}`}>
            <div>
                <h2>{planet.name}</h2>
                <p><b>Total Residents: </b>{planet.residents.length} </p>
                <p><b>Total Films: </b>{planet.films.length} </p>
                <p><b>Total Transactions: </b>{planet.transactions.length} </p>
            </div>
        </Link>
    )
}
export default Planets;