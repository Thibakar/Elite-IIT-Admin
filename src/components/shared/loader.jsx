import React from "react";
import PropTypes from "prop-types";
import { LoadingAnimation } from "./LoadingAnimation";
import "./loader.scss";

export default class Loader extends React.Component {
  closeModel = () => {
    // if (this.props.onClose != null) {
    //   this.props.onClose();
    // }
  };

  render() {
    return (
      <>
        {this.props.visible ? (
          <div className="eliteLoading">
            <div className="loadingContainer">
              <div className="loadingButtons">
                {/* <Icon type="reload" onClick={() => { location.reload(); }} /> */}
              </div>
              <LoadingAnimation width="100%" height="100%" />
              <h3 className="loadingText">{this.props.loadingMessage}</h3>
            </div>
          </div>
        ) : null}
        {this.props.children}
      </>
    );
  }
}

Loader.propTypes = {
  children: PropTypes.node.isRequired,
  loadingMessage: PropTypes.string,
  visible: PropTypes.bool,
};

Loader.defaultProps = {
  loadingMessage: "Please wait",
  visible: false,
};
