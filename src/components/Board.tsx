/**
 * Function: Board
 * Param: String for location and char for direction facing
 * Goal: Take input and render it to board. Re-renders on every input.
 */

import React from "react";
import { RobotData } from "../constants/constants";
import displayRobot from "../utils/displayRobot";

const Board: React.FC<{ robotData: RobotData; oldLocation: string }> = ({
  robotData,
  oldLocation,
}) => {
  if (robotData.x != null && robotData.y != null && robotData.y < 5 && robotData.y < 5) {
    //Maybe trade to add more cheap checks here before trying to render data
    console.log("Robot Data", robotData.x, robotData.y)
    oldLocation = displayRobot(robotData, oldLocation);
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

//need to find a way of having board not run unless data has been verified
