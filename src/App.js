import React from "react";
import GameLogic from "./Components/GameLogic";
import DiceLogic from "./Components/DiceLogic"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <DiceLogic />
    </div>
  );
}
