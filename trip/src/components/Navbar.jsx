import React from 'react'
import { useGlobalContext } from '../context';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LoginForm from './LoginForm';
import { Dialog, DialogTitle, DialogActions } from '@material-ui/core';

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
  },
  link: {
    textDecoration: 'none',
    color: '#FFF'
  }
}));

const Navbar = () => {
  const { loggedUser, login, logout, clickLoginForm, closeLoginForm, openLoginForm, setOpenLoginForm } = useGlobalContext(); 

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <img src="/logo.png" alt="Logo" className={classes.logo} /> */}
          <Typography variant="h2" className={classes.title}>
            <Link to={'/'} className={classes.link}>
              WAYFARER
            </Link>
          </Typography>
          {!loggedUser && <Button color="inherit" onClick={clickLoginForm} className={classes.button}>Login</Button>}

          <Dialog open={openLoginForm} onClose={closeLoginForm}>
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <DialogActions>
              <LoginForm />
            </DialogActions>
            <DialogActions>
              {!loggedUser && <Button onClick={closeLoginForm} color="inherit">Cancel</Button>}
              {!loggedUser && <Button onClick={login} color="primary" variant='contained'>Login</Button>}
            </DialogActions>
          </Dialog>
          {loggedUser && <><Typography>Welcome back, {loggedUser.name}!</Typography><Link onClick={logout} to={'/'} className={classes.link}><Button color="secondary" className={classes.button}>Logout</Button></Link></>}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar