import React from "react";
// import Painting from "./components/Painting";
import PaintingList from "./components/PaintingList";
import paintingsData from "./paintings.json";

console.log(paintingsData);

// const numbers = [1, 2, 3, 4, 5];
// const colors = ["red", "green", "blue", "pink"];

const App = () => {
  return (
    <div>
      <h1>Главный компонет-контейнер приложения!</h1>
      {/* <ul>
        {numbers.map((number) => (
          <li>{number}</li>
        ))}
      </ul> - collection render */}
      {/* <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul> */}
      <PaintingList paintings={paintingsData} />

      {/* <Painting
        // url={paintingsData[0].url}
        title={paintingsData[0].title}
        price={paintingsData[0].price}
        profileHomePage={paintingsData[0].author.url}
        tag={paintingsData[0].author.tag}
        quantity={paintingsData[0].quantity}
      />

      <Painting
        url="https://i.redd.it/7arvo9lm1r361.jpg"
        title="Meme GaG Generation"
        price={200}
        profileHomePage="https://www.redditery.com/user/not_called_bob/submitted"
        tag="not_called_bob"
        quantity={paintingsData[1].quantity}
      /> */}
    </div>
  );
};

export default App;
