import '../styles/Footer.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6'

export function Footer() {
    return (
        <footer>
            <div className='footer-content'>
                <div className='footer-links'>
                    <ul className='footer-part footer-left'>
                        <h3>PartsGeek<span>.</span></h3>
                        <li>
                            <a>store@partsgeek@gmail.com</a>
                        </li>
                        <li>
                            <a>+0604898351</a>
                        </li>
                        <li>
                            <a>Mo-Fr. 8:00 - 17:00</a>
                        </li>
                        <ul className='social-links'>
                            <li>
                                <FaFacebook/>
                            </li>
                            <li>
                                <FaTwitter/>
                            </li>
                            <li>
                                <FaLinkedin/>
                            </li>
                            <li>
                                <FaInstagram/>
                            </li>
                        </ul>
                    </ul>
                <div className='footer-right'>
                    <ul className='footer-part'>
                        <h3>Information</h3>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Terms of use</a>
                        </li>
                        <li>
                            <a>Privacy Policy</a>
                        </li>
                        <li>
                            <a>Cookies</a>
                        </li>
                        <li>
                            <a>Reviews</a>
                        </li>
                        <li>
                            <a>Media</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                    <ul className='footer-part'>
                        <h3>Customer Service</h3>
                        <li>
                            <a>Customer Dashboard</a>
                        </li>
                        <li>
                            <a>Check my Delivery</a>
                        </li>
                        <li>
                            <a>Payment Methods</a>
                        </li>
                        <li>
                            <a>Delivery Details</a>
                        </li>
                        <li>
                            <a>Complaints</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}