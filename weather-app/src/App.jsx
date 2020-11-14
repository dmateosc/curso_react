import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import WelcomePage from "./pages/WelcomePage";
import Grid from '@material-ui/core/Grid'
import NotFoundPage from "./pages/NotFoundPage";
const App = (props) => {
  return (
    <Grid container
    justify="center"
    direction="row">
      <Grid item
      sm={11}
      xs={12}
      md={10}
      lg={8}>
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomePage></WelcomePage>
          </Route>
          <Route path="/main">
            <MainPage></MainPage>
          </Route>
          <Route path="/city">
            <CityPage></CityPage>
          </Route>
          <Route>
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      </Router>
      </Grid>
      </Grid>
  );
};

App.propTypes = {};

export default App;
