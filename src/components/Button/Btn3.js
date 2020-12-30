import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
  btn3: {
    backgroundColor: "#eb6383",
    padding: "0.5rem",
    margin: "1rem",

    width: "14rem",
    border: "none",
    "&:hover": {
      backgroundColor: "#cc0e74",
    },
  },
});

function Btn1() {
  const classes = useStyles();
  return (
    <>
      <Button variant="text" className={classes.btn3}>
        <Typography variant="body1">Button 3</Typography>
      </Button>
    </>
  );
}

export default Btn1;
