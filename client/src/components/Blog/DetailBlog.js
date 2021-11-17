import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import HeaderBlog from '../Home/HearderBlog'
import Footer from '../Footer'
import { Container, Modal, Typography, CardHeader, Avatar, IconButton, CardContent, CardActions, Card } from '@material-ui/core'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { showModal } from '../../redux/actions';
import Modalss from './Modal';

import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import { blog$ } from '../../redux/selector'

import { useParams } from 'react-router-dom';

import './Blog.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';


const useStyle = makeStyles((theme) => ({


    image: {
        height: '300px',
        backgroundImage: `url("https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")`,
        backgroundRepeat: 'round',
        backgroundSize: 'cover',

    },
    body: {
        backgroundColor: '#DDDDDD',
        marginLeft: '330px',
        marginRight: '340px',
        padding: '10px',
        border: 'solid',
        padding: '10px',
        borderRadius: '15px',
        borderColor:'#DDDDDD',
    },

    // images: {
    //     display: 'block',
    //     height: 'auto',
    //     width: '800px',
    //     marginLeft: '30px',
    //     marginRight: '30px',
    //     padding: '20px',

    // },
    // center: {
    //     margin: 'auto',
    //     width: '800px',
    // },
    // text: {
    //     height: 'auto',
    // },


}));


export default function DetailBlog() {
    const dispatch = useDispatch()
    const {id} = useParams();
    const blogs = useSelector(blog$)

    React.useEffect(() => {
        dispatch(actions.getBlogs.getBlogsRequest())
    }, [dispatch])


    const openModal = React.useCallback(() => {

        localStorage.setItem('idBlog',id)
        dispatch(showModal())

    }, [dispatch]);

    const classes = useStyle();
    return (
        <div className={classes.image}>
        <CssBaseline />
        <HeaderBlog />
        <div className="blog">
        
            <div className="blog__content">
                <div className="blog__content--header">
                <CardHeader
                        avatar={
                            <Avatar aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                </div>
                <div className="blog__content--box">
                {
                        blogs.map((blog) => {

                            if (blog.id==id) {
                                return (
                                    <div>
                                         <Modalss key={blog.id} blog={blog} /> 

                                       

                                            <div className="title--text">
                                                <h2 >
                                                    {blog.Title}
                                                </h2>

                                            </div>
                                                                                           
                                                <img 
                                                className="content--img"
                                                onClick={openModal}                                                    
                                                src={blog.Filepost} />

                                            <Typography className="content--text">
                                                {blog.Content}
                                                
                                            </Typography>
                                        
                                        

                                    </div>


                                )


                            }
                        })}
                </div>
            </div>
            <div className="blog__sidebar">
            <div className="blog__sidebar--header">
                <div className="header--box">
                <h3 >Recent Post</h3> 
                </div>
                
            </div>
            <div className="blog__sidebar--item">
                    <div className="item--img">
                    <img className="sidebar--img" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcA4gFdnECzkrIXP_8sFtOpLkNR4Pzj6mQsnPw-UO1p1ieeLFaHWDOAQlNSsOq_g0nYU&usqp=CAU"/>
                    </div>
                    <div className="item--title">
                        <h3>Title của blog mới tạo</h3>
                    </div>
            </div>
            <div className="blog__sidebar--item">
                    <div className="item--img">
                    <img className="sidebar--img" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcA4gFdnECzkrIXP_8sFtOpLkNR4Pzj6mQsnPw-UO1p1ieeLFaHWDOAQlNSsOq_g0nYU&usqp=CAU"/>
                    </div>
                    <div className="item--title">
                        <h3>Title của blog mới tạo</h3>
                    </div>
            </div>
            <div className="blog__sidebar--item">
                    <div className="item--img">
                    <img className="sidebar--img" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcA4gFdnECzkrIXP_8sFtOpLkNR4Pzj6mQsnPw-UO1p1ieeLFaHWDOAQlNSsOq_g0nYU&usqp=CAU"/>
                    </div>
                    <div className="item--title">
                        <h3>Title của blog mới tạo</h3>
                    </div>
            </div>
            <div className="blog__sidebar--item">
                    <div className="item--img">
                    <img className="sidebar--img" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcA4gFdnECzkrIXP_8sFtOpLkNR4Pzj6mQsnPw-UO1p1ieeLFaHWDOAQlNSsOq_g0nYU&usqp=CAU"/>
                    </div>
                    <div className="item--title">
                        <h3>Title của blog mới tạo</h3>
                    </div>
            </div>
            </div>
            
        </div>
        <Footer/>
        </div>


        // <div className={classes.image}>
        //     <CssBaseline />
        //     <HeaderBlog />
        //     <div className={classes.body}>
        //         <div className={classes.center}>
        //             <CardHeader
        //                 avatar={
        //                     <Avatar aria-label="recipe">
        //                         R
        //                     </Avatar>
        //                 }
        //                 action={
        //                     <IconButton aria-label="settings">
        //                         <MoreVertIcon/>
        //                     </IconButton>
        //                 }
        //                 title="Shrimp and Chorizo Paella"
        //                 subheader="September 14, 2016"
        //             />



        //             {
        //                 blogs.map((blog) => {

        //                     if (blog.id==id) {
        //                         return (
        //                             <div>
        //                                  <Modalss key={blog.id} blog={blog} /> 

        //                                 <div className={classes.images} >

        //                                     <div className="title-text">
        //                                         <Typography >
        //                                             {blog.Title}
        //                                         </Typography>

        //                                     </div>
                                                                                           
        //                                         <img 
        //                                         height= '700px'
        //                                         width= '700px'
        //                                         onClick={openModal}                                                    
        //                                         src={blog.Filepost} />

        //                                     <Typography className="title-text">
        //                                         {blog.Content}
        //                                     </Typography>
        //                                 </div>
                                        

        //                             </div>


        //                         )


        //                     }
        //                 })}
        //         </div>
        //     </div>
        //     <Footer/>
        // </div>
    )


}