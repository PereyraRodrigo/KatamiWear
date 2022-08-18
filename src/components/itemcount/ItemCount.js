export const ItemCount = ({counter,handleAdd,handleSubstract}) => {    
    return (
        <>
            <div className="itemCounter__container">
                <button className="itemCounter__button" onClick={handleSubstract}>-</button>
                <p className="itemCounter__number" >{counter}</p>
                <button className="itemCounter__button" onClick={handleAdd}>+</button>
            </div>
        </>
    )
}