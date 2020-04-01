import React,{useState,useEffect} from "react"

import One from "../Components/diceFace/One"
import Two from "../Components/diceFace/Two"
import Three from "../Components/diceFace/Three"
import Four from "../Components/diceFace/Four"
import Five from "../Components/diceFace/Five"
import Six from "../Components/diceFace/Six"


import "../styles.css"

function Dice(props){
  const [classList,setClassList] = useState([''])

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
    return(
        <div>
            {props.rolledDice.diceOne}
            {props.rolledDice.diceTwo}
            {props.rolledDice.diceThree}
            {props.rolledDice.diceFour}
            {props.rolledDice.diceFive}
            {props.rolledDice.diceSix}

          
          {dicePicker(props.rolledDice.diceOne)}
          {dicePicker(props.rolledDice.diceTwo)}
          {dicePicker(props.rolledDice.diceThree)}
          {dicePicker(props.rolledDice.diceFour)}
          {dicePicker(props.rolledDice.diceFive)}
          {dicePicker(props.rolledDice.diceSix)}

          <button onClick={dicePicker}>CLICKING</button>
        </div>
    )
}
export default Dice






// let dice = props.rolledDice
      
// for(let entries in props.rolledDice){
//   console.log("WORKING",entries)
// }
// let ones = <div class="second-face">
// <span class="first"></span>
// </div>
// let twos = <div class="second-face">
// <span class="pip"></span>
// <span class="pip"></span>
// </div>
// setClassList([ones])

// console.log("ONES",ones)
// console.log("TWOS",twos)


{/* <div onClick={classPicker} class="second-face">
  <span class="first"></span>
</div>

<div class="second-face">
  <span class="pip"></span>
  <span class="pip"></span>
</div>

<div class="third-face">
  <span class="pip"></span>
  <span class="pip"></span>
  <span class="pip"></span>
</div>

<div class="fourth-face">
  <div class="column">
    <span class="pip"></span>
    <span class="pip"></span>
  </div>
  <div class="column">
    <span class="pip"></span>
    <span class="pip"></span>
  </div>

</div>
<div class="fifth-face">
  <div class="column">
    <span class="pip"></span>
    <span class="pip"></span>
  </div>
  <div class="column">
    <span class="pip"></span>
  </div>
  <div class="column">
    <span class="pip"></span>
    <span class="pip"></span>
  </div>
</div>

<div class="sixth-face">
  <div class="column">
    <span class="pip"></span>
    <span class="pip"></span>
    <span class="pip"></span>
  </div>

  <div class="column">
    <span class="pip"></span>
    <span class="pip"></span>
    <span class="pip"></span>
  </div>
</div> */}