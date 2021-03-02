/**
 * Function: turnRight
 * Goal:    Take Coords and update the axis based user command
 * Return:  coordinates + facing
 * Params: input array of strings[X-Axis, Y-Axis, Direction]
 */

import { RobotData } from "../constants/constants";

function turnRight(robotData:RobotData): RobotData {
  
  switch (robotData.facing) {
    case "NORTH":
      robotData.facing="EAST"
      break;
    case "EAST":
      robotData.facing="SOUTH"
      break;
    case "SOUTH":
      robotData.facing="WEST"
      break;
    case "WEST":
      robotData.facing="NORTH"
      break;
    default:
      robotData.error="Enter a valid input command"
      break;
  }
  return robotData;
}

export default turnRight;
