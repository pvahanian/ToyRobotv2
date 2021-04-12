/**
 * Function: initInputChecker
 * Goal:    To take input string array and check if command is valid
 * Return:  Coordinates or an Error inside robotData object
 */

import placeOnBoard from "./placeOnBoard";
import moveOnBoard from "./moveOnBoard";
import turnLeft from "./turnLeft";
import turnRight from "./turnRight";

import { RobotData } from "../constants/constants";

function initInputChecker(robotData: RobotData,oldLocation: string): RobotData {
  
  let notOnBoard = (robotData.x === null && robotData.y === null)

  switch (robotData.command) {
    case "PLACE":
      return placeOnBoard(robotData, oldLocation);
    case "MOVE":
      return moveOnBoard(robotData);
    case "REPORT":
      if (notOnBoard) {
        robotData.error = "Robot not on the board - Nothing to Report";
      }
      return robotData;
    case "RIGHT":
      if (notOnBoard) {
        robotData.error = "Robot not on the board - enter valid PLACE command";
        return robotData;
      }
      return turnRight(robotData);
    case "LEFT":
      if (notOnBoard) {
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
