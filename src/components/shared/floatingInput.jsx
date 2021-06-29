/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

import "./floatingInput.scss";

export default class FloatingInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const email = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i;
    const text = /^[a-zA-Z\s]*$/;
    const phone = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g;
    const otp = /^[0][1-9]\d{3}$|^[1-9]\d{3}$/g;
    const regex = new RegExp(eval(this.props.validationType));
    const isValid = regex.test(value);
    if (!isValid) {
      this.setState({ message: this.props.message });
    } else {
      this.setState({ message: "" });
    }
    this.props.onChange(e);
  }

  render() {
    return (
      <div className={`floatingInput ${this.props.className}`}>
        <div className="input-group">
          <input
            onChange={this.handleChange}
            value={this.props.value}
            type={this.props.type}
            required
          />
          <span className="highlight" />
          <span className="bar" />
          <span className="label">{this.props.label}</span>
          {this.props.validate ? <span className="errorMessage">{this.state.message}</span> : ""}
        </div>
      </div>
    );
  }
}

FloatingInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  message: PropTypes.string,
  validate: PropTypes.bool,
  validationType: PropTypes.oneOf(["text", "phone", "email", "otp"]).isRequired,
  type: PropTypes.oneOf(["text", "number", "email"]).isRequired,
};

FloatingInput.defaultProps = {
  label: "",
  className: "",
  message: "Please enter value",
  validate: false,
};
