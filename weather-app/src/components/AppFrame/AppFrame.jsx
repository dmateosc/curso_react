import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {Link as LinkRouter} from "react-router-dom";

const AppFrame = ({children}) => {
  return (
    <Grid container justify="center">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="menu">
            <Link to="/main" color="inherit" aria-label="menu" component={LinkRouter}>
              <IconContext.Provider value={{size: '2em'}}>
                <WiDaySunny></WiDaySunny>
              </IconContext.Provider>
            </Link>
          </IconButton>
          <Typography variant="h6" color="inherit">Weather App</Typography>
        </Toolbar>
      </AppBar>
      <Grid  item
      xs = {12}
      sm = {11}
      md = {10}
      lg = {8}
      
      >
        {children}

      </Grid>
    </Grid>
  );
};

AppFrame.propTypes = {
  // bla: PropTypes.string,
};

AppFrame.defaultProps = {
  // bla: 'test',
};

export default AppFrame;
