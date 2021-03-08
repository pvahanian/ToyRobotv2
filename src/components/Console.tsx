import React from "react";
import { RobotData } from "../constants/constants";

/**
 * Function: Console
 * Goal:    To take input array of strings and display under the input field
 * Return:  Jsx div of the submitted commands
 */

const Console: React.FC<{robotData: RobotData}> = ({ robotData }) => {
  let message="Console"
  if (robotData.error) {
    message = robotData.error.slice()
  }
  else if (robotData.command.length > 0 ){ 
    message = robotData.command + " " + robotData.x + " " + robotData.y + " " + robotData.facing            
  }
  return (
      <div className="console">
        <p>{message}</p>  
      </div>
    );
  
};
export default Console;

// (
//   <div className="console">
//     <div>
//     {robotData.command.length > 0 ? (
//       <div>
//         <p>
//         {robotData.command} {robotData.x}{" "}
//         {robotData.y} {robotData.facing}            
//         </p>
//       </div>
//       ) : (
//         <p>Console</p>
//       )}
//     </div>
//   </div>
// );
// }
// };

// let errorMsg=robotData.error
// // console.log()
// return (
//     <div className="console">
//     <p>{errorMsg}</p>
//   </div>
// )