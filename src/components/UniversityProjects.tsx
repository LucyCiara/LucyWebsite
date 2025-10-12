import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Background from './Background';
import LucyImage from '../assets/LucyBeach.png';
import LegoMindstorm from '../assets/89133_wm_lego-mindstorms-ev3-support-gallery-image1-1277491368.jpg';
import Worm from '../assets/Worm.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Java from '../assets/198-1984828_java-icon-transparent-hd-png-download-1592478804.png'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  textAlign: 'center',
  padding: theme.spacing(1),
  boxShadow: 'none'

}));

export default function UniversityProjects() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        <Grid size={6}>
            <Link to={'/LucyWebsite/lego-project'}>
                <Button>
                    <Item  className='PopOut' style={{ borderRadius: 0 }}>
                        <p className='Headline'>Lego Project</p>
                        <img className='InSink' id='ProjetImg' src={LegoMindstorm} />
                    </Item>
                </Button>
            </Link>
        </Grid>

        <Grid size={6}>
          <Link to={'/LucyWebsite/java-project'}>
            <Button>
              <Item className='PopOut' style={{ borderRadius: 0 }}>
                  <p className='Headline'>Java Project</p>
                  <img className='InSink' id='BigProjectImg' src={Java} />
              </Item>
            </Button>
          </Link>
        </Grid>
        <Grid size={6}>
          <Button>
            <Item className='PopOut' style={{ borderRadius: 0 }}>
                <p className='Headline'>Coming Soon</p>
                <img className='InSink' id='ProjectImg' src={Worm} />
            </Item>
          </Button>
        </Grid>
        <Grid size={6}>
          <Button>
            <Item  className='PopOut' style={{ borderRadius: 0 }}>
                <p className='Headline'>Coming Soon</p>
                <img className='InSink' id='ProjectImg' src={Worm} />
            </Item>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}