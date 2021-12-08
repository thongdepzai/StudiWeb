import React from 'react'
import {  Modal, Grid,TextField,Button, TextareaAutosize} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { hideModal } from '../../redux/actions';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FormControlLabel from '@material-ui/core/FormControlLabel';



import * as actions from '../../redux/actions'
import {modalState$} from '../../redux/selector'
import { useSelector, useDispatch } from 'react-redux'
import {useHistory } from 'react-router-dom'
import { createBlogs } from '../../redux/actions';


// import Comments from './Comments';

const useStyles = makeStyles((theme) => ({

    paper: {
        position:'absolute',
        top:'10%',
        left:'10%',
        overflow:'auto',
        width:'80%',
        height:'80%',
        display:'block',
        backgroundColor: theme.palette.background.paper,
    },
   
    form: {
        width: '70%', // Fix IE 11 issue.
        marginTop: "50px",
        color: 'black !important',
        marginLeft: '15%',
        marginRight: '15%',
      },
      submit: {
        width: "100px", 
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#00e676',

      },
      textarea: {
        padding: '10px',
        width: '100%',
        height: '2000px',
    },
   
   
  }));


export default function ModalEdit(){

    const classes =useStyles();
    const dispatch = useDispatch()
    const history = useHistory()

    const idUser = localStorage.getItem('id')
    const name = localStorage.getItem('name')

    const [data,setData] =React.useState({
        id:idUser,
        Name:'',
        Birthday:'',
        Email:'',    
        Pass:'',    
        Sex:'',    
    })

    

    const onClose = React.useCallback(()=>{
        dispatch(hideModal())
        // dispatch(actions.getLogin.getLoginRequest())
        //delelocalstore

    },[dispatch])

    const {isShow} = useSelector(modalState$)


    const onSubmit = React.useCallback(()=>{
    console.log( data)
    // history.push("/Blog/")   //redirect react hooks
    dispatch(actions.editCustomer.editCustomersRequest(data))
    dispatch(hideModal())

    },[data,dispatch])

   
    const body = (

        <div className={classes.paper}>
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
          {/* <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid> */}
        </Grid>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onSubmit}
        >
          UpDate
        </Button>
        
      </form>
        </div>
          
        )




    return(
        <div>
                <Modal open={isShow} onClose={onClose}>
                    
                    {body}
                </Modal>
        </div>
    )
}