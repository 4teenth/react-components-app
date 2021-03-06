import React from "react";
import Logo from "./components/Logo";
// import Painting from "./components/Painting";
import PaintingList from "./components/PaintingList";
import Panel from "./components/Panel";
import paintingsData from "./paintings.json";
import testDefPropDb from "./testDefPropDb.json";
import TestDefaultProp from "./components/TestDefaultProp";

console.log(paintingsData);

// const numbers = [1, 2, 3, 4, 5];
// const colors = ["red", "green", "blue", "pink"];

const Profile = ({ name, email }) => (
  <div>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
  </div>
);

const App = () => {
  return (
    <div>
      <Panel title="Title it's a prop `title` in Panel">
        <p>It's a child(prop-element)</p>
        <a href="www.google.com">One more child, so we have children-prop</a>
      </Panel>
      <Panel>
        <p>Repeat panel child, now, with Profile-elem inside</p>
        <Profile name="SuperUser" email="blabla@code.com" />
      </Panel>
      <Logo text="Главный компонет-контейнер приложения!" />
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

      <TestDefaultProp test={testDefPropDb} />
      {/* <TestDefaultProp
        id={testDefPropDb[1].id}
        url={testDefPropDb[1].url}
        title={testDefPropDb[1].title}
        price={testDefPropDb[1].price}
      /> */}
    </div>
  );
};

export default App;
