import {
  Container,
  Box,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  inputs: {
    margin: "1.5rem",
  },
});

export default function Input1() {
  const classes = useStyles();
  return (
    <>
      <div id="inputs" style={{ paddingTop: "0.5rem" }}></div>

      <Container style={{ marginTop: "6rem" }}>
        <Typography variant="h4" align="center">
          INPUT FIELDS
        </Typography>
        <Box textAlign="center">
          <div className={classes.inputs}>
            <TextField placeholder="Your Name" color="secondary" />
          </div>
          <div className={classes.inputs}>
            <TextField
              variant="outlined"
              placeholder="Your Name"
              color="secondary"
            />
          </div>
          <div className={classes.inputs}>
            <TextField
              variant="filled"
              placeholder="Your Name"
              color="secondary"
            />
          </div>
          <div className={classes.inputs}>
            <TextField  
              label="Input field 1" 
              className="field" 
            />
          </div>
          <div className={classes.inputs}>
            <TextField
                id="filled-required"
                label="Input field 2"
                // defaultValue="Hello World"
                variant="filled"
                className="field"
              />
          </div>
          <div className={classes.inputs}>
            <TextField
              id="outlined-required"
              label="Input field 3"
              variant="outlined"
              className="field"
              />
          </div>
        </Box>
      </Container>
    </>
  );
}
