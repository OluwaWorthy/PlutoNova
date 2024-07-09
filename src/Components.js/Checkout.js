function Checkout () {
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
                    <form onsubmit="get_action(this)" className="form"> 
                        <label>Email:</label>
                        <br />
                        <input type="email" value="" required />
                        <br />
                        <label>Phone Number:</label>
                        <br />
                        <input type="number" value="" required />
                        <br />
                        <label>Address:</label>
                        <br />
                        <input type="text" value="" required />
                        <br />
                        function get_action(form) {
                            form.action = form_action
                        }
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
                    <form onsubmit="get_action(this)" className="form"> 
                        <input type="text" value="" placeholder="John Doe" required />
                        <br />
                        <input type="number" value="" placeholder="**** **** **** ****" required />
                        <br />
                        <input type="date" value="" placeholder="02/25" required />
                        <br />
                        <input type="number" value="" placeholder="cvv" required />
                        <br />
                        function get_action(form) {
                            form.action = form_action
                        }
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