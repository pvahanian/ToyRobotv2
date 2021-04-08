/**
 * Function: displayRobot
 * Goal:    Display robot image on board
 * Return:
 */

import { RobotData } from "../constants/constants";

function displayRobot(robotData: RobotData, oldLocation: string): string {
  //
  const location = String(robotData.x) + String(robotData.y);
  let checker = parseInt(oldLocation);
    
  if (oldLocation!="nullnull") {
    // console.log("robotPlace", oldLocation);
    let lastPlace: any = document.getElementById(oldLocation);
    lastPlace.style.background = null;
  }

  let robotPlace: any = document.getElementById(location);

  robotPlace.style.backgroundImage = "url('https://svgur.com/i/Tqb.svg')";
  robotPlace.style.backgroundSize = "cover";
  robotPlace.style.zIndex = 2;
  //created this variable because of weird typescript if/else check errors.
  //when the robot is first placed, checker == NaN, therefore, lastPlace won't
  //need to exist, once 'MOVE' command has been entered, checker will have a value,
  //therefore lastPlace will exist, therefore we can set the background value to null


  return location;
}

export default displayRobot;
