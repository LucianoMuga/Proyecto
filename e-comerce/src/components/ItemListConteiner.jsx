import ItemCount from "./ItemCount"

function ItemListConteiner({greeting}){
    return(
        <div className="container-fluid">
            <h2>{greeting}</h2>
            <ItemCount stock={10} onAdd={(state) => console.log("Cantidad de productos", state)}/>
        </div>
    )
}

export default ItemListConteiner