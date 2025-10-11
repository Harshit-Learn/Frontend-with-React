import { useState } from "react";
import "./App.css";
import MyUseEffect from "./Hooks/UseEffect/MyUseEffect";
import MyUseRef from "./Hooks/UseRef/MyUseRef";
import Parent from "./Hooks/UseRef/Parent";
import { UserContext, UserContextProvider } from "./context/UserContext";
// import Counter from "./Hooks/useReducer/Counter";
// import User from "./Hooks/useReducer/User";
// import MyUseMemo from "./Hooks/UseMemo/MyUseMemo";
import MyUseTranslation from "./Hooks/UseTranslation/MyUseTranslation";
// import MyUseDef from "./Hooks/useDeferredValue/MyUseDef";

// import MyClassComponent from "./ReactLifeCycle/MyClassComponent";
// import MyFunctionalComponent from "./ReactLifeCycle/MyFunctionalComponent";
// import MyStateComponent from "./Hooks/MyStateComponent";

function App() {
  // const [show, setShow] = useState(true);
  const [name, setName] = useState("Vijay");
  return (
    <>
      {/*<button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle Component
      </button>
      {show && <MyClassComponent />}
      <MyStateComponent />
      */}
      <h2>App Component</h2>
      {/* <MyUseEffect />

      <MyUseRef />
       <MyUseMemo />
            <MyUseID />
                    <MyUseMemo />
      */}
      <UserContextProvider userDetails={{ name, setName }}>
        {/*<Parent />
        <hr></hr>
        <Counter />
        <hr></hr>
        <User /> 
        */}
        <Parent />
        <MyUseTranslation />
      </UserContextProvider>
    </>
  );
}

export default App;
