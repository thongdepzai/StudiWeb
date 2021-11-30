import React, { useState } from "react";
import './video.css';

import {useDispatch,useSelector} from 'react-redux'
import * as actions from '../../redux/actions'
import {videoState$} from '../../redux/selector'

import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";


    export default function SearchVideo(){
    const videos =useSelector(videoState$); 

    const [searchInput, setSearchInput] = useState(' ');
    // const [filteredResults, setFilteredResults] = useState([]);
 

    const searchItems = (searchValue) => {
      
        if(searchValue !== '')
        {
        setSearchInput(searchValue)  
        } 
        // if(searchInput !== ''){
        //     const filteredData = videos.filter((item)=>{
        //         return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        //     })
        //     setFilteredResults(filteredData)
        // }else{
        //     setFilteredResults(videos)
        // }   
    }
  
   
    return(
        <div className="searchvideo">
            <div className="searchvideo__input">
                <input 
                type="text" 
                id="search" 
                placeholder="Search..."
                onChange={(e) => searchItems(e.target.value)}
                />
            </div>
            <div className="searchvideo__btn" >
                <Link to={"/SearchVideo/"+searchInput}>
                <button type="submit">                   
                    <SearchIcon/>
                </button>
                </Link>

            </div>
        </div>
    )
}