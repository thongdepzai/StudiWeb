import React from 'react'
import { Container, Modal, Typography ,CardHeader,Avatar,IconButton, CardContent,CardActions} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { hideModal } from '../../redux/actions';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';


import * as actions from '../../redux/actions'
import {modalState$,customerState$} from '../../redux/selector'
import { useSelector, useDispatch } from 'react-redux'



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
    lefts:{
        display: 'block',
        height: '100%',
        width: '60%',
        float: 'left',

    },
    rights:{
        display: 'block',
        height: '100%',
        width: '40%',
        overflowY: 'scroll',
        float: 'right',
        backgroundColor:'#FFFFFF',


    },
   
   
  }));


export default function Modalss({blog}){

    const classes =useStyles();
    const dispatch = useDispatch()
    const user = useSelector(customerState$)

    

    const onClose = React.useCallback(()=>{
        dispatch(hideModal())
        dispatch(actions.getLogin.getLoginRequest())
        //delelocalstore
        localStorage.removeItem("idBlog",undefined)

    },[dispatch])

    const idUser = localStorage.getItem('id');

    const {isShow} = useSelector(modalState$)
    const body = (
    

    

        <div className={classes.paper}>
           <div className={classes.lefts}> 
          <img
            width='100%'
            height='100%'
            src={blog.Filepost}
           />
           </div>
            
            {/* comment  */}

           <div className={classes.rights}>
               {
                   user.map(user =>{
                       if(user.id==idUser){

                       return(
                           <div>
                        <CardHeader
                        avatar={
                        <Avatar  aria-label="recipe">
                        {user.Name}
                        </Avatar>
                        }
                      
                        title={user.Name}
                        subheader="September 14, 2016"
                        />
                        </div>
                       )

                       }
                   })
               }
           
            <CardContent>

            <Typography>
                {blog.Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               {blog.Content}
            </Typography>
            <CardActions>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            </CardActions>
            </CardContent>
            <Divider/>

            <Comments  
            idBlog={blog.id}         
            currentUserId={idUser}
            />


           </div>
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