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


const useStyle = makeStyles((theme) => ({


    image: {

        height: '400px',
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

    images: {
        display: 'block',
        height: 'auto',
        width: '800px',
        marginLeft: '30px',
        marginRight: '30px',
        padding: '20px',

    },
    center: {
        margin: 'auto',
        width: '800px',
    },
    text: {
        height: 'auto',
    },


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
            <div className={classes.body}>
                <div className={classes.center}>
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



                    {
                        blogs.map((blog) => {

                            if (blog.id==id) {
                                return (
                                    <div>
                                         <Modalss key={blog.id} blog={blog} /> 

                                        <div className={classes.images} >

                                            <div className="title-text">
                                                <Typography >
                                                    {blog.Title}
                                                </Typography>

                                            </div>
                                                                                           
                                                <img 
                                                height= '700px'
                                                width= '700px'
                                                onClick={openModal}                                                    
                                                src={blog.Filepost} />

                                            <Typography className="title-text">
                                                {blog.Content}
                                            </Typography>
                                        </div>
                                        

                                    </div>


                                )


                            }
                        })}
                </div>
            </div>
            <Footer/>
        </div>
    )


}