import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
export default function Footer() {
  return (
    // <Paper
    //   sx={{
    //     position: 'fixed',
    //     bottom: 0,
    //     width: '100%',
    //     backgroundColor: '#fff',
    //     boxShadow: 3,
    //   }}
    //   component="footer"
    //   square
    //   variant="outlined"
    // >
    <Box
      sx={{
        color: '#000',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
        boxShadow: 5,
      }}
      component="footer"
    >
      <Grid container>
        <Grid xs={12} md={4} lg={4}>
          <h6>Community</h6>
        </Grid>
        <Grid container xs={12} md={4} lg={4}>
          <Grid xs={12} sm={12} md={2} lg={2}>
            <h6>About</h6>
          </Grid>
          <Grid xs={12} sm={12} md={2} lg={2}>
            <h6>Learning</h6>
          </Grid>
          <Grid xs={12} sm={12} md={2} lg={2}>
            <h6>Blogs</h6>
          </Grid>
          <Grid xs={12} sm={12} md={2} lg={2}>
            <h6>Careers</h6>
          </Grid>
          <Grid xs={12} sm={12} md={2} lg={2}>
            <h6>We are hiring</h6>
          </Grid>
          <Grid xs={12} sm={12} md={2} lg={2}>
            <h6>Community</h6>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          md={4}
          lg={4}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <h6> @2023 Mouritech All Rights Reserved</h6>
        </Grid>
      </Grid>
    </Box>
    // </Paper>
  );
}
