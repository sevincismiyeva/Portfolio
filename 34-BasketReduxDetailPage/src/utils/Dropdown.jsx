import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';


export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleLogout = async () => {
    handleClose(); 

    const baseUrl = "http://localhost:3000/users";
    const { data } = await axios(baseUrl);

    
    const loggedUser = data.find((user) => user.isLogined === true);

    if (loggedUser) {
      await axios.put(`${baseUrl}/${loggedUser.id}`, {
        ...loggedUser,
        isLogined: false,
      });
      setIsLoggedIn(false);
      toast.success("Logged out successfully");
      navigate("/login");
    } else {
      toast.warn("No user is logged in");
    }
  };

  useEffect(() => {
    const checkLoggedInUser = async () => {
      const { data } = await axios("http://localhost:3000/users");
      const loggedUser = data.find(user => user.isLogined === true);
      setIsLoggedIn(!!loggedUser); 
    };
  
    checkLoggedInUser();
  }, []);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{textTransform:'capitalize'}}
        color='inherit'
        size='large'
        startIcon={<AccountCircleIcon/>}
      >
        Settings
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      > {!isLoggedIn && (
        <>
          <MenuItem onClick={handleClose}>
            <Link to={'/register'}>Register</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={'/login'}>Login</Link>
          </MenuItem>
        </>
      )}
      {isLoggedIn && (
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      )}
      </Menu>
    </div>
  );
}
