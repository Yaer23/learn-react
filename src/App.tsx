import React from "react";
import "./App.css";
import { TodoApp } from "./TodoApp";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header" style={{ float: "right" }}>
        <h3>欢迎来到代码会说话的编程实验室</h3>
        <p>[React &TypeScript](8) Redux Action 部分代码常重构 自定义 combineReducers</p>
        <caption> (TS不仅帮你声明类型,还提供创建类型的助手 ) </caption>
        <TodoApp />
      </header>
    </div>
  );
};

export default App;
