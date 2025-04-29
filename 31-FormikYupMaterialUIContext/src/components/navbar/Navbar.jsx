import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [nav, setnav] = useState(null);
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleClick = (event) => {
    setnav(event.currentTarget);
  };

  const handleClose = () => {
    setnav(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    toast.info("You have logged out");
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      className={style.navbar}
      style={{
        backgroundColor: " #1e1e1e",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        padding: "0 24px",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
          style={{ fontSize: "26px" }}
        >
          Products
        </Typography>
        <Button
          color="inherit"
          className={style.button}
          component={Link}
          to="/"
        >
          Home
        </Button>
        <Button
          color="inherit"
          className={style.button}
          component={Link}
          to="/about"
        >
          About
        </Button>
        <Button color="inherit" className={style.button} onClick={handleClick}>
          {username ? username : "Account"}
        </Button>
        <Menu anchorEl={nav} open={Boolean(nav)} onClose={handleClose}>
          {!username && (
            <>
              <MenuItem component={Link} to="/register" onClick={handleClose}>
                Register
              </MenuItem>
              <MenuItem component={Link} to="/login" onClick={handleClose}>
                Login
              </MenuItem>
            </>
          )}
          {username && <MenuItem onClick={handleLogout}>Logout</MenuItem>}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
