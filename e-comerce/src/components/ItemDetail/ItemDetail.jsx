import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useCart } from "../../context/CartContext"

function ItemDetail({id ,name, img, category, price, description, stock}){

    const {addItem, isInCart} = useCart();

    const handleAdd = (count) => {
        console.log("Agregar al carrito");
        const productObjt = {
            id, name, price, quantity: count
        }
        addItem(productObjt)
    }

    return(

        <div className="container-fluid">
            <h1 className="text-body-secondary">{name}</h1>
            <img src={img} width={"200"}/>
            <h2 className="text-body-secondary">Categoria: {category}</h2>
            <h3 className="text-body-secondary"> $ {description}</h3>
            <h4 className="text-body-secondary"> $ {price}</h4>
            <footer>
                {isInCart(id) ? (
                    <Link to={"/cart"}>Ir al carrito</Link>
                ) : (
                    <ItemCount onAdd={handleAdd} stock={stock}/>
                )
                }
            </footer>
            <Link to={"/"}>Volver</Link>
        </div>
    )
}

export default ItemDetail