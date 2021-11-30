import React from "react";
import '../HomeCourse/course.css'

import { Link } from 'react-router-dom';

import BookIcon from '@mui/icons-material/Book';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

export default function CardCourseSmall(){
    return(
        <div className="card-course--small">
        <div className="image-course">
            <img src="https://f.howkteam.vn/Upload/cke/images/1_LOGO%20SHOW%20WEB/8_CTDL%26GT/Intro.jpg" alt='Cấu trúc dữ liệu và giải thuật'/>
            <div className="black-bg--img"></div>
            <div className="content--img">
                <button className='btn--white'><VideoCameraBackIcon className='icon-lagre'/>Introduce</button>
                <button className='btn--blue'><VideoLibraryIcon className='icon-lagre'/> Go Now</button>
            </div>
        </div>
        <div className="title-course">
            <Link className="link-title" to='#'>Cấu trúc dữ liệu và giải thuật</Link>
        </div>
        <div className="brand-course">
            <span>From MyStudy</span>
        </div>
        <div className="amount-course">
            <BookIcon className='icon-card'/>
            <span>4 Lesson</span>
        </div>
        <div className="author--course">
            <span>Authors: </span>
            <Link to='#'>
            <img className='author-avatar' src="https://courses.uit.edu.vn/pluginfile.php/102951/user/icon/classic/f1?rev=1935563" alt="avatar" />
            </Link>
            
        </div>
    </div>
    )
}