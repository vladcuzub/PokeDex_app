import  Logo  from "../../../assets/pokemon_logo.png";
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <header>
          <Link to='/'> <img src={Logo} alt="Logo" className="logo_pic"/> </Link>
          <label htmlFor="search"></label>
          <input type="text" name="search" id="search" placeholder="Search Pokemon" />
      </header>
  );
}

export default Header;