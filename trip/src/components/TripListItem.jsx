import React from 'react';
import { Link } from "react-router-dom";
import { useGlobalContext } from '../context';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const TripListItem = ({id, city, country, deleteTrip}) => {
  //const { setTrip } = useGlobalContext();
  const [open, setOpen] = React.useState(false);

  // functions for handling form modal
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  console.log(city, country)
  return (
    <div>
      <Link to={`/trips/${id}`}>{city}, {country}</Link>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Delete Trip
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Warning!</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Are you sure you want to delete this trip?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="contained" color="primary" onClick={() => deleteTrip(id)}>
            Delete
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      {/*<Link to={'/'}><button onClick={() => deleteTrip(id)}>Delete This Trip</button></Link>*/}
    </div>
  )
}

export default TripListItem;