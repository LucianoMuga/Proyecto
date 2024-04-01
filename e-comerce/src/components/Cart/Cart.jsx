import { Link } from "react-router-dom"
import {useCart} from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"

function Cart(){

    const {cart, clearCart, getTotal, totalQuantity} = useCart()
    const total = getTotal()

    if(totalQuantity === 0){
      return <h2>No hay productos en el carrito</h2>
    }

    return(
      <div>
        <h1>Carrito de compras</h1>
        {
          cart.map((item) => {
            return <CartItem key={item.id} {...item} />
          })
        }
        <h3>Total {total}</h3>
        <div>
          <button className="btn btn-outline-primary Btn" onClick={() => clearCart()}>Limpiar Carrito</button>
        </div>
        <Link to={"/checkOut"} className="Btn">Cheackout</Link>

      </div>
    )
}

export default Cart