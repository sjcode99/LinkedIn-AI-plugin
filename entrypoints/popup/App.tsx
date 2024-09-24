import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import wxtLogo from "/wxt.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={wxtLogo} alt="wxt-logo" height="60px" width="60px" />{" "}
        <img src={reactLogo} alt="react-logo" height="60px" width="60px" />
        <h4>
          Extension made using React + Typescript + WXT Framework + Tailwind
        </h4>
      </div>
    </>
  );
}

export default App;
