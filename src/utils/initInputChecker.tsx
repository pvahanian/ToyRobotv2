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

function initInputChecker(
  robotData: RobotData,
  oldLocation: string
): RobotData {
  switch (robotData.command) {
    case "PLACE":
      return placeOnBoard(robotData, oldLocation);
    case "MOVE":
      return moveOnBoard(robotData);
    case "REPORT":
      if (robotData.x === null || robotData.y === null) {
        robotData.error = "Robot not on the board - enter valid PLACE command";
      }
      return robotData;
    case "RIGHT":
      if (robotData.x === null || robotData.y === null) {
        robotData.error = "Robot not on the board - enter valid PLACE command";
        return robotData;
      }
      return turnRight(robotData);
    case "LEFT":
      if (robotData.x === null || robotData.y === null) {
        robotData.error = "Robot not on the board - enter valid PLACE command";
        return robotData;
      }
      return turnLeft(robotData);
    default:
      robotData.error = "Enter a valid input command";
      return robotData;
  }
}

export default initInputChecker;
