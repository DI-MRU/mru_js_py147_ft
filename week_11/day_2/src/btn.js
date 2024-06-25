// import { useState } from "react";
import { Context } from "./App";
import { useContext } from "react";

const Btn = () => {
  const [signup, setSignup] = useContext(Context);

  const handleClick = () => {
    setSignup(!signup);
  };
  return (
    <button onClick={handleClick}>{signup ? "Sign in" : "Sign out"}</button>
  );
};

export default Btn;
