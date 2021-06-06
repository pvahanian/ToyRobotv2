export const tableDimension = {
  x: 5,
  y: 5,
};

export const dropOffTableError = (
  "ERROR, Robot will drop off board"
);

export const allowedCommands = ["PLACE", "MOVE", "LEFT", "RIGHT", "REPORT"];

export interface RobotData { 
  command:string,
  error?:string | undefined, 
  x: number | null,
  y: number | null,
  facing:string,
  image:string,
} 