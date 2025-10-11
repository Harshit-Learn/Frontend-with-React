import React, { useState, useEffect } from "react";

const MyStateComponent = () => {
  const [name, setName] = useState("Ajay");
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [names, setNames] = useState([]);
  function changeName() {
    console.log("Clicked.!!");
    return setFlag(!flag);
  }
  function increment() {
    console.log(count);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // setCount(count + 1);
    // setCount(count + 2);
  }
  function decrement() {
    setCount(count - 1);
  }
  function addNames(e) {
    e.preventDefault();
    // setNames(names.push({ id: name.length, name }));
    setNames([...names, { id: name.length, name }]);
  }

  console.log(names);
  return (
    <div>
      <h1>Hello ,{flag ? name : ""}</h1>
      <button onClick={changeName}>Click me</button>
      <hr></hr>
      <button onClick={increment}>Increment</button>
      <div>
        <h2>{count}</h2>
      </div>
      <button onClick={decrement}>Decrement </button>
      <hr></hr>
      <form onSubmit={addNames}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
        <hr></hr>
        <ul>
          {names.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default MyStateComponent;
