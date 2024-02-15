import CartWidget from "./CartWidget"

function Navbar(){

    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <h3>E-comerce</h3>
    <button>Crear cuenta</button>
    <button>Iniciar session</button>
    <button>Carrito</button>
  <CartWidget/>
  </div>
</nav>
    )
}

export default Navbar