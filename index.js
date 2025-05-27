import React from "react";
import ReactDOM, { createRoot } from "react-dom/client"; // for React 18+

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./src/components/App";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import Body from "./src/components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // <-- this makes it the default route for "/"
        element: <Body />,
      },
      {
        path: "home",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router} />);
