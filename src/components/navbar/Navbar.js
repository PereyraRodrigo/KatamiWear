import { Link } from 'react-router-dom'
import { CartWidget } from './cartwidget/CartWidget'
import logo from './../../media/logo.png'
import user from '../../media/user.svg'
export const Navbar = () => {
    return (
        <nav className="container navbar">
            <div className='navbar__top'>
                <img className="navbar__icon" src={user} alt="User Icon" />
                <Link to={`/`} >
                    <img className="navbar__logo" src={logo} alt="Company Logo" />
                </Link>
                <CartWidget />
            </div>
            <div className="navbar__list">
                <Link to={`/Women`}>
                    <p>Women</p>
                </Link>
                <Link to={`/Men`}>
                    <p>Men</p>
                </Link>
                <Link to={`/About`}>
                    <p>About</p>
                </Link>
                <Link to={`/Models`}>
                    <p>Models</p>
                </Link>
                <Link to={`/Contact`}>
                    <p>Contact</p>
                </Link>
            </div>
        </nav>
    )
}