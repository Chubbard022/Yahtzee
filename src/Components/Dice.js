import React from "react"

import One from "../Components/diceFace/One"
import Two from "../Components/diceFace/Two"
import Three from "../Components/diceFace/Three"
import Four from "../Components/diceFace/Four"
import Five from "../Components/diceFace/Five"
import Six from "../Components/diceFace/Six"


import "../styles.css"


function Dice({reRollDice,wantToReroll,rolledDice}){
    
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
          <div  style={reRollDice.diceOne ? {boxShadow:"13px 21px 22px 16px rgba(156,153,156,1)"} : null } onClick={()=>wantToReroll("diceOne",rolledDice.diceOne)}>{dicePicker(rolledDice.diceOne)}</div>

          <div style={reRollDice.diceTwo ? {boxShadow:"13px 21px 22px 16px rgba(156,153,156,1)"} : null } onClick={()=>wantToReroll("diceTwo", rolledDice.diceTwo)}>{dicePicker(rolledDice.diceTwo)}</div>

          <div style={reRollDice.diceThree ? {boxShadow:"13px 21px 22px 16px rgba(156,153,156,1)"} : null } onClick={()=>wantToReroll("diceThree", rolledDice.diceThree)}>{dicePicker(rolledDice.diceThree)}</div>

          <div style={reRollDice.diceFour ? {boxShadow:"13px 21px 22px 16px rgba(156,153,156,1)"} : null } onClick={()=>wantToReroll("diceFour", rolledDice.diceFour)}>{dicePicker(rolledDice.diceFour)}</div>

          <div style={reRollDice.diceFive ? {boxShadow:"13px 21px 22px 16px rgba(156,153,156,1)"} : null } onClick={()=>wantToReroll("diceFive", rolledDice.diceFive)}>{dicePicker(rolledDice.diceFive)}</div>
        </div>
    )
}
export default Dice
