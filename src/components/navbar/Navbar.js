import { CartWidget } from './cartwidget/CartWidget'
import logo from './../../media/logo.png'

export const Navbar = () => {
    return (
        <nav className="container navbar">
            <img className="navbar__logo" src={logo} alt="Company Logo" />            
            <CartWidget />
            <ul className="navbar__list">
                <li><a href="index.html">Women</a></li>
                <li><a href="index.html">Men</a></li>
                <li><a href="index.html">About</a></li>
                <li><a href="index.html">Shipping</a></li>
                <li><a href="index.html">Contact</a></li>
            </ul>
        </nav>
    )
}