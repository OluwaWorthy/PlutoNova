function Checkout() {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        console.log(this.inputNode.value)
    }
    return (
        <div>
            <div className="delivery">
                <h2>Delivery/Shipping</h2>
                  <label className="deServ">
                    <h3>DHL Delivery</h3>
                    <p>Shipping Fee: <span><bold>N2000</bold></span></p>
                    <p>Estimated Delivery Date: Aug 21</p>
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>
                </label>
                <label className="deServ">
                    <h3>FedEx Delivery</h3>
                    <p>Shipping Fee: <span><bold>N6000</bold></span></p>
                    <p>Estimated Delivery Date: July 5</p>
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>
                </label>
                <div className="deDetails">
                    <h2><bold>Delivery Details</bold></h2>
                    <form onsubmit={this.handleSubmit} className="form"> 
                        <label>Email:</label>
                        <br />
                        <input type="email" value="" ref={node => (this.inputNode = node)} required />
                        <br />
                        <label>Phone Number:</label>
                        <br />
                        <input type="number" value="" ref={node => (this.inputNode = node)} required />
                        <br />
                        <label>Address:</label>
                        <br />
                        <input type="text" value="" ref={node => (this.inputNode = node)} required />
                        <br />
                            
                    </form>
                </div>
            </div>
            <div className="payment">
                <div>
                    <p>Debit/Credit Card</p>
                    <p>Pay on Delivery</p>
                </div>
                <div>
                    <h2><bold>Card Details</bold></h2>
                    <form onsubmit={this.handleSubmit} className="form"> 
                        <input type="text" value="" ref={node => (this.inputNode = node)} placeholder="John Doe" required />
                        <br />
                        <input type="number" value="" ref={node => (this.inputNode = node)} placeholder="**** **** **** ****" required />
                        <br />
                        <input type="date" value="" ref={node => (this.inputNode = node)} placeholder="02/25" required />
                        <br />
                        <input type="number" value="" ref={node => (this.inputNode = node)} placeholder="cvv" required />
                        <br />
                    </form>
                </div>
                <div>
                    <p>Sub Total</p>
                    <p>Voucher Code</p>
                    <p>Total</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout;