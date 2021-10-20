import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Container,CssBaseline,Avatar,Button,TextField,Checkbox,Link,Grid,Box,Typography} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useDispatch, useSelector  } from 'react-redux';
import * as actions from '../../redux/actions'
import { customerState$ } from '../../redux/selector';
import {useHistory } from 'react-router-dom'


const useStyle =    makeStyles((theme)=> ({
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#0091ea",

      },
      colorText:{
        color: "#0091ea",
        fontFamily: 'Nunito',
        fontSize: '3rem'
    },
    fontText:{
        fontFamily: 'Nunito',

    },
    colorT:{
        color: "#0091ea",

    }   

}));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          Huhu-hihi Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  

 function SignIn(){
     const classes =useStyle();
     const dispatch = useDispatch();
     const customer =  useSelector(customerState$)

    React.useEffect(()=>{
      dispatch(actions.getLogin.getLoginRequest())
    })

     const [data,setData] =React.useState({
     
      Email:'',
      Pass:'',  
  
      })

    const history = useHistory()


    
  
      const onSubmit = React.useCallback(()=>{

        
      const checkLogin = customer.find( checked => {
        return checked.Email == data.Email && checked.Pass == data.Pass
       })

       if(checkLogin != undefined  && checkLogin != null){

        localStorage.setItem('id',checkLogin.id)
        console.log("login ")
        history.push("/") //redirect react hooks

       }
       else{
        console.log("unlogin ")


       }
      },[data])

     

    return <div >
     <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
      <h1  className={classes.appbarTitle}>  <span className={classes.colorText}>  MYSTUDY</span> </h1>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={data.Email}
            onChange={(e)=> setData({...data, Email: e.target.value})}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={data.Pass}
            onChange={(e) => setData({...data,Pass:e.target.value})}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary"  />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
            >
            <span className={classes.fontText}>  Sign In</span>
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" className={classes.colorT}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/Signup" variant="body2" className={classes.colorT}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>    
    
    </div>
}

export default SignIn;