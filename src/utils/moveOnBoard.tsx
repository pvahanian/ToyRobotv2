/**
 * Function: moveOnBoard
 * Goal:    Take Coords and update the axis based user command
 * Return:  coordinates + facing
 * Params: input array of strings[X-Axis, Y-Axis, Direction]
 */

import { tableDimension, dropOffTableError } from "../constants/constants";

function moveOnBoard(coord: string[]): any {
  let xAxisValue = parseInt(coord[0]);
  let yAxisValue = parseInt(coord[1]);
  let direction = coord[2];

  const maxChecker =
    xAxisValue <= tableDimension.x - 1 && yAxisValue <= tableDimension.y - 1;

  const minChecker = xAxisValue > 0 && yAxisValue > 0;

  switch (direction) {
    case "NORTH":
      if (maxChecker) {
        return ["MOVE", xAxisValue, yAxisValue + 1, direction];
      } else {
        return [dropOffTableError, coord];
      }
    case "EAST":
      if (maxChecker) {
        return ["MOVE", xAxisValue + 1, yAxisValue, direction];
      } else {
        return [dropOffTableError, coord];
      }
    case "SOUTH":
      if (minChecker) {
        return ["MOVE", xAxisValue, yAxisValue - 1, direction];
      } else {
        return [dropOffTableError, coord];
      }
    case "WEST":
      if (minChecker) {
        return ["MOVE", xAxisValue - 1, yAxisValue, direction];
      } else {
        return [dropOffTableError, coord];
      }
  }
}

export default moveOnBoard;
