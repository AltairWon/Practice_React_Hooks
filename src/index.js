import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//useInput: 기본적으로 input을 업데이트한다.
//이벤트를 분리된 파일, 다른 entity에 연결해서 처리 할 수 있다.
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    //willUpdat = true: 항상 업데이트가 될 것이다.
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

//{...name}으로 간단하게 처리를 할 수 있다.
const App = () => {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
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
