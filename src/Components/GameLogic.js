import React, {useState} from "react";
import Table from "./Table";

import "../styles.css";

export default function GameLogic() {
  const [game, setGame] = useState(1);
  const [gameTotal, setGameTotal] = useState(0);
  return (
    <div>
      <h1>header</h1>
      <Table />
      <button className="button" onClick={() => setGameTotal()}>
        Add game total
      </button>
    </div>
  );
}
