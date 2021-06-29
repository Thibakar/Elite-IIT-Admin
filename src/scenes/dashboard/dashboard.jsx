/**
 * Copyright © REFIXD TECHNOLOGIE PVT LTD. - All Rights Reserved
 * -------------",
 * This file is part of REFIXD.
 * -------------
 * Authors: Chandra shekhar <chandrashekhar@refixd.com>.
 */

import React from "react";

// import Api from "../datastore/index";
import Loader from "../../components/shared/loader";
// import Notify from "../../components/shared/notify";

import "./dashboard.scss";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Loader visible={this.state.isLoading}>
        <h1>home</h1>
      </Loader>
    );
  }
}
