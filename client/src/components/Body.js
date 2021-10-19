import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import ImageCard from './ImageCard';
import studys from '../static/studys';
import useWindowPosition from '../hook/useWindowPosition';
import {Link} from 'react-router-dom'

const useStyle =    makeStyles((theme)=> ({
    root:{
       minHeight: '100vh',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
    },
    link:{
        textDecoration: 'none',
        color: '#0091ea'
    }

}));
 function Body(){

    const [data,setData] =React.useState({
        home:'home',
     
    })

     const classes =useStyle();
     const checked = useWindowPosition('header');
    return <div className={classes.root} id="select-Study">
        <Link className={classes.link} to="/HomeQuiz">
        <ImageCard study={studys[0]} checked={checked} />
        </Link>

        <Link className={classes.link} to={"/HomeVideo/"+data.home}>
        <ImageCard study={studys[1]} checked={checked} />
        </Link>

    </div>
}

export default Body;