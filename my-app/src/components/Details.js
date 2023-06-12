import React from "react";
function Details(){
    const [{ books }, dispatch] = useStateValue();
    const { url } = useParams()
    const bookselecter = books.filter(book => book.url === url)  
    return(
        <div>
           {bookselecter.lenght>0?
           <div>
             <div className="content text-center">
                <h1 id="tituloCity" className="text">{bookselecter[0].name}</h1>
            </div>
           </div>
           :""}
        </div>
    )

}
export default Details;