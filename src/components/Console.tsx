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
  console.log(inputArrayOfStrings);
  return (
    <div className="console">
      <div>
        {inputArrayOfStrings.length > 0 ? <p>Working</p> : <p>Console</p>}
      </div>
    </div>
  );
};

export default Console;
