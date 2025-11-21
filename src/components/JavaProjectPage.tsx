import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Box, Pagination } from '@mui/material';
import JavaTask1 from './JavaTask1';
import JavaTask2 from './JavaTask2';
import JavaTask3 from './JavaTask3';
import JavaTask4 from './JavaTask4';
import JavaTask5 from './JavaTask5';
import JavaTask6 from './JavaTask6';
import JavaTask7 from './JavaTask7';
import JavaTask8 from './JavaTask8';
import JavaTask9 from './JavaTask9';
import JavaTask10 from './JavaTask10';
import JavaTask11 from './JavaTask11';
import JavaTaskFinal from './JavaTaskFinal';

function JavaProjectPage() {
  const [page, setPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  
  const RenderComponent = ({page}: {page: number}) => {
    switch (page) {
      case 1: return <JavaTask1 />
        break;
      case 2: return <JavaTask2 />
        break;
      case 3: return <JavaTask3 />
        break;
      case 4: return <JavaTask4 />
        break;
      case 5: return <JavaTask5 />
        break;
      case 6: return <JavaTask6 />
        break;
      case 7: return <JavaTask7 />
        break;
      case 8: return <JavaTask8 />
        break;
      case 9: return <JavaTask9 />
        break;
      case 10: return <JavaTask10 />
        break;
      case 11: return <JavaTask11 />
        break;
      case 12: return <JavaTaskFinal />
        break;
      default: return <JavaTask1 />
        break;
    }
  }
  return (
    <div className='TextPage'>
        <h1 className='Headline'>Java Tasks</h1>
        <p className='TextContents'>
            The java tasks consist of <a href='https://github.com/LucyCiara/java-NTNU-tasks'>11 warm-up tasks</a> and one <a href='https://github.com/NTNU-IDI/mappe-2025-LucyCiara'>final project.</a>
            <br /><br />This course is an introduction to java programming, and programming conventions in general. Each task requires different ways to solve the problem, allowing for a wide range of libraries and programming concepts to be used.
            <br /><br />Although I've coded in java before, this course has still taught me about good project structure, the importance of limiting accessibility, the importance of correct git commit-message format, java programming, how to utilize object oriented languages well, and how to style and document code properly.
        </p>
        <Box id='PaginatorBox' className='PopOut' sx={{fontFamily: 'Maple Mono'}}>
          <Pagination count={12} page={page} onChange={handleChange} shape='rounded' />
        </Box>
        <RenderComponent page={page}/>
    </div>
  );
}

export default JavaProjectPage;
