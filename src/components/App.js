import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

//restaurant data
const App = function () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
