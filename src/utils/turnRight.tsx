/**
 * Function: turnRight
 * Goal:    Take Coords and update the axis based user command
 * Return:  coordinates + facing
 * Params: input array of strings[X-Axis, Y-Axis, Direction]
 */

import { RobotData } from "../constants/constants";

function turnRight(robotData:RobotData): RobotData {
  const location= robotData.x + "" + robotData.y
  let spot = document.getElementById(location)
  console.log(robotData)
  if(spot){
    switch (robotData.facing) {
      case "NORTH":
        robotData.facing="EAST"
         spot.style.transform ="rotate(90deg)"
        break;
      case "EAST":
        robotData.facing="SOUTH"
         spot.style.transform ="rotate(180deg)"
        break;
      case "SOUTH":
        robotData.facing="WEST"
         spot.style.transform ="rotate(270deg)"
        break;
      case "WEST":
        robotData.facing="NORTH"
         spot.style.transform ="rotate(0deg)"
        break;
      default:
        robotData.error="Enter a valid input command"
        spot.style.transform ="rotate(90deg)"
        break;
    }
  }
  return robotData;
}

export default turnRight;
