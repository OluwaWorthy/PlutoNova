import { FaCartShopping } from 'react-icons/fa6';

function Header() {
 let pagetitle = "Pluto Nova";
 return (
    <nav className='nav'> 
      <h1>{pagetitle}</h1>
      <div className='cart'><FaCartShopping /></div>
    </nav>
 )
};

export default Header;