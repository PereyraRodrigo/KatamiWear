export const AddToBagBlock = ({material,size,color}) => {
    return (
        <div className="itemDetail__container">
            <div className="itemDetail__block">
                <p>Color</p>
                <p>{ color}</p>
            </div>
            <div className="itemDetail__block">
                <p>Size</p>
                <p>{size}</p>
            </div>
            <div className="itemDetail__block">
                <p>Material</p>
                <p>{material}</p>
            </div>
            <div className="itemDetail__block">
                <div className="col-3 itemDetail__counter">Counter</div>
                <div className="col-9 itemDetail__addToBag">ADD TO BAG</div>
            </div>
        </div>
    )
}