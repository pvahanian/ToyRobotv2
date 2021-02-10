import React from "react";

type Props = {
  input: string,
}

const Console: React.FC<Props> = ({ input }) => {
  
  return (
    <div className="console"> 
      <div>
        {input ? (<p>Working</p>) : (<p>Console</p>)}
      </div>
    </div>
  );
};

export default Console;

