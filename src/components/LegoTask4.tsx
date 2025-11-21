import React from 'react';
function LegoTask3() {
    return (
    <div>
        <h3 className='Headline'>Task 4</h3>
        <p className='TextContents'>
            In the final warm-up task, we had to race other robots on a racing course guided by black lines similar to task 3. The main challenge was to let the robot drive continuously while keeping to the black line, as stopping to turn would slow it down to a crawl. We ignored pursuing a way to sabotage other players, and instead prioritized making the robot finish the course.
            <br /><br />We also incorporated a gyroscope, to let the robot adjust its speed depending on whether its in a turn, on a straight line, or driving towards the cross-section on the course. As the course was square shaped, with the crossing happening at the other side of the square compared to the starting position, the straight lines would be when the angle recorded by the gyroscope modulo 90 degrees was more or less 0, with an excpetion being when it's around 180 degrees. When this was the case, it would speed up a bit. When the gyroscope measured around 180 degrees (or 190 for crossing inwards, and 170 for crossing outwards), it would mean that the robot was driving towards the crossing, meaning it would have to speed up significantly, and decrease its turnspeed for a few seconds to get past the crossing and not end up going to the wrong side. During all other situations, it would have to decrease its speed and increase its turnspeed to manage turns without losing the black line. The implementation of gyroscope came with its own share of problems, as it was very inaccurate, and so we had to code a way to make the gyroscope reset itself at the start of each loop to prevent the inaccuracies from adding up over time. In the end, this ended up being for naught, as we got a memo warning that hardcoding wasn't allowed, and so we had to scrap the whole gyroscope feature in case of it being considered hardcoding.
            <br /><br />During the development process with non-ideal results, one of the group members noticed that our sensor's lights were different from everyone else's, and it turned out we were using color-sensors when the smarter choice was to use light reflectors. We therefore quickly implemented this change, and it lead to noticable improvements.
            <br /><br />This project taught me how to continuously test and develop ideas during the creation process in cooperation with the rest of my team to create a good end-product, and how to adjust to quick changes in rulings.
            <br /><br />In conclusion, this project allowed me to get experience working in a team, and with the product creation process.
        </p>
    </div>
    );
}

export default LegoTask3;