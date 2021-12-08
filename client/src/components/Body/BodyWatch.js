import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ReactPlayer from 'react-player';
import {makeStyles} from '@material-ui/core/styles';
import "./body.css"


export default function CardVideo({video}) {

  return (
    <Card className="card--video">
    <CardActionArea>
    <ReactPlayer
    className="img-video"
      url={video.Video}
      controls='true'

      // url={video.Video}
      
     
    
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
