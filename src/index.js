import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //useState = 초기에 state를 InitialState를 세팅 할 수 있는 옵션
  const [item, setItem] = useState(1);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
