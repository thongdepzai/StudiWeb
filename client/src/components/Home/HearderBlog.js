import React, { useEffect, useState } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { AppBar, Button, Collapse, IconButton,   Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import {useHistory } from 'react-router-dom'


const useStyle =    makeStyles((theme)=> ({
    root:{
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        height:'300px',
        fontFamily: 'Nunito',

    },
    appbar:{
        background: 'none',
    },
    appbarWrapper:{
        width:"80%",
        margin: "0 auto",
    },
    icon:{
        color:"#0091ea",
        fontSize: '3rem',
    },
    appbarTitle:{
        flexGrow: '1',
        textDecoration: 'none',
    },
    colorText:{
        color: "#0091ea",

    },
    title:{
        fontSize: '4rem',

    },
    container:{
        textAlign: 'center'

    },
    goDown:{
        color: '#000',
        fontSize: '4rem',
    },
    link:{
        textDecoration: 'none',
        color: '#0091ea'
    }
  
}));

 function Hearder(){

    const history = useHistory()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

     const classes =useStyle();
     const [checked,setChecked] = useState(false);
     useEffect(()=>{
         setChecked(true)
     },[])


     const deleteLocal = () =>{
        localStorage.removeItem("id",undefined)
        localStorage.removeItem("name",undefined)
        history.push("/home-course") //redirect react hooks
      }

    const Header1 = (

        <div className={classes.root} id="header" >
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
            <Link to="/home-course" className={classes.appbarTitle}>
            <h1  >  <span className={classes.colorText}>  MYSTUDY</span> </h1>
            </Link>
            
            <IconButton

            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
            <SortIcon className={classes.icon}/>
            </IconButton>
                <Menu 
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                >
                 <Button>
                <Link className={classes.link} to="/Signin">
                <MenuItem>SignIn</MenuItem>
                </Link>
                </Button>

                <Button>
                <Link className={classes.link} to="/Signup">
                <MenuItem> Signup</MenuItem>
                </Link>
                </Button>
                

                </Menu>


                
            </Toolbar>
        </AppBar>

       


    </div>

    )

    const Header2 = (
        <div className={classes.root} id="header" >
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
            <Link to="/home-course" className={classes.appbarTitle}>
            <h1  >  <span className={classes.colorText}>  MYSTUDY</span> </h1>
            </Link>
            
            <IconButton

            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
            <SortIcon className={classes.icon}/>
            </IconButton>
                <Menu 
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                >
                
               
                <Button>
                <Link className={classes.link} to="/Profile">
                <MenuItem>Profile</MenuItem>
                </Link>
                </Button>

                <Button  onClick={deleteLocal}>
                <Link className={classes.link} to="/">
                <MenuItem> Logout</MenuItem>
                </Link>
                </Button>

                

                </Menu>


                
            </Toolbar>
        </AppBar>

        

    </div>
    )
     
    if(localStorage.getItem("id")!= undefined && localStorage.getItem("id") != null )
  {
    return(
      <div>
      {Header2}


      </div>
    )
  }
  else
  {
    return(
      <div>
        {Header1}
      </div>
    )

  }



}

export default Hearder;