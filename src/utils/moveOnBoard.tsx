/**
 * Function: moveOnBoard
 * Goal:    Take Coords and update the axis based user command
 * Return:  coordinates + facing
 * Params: input array of strings[X-Axis, Y-Axis, Direction]
 */

import {
  tableDimension,
  dropOffTableError,
  RobotData,
} from "../constants/constants";

function moveOnBoard(robotData: RobotData): RobotData {
  if (robotData.x === null || robotData.y === null) {
    robotData.error = "Robot must be placed on board";
    return robotData;
  }

  switch (robotData.facing) {
    case "NORTH":
      if (robotData.y < tableDimension.y - 1) {
        robotData.y += 1;
        break;
      } else {
        robotData.error = dropOffTableError;
        break;
      }
    case "EAST":
      if (robotData.x < tableDimension.x - 1) {
        robotData.x += 1;
        break;
      } else {
        robotData.error = dropOffTableError;
        break;
      }
    case "SOUTH":
      if (robotData.y > 0) {
        robotData.y -= 1;
        break;
      } else {
        robotData.error = dropOffTableError;
        break;
      }
    case "WEST":
      if (robotData.x > 0) {
        robotData.x -= 1;
        break;
      } else {
        robotData.error = dropOffTableError;
        break;
      }
    default:
      robotData.error = "Enter a valid input command";
      break;
  }
  return robotData;
}

export default moveOnBoard;
