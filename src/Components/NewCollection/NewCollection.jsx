import React, { useLayoutEffect } from "react";
import "./NewCollection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import new_collection from "../Asset/new_collections";
import Item from "../Item/Item";

const NewCollection = () => {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // GSAP Animation
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".collections",
        start: "top center",
        end: "bottom 80%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });

    tl.from(".collections", {
      scale: 1,
      opacity: 0.4,
      x: -300,
      duration: 400,
    }).to(".collections", { scale: 0.9, opacity: 1 });

  }, []);

  return (
    <div className="collections">
      {new_collection.map((item, i) => (
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
  );
};

export default NewCollection;
