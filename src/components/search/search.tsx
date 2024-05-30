import { FC } from "react";
import styles from './search.module.scss'
interface props {
    onChangeHandler: (...args: any[]) => any
    searchBy: string
}

const Search: FC<props> = ({ onChangeHandler, searchBy }) => {

    return (
        <div className={styles.searchContainer}>
            <label htmlFor="searchInput">Search By {searchBy}</label>
            <input id="searchInput" type="search" onChange={onChangeHandler}></input>
        </div>
    )
}
export default Search;