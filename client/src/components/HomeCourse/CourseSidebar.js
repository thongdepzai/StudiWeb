import React from "react";
import './course.css';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';

import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import MenuBookIcon from '@mui/icons-material/MenuBook';


const useStyle =    makeStyles((theme)=> ({
    

    
    
    appbarTitle:{
        flexGrow: '1',
        textDecoration: 'none',
    },
    colorText:{
        color: "#0091ea",

    },
    link:{
        textDecoration: 'none',
        color: '#0091ea'
    },
  
}));




export default function CourseSidebar(){
    const classes =useStyle();


    const body1 = (
        <div className="course-sidebar">
        <div className="sidebar-content">
            <div className="content-header--item">
            <Link to="/" className={classes.appbarTitle}>
            <h1  >  <span className={classes.colorText}>  MYSTUDY</span> </h1>
            </Link>
            </div>
            <div className="content-user">
            <Link className={classes.link} to="/Signin/"><button className='user-signup'><PersonAddIcon className='icon-lagre'/>Sigin</button> </Link>
            <Link className={classes.link} to=""><button className='user-signin'><PersonIcon className='icon-lagre'/>Sigup</button> </Link>
            </div>
            <div className="content-side">
                <ul className="nav-main">
                    <li className="text-header">
                        <span>Pages</span>
                    </li>
                    <li>
                        <Link to='/home-course' className='color-text'>
                        <MenuBookIcon className='icon-lagre'/>
                        <span >Course</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Blog' className='color-text'>
                        <MenuBookIcon className='icon-lagre'/>
                        <span >Blog</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/HomeQuiz' className='color-text'>
                        <MenuBookIcon className='icon-lagre'/>
                        <span >Quiz</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/HomeVideo/'+'home'} className='color-text'>
                        <MenuBookIcon className='icon-lagre'/>
                        <span >Video</span>
                        </Link>
                    </li>
                   
                </ul>
    
            </div>
        </div>
    </div>
       
    )




    const body2 = (
   
        <div className="course-sidebar">
        <div className="sidebar-content">
            <div className="content-header--item">
            <Link to="/" className={classes.appbarTitle}>
            <h1  >  <span className={classes.colorText}>  MYSTUDY</span> </h1>
            </Link>
            </div>
            <div className="content-user">
            <Link className={classes.link} to="/Profile">  <button className='user-signup'><PersonAddIcon className='icon-lagre'/> Profile</button></Link>
               <Link className={classes.link} to="" >  <button className='user-signin'><PersonIcon className='icon-lagre'/>Home</button> </Link>
            </div>
            <div className="content-side">
                <ul className="nav-main">
                    <li className="text-header">
                        <span>Pages</span>
                    </li>
                    <li>
                        <Link to='/home-course' className='color-text'>
                        <MenuBookIcon className='icon-lagre'/>
                        <span >Course</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Blog' className='color-text'>
                        <MenuBookIcon className='icon-lagre'/>
                        <span >Blog</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/HomeQuiz' className='color-text'>
                        <MenuBookIcon className='icon-lagre'/>
                        <span >Quiz</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/HomeVideo/'+'home'} className='color-text'>
                        <MenuBookIcon className='icon-lagre'/>
                        <span >Video</span>
                        </Link>
                    </li>
                   
                </ul>
    
            </div>
        </div>
    </div>
    
    )


    if(localStorage.getItem("id")!= undefined && localStorage.getItem("id") != null )

    {
        return(

            <div>
                {body2}
            </div>

            )

    }
    else{
        return(
            <div>
                {body1}
            </div>
        )
    }

    
}