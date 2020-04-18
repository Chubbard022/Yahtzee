import React from "react";
import "../styles.css";

function Table(props) {
  return (
    <div>
      <div className="yahtzeeTable">
        <table className="section">
          <tr>
            <th>UPPER SECTION</th>
            <th>HOW TO SCORE</th>
            <th>GAME #1</th>
            <th>GAME #2</th>
            <th>GAME #3</th>
            <th>GAME #4</th>
            <th>GAME #5</th>
            <th>GAME #6</th>
          </tr>
          <tr>
            <th>1's</th>
            <td>Count 1 for each 1, count only 1's</td>
            <td id="gameOne-one-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameOne.one}</p>
            </td>
            <td id="gameTwo-one-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameTwo.one}</p>
            </td>
            <td id="gameThree-one-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameThree.one}</p>
            </td>
            <td id="gameFour-one-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameFour.one}</p>
            </td>
            <td id="gameFive-one-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameFive.one}</p>
            </td>
            <td id="gameSix-one-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameSix.one}</p>
            </td>
          </tr>
          <tr>
            <th>2's</th>
            <td>Count 2 for each 2, count only 2's</td>
            <td id="gameOne-two-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameOne.two}</p>
            </td>
            <td id="gameTwo-two-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameTwo.two}</p>
            </td>
            <td id="gameThree-two-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameThree.two}</p>
            </td>
            <td id="gameFour-two-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameFour.two}</p>
            </td>
            <td id="gameFive-two-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameFive.two}</p>
            </td>
            <td id="gameSix-two-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameSix.two}</p>
            </td>
          </tr>
          <tr>
            <th>3's</th>
            <td>Count 3 for each 3, count only 3's</td>
            <td id="gameOne-three-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameOne.three}</p>
            </td>
            <td id="gameTwo-three-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameTwo.three}</p>
            </td>
            <td id="gameThree-three-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameThree.three}</p>
            </td>
            <td id="gameFour-three-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameFour.three}</p>
            </td>
            <td id="gameFive-three-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameFive.three}</p>
            </td>
            <td id="gameSix-three-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameSix.three}</p>
            </td>
          </tr>
          <tr>
            <th>4's</th>
            <td>Count 4 for each 4, count only 4's</td>
            <td id="gameOne-four-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameOne.four}</p>
            </td>
            <td id="gameTwo-four-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameTwo.four}</p>
            </td>
            <td id="gameThree-four-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameThree.four}</p>
            </td>
            <td id="gameFour-four-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameFour.four}</p>
            </td>
            <td id="gameFive-four-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameFive.four}</p>
            </td>
            <td id="gameSix-four-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameSix.four}</p>
            </td>
          </tr>
          <tr>
            <th>5's</th>
            <td>Count 5 for each 5, count only 5's</td>
            <td id="gameOne-five-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameOne.five}</p>
            </td>
            <td id="gameTwo-five-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameTwo.five}</p>
            </td>
            <td id="gameThree-five-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameThree.five}</p>
            </td>
            <td id="gameFour-five-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameFour.five}</p>
            </td>
            <td id="gameFive-five-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameFive.five}</p>
            </td>
            <td id="gameSix-five-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameSix.five}</p>
            </td>
          </tr>
          <tr>
            <th>6's</th>
            <td>Count 6 for each 6, count only 6's</td>
            <td id="gameOne-six-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameOne.six}</p>
            </td>
            <td id="gameTwo-six-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameTwo.six}</p>
            </td>
            <td id="gameThree-six-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameThree.six}</p>
            </td>
            <td id="gameFour-six-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameFour.six}</p>
            </td>
            <td id="gameFive-six-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameFive.six}</p>
            </td>
            <td id="gameSix-six-upper" onClick={props.diceScore}>
              <p className="cell">{props.valueUpper.gameSix.six}</p>
            </td>
          </tr>
          <tr>
            <th>BONUS</th>
            <th onClick={props.test}>==></th>
            <td>{props.gameBonus.gameOne}</td>
            <td>
              {props.gameBonus.gameTwo}
              {/* <input className="gameBonus" name="gameTwo bonus" value="63" /> */}
            </td>
            <td>
              {props.gameBonus.gameThree}
              {/* <input className="gameBonus" name="gameThree bonus" value="63" /> */}
            </td>
            <td>{props.gameBonus.gameFour}</td>
            <td>{props.gameBonus.gameFive}</td>
            <td>{props.gameBonus.gameSix}</td>
          </tr>
          <tr>
            <th>TOTAL</th>
            <th> ==></th>
            <td>{props.upperTotal.gameOne}</td>
            <td>{props.upperTotal.gameTwo}</td>
            <td>{props.upperTotal.gameThree}</td>
            <td>{props.upperTotal.gameFour}</td>
            <td>{props.upperTotal.gameFive}</td>
            <td>{props.upperTotal.gameSix}</td>
          </tr>
        </table>

        <br />
        <table className="section">
          <tr>
            <th>LOWER SECTION</th>
            <th>HOW TO SCORE</th>
            <th>GAME #1</th>
            <th>GAME #2</th>
            <th>GAME #3</th>
            <th>GAME #4</th>
            <th>GAME #5</th>
            <th>GAME #6</th>
          </tr>
          <tr>
            <th>3 of a kind</th>
            <td>add upperTotal of dice</td>
            <td id="gameOne-threeOfaKind-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameOne.threeOfaKind}</p>
            </td>
            <td id="gameTwo-threeOfaKind-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameTwo.threeOfaKind}</p>
            </td>
            <td id="gameThree-threeOfaKind-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameThree.threeOfaKind}</p>
            </td>
            <td id="gameFour-threeOfaKind-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameFour.threeOfaKind}</p>
            </td>
            <td id="gameFive-threeOfaKind-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameFive.threeOfaKind}</p>
            </td>
            <td id="gameSix-threeOfaKind-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameSix.threeOfaKind}</p>
            </td>
          </tr>
          <tr>
            <th>4 of a kind</th>
            <td>add upperTotal of dice</td>
            <td id="gameOne-fourOfaKind-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameOne.fourOfaKind}</p>
            </td>
            <td id="gameTwo-fourOfaKind-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameTwo.fourOfaKind}</p>
            </td>
            <td id="gameThree-fourOfaKind-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameThree.fourOfaKind}</p>
            </td>
            <td id="gameFour-fourOfaKind-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameFour.fourOfaKind}</p>
            </td>
            <td id="gameFive-fourOfaKind-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameFive.fourOfaKind}</p>
            </td>
            <td id="gameSix-fourOfaKind-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameSix.fourOfaKind}</p>
            </td>
          </tr>
          <tr>
            <th>Full house</th>
            <td>Score 25</td>
            <td id="gameOne-fullHouse-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameOne.fullHouse}</p>
            </td>
            <td id="gameTwo-fullHouse-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameTwo.fullHouse}</p>
            </td>
            <td id="gameThree-fullHouse-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameThree.fullHouse}</p>
            </td>
            <td id="gameFour-fullHouse-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameFour.fullHouse}</p>
            </td>
            <td id="gameFive-fullHouse-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameFive.fullHouse}</p>
            </td>
            <td id="gameSix-fullHouse-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameSix.fullHouse}</p>
            </td>
          </tr>
          <tr>
            <th>sm. straight</th>
            <td>score 30</td>
            <td id="gameOne-smallStraight-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameOne.smallStraight}</p>
            </td>
            <td id="gameTwo-smallStraight-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameTwo.smallStraight}</p>
            </td>
            <td id="gameThree-smallStraight-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameThree.smallStraight}</p>
            </td>
            <td id="gameFour-smallStraight-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameFour.smallStraight}</p>
            </td>
            <td id="gameFive-smallStraight-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameFive.smallStraight}</p>
            </td>
            <td id="gameSix-smallStraight-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameSix.smallStraight}</p>
            </td>
          </tr>
          <tr>
            <th>Lrg. straight</th>
            <td>score 40</td>
            <td id="gameOne-largeStraight-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameOne.largeStraight}</p>
            </td>
            <td id="gameTwo-largeStraight-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameTwo.largeStraight}</p>
            </td>
            <td id="gameThree-largeStraight-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameThree.largeStraight}</p>
            </td>
            <td id="gameFour-largeStraight-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameFour.largeStraight}</p>
            </td>
            <td id="gameFive-largeStraight-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameFive.largeStraight}</p>
            </td>
            <td id="gameSix-largeStraight-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameSix.largeStraight}</p>
            </td>
          </tr>
          <tr>
            <th>YAHTZEE</th>
            <td>score 50</td>
            <td id="gameOne-yahtzee-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameOne.yahtzee}</p>
            </td>
            <td id="gameTwo-yahtzee-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameTwo.yahtzee}</p>
            </td>
            <td id="gameThree-yahtzee-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameThree.yahtzee}</p>
            </td>
            <td id="gameFour-yahtzee-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameFour.yahtzee}</p>
            </td>
            <td id="gameFive-yahtzee-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameFive.yahtzee}</p>
            </td>
            <td id="gameSix-yahtzee-lower" onClick={props.diceScore}>
              <p className="cell">{props.valueLower.gameSix.yahtzee}</p>
            </td>
          </tr>
          <tr>
            <th>YAHTZEE BONUS</th>
            <td>100 per extra Yahtzee</td>
            <td className="extraYahtzee">
            <div className="extraYahtzeeBox" id="gameOne-one" onClick={props.test}>
                {props.extraYahtzee.gameOne.one.display}
              </div>
              <div className="extraYahtzeeBox" id="gameOne-two" onClick={props.test} >
              {props.extraYahtzee.gameOne.two.display}
              </div>
              <div className="extraYahtzeeBox" id="gameOne-three" onClick={props.test} >
              {props.extraYahtzee.gameOne.three.display}
              </div>
            </td>
            <td className="extraYahtzee">
            <div className="extraYahtzeeBox" id="gameTwo-one" onClick={props.test} >
            {props.extraYahtzee.gameTwo.one.display}
              </div>
              <div className="extraYahtzeeBox" id="gameTwo-two" onClick={props.test} >
              {props.extraYahtzee.gameTwo.two.display}
              </div>
              <div className="extraYahtzeeBox" id="gameTwo-three" onClick={props.test} >
              {props.extraYahtzee.gameTwo.three.display}
              </div>
            </td>
            <td className="extraYahtzee">
            <div className="extraYahtzeeBox" id="gameThree-one" onClick={props.test} >
            {props.extraYahtzee.gameThree.one.display}
              </div>
              <div className="extraYahtzeeBox" id="gameThree-two" onClick={props.test} >
              {props.extraYahtzee.gameThree.two.display}
              </div>
              <div className="extraYahtzeeBox" id="gameThree-three" onClick={props.test} >
              {props.extraYahtzee.gameThree.three.display}
              </div>
            </td>
            <td className="extraYahtzee">
            <div className="extraYahtzeeBox" id="gameFour-one" onClick={props.test} >
            {props.extraYahtzee.gameFour.one.display}
              </div>
              <div className="extraYahtzeeBox" id="gameFour-two" onClick={props.test} >
              {props.extraYahtzee.gameFour.two.display}
              </div>
              <div className="extraYahtzeeBox" id="gameFour-three" onClick={props.test} >
              {props.extraYahtzee.gameFour.three.display}
              </div>
            </td>
            <td className="extraYahtzee">
            <div className="extraYahtzeeBox" id="gameFive-one" onClick={props.test} >
                {props.extraYahtzee.gameFive.one.display}
              </div>
              <div className="extraYahtzeeBox" id="gameFive-two" onClick={props.test} >
                {props.extraYahtzee.gameFive.two.display}
              </div>
              <div className="extraYahtzeeBox" id="gameFive-three" onClick={props.test} >
                {props.extraYahtzee.gameFive.three.display}
              </div>
            </td>
            <td className="extraYahtzee">
            <div className="extraYahtzeeBox" id="gameSix-one" onClick={props.test} >
            {props.extraYahtzee.gameSix.one.display}
              </div>
              <div className="extraYahtzeeBox" id="gameSix-two" onClick={props.test}>
              {props.extraYahtzee.gameSix.two.display}
              </div>
              <div className="extraYahtzeeBox" id="gameSix-three" onClick={props.test}>
              {props.extraYahtzee.gameSix.three.display}
              </div>
            </td>
          </tr>
          <tr>
            <th>TOTAL</th>
            <th> ==></th>
            <td className="upperTotal">{/* Will Compute upperTotal */}0</td>
            <td className="upperTotal">{/* Will Compute upperTotal */}0</td>
            <td className="upperTotal">{/* Will Compute upperTotal */}0</td>
            <td className="upperTotal">{/* Will Compute upperTotal */}0</td>
            <td className="upperTotal">{/* Will Compute upperTotal */}0</td>
            <td className="upperTotal">{/* Will Compute upperTotal */}0</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Table;
