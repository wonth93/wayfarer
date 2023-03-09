import React from 'react'
import { Grid, Typography, Box, Button } from '@material-ui/core';

const styles = {
  root: {
    width: '100%', // set width to 100% of the parent container
    overflowX: 'hidden', // prevent horizontal overflow
    marginTop: "2rem",
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
};

const Welcome = () => {
  return (
    <Box sx={styles.root}>
      <Grid container spacing={5} style={{padding: "4rem", display: "flex", alignItems: "center"}}>
        <Grid item xs={12} md={7}>
          <Typography gutterBottom variant="h1">A Travel App for the Modern Wayfarer.</Typography>
          <Typography gutterBottom variant="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
          <Typography gutterBottom variant="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
          <Typography gutterBottom variant="subtitle1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
          <Typography gutterBottom variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
          <Button variant="outlined" color="primary">Get Started</Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img align="center" id="homepage-image" width="100%" alt="woman in canoe" src="https://i.ibb.co/ZVFK4CJ/roberto-nickson-7-Bjm-DICVlo-E-unsplash-modified.png"></img>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Welcome