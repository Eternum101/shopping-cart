import '../styles/Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { ShoppingCart } from './ShoppingCart'

export function Navbar() {
    const { cartQuantity, openCart } = useShoppingCart();
    const location = useLocation();

    const handleCartClick = () => {
        console.log('Cart clicked');
        openCart();
    };

    return (
        <header>
            <div className='logo'>
                <Link to="/">
                    <h1>PartsGeek<span>.</span></h1>
                </Link>
            </div>
        <div className='header-right'>
            <div className='header-nav'>
            <Link to="./" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                    <Link to="/store" className={location.pathname === '/store' ? 'nav-link active' : 'nav-link'}>Shop</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>About Us</Link>
            </div>
        <div className='search-input'>
                <input className='input-search' type='text' placeholder='Search Here'></input>
            </div>
            <div className='cart'>
                <Link>
                    <FaCartShopping onClick={handleCartClick}/>
                    <div className='circle-count' onClick={handleCartClick}>{cartQuantity}</div>
                    <ShoppingCart/>
                </Link>
            </div>
        </div>
        </header>
    )
}