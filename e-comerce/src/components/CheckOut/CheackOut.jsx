import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { db } from "../../Services/firebase"

import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"

function CheckOut(){

    const [loading, setLoading] = useState(false)
    const [orderCreate, setOrderCreate] = useState(false)

    const {cart, totalQuantity, getTotal, clearCart} = useCart()
    const total = getTotal()

    const createOrder = async () => {
        setLoading(true)
        try {
        const objOrder = {
            buyer: {
                firsName: "Luciano",
                lastName: "Muga",
                phone: "12345",
                adress: "Nihuil"
            },
            items: cart,
            totalQuantity,
            total,
            date: new Date()
        }

        const ids = cart.map((item) => item.id)

        const productsRef = collection(db, "products")

        const productsAddedFromFirestone = await getDocs(
            query(productsRef, where(documentId(), "in", ids)))
            const {docs} = productsAddedFromFirestone

            const outOfStock = []
            const batch = writeBatch(db)

            docs.forEach((doc) => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find((prod) => prod.id === doc.id)
                const productQuantity = productAddedToCart?.quantity

                if(stockDb >= productQuantity){
                    batch.update(doc.ref, {stock: stockDb - productQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            });

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc(orderRef, objOrder)
                console.log(`El id de su orden es: ${orderAdded.id}`);
                clearCart()
                setOrderCreate(true)
            } else {
                console.log("Hay productos que estan fuera de stock");
            }
        }catch(error){
            console.log(error);
        } finally {
            setLoading(false)
        }

    }

    if((loading)){
        return <h1>Se esta generando su orden</h1>
    }

    if(orderCreate){
        return <h1>La orden fue creada correctamente</h1>
    }

    return (
        <div>
            <h2>Cheackout</h2>
            <form>
            <form>
                <label>Nombre :</label>
                <input></input> 
                <label>Apellido</label>
                <input></input> 
                <label>Telefono</label>
                <input></input> 
                <label>Direccion</label>
                <input></input> 
            </form>
            </form>
            <button onClick={createOrder}>Generar orden</button>
        </div>
    )
}

export default CheckOut