/**
 * Function: Board
 * Param: String for location and char for direction facing
 * Goal: Take input and render it to board. Re-renders on every input.
 */

import React from "react";
import { RobotData} from "../constants/constants";

const Board: React.FC<{ robotData: RobotData }> = ({ robotData }) => {
  // let board = document.getElementById("board")
  if (robotData.x != null && robotData.y != null) {
    return (
      <div>
        <p>{robotData.x}</p>
        <p>{robotData.y}</p>
        <p>{robotData.facing}</p>
      </div>
    );
  } else {
    // renderBoard(board)
    return <p>Board</p>;
  }
};

export default Board;
