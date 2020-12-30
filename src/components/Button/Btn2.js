import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  btn2: {
    backgroundColor: "#3282b8",
    margin: "1rem",

    padding: "0.5rem",
    width: "14rem",
    border: "none",
    "&:hover": {
      backgroundColor: "#46b5d1",
    },
  },
});

function Btn1() {
  const classes = useStyles();
  return (
    <>
      <Button variant="text" className={classes.btn2}>
        <Typography variant="body1">Button 2</Typography>
      </Button>
    </>
  );
}

export default Btn1;
