import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  ></Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography color="#000">
          <h5>My Tasks</h5>
          <Grid container spacing={2}>
            <Grid lg={9} xs={6} sm={6}>
              <h6>
                sanjana created new job for ui design .It is awaiting for
                approval
              </h6>
            </Grid>
            <Grid lg={3} xs={6} sm={6} sx={{}}>
              <h6>Go to tasks</h6>
            </Grid>
          </Grid>
        </Typography>
        <Divider />
        <Typography color="#000">
          <h5>My Tasks</h5>
          <Grid container spacing={2}>
            <Grid lg={9} xs={6} sm={6}>
              <h6>
                sanjana created new job for ui design .It is awaiting for
                approval
              </h6>
            </Grid>
            <Grid lg={3} xs={6} sm={6} sx={{}}>
              <h6>Go to tasks</h6>
            </Grid>
          </Grid>
        </Typography>
        <Divider />
        <Typography color="#000">
          <h5>My Tasks</h5>
          <Grid container spacing={2}>
            <Grid lg={9} xs={6} sm={6}>
              <h6>
                sanjana created new job for ui design .It is awaiting for
                approval
              </h6>
            </Grid>
            <Grid lg={3} xs={6} sm={6} sx={{}}>
              <h6>Go to tasks</h6>
            </Grid>
          </Grid>
        </Typography>
        <Divider />
      </CardContent>
    </Card>
  );
}
