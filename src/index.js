import React, { StrictMode, useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//useConfirm: 사용자가 무언가를 하기전에 확인 하는 것.
const useConfirm = (message = "", callback) => {
  //이if문은 스킵을 해도 좋지만 나중에 함수형 프로그래밍을 이해하는데 도움이 될 것이다.
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback;
    }
  };
  return confirmAction;
};

const App = () => {
  return (
    <div className="App">
      <div>Hi</div>
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
