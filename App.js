import React from "react";
import ReactDOM, { createRoot } from "react-dom/client"; // for React 18+

var root = document.getElementById("root");
var rootReact = createRoot(root);

const HeaderDiv = function () {
  return (
    <div id="header">
      <LogoDiv />
      <MenuDiv />
    </div>
  );
};

const LogoDiv = function () {
  return (
    <div id="logo">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzXbpAxicgZCx0MOgvbfweEKVDYY2aETS1A&s"
        alt="Logo"
      />
    </div>
  );
};

const MenuDiv = function () {
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

const BodyDiv = function () {
  return (
    <div id="body">
      <SearchBoxDiv />
      <FoodItemsDiv />
    </div>
  );
};

const SearchBoxDiv = function () {
  return (
    <div id="searchBox">
      <input type="text" placeholder="Search" />
      <button>Search</button>
    </div>
  );
};

const FoodItemsDiv = function () {
  return (
    <div id="foodItems">
      <FoodCardDiv />
      <FoodCardDiv />
      <FoodCardDiv />
      <FoodCardDiv />
      <FoodCardDiv />
    </div>
  );
};

const FoodCardDiv = function () {
  return (
    <div className="foodCard">
      <h1>Title</h1>
      <p>Description</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwJwn3RScXMBHnmkQIYvJhwpsQAKOcSaeaA&s"
        alt="food image"
      />
    </div>
  );
};

const FooterDiv = function () {
  return (
    <div id="footer">
      <LinksDiv />
      <CopyrightInfoDiv />
      <DemoDiv />
    </div>
  );
};

const LinksDiv = function () {
  return <div id="links">Links</div>;
};

const CopyrightInfoDiv = function () {
  return <div id="copyrightInfo">@Copyright info</div>;
};

const DemoDiv = function () {
  return <div id="demo">demo</div>;
};

rootReact.render(
  <>
    <HeaderDiv />
    <BodyDiv />
    <FooterDiv />
  </>
);
