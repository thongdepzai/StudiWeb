import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ReactPlayer from 'react-player';
import {makeStyles} from '@material-ui/core/styles';




const useStyle =    makeStyles((theme)=> ({
  
    root:{
        marginRight:500,
        position: 'static',
        marginTop: 87,
        left: theme.spacing(2),
        width: 1100,
        height:600,
        


        
    }

}));
export default function CardVideo({video}) {
    const classes =useStyle();

  return (
    <Card className={classes.root}>
    <CardActionArea>
    <ReactPlayer
      width='1100px'
      height='500px'
      url={video.Video}
      controls='true'
    
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {video.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
         
  );
}
