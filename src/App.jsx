import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { changeTheName } from "./actions/index";

import Login from "./scenes/login/login";
import { Dashboard } from "./scenes/dashboard/dashboard";
import AppContainer from "./scenes/AppContainer";
import "./assets/styles.scss";

export default function ElliteApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={(props) => <AppContainer><Dashboard {...props} /></AppContainer>} />
        <Route exact path="/dashboard" component={(props) => <AppContainer><Dashboard {...props} /></AppContainer>} />
        <Route exact path="/dashboard" component={(props) => <AppContainer><Dashboard {...props} /></AppContainer>} />

        <Route path="/login" component={Login} />

      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  name: state.firstReducer.name,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheName: () => dispatch(changeTheName()),
});

connect(mapStateToProps, mapDispatchToProps)(ElliteApp);
