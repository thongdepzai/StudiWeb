import React, { useState, useMemo, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import HearderHome from '../Home/HeaderHome';
import { Container, CssBaseline } from '@material-ui/core';
import SearchVideo from './SearchVideo';


import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player';
import BodyList from '../Body/BodyList';


import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import { videoState$ } from '../../redux/selector'
import { useParams } from 'react-router-dom';



const useStyle = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: '#0091ea',

    },
    listCart:{
        marginTop:100,
    }


}));

function ListSearchVideo() {
    const classes = useStyle();
    const videos = useSelector(videoState$);  //data store cua react


    const {searchInput} = useParams()



    const videoSearchs = useMemo(() => {
        if (!searchInput) return videos; //tra ve all

        return videos.filter((video) => {
            return (
                video.Title.toLowerCase().normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/đ/g, 'd').replace(/Đ/g, 'D').includes(searchInput.toLowerCase().trim().normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/đ/g, 'd').replace(/Đ/g, 'D')) 
                
            );
        });
    },[searchInput, videos]);

    // console.log("[]",videoSearchs)


    return (<div >

        <SearchVideo />
        <CssBaseline />
        <HearderHome />
        <div className="search-container">
            <div className="body-list">
            <BodyList  />
            </div>
            <div  className="list-card">

      

        {
            videoSearchs.map(video=>(
                
                <Container style={{ marginTop:"10px" }}>
                <Link className={classes.link} to={"/Watch/" + video.id} >
                    <Card sx={{ display: 'flex', width: 'auto', height: 'auto' }}>

                        <ReactPlayer
                            width='200px'
                            height='150px'
                            url={video.Video}
                        />
                        <CardContent sx={{ width: 200, height: 150 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {video.Title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
                </Container>
            ))
        }
         </div>
            

        </div>
        
        

        
        {/* {
            videos.map(video => {
                
                if (video.Title.toLowerCase() == searchInput.toLowerCase()) {
                    console.log(video.Title.toLowerCase() + "==" + searchInput.toLowerCase())
                    return (
                        <div>
                            <Container>
                            <Link className={classes.link} to={"/Watch/" + video.id} >
                                <Card sx={{ display: 'flex', width: 'auto', height: 'auto' }}>

                                    <ReactPlayer
                                        width='200px'
                                        height='150px'
                                        url={video.Video}
                                    />
                                    <CardContent sx={{ width: 200, height: 150 }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {video.Title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                            </Container>

                        </div>
                    )

                }
            })
        } */}

    </div>

    )
}

export default ListSearchVideo;



 