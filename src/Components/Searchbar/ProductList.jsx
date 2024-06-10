import React from "react";
import Item from "../Item/Item";

const ProductList = ({ all }) => {
  return (
    <div className="product-list">
      {all.length > 5 ? (
        <div className="product-list11">
          {all.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      ) : (
        <div>Mahsulot topilmadi</div>
      )}
    </div>
  );
};

export default ProductList;
