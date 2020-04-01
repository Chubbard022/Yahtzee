import React, {useState, useEffect} from "react";

import "../../styles.css"


const Four = (props) =>{
    console.log(props.keepDice.four)
    return(
        <div id='props.keepDice.four'>
            <div id={props.keepDice.four} className="fourth-face">
                <div id={props.keepDice.four} className="column">
                    <span id={props.keepDice.four} className="pip"></span>
                    <span id={props.keepDice.four} className="pip"></span>
                </div>
                <div id={props.keepDice.four} className="column">
                    <span id={props.keepDice.four} className="pip"></span>
                    <span id={props.keepDice.four} className="pip"></span>
                </div>
            </div>
        </div>
    )
}

export default Four