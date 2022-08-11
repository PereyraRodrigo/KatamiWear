import { Link } from "react-router-dom"
import { YourBagItemBlock } from "../../components/yourbag/YourBagItemBlock"

export const YourBag = () => {
    return (
        <>
            <div className="container">
                <p className="yourBag__title">Your Bag</p>
                <div className="yourBag__container">
                    <div className="yourBag__info">
                        <div className="col-2 yourBag__singleItem">
                            <p>Item</p>
                        </div>
                        <div className="col-10 yourBag__items">
                            <p className="col-2">Name</p>
                            <p className="col-2">Size</p>
                            <p className="col-2">Color</p>
                            <p className="col-2">Quantity</p>
                            <p className="col-2">Price</p>
                            <p className="col-1"> </p>
                        </div>
                    </div>
                    <YourBagItemBlock />
                    <YourBagItemBlock />
                    <div className="yourBag__subtotalBlock">
                        <div className="col-9 yourBag__subtotal">
                            <p className="col-9">Subtotal</p>
                            <p className="col-2">$540</p>
                        </div>
                    </div>
                </div>
            <Link className="yourBag__checkout col-12" to={`/checkout`} >
                Checkout
            </Link>
            </div>
        </>
    )
}