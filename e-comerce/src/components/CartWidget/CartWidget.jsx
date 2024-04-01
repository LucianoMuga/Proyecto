import { IoCart } from "react-icons/io5";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget(){

    const {totalQuantity} = useCart()

    return(
        <div>
            <Link to={"/cart"}>
            <IoCart style={{width: 25}}/>  
            </Link>
            {totalQuantity}
        </div>
        
    )
}

export default CartWidget