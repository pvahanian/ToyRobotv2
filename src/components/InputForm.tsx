import React from "react";

const InputForm: React.FC = () => {
  const onSubmit = () => {
    return;
  };

  const handleChange = () => {
    return;
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={handleChange}
          className="inputBox"
          name="robotCommands"
          type="text"
          placeholder="Input robot commands!"
        />
        <button className="goButton">Go</button>
      </form>
    </div>
  );
};

export default InputForm;
