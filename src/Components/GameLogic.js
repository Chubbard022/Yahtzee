import React, {useState} from "react";
import Table from "./Table";

import "../styles.css";

export default function GameLogic() {
  const [gameTotal, setGameTotal] = useState([]);

  function computeScore(e) {
    console.log(e.target.name);

    setGameTotal([
      ...gameTotal,
      {
        name: e.target.name,
        value: e.target.value
      }
    ]);
  }
  console.log("STATE", gameTotal);
  return (
    <div>
      <h1>header</h1>
      <Table computeScore={computeScore} />
    </div>
  );
}
