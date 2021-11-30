import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Card,List,ListItem ,Divider,Button,ListItemButton} from '@mui/material'
import { Link } from 'react-router-dom';

const useStyle =    makeStyles((theme)=> ({
  

  link:{
    textDecoration: 'none',
  },
  button:{
        transition: theme.transitions.create(["background", "background-color"], {
        duration: theme.transitions.duration.complex,
      }),
      "&:hover": {
        backgroundColor: "#333",
      },

  },
  text:{
    fontSize:'1.6rem',
  }

}));
 function BodyHomeQuiz({unit}){
     const classes =useStyle();

      return <div >
        
      <Card>
        <Link className={classes.link} to={"/StudyUnit/"+unit} >
      <nav aria-label="main mailbox folders">
      <List>
        <ListItem  className={classes.button} disablePadding>
            <ListItemButton>
            <Button  >
              
              <p className={classes.text}>  Unit {unit} </p>
          </Button>
            </ListItemButton>
        </ListItem>
      </List>
    </nav>
    </Link>
    <Divider />
     
      </Card>
      
  </div>

    
}

export default BodyHomeQuiz;