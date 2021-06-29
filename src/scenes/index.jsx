/**
 * Copyright © REFIXD TECHNOLOGIE PVT LTD. - All Rights Reserved
 * -------------",
 * This file is part of REFIXD.
 * -------------
 * Authors: Chandra shekhar <chandrashekhar@refixd.com>.
 */

import React from "react";

import Header from "../components/shared/header/header";
import Footer from "../components/shared/footer/footer";
import { Dashboard } from "./dashboard/dashboard";

import "../assets/styles.scss";


export default function Web() {
  return (
    <div className="mainContainer">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}
