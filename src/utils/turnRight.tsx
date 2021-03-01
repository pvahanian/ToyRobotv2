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
      return robotData;
    case "EAST":
      robotData.facing="SOUTH"
      return robotData;
    case "SOUTH":
      robotData.facing="WEST"
      return robotData;;
    case "WEST":
      robotData.facing="NORTH"
      return robotData;
    default:
      robotData.error="Enter a valid input command"
    return robotData
  }

}

export default turnRight;
