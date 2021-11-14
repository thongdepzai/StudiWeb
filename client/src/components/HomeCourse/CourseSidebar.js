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
  
}));

export default function CourseSidebar(){
    const classes =useStyle();
    return(
        <div className="course-sidebar">
            <div className="sidebar-content">
                <div className="content-header--item">
                <Link to="/" className={classes.appbarTitle}>
                <h1  >  <span className={classes.colorText}>  MYSTUDY</span> </h1>
                </Link>
                </div>
                <div className="content-user">
                    <button className='user-signup'><PersonAddIcon className='icon-lagre'/>SignUp</button>
                    <button className='user-signin'><PersonIcon className='icon-lagre'/>SignIn</button>
                </div>
                <div className="content-side">
                    <ul className="nav-main">
                        <li className="text-header">
                            <span>Pages</span>
                        </li>
                        <li>
                            <Link to='#' className='color-text'>
                            <MenuBookIcon className='icon-lagre'/>
                            <span >Course</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='#' className='color-text'>
                            <MenuBookIcon className='icon-lagre'/>
                            <span >Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='#' className='color-text'>
                            <MenuBookIcon className='icon-lagre'/>
                            <span >Quiz</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='#' className='color-text'>
                            <MenuBookIcon className='icon-lagre'/>
                            <span >Video</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='#' className='color-text'>
                            <MenuBookIcon className='icon-lagre'/>
                            <span >Feedback</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='#' className='color-text'>
                            <MenuBookIcon className='icon-lagre'/>
                            <span >Course</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='#' className='color-text'>
                            <MenuBookIcon className='icon-lagre'/>
                            <span >Course</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='#' className='color-text'>
                            <MenuBookIcon className='icon-lagre'/>
                            <span >Course</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='#' className='color-text'>
                            <MenuBookIcon className='icon-lagre'/>
                            <span >Course</span>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}