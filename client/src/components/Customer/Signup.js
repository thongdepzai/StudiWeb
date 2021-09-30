import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Container,CssBaseline,Avatar,Button,TextField,Checkbox,Link,Grid,Box,Typography} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import {useDispatch} from 'react-redux'
import { postCustomer } from '../../redux/actions';
import {useHistory } from 'react-router-dom'



const useStyle =    makeStyles((theme)=> ({
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        backgroundColor: '#00e676',
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#00e676',

      },
      colorText:{
        color: "#0091ea",
        fontFamily: 'Nunito',
        fontSize: '2rem'
    },

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
 function SignUp(){
     const classes =useStyle();
     
     const [data,setData] =React.useState({
        Name:'',
        Birthday:'',
        Email:'',
        Pass:'',
        Sex:'',

       
    
    })


    const dispatch =useDispatch()
    const history = useHistory()

  const onSubmit = React.useCallback(()=>{
  console.log( data)
  history.push("/") //redirect react hooks
  dispatch(postCustomer.postCustomersRequest(data))


},[data,dispatch])
    return ( <div>
  
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <h1  >  <span className={classes.colorText}>  MYSTUDY</span> </h1>

      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="Name"
              label="Name"
              name="Name"
              autoComplete="Name"
              value={data.Name}
              onChange={(e)=>setData({...data,Name:e.target.value})}
            />
          </Grid>
        
          <Grid item xs={12} sm={8}>
            <TextField
              autoComplete="birthday"
              name="birthday"
              variant="outlined"
              required
              fullWidth
              id="birthday"
              label="Birthday DD/MM/YYYY"
              value={data.Birthday}
              onChange={(e)=>setData({...data,Birthday:e.target.value})}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="Sex"
              label="Sex"
              name="Sex"
              autoComplete="Sex"
              value={data.Sex}
              onChange={(e)=>setData({...data,Sex:e.target.value})}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={data.Email}
              onChange={(e)=>setData({...data,Email:e.target.value})}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={data.Pass}
              onChange={(e)=>setData({...data,Pass:e.target.value})}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onSubmit}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/Signin" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
    <Box mt={2}>
      <Copyright />
    </Box>
  </Container>
  </div>
    )
}

export default SignUp;