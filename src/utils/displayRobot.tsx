/**
 * Function: displayRobot
 * Goal:    Display robot image on board
 * Return:
 */

import { RobotData } from "../constants/constants";

function displayRobot(robotData: RobotData, oldLocation: string): string {
  const location = String(robotData.x) + String(robotData.y);
    
  if (oldLocation !== "nullnull") {
    console.log("Its hitting this even on a bad input")
    let lastPlace: any = document.getElementById(oldLocation);
    if(lastPlace!== null)
    lastPlace.style.background = null;
  }
  
  let robotPlace: any = document.getElementById(location);

  robotPlace.style.backgroundImage = "url('https://svgur.com/i/Tqb.svg')";
  robotPlace.style.backgroundSize = "cover";
  robotPlace.style.zIndex = 2;

  return location;
}

export default displayRobot;
