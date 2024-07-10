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
            <Router>
                <Switch>               
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Checkout" component={Checkout}/>
                </Switch>
            </Router>
        </div>
    </div>
 )
  }
  
  export default Cart;