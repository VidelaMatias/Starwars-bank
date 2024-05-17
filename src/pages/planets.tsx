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

    const [filteredList, setFilteredList] = useState<Planet[]>([]);

    useEffect( () => {
        if (list) {
            setFilteredList(list)
        }
       
    },[list]);
    
    const onSearchPlanet = (e:any) => {
        const searchValue = e.currentTarget.value
        if (!searchValue || searchValue === '') {
            setFilteredList(list)
        }
        else{
            setFilteredList(list.filter((elem:any)=> elem.name.toLowerCase().includes(searchValue.toLowerCase())));
        }
    }
        
    const onSortHandler = (data:any) => {
        setFilteredList(data);
    };
    

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
                    filteredList.length>0 ?
                        filteredList.map((planet: any) =>
                        <PlanetComponent key={planet.id} planet={planet}></PlanetComponent>
                    ):
                    <h3>No Results Found</h3>
                }
            </div>
        </div>

    )
}
export default Planets;
