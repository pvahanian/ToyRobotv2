/**
 * Function: initInputChecker
 * Goal:    To take input string array and check if command is valid
 * Return:  Coordinates or an Error Array
 */

import placeOnBoard from "./placeOnBoard";
import moveOnBoard from "./moveOnBoard";
import turnLeft from "./turnLeft";
import turnRight from "./turnRight";

import { RobotData } from "../constants/constants";

function initInputChecker(robotData:RobotData): RobotData {
  console.log(robotData.command, "Inside Command")
  switch (robotData.command) {
    case "PLACE":
      return placeOnBoard(robotData);
    case "MOVE":
      return moveOnBoard(robotData);
    case "REPORT":
      if (robotData.x === null || robotData.y === null) {
        robotData.error="Robot not on the board - enter valid PLACE command"
      }
      return robotData
    case "RIGHT":
      return turnRight(robotData);
    case "LEFT":
      return turnLeft(robotData);
    default:
      robotData.error="Enter a valid input command"
      return robotData
  }
}

export default initInputChecker;
