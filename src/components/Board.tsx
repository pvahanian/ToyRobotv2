import React from "react";
import { RobotData } from "../constants/constants";
/**
 * Function: Board
 * Param: String for location and char for direction facing
 * Goal: Take input and render it to board. Re-renders on every input.
 */

const Board: React.FC<{ robotData: RobotData }> = ({ robotData }) => {
  if (robotData.x != null && robotData.y != null) {
    return (
      <div>
        <p>{robotData.x}</p>
        <p>{robotData.y}</p>
        <p>{robotData.facing}</p>
      </div>
    );
  } else {
    return <p>Board</p>;
  }
};

export default Board;
