import React from "react";
import ReactDOM, { createRoot } from "react-dom/client"; // for React 18+

import Body from "./src/components/Body";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

var root = document.getElementById("root");
var rootReact = createRoot(root);

//restaurant data


rootReact.render(
  <>
    <Header />
    <Body />
    <Footer />
  </>
);
