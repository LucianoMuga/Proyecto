import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({name, img, category, price, description, stock}){
    return(

        <div className="container-fluid">
            <h1 className="text-body-secondary">{name}</h1>
            <img src={img} width={"300"}/>
            <h2 className="text-body-secondary">Categoria: {category}</h2>
            <h3 className="text-body-secondary"> $ {description}</h3>
            <h4 className="text-body-secondary"> $ {price}</h4>
            <ItemCount stock={stock} onAdd={(state) => console.log("Cantidad de productos", state)}/>
            <Link to={"/"}>Volver</Link>
        </div>
    )
}

export default ItemDetail