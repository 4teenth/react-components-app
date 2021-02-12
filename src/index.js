import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const image = React.createElement("img", {
//   src:
//     "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
//   alt: "Tacos With Lime",
//   width: 640,
// });
// const title = React.createElement("h2", null, "Tacos With Lime");
// const price = React.createElement("p", null, "Price: 10.99$");
// const button = React.createElement("button", { type: "button" }, "Add to cart");

// // const product = React.createElement("div", null, image, title, price, button);
// //* OR
// const productWithChildrenInProps = React.createElement("div", {
//   children: [image, title, price, button],
// });

// ReactDOM.render(productWithChildrenInProps, document.getElementById("root"));
