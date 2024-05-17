import { FC, useEffect, useState } from "react";
import { usePlanetDetail } from "../data/queries";
import { Link, useParams } from "react-router-dom";
import { User, Transaction } from "../types";
import Table from "../components/table/table";
import styles from './../assets/app.module.scss'
import Filter from "../components/filter/filter";

const PlanetDetail: FC<{}> = () => {

    const { planetid: planetId } = useParams();
    const { data: planet } = usePlanetDetail(planetId!);
    const [planetInfo, setPlanetInfo] = useState([]);
    const [residents, setResidents] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);

    useEffect(() => {
        if (planet) {
            const { residents, transactions, films, id, created, edited, ...planetInfo } = planet;
            setPlanetInfo(planetInfo);
            setResidents(residents);
            setTransactions(transactions);
            setFilteredTransactions(transactions)
        }
    }, [planet])

    const getPlanetRows = (object: any) => {
        return Object.keys(object).map((key: string) => (
            <tr key={key}>
                <td key={key}>{key.replace('_', ' ').charAt(0).toUpperCase() + key.replace('_', ' ').slice(1)}</td>
                <td>{object[key]}</td>
            </tr>
        ));
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const options: any = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        };
        return new Intl.DateTimeFormat('es-ES', options).format(date).replace(",", "");
    };

    const removeResidentsUnwantedKeys = (resident: User) => {
        const { id, created, edited, birth_year, homeworld, ...filteredResident } = resident;
        return filteredResident;
    };

    const removeTransactionsUnwantedKeys = (transaction: Transaction) => {
        const { id, user, ...filteredTransactions } = transaction;
        filteredTransactions.date = formatDate(filteredTransactions.date)
        return filteredTransactions;
    };

    const getResidentHeaders = (residents: User[]) => {
        if (residents.length === 0) return [];
        const filteredResident = removeResidentsUnwantedKeys(residents[0]);
        return (
            <tr>
                {Object.keys(filteredResident).map((key) => (
                    <th key={key}>{key.replace('_', ' ').charAt(0).toUpperCase() + key.replace('_', ' ').slice(1)}</th>
                ))}
            </tr>
        );
    };

    const getTransactionsHeaders = (transactions: Transaction[]) => {
        if (transactions.length === 0) return [];
        const filteredTransaction = removeTransactionsUnwantedKeys(transactions[0]);
        return (
            <tr>
                {Object.keys(filteredTransaction).map((key: string) => (
                    <th key={key}>{key.replace('_', ' ').charAt(0).toUpperCase() + key.replace('_', ' ').slice(1)}</th>
                ))}
            </tr>
        );
    };

    const getResidentRows = (residents: User[]) => {
        return residents.map((element: User) => {
            const filteredResident = removeResidentsUnwantedKeys(element);
            return (
                <tr key={element.id}>
                    {Object.values(filteredResident).map((value: any, index) => (
                        <td key={index}>{value}</td>
                    ))}
                </tr>
            );
        });
    };

    const getTransactionsRows = (transactions: Transaction[]) => {
        return transactions.map((element: Transaction) => {
            const filteredResident = removeTransactionsUnwantedKeys(element);
            return (
                <tr key={element.id}>
                    {Object.values(filteredResident).map((value: any, index) => (
                        <td key={index}>{value}</td>
                    ))}
                </tr>
            );
        });
    };

    const onFilterHandler = (data:any) => {
        setFilteredTransactions(data);
    };
    
    return (    
        <div>
            <button className={styles.arrowPreviousBtn} type="button" aria-label="Go to previous page" >
                <Link to="/planets">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fe5000" stroke="#fe5000"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" /></svg>
                </Link>
            </button>

            <h2 className={styles.textCenter}>Planet Details</h2>
            {planetInfo &&
                <>
                    <h3 className={styles.subtitle}>Information</h3>
                    <Table rows={getPlanetRows(planetInfo)} ></Table>
                </>
            }

            {residents ?
                <>
                    <h3 className={styles.subtitle}>Residents</h3>
                    <Table headers={getResidentHeaders(residents)} rows={getResidentRows(residents)} ></Table>
                </>
                :
                <span>No residents Available</span>
            }
            {filteredTransactions ?
                <>
                    <h3 className={styles.subtitle}>Transactions</h3>
                    <Filter onFilter={onFilterHandler} initialData={transactions} ></Filter>
                    <Table headers={getTransactionsHeaders(filteredTransactions)} rows={getTransactionsRows(filteredTransactions)} ></Table>
                </>
                :
                <span>No Transactions Available</span>
            }
        </div>
    )
}
export default PlanetDetail;