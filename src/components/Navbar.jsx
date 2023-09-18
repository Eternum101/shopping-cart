import '../styles/Navbar.css'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { ShoppingCart } from './ShoppingCart'

export function Navbar() {
    const { cartQuantity, openCart } = useShoppingCart();
    const location = useLocation();

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const closeNav = () => {
        setIsNavExpanded(false);
    }

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
            <button className="menu-icon" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }}>
            {/* icon from heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
            <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
            />
            </svg>
      </button>
        <div className='header-right'>
        <div
        className={
          isNavExpanded ? "header-nav expanded" : "header-nav"
        }
      >
                <ul>
                    <li>
                        <Link to="./" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} onClick={closeNav}>Home</Link>
                    </li>
                    <li>
                        <Link to="/store" className={location.pathname === '/store' ? 'nav-link active' : 'nav-link'} onClick={closeNav}>Shop</Link>
                    </li>
                    <li>
                    <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'} onClick={closeNav}>About Us</Link>
                    </li>
                <div className='search-input'>
                    <input className='input-search' type='text' placeholder='Search Here'></input>
                </div>
                </ul>
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