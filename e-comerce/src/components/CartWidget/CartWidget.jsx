import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function CartWidget(){

    const {totalQuantity} = useCart()

    return(
        <div>
            <Link to="/cart">
            <IoCart style={{width: 25}} 
            />  
            </Link>
            {totalQuantity}
        </div>
        
    )
}

export default CartWidget