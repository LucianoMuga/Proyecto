import Item from "./Item"

function ItemList({products}){
    return(
        <div>
           {
            products.map((product) => {
                return <Item key={product.id} {...product}/>
            })
           }
        </div>
    )
}

export default ItemList