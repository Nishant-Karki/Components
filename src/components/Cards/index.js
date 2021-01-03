import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card from "./Card";

export default function index() {
  return (
    <>
      <div id="cards" style={{ paddingTop: "0.5rem" }}></div>

      <Container style={{ marginTop: "10rem" }}>
        <Typography align="center" variant="h4">
          CARDS
        </Typography>
        <Box style={{ marginTop: "3rem" }}>
          <Grid container spacing={4}>
            <Grid item sm={4}>
              <Card3 />
            </Grid>
            <Grid item sm={4}>
              <Card2 />
            </Grid>
            <Grid item sm={4}>
              <Card1 />
            </Grid>
          </Grid>
        <Card />
        </Box>
      </Container>
    </>
  );
}
