import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Box, Pagination } from '@mui/material';
import LegoTask1 from './LegoTask1';
import LegoTask2 from './LegoTask2';
import LegoTask3 from './LegoTask3';
import LegoTask4 from './LegoTask4';
import usePagination from '@mui/material/usePagination';
import LegoFinalTask from './LegoTaskFinal';


function LegoProjectPage() {
  const [page, setPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  
  const RenderComponent = ({page}: {page: number}) => {
    switch (page) {
      case 1: return <LegoTask1 />
        break;
      case 2: return <LegoTask2 />
        break;
      case 3: return <LegoTask3 />
        break;
      case 4: return <LegoTask4 />
        break;
      case 5: return <LegoFinalTask />
        break;
      default: return <LegoTask1 />
        break;
    }
  }
  return (
    <div className='TextPage'>
      <h1 className='Headline'>Lego Project</h1>
      <p className='TextContents'>In the lego project, we had to use a lego mindstorm ev3 robot to do 4 seperate warm-up tasks, and one final project. The robot was coded in python using micropython and pybricks.
        <br /><br />In this project, I took on the role of lead programmer, as I had the most experience with programming, and sometimes debugged hardware issues, like input devices being plugged in the wrong socket.
        <br /><br />The project files for the warm-up tasks are available in our git <a href='https://git.ntnu.no/Team-3/Innledende-Lego-oppgaver'>repository</a>, and our final project is likewise available at our git <a href='https://git.ntnu.no/Team-3/Medisinrobot'>repository</a>
      </p>
      <Box id='PaginatorBox' className='PopOut' sx={{fontFamily: 'Maple Mono'}}>
        <Pagination count={5} page={page} onChange={handleChange} shape='rounded' />
      </Box>
      <RenderComponent page={page}/>
    </div>
  );
}

export default LegoProjectPage;
