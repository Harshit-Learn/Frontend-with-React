import React, { useEffect, useRef, useState } from "react";

const MyUseRef = () => {
  const [name, setName] = useState("");
  const count = useRef(0);
  const inputEle = useRef("");
  console.log(count.current);
  //   const [count, setCount] = useState(0);
  useEffect(() => {
    count.current = count.current + 1;
  });

  const handleClick = () => {
    console.log(inputEle.current);
    inputEle.current.style.width = "300px";
    inputEle.current.style.color = "red";
    inputEle.current.focus();
  };
  return (
    <div>
      <h1>MyUseRef</h1>
      <input
        type="text"
        ref={inputEle}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h3>Name {name}</h3>
      <h4>Renders : {count.current}</h4>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default MyUseRef;
