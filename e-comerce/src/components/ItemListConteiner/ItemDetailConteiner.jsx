import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"


function ItemDetailConteiner(){

    const [product, setProduct] = useState(null)
    const {productId} = useParams()

    useEffect(() => {
        getProductsById(productId)
            .then(response => {
                setProduct(response)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [productId])
    
    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailConteiner