import { FC, useEffect, useState } from "react"

interface props {
    onFilter: any,
    initialData: any
}

const CURRENCY_GCS = 'GCS';
const CURRENCY_ICS = 'ICS';

const Filter: FC<props> = ({ onFilter, initialData }) => {

    const [data, setData] = useState(initialData);
    const [filter, setFilter] = useState('default');

    useEffect(() => {
        if (initialData) {
            setData(initialData)
        }
    }, [initialData])

    const handleFilter = (e: any) => {
        const filter = e.target.value;
        setFilter(filter);
        
        let filtered;
        if (filter === CURRENCY_GCS) {
            filtered = [...data].filter((item: any) => item.currency === CURRENCY_GCS)
        } else if (filter === CURRENCY_ICS) {
            filtered = [...data].filter((item: any) => item.currency === CURRENCY_ICS)
        } else {
            filtered = initialData;
        }
        setData(filtered);
        onFilter(filtered)
    };

    return (
        <div>
            <label htmlFor="filter">Filter By Currency: </label>
            <select id="filter" value={filter} onChange={handleFilter}>
                <option value="default">Default</option>
                <option value="ICS">ICS</option>
                <option value="GCS">GCS</option>
            </select>
        </div>
    )
}
export default Filter