/**
 * Function: moveOnBoard
 * Goal:    Take Coords and update the axis based user command
 * Return:  coordinates + facing
 * Params: input array of strings[X-Axis, Y-Axis, Direction]
 */

import { tableDimension, dropOffTableError, RobotData } from "../constants/constants";

function moveOnBoard(robotData:RobotData): RobotData {
  console.log(robotData,"Move stuff")
  if(robotData.x === null ||robotData.y === null){
    robotData.error="Robot must be placed on board"
    return robotData
  }

  const maxChecker = robotData.x <= tableDimension.x - 1 && robotData.y <= tableDimension.y - 1;
  const minChecker = robotData.x > 0 && robotData.y > 0;

  switch (robotData.facing) {
    case "NORTH":
      if (maxChecker) {
        robotData.y+=1
        break
      } else {
        robotData.error=dropOffTableError
        break
      }
    case "EAST":
      if (maxChecker) {
        robotData.x+=1
        break
      } else {
        robotData.error=dropOffTableError
        break
      }
    case "SOUTH":
      if (minChecker) {
        robotData.y-=1
        break
      } else {
        robotData.error=dropOffTableError
        break
      }
    case "WEST":
      if (minChecker) {
        robotData.x-=1
        break
      } else {
        robotData.error=dropOffTableError
        break
      }
    default:
      robotData.error="Enter a valid input command"
      break
  }
  return robotData
}

export default moveOnBoard;
