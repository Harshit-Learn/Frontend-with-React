import React, { useContext, useRef, useState } from "react";
import CustomInput from "./CustomInput";
import { UserContext } from "../../context/UserContext";

const Parent = () => {
  const { name, setName } = useContext(UserContext);
  // const { name, setName } = useUserDetails();
  const inputEle = useRef("");
  //   const [name, setName] = useState("");
  console.log(inputEle.current);
  return (
    <div>
      Hello, {name}
      <CustomInput
        ref={inputEle}
        changeName={(e) => {
          setName(e.target.value);
        }}
      />
      {/* <button
        onClick={() => {
          inputEle.current.focus();
        }}
      >
        Focus Input
      </button>
      <button
        onClick={() => {
          inputEle.current.value = "";
        }}
      >
        Clear Input
      </button>
      */}
      <button
        onClick={() => {
          inputEle.current.focusInput();
        }}
      >
        Focus
      </button>
      <button
        onClick={() => {
          inputEle.current.clearInput();
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default Parent;
