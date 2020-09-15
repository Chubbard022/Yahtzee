import React, {useState} from "react";
import Dice from "./Dice"
import {GameLogic} from "./GameLogic"


const DiceLogic = () =>{
    const [clicked,setClicked] = useState(0)
    const [rolledDice,setRolledDice] = useState({
                                                diceOne:0,
                                                diceTwo:0,
                                                diceThree:0,
                                                diceFour:0,
                                                diceFive:0,

                                                })
    const [reRollDice,setReRollDice] = useState({
                                                diceOne:false,
                                                diceTwo:false,
                                                diceThree:false,
                                                diceFour:false,
                                                diceFive:false,
    })



    function rollDice() {
        setClicked(clicked+1)
        setRolledDice(randomizeDice(reRollDice,rolledDice))
    }

    function randomizeDice(reRollDice,rolledDice){
        let tempObj = {};
        for(let [key,value] of Object.entries(reRollDice)){
            if(value === false){
                let number = (Math.floor(Math.random() * 6) + 1)
                tempObj[key] = number;
            }else{
                tempObj[key] = rolledDice[key];
            }
        }
        return tempObj;
    }

    const wantToReroll = (...pickedDice) =>{
        let reroll = !reRollDice[pickedDice[0]]
        setReRollDice({...reRollDice,[ pickedDice[0]]: reroll})
    }

    return(
        <div>
            <GameLogic 
                setReRollDice={setReRollDice}
                reRollDice={reRollDice}

                setRolledDice={setRolledDice}
                rolledDice={rolledDice}

                setClicked={setClicked}
                clicked={clicked}
            />
            <br/>
        {clicked < 3 ? (<button onClick={rollDice}>ROLL DICE</button>) :( <p> Please choose where to score dice</p> )}
        <Dice rolledDice={rolledDice} 
            reRollDice={reRollDice}
            wantToReroll={wantToReroll}
        />
        </div>
    )
}

export default DiceLogic

