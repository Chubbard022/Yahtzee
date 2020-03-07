import React from "react";
import "../styles.css";

function Table() {
  return (
    <div>
      <table className="yahtzeeTable">
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
              <input className="input" name="ones" type="text" />
            </td>
            <td>
              <input className="input" name="ones" type="text" />
            </td>
            <td>
              <input className="input" name="ones" type="text" />
            </td>
            <td>
              <input className="input" name="ones" type="text" />
            </td>
            <td>
              <input className="input" name="ones" type="text" />
            </td>
            <td>
              <input className="input" name="ones" type="text" />
            </td>
          </tr>
          <tr>
            <th>2's</th>
            <td>Count 2 for each 2, count only 2's</td>
            <td>
              <input className="input" name="twos" type="text" />
            </td>
            <td>
              <input className="input" name="twos" type="text" />
            </td>
            <td>
              <input className="input" name="twos" type="text" />
            </td>
            <td>
              <input className="input" name="twos" type="text" />
            </td>
            <td>
              <input className="input" name="twos" type="text" />
            </td>
            <td>
              <input className="input" name="twos" type="text" />
            </td>
          </tr>
          <tr>
            <th>3's</th>
            <td>Count 3 for each 3, count only 3's</td>
            <td>
              <input className="input" name="threes" type="text" />
            </td>
            <td>
              <input className="input" name="threes" type="text" />
            </td>
            <td>
              <input className="input" name="threes" type="text" />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>4's</th>
            <td>Count 4 for each 4, count only 4's</td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>5's</th>
            <td>Count 5 for each 5, count only 5's</td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>6's</th>
            <td>Count 6 for each 6, count only 6's</td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>TOTAL</th>
            <th> ==></th>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>BONUS</th>
            <th>==></th>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
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
            <td>add total of dice</td>
            <td>
              <input />
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <th>4 of a kind</th>
            <td>add total of dice</td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>Full house</th>
            <td>Score 25</td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>sm. straight</th>
            <td>score 30</td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>Lrg. straight</th>
            <td>score 40</td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>YAHTZEE</th>
            <td>score 50</td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>YAHTZEE BONUS</th>
            <td>100 per extra Yahtzee</td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>TOTAL</th>
            <th> ==></th>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
          </tr>
        </table>
      </table>
    </div>
  );
}
export default Table;
