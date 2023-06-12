import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';

function Books() {

  const [books, setBooks] = useState([]);

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

  const tableInstance = useTable({ columns, data : books })

   return (
    <div class="py-4">
        <div class="grid text-center">
            <h3 class="text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl py-6">
                What are you going to read today?</h3>
            <div class="flex justify-center  ">
                <input class="py-2 px-2 border-2 border-[#0a2415] rounded-md" type='text' placeholder='Search a tittle or name'></input>
           </div>
            <div>
                <button class="p-2 rounded-md bg-[#0a2415] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#85d099] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9f2dd] m-4 transform hover:scale-110">Search</button>
            </div>    
        </div>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
       <table {...tableInstance.getTableProps()}>
          <thead class="py-4 text-white bg-[#144026]">
            {tableInstance.headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...tableInstance.getTableBodyProps()}>
            {tableInstance.rows.map(row => {
              tableInstance.prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                  })}
                </tr>
              )
            })}
          </tbody>

       </table>
     </div>

    </div>
     
   );
}
export default Books;

