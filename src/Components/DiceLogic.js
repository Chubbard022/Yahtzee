import React, {useState, useEffect} from "react";
import Dice from "./Dice"
import GameLogic from "./GameLogic"


const DiceLogic = () =>{
    const [rolledDice,setRolledDice] = useState({
                                                diceOne:0,
                                                diceTwo:0,
                                                diceThree:0,
                                                diceFour:0,
                                                diceFive:0,
                                                diceSix:0,

                                                })
    const [reRollDice,setReRollDice] = useState({
                                                diceOne:false,
                                                diceTwo:false,
                                                diceThree:false,
                                                diceFour:false,
                                                diceFive:false,
                                                diceSix:false,
    })
    function rollDice() {
        let temp = {}
        for(let [key,value] of Object.entries(reRollDice)){
            if(value === false){
                let number = (Math.floor(Math.random() * 6) + 1)
                temp[key] = number
            }else{
                //if value is true
                temp[key] = rolledDice[key]
            }
        setRolledDice(temp)
        }
    }

    const wantToReroll = (...pickedDice) =>{
        let reroll = !reRollDice[pickedDice[0]]
        setReRollDice({...reRollDice,[ pickedDice[0]]: reroll})
    }

    console.log(rolledDice)
    return(
        <div>
            <GameLogic rolledDice={rolledDice} />
            <br/>
        <button onClick={rollDice}>ROLL DICE</button>
        <Dice rolledDice={rolledDice} 
              reRollDice={reRollDice}
              wantToReroll={wantToReroll}
              />
        </div>
    )
}

export default DiceLogic


// eventually click on the dice that need to be updated, put those into an array or object
    // pass that object into the function that will reroll those dice
