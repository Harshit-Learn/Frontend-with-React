import React, { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  console.log("ajay", props, ref);
  const inputEle = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputEle.current.focus();
    },
    clearInput: () => {
      inputEle.current.value = "";
    },
  }));

  return (
    <div>
      <input type="text" ref={inputEle} onChange={props.changeName} />
    </div>
  );
});

export default CustomInput;
