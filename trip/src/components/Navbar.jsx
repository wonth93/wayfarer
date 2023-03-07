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
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: 40,
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const { loggedUser, login, logout } = useGlobalContext(); 

  const classes = useStyles();

  return (
    <>
    {/* {!loggedUser && <button onClick={login}>Login</button>}
    {loggedUser && <p>Welcome back, {loggedUser.name}! <Link onClick={logout} to={'/'}><button>Logout</button></Link></p>} */}
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img src="/logo.png" alt="Logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          {!loggedUser && <Button onClick={login} color="inherit">Login</Button>}
          {loggedUser && <p>Welcome back, {loggedUser.name}! <Link onClick={logout} to={'/'}><Button color="inherit">Logout</Button></Link></p>}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
    </>
  )
}

export default Navbar