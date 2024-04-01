import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/react.svg"
import { Link } from "react-router-dom"

import "./Navbar.css"



function Navbar(){

    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary NavBar">
    <img src={logo} width="50" ></img>
  <div className="container-fluid">
    <Link to={"/"}>
      <h3>E-comerce</h3>
    </Link>           
    {/* <button className="btn btn-outline-primary">Crear cuenta</button> */}
    <Link to={"/category/celular"}>Celular</Link>
    <Link to={"/category/tablet"}>Tablets</Link>
    <Link to={"/category/computers"}>Notebooks</Link>
  <CartWidget/>
  </div>

</nav>
    )
}

export default Navbar