import { useState } from "react/cjs/react.development"

export const ItemCount = ({ stock, initial }) => {
    const [counter, setCounter] = useState(initial)

    const add = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }
    const decreace = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    }
    const onAdd = () => {
        if (stock > 0) {
            alert(`You've added ${counter} items`)
        }
        else {
            alert('There is no stock for this product')
        }
    } 
    return (
        <>
            <div className="itemCounter__top">
                <div className="itemCounter__temp"></div>
                <div className="itemCounter__container">
                    <button className="itemCounter__button" onClick={decreace}>-</button>
                    <p className="itemCounter__number">{counter}</p>
                    <button className="itemCounter__button" onClick={add}>+</button>
                </div>
                <button onClick={onAdd} className="itemCounter__buyButton">Agregar al carrito</button>
            </div>
        </>
    )
}