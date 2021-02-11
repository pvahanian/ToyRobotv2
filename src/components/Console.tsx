import React from "react";

/**
 * Function: Console
 * Goal:    To take input array of strings and display under the input field
 * Return:  Jsx div of the submitted commands
 */

type Props = {
  inputArrayOfStrings: string[];
};

const Console: React.FC<Props> = ({ inputArrayOfStrings }) => {
  return (
    <div className="console">
      <div>
        {inputArrayOfStrings.length > 0 ? <p>{inputArrayOfStrings[0]} {inputArrayOfStrings[1]} {inputArrayOfStrings[2]} {inputArrayOfStrings[3]}</p> : <p>Console</p>}
      </div>
      <img src="https://via.placeholder.com/500x513" alt="placeholder" />
    </div>
  );
};

export default Console;
