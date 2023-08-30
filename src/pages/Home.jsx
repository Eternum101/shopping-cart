import '../styles/Home.css'

export function Home() {
    return (
    <>
    <div className="image-container">
        <div className='text-container'>
            <h2>ONLINE AUTO PARTS STORE</h2>
            <p>PartsGeek is your one-stop-shop for high-quality auto parts at 
            unbeatable prices.
            </p>
            <button className="shop-btn">SHOP ALL</button>
        </div>
    </div>
<div className='content-container'>
    <div className='card-container'>
        <div className='shipping-card'>
            <h3>Shipping</h3>
        </div>
        <div className='support-card'>
            <h3>Customer Support</h3>
        </div>
        <div className='payment-card'>
            <h3>Flexible Payment Options</h3>
        </div>
    </div>
</div>
    </>
    )   
}