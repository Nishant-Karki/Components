import React, { useState } from "react";

import {
  AppBar,
  Drawer,
  Box,
  Container,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoIosMenu } from "react-icons/io";

import "./Nav1.scss";

import NavLink from "../common/NavLink";

function Navbar() {
  const [open, setOpen] = useState(false);

  let appBarStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.87)",
    transition: "600ms ease",
    height: "3.5rem",
    boxShadow: "none",
  };

  const handleDrawer = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar sticky style={appBarStyle}>
        <Container>
          <Grid container style={{ paddingTop: "1.3rem" }}>
            <Grid item xs={3} sm={2}>
              <Typography>Logo</Typography>
            </Grid>
            <Grid item xs={7} sm={8}>
              <ul className="nav-ul d-none  d-md-flex">
                <NavLink path="/#navbar">
                  <span className="toggleDropdown-home">NAV</span>
                  <Box className="navDropdown-home">
                    <Paper className="contentDropdown-home">
                      <Link smooth to="/#nav2" className="link">
                        <Typography
                          className="demo1"
                          variant="body2"
                          color="initial"
                        >
                          Nav 2
                        </Typography>
                      </Link>
                      <hr />
                      <Link smooth to="/#nav2" className="link">
                        <Typography
                          variant="body2"
                          className="demo2"
                          color="initial"
                        >
                          Nav 3
                        </Typography>{" "}
                      </Link>
                    </Paper>
                  </Box>
                </NavLink>
                <NavLink path="/#buttons">BUTTONS</NavLink>
                <NavLink path="/#cards">CARDS</NavLink>
                <NavLink path="/#inputs">INPUTS</NavLink>
              </ul>
            </Grid>
            <Grid item xs={2} sm={2} className="d-none d-sm-flex">
              <ul className="icons-ul ">
                <NavLink path="/">
                  <HiOutlineUserCircle size={22} />
                </NavLink>
                <NavLink path="/">
                  <AiOutlineShoppingCart size={22} />
                </NavLink>
              </ul>
            </Grid>
          </Grid>
          <IoIosMenu
            size={26}
            onClick={handleDrawer}
            className="d-flex d-sm-none menu-icon"
          />
        </Container>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Box style={{ width: "16.5rem" }}>
          <Container style={{ marginTop: "1rem" }}>
            <Typography type="button" variant="h6" onClick={handleClose}>
              <AiOutlineCloseCircle style={{ marginBottom: "0.3rem" }} /> Close
            </Typography>
            <hr
              style={{
                marginTop: "0.3rem",
                marginBottom: "0.5rem",
                backgroundColor: "white",
              }}
            />
            <ul className="drawer-navlinks">
              <li>
                <Link path="/home" className="drawer-links">
                  <Typography variant="h6">DEMO</Typography>
                </Link>
              </li>
            </ul>
          </Container>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
