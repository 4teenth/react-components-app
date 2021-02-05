import React from "react";
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
    <li>
      {paintings.map((painting) => (
        <Painting
          key={painting.id}
          url={painting.url}
          title={painting.title}
          price={painting.price}
          profileHomePage={painting.author.url}
          tag={painting.author.tag}
          quantity={painting.quantity}
        />
      ))}
    </li>
  </ul>
);

export default PaintingList;
