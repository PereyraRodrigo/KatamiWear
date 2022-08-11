import { Link } from "react-router-dom"
import cart from "../../../media/bag3.svg"

export const CartWidget = () => {
    return (
        <div className=" navbar__icon">
            <Link className="navbar__cart" to={`/Bag`}>
                <img src={cart} alt="Cart Icon" />
                <p>0</p>
            </Link>
        </div>
    )
}