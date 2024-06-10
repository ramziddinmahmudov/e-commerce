import React, { useState, useEffect } from 'react';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import './Vocal.css';

const products = [
  {
    id: 1,
    name: "Iphone X",
    price: 250,
    img: "/src/Components/Asset/iphone10.png",
  },
  {
    id: 2,
    name: "Samsung",
    price: 960,
    img: "/src/Components/Asset/s24.png",
  },
  {
    id: 3,
    name: "Nokia",
    price: 100,
    img: "/src/Components/Asset/nokia1.png",
  },
];

function VocalSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState(null);
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Web Speech API is not supported in this browser.');
    }
  }, []);

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setError(null);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        setIsListening(false);
        searchProduct(transcript); 
      };

      recognition.onerror = (event) => {
        setError('Error occurred in recognition: ' + event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    }
  };

  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
    } else {
      startListening();
    }
  };

  const searchProduct = (transcript) => {
    const foundProduct = products.find(product => product.name.toLowerCase() === transcript.toLowerCase());

    if (foundProduct) {
      setSearchResult(foundProduct);
    } else {
      setSearchResult(null);
    }
  };

  return (
    <div className="vocal-search-container">
      <div className="header">
        <h1 className="title">Sound Result</h1>
      </div>
      <button onClick={toggleListening} className="mic-button">
        {isListening ? <FaMicrophone /> : <FaMicrophoneSlash />}
      </button>
      {error && <p className="error">{error}</p>}
      <input
        className="search-input"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products..."
      />
      {searchResult ? (
        <div className="product-result">
          <img src={searchResult.img} alt={searchResult.name} className="product-image" />
          <h2 className="product-name">{searchResult.name}</h2>
          <p className="product-price">{searchResult.price} $</p>
        </div>
      ) : searchQuery && (
        <p className="no-result">No product found</p>
      )}
    </div>
  );
}

export default VocalSearch;
