import { FC, useState } from "react"
interface props {
    onFilter:  (...args: any[]) => any
}

const Filter: FC<props> = ({ onFilter }) => {

    const [filter, setFilter] = useState('default');

    const handleFilter =  (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filter = e.target.value;
        setFilter(filter);
        onFilter(filter)
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