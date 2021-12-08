import React from "react";
import './course.css';
import CourseSidebar from "./CourseSidebar";

import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';

const handleNavBar =()=>{
    const sidebar = document.querySelector(".sidebar--active")

    sidebar.classList.toggle("active")
}

export default function NavBar(){
    return(
        <div>
            <div className="navbar">
                <AlignHorizontalRightIcon className="big-icon" onClick={()=>handleNavBar()}/>
            </div>
            <div className="sidebar--active" >
            <CourseSidebar/>
            </div>
            
        </div>
       
    )
}
