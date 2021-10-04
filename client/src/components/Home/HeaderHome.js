import React  from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { AppBar, Button,  IconButton,   Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import {useHistory } from 'react-router-dom'
import Divider from '@mui/material/Divider';



const useStyle =    makeStyles((theme)=> ({
    root:{
        display:"flex",
        height:'10vh',
        fontFamily: 'Nunito',
        position: 'absolute',
        top: theme.spacing(1),
        
    },

    appbar:{
        background: 'none',
        color: '#002884',
        backgroundColor: '#fafafa',
        border:1,





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
    


     const deleteLocal = () =>{
        localStorage.removeItem("id",undefined)
        history.push("/") //redirect react hooks
      }

    const Header1 = (

        <div className={classes.root} id="header"  >
        <AppBar className={classes.appbar} elevation={0}
          
        >
            <Toolbar className={classes.appbarWrapper}>
            <Link to="/" className={classes.appbarTitle}>
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
            <Divider/>
        </AppBar>

    </div>

    )

    const Header2 = (
        <div className={classes.root} id="header" >
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
            <Link to="/" className={classes.appbarTitle}>
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
            <Divider/>

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