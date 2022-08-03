export const AddToBagBlock = () => {
    return (
        <div className="prodPage__container">
            <div className="prodPage__block">Color</div>
            <div className="prodPage__block">
                <div>Size</div>
                <div></div>
            </div>
            <div className="prodPage__block">
                <p>Material</p>
                <p>100% Cotton</p>
            </div>
            <div className="prodPage__block">
                <div className="col-3 prodPage__counter">Counter</div>
                <div className="col-9 prodPage__addToBag">ADD TO BAG</div>
            </div>
        </div>
    )
}