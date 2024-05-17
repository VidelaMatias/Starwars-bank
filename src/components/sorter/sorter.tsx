import { FC, useEffect, useState } from "react"

interface props {
    onSort: any,
    initialData:any
}
const Sorter: FC<props> = ({ onSort, initialData }) => {

    const [data, setData] = useState(initialData);
    const [sortOrder, setSortOrder] = useState('default');

    useEffect(() => {
        if (initialData) {
            setData(initialData)
        }
    }, [initialData])

    const handleSort = (e: any) => {
        const order = e.target.value;
        setSortOrder(order);

        let sortedData;
        if (order === 'asc') {
            sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
        } else if (order === 'desc') {
            sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
        } else {
            sortedData = initialData;
        }
        setData(sortedData);
        onSort(sortedData)
    };

    return (
        <div>
            <label htmlFor="sort">Sort by Name: </label>
            <select id="sort" value={sortOrder} onChange={handleSort}>
                <option value="default">Default</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    )
}
export default Sorter