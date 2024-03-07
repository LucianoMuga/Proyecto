import { Link } from "react-router-dom"

function Item({name, img, category, price, id}){
    return(
        <div className="container-fluid">
            <h1 className="text-body-secondary">{name}</h1>
            <img src={img} width={"200"}/>
            <h2 className="text-body-secondary">{category}</h2>
            <h3 className="text-body-secondary"> $ {price}</h3>
            <Link to={`/detail/${id}`} type="button" className="btn btn-outline-primary">Ver detalle</Link>
        </div>
    )
}

export default Item
