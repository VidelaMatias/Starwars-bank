import PlanetComponent from "./planet/planet";
import Search from "./search/search";
import { usePlanetList } from "../data/queries";
import styles from './../assets/app.module.scss'
import { useEffect, useState } from "react";
import Loader from "./loader/loader";
import Sorter from "./sorter/sorter";
import { Planet } from "../types";
import ArrowScrollToTop from "./arrowScrollToTop/arrowScrollToTop";

function Planets() {

    const { data: initialList } = usePlanetList();
    const [isVisible, setIsVisible] = useState(false);
    const [filteredList, setFilteredList] = useState<Planet[]>(initialList);

    useEffect(() => {
        if (initialList) {
            setFilteredList(initialList)
        }
    }, [initialList]);

    const onSearchPlanet = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const searchValue = e.currentTarget.value
        if (!searchValue || searchValue === '') {
            setFilteredList(initialList)
        }
        else {
            setFilteredList(initialList.filter((elem: Planet) => elem.name.toLowerCase().includes(searchValue.toLowerCase())));
        }
    }

    const onSortHandler = (sortOrder: string) => {

        let sortedData = [];
        if (sortOrder === 'asc') {
            sortedData = [...filteredList].sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOrder === 'desc') {
            sortedData = [...filteredList].sort((a, b) => b.name.localeCompare(a.name));
        } else {
            sortedData = [...filteredList].sort((a, b) => Number(a.id) - Number(b.id));
        }
        setFilteredList(sortedData)
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const toggleVisibility = () => {
        if (window.scrollY > window.innerHeight / 2) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    return (
        <div>
            <Search onChangeHandler={onSearchPlanet} searchBy='Name' ></Search>

            <h1 className={styles.textCenter}>Empire Planets</h1>
            <Sorter onSort={onSortHandler} ></Sorter>
            <div className={styles.planetWrapper}>
                {
                    !filteredList ?
                        <Loader></Loader>
                        :
                        filteredList.length > 0 ?
                            filteredList.map((planet: Planet) =>
                                <PlanetComponent key={planet.id} planet={planet}></PlanetComponent>
                            ) :
                            <h3>No Results Found</h3>
                }
            </div>
            {isVisible && (
                <ArrowScrollToTop />
            )}
        </div>

    )
}
export default Planets;
