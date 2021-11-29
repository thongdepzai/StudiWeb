import React from "react";
import './video.css';

import SearchIcon from '@mui/icons-material/Search';


export default function SearchVideo(){
    return(
        <div className="searchvideo">
            <div className="searchvideo__input">
                <input type="text" id="search" placeholder="Search..."/>
            </div>
            <div className="searchvideo__btn">
                <button type="submit"><SearchIcon/></button>
            </div>
        </div>
    )
}