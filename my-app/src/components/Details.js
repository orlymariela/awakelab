import React from "react";
function Details(){
    const [{ books }, dispatch] = useStateValue();
    const { name } = useParams()
    const bookselecter = books.filter(book => book.name === name)  
    return(
        <div>
           {bookselecter.lenght>0?
           <div>
             <div className="content text-center">
                <h1 class="text">{bookselecter.name}</h1>
            </div>
           </div>
           :""}
        </div>
    )

}
export default Details;