import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Hearder from '../Home/HeaderHome';
import {makeStyles} from '@material-ui/core/styles';
import './quiz.css';
import { Container, List, ListItem } from '@mui/material';
import { Grid } from '@material-ui/core';
import CardQuiz from '../Card/CardQuiz';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
      <div >
      <Hearder/>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'auto', marginTop: 11, }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label=" Vocabulary" {...a11yProps(0)} />
        <Tab label="Grammar" {...a11yProps(1)} />
        <Tab label="Quiz" {...a11yProps(2)} />
        
      </Tabs>
      <Box sx={{  height: 626 }}>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <h4 className="heading__title"> Words To Learn </h4>
        <Box className="box_vocabulary">
          
          <Typography variant="h5" sx={{ textAlign:'center', fontFamily:'monospace'}}> Words To Learn </Typography>
          <List>
            <ListItem>
              <Typography>
                 asdsad
              </Typography>
            </ListItem>
            
          </List>
        </Box>

        </Grid>
        <Grid xs={6} md={3} sx={{}}>
        <List>
          asdsa
          dasdasd
          asdasd
          asd
        </List>
        </Grid>
        </Grid>
     

       

      </TabPanel>
      <TabPanel value={value} index={1}>
        Grammar
      </TabPanel>

      <TabPanel value={value} index={2}>
          <div className="heading">
            <h2 className="heading__title">Exam Basic</h2>
          </div>
          <div className="content">
          <CardQuiz/>
          <CardQuiz/>
          <CardQuiz/>
          <CardQuiz/>
          <CardQuiz/>
            
          </div>
      </TabPanel>
     
      </Box>
    </Box>
     

    </div>
  );
}
