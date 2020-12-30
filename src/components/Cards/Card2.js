import React from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import "./Card2.scss";

const useStyles = makeStyles({
  btn1: {
    backgroundColor: "#0d7377",
    padding: "0.5rem",
    width: "10rem",
    marginTop: "0.6rem",
    "&:hover": {
      backgroundColor: "#29a19c",
    },
  },
});

export default function Card2() {
  const classes = useStyles();
  return (
    <Paper className="product-container">
      <Box className="image-container">
        <img
          src="https://pbs.twimg.com/media/Du7ivivXgAEVzE2.jpg:large"
          alt="product-img"
          className="image"
        />
      </Box>
      <Box textAlign="center">
        <Typography variant="h5">Title</Typography>
        <Typography variant="body2">Sub-Title</Typography>
        <Button className={classes.btn1}>
          <Typography>Button</Typography>
        </Button>
      </Box>
    </Paper>
  );
}
