import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Components/Login";
import TodoList from "./Components/useOptimistic/TodoList";
import Posts from "./Components/api-fetch";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>React 19 Hooks</h1>
        {/*<Login />
       <TodoList />*/}
        <Posts />
      </Suspense>
    </>
  );
}

export default App;
