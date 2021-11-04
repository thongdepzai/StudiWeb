import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import HearderHome from '../Home/HeaderHome';
import {  CssBaseline } from '@material-ui/core';
import BodyListCard from '../Body/BodyListCard';
import BodyWatch from '../Body/BodyWatch';



import { useParams } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import * as actions from '../../redux/actions'
import {videoState$} from '../../redux/selector'

import SearchVideo from './SearchVideo';


const useStyle =    makeStyles((theme)=> ({
  
    root:{
        marginRight:500,
        position: 'static',
        marginTop: 87,
        left: theme.spacing(2),
        width: 1100,
        height:600,
        


        
    }

}));
 function HomeVideo(){

    const {id} = useParams()
    const dispatch = useDispatch();
    const videos =useSelector(videoState$);
    React.useEffect(()=>{
        dispatch(actions.getVideos.getVideosRequest())
    },[dispatch]);
     const classes =useStyle();
    return <div >
        <SearchVideo/>
        <CssBaseline/>
        <HearderHome/>
        <BodyListCard />
        
        {
        videos.map(video=>{
            if(video.id == id)
            {

           
                return(
                        <div>
                        
                        <BodyWatch  key={video.id} video={video}  />
                        </div>
                )

            }
        })}




    
    </div>
}

export default HomeVideo;