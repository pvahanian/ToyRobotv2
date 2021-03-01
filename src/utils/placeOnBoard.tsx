/**
 * Function: placeOnBoard
 * Goal:    To take command and set x, y and facing variables
 * Return:  coordinates + facing
 * Params: input array of strings[Command, X-Axis, Y-Axis, Direction]
 */

import { RobotData, tableDimension } from "../constants/constants";

function placeOnBoard(robotData:RobotData): RobotData {
  let xAxisValue = robotData.x;
  let yAxisValue = robotData.y;
  let facing = robotData.facing;

  if(xAxisValue ===null || yAxisValue === null){
    robotData.error="X and Y coordinates need to be valid"
    return robotData
  }

  if (
    xAxisValue >= 0 &&
    xAxisValue <= tableDimension.x &&
    yAxisValue <= tableDimension.y &&
    yAxisValue >= 0
  ) {
      if (
        facing === "NORTH" ||
        facing === "SOUTH" ||
        facing === "WEST" ||
        facing === "EAST"
      ) {
        return robotData;
      }
      robotData.error="Enter valid PLACE command - try [Command, X-Axis, Y-Axis, Direction]"
      return robotData
  }
  return robotData;
  //Check to see if x is a number y is number and facing is equal to n s e or w
  // if it is return them as an array for our setcoord state
  // else return null
}

export default placeOnBoard;
