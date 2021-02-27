/**
 * Function: turnLeft
 * Goal:    Take Coords and update the axis based user command
 * Return:  coordinates + facing
 * Params: input array of strings[X-Axis, Y-Axis, Direction]
 */

function turnLeft(coord: string[]): any {
  let xAxisValue = parseInt(coord[0]);
  let yAxisValue = parseInt(coord[1]);
  let direction = coord[2];

  switch (direction) {
    case "NORTH":
      return ["LEFT", xAxisValue, yAxisValue, "WEST"];
    case "EAST":
      return ["LEFT", xAxisValue, yAxisValue, "NORTH"];
    case "SOUTH":
      return ["LEFT", xAxisValue, yAxisValue, "EAST"];
    case "WEST":
      return ["LEFT", xAxisValue, yAxisValue, "SOUTH"];
  }
}

export default turnLeft;
