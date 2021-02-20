import React, { useState } from "react";

import isValidInput from "../utils/isValidInput";

/**
 * Function: Console
 * Goal:    To take input array of strings and display under the input field
 * Return:  Jsx div of the submitted commands
 */

type Props = {
  inputArrayOfStrings: string[];
};

const Console: React.FC<Props> = ({ inputArrayOfStrings }) => {
  const [error, setError] = useState("");

  if (isValidInput(inputArrayOfStrings)) {
    console.log("true");
    setError("");
  } else {
    console.log("false");
    setError("Enter valid input command");
  }

  return (
    <div className="console">
      <div>
        {inputArrayOfStrings.length > 0 ? (
          <p>
            {inputArrayOfStrings[0]} {inputArrayOfStrings[1]}{" "}
            {inputArrayOfStrings[2]} {inputArrayOfStrings[3]}
          </p>
        ) : (
          <p>Console</p>
        )}
      </div>
      <div>{error.length > 0 ? <p>{error}</p> : <p>No error</p>}</div>
    </div>
  );
};

export default Console;
