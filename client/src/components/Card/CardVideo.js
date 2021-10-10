import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  link:{
    textDecoration: 'none',
    color: '#0091ea',

}

}))


export default function CardVideo({video}) {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link className={classes.link} to={"/Watch/"+video.id} >
      <CardActionArea>
      <ReactPlayer
        width='345'
        height='1000'
        url="https://www.youtube.com/watch?v=DXCGzkVjAN8"
      
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
      </Link>
    </Card>
  );
}
