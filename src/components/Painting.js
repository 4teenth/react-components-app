import React from "react";
import PropTypes from "prop-types";
import defaultImg from "./defaultImg.jpg";

const Painting = ({ url, title, profileHomePage, tag, price, quantity }) => (
  // console.log(props);
  <div>
    <img src={url} alt={title} width="240" />
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
  url: defaultImg,
};

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  profileHomePage: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
