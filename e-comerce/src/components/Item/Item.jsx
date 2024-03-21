import { Link } from "react-router-dom"
import "./Item.css"

function Item({name, img, category, price, id}){
    return(
        <article className="CardItem">
        <div>
            <header className="Header">
                <h1 className="Info">{name}</h1>
            </header>
            <picture className="ItemImg">
                <img src={img} width={"100"}/>
            </picture>
            <section className="">
                <h2 className="Info">{category}</h2>
                <h3 className="Info"> $ {price}</h3>
            </section>
            <footer className="ItemFooter">
                <Link to={`/detail/${id}`} type="button" className="btn btn-outline-primary">Ver detalle</Link>
            </footer>
        </div>
        </article>
    )
}

export default Item
