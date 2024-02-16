import { useState } from "react"

function ItemCount({stock, onAdd}){

    //state es el estado en el cual inicializa mi estado en este caso en 0, setState es lo que le seteamos osea lo que le agregamos al estado.
    const [state, setState]  = useState(1)

    const increment = () => {
        if(state < stock){
            setState(state + 1)
        }
    }

    const decrement = () => {
        if(state > 1){
            setState(state -1)
        }
    }


    return(
        <div className="container-fluid">
            <div>
                <button  type="button" className="btn btn-outline-primary" onClick={increment}>+</button>
                    <h4 className="text-body-secondary">{state}</h4> 
            <button type="button" className="btn btn-outline-primary" onClick={decrement}>-</button>
            </div>
            <div>
                <button  type="button" className="btn btn-outline-primary" onClick={() => onAdd(state)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount