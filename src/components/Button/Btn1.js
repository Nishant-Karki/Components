import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  btn1: {
    backgroundColor: "#0d7377",
    margin: "1rem",
    padding: "0.5rem",
    width: "14rem",
    outline: "none",
    border: "none",
    "&:hover": {
      backgroundColor: "#29a19c",
    },
  },
});

function Btn1() {
  const classes = useStyles();
  return (
    <>
      <Button variant="text" className={classes.btn1}>
        <Typography variant="body1">Button 1</Typography>
      </Button>
    </>
  );
}

export default Btn1;
