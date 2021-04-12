/**
 * Function: displayRobot
 * Params:  input array of strings
 * Goal:    Determine whether the command is valid or not
 * Return:  True or False
 */

import { validCommands } from "../constants/commands";

export default function isValidInput(inputArray: string[]) {
  if (inputArray !== undefined) return validCommands.includes(inputArray[0]);
}
