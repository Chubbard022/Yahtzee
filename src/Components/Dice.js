import React,{useState,useEffect} from "react"

import One from "../Components/diceFace/One"
import Two from "../Components/diceFace/Two"
import Three from "../Components/diceFace/Three"
import Four from "../Components/diceFace/Four"
import Five from "../Components/diceFace/Five"
import Six from "../Components/diceFace/Six"


import "../styles.css"


function Dice(props){
    let [keepDice,setKeepDice] = useState([{one:false},{two:false},{three:false},{four:false},{five:false},{six:false}])

    function dicePicker(die){
      switch(die){
        case 1:
          return <One keepDice={keepDice[0]}/>
          break;
        case 2:
          return <Two keepDice={keepDice[1]}/>
          break;
        case 3:
          return <Three keepDice={keepDice[2]}/>
          break;
        case 4:
          return <Four keepDice={keepDice[3]}/>
          break;
        case 5:
          return <Five keepDice={keepDice[4]}/>
          break;
        case 6:
          return <Six keepDice={keepDice[5]}/>
          break;
        default:
          return 
      }
    }
    function test(e){
        let diceId = e.target.id
        console.log(diceId)
 
        
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

