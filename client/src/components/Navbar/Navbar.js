import React , {useState,useEffect} from 'react';
import {AppBar,Typography,Avatar,Toolbar,Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from './styles';
import voyage from '../../images/memories.png';

const Navbar = () => {
    const classes = useStyles();
    const user=null;

console.log(user);
  return (
       <AppBar className={classes.appBar} position="static" color="inherit">
       <div classNme={classes.brandContainer}>
       <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Voyage</Typography>
       <img className={classes.image} src={voyage} alt="icon" height="60" />
       </div>
       <Toolbar className={classes.toolBar}>
        {user ? (
            <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.reult.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
            </div>
        ):(        
            <div>
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            </div>
        )}
    </Toolbar>
    </AppBar>
  )
}

export default Navbar
