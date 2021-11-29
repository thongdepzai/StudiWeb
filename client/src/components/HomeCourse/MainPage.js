import React from "react";
import './course.css';
import CourseSidebar from "./CourseSidebar";
import Banner from "./Banner";
import CardCourse from "../Card/CardCourse";

import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Grid } from '@material-ui/core';


import {useDispatch,useSelector} from 'react-redux'
import * as actions from '../../redux/actions'
import {mycourse$} from '../../redux/selector'



export default function MainPage(){

    const dispatch = useDispatch();
    const mycourse =useSelector(mycourse$);
    
    React.useEffect(()=>{
        dispatch(actions.getMyCourse.getMyCoursesRequest())
    },[dispatch]);


    return(
        <div className="course-container">
            <div className="course-side">
                <CourseSidebar/>
            </div>
            <div className="course-content">
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
                      {
                          mycourse.map(course =>{
                            return ( 
                            
                                
                            <CardCourse key={course.id} course={course} />
                            
                            )

                          })
                      }

                    </div>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}