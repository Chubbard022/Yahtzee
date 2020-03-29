import React,{useState,useEffect} from "react"

import "../styles.css"

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
<div class="first-face">
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
</div>
            {/* <button onClick={test}>CLICKING</button> */}
        </div>
    )
}
export default Dice