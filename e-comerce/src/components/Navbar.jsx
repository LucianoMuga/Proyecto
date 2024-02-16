import CartWidget from "./CartWidget"

function Navbar(){

    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <h3>E-comerce</h3>
    <button className="btn btn-outline-primary">Crear cuenta</button>
    <button className="btn btn-outline-primary">Iniciar session</button>
    <button className="btn btn-outline-primary">Carrito</button>
  <CartWidget/>
  </div>

</nav>
    )
}

export default Navbar