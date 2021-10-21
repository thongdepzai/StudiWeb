import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Hearder from '../Home/HeaderHome';
import './quiz.css';
import {  IconButton, List } from '@mui/material';
import CardQuiz from '../Card/CardQuiz';
import ReactPlayer from 'react-player';
import Divider from '@mui/material/Divider';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

import {useDispatch,useSelector} from 'react-redux'
import * as actions from '../../redux/actions'
import {videoState$,dictionary$} from '../../redux/selector'
import { useParams } from 'react-router-dom';







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



  const dispatch = useDispatch();

    const {Themes} =useParams();
     const dictionary =useSelector(dictionary$);
     const video = useSelector(videoState$);
     React.useEffect(()=>{
        dispatch(actions.getDictionary.getDictionarysRequest())
        dispatch(actions.getVideos.getVideosRequest())
     },[dispatch]);
 
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
        sx={{  height: '630px',}}
      >
        <Tab label=" Vocabulary" {...a11yProps(0)} />
        <Tab label="Grammar" {...a11yProps(1)} />
        <Tab label="Quiz" {...a11yProps(2)} />
        
      </Tabs>

      <Box sx={{  height: 'auto' ,borderLeft: 1, borderColor: 'divider'}}>
      <TabPanel sx={{bgcolor:"#e0e0e0"}} value={value} index={0}>
      <div className="container">
        <div className="box_left">
         {/* title bai hoc */}
        <h3 className="title_left">
          Word to Learn
        </h3>
        {/* list vocabulary */}
        <div className="list_vocabulary">
          <List>
            {
              dictionary.map(dic => (

                //if(unit==slug)

                <p>{dic.El}</p>

              ))
            }
            
          </List>
        </div>

        </div>

      {/* tu vung va chu thich */}
        <div className="box_right">
            {
              dictionary.map(dic => (

                //if uit == slug
                <div>
                
               
                <p> <b> {dic.El} ()</b>  {dic.syn} ({dic.vi}) .</p>
                <audio controls src={dic.Audio}/>
                <p> <b> (a).</b> {dic.ExEla} .</p>
                <p> <b> (b).</b> {dic.ExElb} .</p>
                </div>



              ))
            }
           
            
         
        </div>

      </div>       
        
      </TabPanel>

      <TabPanel className="frames_grammar" value={value} index={1}>
        {
          video.map(video => {

            console.log(Themes)

            if(  video.Themes == Themes ){

              return(
                <ReactPlayer 
              width='1300px'
              height='500px'
              controls='true'
              url={video.Video}
              />

              )
              
            }
          })
        }
        

      <Divider/>

         
      </TabPanel>

      <TabPanel value={value} index={2}>
          <div className="heading">
            <h2 className="heading__title">Exam Basic</h2>
          </div>
          <div className="content">
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
