/**
 * Function: initInputChecker
 * Goal:    To take input string array and check if command is valid
 * Return:  Coordinates or an Error Array
 */

import placeOnBoard from "./placeOnBoard";
import moveOnBoard from "./moveOnBoard";
import turnLeft from "./turnLeft";
import turnRight from "./turnRight";

function initInputChecker(input: string[], coords: string[]): any {
  //turn the array of strings into variables
  switch (input[0]) {
    case "PLACE":
      return placeOnBoard(input);
    case "MOVE":
      return moveOnBoard(coords);
    case "REPORT":
      if (coords.length === 0) {
        return ["ERROR", "Robot not on the board - enter valid PLACE command"];
      } else {
        return ["RETURN", ...coords];
      }
    case "RIGHT":
      return turnRight(coords);
    case "LEFT":
      return turnLeft(coords);
    default:
      return ["ERROR", "Enter a valid input command"];
  }
}

export default initInputChecker;
