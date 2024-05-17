import { Link } from "react-router-dom";
import PlanetComponent from "../components/planet/planet";
import Search from "../components/search/search";
import { usePlanetList } from "../data/queries";
import styles from './../assets/app.module.scss'
import { useEffect, useState } from "react";
import Loader from "../components/loader/loader";
import Sorter from "../components/sorter/sorter";
import { Planet } from "../types";
function Planets() {

    const { data: list } = usePlanetList();
    const [isVisible, setIsVisible] = useState(false);
    const [filteredList, setFilteredList] = useState<Planet[]>([]);

    useEffect(() => {
        if (list) {
            setFilteredList(list)
        }
    }, [list]);

    const onSearchPlanet = (e: any) => {
        const searchValue = e.currentTarget.value
        if (!searchValue || searchValue === '') {
            setFilteredList(list)
        }
        else {
            setFilteredList(list.filter((elem: any) => elem.name.toLowerCase().includes(searchValue.toLowerCase())));
        }
    }

    const onSortHandler = (data: any) => {
        setFilteredList(data);
    };

    const toggleVisibility = () => {
        if (window.scrollY > window.innerHeight / 2) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            <div className={styles.topContainer}>
                <button className={styles.arrowPreviousBtn} type="button" aria-label="Go to previous page" >
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fe5000" stroke="#fe5000"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" /></svg>
                    </Link>
                </button>
                <Search onChangeHandler={onSearchPlanet} searchBy='Name'></Search>
            </div>

            <h1 className={styles.textCenter}>Empire Planets</h1>
            <Sorter onSort={onSortHandler} initialData={list}></Sorter>
            <div className={styles.planetWrapper}>
                {
                    !filteredList ?
                        <Loader></Loader>
                        :
                        filteredList.length > 0 ?
                            filteredList.map((planet: any) =>
                                <PlanetComponent key={planet.id} planet={planet}></PlanetComponent>
                            ) :
                            <h3>No Results Found</h3>
                }
            </div>
            {isVisible && (
                <button onClick={scrollToTop} className={`${styles.scrollButton} ${styles.scrollToTop}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="#fff" fill="#fff"><path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" /></svg>
                </button>
            )}
        </div>

    )
}
export default Planets;
