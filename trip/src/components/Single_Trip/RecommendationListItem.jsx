import React from 'react'
import { Card, CardMedia, CardContent, Typography, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
// import { }

const RecommendationListItem = ({rec}) => {

   return (
    <Card elevation={6}>
      <CardMedia 
      style={{height: 300}}
      image={rec.photo ? rec.photo.images.large.url : "https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"}
      title={rec.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">{rec.name}</Typography>
          <Box>
            <Typography gutterBottom variant='subtitle1'>{rec.address ? rec.address : "Multiple Locations"}</Typography>
          </Box>
          {/* <Box display="flex" justifyContent="space-between">
            <Typography variant='subtitle1'>Activity Type</Typography>
            <Typography gutterBottom variant='subtitle1'>{rec.subtype[0].name}</Typography>
          </Box> */}
        </CardContent>
    </Card>
  )
}

export default RecommendationListItem