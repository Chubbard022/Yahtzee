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
          return <One/>
          break;
        case 2:
          return <Two />
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
    function test(e){
        let diceId = e.target.id
        console.log("1",diceId)
        
        if(diceId.includes("keep")=== true){
            diceId = diceId.split(" ")[0]        
            console.log("2",diceId)
        }else{
        diceId += " keep"   
        console.log("3",diceId)
        }
    }

    return(
        <div className="diceBox">          
          <div onClick={test}>{dicePicker(props.rolledDice.diceOne)}</div>
          <div onClick={test}>{dicePicker(props.rolledDice.diceTwo)}</div>
          <div onClick={test}>{dicePicker(props.rolledDice.diceThree)}</div>
          <div onClick={test}>{dicePicker(props.rolledDice.diceFour)}</div>
          <div onClick={test}>{dicePicker(props.rolledDice.diceFive)}</div>
          <div onClick={test}>{dicePicker(props.rolledDice.diceSix)}</div>
        </div>
    )
}
export default Dice

