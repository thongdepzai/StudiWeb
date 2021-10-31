import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {  Container, CssBaseline ,Grid} from '@material-ui/core';
import CardBlog from '../Card/CardBlog'


import {useDispatch,useSelector} from 'react-redux'
import * as actions from '../../redux/actions'
import {blog$} from '../../redux/selector'


const useStyle =    makeStyles((theme)=> ({
  magrin:{
      marginTop: "30px",
      marginBottom: "50px"
  }

}));
 function HomeBlog(){

   const dispatch = useDispatch()
   const blogs = useSelector(blog$)
   
   React.useEffect(()=>{
      dispatch(actions.getBlogs.getBlogsRequest())
   },[dispatch])

     const classes =useStyle();
    return (
        <Container className={classes.magrin}>
             <Grid container spacing={2} alignItems="stretch" >


              { blogs.map((blog)=>(

                  <Grid item   sm={4}>
                  <CardBlog key={blog.id} blog={blog}  />

                  </Grid>

              ))}
            
           
               
        </Grid>
        </Container>
    )
}

export default HomeBlog;