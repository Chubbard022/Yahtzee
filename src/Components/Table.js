import React from "react";
import "../styles.css";

function Table({gameBonus,finalScore,upperTotal,test,extraYahtzee,valueUpper,valueLower,diceScore}) {
  return (
    <div>
      <div className="yahtzeeTable">
        <table className="section">
          <tbody>
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
            </tbody>
          <tbody>
            <tr>
              <th>1's</th>
              <td>Count 1 for each 1, count only 1's</td>
              <td id="gameOne-one-upper-1" onClick={diceScore}>
                <p className="cell">{valueUpper.gameOne.one}</p>
              </td>
              <td id="gameTwo-one-upper-1" onClick={diceScore}>
                <p className="cell">{valueUpper.gameTwo.one}</p>
              </td>
              <td id="gameThree-one-upper-1" onClick={diceScore}>
                <p className="cell">{valueUpper.gameThree.one}</p>
              </td>
              <td id="gameFour-one-upper-1" onClick={diceScore}>
                <p className="cell">{valueUpper.gameFour.one}</p>
              </td>
              <td id="gameFive-one-upper-1" onClick={diceScore}>
                <p className="cell">{valueUpper.gameFive.one}</p>
              </td>
              <td id="gameSix-one-upper-1" onClick={diceScore}>
                <p className="cell">{valueUpper.gameSix.one}</p>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>2's</th>
              <td>Count 2 for each 2, count only 2's</td>
              <td id="gameOne-two-upper-2" onClick={diceScore}>
                <p className="cell">{valueUpper.gameOne.two}</p>
              </td>
              <td id="gameTwo-two-upper-2" onClick={diceScore}>
                <p className="cell">{valueUpper.gameTwo.two}</p>
              </td>
              <td id="gameThree-two-upper-2" onClick={diceScore}>
                <p className="cell">{valueUpper.gameThree.two}</p>
              </td>
              <td id="gameFour-two-upper-2" onClick={diceScore}>
                <p className="cell">{valueUpper.gameFour.two}</p>
              </td>
              <td id="gameFive-two-upper-2" onClick={diceScore}>
                <p className="cell">{valueUpper.gameFive.two}</p>
              </td>
              <td id="gameSix-two-upper-2" onClick={diceScore}>
                <p className="cell">{valueUpper.gameSix.two}</p>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>3's</th>
              <td>Count 3 for each 3, count only 3's</td>
              <td id="gameOne-three-upper-3" onClick={diceScore}>
                <p className="cell">{valueUpper.gameOne.three}</p>
              </td>
              <td id="gameTwo-three-upper-3" onClick={diceScore}>
                <p className="cell">{valueUpper.gameTwo.three}</p>
              </td>
              <td id="gameThree-three-upper-3" onClick={diceScore}>
                <p className="cell">{valueUpper.gameThree.three}</p>
              </td>
              <td id="gameFour-three-upper-3" onClick={diceScore}>
                <p className="cell">{valueUpper.gameFour.three}</p>
              </td>
              <td id="gameFive-three-upper-3" onClick={diceScore}>
                <p className="cell">{valueUpper.gameFive.three}</p>
              </td>
              <td id="gameSix-three-upper-3" onClick={diceScore}>
                <p className="cell">{valueUpper.gameSix.three}</p>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>4's</th>
              <td>Count 4 for each 4, count only 4's</td>
              <td id="gameOne-four-upper-4" onClick={diceScore}>
                <p className="cell">{valueUpper.gameOne.four}</p>
              </td>
              <td id="gameTwo-four-upper-4" onClick={diceScore}>
                <p className="cell">{valueUpper.gameTwo.four}</p>
              </td>
              <td id="gameThree-four-upper-4" onClick={diceScore}>
                <p className="cell">{valueUpper.gameThree.four}</p>
              </td>
              <td id="gameFour-four-upper-4" onClick={diceScore}>
                <p className="cell">{valueUpper.gameFour.four}</p>
              </td>
              <td id="gameFive-four-upper-4" onClick={diceScore}>
                <p className="cell">{valueUpper.gameFive.four}</p>
              </td>
              <td id="gameSix-four-upper-4" onClick={diceScore}>
                <p className="cell">{valueUpper.gameSix.four}</p>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>5's</th>
              <td>Count 5 for each 5, count only 5's</td>
              <td id="gameOne-five-upper-5" onClick={diceScore}>
                <p className="cell">{valueUpper.gameOne.five}</p>
              </td>
              <td id="gameTwo-five-upper-5" onClick={diceScore}>
                <p className="cell">{valueUpper.gameTwo.five}</p>
              </td>
              <td id="gameThree-five-upper-5" onClick={diceScore}>
                <p className="cell">{valueUpper.gameThree.five}</p>
              </td>
              <td id="gameFour-five-upper-5" onClick={diceScore}>
                <p className="cell">{valueUpper.gameFour.five}</p>
              </td>
              <td id="gameFive-five-upper-5" onClick={diceScore}>
                <p className="cell">{valueUpper.gameFive.five}</p>
              </td>
              <td id="gameSix-five-upper-5" onClick={diceScore}>
                <p className="cell">{valueUpper.gameSix.five}</p>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>6's</th>
              <td>Count 6 for each 6, count only 6's</td>
              <td id="gameOne-six-upper-6" onClick={diceScore}>
                <p className="cell">{valueUpper.gameOne.six}</p>
              </td>
              <td id="gameTwo-six-upper-6" onClick={diceScore}>
                <p className="cell">{valueUpper.gameTwo.six}</p>
              </td>
              <td id="gameThree-six-upper-6" onClick={diceScore}>
                <p className="cell">{valueUpper.gameThree.six}</p>
              </td>
              <td id="gameFour-six-upper-6" onClick={diceScore}>
                <p className="cell">{valueUpper.gameFour.six}</p>
              </td>
              <td id="gameFive-six-upper-6" onClick={diceScore}>
                <p className="cell">{valueUpper.gameFive.six}</p>
              </td>
              <td id="gameSix-six-upper-6" onClick={diceScore}>
                <p className="cell">{valueUpper.gameSix.six}</p>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>BONUS</th>
              <th onClick={test}>==></th>
              <td>{gameBonus.gameOne}</td>
              <td>
                {gameBonus.gameTwo}
              </td>
              <td>
                {gameBonus.gameThree}
              </td>
              <td>{gameBonus.gameFour}</td>
              <td>{gameBonus.gameFive}</td>
              <td>{gameBonus.gameSix}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>TOTAL</th>
              <th> ==></th>
              <td>{upperTotal.gameOne}</td>
              <td>{upperTotal.gameTwo}</td>
              <td>{upperTotal.gameThree}</td>
              <td>{upperTotal.gameFour}</td>
              <td>{upperTotal.gameFive}</td>
              <td>{upperTotal.gameSix}</td>
            </tr>
          </tbody>
        </table>

        <br />
        <table className="section">
        <tbody>
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
          </tbody>
          <tbody>
            <tr>
              <th>3 of a kind</th>
              <td>add upperTotal of dice</td>
              <td id="gameOne-threeOfaKind-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameOne.threeOfaKind}</p>
              </td>
              <td id="gameTwo-threeOfaKind-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameTwo.threeOfaKind}</p>
              </td>
              <td id="gameThree-threeOfaKind-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameThree.threeOfaKind}</p>
              </td>
              <td id="gameFour-threeOfaKind-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameFour.threeOfaKind}</p>
              </td>
              <td id="gameFive-threeOfaKind-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameFive.threeOfaKind}</p>
              </td>
              <td id="gameSix-threeOfaKind-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameSix.threeOfaKind}</p>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>4 of a kind</th>
              <td>add upperTotal of dice</td>
              <td id="gameOne-fourOfaKind-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameOne.fourOfaKind}</p>
              </td>
              <td id="gameTwo-fourOfaKind-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameTwo.fourOfaKind}</p>
              </td>
              <td id="gameThree-fourOfaKind-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameThree.fourOfaKind}</p>
              </td>
              <td id="gameFour-fourOfaKind-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameFour.fourOfaKind}</p>
              </td>
              <td id="gameFive-fourOfaKind-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameFive.fourOfaKind}</p>
              </td>
              <td id="gameSix-fourOfaKind-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameSix.fourOfaKind}</p>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>Full house</th>
              <td>Score 25</td>
              <td id="gameOne-fullHouse-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameOne.fullHouse}</p>
              </td>
              <td id="gameTwo-fullHouse-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameTwo.fullHouse}</p>
              </td>
              <td id="gameThree-fullHouse-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameThree.fullHouse}</p>
              </td>
              <td id="gameFour-fullHouse-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameFour.fullHouse}</p>
              </td>
              <td id="gameFive-fullHouse-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameFive.fullHouse}</p>
              </td>
              <td id="gameSix-fullHouse-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameSix.fullHouse}</p>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>sm. straight</th>
              <td>score 30</td>
              <td id="gameOne-smallStraight-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameOne.smallStraight}</p>
              </td>
              <td id="gameTwo-smallStraight-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameTwo.smallStraight}</p>
              </td>
              <td id="gameThree-smallStraight-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameThree.smallStraight}</p>
              </td>
              <td id="gameFour-smallStraight-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameFour.smallStraight}</p>
              </td>
              <td id="gameFive-smallStraight-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameFive.smallStraight}</p>
              </td>
              <td id="gameSix-smallStraight-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameSix.smallStraight}</p>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>Lrg. straight</th>
              <td>score 40</td>
              <td id="gameOne-largeStraight-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameOne.largeStraight}</p>
              </td>
              <td id="gameTwo-largeStraight-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameTwo.largeStraight}</p>
              </td>
              <td id="gameThree-largeStraight-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameThree.largeStraight}</p>
              </td>
              <td id="gameFour-largeStraight-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameFour.largeStraight}</p>
              </td>
              <td id="gameFive-largeStraight-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameFive.largeStraight}</p>
              </td>
              <td id="gameSix-largeStraight-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameSix.largeStraight}</p>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>YAHTZEE</th>
              <td>score 50</td>
              <td id="gameOne-yahtzee-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameOne.yahtzee}</p>
              </td>
              <td id="gameTwo-yahtzee-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameTwo.yahtzee}</p>
              </td>
              <td id="gameThree-yahtzee-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameThree.yahtzee}</p>
              </td>
              <td id="gameFour-yahtzee-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameFour.yahtzee}</p>
              </td>
              <td id="gameFive-yahtzee-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameFive.yahtzee}</p>
              </td>
              <td id="gameSix-yahtzee-lower" onClick={diceScore}>
                <p className="cell">{valueLower.gameSix.yahtzee}</p>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>YAHTZEE BONUS</th>
              <td>100 per extra Yahtzee</td>
              <td className="extraYahtzee">
              <div className="extraYahtzeeBox" id="gameOne-one" onClick={test}>
                  {extraYahtzee.gameOne.one.display}
                </div>
                <div className="extraYahtzeeBox" id="gameOne-two" onClick={test} >
                {extraYahtzee.gameOne.two.display}
                </div>
                <div className="extraYahtzeeBox" id="gameOne-three" onClick={test} >
                {extraYahtzee.gameOne.three.display}
                </div>
              </td>
              <td className="extraYahtzee">
              <div className="extraYahtzeeBox" id="gameTwo-one" onClick={test} >
              {extraYahtzee.gameTwo.one.display}
                </div>
                <div className="extraYahtzeeBox" id="gameTwo-two" onClick={test} >
                {extraYahtzee.gameTwo.two.display}
                </div>
                <div className="extraYahtzeeBox" id="gameTwo-three" onClick={test} >
                {extraYahtzee.gameTwo.three.display}
                </div>
              </td>
              <td className="extraYahtzee">
              <div className="extraYahtzeeBox" id="gameThree-one" onClick={test} >
              {extraYahtzee.gameThree.one.display}
                </div>
                <div className="extraYahtzeeBox" id="gameThree-two" onClick={test} >
                {extraYahtzee.gameThree.two.display}
                </div>
                <div className="extraYahtzeeBox" id="gameThree-three" onClick={test} >
                {extraYahtzee.gameThree.three.display}
                </div>
              </td>
              <td className="extraYahtzee">
              <div className="extraYahtzeeBox" id="gameFour-one" onClick={test} >
              {extraYahtzee.gameFour.one.display}
                </div>
                <div className="extraYahtzeeBox" id="gameFour-two" onClick={test} >
                {extraYahtzee.gameFour.two.display}
                </div>
                <div className="extraYahtzeeBox" id="gameFour-three" onClick={test} >
                {extraYahtzee.gameFour.three.display}
                </div>
              </td>
              <td className="extraYahtzee">
              <div className="extraYahtzeeBox" id="gameFive-one" onClick={test} >
                  {extraYahtzee.gameFive.one.display}
                </div>
                <div className="extraYahtzeeBox" id="gameFive-two" onClick={test} >
                  {extraYahtzee.gameFive.two.display}
                </div>
                <div className="extraYahtzeeBox" id="gameFive-three" onClick={test} >
                  {extraYahtzee.gameFive.three.display}
                </div>
              </td>
              <td className="extraYahtzee">
              <div className="extraYahtzeeBox" id="gameSix-one" onClick={test} >
              {extraYahtzee.gameSix.one.display}
                </div>
                <div className="extraYahtzeeBox" id="gameSix-two" onClick={test}>
                {extraYahtzee.gameSix.two.display}
                </div>
                <div className="extraYahtzeeBox" id="gameSix-three" onClick={test}>
                {extraYahtzee.gameSix.three.display}
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>TOTAL</th>
              <th> ==></th>
              <td className="upperTotal">{finalScore.gameOne}</td>
              <td className="upperTotal">{finalScore.gameTwo}</td>
              <td className="upperTotal">{finalScore.gameThree}</td>
              <td className="upperTotal">{finalScore.gameFour}</td>
              <td className="upperTotal">{finalScore.gameFive}</td>
              <td className="upperTotal">{finalScore.gameSix}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Table;
