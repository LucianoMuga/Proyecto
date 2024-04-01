import { useCart } from "../../context/CartContext"
import "./CartItem.css"

function CartItem({id, name, quantity, price}){
    
    const {removeItem} = useCart()

    const handleRemove = (id) => {
        removeItem(id)
    }

    return(
        <article className="CardCartItem">
            <header>
                <h3 className="ItemHeaderCartItem">{name}</h3>
            </header>
            <section className="ContainerItemCartItem">
                <p className="ItemCartItem">Cantidad:{quantity} -</p>
                <p className="ItemCartItem"> Precio por unidad: $ {price}</p>
            </section>
           <footer className="ItemFooterCartItem">
                <p className="InfoCartItem">Subtotal: $ {price * quantity}</p>
                <button className="ButtonCartItem" onClick={() => handleRemove(id)}>X</button>
            </footer> 
        </article>
    )
}

export default CartItem