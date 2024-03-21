import { useEffect, useState } from "react"
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import {db} from "../../Services/firebase"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import "./ItemListConteiner.css"
import { collection, getDocs, query, where } from "firebase/firestore"

function ItemListConteiner({greeting}){

    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {

        const collectionsRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products")
        getDocs(collectionsRef)
            .then((res) => {
                const products = res.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(products)
            })
            .catch(error => {
                console.log(error);
            })

        // const asyncFunctions = categoryId ? getProductsByCategory : getProducts
      
        // asyncFunctions(categoryId)
        //     .then(response => {
        //         setProducts(response)
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }, [categoryId])



    return(
        
        <div className="ItemListContainer">
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListConteiner