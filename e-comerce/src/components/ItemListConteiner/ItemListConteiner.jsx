import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

function ItemListConteiner({greeting}){

    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {

        const asyncFunctions = categoryId ? getProductsByCategory : getProducts
      
        asyncFunctions(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error);
            })
    }, [categoryId])



    return(
        
        <div className="container-fluid">
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListConteiner