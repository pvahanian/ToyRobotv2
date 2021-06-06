/**
 * Function: displayRobot
 * Params:  RobotData object with oldLocation string
 * Goal:    Display robot image on board while removing old location image
 * Return:  Location to be used as oldLocation
 */

import { RobotData } from "../constants/constants";

function displayRobot(robotData: RobotData, oldLocation: string): string {
  const location = String(robotData.x) + String(robotData.y);
    
  if (oldLocation !== "nullnull") {
    let lastPlace: any = document.getElementById(oldLocation);
    if(lastPlace!== null)
    lastPlace.style.background = null;
  }
  
  let robotPlace: any = document.getElementById(location);
  
  robotPlace.style.backgroundImage = `url(${robotData.image})`;
  robotPlace.style.backgroundSize = "contain";
  robotPlace.style.zIndex = 2;

  //Used to check what direction the robot is facing to determine rotation
  switch (robotData.facing) {
      case "NORTH":
        robotPlace.style.transform ="rotate(0deg)"
        break;
      case "EAST":
        robotPlace.style.transform ="rotate(90deg)"
        break;
      case "SOUTH":
        robotPlace.style.transform ="rotate(180deg)"
        break;
      case "WEST":
        robotPlace.style.transform ="rotate(270deg)"
        break;
      default:
        break;
    }

  return location;
}

export default displayRobot;
