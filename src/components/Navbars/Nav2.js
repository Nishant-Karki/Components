import { AppBar, Typography, Box } from "@material-ui/core";
import React from "react";
import useStyles from "./nav2styles";
import NavLink from "../common/NavLink";

export default function Nav2() {
  const classes = useStyles();
  return (
    <>
      <div id="navbar" className={classes.nav2}></div>
      <Typography align="center" variant="h4" className={classes.navTitle}>
        NAVBARS
      </Typography>
      <div className={classes.logoContainer}>
        <Typography align="center" style={{ paddingTop: "0.5rem" }}>
          Logo
        </Typography>
      </div>
      <AppBar position="relative" color="inherit" className={classes.appbar}>
        <Box className={classes.navComponents}>
          <ul>
            <NavLink path="/#cards">CARDS</NavLink>
            <NavLink path="/#buttons">BUTTONS</NavLink>
            <NavLink path="/#inputs">INPUTS</NavLink>
          </ul>
        </Box>
      </AppBar>
    </>
  );
}
