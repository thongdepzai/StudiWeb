import React from "react";
import './course.css';
import CourseSidebar from "./CourseSidebar";
import Banner from "./Banner";
import CardCourse from "../Card/CardCourse";
import NavBar from "./NavBar";

import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import BookIcon from '@mui/icons-material/Book';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

export default function MainPage(){
    return(
        <div className="course-container">
            <div className="course-side">
                <CourseSidebar/>
            </div>
            <div className="course-content">
                <NavBar/>
                <Banner/>
                <div className="main-content">
                    <div className="content-search">
                    <div className="search__input">
                        <input type="text" id="search" placeholder="Search Course ..."/>
                        </div>
                        <div className="search__btn">
                            <button type="submit"><SearchIcon className='icon-search'/></button>
                        </div>
                    </div>
                    <div className="content-title">
                        <span>
                            <MenuBookIcon className='icon-title'/>
                            <span >Courses</span>
                        </span>
                    </div>
                    <div className="content-list">
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                    </div>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}