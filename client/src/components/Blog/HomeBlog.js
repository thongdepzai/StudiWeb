import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {  CssBaseline } from '@material-ui/core';
import HeaderBlog from '../Home/HearderBlog'
import BodyBlog from '../Body/BodyBlog'
import Footer from '../Footer'





const useStyle =    makeStyles((theme)=> ({
 

  image:{

  height:'400px',
  backgroundImage: `url("https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")`,
  backgroundRepeat: 'round',
  backgroundSize: 'cover',

  },

}));
 function HomeBlog(){
    

     const classes =useStyle();
    return <div className={classes.image}>
        <CssBaseline/>
        <HeaderBlog/>

        
        <BodyBlog/>

        
        <Footer/>
         

    
    </div>
}

export default HomeBlog;