import React from 'react';
function LegoTask3() {
    return (
    <div>
        <h3 className='Headline'>Task 3</h3>
        <p className='TextContents'>
            In this task we had to make the robot follow a line using color sensors, while stopping every 10 seconds to do a random entertaining action, and to play a cheering sound before terminating the program when an object is placed in front of it. To make the robot follow the line, we put 2 color sensors, where if the left one spotted a black color, it would turn -5 degrees, and if the right one spotted a black color, it would turn 5 degrees. We solved the entertainment part by creating 4 functions, where it did a distinct sequence of actions in each. In one of these, it played a random sound out of 12 sound effects, meaning there was technically 15 possible things for it to do as entertainment.
            <br /><br />To make this happen every 10 seconds, we used the time library to check if 10 seconds had passed each loop iteration. This method allowed the rest of the program to work fine, unlike making the program wait or sleep for 10 seconds, which would freeze the program.
            <br /><br />This task prepared the group for task 4.
        </p>
    </div>
    );
}

export default LegoTask3;