import './App.css'
import { useState } from "react";
import Shop from './Pages/Shop'
import Shopcategory from './Pages/Shopcategory'
import Product from './Pages/Prodyct'
import Cart from './Pages/Cart'
import Footer from './Components/Footer/Footer'
import Navbar from "./Components/Navbar/Navbar"
import samsung_banner from './Components/Asset/samsung banner.avif'
import iphone_banner from './Components/Asset/iphone banner.png'
import nokia_banner from './Components/Asset/nokia banner.jpg'
import {Route,Routes } from 'react-router-dom'
import Bank from "./Components/Bank/Bank"
import { SignedIn , SignedOut,RedirectToSignIn} from "@clerk/clerk-react";
function App() {

  const [darkmode, setDarkmode] = useState(false);

  const handleDarkMode = () => {
    setDarkmode(!darkmode)
  }

  return (
    <div id="Parent" className={darkmode ? 'darkMode' : ''}>
    <SignedOut >
          <RedirectToSignIn/>
        </SignedOut >
        <SignedIn >
          <Navbar darkmode={darkmode} handleDarkMode={handleDarkMode} />
          <div  className="con" >
            <Routes >
              <Route path='/' element={ <Shop /> } />
              <Route path='/samsung' element={ <Shopcategory banner={ samsung_banner} category="samsung" /> } />
              <Route path='/iphone' element={ <Shopcategory banner={ iphone_banner } category="iphone" /> } />
              <Route path='/nokia' element={ <Shopcategory banner={ nokia_banner } category="nokia" /> } />
              <Route path='/product' element={ <Product /> } >
              <Route path=':productId' element={ <Product /> } /></Route >
              <Route path='/cart' element={ <Cart /> } />
              <Route path='/checkout' element={ <Bank /> } />x
            </Routes >
          </div>
            <Footer />
           </SignedIn >
    </div>
  )}

export default App
