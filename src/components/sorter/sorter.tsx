import { FC, useState } from "react"
import styles from './sorter.module.scss'
interface props {
    onSort: (...args: any[]) => any
}
const Sorter: FC<props> = ({ onSort }) => {

    const [sortOrder, setSortOrder] = useState('default');

    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(e.target.value);
        onSort(e.target.value);
    };

    return (
        <div >
            <label htmlFor="sort">Sort by Name: </label>
            <select id="sort" value={sortOrder} onChange={handleSort} className={styles.select}>
                <option value="default">Default</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    )
}
export default Sorter