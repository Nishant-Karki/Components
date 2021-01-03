import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Fade from '@material-ui/core/Fade';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import WcIcon from '@material-ui/icons/Wc';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../ui/Theme';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const useStyles = makeStyles(() => ({
  icon: {
    backgroundColor: '#666666',
    borderRadius: 5,
    '&:hover': {
      backgroundColor: '#444444',
    },
  },
  menuitem: {
    display: 'block',
  },
}));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const MenubarSujan = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [customMenu, setCustomMenu] = React.useState(null);
  const [gender, setGender] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCustomMenuClick = (event) => {
    setCustomMenu(event.currentTarget);
  };

  const handleCustomMenuClose = () => {
    setCustomMenu(null);
  };

  const handleGenderClick = (event) => {
    setGender(event.currentTarget);
  };

  const handleGenderClose = () => {
    setGender(null);
  };

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
              MenuBar component made by Sujan
            </Typography>
          </Grid>

          <Grid item>
            <Button
              aria-controls='simple-menu'
              aria-haspopup='true'
              onClick={handleClick}
            >
              Open Menu
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} className={classes.menuitem}>
                Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Grid>

          <Grid item>
            <Button
              aria-controls='customized-menu'
              aria-haspopup='true'
              variant='contained'
              color='primary'
              onClick={handleCustomMenuClick}
            >
              Open Menu
            </Button>
            <StyledMenu
              id='customized-menu'
              anchorEl={customMenu}
              keepMounted
              open={Boolean(customMenu)}
              onClose={handleCustomMenuClose}
            >
              <StyledMenuItem>
                <ListItemIcon>
                  <SendIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary='Sent mail' />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <DraftsIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary='Drafts' />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <InboxIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary='Inbox' />
              </StyledMenuItem>
            </StyledMenu>
          </Grid>
          <Grid item>
            <Button
              aria-controls='fade-menu'
              aria-haspopup='true'
              onClick={handleClick}
              variant='outlined'
              color='secondary'
            >
              Open with fade transition
            </Button>
            <Menu
              id='fade-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Grid>
          <Grid item>
            <Button
              aria-controls='simple-menu'
              aria-haspopup='true'
              onClick={handleGenderClick}
              variant='outlined'
              color='primary'
              startIcon={<WcIcon />}
            >
              Gender
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={gender}
              keepMounted
              open={Boolean(gender)}
              onClose={handleGenderClose}
            >
              <MenuItem onClick={handleGenderClose}>Male</MenuItem>
              <MenuItem onClick={handleGenderClose}>Female</MenuItem>
              <MenuItem onClick={handleGenderClose}>Other</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default MenubarSujan;
