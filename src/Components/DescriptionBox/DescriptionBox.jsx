import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          minima nesciunt expedita corrupti architecto aspernatur, corporis odit
          provident nisi! Dolores fugiat fuga voluptate quibusdam ut quidem rem
          quisquam officia voluptatibus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          illum quae enim atque, quod nemo magnam, temporibus voluptates
          inventore harum dolores unde deserunt animi qui minus sint vel
          voluptas explicabo.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
