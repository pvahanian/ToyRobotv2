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
      return robotData;
    case "EAST":
      robotData.facing="NORTH"
      return robotData;;
    case "SOUTH":
      robotData.facing="EAST"
      return robotData;;
    case "WEST":
      robotData.facing="SOUTH"
      return robotData;;
  }
  return robotData
}

export default turnLeft;
