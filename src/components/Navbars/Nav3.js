import { AppBar, Box, Container, Typography } from "@material-ui/core";
import React from "react";
import NavLink from "../common/NavLink";
import useStyles from "./nav3Styles";

export default function Nav3() {
  const classes = useStyles();
  return (
    <>
      <div id="nav3"></div>
      <div>
        <AppBar position="relative" className={classes.appbar}>
          <Container>
            <Box className={classes.navlinks}>
              <Typography className={classes.logo}>Logo</Typography>
              <Box className={classes.navComponents}>
                <ul>
                  <NavLink path="/#cards">CARDS</NavLink>
                  <NavLink path="/#buttons">BUTTONS</NavLink>
                  <NavLink path="/#inputs">INPUTS</NavLink>
                </ul>
              </Box>
            </Box>
          </Container>
        </AppBar>
      </div>
    </>
  );
}
