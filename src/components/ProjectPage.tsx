import { Link } from 'react-router-dom';
import LucyImage from '../assets/LucyBeach.png';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import * as React from 'react';
import ProjectTabs from './ProjectTabs';

function ProjectPage() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className='TextPage'>
            <h1 className='Headline'>My Projects:</h1>
            <ProjectTabs />
        </div>
    );
}

export default ProjectPage;
