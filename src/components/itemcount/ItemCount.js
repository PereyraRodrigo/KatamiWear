import { useState } from "react/cjs/react.development"

export const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter]= useState(initial)

    const add = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }
    const decreace = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <div>
            <p className="itemCounter__title">Producto</p>
            <div className="itemCounter__container">
                <button className="itemCounter__button" onClick={decreace}>-</button>
                <p className="itemCounter__number">{counter}</p>
                <button className="itemCounter__button" onClick={add}>+</button>
            </div>
            <button onClick={onAdd} className="itemCounter__buyButton">Agregar al carrito</button>
        </div>
    )
}