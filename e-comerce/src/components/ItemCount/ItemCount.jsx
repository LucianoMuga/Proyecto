import { useState } from "react"
import "./ItemCount.css"

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

    const reset = () => {
        let initial = 0
        setState(initial)
    }
    

    return(
        <div className="container-fluid Counter">
            <div className="Controls">
            <button type="button" className="btn btn-outline-primary Button" onClick={decrement}>-</button>
                    <h4 className="text-body-secondary Number">{state}</h4> 
            <button  type="button" className="btn btn-outline-primary Button" onClick={increment}>+</button>
            <button type="button" className="btn btn-outline-primary Button" onClick={reset}>Reset</button>
            </div>
            <div>
                <button  type="button" className="btn btn-outline-primary" onClick={() => onAdd(state)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount