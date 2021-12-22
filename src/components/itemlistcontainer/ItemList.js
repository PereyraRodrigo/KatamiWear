import { Item } from "./Item"

export const ItemList = ({productos}) => {
    return (
        <div className="itemlist__holder">
        {productos?.map(({ name, image, description, stock }) => (
          <Item
            key={name}
            name={name}
            image={image}
            description={description}
            stock={stock}
          />
        ))}
        </div>
    )
}

//solo mapea el array q recibe de container y lo itera
export default ItemList