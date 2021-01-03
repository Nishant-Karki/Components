import { Container, Box, Typography } from "@material-ui/core";
import React from "react";
import Btn1 from "./Btn1";
import Btn2 from "./Btn2";
import Btn3 from "./Btn3";
import ButtonExample from "./ButtonExample";

export default function index() {
  return (
    <>
      <div id="buttons" style={{ paddingTop: "0.5rem" }}></div>
      <div>
        <Container style={{ marginTop: "5rem" }}>
          <Typography variant="h4" align="center">
            BUTTONS
          </Typography>
          <Box textAlign="center" style={{ marginTop: "1rem" }}>
            <div>
              <Btn1 />
            </div>
            <div>
              <Btn2 />
            </div>
            <div>
              <Btn3 />
            </div>
            <div>
              <ButtonExample />
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
}
