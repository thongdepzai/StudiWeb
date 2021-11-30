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
import { Link } from 'react-router-dom';


import './Blog.css';



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
        borderColor: '#DDDDDD',
    },
    link:{
        textDecoration: 'none',
        color: '#000000'
    },




}));


export default function DetailBlog() {
    const dispatch = useDispatch()
    const { id } = useParams();
    const blogs = useSelector(blog$)

    React.useEffect(() => {
        dispatch(actions.getBlogs.getBlogsRequest())
    }, [dispatch])


    const openModal = React.useCallback(() => {

        localStorage.setItem('idBlog', id)
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
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                    </div>
                    <div className="blog__content--box">
                        {
                            blogs.map((blog) => {

                                if (blog.id == id) {
                                    return (
                                        <div>
                                            <Modalss key={blog.id} blog={blog} />



                                            <div
                                                onClick={openModal}
                                                className="title--text">
                                                <h2 >
                                                    {blog.Title}
                                                </h2>
                                            </div>
                                            <img
                                                className="content--img" // lien qua den css
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
                    {

                        blogs.map((blog) => (
                            <div className="blog__sidebar--item">
                                 <Link className={classes.link} to={"/Detail/"+blog.id}>
                                <div className="item--img">
                                    <img className="sidebar--img" src={blog.Filepost} />
                                </div>
                                <div className="item--title">
                                    <h3>{blog.Title}</h3>
                                </div>
                                </Link>
                            </div>

                        ))

                    }

                    <div className="blog__sidebar--item">
                        <div className="item--img">
                            <img className="sidebar--img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcA4gFdnECzkrIXP_8sFtOpLkNR4Pzj6mQsnPw-UO1p1ieeLFaHWDOAQlNSsOq_g0nYU&usqp=CAU" />
                        </div>
                        <div className="item--title">
                            <h3>Title của blog mới tạo</h3>
                        </div>
                    </div>
                    <div className="blog__sidebar--item">
                        <div className="item--img">
                            <img className="sidebar--img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcA4gFdnECzkrIXP_8sFtOpLkNR4Pzj6mQsnPw-UO1p1ieeLFaHWDOAQlNSsOq_g0nYU&usqp=CAU" />
                        </div>
                        <div className="item--title">
                            <h3>Title của blog mới tạo</h3>
                        </div>
                    </div>
                    <div className="blog__sidebar--item">
                        <div className="item--img">
                            <img className="sidebar--img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcA4gFdnECzkrIXP_8sFtOpLkNR4Pzj6mQsnPw-UO1p1ieeLFaHWDOAQlNSsOq_g0nYU&usqp=CAU" />
                        </div>
                        <div className="item--title">
                            <h3>Title của blog mới tạo</h3>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )


}