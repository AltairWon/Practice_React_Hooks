import React, { StrictMode, useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//click event에 대한 functions을 발생하지 않도록 만들어준다.
const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  //click하면 say Hello가 나오도록 하는 방법
  const sayHello = () => console.log("Say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <div ref={title}>Hi</div>
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
