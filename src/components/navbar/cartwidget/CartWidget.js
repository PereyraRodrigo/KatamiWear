/* import cart from "../../media/shopping-bag.png" */
import cart from "../../../media/shopping-bag.png"

export const CartWidget = () => {
    return (
        <div className="navbar__cart">
            <img src={cart} alt="Cart Icon" />
            <p>0</p>
        </div>
    )
}