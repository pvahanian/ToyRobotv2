/**
 * Function: placeOnBoard
 * Goal:    To take command and set x, y and facing variables
 * Return:  coordinates + facing
 */

import { tableDimension } from "../constants/constants";

function placeOnBoard(input: string[]): any {
  let xAxisValue = parseInt(input[1]);
  let yAxisValue = parseInt(input[2]);
  let facing = input[3];
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
      return [xAxisValue, yAxisValue, facing];
    }
  }
  return "null";
  //Check to see if x is a number y is number and facing is equal to n s e or w
  // if it is return them as an array for our setcoord state
  // else return null
}

export default placeOnBoard;
