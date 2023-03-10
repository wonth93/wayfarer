import React from 'react'
import { Card, CardMedia, CardContent, Typography, Box } from '@material-ui/core'

const RecommendationListItem = ({rec}) => {

   return (
    <Card elevation={6} className="animated-card">
      <CardMedia 
      style={{height: 300}}
      image={rec.photo ? rec.photo.images.large.url : "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80"}
      title={rec.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">{rec.name}</Typography>
          <Box>
            <Typography gutterBottom variant='subtitle1'>{rec.address ? rec.address : "Multiple Locations"}</Typography>
          </Box>
        </CardContent>
    </Card>
  )
}

export default RecommendationListItem