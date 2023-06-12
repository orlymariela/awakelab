import { useMemo, useEffect, useState} from 'react';
import { useTable} from 'react-table';

function Books(){
    const [data, setData] = useState([]);
    const columns = [
        {
          Header: 'Title',
          accessor: 'name' // Establece el acceso a la propiedad 
        },
        {
          Header: 'Autor',
          accessor: 'authors'
        },
        {
          Header: 'Editorial',
          accessor: 'publisher'
        }
      ];

    useEffect(() => {
         fetch('https://anapioficeandfire.com/api/books') 
          .then(response => response.json())
          .then(data => setData(data))
          console.log(data)
    }, []);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data: data,
      });
return(
    <div>
        <table {...getTableProps()}>
  <thead>
    {headerGroups.map(headerGroup => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map(column => (
          <th {...column.getHeaderProps()}>{column.render('Header')}</th>
        ))}
      </tr>
    ))}
  </thead>

  <tbody {...getTableBodyProps()}>
    {rows.map((row) => {
     prepareRow(row)
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
)
}
export default Books;

