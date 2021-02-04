import React from "react";
import defaultImg from "./defaultImg.jpg";

const Painting = ({ url, title, profileHomePage, tag, price, quantity }) => (
  // console.log(props);
  <div>
    <img src={defaultImg} alt={title} width="240" />
    <h2>{title}</h2>
    <p>
      Author: <a href={profileHomePage}>{tag}</a>
    </p>
    <p>Cost: {price} credits</p>
    <p>Status: {quantity < 10 ? "running out of" : "available"}</p>
    <button type="button">Add to cart</button>
  </div>
);

Painting.defaultProps = {
  url: "https://i.redd.it/1lkv7o7codi21.jpg",
};

export default Painting;
