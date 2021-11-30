import React from "react";
import '../HomeCourse/course.css'

import { Link } from 'react-router-dom';

import BookIcon from '@mui/icons-material/Book';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export default function CardCourse({course}){
    return(
        <div className="card-course">
       
        <div className="image-course">
            <img src={course.img} alt='ok'/>
            <div className="black-bg--img"></div>
            <div className="content--img">
                <button className='btn--white'><VideoCameraBackIcon className='icon-lagre'/>Introduce</button>
                <button className='btn--blue'><VideoLibraryIcon className='icon-lagre'/> Go Now</button>
            </div>
        </div>
        <div className="title-course">
            <Link className="link-title" to={"/detail-course/"+course.id}>{course.Title}</Link>
        </div>
        <div className="brand-course">
            <span>{course.Name}</span>
        </div>
        <div className="amount-course">
            <BookIcon className='icon-card'/>
            <span>{course.NumberStudy} Buổi : {course.TimeStudy} </span>
        </div>
        <div className="amount-course">
            <AccessAlarmIcon className='icon-card'/>
            <span>{course.Timedeadline}</span>
        </div>
        <div className="title-course">
            <Link className="link-title" to='#'>{course.Location}</Link>
        </div>
        <div className="author--course">
            <span>{course.NameTeach}: </span>
            <Link to='#'>
            <img className='author-avatar' src="https://courses.uit.edu.vn/pluginfile.php/102951/user/icon/classic/f1?rev=1935563" alt="avatar" />
            </Link>
            <span>{course.Price} $$ </span>
            
        </div>
      
    </div>
    )
}