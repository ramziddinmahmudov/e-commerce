import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import "./Search.css";
import all from "../Asset/all_product";

const Search = () => {
  const [filteredProducts, setFilteredProducts] = useState(all);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const handleSearch = (term) => {
    if (term === "") {
      setFilteredProducts([]);
    } else {
      setFilteredProducts(
        all.filter((product) =>
          product.name.toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1 className="Search_w">Search the other things</h1>
      <input
        className="input"
        type="text"
        placeholder="Search the website"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && <ProductList all={filteredProducts} />}
    </div>
  );
};

export default Search;
