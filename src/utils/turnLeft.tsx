/**
 * Function: turnLeft
 * Goal:    Take Coords and update the axis based user command
 * Return:  coordinates + facing
 * Params: input array of strings[X-Axis, Y-Axis, Direction]
 */
import { RobotData } from "../constants/constants";

function turnLeft(robotData:RobotData): RobotData  {
  switch (robotData.facing) {
    case "NORTH":
      robotData.facing="WEST"
      break;
    case "EAST":
      robotData.facing="NORTH"
      break;
    case "SOUTH":
      robotData.facing="EAST"
      break;
    case "WEST":
      robotData.facing="SOUTH"
      break;
    default:
      robotData.error="Enter a valid input command"
      break;
  }
  return robotData;
}

export default turnLeft;
