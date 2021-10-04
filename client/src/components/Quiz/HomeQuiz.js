import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Hearder from '../Home/HeaderHome';
import BodyHomeQuiz from '../Body/BodyHomeQuiz';
import { Grid } from '@material-ui/core';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import { Container } from '@mui/material';



const useStyle =    makeStyles((theme)=> ({
  body:{
      marginTop:100,
      display:'flex',
      justifyContent:'center',
      alignItems: 'center',
  },
  icon:{
      
      fontFamily: 'Nunito',

  }

}));
 function HomeQuiz(){
     const classes =useStyle();
    return <div >
        <Hearder/>

       <Container>
       <Grid  className={classes.body} container spacing={3} alignItems="stretch">
        <Grid  item xs={12}  sm={3}>
        <LooksOneIcon  />
        <BodyHomeQuiz/>
        </Grid>


        <Grid item xs={12}  sm={3}>
        <LooksTwoIcon className={classes.icon}/>
        <BodyHomeQuiz/>
        </Grid>

        <Grid item xs={12}  sm={3}>
        <Looks3Icon className={classes.icon}/>
        <BodyHomeQuiz/>
        </Grid>

        <Grid item xs={12}  sm={3}>
        <Looks4Icon className={classes.icon}/>
        <BodyHomeQuiz/>
        </Grid>

        </Grid>
       </Container>


        
    </div>
}

export default HomeQuiz;