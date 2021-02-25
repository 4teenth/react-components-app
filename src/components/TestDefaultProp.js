import React from "react";
import PropTypes from "prop-types";
import defaultImg from "./defaultImg.jpg";

const TestDefaultProp = ({ test }) => (
  <div>
    {test.map(({ id, url, title, price }) => (
      <div key={id}>
        <img src={url} alt={title} width="400" />
        <h2>{title}</h2>
        <p>Cooossstt: {price} dollars</p>
      </div>
    ))}
  </div>
);
// const TestDefaultProp = ({ id, url, title, price }) => (
//   <div key={id}>
//     <img src={url} alt={title} width="200" height="200" />
//     <h2>{title}</h2>
//     <p>Cooossstt: {price} dollars</p>
//   </div>
// );

TestDefaultProp.defaultProps = {
  url: defaultImg,
};

TestDefaultProp.propTypes = {
  test: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
// TestDefaultProp.propTypes = {
//   id: PropTypes.string.isRequired,
//   url: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

export default TestDefaultProp;
