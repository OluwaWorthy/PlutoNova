import { BsCart3 } from 'react-icons/bs';

function Header() {
 let pagetitle = "Pluto Nova";
 return (
    <div>
    <h1>
    <img src='{ BsCart3 }' alt="shopping cart"/>
      {pagetitle}</h1>
    <img src='{ BsCart3 }' alt="shopping cart"/>
    </div>
 )
};

export default Header;