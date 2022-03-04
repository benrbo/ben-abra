import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import logo from '../assets/images/logo.png';
import { useStyles } from '../styles/NavBarStyle';
import '../styles/cloud.css';

const navItems = [
  {
    label: "Home",
    path: "/weather",
    exactPath: true
  },
  {
    label: "Favorites",
    path: "/favorites",
    exactPath: false
  },
]

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar className={classes.container}>
      <svg class="svg2" viewBox='0 30 100 100'>
          <path d="m 20 50 a 10 10 1 0 0 0 20 h 50 a 0.5 0.5 0 0 0 0 -25 a 0.5 0.5 0 0 0 -27 -3 a 0.5 0.5 0 0 0 -23 8 m 9 20 c 22 23 34 1 37 0 m 15 0" fill="white" />
        </svg>
        
        <div>
          <img src={logo} alt="logo" />
        </div>

        <svg class="smallcloud" viewBox='0 0 100 100'>
          <path d="m 20 50 a 10 10 1 0 0 0 20 h 50 a 0.5 0.5 0 0 0 0 -25 a 0.5 0.5 0 0 0 -27 -3 a 0.5 0.5 0 0 0 -23 8 m 9 20 c 22 23 34 1 37 0 m 15 0" fill="white" />
        </svg>

        <svg class="svg2" viewBox='0 30 100 100'>
          <path d="m 20 50 a 10 10 1 0 0 0 20 h 50 a 0.5 0.5 0 0 0 0 -25 a 0.5 0.5 0 0 0 -27 -3 a 0.5 0.5 0 0 0 -23 8 m 9 20 c 22 23 34 1 37 0 m 15 0" fill="white" />
        </svg>

        <div className={classes.desktop}>
          {navItems.map(item => (
            <NavLink
              key={item.label}
              exact={item.exactPath}
              to={item.path}
              activeClassName={classes.active}
              className={classes.link}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className={classes.mobile}>
          <IconButton
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            {navItems.map(item => (
              <NavLink
                key={item.label}
                exact={item.exactPath}
                to={item.path}
                activeClassName={classes.active}
                className={classes.link}
              >
                <MenuItem onClick={handleClose}>{item.label}</MenuItem>
              </NavLink>
            ))}
          </Menu>
        </div>

      </Toolbar>
    </AppBar>
  )
}