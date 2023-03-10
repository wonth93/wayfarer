import React from 'react'
import { useGlobalContext } from '../context';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "2rem"
  },
  title: {
    flexGrow: 1,
    paddingLeft: "2rem",
  },
  logo: {
    height: 40,
    marginRight: theme.spacing(2),
  },
  button: {
    paddingRight: "2rem",
  }
}));

const Navbar = () => {
  const { loggedUser, login, logout } = useGlobalContext(); 

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <img src="/logo.png" alt="Logo" className={classes.logo} /> */}
          <Typography variant="h2" className={classes.title}>
            WAYFARER
          </Typography>
          {!loggedUser && <Button onClick={login} color="inherit" className={classes.button}>Login</Button>}
          {loggedUser && <><Typography>Welcome back, {loggedUser.name}!</Typography><Link onClick={logout} to={'/'}><Button color="inherit" className={classes.button}>Logout</Button></Link></>}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar