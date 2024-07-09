function Cart() {
    let pagetitle = "Pluto Nova";
 return (
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
            <button className="gotToCheckout">
                Got to Checkout
            </button>
        </div>
    </div>
 )
  }
  
  export default Cart;