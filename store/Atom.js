import { atom } from "recoil";

export const robot = atom({
  key: "robot",
  default: {
    inputCommand: "",
    isPlaced: false,
    coords: "",
    facing: "",
  },
});
