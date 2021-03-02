import React from "react";
import { RobotData } from "../constants/constants";

/**
 * Function: Console
 * Goal:    To take input array of strings and display under the input field
 * Return:  Jsx div of the submitted commands
 */

const Console: React.FC<RobotData> = ( robotData:RobotData ) => {
  console.log(robotData)
  if (robotData.error !== "") {
    return (
      <div className="console">
        <p>{robotData.error}</p>
      </div>
    );
  } else {
    return (
      <div className="console">
        <div>
          {robotData.command.length > 0 ? (
            <p>
              {robotData.command} {robotData.x}{" "}
              {robotData.y} {robotData.facing}
            </p>
          ) : (
            <p>Console</p>
          )}
        </div>
      </div>
    );
  }
};
export default Console;
