# Toy Robot Simulator</br>

# Description:</br>
The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.</br>
There are no other obstructions on the table surface.</br>
The robot is free to roam around the surface of the table, but must be prevented from falling to destruction.</br>
Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.</br>
Create an application that can read in commands of the following form -</br>
PLACE X,Y,F</br>
MOVE</br>
LEFT</br>
RIGHT</br>
REPORT</br>
PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.</br>
The origin 0,0 can be considered to be the SOUTH WEST most corner.</br>
The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command.</br>
The application should discard all commands in the sequence until a valid PLACE command has been executed.</br>

MOVE will move the toy robot one unit forward in the direction it is currently facing.</br>
LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.</br>
REPORT will announce the X,Y and F of the robot.</br> 
This can be in any form, but standard output is sufficient.</br>
A robot that is not on the table can choose the ignore the MOVE, LEFT, RIGHT and REPORT commands.</br>
Input can be from a file, or from standard input, as the developer chooses.</br>
Provide test data to exercise the application. (see "How to use and install' for test commands)</br>

# Constraints</br>
The toy robot must not fall off the table during movement.</br> 
This also includes the initial placement of the toy robot.</br>
Any move that would cause the robot to fall must be ignored.</br>
Example Input and Output:</br>
a)</br> 
PLACE 0,0,NORTH</br>
MOVE</br>
REPORT</br>
Output: 0,1,NORTH</br>
b)</br>
PLACE 0,0,NORTH</br>
LEFT</br>
REPORT</br>
Output: 0,0,WEST</br>


# Deliverables</br>
Github repo containing the code to the solution in Typescript (node.js/react)</br>
Instructions on how to run the project</br>
All relevant tests</br>

# How to use and install</br>
Clone repo to your local machine, cd into the directiory and run "npm start".</br>
Your browser will open and you can start entering commands! </br>
First command must be: PLACE X,Y,F (example: PLACE,0,0,NORTH)</br>

# Team:
https://github.com/willwearing
https://github.com/pvahanian

