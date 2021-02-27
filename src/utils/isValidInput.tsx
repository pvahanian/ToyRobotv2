import { validCommands } from "../constants/commands";

export default function isValidInput(inputArray: string[]) {
  console.log(inputArray, "gonna learn today");
  if (inputArray !== undefined) return validCommands.includes(inputArray[0]);
}
