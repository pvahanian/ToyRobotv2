/**
 * Function: displayRobot
 * Goal:    Display robot image on board
 * Return:
 */

import { RobotData } from "../constants/constants";

function displayRobot(robotData: RobotData, oldLocation: string): string {
  const location = String(robotData.x) + String(robotData.y);
  console.log(oldLocation, "Pablo");
  let robotPlace: any = document.getElementById(location);
  robotPlace.style.backgroundImage = "url('https://svgur.com/i/Tqb.svg')";
  robotPlace.style.backgroundSize = "cover";
  robotPlace.style.zIndex = 2;
  return location;
}

export default displayRobot;
