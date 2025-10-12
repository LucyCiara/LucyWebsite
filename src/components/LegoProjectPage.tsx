import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function LegoProjectPage() {
  return (
    <div className='TextPage'>
        <h1 className='Headline'>Lego Project</h1>
        <p className='TextContents'>In the lego project, we had to use a lego mindstorm ev3 robot to do 4 seperate tasks. The robot was coded in python using micropython and pybricks.
          <br /><br />In this project, I took on the role of lead programmer, as I had the most experience with programming, and sometimes debugged hardware issues, like input devices being plugged in the wrong socket.
          <br /><br />The project files can be found in our git <a href='https://git.ntnu.no/Team-3/Innledende-Lego-oppgaver'>repository</a></p>
        <h3 className='Headline'>Task 1</h3>
        <p className='TextContents'>
          In this task we had to make the robot display 'hello world', drive in a square once, before saying 'have a nice day'. This exercise was meant to teach us about for-loops, but served better as a method to teach the team to work together forward.
        </p>
        <h3 className='Headline'>Task 2</h3>
        <p className='TextContents'>
          In this task we had to make the robot turn on and off using a touch sensor, and to avoid walls and obstacles using an ultrasonic sensor. In addition, it had to start by saying "Exercise 2" whenever it is turned on by the touch sensor, and "Exercise done" whenever it is turned off by the touch sensor. This exercise taught me how to use the input devices with the robot.
        </p>
        <h3 className='Headline'>Task 3</h3>
        <p className='TextContents'>
          In this task we had to make the robot follow a line using color sensors, while stopping every 10 seconds to do a random entertaining action, and to play a cheering sound before terminating the program when an object is placed in front of it. To make the robot follow the line, we put 2 color sensors, where if the left one spotted a black color, it would turn -5 degrees, and if the right one spotted a black color, it would turn 5 degrees. We solved the entertainment part by creating 4 functions, where it did a distinct sequence of actions in each. In one of these, it played a random sound out of 12 sound effects, meaning there was technically 15 possible things for it to do as entertainment.
          <br /><br />To make this happen every 10 seconds, we used the time library to check if 10 seconds had passed each loop iteration. This method allowed the rest of the program to work fine, unlike making the program wait or sleep for 10 seconds, which would freeze the program.
          <br /><br />This task prepared the group for task 4.
        </p>
        <h3 className='Headline'>Task 4</h3>
        <p className='TextContents'>
          In the final task, we had to race other robots on a racing course guided by black lines similar to task 3. The main challenge was to let the robot drive continuously while keeping to the black line, as stopping to turn would slow it down to a crawl. We ignored pursuing a way to sabotage other players, and instead prioritized making the robot finish the course.
          <br /><br />We also incorporated a gyroscope, to let the robot adjust its speed depending on whether its in a turn, on a straight line, or driving towards the cross-section on the course. As the course was square shaped, with the crossing happening at the other side of the square compared to the starting position, the straight lines would be when the angle recorded by the gyroscope modulo 90 degrees was more or less 0, with an excpetion being when it's around 180 degrees. When this was the case, it would speed up a bit. When the gyroscope measured around 180 degrees (or 190 for crossing inwards, and 170 for crossing outwards), it would mean that the robot was driving towards the crossing, meaning it would have to speed up significantly, and decrease its turnspeed for a few seconds to get past the crossing and not end up going to the wrong side. During all other situations, it would have to decrease its speed and increase its turnspeed to manage turns without losing the black line. The implementation of gyroscope came with its own share of problems, as it was very inaccurate, and so we had to code a way to make the gyroscope reset itself at the start of each loop to prevent the inaccuracies from adding up over time. In the end, this ended up being for naught, as we got a memo warning that hardcoding wasn't allowed, and so we had to scrap the whole gyroscope feature in case of it being considered hardcoding.
          <br /><br />During the development process with non-ideal results, one of the group members noticed that our sensor's lights were different from everyone else's, and it turned out we were using color-sensors when the smarter choice was to use light reflectors. We therefore quickly implemented this change, and it lead to noticable improvements.
          <br /><br />This project taught me how to continuously test and develop ideas during the creation process in cooperation with the rest of my team to create a good end-product, and how to adjust to quick changes in rulings.
          <br /><br />In conclusion, this project allowed me to get experience working in a team, and with the product creation process.
        </p>
    </div>
  );
}

export default LegoProjectPage;
