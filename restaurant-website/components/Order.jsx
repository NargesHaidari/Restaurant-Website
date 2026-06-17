
import './Order.css'
import orderImg from '../src/assets/orderImg.png'

export default function Order() {
    return (
        <div className="order" id="order">
        <h2 className="h2">
            <span>Online</span> Order
        </h2>

        <div className="order-container">
            <div className="container-img">
                <img src={orderImg} alt="image" />
            </div>

            <form className="form">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="your name..." />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="email address..." />
            </div>

            <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" placeholder="phone..." />
            </div>

            <div>
                <label htmlFor="amount">Quantity</label>
                <input type="text" id="amount" placeholder="amount..." />
            </div>

            <div>
                <label htmlFor="food">Food Name</label>
                <input type="text" id="food" placeholder="food name..." />
            </div>

            <div>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="address..." />
            </div>

            <input type="submit" className="record" value="Place Order" />
            </form>
        </div>
        </div>
    );
}