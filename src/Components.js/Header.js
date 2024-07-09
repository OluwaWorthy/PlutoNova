import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import Cart from './Cart.js';

function Header() {
 let pagetitle = "Pluto Nova";
 const [open, setOpen] = React.useState(false);
 return (
    <nav className='nav'> 
      <div className='logo'>
        <div><img src='Images/PlutoLogo.png' alt='PlutoNova logo'/></div>
        <h1>{pagetitle}</h1></div>
      <div className='cart'>
          <a onClick={() => setOpen(true)}><FaCartShopping /></a>
          {open && <Cart />}
      </div>
    </nav>
 )
};

export default Header;