import React from "react";
import { Link as RouterLink } from "react-router-dom";

import WelcomeScreen from "./../../components/WelcomeScreen";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
//import { Test } from './WelcomePage.styles';

const WelcomePage = () => {
  return (
    <WelcomeScreen>
      <Grid container direction="column" justify="center" className="full">
        <div className="highlight">
          <Grid item container xs={12} justify="center" alignItems="center">
            <Grid item>
              <IconContext.Provider value={{ size: "6em" }}>
                <WiDaySunny></WiDaySunny>
              </IconContext.Provider>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="ceneter"
              alignItems="center"
            >
              <Typography variant="h4" color="inherit">
                WeatherApp
              </Typography>
              <Link color="inherit"
              aria-label="menu"
              component={RouterLink}
              to="/main">
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreen>
  );
};

export default WelcomePage;
