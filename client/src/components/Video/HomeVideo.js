import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import HearderHome from '../Home/HeaderHome';
import {  CssBaseline } from '@material-ui/core';
import BodyList from '../Body/BodyList';
import BodyMain from '../Body/BodyMain';
import SearchVideo from './SearchVideo';





const useStyle =    makeStyles((theme)=> ({
  

}));
 function HomeVideo(){
    

     const classes =useStyle();
    return <div >
        <SearchVideo/>
        <CssBaseline/>
        <HearderHome/>
        <BodyList  />
        <BodyMain />
         

    
    </div>
}

export default HomeVideo;