import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import TheatersIcon from '@mui/icons-material/Theaters';

import {useDispatch,useSelector} from 'react-redux'
import * as actions from '../../redux/actions'
import {videoState$} from '../../redux/selector'
import "./body.css"


import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';




const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        let: theme.spacing(2),
      

       
      
    },
    link:{
      textDecoration: 'none',
      color: '#212121',
  
  }
   
  }));

export default function BodyList() {
    
     const classes =useStyles();

     const [data,setData] =React.useState({
      home:'home',
      voa:'voa',
      ted:'ted',
      bbc:'bbc',
      ef:'ef',
      film:'film',
      toic:'toic',
     

     
  })

     const dispatch = useDispatch();
     const videos =useSelector(videoState$);
     React.useEffect(()=>{
        dispatch(actions.getVideos.getVideosRequest())
     },[dispatch]);
      

  return (

    
    <Box  component="div" className={classes.root} 
    sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper', 
    }}
    mb={2}
    display="flex"
    flexDirection="column"
    // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
    height="650px" // fixed the height
    style={{
      overflow: "hidden",
      overflowY: "scroll" // added scroll
    }}
    >
      <nav component="div" aria-label="main mailbox folders">
        <List>
        <Link to={"/HomeVideo/"+"home"}  className={classes.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>

                <HomeIcon />

              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to={"/Blog"}  className={classes.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>

                <AutoStoriesIcon />

              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItemButton>
          </ListItem>
          </Link>
        </List>
      </nav>
       <Divider />

      <nav aria-label="main mailbox folders">
        <List>
          <Link to={"/HomeVideo/"+data.voa} className={classes.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar sx={{ bgcolor: "#2196f3" }}>VOA</Avatar>
              </ListItemIcon>
              <ListItemText primary="VOA Learning English" />
            </ListItemButton>
          </ListItem>
        </Link>
        </List>
      </nav>
      <nav aria-label="main mailbox folders">
        <List>
          <Link to={"/HomeVideo/"+data.ted} className={classes.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar sx={{ bgcolor: "#d50000" }}>TED</Avatar>
              </ListItemIcon>
              <ListItemText primary="TED" />
            </ListItemButton>
          </ListItem>
        </Link>
        </List>
      </nav>
      <nav aria-label="main mailbox folders">
        <List>
          <Link to={"/HomeVideo/"+data.bbc} className={classes.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar sx={{ bgcolor: "#009688" }}>BBC</Avatar>
              </ListItemIcon>
              <ListItemText primary="BBC LearnEnglish" />
            </ListItemButton>
          </ListItem>
        </Link>
        </List>
      </nav>
      <nav aria-label="main mailbox folders">
        <List>
          <Link to={"/HomeVideo/"+data.ef} className={classes.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar sx={{ bgcolor: "#1a237e" }}>EF</Avatar>
              </ListItemIcon>
              <ListItemText primary="EF PodEnglish" />
            </ListItemButton>
          </ListItem>
        </Link>
        </List>
      </nav>
      <Divider />

   <nav  aria-label="main mailbox folders">
        <List >
          <Link to={"/HomeVideo/" + data.film} className={classes.link}>
          <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                <TheatersIcon/>
              </ListItemIcon>
              <ListItemText primary="Film" />
            </ListItemButton>
          </ListItem>
        </Link>
        </List>
      </nav>
      <nav  aria-label="main mailbox folders">
        <List >
          <Link to={"/HomeVideo/" + data.toic} className={classes.link}>
          <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                <AssistantPhotoIcon/>
              </ListItemIcon>
              <ListItemText primary="TOEIC" />
            </ListItemButton>
          </ListItem>
        </Link>
        </List>
      </nav>
    
   
      <Divider />

      <nav  aria-label="main mailbox folders">
        <List >
          <Link to="" className={classes.link}>
          <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                <TwitterIcon/>
              </ListItemIcon>
              <ListItemText primary="Twitter" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                <FacebookIcon/>
              </ListItemIcon>
              <ListItemText primary="Facebook" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                <YouTubeIcon/>
              </ListItemIcon>
              <ListItemText primary="Youtube" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                <InstagramIcon/>
              </ListItemIcon>
              <ListItemText primary="Instagram" />
            </ListItemButton>
          </ListItem>
        </Link>
        </List>
        
      </nav>
      

    </Box>




  );
}
