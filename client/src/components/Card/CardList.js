import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  link:{
    textDecoration: 'none',
    color: '#0091ea',

}

}))

export default function CardList({video}) {
  const classes = useStyles();

  return (<div>

<Link className={classes.link} to={"/Watch/"+video.id} >
  
    <Card sx={{ display: 'flex' ,width:'auto',height:'auto' }}>
      
      <ReactPlayer
        width='200px'
        height='150px'
        url={video.Video}
      
        />
     
       <CardContent sx={{width:200, height:150}}>
          <Typography gutterBottom variant="h5" component="div">
            {video.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
    </Card>
    </Link>

    </div>
  );
}
