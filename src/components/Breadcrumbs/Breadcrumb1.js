import React from "react";
import { Box, Breadcrumbs, Container, Typography } from "@material-ui/core";

import { HashLink as Link } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  link: {
    color: "white",
    "&:hover": {
      color: "grey",
      textDecoration: "none",
    },
  },
});
export default function Breadcrumb1() {
  const classes = useStyles();

  return (
    <>
      <Container className="root">
        <Typography align="center" variant="h4">
          BREADCRUMBS
        </Typography>
        <Box>
          {/* breadcrumb 1 */}
          <Breadcrumbs aria-label="breadcrumb">
            <Link className={classes.link} to="/#cards">
              Home
            </Link>
            <Typography color="textPrimary">Breadcrumb</Typography>
          </Breadcrumbs>

          {/* breadcrumb2 */}
          <Breadcrumbs separator=">" aria-label="breadcrumb">
            <Link className={classes.link} to="/#cards">
              Home
            </Link>
            <Typography color="textPrimary">Breadcrumb</Typography>
          </Breadcrumbs>

          {/* breadcrumb3 */}
          <Breadcrumbs separator="-" aria-label="breadcrumb">
            <Link className={classes.link} to="/#cards">
              Home
            </Link>
            <Typography color="textPrimary">Breadcrumb</Typography>
          </Breadcrumbs>
        </Box>
      </Container>
    </>
  );
}
