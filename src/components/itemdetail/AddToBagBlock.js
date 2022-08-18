import { ItemCount } from "../itemcount/ItemCount"

export const AddToBagBlock = ({ stock, material, size, color, counter, setCounter, initial }) => {
    const handleSubmit = () => {
        console.log(`You've added ${counter} items to your cart`)
    }
    const handleAdd = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }
    const handleSubstract = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
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
                        counter={counter}
                        handleAdd={handleAdd}
                        handleSubstract={handleSubstract}
                    />
                </div>
                <div onClick={()=>handleSubmit()} className="col-9 itemDetail__addToBag">ADD TO BAG</div>
            </div>
        </div>
    )
}