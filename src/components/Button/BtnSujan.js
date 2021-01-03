import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../ui/Theme';

const useStyles = makeStyles(() => ({
  input: {
    display: 'none',
  },
  btnSpacing: {
    marginLeft: '5px',
  },
  btngrp: {
    boxShadow: 'none',
  },
  iconbtn: {
    backgroundColor: '#eeeeee',
    '&:hover': {
      backgroundColor: '#cccccc',
    },
  },
}));

const BtnSujan = () => {
  const classes = useStyles();
  const [visible, setVisible] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction='row' justify='center'>
        <Grid
          item
          container
          direction='column'
          justify='center'
          alignItems='center'
          lg={6}
          spacing={2}
        >
          <Grid item>
            <Typography
              variant='h5'
              component='h2'
              align='center'
              gutterBottom
              style={{ marginTop: '40px' }}
            >
              Button component made by Sujan
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant='outlined'
              color='secondary'
              onClick={() => alert('You clicked a button')}
            >
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              size='large'
              onClick={() => setVisible(!visible)}
            >
              Toggle Button
            </Button>
            {visible ? (
              <Button
                variant='contained'
                color='default'
                size='small'
                onClick={() => setVisible(!visible)}
                className={classes.btnSpacing}
              >
                Toggle Me
              </Button>
            ) : null}
          </Grid>
          <Grid item>
            <ButtonGroup
              variant='contained'
              color='primary'
              className={classes.btngrp}
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <input
              accept='image/*'
              className={classes.input}
              id='icon-button-file'
              type='file'
            />
            <label htmlFor='icon-button-file'>
              <IconButton
                color='primary'
                aria-label='upload picture'
                component='span'
                className={classes.iconbtn}
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default BtnSujan;
