import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import './user.css'
import HearderHome from '../Home/HeaderHome';
import CardCourseSmall from '../Card/CardCourseSmall';

import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const useStyle =    makeStyles((theme)=> ({
  

}));
 function Profile(){
     const classes =useStyle();
    return (
        <div className="profile">
            <HearderHome/>
            <div className="user-general">
                <div className="user-avatar">
                    <div className="wrapper-avatar">
                    <InsertEmoticonIcon className='icon-avatar'/>
                    </div>
                    
                </div>
                <div className="user-name">
                    <h3>Vũ Văn Thành</h3>
                    <div className="wrapper-flex"><EmailOutlinedIcon className="icon-lagre"/> Email@gmail.com</div>
                    <div className="wrapper-flex"><CakeOutlinedIcon className="icon-lagre"/>01/01/2000</div>
                    <strong> Nam</strong>
                </div>
                <div className="wrapper-edit">
                    <button className='btn-edit'><BorderColorOutlinedIcon className="icon-medium"/>Edit Profile</button>
                </div>
            </div>
            <div className="user-detail">
                <div className="left-detail">
                    <h3 className='title'>My Course</h3>
                    <div className="grid-course">
                        <div className="row-2">
                        <CardCourseSmall/>
                        </div>
                        <div className="row-2">
                        <CardCourseSmall/>
                        </div>
                        <div className="row-2">
                        <CardCourseSmall/>
                        </div><div className="row-2">
                        <CardCourseSmall/>
                        </div>
                    </div>
                    <div className='bg-white'>
                    <Stack  spacing={2}>
                        <Pagination count={10} size="large" variant="outlined" shape="rounded" />
                    </Stack>
                    </div>
                   
                        
                </div>
                <div className="right-detail">
                    <h3 className='title'>Followed</h3>
                    <div className="list-course">
                        <div className="row-1">
                        <CardCourseSmall/>
                        </div>
                        <div className="row-1">
                        <CardCourseSmall/>
                        </div>
                    </div>
                    <div className='bg-white'>
                    <Stack  spacing={2}>
                        <Pagination count={10} variant="outlined" shape="rounded" />
                    </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;