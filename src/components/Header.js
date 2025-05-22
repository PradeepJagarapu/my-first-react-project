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
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About us</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
