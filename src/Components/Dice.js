import React,{useState,useEffect} from "react"

import One from "../Components/diceFace/One"
import Two from "../Components/diceFace/Two"
import Three from "../Components/diceFace/Three"
import Four from "../Components/diceFace/Four"
import Five from "../Components/diceFace/Five"
import Six from "../Components/diceFace/Six"


import "../styles.css"


function Dice(props){
    
    function dicePicker(die){
      switch(die){
        case 1:
          return <One />
          break;
        case 2:
          return <Two/>
          break;
        case 3:
          return <Three />
          break;
        case 4:
          return <Four />
          break;
        case 5:
          return <Five />
          break;
        case 6:
          return <Six />
          break;
        default:
          return 
      }
    }
    return(
        <div className="diceBox">          
         <div  style={props.reRollDice.diceOne ? {boxShadow:"13px 21px 22px 16px rgba(156,153,156,1)"} : null } onClick={()=>props.wantToReroll("diceOne", props.rolledDice.diceOne)}>{dicePicker(props.rolledDice.diceOne)}</div>

          <div style={props.reRollDice.diceTwo ? {boxShadow:"13px 21px 22px 16px rgba(156,153,156,1)"} : null } onClick={()=>props.wantToReroll("diceTwo", props.rolledDice.diceTwo)}>{dicePicker(props.rolledDice.diceTwo)}</div>

          <div style={props.reRollDice.diceThree ? {boxShadow:"13px 21px 22px 16px rgba(156,153,156,1)"} : null } onClick={()=>props.wantToReroll("diceThree", props.rolledDice.diceThree)}>{dicePicker(props.rolledDice.diceThree)}</div>

          <div style={props.reRollDice.diceFour ? {boxShadow:"13px 21px 22px 16px rgba(156,153,156,1)"} : null } onClick={()=>props.wantToReroll("diceFour", props.rolledDice.diceFour)}>{dicePicker(props.rolledDice.diceFour)}</div>

          <div style={props.reRollDice.diceFive ? {boxShadow:"13px 21px 22px 16px rgba(156,153,156,1)"} : null } onClick={()=>props.wantToReroll("diceFive", props.rolledDice.diceFive)}>{dicePicker(props.rolledDice.diceFive)}</div>

          <div style={props.reRollDice.diceSix ? {boxShadow:"13px 21px 22px 16px rgba(156,153,156,1)"} : null } onClick={()=>props.wantToReroll("diceSix", props.rolledDice.diceSix)}>{dicePicker(props.rolledDice.diceSix)}</div>
        </div>
    )
}
export default Dice
