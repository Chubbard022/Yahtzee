import React,{useState,useEffect} from "react"


function Dice(props){
    function test(){
        console.log("props",props.rolledDice)
    }
    return(
        <div>
            {props.rolledDice.diceOne}
            {props.rolledDice.diceTwo}
            {props.rolledDice.diceThree}
            {props.rolledDice.diceFour}
            {props.rolledDice.diceFive}
            {props.rolledDice.diceSix}
            {/* <button onClick={test}>CLICKING</button> */}
        </div>
    )
}
export default Dice