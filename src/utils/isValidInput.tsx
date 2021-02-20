import { validCommands } from "../constants/commands";

export default function isValidInput(inputArray: string[]) {
  return validCommands.includes(inputArray[0]);
}
