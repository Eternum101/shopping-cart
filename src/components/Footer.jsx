import '../styles/Footer.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6'

export function Footer() {
    return (
        <footer>
            <div className='footer-content'>
                <div className='footer-links'>
                    <div className='footer-part'>
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
                    </div>
                <div className='footer-part'>
                    <div className='information'>
                        <h3>Information</h3>
                        <div className='information-links'>
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
                        </div>
                    </div>
                </div>
                    <div className='footer-part'>
                        <div className='customer-service'>
                            <h3>Customer Service</h3>
                        </div>
                        <div className='customer-service-links'>
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
                            </div>
                        </div>
                    <div className='footer-part'>
                        <div className='support'>
                            <h3>Support</h3>
                        </div>
                        <div className='support-links'>
                        <li>
                            <a>Shipping & Returns</a>
                        </li>
                        <li>
                            <a>Help & FAQ</a>
                        </li>
                        <li>
                            <a>Status Policy</a>
                        </li>
                        <li>
                            <a>Legal Policy</a>
                        </li>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    )
}