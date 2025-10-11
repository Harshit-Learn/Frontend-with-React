import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const userAuth = (WrapperComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const isAuth = true;

    useEffect(() => {
      console.log("User Authentication", isAuth);
      if (!isAuth) {
        navigate("/");
      }
    }, [isAuth, navigate]);
    return isAuth ? <WrapperComponent {...props} hoc="hello hoc" /> : null;
  };
};

export default userAuth;
