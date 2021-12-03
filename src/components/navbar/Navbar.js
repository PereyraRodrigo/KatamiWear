import logoUnf from './../../media/logounf.svg'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="navbar__logo" src={logoUnf} alt="Company Logo" />            
            <ul className="navbar__list">
                <li><a href="index.html">Women</a></li>
                <li><a href="index.html">Men</a></li>
                <li><a href="index.html">Shoes</a></li>
                <li><a href="index.html">About</a></li>
                <li><a href="index.html">Shipping</a></li>
                <li><a href="index.html">Contact</a></li>
            </ul>
        </nav>
    )
}