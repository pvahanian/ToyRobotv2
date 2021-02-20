/**
 * Function: initInputChecker
 * Goal:    To take input string array and check if command is valid
 * Return:  Boolean
 */

import placeOnBoard from "./placeOnBoard";

function initInputChecker(input: string[], checker: string[]): any {
  if (checker.includes(input[0])) {
    // invoke multi path switch
    return placeOnBoard(input);
  } else {
    //throw
    return "null";
  }
}

export default initInputChecker;
