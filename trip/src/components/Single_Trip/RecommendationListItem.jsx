import React, {useState} from 'react'
import { Card, CardMedia, CardContent, Typography, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ActivityForm from './Activities/ActivityForm'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core'
// import { }

const RecommendationListItem = ({rec, trip, open, setOpen, handleClickOpen, handleClose, addActivity}) => {
  // const [open, setOpen] = useState(false)
  
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

   return (
    <>
    <Card elevation={6} className="animated-card">
      <CardMedia 
      style={{height: 300}}
      image={rec.photo ? rec.photo.images.large.url : "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80"}
      title={rec.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">{rec.name}</Typography>
          <Box>
            <Typography gutterBottom variant='subtitle1'>{rec.address}</Typography>
          </Box>
          {/* <Box display="flex" justifyContent="space-between">
            <Typography variant='subtitle1'>Activity Type</Typography>
            <Typography gutterBottom variant='subtitle1'>{rec.subtype[0].name}</Typography>
          </Box> */}
        </CardContent>
    </Card>

    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Activity</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a new activity here.
          </DialogContentText>
          <ActivityForm addActivity={addActivity} handleClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {/* <Button onClick={handleClose} color="primary">
            Subscribe
          </Button> */}
        </DialogActions>
      </Dialog>
    </>
  )
}

export default RecommendationListItem