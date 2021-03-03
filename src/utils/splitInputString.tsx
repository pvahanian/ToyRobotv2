/**
 * Function: splitInputString
 * Goal:    To take input string from user and split into an array
 * Return:  Result can be passed as props to Console component
 */

import {RobotData} from '../constants/constants'

function splitInputString(input: string, robotData:RobotData): RobotData {
    let initialString: string[] = input.split(",");
    let arrayOfStrings: string[] = initialString.map((s: string) =>
      s.trim().toUpperCase()
    );

    if(robotData.command ===""){
    robotData.command=arrayOfStrings[0]
  if(arrayOfStrings[0]==="PLACE"){
    robotData.x=Number(arrayOfStrings[1])
    robotData.y=Number(arrayOfStrings[2])
    robotData.facing=arrayOfStrings[3]
  }
  return robotData;
  }
  else
  {
    if(arrayOfStrings[0]==="PLACE"){
      robotData.command=(arrayOfStrings[0])
      robotData.x=Number(arrayOfStrings[1])
      robotData.y=Number(arrayOfStrings[2])
      robotData.facing=arrayOfStrings[3]
    }
    
  }
}

export default splitInputString;
