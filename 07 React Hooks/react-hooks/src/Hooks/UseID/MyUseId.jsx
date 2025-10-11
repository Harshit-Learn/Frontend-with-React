import React, { useId } from "react";

export const MyUseID = () => {
  const id = useId();
  return (
    <div>
      <input type="Checkbox" id={id} />
      <label htmlFor={id}>Accept Term & Condition</label>
    </div>
  );
};
