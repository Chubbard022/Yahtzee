import React, {useState, useEffect} from "react";
import Table from "./Table";

import "../styles.css";

export default function GameLogic() {

  const [score, setScore] = useState({});
  
  const [extraY, setExtraY] = useState({extaOne: false, extraTwo: false, extraThree: false});
  
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

  function getUpperTotal() {
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

      if(gameOne > 0){
        setUpperTotal({...gameBonus, gameOne})
      }
      if(gameTwo  > 0){
        setUpperTotal({...gameBonus,gameTwo})
      }
      if(gameThree  > 0){
        setUpperTotal({...gameBonus,gameThree})
      }
      if(gameFour  > 0){
        setUpperTotal({...gameBonus,gameFour})
      }
      if(gameFive  > 0){
        setUpperTotal({...gameBonus,gameFive})
      }
      if(gameSix  > 0){
        setUpperTotal({...gameBonus,gameSix})
      }
    }
  function computeScore(e) {
    let name = e.target.name;
    score[name] = e.target.value;
  }
  function getGameBonus(){
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


      //check to see if the score is greater than 63, else do nothing
      if(gameOne > 63){
        setGameBonus({...gameBonus, gameOne})
      }
      if(gameTwo > 63){
        setGameBonus({...gameBonus,gameTwo})
      }
      if(gameThree > 63){
        setGameBonus({...gameBonus,gameThree})
      }
      if(gameFour > 63){
        setGameBonus({...gameBonus,gameFour})
      }
      if(gameFive > 63){
        setGameBonus({...gameBonus,gameFive})
      }
      if(gameSix > 63){
        setGameBonus({...gameBonus,gameSix})
      }
  }
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
        upperTotal={upperTotal}
      />
      <button onClick={getUpperTotal}>TEST</button>
      <button onClick={getGameBonus}>TEST BONUS</button>
    </div>
  );
}
