import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'

export function Navbar() {
    return (
        <header>
            <div className='logo'>
                <Link to="./">
                    <h1>PartsGeek<span>.</span></h1>
                </Link>
            </div>
            <div className='header-left'>
                <Link to="./">Home</Link>
                <Link to="./shop">Shop</Link>
                <Link to="./about">About Us</Link>
            </div>
        <div className='header-right'>
            <div className='search-input'>
                <input className='input-search' type='text' placeholder='Search Here'></input>
            </div>
            <div className='cart'>
                <Link>
                    <FaCartShopping />
                    <div className='circle-count '>3</div>
                </Link>
            </div>
        </div>
        </header>
    )
}