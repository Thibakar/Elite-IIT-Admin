/**
 * Copyright © REFIXD TECHNOLOGIE PVT LTD. - All Rights Reserved
 * -------------",
 * This file is part of REFIXD.
 * -------------
 * Authors: Chandra shekhar <chandrashekhar@refixd.com>.
 */

import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import PropTypes from "prop-types";
import Api from "../../../scenes/datastore/index";

import "./header.scss";
import "react-toastify/dist/ReactToastify.css";
import icon from "../../../assets/images/White bag.svg";
import logo from "../../../assets/images/eliteLogo.svg";
import user from "../../../assets/icons/user.png";


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false,
    };
  }


  studentProfile = () => {
    this.props.history.push("studentProfile");
  }

  render() {
    return (
      <div className="Header">
        <Navbar expand="lg">
          <Navbar.Brand>
            <Link to="/dashboard">
              <img className="elite-logo" src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <div className="headerRightAlign">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <div className="SearchBox">
                  <a href="#home">
                    <Form.Group
                      className="searchInput"
                      controlId="formBasicSearch"
                    >
                      <Form.Control
                        type="search"
                        placeholder="Search Courses, Exams, Topics, Syllabus"
                        className="input"
                      >
                      </Form.Control>
                      <p className="searchBar">
                        <i className="fa fa-search" aria-hidden="true" />
                      </p>

                      {/* <Button className="btn1 no-margin" variant="success"> */}
                      {/* <img src={search} alt="" /> */}
                      {/* </Button> */}
                    </Form.Group>
                  </a>
                </div>
                <Nav.Link href="#link">
                  <div className="phoneSection" variant="light">
                    <Row>
                      <Col md="1">
                        <i className="fa fa-phone" aria-hidden="true" />
                      </Col>
                      <Col onClick={() => this.toggleRegisterModal("Free Counseling")}>
                        <span className="freeCounseling">FREE COUNSELING</span>

                        <span className="phNumber">987654321</span>
                      </Col>
                    </Row>
                  </div>
                </Nav.Link>
                {(this.state.loginStatus)
                  ? (
                    <div className="profileSection ">
                      <div className="ManagementAlign">
                        <h3>{(Api.getUserData()) ? Api.getUserData().name : ""}</h3>
                        <p>
                          {Api.getUserData().category}
,
                          <span>{Api.getUserData().course}</span>
                        </p>
                      </div>
                      <div className="profileImage">
                        <a onClick={this.studentProfile} href="studentProfile">
                          <img
                            src={user}
                            alt="cannot display"
                          />
                        </a>
                      </div>
                    </div>
                  )
                  : (
                    <div className="LoginLink">
                      <a className="LoginLink" href="login">
                        <b>LOGIN</b>
                      </a>
                    </div>
                  )}
                <div className="cartBackground">
                  <a href="cart">
                    <img className="head-icon" src={icon} alt="headericon" />
                    <span className="badge badge-danger">9</span>
                  </a>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.func.isRequired,
};
