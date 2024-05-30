import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div>{product.name}</div>
          </div>
        ))
      ) : (
        <div>Mahsulot topilmadi</div>
      )}
    </div>
  );
}

export default ProductList;
