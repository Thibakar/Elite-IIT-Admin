import React from "react";
import "./leftMenu.scss";
import { Link } from "react-router-dom";

class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftMenuStatus: true,
    };
  }

  toggleSideNav = () => {
    this.setState({ leftMenuStatus: !this.state.leftMenuStatus });
  }

  render() {
    return (
      <>
        <div className="leftMenu">
          <div className={this.state.leftMenuStatus ? "active side-nav" : "side-nav"}>
            <div className="leftMenuToggle">
              {this.state.leftMenuStatus
                ? <i onClick={() => this.toggleSideNav()} className="fa fa-bars" aria-hidden="true" />
                : <i onClick={() => this.toggleSideNav()} className="fa fa-minus" aria-hidden="true" /> }
            </div>
            <ul className="LeftMenuList">
              <span className="menuHeader m-b-10">COURSE MANAGEMENT</span>
              <div className="subMenu">
                <Link className="menuItem m-t-10" to="/student/home">
                  <li>
                    <span className="menu-icon"><i className="fa fa-youtube-play" aria-hidden="true" /></span>
                    <span className="menu-content">
                    Home
                    </span>
                  </li>
                </Link>
                <Link className="menuItem" to="/student/home">
                  <li>
                    <span className="menu-icon"><i className="fa fa-comment" aria-hidden="true" /></span>
                    <span className="menu-content">Live Class</span>
                  </li>
                </Link>
                <Link className="menuItem" to="/student/home">
                  <li>
                    <span className="menu-icon"><i className="fa fa-user" aria-hidden="true" /></span>
                    <span className="menu-content">
                   My Class
                    </span>
                  </li>
                </Link>
                <Link className="menuItem" to="/student/home">
                  <li>
                    <span className="menu-icon"><i className="fa fa-shopping-bag" aria-hidden="true" /></span>
                    <span className="menu-content">
                   product management
                    </span>
                  </li>
                </Link>
                <Link className="menuItem" to="/student/courseDetail">
                  <li>
                    <span className="menu-icon"><i className="fa fa-truck" aria-hidden="true" /></span>
                    <span className="menu-content">
                   Course Detail
                    </span>
                  </li>
                </Link>
                <Link className="menuItem" to="/student/home">
                  <li>
                    <span className="menu-icon"><i className="fa fa-inr" aria-hidden="true" /></span>
                    <span className="menu-content">
                   payment management
                    </span>
                  </li>
                </Link>
                <Link className="menuItem" to="/student/home">
                  <li>
                    <span className="menu-icon"><i className="fa fa-male" aria-hidden="true" /></span>
                    <span className="menu-content">
                   Learning Analysis
                    </span>
                  </li>
                </Link>

                <Link className="menuItem" to="/student/home">
                  <li>
                    <span className="menu-icon"><i className="fa fa-users" aria-hidden="true" /></span>
                    <span className="menu-content">
                    Reference Material
                    </span>
                  </li>
                </Link>

                <Link className="menuItem" to="/student/freeFeatures">
                  <li>
                    <span className="menu-icon"><i className="fa fa-cog" aria-hidden="true" /></span>
                    <span className="menu-content">
                    Free Feature
                    </span>
                  </li>
                </Link>
                <Link className="menuItem" to="/student/doughtClarification">
                  <li>
                    <span className="menu-icon"><i className="fa fa-users" aria-hidden="true" /></span>
                    <span className="menu-content">
                   Doubt Claarification
                    </span>
                  </li>
                </Link>
                <Link className="menuItem" to="/student/home">
                  <li className="menuItem m-b-20">
                    <span className="menu-icon"><i className="fa fa-chrome" aria-hidden="true" /></span>
                    <span className="menu-content">
                   Bookmark
                    </span>
                  </li>
                </Link>
              </div>
              <span className="menuHeader">ACCOUNT</span>
              <Link className="menuItem m-t-10" to="/student/home">
                <li>
                  <span className="menu-icon"><i className="fa fa-tachometer" aria-hidden="true" /></span>
                  <span className="menu-content">
                 Profile
                  </span>
                </li>
              </Link>
              <Link className="menuItem" to="/student/notification">
                <li>
                  <span className="menu-icon"><i className="fa fa-sign-out" aria-hidden="true" /></span>
                  <span className="menu-content">
                  Notification
                  </span>
                </li>
              </Link>
              <Link className="menuItem" to="/student/home">
                <li>
                  <span className="menu-icon"><i className="fa fa-sign-out" aria-hidden="true" /></span>
                  <span className="menu-content">
                 My Order
                  </span>
                </li>
              </Link>
              <Link className="menuItem" to="/student/home">
                <li>
                  <span className="menu-icon"><i className="fa fa-sign-out" aria-hidden="true" /></span>
                  <span className="menu-content">
                 logout
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default LeftMenu;
