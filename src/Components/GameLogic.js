import React, {useState, useEffect} from "react";
import Table from "./Table";

import "../styles.css";

export default function GameLogic() {
  const [score, setScore] = useState({});
  const [extraY, setExtraY] = useState(false);
  const [upperTotal, setUpperTotal] = useState({
    gameOne: 0,
    gameTwo: 0,
    gameThree: 0,
    gameFour: 0,
    gameFive: 0,
    gameSix: 0
  });
  const [gameBonus, setGameBonus] = useState({
    gameOne: 0,
    gameTwo: 0,
    gameThree: 0,
    gameFour: 0,
    gameFive: 0,
    gameSix: 0
  });
  function getGameBonus() {
    console.log(gameBonus)
      let gameOne = (
        parseInt(score["gameOne ones"], 10) +
        parseInt(score["gameOne twos"], 10) +
        parseInt(score["gameOne threes"], 10) +
        parseInt(score["gameOne fours"], 10) +
        parseInt(score["gameOne fives"], 10) +
        parseInt(score["gameOne sixes"], 10))

        let gameTwo =(
        parseInt(score["gameTwo ones"], 10) +
        parseInt(score["gameTwo twos"], 10) +
        parseInt(score["gameTwo threes"], 10) +
        parseInt(score["gameTwo fours"], 10) +
        parseInt(score["gameTwo fives"], 10) +
        parseInt(score["gameTwo sixes"], 10))

        let gameThree =(
        parseInt(score["gameThree ones"], 10) +
        parseInt(score["gameThree twos"], 10) +
        parseInt(score["gameThree threes"], 10) +
        parseInt(score["gameThree fours"], 10) +
        parseInt(score["gameThree fives"], 10) +
        parseInt(score["gameThree sixes"], 10))

        let gameFour =(
        parseInt(score["gameFour ones"], 10) +
        parseInt(score["gameFour twos"], 10) +
        parseInt(score["gameFour threes"], 10) +
        parseInt(score["gameFour fours"], 10) +
        parseInt(score["gameFour fives"], 10) +
        parseInt(score["gameFour sixes"], 10))
 
        let gameFive =(
        parseInt(score["gameFive ones"], 10) +
        parseInt(score["gameFive twos"], 10) +
        parseInt(score["gameFive threes"], 10) +
        parseInt(score["gameFive fours"], 10) +
        parseInt(score["gameFive fives"], 10) +
        parseInt(score["gameFive sixes"], 10))
  
        let gameSix =(
        parseInt(score["gameSix ones"], 10) +
        parseInt(score["gameSix twos"], 10) +
        parseInt(score["gameSix threes"], 10) +
        parseInt(score["gameSix fours"], 10) +
        parseInt(score["gameSix fives"], 10) +
        parseInt(score["gameSix sixes"], 10))

        setGameBonus({gameOne,gameTwo,gameThree,gameFour,gameFive,gameSix})
        console.log(gameBonus)
    }
  function computeScore(e) {
    let name = e.target.name;
    score[name] = e.target.value;
  }
  function test() {
    console.log(score)
    let scored = parseInt(score["gameOne ones"], 10)
      setGameBonus({gameOne: scored})
      console.log(gameBonus)
  }
  console.log(score);
  return (
    <div>
      <h1>header</h1>
      <Table
        computeScore={computeScore}
        upperTotal={upperTotal}
        gameBonus={gameBonus}
        extraY={extraY}
        setExtraY={setExtraY}
        getGameBonus={getGameBonus}
        teset={test}
      />
      <button onClick={getGameBonus}>TEST</button>
    </div>
  );
}
