import { Link } from "react-router-dom";

function Cart() {
    let pagetitle = "Pluto Nova";
 return (
    <div>
        <div className="cart">
            <nav className='nav'> 
            <div className='logo'>
                <div><img src='Images/PlutoLogo.png' alt='PlutoNova logo'/></div>
                <h1>{pagetitle}</h1></div>
            </nav>
            <div className="checkout">
                <button className="shopMore">
                    Shop More
                </button>
                <div className="gotToCheckout">
                    <Link to="./Checkout.js" className="">Got to Checkout</Link>
                </div>
            </div>
        </div>
    </div>
 )
  }
  
  export default Cart;