import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import './user.css'
import HearderHome from '../Home/HeaderHome';
import CardCourseSmall from '../Card/CardCourseSmall';


import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import {  CssBaseline } from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux'
import * as actions from '../../redux/actions'
import {customerState$} from '../../redux/selector'
import { useParams } from 'react-router-dom';
import { showModal } from '../../redux/actions';
import ModalEdit from './ModalEdit';

const useStyle =    makeStyles((theme)=> ({
  


}));
 function Profile(){
     const classes =useStyle();

     const dispatch = useDispatch()
     const customers = useSelector(customerState$)

     React.useEffect(()=>{
         dispatch(actions.getLogin.getLoginRequest())
     })


     const openModal = React.useCallback(() => {
   
       dispatch(showModal())
   
   }, [dispatch]);


     const id = localStorage.getItem('id')


    const body = (
        
            customers.map(customer =>{

                if(customer.id == id){

                    return(
                        <div>
                            <div className="user-general">
            <div className="user-avatar">
                <div className="wrapper-avatar">
               <img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"/>
                </div>
                
            </div>
            <div className="user-name">
                <h3>{customer.Name}</h3>
                <div className="wrapper-flex"><EmailOutlinedIcon className="icon-lagre"/>{customer.Email}</div>
                <div className="wrapper-flex"><CakeOutlinedIcon className="icon-lagre"/>{customer.Birthday}</div>
                <strong>{customer.Sex}</strong>
            </div>
            <div className="wrapper-edit">
                <button  className='btn-edit' onClick={openModal} ><BorderColorOutlinedIcon className="icon-medium"/>Edit Profile</button>
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
            })
        
    )


    return <div className="profile">
        <HearderHome/>
            {body}

        <ModalEdit/>
        </div>
    
}

export default Profile;