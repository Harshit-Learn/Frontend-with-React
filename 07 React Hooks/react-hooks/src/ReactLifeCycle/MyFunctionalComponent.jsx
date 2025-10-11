import React, { useEffect, useState } from "react";

const MyFunctionalComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect : Mounting");
  }, []);
  useEffect(() => {
    console.log("UseEffect : Re-render");

    return () => {
      console.log("Removed Component from DOM");
    };
  }, [count]);
  return (
    <div>
      <h2>Count :{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add by 1
      </button>
    </div>
  );
};

export default MyFunctionalComponent;
