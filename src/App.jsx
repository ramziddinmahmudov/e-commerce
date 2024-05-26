import "./App.css";
import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import Shop from "./Pages/Shop";
import Shopcategory from "./Pages/Shopcategory";
import Product from "./Pages/Prodyct";
import Cart from "./Pages/Cart";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import samsung_banner from "./Components/Asset/samsung banner.avif";
import iphone_banner from "./Components/Asset/iphone banner.png";
import nokia_banner from "./Components/Asset/nokia banner.jpg";
import { Route, Routes } from "react-router-dom";
import Bank from "./Components/Bank/CheckoutForm";
import NotFound from "./Components/NotFound/NotFound";
import Office from "./Components/Office/Office"
import Company from "./Components/Company/Company"
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkmode");
    if (isDarkMode === "true") {
      setDarkmode(true);
    }
  }, []);

  const handleDarkMode = () => {
    const updatedDarkMode = !darkmode;
    setDarkmode(updatedDarkMode);
    localStorage.setItem("darkmode", updatedDarkMode.toString());
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);


  return (
    <div id="Parent" className={darkmode ? "darkMode" : ""}>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <Navbar darkmode={darkmode} handleDarkMode={handleDarkMode} />
        <div className="con">
          <Routes>
            <Route path="/" element={<Shop/>} />
            <Route
              path="/samsung"
              element={
                <Shopcategory banner={samsung_banner} category="samsung"/>
              }
            />
            <Route
              path="/iphone"
              element={
                <Shopcategory banner={iphone_banner} category="iphone"/>
              }
            />
            <Route
              path="/nokia"
              element={<Shopcategory banner={nokia_banner} category="nokia"/>}
            />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/checkout"
              element={
                <Elements>
                  <Bank />
                </Elements>
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/office" element={<Office />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </div>
        <Footer />
      </SignedIn>
    </div>
  );
}

export default App;
