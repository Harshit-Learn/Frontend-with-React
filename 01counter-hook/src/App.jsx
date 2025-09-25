//  *********  What is useState. *************************
// useState is a React Hook that lets you add state to functional components.
// Before React Hooks, state was only possible in class components using this.state and setState().
// With useState, functional components can now manage state.

// ****************** HOW *****************
// useState(initialValue) → takes an initial value (number, string, object, array, etc.).

// ************ Returns two things **********************

// State Variable → stores the current value.
// Updater Function → updates the state.

// Example:
// const [count, setCount] = useState(0);
// count → holds the current state (initially 0).
// setCount → function to update the state.

import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15); // counter have the initial value & setCounter change this value

  // Adding value
  const addvalue = () => {
    //counter >= 20 ? "stop" : setCounter(counter + 1); // logic to increase but not >20
     
    // ye internal callback function rkhtahe , jo initial value ko leta he 
    setCounter(prevCount => prevCount+1)
    setCounter(prevCount => prevCount+1)
    setCounter(prevCount => prevCount+1)
  };

  //Remove Value
  const removevalue = () => {
    counter <= 0 ? "stop" : setCounter(counter-1); // logic to  decrease but not < 0
  };

  return (
    <>
      <h1>Hook Concept</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addvalue}>Add Value</button> <br /> <br />
      <button onClick={removevalue}>Remove Value</button>
    </>
  );
}

export default App;
