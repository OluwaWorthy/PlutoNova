import { FaCartShopping } from 'react-icons/fa6';

function Header() {
 let pagetitle = "Pluto Nova";
 return (
    <nav className='nav'> 
      <div className='logo'>
        <div><img src='Images/PlutoLogo.png' alt='PlutoNova logo'/></div>
        <h1>{pagetitle}</h1></div>
      <div className='cart'><FaCartShopping /></div>
    </nav>
 )
};

export default Header;