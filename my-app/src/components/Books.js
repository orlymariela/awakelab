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
     <div>
       <table {...tableInstance.getTableProps()}>
          <thead>
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
   );
}
export default Books;

