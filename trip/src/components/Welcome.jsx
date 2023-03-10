import React from 'react'
import { Grid, Typography, Box, Button } from '@material-ui/core';

const styles = {
  root: {
    width: '100%', // set width to 100% of the parent container
    overflowX: 'hidden', // prevent horizontal overflow
    marginTop: "2rem",
  }
};

const Welcome = () => {
  return (
    <Box sx={styles.root}>
      <Grid container spacing={5} style={{padding: "4rem", display: "flex", alignItems: "center"}}>
        <Grid item xs={12} md={7} className="animated-card-slow">
          <Typography gutterBottom variant="h1">A Travel App for the Modern Wayfarer.</Typography>
          <Typography gutterBottom variant="h5">All of your trip information in one place - so you can focus on the destination, not the details.</Typography>
          <Typography gutterBottom variant="h6">Create and view all of your trips, keep track of trip activities and view recommendations for where to visit during your stay.</Typography>
          {/* <Typography gutterBottom variant="subtitle1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
          <Typography gutterBottom variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography> */}
          <Button variant="outlined" color="primary">Get Started</Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img align="center" class="animated-card-slow" width="100%" alt="woman in canoe" src="https://i.ibb.co/ZVFK4CJ/roberto-nickson-7-Bjm-DICVlo-E-unsplash-modified.png"></img>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Welcome