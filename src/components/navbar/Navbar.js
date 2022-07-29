import { CartWidget } from './cartwidget/CartWidget'
import logo from './../../media/logo.png'
import user from '../../media/user.svg'
export const Navbar = () => {
    return (
        <nav className="container navbar">
            <div className='navbar__top'>
                <img className="navbar__icon" src={user} alt="User Icon" />
                <img className="navbar__logo" src={logo} alt="Company Logo" />
                <CartWidget />
            </div>
            <div className="navbar__list">
                <a href="index.html">Women</a>
                <a href="index.html">Men</a>
                <a href="index.html">About</a>
                <a href="index.html">Shipping</a>
                <a href="index.html">Contact</a>
            </div>
        </nav>
    )
}