import React, {useState} from "react";

import {getValues} from "./helperFunctions/objectHelperFunc"
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
  },
  gameTwo: {
    one: null,
    two: null,
    three: null,
    four: null, 
    five: null,
  },
  gameThree: {
    one: null,
    two: null,
    three: null,
    four: null, 
    five: null,
  },
  gameFour: {
    one: null,
    two: null,
    three: null,
    four: null, 
    five: null,
  },
  gameFive: {
    one: null,
    two: null,
    three: null,
    four: null, 
    five: null,
  },
  gameSix: {
    one: null,
    two: null,
    three: null,
    four: null, 
    five: null,
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
const [finalScore,setFinalScore] = useState({
  gameOne: 0,
  gameTwo: 0,
  gameThree: 0,
  gameFour: 0,
  gameFive: 0,
  gameSix: 0
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

function reset(){
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
  let scoreCardCell = e.target.id.split("-")
  let total = 0
  let condition = Number(scoreCardCell[3])


  if(scoreCardCell[2] === "upper"){
    for(let values of Object.values(props.rolledDice)){
      getValues()
      console.log("____VALUE1___",values)
    }
    for(let [key,value] of Object.entries(props.rolledDice)){
      console.log("____VALUE2___",value)
      if(value == condition){
        total += value
      }
    } 
    setValueUpper({...valueUpper,[scoreCardCell[0]]: {...valueUpper[scoreCardCell[0]],[scoreCardCell[1]]:total}})
    reset()
  }
  else{
    for(let [key,value] of Object.entries(props.rolledDice)){
        total += value
    }

    switch(scoreCardCell[1]){
      case "threeOfaKind":
          if(seeIfValid(3)){
            setValueLower({...valueLower,[scoreCardCell[0]]: {...valueLower[scoreCardCell[0]],[scoreCardCell[1]]:total}})
            reset()
            break;
          }else {
            alert("dice don't add up to a three of a kind")
            setValueLower({...valueLower,[scoreCardCell[0]]: {...valueLower[scoreCardCell[0]],[scoreCardCell[1]]:0}})
            reset()
            break;
          }
      case "fourOfaKind":
          if(seeIfValid(4)){
            setValueLower({...valueLower,[scoreCardCell[0]]: {...valueLower[scoreCardCell[0]],[scoreCardCell[1]]:total}})
            reset()
            break;
          }else {
            alert("dice don't add up to a four of a kind")
            setValueLower({...valueLower,[scoreCardCell[0]]: {...valueLower[scoreCardCell[0]],[scoreCardCell[1]]:0}})
            reset()
            break;
          }
      case "fullHouse":
          if(seeIfValid(3) && seeIfValid(2)){
            setValueLower({...valueLower,[scoreCardCell[0]]: {...valueLower[scoreCardCell[0]],[scoreCardCell[1]]:25}})
            reset()
            break;
          }else{
            alert("dice don't add up to a full house")
            setValueLower({...valueLower,[scoreCardCell[0]]: {...valueLower[scoreCardCell[0]],[scoreCardCell[1]]:0}})
            reset()
            break;
          }
      case "smallStraight":
        if(seeIfStraight("smallStraight")){
          setValueLower({...valueLower,[scoreCardCell[0]]: {...valueLower[scoreCardCell[0]],[scoreCardCell[1]]:30}})
          reset()
          break;
        }else{
          alert("dice don't add up to a small straight")
          setValueLower({...valueLower,[scoreCardCell[0]]: {...valueLower[scoreCardCell[0]],[scoreCardCell[1]]:0}})
          break;
        }
      case "largeStraight":
        if (seeIfStraight("smallStraight")){
          setValueLower({...valueLower,[scoreCardCell[0]]: {...valueLower[scoreCardCell[0]],[scoreCardCell[1]]:40}})
          reset()
          break;
        }else{
          alert("dice don't add up to a large straight")
          setValueLower({...valueLower,[scoreCardCell[0]]: {...valueLower[scoreCardCell[0]],[scoreCardCell[1]]:0}})
          reset()
          break;
        }
      case "yahtzee":
        if(seeIfValid(5)){
          setValueLower({...valueLower,[scoreCardCell[0]]: {...valueLower[scoreCardCell[0]],[scoreCardCell[1]]:50}})
          reset()
          break;
        }else{
          alert("dice don't add up to a yahtzee")
          setValueLower({...valueLower,[scoreCardCell[0]]: {...valueLower[scoreCardCell[0]],[scoreCardCell[1]]:0}})
          reset()
          break;
        }
      default:
        break; 
    } 
  }
}

function seeIfValid(condition){
  let tallyUpDie = {}
  for(let [k,v] of Object.entries(props.rolledDice)){
    if(tallyUpDie[v]){
      tallyUpDie[v] += 1
      if(tallyUpDie[v] === condition){
        return true
      }
    }else{
      tallyUpDie[v] = 1
    }
  }
  return false
}

function seeIfStraight(type){
  let isValid = false
  let tallyUpDie = {}

  //change to object.value within object.assign
  for(let [k,v] of Object.entries(props.rolledDice)){
    (tallyUpDie[v]) ? (tallyUpDie[v] += 1) : (tallyUpDie[v] = 1)
  }
  switch(type){
    case "smallStraight":
      if ((tallyUpDie[1] && tallyUpDie[2] && tallyUpDie[3] && tallyUpDie[4]) 
          || 
          (tallyUpDie[2] && tallyUpDie[3] && tallyUpDie[4] && tallyUpDie[5]) 
          ||
          (tallyUpDie[3] && tallyUpDie[4] && tallyUpDie[5] && tallyUpDie[6]) 
        ){
          isValid = true
          }
      break;
    case "largeStraight":
    if (
      (tallyUpDie[1] && tallyUpDie[2] && tallyUpDie[3] && tallyUpDie[4] && tallyUpDie[5]) 
      || 
      (tallyUpDie[2] && tallyUpDie[3] && tallyUpDie[4] && tallyUpDie[5] && tallyUpDie[6]) 
    ){
      isValid = true
    }
    break;
    default:
      return
  } 
  return isValid
}

function addUpperScore(valueUpper){
  let bonus = addGameBonus()

  console.log(valueUpper)
  for(let [gameNumber,val] of Object.entries(valueUpper)){
    if(val.one !== null && val.two !== null && val.three !== null && val.four !== null && val.five !== null){
      let count = 0
      for(let [die,score] of Object.entries(val)){
        count += score; 
      }
      console.log(count)
      count += bonus[gameNumber]
      setUpperTotal({...upperTotal,[gameNumber]: count})

      return {[gameNumber]: count}
    }
  }
}

function addFinalScore(){
  let upper = addUpperScore(valueUpper)

  let extraY = addExtraYahtzee()

  for(let [gameNumber,val] of Object.entries(valueLower)){
    if(val.fourOfaKind !== null && val.threeOfaKind !== null && val.fullHouse !== null &&
      val.smallStraight !==null && val.largeStraight !== null && val.yahtzee){
        let count = 0;
        if(extraY[gameNumber]){
          count += extraY[gameNumber]
        }
        for(let [k,v] of Object.entries(val)){
          count += v
        }
        count += upper[gameNumber]
        setFinalScore({...finalScore,[gameNumber]: count})
    }
  }
}

  return (
    <div>
      <Table
        gameBonus={gameBonus}
        finalScore={finalScore}
        
        upperTotal={upperTotal}
        test={test}

        extraYahtzee={extraYahtzee}

        valueUpper={valueUpper}
        valueLower={valueLower}
        diceScore={diceScore}

      />
      <br/>
      <button className="button" onClick={addUpperScore}>ADD UP UPPER SECTION</button>
      <button className="button" onClick={addFinalScore}>GET FINAL SCORE</button>
      <Score props={props}/>
    </div>
  );
}
