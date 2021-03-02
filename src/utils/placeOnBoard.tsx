/**
 * Function: placeOnBoard
 * Goal:    To take command and set x, y and facing variables
 * Return:  coordinates + facing
 * Params: input array of strings[Command, X-Axis, Y-Axis, Direction]
 */

import { RobotData, tableDimension } from "../constants/constants";

function placeOnBoard(robotData:RobotData): RobotData {

  if(robotData.x ===null || robotData.y === null){
    robotData.error="X and Y coordinates need to be Valid"
    return robotData
  }

  if (
    robotData.x >= 0 &&
    robotData.x <= tableDimension.x &&
    robotData.y <= tableDimension.y &&
    robotData.y >= 0
  ) {
      if (
        robotData.facing === "NORTH" ||
        robotData.facing === "SOUTH" ||
        robotData.facing === "WEST" ||
        robotData.facing === "EAST"
      ) {
        return robotData;  // Valid RobotData
      }
  }
  robotData.error="Enter valid PLACE command - try [Command, X-Axis, Y-Axis, Direction]"
  return robotData
  //Check to see if x is a number y is number and facing is equal to n s e or w
  // if it is return them as an array for our setcoord state
  // else return null
}

export default placeOnBoard;
