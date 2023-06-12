import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import { Link } from "react-router-dom";

function Books() {

    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        fetch('https://anapioficeandfire.com/api/books')
            .then(response => response.json())
            .then(data => setBooks(data))
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Title',
                accessor: 'name'
            },
            {
                Header: 'Author',
                accessor: 'authors'
            },
            {
                Header: 'Publisher',
                accessor: 'publisher'
            }
        ],
        []
    )

    const filter = (e) => {
        console.log(books)
        const newBooks = books.filter(book =>
            book.authors[0].includes(e.target.value) || book.name.includes(e.target.value)
        )
        console.log(newBooks)

        setBooks(newBooks)
    }

    const handleRowClick = (book) => {
        setSelectedBook(book);
    };

    const tableInstance = useTable({ columns, data: books })

    return (
        <div>
            <div class="grid text-center">
                <h3 class="text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl py-6">
                    What are you going to read today?</h3>
                <div class="flex justify-center mx-auto max-w-7xl px-6 lg:px-8  ">
                    <input onChange={filter} class="py-2 px-2 border-2 border-[#0a2415] rounded-md" type='text' placeholder='Search a title or name or Author'></input>
                </div>

                <div>
                    <button class="p-2 rounded-md bg-[#0a2415] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#85d099] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9f513dd]m-4 transform hover:scale-110">Search</button >
                </ div >
            </ div >
            {selectedBook && (

                <div className="mx-auto max-w-lg mt-s shadow-lg bg-white rounded-lg overflow-hidden">
                    <h1 className="font-bold text-xl mb-l">{selectedBook.name}</h1>
                    <p><span className="">Author:</span> {selectedBook.authors.join(', ')}</p>
                    <p><span>Publisher:</span> {selectedBook.publisher}</p>

                    <Link to={`/Details/${selectedBook.name}`} className="inline-block bg-green-400 text-white px-s py-xs mt-l rounded hover:bg-green-500">
                        Read more
                    </Link>
                </div>

            )}

            <div class=" mx-auto max-w-7xl px-6 lg:px-8">
                <table {...tableInstance.getTableProps()}>
                    <thead class="text-[#144026] py-4 px-4 border-
                                  2 border-[#0a2415] rounded-md">
                        {tableInstance.headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody class="py-4 px-4 border-2 border-[#0a2415] rounded-md" {...tableInstance.getTableBodyProps()}>
                        {tableInstance.rows.map(row => {
                            tableInstance.prepareRow(row);
                            return (
                                <tr class="py-4 font-semibold text-gray-900 shadow-sm hover:bg-[#85d099] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9f2dd] m-4 transform hover:scale-
                        100" onClick={() => handleRowClick(row.original)} {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (<td class="px-
                                4"
                                            {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                                    })}

                                </tr>
                            )
                        })}
                    </tbody>

                    {selectedBook &&
                        <Link to={`/Details/${selectedBook.name}`}>
                            Read more...
                        </Link>
                    }
                </table>
            </div>
        </div>)}
export default Books;