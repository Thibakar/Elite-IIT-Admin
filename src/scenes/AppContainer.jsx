import React from "react";
import PropTypes from "prop-types";

import Header from "../components/shared/header/header";
import Footer from "../components/shared/footer/fixedFooter";
import LeftMenu from "../components/leftMenu/leftMenu";

export default function AppContainer(props) {
  return (
    <div className="mainContainer">
      <Header />
      <LeftMenu />
      {props.children}
      <Footer />
    </div>
  );
}

AppContainer.propTypes = { children: PropTypes.node.isRequired };
