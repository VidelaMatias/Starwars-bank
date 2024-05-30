import { FC, ReactNode } from "react";
import styles from "./table.module.scss"

interface props {
    headers?: ReactNode,
    rows: any[]
}
const Table: FC<props> = ({ headers, rows }) => {

    return (
        <table className={styles.table}>
            <thead>
                {headers &&
                    headers
                }
            </thead>

            <tbody>
                {rows}
            </tbody>
        </table>
    )
}
export default Table;