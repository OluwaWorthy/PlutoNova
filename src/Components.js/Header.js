import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import Cart from './Cart.js';
import { Link } from "react-router-dom";

function Header() {
 let pagetitle = "Pluto Nova";
 const [open, setOpen] = React.useState(false);
 return (
    <nav className='nav'> 
      <div className='logo'>
        <Link to="/App" className=""><div><img src='Images/PlutoLogo.png' alt='PlutoNova logo'/></div></Link>
        <Link to="/App" className=""><h1>{pagetitle}</h1></Link>
      </div> 
      <div className='cart'>
        <Link to="/Cart.js" className=""><FaCartShopping /></Link>
      </div>
    </nav>
 )
};

export default Header;