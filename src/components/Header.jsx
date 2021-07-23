import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        style={{ color: "white", float: "right" }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        David Bang
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        elevation={0}
    getContentAnchorEl={null}
        keepMounted
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit My Clubs</MenuItem>
        <MenuItem onClick={handleClose}>All clubs</MenuItem>
        <MenuItem onClick={handleClose}>My Events</MenuItem>
        <MenuItem onClick={handleClose}>My Profile</MenuItem>
        <MenuItem onClick={handleClose}>Financial Dashboard</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{fontWeight: '700', backgroundColor: 'rgba(30, 85, 107, 0.9)'}}>
        <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{margin: '0 auto', }}>
          <Button style={{fontWeight: '700',borderRight: '1px solid grey', borderRadius: 0}} color="inherit">Home</Button>
          <Button style={{fontWeight: '700',borderRight: '1px solid grey', borderRadius: 0}} color="inherit">How to start here</Button>
          <Button style={{fontWeight: '700',borderRight: '1px solid grey', borderRadius: 0}} color="inherit">My Profile</Button>
          <Button style={{fontWeight: '700',borderRight: '1px solid grey', borderRadius: 0}} color="inherit">In the media</Button>
          <Button style={{fontWeight: '700',borderRight: '1px solid grey', borderRadius: 0}} color="inherit">Hosted events</Button>
          <Button color="inherit"style={{fontWeight: '700'}}>All clubs</Button>
          </div>
        <SimpleMenu />
        </Toolbar>

      </AppBar>
    </div>
  );
}
