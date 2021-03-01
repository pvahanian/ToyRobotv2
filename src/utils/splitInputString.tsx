/**
 * Function: splitInputString
 * Goal:    To take input string from user and split into an array
 * Return:  Result can be passed as props to Console component
 */

import {RobotData} from '../constants/constants'

function splitInputString(input: string): RobotData {
  let robotData:RobotData = {
    command: "",
    x:null, 
    y:null,
    facing: ""
  };

  let initialString: string[] = input.split(",");
  let arrayOfStrings: string[] = initialString.map((s: string) =>
    s.trim().toUpperCase()
  );
  robotData.command=arrayOfStrings[0]
  if(arrayOfStrings[0]==="PLACE"){
    robotData.x=Number(arrayOfStrings[1])
    robotData.y=Number(arrayOfStrings[2])
    robotData.facing=arrayOfStrings[3]
  }
  return robotData;
}

export default splitInputString;
