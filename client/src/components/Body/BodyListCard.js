import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@material-ui/core/styles';
import CardList from '../Card/CardList';


import {useDispatch,useSelector} from 'react-redux'
import * as actions from '../../redux/actions'
import {videoState$} from '../../redux/selector'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        right: theme.spacing(2),
      
    },
   
  }));

export default function BodyListCard() {
    
    const classes = useStyles();

    const dispatch = useDispatch();
     const videos =useSelector(videoState$);
     React.useEffect(()=>{
        dispatch(actions.getVideos.getVideosRequest())
     },[dispatch]);

  return (

 <Box  component="div" className={classes.root} 
    sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper', 
    }}
    mb={2}
    display="flex"
    flexDirection="column"
    // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
    height="700px" // fixed the height
    style={{
      overflow: "hidden",
      overflowY: "scroll" // added scroll
    }}
    >
       {videos.map((video)=>(
         <div>
      <nav component="div" aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>

          <CardList video={video} key={video.id} />

          </ListItem>
        </List>
      </nav>
      <Divider /> 
      </div>
    ))}
      
    </Box>





  );
}
