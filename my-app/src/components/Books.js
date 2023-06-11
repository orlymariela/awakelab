import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Books() {
    const [booksData, setBooksData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    //hace llamado a api al momento 
    useEffect(() => {
        fetchData();
    }, []);

    const fetchDataHandler = async () => {
        try {
            const response = await axios.get('https://anapioficeandfire.com/api/books');
            setBooksData(response.data);
        } catch (error) {
            console.error(error.message)
        }
    }

    //filtro
    const handleSearch = () => {
        return booksData.filter((item) => {
            if (searchTerm === "") {
                return item;
            } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())
                || item.authors.toLowerCase().includes(searchTerm.toLowerCase())) {
                return item;
            }
        }).map((filteredItem, index) => {
            return (
                <tr>
                <td>{filteredItem.name}</td>
                <td>{filteredItem.authors}</td>
                <td>{filteredItem.publisher}</td>
                <td>{filteredItem.country}</td>

            </tr>
             )
        })

    }
    return (
        <>
            <h1>Books Table</h1>
            <button onClick={fetchDataHandler}>Fetch Data</button>
            <div className="search">
                <input type="text" placeholder="Search..." onChange={(e) => { setSearchTerm(e.target.value) }} />
            </div>

            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Authors</th>
                        <th>Publisher</th>
                        <th>Country</th>
                    </tr>
                </thead>

                <tbody>

                    {handleSearch()}

                </tbody>

            </table>

        </>)
}

export default Books;

