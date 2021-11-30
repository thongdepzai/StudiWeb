import React from 'react'
import {  Modal, Grid,TextField,Button, TextareaAutosize} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { hideModal } from '../../redux/actions';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';



import * as actions from '../../redux/actions'
import {modalState$} from '../../redux/selector'
import { useSelector, useDispatch } from 'react-redux'
import {useHistory } from 'react-router-dom'
import { createBlogs } from '../../redux/actions';


import Comments from './Comments';

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


export default function ModalCreate({blog}){

    const classes =useStyles();
    const dispatch = useDispatch()
    const history = useHistory()
    const [data,setData] =React.useState({
        Filepost:'',
        Title:'',
        Content:'',
        Summary:'',    
    })

    

    const onClose = React.useCallback(()=>{
        dispatch(hideModal())
        dispatch(actions.getLogin.getLoginRequest())
        //delelocalstore

    },[dispatch])

    const {isShow} = useSelector(modalState$)


    const onSubmit = React.useCallback(()=>{
    console.log( data)
    history.push("/Blog/") //redirect react hooks
    dispatch(createBlogs.createBlogsRequest(data))

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
              id="Filepost"
              label="Filepost"
              name="Filepost"
              autoComplete="Filepost"
              value={data.Filepost}
              onChange={(e)=>setData({...data,Filepost:e.target.value})}
            />
          </Grid>     

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="Title"
              label="Title"
              name="Title"
              autoComplete="Title"
              value={data.Title}
              onChange={(e)=>setData({...data,Title:e.target.value})}
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize className={classes.textarea}
              variant="outlined"
              required
              fullWidth
              rowsMax={15}
              rowsMin={10}
              placeholder='Content'
              id="Content"
              label="Content"
              name="Content"
              autoComplete="Content"
              value={data.Content}
              onChange={(e)=>setData({...data,Content:e.target.value})}
            />
          </Grid>   
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="Summary"
              label="Summary"
              name="Summary"
              autoComplete="Summary"
              value={data.Summary}
              onChange={(e)=>setData({...data,Summary:e.target.value})}
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
         Create
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