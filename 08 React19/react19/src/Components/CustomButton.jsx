import React from "react";
import { useFormStatus } from "react-dom";

const CustomButton = () => {
  const { pending, data, method, action } = useFormStatus();
  return (
    <div>
      <button type="submit" disabled={pending}>
        {" "}
        {pending ? "Logging in..." : "Login"}
        <p>{data ? `Reqesting.. ${data.get("email")}` : ""}</p>
      </button>
    </div>
  );
};

export default CustomButton;
