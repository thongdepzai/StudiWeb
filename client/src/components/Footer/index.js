import React from 'react'
  import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import {Container, Grid, Box,  Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import InputIcon from '@material-ui/icons/Input';
import { Link } from 'react-router-dom';


export default function PrimaryFoot(){

     const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
        link:{
          textDecoration: 'none',
          color: '#FFFFFF'
      }
      }));
      const classes = useStyles();

    return(
<div className={classes.root}>
        <Box
        px={{xs:3,sm:10}}
        py={{xs:5,sm:10}}
        bgcolor="text.secondary"
        color="white"
        
        >
        <Container >
      <Grid container spacing={3}>
        <Grid item xs={10} sm={4}>
                <Box borderBottom={1}>
                <span> Gioi thieu ve huhu hihi</span>
                </Box>
                <Box>
                <span>
                Mercedes-Benz (German: [mɛɐ̯ˈtseːdəsˌbɛnts, -dɛs-]),[6][7] commonly referred to as Mercedes, is a German automotive brand (and subsidiary – as Mercedes-Benz AG – of Daimler AG) headquartered in Stuttgart, Germany.[1] Mercedes-Benz produces luxury vehicles and commercial vehicles.[note 2] The headquarters is in Stuttgart, Baden-Württemberg. The first Mercedes-Benz brand name vehicles were produced in 1926. In 2018, Mercedes-Benz was the largest seller of premium vehicles in the world, having sold 2.31 million passenger cars.[8]
                </span>
                </Box>
                
        </Grid>
        <Grid item xs={12} sm={4}  >
                 <Box >
                 
                <Link to="/" className={classes.link} > <InstagramIcon/> Instagram</Link> 
                </Box>
                <Box >
                
                <Link to="/" className={classes.link}>  <FacebookIcon/> Facebook</Link>
                </Box>
                <Box >
               
                <Link to="/" className={classes.link}>  <TwitterIcon/> Twitter</Link>
                </Box>
                <Box >
                <PhoneIcon/>
                <Link to="/" className={classes.link}> Phone Number : 036999999</Link>
                </Box>
                <Box >
                <EmailIcon/>
                <Link to="/"  className={classes.link}> Email : 18521458@gm.uit.edu.vn </Link>
                </Box>

        </Grid>
        <Grid item xs={12} sm={4}>

                <Box borderBottom={1}>     </Box>
                <Box > <Typography  >COME BACK</Typography>   </Box>
                <Box sizeWidth={2} sizeHeight={1}>
                        <button>
                          <Link to="/HomeVideo/home/"   color="#0091ea" >
                        <InputIcon fontSize="large"   />

                          </Link>
                        </button>
                </Box>

        </Grid>
      </Grid>
      </Container> 
      </Box>
    </div>
       
        
            
            
      
    )
}