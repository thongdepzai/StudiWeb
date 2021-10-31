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

  },
  colos:{
      backgroundColor: '#e0e0e0',
  }

}));


 function HomeQuiz(){
    const [unit1,setUnit1] =React.useState([

        1,2,3,4,5,6,7,8,9,10,11,12   
    ])
    const [unit2,setUnit2] =React.useState([

        13,14,15,16,17,18,19,20,21,22,23,24   
    ])
    const [unit3,setUnit3] =React.useState([

       25,26,27,28,29,30,31,32,33,34,35,36 
    ])
    const [unit4,setUnit4] =React.useState([

        37,38,39,40,41,42,43,44,45,46,47,48   
    ])
   

     const classes =useStyle();
    return <div >
        <Hearder/>

       <Container className={classes.colos}>
       <Grid  className={classes.body} container spacing={3} alignItems="stretch">

      
       
        <Grid  item xs={9}  sm={3}>
        <LooksOneIcon  />     

        { unit1.map(unit =>(
        <BodyHomeQuiz unit={unit}/>

            ))
        }
        </Grid>
       


        <Grid item xs={12}  sm={3}>
        <LooksTwoIcon className={classes.icon}/>
        {
            unit2.map(unit =>(
        <BodyHomeQuiz unit={unit} />


            ))
        }
        </Grid>

        <Grid item xs={12}  sm={3} >
        <Looks3Icon className={classes.icon}/>
        {
            unit3.map(unit =>(
        <BodyHomeQuiz unit={unit} />


            ))
        }
        </Grid>

        <Grid item xs={12}  sm={3}>
        <Looks4Icon className={classes.icon}/>
        {
            unit4.map(unit =>(
            <BodyHomeQuiz unit={unit} />


            ))
        }
        </Grid>

        </Grid>
       </Container>


        
    </div>
}

export default HomeQuiz;