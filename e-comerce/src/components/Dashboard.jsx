import Navbar from "./Navbar/Navbar"
import ItemListConteiner from "./ItemListConteiner/ItemListConteiner"
import ItemDetailConteiner from "./ItemDetailConteiner/ItemDetailConteiner"
import {Routes, Route} from "react-router-dom"
import CartProvider from "../context/CartContext"
import Cart from "./Cart/Cart"
import CheckOut from "./CheckOut/CheackOut"



//Dentro de la propiedad element de Route va el componente que queremos renderizar con esa ruta que asiganmos en "to"
//Routes envuelve todas las rutas.
function Dashboard(){
    return(
        <div>
            <CartProvider>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListConteiner greeting={"Listado de Productos"}/>}/>
                <Route path="/detail/:productId" element={<ItemDetailConteiner/>}/>
                <Route path="/category/:categoryId" element={<ItemListConteiner greeting={"Listado de Productos filtrados"}/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<CheckOut/>}/>
            </Routes>
            </CartProvider>
        </div>
    )
}

export default Dashboard