import { validCommands } from "../constants/commands";

export default function isValidInput(inputArray: string[]) {
  if (inputArray !== undefined) return validCommands.includes(inputArray[0]);
}
