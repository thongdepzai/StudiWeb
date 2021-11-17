import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea ,CardActions,IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'


const useStyle =    makeStyles((theme)=> ({
 
  link:{
      textDecoration: 'none',
      color: '#0091ea'
  }

}));


export default function CardBlog({blog}) {

  const classes =useStyle();

  return (
    <Card sx={{ maxWidth: 345, height:365, }} >
      <CardActionArea>
        <Link className={classes.link} to={"/Detail/"+blog.id}>
        <CardMedia 
          component="img"
          height="140"
          image={blog.Filepost}
        />    
        <CardContent>
          <Typography>
            {blog.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {blog.Summary}
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
