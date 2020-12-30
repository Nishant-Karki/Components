import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "./Card3.scss";

const useStyles = makeStyles({
  btn1: {
    backgroundColor: "#eb6383",
    padding: "0.3rem",
    marginTop: "0.6rem",
    width: "12rem",
    "&:hover": {
      backgroundColor: "#cc0e74",
    },
  },
});
export default function Card3() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Box className="box-container">
          <Box className="image-container">
            <img
              src="https://pbs.twimg.com/media/Du7ivivXgAEVzE2.jpg:large"
              alt="product-img"
              className="image"
            />
          </Box>
          <Box className="slider-container">
            <Typography>Title</Typography>
            <Typography>Sub-title</Typography>
            <Typography>Description</Typography>
            <Button id="btn" className={classes.btn1}>
              Button
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
