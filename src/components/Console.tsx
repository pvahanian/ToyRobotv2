/**
 * Function: Console
 * Goal:    To take input array of strings and display under the input field
 * Return:  Jsx div of the submitted commands
 */

 import React from "react";
 import { RobotData } from "../constants/constants";
 import { useRef } from "react";
 

const Console: React.FC<{ robotData: RobotData }> = ({ robotData }) => {
  let message = useRef(document.createElement("p"))
  if (robotData.error && robotData.error !== "") {
    message.current.textContent = robotData.error
  }
  else if (robotData.command.length > 0){
    message.current.textContent = robotData.command + " " + robotData.x + " " + robotData.y + " " + robotData.facing
  }
  return (
    <div className="console">
      <p ref={message}> Console</p>
    </div>
  );
};
export default Console;