import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {  CssBaseline, Fab } from '@material-ui/core';
import HeaderBlog from '../Home/HearderBlog'
import BodyBlog from '../Body/BodyBlog'
import Footer from '../Footer'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux'
import { showModal } from '../../redux/actions';
import ModalCreate from './ModalCreate'




const useStyle =    makeStyles((theme)=> ({
 

  image:{

  height:'400px',
  backgroundImage: `url("https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")`,
  backgroundRepeat: 'round',
  backgroundSize: 'cover',

  },
  fab:{
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }

}));
 function HomeBlog(){
  const dispatch = useDispatch()
  const openModal = React.useCallback(() => {

    dispatch(showModal())

}, [dispatch]);
     const classes =useStyle();
    return <div className={classes.image}>
        <CssBaseline/>
        <HeaderBlog/>
        <BodyBlog/>
        <Footer/>
        <Fab color='primary' className={classes.fab} 
        onClick={openModal}
        >
          <AddIcon/>
        </Fab>
      <ModalCreate/>

    
    </div>
}

export default HomeBlog;