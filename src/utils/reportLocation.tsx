/**
 * Function: reportLocation
 * Goal: Take in the current state of coordinates and return it as a string if its on the board
 * Return: Location as a string or false if the robot is not on the board
 */

function reportLocation(coordinates: string[]): any {
  let x = coordinates[0];
  if (x === "null") {
    return false;
  }
  let y = coordinates[1];
  let facing = coordinates[3];
  return `Location: X ${x}, Y ${y}, Facing ${facing}`;
}
export default reportLocation;
