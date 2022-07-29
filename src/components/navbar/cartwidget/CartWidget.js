import cart from "../../../media/bag3.svg"

export const CartWidget = () => {
    return (
        <div className="navbar__cart navbar__icon">
            <img src={cart} alt="Cart Icon" />
            <p>0</p>
        </div>
    )
}