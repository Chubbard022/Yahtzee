import React, {useState, useEffect} from "react";

import "../../styles.css"


const Five = (props) =>{
    return(
        <div>
            <div className="fifth-face">
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
                <div className="column">
                    <span className="pip"></span>
                </div>
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
            </div>
        </div>
    )
}

export default Five