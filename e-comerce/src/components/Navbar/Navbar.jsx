import CartWidget from "./CartWidget"
import logo from "../../assets/react.svg"
import { Link } from "react-router-dom"

function Navbar(){

    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <img src={logo} width="50" ></img>
  <div className="container-fluid">
    <Link to={"/"}>
      <h3>E-comerce</h3>
    </Link>
    <button className="btn btn-outline-primary">Crear cuenta</button>
    <button className="btn btn-outline-primary">Iniciar session</button>
    <button className="btn btn-outline-primary">Carrito</button>
    <Link to={"/category/celular"}>Celular</Link>
    <Link to={"/category/tablet"}>Tablet</Link>
  <CartWidget/>
  </div>

</nav>
    )
}

export default Navbar