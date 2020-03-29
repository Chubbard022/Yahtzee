import React, {useState, useEffect} from "react";
import Dice from "./Dice"



const DiceLogic = () =>{
    const [dice] = useState([1,2,3,4,5,6])
    const [rolledDice,setRolledDice] = useState({diceOne:0,diceTwo:0,diceThree:0,diceFour:0,diceFive:0,diceSix:0})

    function rollDice() {

        let obj = {}

        for (let [key, value] of Object.entries(rolledDice)) {
            value = Math.floor(Math.random() * Math.floor(6))
            console.log(key,value)
            rolledDice[key] = value
        }
      }
    function setDice(){
        console.log(rolledDice)
        rollDice()
        
    } 
    
    return(
        <div>
        <button onClick={setDice}>ROLL DICE</button>
        <Dice rolledDice={rolledDice}/>
        </div>
    )
}

export default DiceLogic