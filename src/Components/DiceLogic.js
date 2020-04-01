import React, {useState, useEffect} from "react";
import Dice from "./Dice"



const DiceLogic = () =>{
    const [rolledDice,setRolledDice] = useState({
                                                 diceOne:0,
                                                 diceTwo:0,
                                                 diceThree:0,
                                                 diceFour:0,
                                                 diceFive:0,
                                                 diceSix:0,

                                                })

    function rollDice() {
        let tempHolder = {}
        for (let [key, number] of Object.entries(rolledDice)) {
            number = (Math.floor(Math.random() * 6) + 1)
            tempHolder[key] = number
             setRolledDice(tempHolder)
            }
    }
    console.log(rolledDice)
    return(
        <div>
        <button className="button" onClick={rollDice}>ROLL DICE</button>
        <Dice rolledDice={rolledDice}/>
        </div>
    )
}

export default DiceLogic


// eventually click on the dice that need to be updated, put those into an array or object
    // pass that object into the function that will reroll those dice
