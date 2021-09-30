import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import image from '../image/study.jpg'
import { CssBaseline } from '@material-ui/core';
import Header from './Hearder'
import Body from './Body';

const useStyle =    makeStyles((theme)=> ({
    root:{
        minHeight: '100vh',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

}));
 function Home(){
     const classes =useStyle();
    return <div className={classes.root}>
        <CssBaseline/>
        <Header/>
        <Body/>

    </div>
}

export default Home;