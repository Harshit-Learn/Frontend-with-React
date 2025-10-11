import React, { useEffect, useLayoutEffect, useState } from "react";

const MyUseEffect = () => {
  console.log("Rendering..");
  const [width, setWidth] = useState(300);
  useEffect(() => {
    console.log("Hello useEffect", width);
    setWidth(600);
  }, [width]);
  return (
    <div
      style={{
        width: `${width}px`,
        backgroundColor: "blue",
        height: "100px",
        transition: "width 1s",
      }}
    >
      MyUseEffect
    </div>
  );
};

export default MyUseEffect;
