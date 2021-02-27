import React from "react";

/**
 * Function: Board
 * Param: String for location and char for direction facing
 * Goal: Take input and render it to board. Re-renders on every input.
 */

type Props = {
  coords: string[];
};

const Board: React.FC<Props> = ({ coords }) => {
  console.log(coords, "This is coords");
  if (coords.length > 0) {
    return (
      <div>
        <p>{coords[0]}</p>
        <p>{coords[1]}</p>
        <p>{coords[2]}</p>
      </div>
    );
  } else {
    return <p>Board</p>;
  }
};

export default Board;
