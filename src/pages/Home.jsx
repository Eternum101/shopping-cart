import '../styles/Home.css'
import { FaTruckFast, FaDollarSign, FaHeadset } from 'react-icons/fa6'
import Brakes from '../assets/brakes.png'
import { Link } from 'react-router-dom'

export function Home() {
    return (
    <>
    <div className="image-container">
        <div className='text-container'>
            <h2>ONLINE AUTO PARTS STORE</h2>
            <p>PartsGeek is your one-stop-shop for high-quality auto parts at 
            unbeatable prices.
            </p>
            <button className="shop-btn">
                <Link to="./shop">SHOP ALL</Link>
            </button>
        </div>
    </div>
    <div className='card-container'>
        <div className='card-content'>
            <div className='card-icon'>
                <FaTruckFast/>
            </div>
            <div className='card-text'>
                <h3>Free Shipping</h3>
                <p>For Orders Over $100</p>
            </div>
            <div className='card-icon'>
                <FaDollarSign/>
            </div>
            <div className='card-text'>
                <h3>Customer Support</h3>
                <p>24/7 Customer Support Avaliable</p>
            </div>
            <div className='card-icon'>
                <FaHeadset/>
            </div>
            <div className='card-text'>
                <h3>Flexible Payment Options</h3>
                <p>Buy Now, Pay Later Options Avaliable</p>
            </div>
        </div>
    </div>
    <div className='promotion-container'>
        <div className='promotion-text'>
            <h3>Take Care of Your Brakes - 40% Off</h3>
            <p>For Orders Over $100</p>
        </div>
        <div className='promotion-image'>
            <img src={ Brakes }></img>
        </div>
    </div>
    <div className='offers-container'>
        <div className='trust-container'>
            <h3>Brands We Trust</h3>
            <p>We provide over 450 of the world's highest quality automotive parts</p>
            <Link to="./shop">Browse All Parts</Link>
        </div>
        <div className='latest-container'>
            <p>Subscribe To Our Newsletter</p>
            <h3>Get the Latest News & Amazing Offers</h3>
        <div className='latest-search'>
            <input type='text' placeholder='Enter Your Email'></input>
            <button className='btn-subscribe'>Subscribe</button>
        </div>
        </div>
    </div>
    </>
    )   
}