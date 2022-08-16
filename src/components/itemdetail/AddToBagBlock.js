import { ItemCount } from "../itemcount/ItemCount"

export const AddToBagBlock = ({ stock, material, size, color, counter }) => {

    function handleAdd(counter) {
        console.log(`You've added ${counter} items to your cart`);
        console.log(typeof counter);
        //aca no logro lo que quiero, sale undefined
    }
    return (
        <div className="itemDetail__container">
            <div className="itemDetail__block">
                <p>Color</p>
                <p>{color}</p>
            </div>
            <div className="itemDetail__block">
                <p>Size</p>
                <p>{size}</p>
            </div>
            <div className="itemDetail__block">
                <p>Material</p>
                <p>{material}</p>
            </div>
            <div className="itemDetail__block itemDetail__block--counterNaddToBag">
                <div className="col-3 itemDetail__counter">
                    <ItemCount
                        stock={stock}
                        counter={counter}
                        initial={1}
                        handleAdd={handleAdd}
                    />
                </div>
                <div onClick={() => handleAdd(counter)} className="col-9 itemDetail__addToBag">ADD TO BAG</div>
            </div>
            {/* <div>
                    <div className="col-6 itemDetail__checkCart">Check Your Cart</div>
                    <div className="col-6 itemDetail__keepShopping">Keep Shopping</div>
                </div> */}
        </div>
    )
}