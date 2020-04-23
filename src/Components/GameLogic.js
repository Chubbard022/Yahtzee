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


  function addGameBonus(){
    let returnObj = {}
    for(let [key,value] of Object.entries(valueUpper)){
      let count = 0
      for(let [die,num] of Object.entries(value)){
        count += num
      }
      if(count>=63){
        returnObj[key] = 35
      }else{
        returnObj[key] = 0
      }
    }
    setGameBonus(returnObj)
    return returnObj
  }

  function addExtraYahtzee(){
    let returnObj = {}
    for(let [key,value] of Object.entries(extraYahtzee)){
      for(let [game,num] of Object.entries(value)){
        if(num.display === "X"){
          if(!returnObj[key]){
            returnObj[key] = 0
          }
          returnObj[key] += 100
        }
      }
    }
    return returnObj
  }
  
  function addUpperScore(){
    //both are returned objects
    let bonus = addGameBonus()
    let extra = addExtraYahtzee()
    
    for(let [key,value] of Object.entries(upperTotal)){
      let count = 0
      console.log(key,bonus[key],extra[key])
      for(let [num,val] of Object.entries(valueUpper)){
        console.log(num,val)
        //count += key[num][val]
      }
    }


  }

function test(e){
  let gameNumber = e.target.id.split("-")[0]
  let boxNumber = e.target.id.split("-")[1]
  
  if(extraYahtzee[gameNumber][boxNumber].display == "X"){
    let removeX = extraYahtzee[gameNumber][boxNumber].display = ""
    setExtraYahtzee({...extraYahtzee},[removeX])
  }else{
  let addX = extraYahtzee[gameNumber][boxNumber].display = "X"
  setExtraYahtzee({...extraYahtzee},[addX])
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
      <br/>
      <button className="button" onClick={addUpperScore}>ADD UP UPPER SECTION</button>
      <Score props={props}/>
    </div>
  );
}
