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
            <td>
              <input
                className="input"
                name="gameOne ones"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameTwo ones"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameThree ones"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFour ones"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFive ones"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameSix ones"
                type="text"
                onChange={props.computeScore}
              />
            </td>
          </tr>
          <tr>
            <th>2's</th>
            <td>Count 2 for each 2, count only 2's</td>
            <td>
              <input
                className="input"
                name="gameOne twos"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameTwo twos"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameThree twos"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFour twos"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFive twos"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameSix twos"
                type="text"
                onChange={props.computeScore}
              />
            </td>
          </tr>
          <tr>
            <th>3's</th>
            <td>Count 3 for each 3, count only 3's</td>
            <td>
              <input
                className="input"
                name="gameOne threes"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameTwo threes"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameThree threes"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFour threes"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFive threes"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameSix threes"
                type="text"
                onChange={props.computeScore}
              />
            </td>
          </tr>
          <tr>
            <th>4's</th>
            <td>Count 4 for each 4, count only 4's</td>
            <td>
              <input
                className="input"
                name="gameOne fours"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameTwo fours"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameThree fours"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFour fours"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFive fours"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameSix fours"
                type="text"
                onChange={props.computeScore}
              />
            </td>
          </tr>
          <tr>
            <th>5's</th>
            <td>Count 5 for each 5, count only 5's</td>
            <td>
              <input
                className="input"
                name="gameOne fives"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameTwo fives"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameThree fives"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFour fives"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFive fives"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameSix fives"
                type="text"
                onChange={props.computeScore}
              />
            </td>
          </tr>
          <tr>
            <th>6's</th>
            <td>Count 6 for each 6, count only 6's</td>
            <td>
              <input
                className="input"
                name="gameOne sixes"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameTwo sixes"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameThree sixes"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFour sixes"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFive sixes"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameSix sixes"
                type="text"
                onChange={props.computeScore}
              />
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
            <td>
              <input
                className="input"
                name="gameOne threeOfKind"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameTwo threeOfKind"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameThree threeOfKind"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFour threeOfKind"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFive threeOfKind"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameSix threeOfKind"
                type="text"
                onChange={props.computeScore}
              />
            </td>
          </tr>
          <tr>
            <th>4 of a kind</th>
            <td>add upperTotal of dice</td>
            <td>
              <input
                className="input"
                name="gameOne fourOfKind"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameTwo fourOfKind"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameThree fourOfKind"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFour fourOfKind"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFive fourOfKind"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameSix fourOfKind"
                type="text"
                onChange={props.computeScore}
              />
            </td>
          </tr>
          <tr>
            <th>Full house</th>
            <td>Score 25</td>
            <td>
              <input
                className="input"
                name="gameOne fullHouse"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameTwo fullHouse"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameThree fullHouse"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFour fullHouse"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFive fullHouse"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameSix fullHouse"
                type="text"
                onChange={props.computeScore}
              />
            </td>
          </tr>
          <tr>
            <th>sm. straight</th>
            <td>score 30</td>
            <td>
              <input
                className="input"
                name="gameOne smallStraight"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameTwo smallStraight"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameThree smallStraight"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFour smallStraight"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFive smallStraight"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameSix smallStraight"
                type="text"
                onChange={props.computeScore}
              />
            </td>
          </tr>
          <tr>
            <th>Lrg. straight</th>
            <td>score 40</td>
            <td>
              <input
                className="input"
                name="gameOne largeStraight"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameTwo largeStraight"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameThree largeStraight"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFour largeStraight"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFive largeStraight"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameSix largeStraight"
                type="text"
                onChange={props.computeScore}
              />
            </td>
          </tr>
          <tr>
            <th>YAHTZEE</th>
            <td>score 50</td>
            <td>
              <input
                className="input"
                name="gameOne yahtzee"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameTwo yahtzee"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameThree yahtzee"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFour yahtzee"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameFive yahtzee"
                type="text"
                onChange={props.computeScore}
              />
            </td>
            <td>
              <input
                className="input"
                name="gameSix yahtzee"
                type="text"
                onChange={props.computeScore}
              />
            </td>
          </tr>
          <tr>
            <th>YAHTZEE BONUS</th>
            <td>100 per extra Yahtzee</td>
            <td className="extraYahtzee">
            <div>
                X
              </div>
              <div>
                X
              </div>
              <div>
                X
              </div>
            </td>
            <td className="extraYahtzee">
            <div>
                X
              </div>
              <div>
                X
              </div>
              <div>
                X
              </div>
            </td>
            <td className="extraYahtzee">
            <div>
                X
              </div>
              <div>
                X
              </div>
              <div>>
                X
              </div>
            </td>
            <td className="extraYahtzee">
            <div>
                X
              </div>
              <div>
                X
              </div>
              <div>
                X
              </div>
            </td>
            <td className="extraYahtzee">
            <div>
                X
              </div>
              <div>
                X
              </div>
              <div>
                X
              </div>
            </td>
            <td className="extraYahtzee">
            <div>
                X
              </div>
              <div>
                X
              </div>
              <div>>
                X
              </div>
            </td>
          </tr>
          <tr>
            <th>TOTAL</th>
            <th> ==></th>
            <td className="upperTotal">{/* Will Compute upperTotal */}</td>
            <td className="upperTotal">{/* Will Compute upperTotal */}</td>
            <td className="upperTotal">{/* Will Compute upperTotal */}</td>
            <td className="upperTotal">{/* Will Compute upperTotal */}</td>
            <td className="upperTotal">{/* Will Compute upperTotal */}</td>
            <td className="upperTotal">{/* Will Compute upperTotal */}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Table;
