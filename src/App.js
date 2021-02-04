import React from "react";
import Painting from "./components/Painting";
import paintingsBase from "./paintings.json";

console.log(paintingsBase);

// const numbers = [1, 2, 3, 4, 5];
const colors = ["red", "green", "blue", "pink"];

const App = () => {
  return (
    <div>
      <h1>Главный компонет-контейнер приложения!</h1>
      {/* <ul>
        {numbers.map((number) => (
          <li>{number}</li>
        ))}
      </ul> - collection render */}
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
      <ul>
        {paintingsBase.map((painting) => (
          <li key={painting.id}>
            <Painting
              url={painting.url}
              title={painting.title}
              price={painting.price}
              profileHomePage={painting.author.url}
              tag={painting.author.tag}
              quantity={painting.quantity}
            />
          </li>
        ))}
      </ul>{" "}
      {/* <Painting
        // url={paintingsBase[0].url}
        title={paintingsBase[0].title}
        price={paintingsBase[0].price}
        profileHomePage={paintingsBase[0].author.url}
        tag={paintingsBase[0].author.tag}
        quantity={paintingsBase[0].quantity}
      />

      <Painting
        url="https://i.redd.it/7arvo9lm1r361.jpg"
        title="Meme GaG Generation"
        price={200}
        profileHomePage="https://www.redditery.com/user/not_called_bob/submitted"
        tag="not_called_bob"
        quantity={paintingsBase[1].quantity}
      /> */}
    </div>
  );
};

export default App;
