import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollection from "../Components/NewCollection/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Popular1 from "../Components/Popular1/Popular1.jsx";
import Popular2 from "../Components/Popular2/Popular2.jsx";
import SearchBar from "../Components/Searchbar/Search.jsx"
const Shop = () => {
  return (
    <div>
      <SearchBar/>
      <Hero />
      <Popular />
      <Popular1 />
      <Popular2 />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  );
};

export default Shop;
