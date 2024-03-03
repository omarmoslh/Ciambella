import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Menu from "./Components/Menu";
import Testimonial from "./Components/Testimonial";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Offers from "./Pages/Offers";
import Contact from "./Components/Contact";
// import { ShopContextProvider } from "./context/shop-context";
import { Cart } from "./Pages/cart/Cart";
import ShoppingCartProvider from "./context/ShoppingCartContext";

function App() {
  return (
    <>
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/testimonial" element={<Testimonial />}></Route>
        <Route path="/newsletter" element={<Newsletter />}></Route>
        <Route path="/offers" element={<Offers />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Footer />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
