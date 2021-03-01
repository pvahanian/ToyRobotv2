/**
 * Function: moveOnBoard
 * Goal:    Take Coords and update the axis based user command
 * Return:  coordinates + facing
 * Params: input array of strings[X-Axis, Y-Axis, Direction]
 */

import { tableDimension, dropOffTableError, RobotData } from "../constants/constants";

function moveOnBoard(robotData:RobotData): RobotData {
  if(robotData.x === null ||robotData.y === null){
    robotData.error="Robot must be placed on board"
    return robotData
  }

  // const xAxisValue = robotData.x; 
  // const yAxisValue = robotData.y;
  // const direction = robotData.facing;

  const maxChecker = robotData.x <= tableDimension.x - 1 && robotData.y <= tableDimension.y - 1;
  const minChecker = robotData.x > 0 && robotData.y > 0;

  switch (robotData.facing) {
    case "NORTH":
      if (maxChecker) {
        robotData.y+=1
        return robotData;
      } else {
        robotData.error=dropOffTableError
        return robotData;
      }
    case "EAST":
      if (maxChecker) {
        robotData.x+=1
        return robotData;
      } else {
        robotData.error=dropOffTableError
        return robotData;
      }
    case "SOUTH":
      if (minChecker) {
        robotData.y-=1
        return robotData;
      } else {
        robotData.error=dropOffTableError
        return robotData;
      }
    case "WEST":
      if (minChecker) {
        robotData.x-=1
        return robotData;
      } else {
        robotData.error=dropOffTableError
        return robotData;
      }
    default:
      robotData.error="Enter a valid input command"
    return robotData
  }
}

export default moveOnBoard;
