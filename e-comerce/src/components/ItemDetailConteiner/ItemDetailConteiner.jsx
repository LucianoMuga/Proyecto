import ItemDetail from "../ItemDetail/ItemDetail"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./ItemDetailConteiner.css"

import { doc, getDoc } from "firebase/firestore"
import { db } from "../../Services/firebase"


function ItemDetailConteiner(){

    const [product, setProduct] = useState(null)
    const {productId} = useParams()

    useEffect(() => {

        getDoc(doc(db, "products", productId))
            .then((res) => {
                const product = {id: res.id, ...res.data()}
                setProduct(product)
            })
            .catch((error) => {
                console.log(error);
            })
            
    }, [productId])
    
    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailConteiner