import React, { StrictMode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const sayHello = () => console.log("Hello");
  //useEffect = componentDidmoud의 역할을 한다.
  //새로고침을 하면 sayHello를 실행한다.
  //componentDidUpdate의 역할도 하기 때문에 클릭하면 sayHello를 실행한다.
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  //첫번째는 function, 두번째는 조건
  useEffect(sayHello, []);
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
