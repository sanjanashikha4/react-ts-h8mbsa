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

import InputAdornment from '@mui/material/InputAdornment';

const pages = ['', 'Pricing', 'Blog', 'earch'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const commonStyles = {
    bgcolor: 'background.paper',
    borderLeft: 2,
    marginLeft: '20px',

    borderColor: 'text.primary',
    width: '1rem',
    height: '5rem',
  };
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: '#fff',
        color: '#a9a9a9',
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              height: 80,
              width: 390,
              display: { xs: 'none', lg: 'block', xl: 'block', md: 'block' },
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src="https://www.mouritech.com/wp-content/uploads/2021/08/cropped-mouri-logo-1-1.png"
          />
          <Box
            sx={{
              ...commonStyles,
              display: { xs: 'none', lg: 'block', xl: 'block', md: 'block' },
            }}
          />
          <Box
            component="img"
            sx={{
              height: 80,
              width: 390,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              display: { xs: 'none', lg: 'block', xl: 'block', md: 'block' },
            }}
            alt="The house from the offer."
            src="https://www.mouritech.com/wp-content/uploads/2021/08/cropped-mouri-logo-1-1.png"
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                flexGrow: 1,
                color: '#000',
                display: { xs: 'block', sm: 'block', md: 'none' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            component="img"
            sx={{
              height: 80,
              width: 150,
              display: { xs: 'block', lg: 'none', xl: 'none', md: 'none' },
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              marginLeft: '20px',
            }}
            alt="The house from the offer."
            src="https://www.mouritech.com/wp-content/uploads/2021/08/cropped-mouri-logo-1-1.png"
          />

          <TextField
            id="standard-basic"
            variant="standard"
            placeholder="search..."
            sx={{
              display: { xs: 'none', lg: 'block', xl: 'block', md: 'none' },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <NotificationsNoneIcon sx={{ mx: 2 }} />

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>

            <FormControl variant="standard" sx={{ minWidth: 2 }}>
              <Select
                disableUnderline
                sx={{ minWidth: 2, backgroundColor: '#fff' }}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}>sanjana</MenuItem>
                <MenuItem value={20}>Tweety</MenuItem>
                <MenuItem value={30}>Meenu</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
