import React, {useState, FormEvent} from "react";
import Console from './Console'

const InputForm: React.FC = () => {
  const [input,setInput] =useState("")

  const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
    setInput('Test input')
    return;
  }

  const handleChange = () => {
    return;
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="inputBox"
          name="robotCommands"
          type="text"
          placeholder="Input robot commands!"
        />
        <button className="goButton">Go</button>
      </form>
      <Console input={input}/>
      
    </div>

  );
};

export default InputForm;


// type CardProps = {
//   title: string,
//   paragraph: string
// }

// export const Card: FunctionComponent<CardProps> = ({ title, paragraph }) => <aside>
//   <h2>{ title }</h2>
//   <p>
//     { paragraph }
//   </p>


// export interface CommandProps {
//   commands: string[];
//   handleCommand: (command: string) => void;
//   clearErrorMessage: () => void;
//   reset: () => void;
// }

// export interface CommandInputProps
//   extends Pick<CommandProps, 'handleCommand' | 'reset' | 'clearErrorMessage'> {}

// export interface CommandListProps extends Pick<CommandProps, 'commands'> {}


// import React, { memo, useState, ChangeEvent, useCallback } from 'react';
// import { Flex, Input, Button, Box } from '@react-yuki/ui';
// import { CommandInputProps } from 'app/components/command/types';

// const CommandInput = memo<CommandInputProps>(({ handleCommand, reset, clearErrorMessage }) => {
//   const [command, updateCommand] = useState('');

//   const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();

//     updateCommand(e.target.value.toUpperCase());
//   }, []);

//   const handleSubmit = useCallback(
//     (e: ChangeEvent<HTMLInputElement>) => {
//       e.preventDefault();

//       if (command.length === 0) return;

//       clearErrorMessage();

//       handleCommand(command);

//       updateCommand('');
//     },
//     [command, clearErrorMessage, handleCommand]
//   );