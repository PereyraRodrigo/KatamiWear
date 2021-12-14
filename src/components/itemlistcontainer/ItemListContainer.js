import { ItemCount } from "../itemcount/ItemCount"

export const ItemListContainer = (greeting) => {

    const onAdd = () => {
        alert(`Agregaste un item al carrito`)
    }
    //como puedo hacer para traer la info de cuantos items hay al momento de apretar "agregar al carrito"?
    //para mostrarlo en el alert algo asi como ('agregaste ${counter} items al carrito')
    return (
        <div>
            <p className="itemlist__holder">{greeting.placeholder}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    )
}