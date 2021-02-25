import React from "react";
import PropTypes from "prop-types";
import Painting from "./Painting";

// const PaintingList = ({ paintings }) => (
//   <ul>
//     {paintings.map((painting) => (
//       <li key={painting.id}>
//         <Painting
//           //   key={painting.id}
//           url={painting.url}
//           title={painting.title}
//           price={painting.price}
//           profileHomePage={painting.author.url}
//           tag={painting.author.tag}
//           quantity={painting.quantity}
//         />
//       </li>
//     ))}
//   </ul>
// );
// Improvements with id-key props-----------------------
const PaintingList = ({ paintings }) => (
  <ul>
    {paintings.map(
      ({ id, url, title, price, author: { urlAuth, tag }, quantity }) => (
        //*   ({ id, url, title, price, author, quantity }) - look above how use destructuring for @author@
        <li key={id}>
          <Painting
            //* key={id} - see a flag in react components dev tools
            url={url}
            title={title}
            price={price}
            profileHomePage={urlAuth}
            // profileHomePage={author.url}
            tag={tag}
            // tag={author.tag}
            quantity={quantity}
          />
        </li>
      )
    )}
  </ul>
);

PaintingList.propTypes = {
  paintings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      //* Because we wrote props for paintings in Painting
      // url: PropTypes.string,
      // title: PropTypes.string.isRequired,
      // author: PropTypes.shape({
      //   urlAuth: PropTypes.string.isRequired,
      //   tag: PropTypes.string.isRequired,
      // }),
      // price: PropTypes.number.isRequired,
      // quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PaintingList;
