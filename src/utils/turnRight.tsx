/**
 * Function: turnRight
 * Goal:    Take Coords and update the axis based user command
 * Return:  coordinates + facing
 * Params: input array of strings[X-Axis, Y-Axis, Direction]
 */

function turnRight(coord: string[]): any {
  let xAxisValue = parseInt(coord[0]);
  let yAxisValue = parseInt(coord[1]);
  let direction = coord[2];

  switch (direction) {
    case "NORTH":
      return ["RIGHT", xAxisValue, yAxisValue, "EAST"];
    case "EAST":
      return ["RIGHT", xAxisValue, yAxisValue, "SOUTH"];
    case "SOUTH":
      return ["RIGHT", xAxisValue, yAxisValue, "WEST"];
    case "WEST":
      return ["RIGHT", xAxisValue, yAxisValue, "NORTH"];
  }
}

export default turnRight;
