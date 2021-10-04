import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Card,List,ListItem ,Divider,Button,ListItemButton} from '@mui/material'
import { Link } from 'react-router-dom';

const useStyle =    makeStyles((theme)=> ({
  root:{
      width:300,
      height:1000,
  },
  button:{
        transition: theme.transitions.create(["background", "background-color"], {
        duration: theme.transitions.duration.complex,
      }),
      "&:hover": {
        backgroundColor: "#333",
      },

  }

}));
 function BodyHomeQuiz(){
     const classes =useStyle();
    return <div >
        
        <Card>
        <nav aria-label="main mailbox folders">
        <List>
          <ListItem  className={classes.button} disablePadding>
              <ListItemButton>
              <Button  >
                <p> UNIT 1</p>
            </Button>
              </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem  className={classes.button} disablePadding>
              <ListItemButton>
              <Button  > 
                <p> UNIT 1</p>
            </Button>
              </ListItemButton>
          </ListItem>
        </List>
      </nav>
     
        </Card>
        
    </div>
}

export default BodyHomeQuiz;