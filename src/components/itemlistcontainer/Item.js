import { ItemCount } from "../itemcount/ItemCount";

export const Item = ({ name, image, description, stock }) => {
    return (
      <div className="itemlist__holder--cards">
        <h1>{name}</h1>
        <img className="itemlist__holder--cardsImg" src={image} alt="" />
        <h2>{description}</h2>
            <h3>Stock disponible: {stock}</h3>
        <button>See details</button>
        <ItemCount />
      </div>
    );
};
export default Item