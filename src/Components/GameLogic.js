import React, {useState, useEffect} from "react";
import Table from "./Table";
import {Score} from "./helperFunctions/Score"



import "../styles.css";

export default function GameLogic(props) {


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
  const [extraYahtzee,setExtraYahtzee] = useState({
    gameOne: {
      one: {display: "", Clicked: false},
      two: {display: "", Clicked: false},
      three: {display: "", Clicked: false}
    },
    gameTwo: {
      one: {display: "", Clicked: false},
      two: {display: "", Clicked: false},
      three: {display: "", Clicked: false}
    },
    gameThree: {
      one: {display: "", Clicked: false},
      two: {display: "", Clicked: false},
      three: {display: "", Clicked: false}
    },
    gameFour: {
      one: {display: "", Clicked: false},
      two: {display: "", Clicked: false},
      three: {display: "", Clicked: false}
    },
    gameFive: {
      one: {display: "", Clicked: false},
      two: {display: "", Clicked: false},
      three: {display: "", Clicked: false}
    },
    gameSix: {
      one: {display: "", Clicked: false},
      two: {display: "", Clicked: false},
      three: {display: "", Clicked: false}
    }
  })
  const [valueUpper,setValueUpper] = useState({
    gameOne: {
      one: null,
      two: null,
      three: null,
      four: null, 
      five: null,
      six: null 
    },
    gameTwo: {
      one: null,
      two: null,
      three: null,
      four: null, 
      five: null,
      six: null 
    },
    gameThree: {
      one: null,
      two: null,
      three: null,
      four: null, 
      five: null,
      six: null 
    },
    gameFour: {
      one: null,
      two: null,
      three: null,
      four: null, 
      five: null,
      six: null 
    },
    gameFive: {
      one: null,
      two: null,
      three: null,
      four: null, 
      five: null,
      six: null 
    },
    gameSix: {
      one: null,
      two: null,
      three: null,
      four: null, 
      five: null,
      six: null 
    },
  })

  const [valueLower,setValueLower] = useState({
    gameOne: {
      threeOfaKind: null,
      fourOfaKind: null,
      fullHouse: null,
      smallStraight: null,
      largeStraight: null,
      yahtzee: null
    },
    gameTwo: {
      threeOfaKind: null,
      fourOfaKind: null,
      fullHouse: null,
      smallStraight: null,
      largeStraight: null,
      yahtzee: null
    },
    gameThree: {
      threeOfaKind: null,
      fourOfaKind: null,
      fullHouse: null,
      smallStraight: null,
      largeStraight: null,
      yahtzee: null
    },
    gameFour: {
      threeOfaKind: null,
      fourOfaKind: null,
      fullHouse: null,
      smallStraight: null,
      largeStraight: null,
      yahtzee: null
    },
    gameFive: {
      threeOfaKind: null,
      fourOfaKind: null,
      fullHouse: null,
      smallStraight: null,
      largeStraight: null,
      yahtzee: null
    },
    gameSix: {
      threeOfaKind: null,
      fourOfaKind: null,
      fullHouse: null,
      smallStraight: null,
      largeStraight: null,
      yahtzee: null
    },
  })

  // function getGameBonus(){
  //   let gameOne = (
  //     parseInt(score["gameOne ones"], 10) +
  //     parseInt(score["gameOne twos"], 10) +
  //     parseInt(score["gameOne threes"], 10) +
  //     parseInt(score["gameOne fours"], 10) +
  //     parseInt(score["gameOne fives"], 10) +
  //     parseInt(score["gameOne sixes"], 10))
  
  //     let gameTwo =(
  //     parseInt(score["gameTwo ones"], 10) +
  //     parseInt(score["gameTwo twos"], 10) +
  //     parseInt(score["gameTwo threes"], 10) +
  //     parseInt(score["gameTwo fours"], 10) +
  //     parseInt(score["gameTwo fives"], 10) +
  //     parseInt(score["gameTwo sixes"], 10))
  
  //     let gameThree =(
  //     parseInt(score["gameThree ones"], 10) +
  //     parseInt(score["gameThree twos"], 10) +
  //     parseInt(score["gameThree threes"], 10) +
  //     parseInt(score["gameThree fours"], 10) +
  //     parseInt(score["gameThree fives"], 10) +
  //     parseInt(score["gameThree sixes"], 10))
  
  //     let gameFour =(
  //     parseInt(score["gameFour ones"], 10) +
  //     parseInt(score["gameFour twos"], 10) +
  //     parseInt(score["gameFour threes"], 10) +
  //     parseInt(score["gameFour fours"], 10) +
  //     parseInt(score["gameFour fives"], 10) +
  //     parseInt(score["gameFour sixes"], 10))
  
  //     let gameFive =(
  //     parseInt(score["gameFive ones"], 10) +
  //     parseInt(score["gameFive twos"], 10) +
  //     parseInt(score["gameFive threes"], 10) +
  //     parseInt(score["gameFive fours"], 10) +
  //     parseInt(score["gameFive fives"], 10) +
  //     parseInt(score["gameFive sixes"], 10))
  
  //     let gameSix =(
  //     parseInt(score["gameSix ones"], 10) +
  //     parseInt(score["gameSix twos"], 10) +
  //     parseInt(score["gameSix threes"], 10) +
  //     parseInt(score["gameSix fours"], 10) +
  //     parseInt(score["gameSix fives"], 10) +
  //     parseInt(score["gameSix sixes"], 10))


  //     //check to see if the score is greater than 63, else do nothing
  //     if(gameOne > 63){

  //       setGameBonus({...gameBonus, gameOne:35})
  //     }
  //     if(gameTwo > 63){
  //       setGameBonus({...gameBonus, gameTwo:35})
  //     }
  //     if(gameThree > 63){
  //       setGameBonus({...gameBonus, gameThree:35})
  //     }
  //     if(gameFour > 63){
  //       setGameBonus({...gameBonus, gameFour:35})
  //     }
  //     if(gameFive > 63){
  //       setGameBonus({...gameBonus, gameFive:35})
  //     }
  //     if(gameSix > 63){
  //       setGameBonus({...gameBonus, gameSix:35})
  //     }
  // }

  // function getUpperTotal() {
  //   let gameOne = (
  //     parseInt(score["gameOne ones"], 10) +
  //     parseInt(score["gameOne twos"], 10) +
  //     parseInt(score["gameOne threes"], 10) +
  //     parseInt(score["gameOne fours"], 10) +
  //     parseInt(score["gameOne fives"], 10) +
  //     parseInt(score["gameOne sixes"], 10))
  
  //     let gameTwo =(
  //     parseInt(score["gameTwo ones"], 10) +
  //     parseInt(score["gameTwo twos"], 10) +
  //     parseInt(score["gameTwo threes"], 10) +
  //     parseInt(score["gameTwo fours"], 10) +
  //     parseInt(score["gameTwo fives"], 10) +
  //     parseInt(score["gameTwo sixes"], 10))
  
  //     let gameThree =(
  //     parseInt(score["gameThree ones"], 10) +
  //     parseInt(score["gameThree twos"], 10) +
  //     parseInt(score["gameThree threes"], 10) +
  //     parseInt(score["gameThree fours"], 10) +
  //     parseInt(score["gameThree fives"], 10) +
  //     parseInt(score["gameThree sixes"], 10))
  
  //     let gameFour =(
  //     parseInt(score["gameFour ones"], 10) +
  //     parseInt(score["gameFour twos"], 10) +
  //     parseInt(score["gameFour threes"], 10) +
  //     parseInt(score["gameFour fours"], 10) +
  //     parseInt(score["gameFour fives"], 10) +
  //     parseInt(score["gameFour sixes"], 10))
  
  //     let gameFive =(
  //     parseInt(score["gameFive ones"], 10) +
  //     parseInt(score["gameFive twos"], 10) +
  //     parseInt(score["gameFive threes"], 10) +
  //     parseInt(score["gameFive fours"], 10) +
  //     parseInt(score["gameFive fives"], 10) +
  //     parseInt(score["gameFive sixes"], 10))
  
  //     let gameSix =(
  //     parseInt(score["gameSix ones"], 10) +
  //     parseInt(score["gameSix twos"], 10) +
  //     parseInt(score["gameSix threes"], 10) +
  //     parseInt(score["gameSix fours"], 10) +
  //     parseInt(score["gameSix fives"], 10) +
  //     parseInt(score["gameSix sixes"], 10))

  //     if(gameOne > 0){
  //       gameOne = gameOne + gameBonus.gameOne
  //       setUpperTotal({...upperTotal, gameOne})
  //     }
  //     if(gameTwo  > 0){
  //       gameTwo = gameTwo + gameBonus.gameTwo
  //       setUpperTotal({...upperTotal, gameTwo})
  //     }
  //     if(gameThree  > 0){
  //       gameThree = gameThree + gameBonus.gameThree
  //       setUpperTotal({...upperTotal, gameThree})
  //     }
  //     if(gameFour  > 0){
  //       gameFour = gameFour + gameBonus.gameFour
  //       setUpperTotal({...upperTotal, gameFour})
  //     }
  //     if(gameFive  > 0){
  //       gameFive = gameFive + gameBonus.gameFive
  //       setUpperTotal({...upperTotal, gameFive})
  //     }
  //     if(gameSix  > 0){
  //       gameSix = gameSix + gameBonus.gameSix
  //       setUpperTotal({...upperTotal, gameSix})
  //     }
  // }


function test(e){
  let gameNumber = e.target.id.split("-")[0]
  let boxNumber = e.target.id.split("-")[1]
  
  if(extraYahtzee[gameNumber][boxNumber].display == "X"){
    let removeX = extraYahtzee[gameNumber][boxNumber].display = ""
    setExtraYahtzee({...extraYahtzee,removeX})
  }else{
  let addX = extraYahtzee[gameNumber][boxNumber].display = "X"
  setExtraYahtzee({...extraYahtzee,addX})
  }

}

const reset = ()=>{
  props.setClicked(0)
  props.setRolledDice({   
    ...props.rolledDice,                                        
    diceOne:0,
    diceTwo:0,
    diceThree:0,
    diceFour:0,
    diceFive:0,
    diceSix:0,
  })
  
  let temp = {}
  for(let [key,value] of Object.entries(props.reRollDice)){
    if(value === true){
      temp[key] = false
    }else{
      temp[key] = value
    }
  }
  props.setReRollDice(temp)
}

function diceScore(e){
  let idArr = e.target.id.split("-")
  let total = 0
  let condition = Number(idArr[3])
  if(idArr[2] === "upper"){
    //then grab all values that are related to idArr[3]
    for(let [key,value] of Object.entries(props.rolledDice)){
      if(value == condition){
        total += value
      }
    } 
    setValueUpper({...valueUpper,[idArr[0]]: {...valueUpper[idArr[0]],[idArr[1]]:total}})
    reset()
  }
  else{
    for(let [key,value] of Object.entries(props.rolledDice)){
        total += value
    }
    switch(idArr[1]){
      case "threeOfaKind":
          setValueLower({...valueLower,[idArr[0]]: {...valueLower[idArr[0]],[idArr[1]]:total}})
          reset()
        break;
      case "fourOfaKind":
          setValueLower({...valueLower,[idArr[0]]: {...valueLower[idArr[0]],[idArr[1]]:total}})
          reset()
        break;
      case "fullHouse":
          setValueLower({...valueLower,[idArr[0]]: {...valueLower[idArr[0]],[idArr[1]]:25}})
          reset()
        break
      case "smallStraight":
        setValueLower({...valueLower,[idArr[0]]: {...valueLower[idArr[0]],[idArr[1]]:30}})
        reset()
        break;
      case "largeStraight":
        setValueLower({...valueLower,[idArr[0]]: {...valueLower[idArr[0]],[idArr[1]]:40}})
        reset()
        break;
      case "yahtzee":
        setValueLower({...valueLower,[idArr[0]]: {...valueLower[idArr[0]],[idArr[1]]:50}})
        reset()
        break;
      default:
        return
    } 
  }

}

  return (
    <div>
      <Table
        gameBonus={gameBonus}
        
        upperTotal={upperTotal}
        test={test}

        extraYahtzee={extraYahtzee}
        setExtraYahtzee={setExtraYahtzee}

        valueUpper={valueUpper}
        valueLower={valueLower}
        diceScore={diceScore}

      />
      <button className="button">ADD UP UPPER SECTION</button>
      <button className="button">ADD UP UPPER BONUS</button>
      <Score props={props}/>
    </div>
  );
}
