import React, { useState } from 'react'

import { MenuItems } from './MenuItems/MenuItems'
import './Navbar.css';
import logo from '../../images/SLIIT_Logo.png'

const Navbar = () => {

  const [state, setState] = useState(false);

  const handleClick = () => {
    setState({ clicked : !state.clicked});
  }

  return (
    <nav className='NavbarItems'>
        <h1 className="navbar-logo"><img className='fab fa-react' src={logo} height='30'></img> Research Project </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return(
              <li key={index} className='navlist'><a className={item.cName} >{item.title}</a></li>
            )
          })}
          <a href="#" className="btn btn-secondary">Sign up</a>
        </ul>
        
    </nav>
  )
}

export default Navbar

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { ThemeProvider } from '@emotion/react';
// import { darkTheme, theme, useStyles } from './styles';
// import logo from '../../images/SLIIT_Logo.png'

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const ResponsiveAppBar = () => {

//     const classes = useStyles();
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//       <ThemeProvider theme={theme}>
//           <AppBar position="static" className={classes.appbar}>
//               <Container maxWidth="xl">
//                 <Toolbar disableGutters>
//                 <img src={ logo } className={classes.logo_style} height='0' sx={{ mr: 2, display: { xs: 'none', md: 'flex' },  }} />
//                 <Typography
//                     variant="h6"
//                     noWrap
//                     component="div"
//                     sx={{ mr: 2, display: { xs: 'none', md: 'flex' },  }}
//                 >
//                     Research Project

//                 </Typography>

//                 <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                     <IconButton
//                     size="large"
//                     aria-label="account of current user"
//                     aria-controls="menu-appbar"
//                     aria-haspopup="true"
//                     onClick={handleOpenNavMenu}
//                     color="inherit"
//                     >
//                     <MenuIcon />
//                     </IconButton>
//                     <Menu
//                     id="menu-appbar"
//                     anchorEl={anchorElNav}
//                     anchorOrigin={{
//                         vertical: 'bottom',
//                         horizontal: 'left',
//                     }}
//                     keepMounted
//                     transformOrigin={{
//                         vertical: 'top',
//                         horizontal: 'left',
//                     }}
//                     open={Boolean(anchorElNav)}
//                     onClose={handleCloseNavMenu}
//                     sx={{
//                         display: { xs: 'block', md: 'none' },
//                     }}
//                     >
//                     {pages.map((page) => (
//                         <MenuItem key={page} onClick={handleCloseNavMenu}>
//                         <Typography textAlign="center">{page}</Typography>
//                         </MenuItem>
//                     ))}
//                     </Menu>
//                 </Box>
//                 <Typography
//                     variant="h6"
//                     noWrap
//                     component="div"
//                     sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },
//                 color: 'white' }}
//                 >
//                     <img src={ logo } className={classes.logo_style} height='40' />
//                     Research Project
//                 </Typography>
//                 <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                     {pages.map((page) => (
//                     <Button
//                         key={page}
//                         onClick={handleCloseNavMenu}
//                         sx={{ my: 2, color: 'white', display: 'block' }}
//                     >
//                         {page}
//                     </Button>
//                     ))}
//                 </Box>

//                 <Box sx={{ flexGrow: 0 }}>
//                     <Tooltip title="Open settings">
//                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                         <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                     </IconButton>
//                     </Tooltip>
//                     <Menu
//                     sx={{ mt: '45px' }}
//                     id="menu-appbar"
//                     anchorEl={anchorElUser}
//                     anchorOrigin={{
//                         vertical: 'top',
//                         horizontal: 'right',
//                     }}
//                     keepMounted
//                     transformOrigin={{
//                         vertical: 'top',
//                         horizontal: 'right',
//                     }}
//                     open={Boolean(anchorElUser)}
//                     onClose={handleCloseUserMenu}
//                     >
//                     {settings.map((setting) => (
//                         <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                         <Typography textAlign="center">{setting}</Typography>
//                         </MenuItem>
//                     ))}
//                     </Menu>
//                 </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//       </ThemeProvider>
//   );
// };
// export default ResponsiveAppBar;
