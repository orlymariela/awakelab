import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Books() {
    const [data, setData] = useState([]);
    const [searchResults, setSearchResults] = useState([])

    //Búsqueda
    const searcher = (e) => {
        setSearchResults(e.target.value)
        console.log(e.target.value)
    }

    //filter
    const filtrar = (terminoBusqueda) => {
        let FilterSearch = searchResults.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.authors.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento
            }
        })
    }
    useEffect(() => {
        fetch('https://anapioficeandfire.com/api/books')
            .then((res) => res.json())
            .then((data) => setData(data))
            .then((data) => setSearchResults(data))
        console.log(data)

    }, []);
    return (
        <div>
            <div class="grid text-center">
                <h3 class="text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl py-6">
                    What are you going to read today?</h3>
                <div class="flex justify-center  ">
                    <input value={searchResults} onChange={searcher} class="py-2 px-2 border-2 border-[#0a2415] rounded-md" type='text' placeholder='Search a tittle or name'></input>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <div>
                    <button class="p-2 rounded-md bg-[#0a2415] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#85d099] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9f2dd] m-4 transform hover:scale-110">Search</button>

                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Authors</th>
                                <th>Publisher</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data &&
                                data.map((data => (
                                    <tr>
                                        <td>{data.name}</td>
                                        <td>{data.authors}</td>
                                        <td>{data.publisher}</td>
                                        <td>{data.country}</td>

                                    </tr>

                                )))
                            }
                        </tbody>
                    </table>
                </div>

                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <p>Quieres agregar un libro?</p>
                    <Link to="/Form" class="p-4 rounded-md bg-[#0a2415] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#85d099] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9f2dd]">More...

                    </Link>

                </div>
            </div>


        </div>

    )
}

export default Books;

