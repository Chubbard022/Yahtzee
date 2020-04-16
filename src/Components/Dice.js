import React,{useState,useEffect} from "react"

import One from "../Components/diceFace/One"
import Two from "../Components/diceFace/Two"
import Three from "../Components/diceFace/Three"
import Four from "../Components/diceFace/Four"
import Five from "../Components/diceFace/Five"
import Six from "../Components/diceFace/Six"


import "../styles.css"

function Dice(props){
    const [clicked,setClicked] = useState([false,false,false,false,false,false])
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
    const test = (...stuff) =>{
      console.log(stuff)
    }
    return(
        <div className="diceBox">          
         <div  onClick={(e)=>test("diceOne", props.rolledDice.diceOne)}>{dicePicker(props.rolledDice.diceOne)}</div>

          <div onClick={(e)=>test("diceTwo", props.rolledDice.diceTwo)}>{dicePicker(props.rolledDice.diceTwo)}</div>

          <div onClick={(e)=>test("diceThree", props.rolledDice.diceThree)}>{dicePicker(props.rolledDice.diceThree)}</div>

          <div onClick={(e)=>test("diceFour", props.rolledDice.diceFour)}>{dicePicker(props.rolledDice.diceFour)}</div>

          <div onClick={(e)=>test("diceFive", props.rolledDice.diceFive)}>{dicePicker(props.rolledDice.diceFive)}</div>

          <div onClick={(e)=>test("diceSix", props.rolledDice.diceSix)}>{dicePicker(props.rolledDice.diceSix)}</div>
        </div>
    )
}
export default Dice

