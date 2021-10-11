import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Hearder from '../Home/HeaderHome';
import {makeStyles} from '@material-ui/core/styles';
import './quiz.css';
import { Container } from '@mui/material';
import { Grid } from '@material-ui/core';
import cardQuiz from '../Card/cardQuiz'



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
        Vocabulary
      </TabPanel>
      <TabPanel value={value} index={1}>
        Grammar
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="wrapper">
          <div className="heading">
            <h2 className="heading__title">Funy Test</h2>
          </div>
          <div className="content">
          <cardQuiz url="https://benative.vn/wp-content/uploads/2019/03/bai-quiz-tieng-anh-250x240.jpg" title="Bài quiz tiếng Anh chủ đề: Subordinate Conjunction Test"></cardQuiz>
            <Grid item xs={12}  sm={3} className="grid">
              <div className="content__item">
                <a href="/quiz-page"><img src="https://benative.vn/wp-content/uploads/2019/03/bai-quiz-tieng-anh-250x240.jpg" alt="abc" className="content__item--img" /></a>
                <a href="/quiz-page">Bài quiz tiếng Anh chủ đề: Subordinate Conjunction Test</a>
                <div className="content__item--button">
                  <a href="/quiz-page"><button className="button--quiz">Go Now!</button></a>
                </div>
              </div>
            </Grid>
            
          </div>
        </div>
      </TabPanel>
     
      </Box>
    </Box>
     

    </div>
  );
}
