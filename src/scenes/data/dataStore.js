/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import _ from "lodash-es";
import * as _s from "underscore.string";
import axios from "axios";

export class BaseStore {
    baseUrl = () => "";
}

export class Course {
  getPropertyDetails(Id) {
    return axios.get(`${this.baseUrl}/URL/${Id}`);
  }
}
