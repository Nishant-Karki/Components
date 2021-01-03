import { Typography, Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import SocialLinks from "../common/SocialLinks";
import "./footer.scss";

function Footer() {
  return (
    <div className="root">
      <Typography variant="h4" align="center">
        FOOTERS
      </Typography>

      <Container style={{ paddingTop: "2rem" }}>
        <Typography align="center">Logo</Typography>
        <hr style={{ backgroundColor: "white" }} />
        <Box className="footer">
          <Typography>Brand Name &copy;{new Date().getFullYear()}.</Typography>
          <SocialLinks />{" "}
        </Box>

        <Box style={{ marginTop: "3rem" }}>
          <hr style={{ backgroundColor: "white" }} />
          <Box className="footer">
            <Typography>
              Brand Name &copy;{new Date().getFullYear()}.
            </Typography>
            <Typography>
              <Link className="links" to="/#nav">
                Nav
              </Link>
            </Typography>

            <Typography align="center" variant="h6">
              LOGO
            </Typography>
            <Typography>
              <Link className="links" to="/#nav">
                Cards
              </Link>
            </Typography>
            <Typography>
              <Link className="links" to="/#inputs">
                Inputs
              </Link>
            </Typography>
          </Box>
        </Box>

        <Box style={{ paddingTop: "2rem" }}>
          <Grid container>
            <Grid item xs={12} sm={3}>
              <Typography>About Us</Typography>
              <Typography>Contact</Typography>
              <Typography>Email</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography>About Us</Typography>
              <Typography>Contact</Typography>
              <Typography>Email</Typography>
            </Grid>{" "}
            <Grid item xs={12} sm={3}>
              <Typography>About Us</Typography>
              <Typography>Contact</Typography>
              <Typography>Email</Typography>
            </Grid>{" "}
            <Grid item xs={12} sm={3}>
              <Typography>About Us</Typography>
              <Typography>Contact</Typography>
              <Typography>Email</Typography>
            </Grid>
          </Grid>
          <hr style={{ backgroundColor: "white" }} />

          <Box>
            <Typography>
              Brand Name &copy;{new Date().getFullYear()}.
            </Typography>
            <SocialLinks />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Footer;
