import Navbar from "./Navbar/Navbar"
import ItemListConteiner from "./ItemListConteiner/ItemListConteiner"
import ItemDetailConteiner from "./ItemListConteiner/ItemDetailConteiner"
import {Routes, Route} from "react-router-dom"

//Dentro de la propiedad element de Route va el componente que queremos renderizar con esa ruta que asiganmos en "to"
//Routes envuelve todas las rutas.
function Dashboard(){
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListConteiner greeting={"Listado de Productos"}/>}/>
                <Route path="/detail/:productId" element={<ItemDetailConteiner/>}/>
                <Route path="/category/:categoryId" element={<ItemListConteiner greeting={"Listado de Productos filtrados"}/>}/>
            </Routes>
        </div>
    )
}

export default Dashboard