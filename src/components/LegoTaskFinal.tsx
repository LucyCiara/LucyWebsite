import React from 'react';
import FinalLegoUML from '../assets/FinalLegoUML.png';
// import RobotShowcase from '../assets/robotShowcase.mp4';
function LegoFinalTask() {
    return (
    <div>
        <h3 className='Headline'>Final Lego Project</h3>
        <p className='TextContents'>
            The final project for the course was to create a robot to benefit society, and to build it according to some of the UN's sustainable development goals.
        </p>
        <h4 className='Headline'>Abstract</h4>
        <p className='TextContents'>
            To help reduce the workload of healthcare personnel we developed a medicine robot as a proof of concept, designed to support patients who require daily healthcare assistance, while simultaneously reducing the workload of healthcare personnel. The robot functions as a reminder system for medication intake and physical activity, aiming to increase patient independence and optimize resource use in the healthcare sector.
            <br /><br />The project was conducted with a multidisciplinary team applying agile methodology and iterative development. We followed a structured process involving planning, prototyping, testing, and documentation, with emphasis on collaboration and sustainability.
            <br /><br />Key results include a working prototype that successfully performs core functions such as time-based reminders and user interaction. Although some advanced features like wireless communication were not implemented due to technical constraints, the robot demonstrates strong potential for further development.
            <br /><br />The project aligns with several UN Sustainable Development Goals, particularly Goal 3 (Good Health and Well-being), and contributes to social and economic sustainability by reducing the need for continuous physical presence of healthcare workers.
            <br /><br />In conclusion, the medicine robot offers a promising solution for improving home healthcare services and enhancing patient autonomy. Future work may focus on expanding functionality, refining user experience, and exploring integration with broader healthcare systems. 
        </p>
        <h4 className='Headline'>Process</h4>
        <p className='TextContents'>
            As I was the lead programmer, the process for me primarily involved coding the robot. The goal was for the robot to have a morning and medicine alarm system, which would encourage the patient to get out of bed, and to take their medication on time and be guided through taking the medication. This meant that a timekeeping system was required, and this became the main challenge.
            <br /><br />The robot had a lot of hardware limitations, as it's meant to be an educational toy. This included its hardwareclock, which was wrong and inconsistent, meaning it had to somehow be adjusted and to allow for easily putting in the hour, second and minute offset for each time the robot is booted. The main way this was achieved was through a class called TimeDisplay, which handled everything to do with keeping track of the time. In its initiation, it takes the hour, minute and second offset, and its get-method returns a tuple with the adjusted time.
            <br /><br />The two other classes handled the alarm clock feature, and the medicine reminder and dispensing feature. They both utilize the TimeDisplay class to handle the timing, allowing for accurate and easily set up time-based functionality.
        </p>
        <img className='InSink' id='Portrait' src={FinalLegoUML}></img>
        <p className='TextContents'>
            When coding, I strived for high coherence and low coupling using different classes for each required feature, and by aiming to make variables and methods as private as possible in the classes I wrote.
        </p>
        <h4 className='Headline'>Result</h4>
        <p className='TextContents'>
            The result was a proof of concept which showcased our product idea and its potential. It had the ability to display the core features of the AlarmClock and Medisin classes in an easily presentable way.
        </p>
        {/* <video className='inSink' id='portrait'>
            <source src={RobotShowcase}
        </video> */}
        <h4 className='Headline'>What I've learnt/What I will do differently in the future</h4>
        <p className='TextContents'>
            I've learnt that micropython doesn't allow for all libraries or functionalities that python allows for. I've learnt of the importance of the git commit message format and of working with branches to minimize conflicts.
            <br /><br />Next time I will make even more object variables private, as DRIVE_SPEED and robot ended up being public due to being added very last second. I will also not save a TimeDisplay object as an object variable, as this causes more coupling, which makes maintaining the code more difficult for me and my teammates. In the future I would instead feed the update methods with the time I get from TimeDisplay's getTime() method. I would also not store the hours, minutes and seconds in seperate object variables, but instead as a tuple for better readability and less cluttery code.
        </p>
    </div>
    );
}

export default LegoFinalTask;