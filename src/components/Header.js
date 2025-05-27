import { Link } from "react-router-dom";

const Header = function () {
  return (
    <div id="header">
      <Logo />
      <Menu />
    </div>
  );
};

const Logo = function () {
  return (
    <div id="logo">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzXbpAxicgZCx0MOgvbfweEKVDYY2aETS1A&s"
        alt="Logo"
      />
    </div>
  );
};

const Menu = function () {
  return (
    <div id="menu">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
