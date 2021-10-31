import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Box, Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import CardVideo from '../Card/CardVideo';
import {useDispatch,useSelector} from 'react-redux'
import * as actions from '../../redux/actions'
import {videoState$} from '../../redux/selector'
import { useParams } from 'react-router-dom';



const useStyle =    makeStyles((theme)=> ({
  
    root:{
        marginLeft: 310,
        marginTop:100,
        fontSize: '4rem',
        position: 'static',
        
    }

}));

 function BodyMain(){
     

    const {Themes} =useParams();
    const dispatch = useDispatch();
    const videos =useSelector(videoState$);

     React.useEffect(()=>{
        dispatch(actions.getVideos.getVideosRequest())

     },[dispatch]);


     const classes =useStyle();

    return (
        <div className={classes.root}>
    <Box >  
        <Container>
        <Grid container spacing={1} alignItems="stretch" >

           {videos.map((video)=>{
               if( Themes === video.Themes  )
                {     
                    return(

                        <Grid item xs={12}  sm={3}>
                        <CardVideo key={video.id} video={video} />
                        </Grid>
                    )  
                           
                }
        
           })}
           
            
        </Grid>
        </Container>
    </Box>
    </div>
    )
}

export default BodyMain;