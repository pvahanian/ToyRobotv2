/**
 * Function: splitInputString
 * Goal:    To take input string from user and split into an array
 * Return:  Result can be passed as props to Console component
 */

function splitInputString(input: string): any {
  let initialString: any = input.split(",");
  let arrayOfStrings: any = initialString.map((s: string) =>
    s.trim().toUpperCase()
  );
  return arrayOfStrings;
}

export default splitInputString;
