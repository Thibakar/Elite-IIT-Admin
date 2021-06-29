/* eslint-disable class-methods-use-this */
import axios from "axios";
import config from "./config";


class API {
  getByParams(api, param) {
    return axios.get(`${config.API_URL + api}/${param}`);
  }

  getBanners() {
    return axios.get(`${config.API_URL}banner`);
  }

  getCourseCategories() {
    return axios.get(`${config.API_URL}course-category`);
  }

  getCourses() {
    return axios.get(`${config.API_URL}course`);
  }

  getCourseById(categoryId) {
    return axios.get(`${config.API_URL}course-category/${categoryId}/course`);
  }

  getSingleCourseDetails(courseId) {
    return axios.get(`${config.API_URL}course/${courseId}`);
  }

  getCityList() {
    return axios.get(`${config.API_URL}cities`);
  }

  postRegistrationData(data) {
    return axios.post(`${config.API_URL}auth/register`, data);
  }

  postRegistrationCounselling(data) {
    return axios.post(`${config.API_URL}consult`, data);
  }

  login(data) {
    const result = axios.post(`${config.API_URL}auth/login`, data);
    this.setUser(result);
    return result;
  }

  setUser(data) {
    data.then((res) => {
      const eliteWebUser = {
        token: res.data.token,
        id: res.data.user.id,
        user_name: res.data.user.first_name,
        course: res.data.user.course.name,
        category: res.data.user.course_category.name,
        courseId: res.data.user.course._id,
      };
      localStorage.setItem("eliteWebUser", JSON.stringify(eliteWebUser));
    });
  }

  getUser() {
    const eliteWebUser = localStorage.getItem("eliteWebUser");
    return JSON.parse(eliteWebUser);
  }

  logout() {
    return localStorage.clear();
  }

  header() {
    const header = {
      Authorization: (this.getUser()) ? this.getUser().token : null,
      "Content-Type": "application/json",
    };
    return header;
  }

  getToken() {
    if (this.getUser()) {
      if (this.getUser().token) return true;
    }
    return false;
  }

  getUserData() {
    if (this.getUser().token) {
      const userData = {
        name: this.getUser().user_name,
        category: this.getUser().category,
        course: this.getUser().course,
        courseId: this.getUser().courseId,
      };
      return userData;
    }
    return false;
  }

  getCourseTree() {
    return axios.get(`${config.API_URL}course-tree`);
  }

  getReview() {
    return axios.get(`${config.API_URL}review`);
  }

  getSyllabus(id) {
    return axios.get(`${config.API_URL}course/${id}/subjects`);
  }

  getReferenceBooks(id) {
    return axios.get(`${config.API_URL}subject/${id}/books?type=reference book`);
  }

  getTextBooks(id) {
    return axios.get(`${config.API_URL}subject/${id}/books?type=text book`);
  }

  getProductList(id) {
    return axios.get(`${config.API_URL}product?category_id=${id}`);
  }

  getProfileInfo() {
    if (this.header().Authorization) {
      return axios.get(`${config.API_URL}profile`, { headers: this.header() });
    }
    return ({ status: false });
  }

  pudProfileInfo(data) {
    if (this.header().Authorization) {
      return axios.put(`${config.API_URL}profile`, data, { headers: this.header() });
    }
    return ({ status: false });
  }

  uploadUserProfile(file) {
    if (this.header().Authorization) {
      return axios.put(`${config.API_URL}profile-photo`, file, { headers: this.header().Authorization });
    }
    return ({ status: false });
  }

  getExams() {
    return axios.get(`${config.API_URL}exam`);
  }

  getOtp(phonenum) {
    return axios.post(`${config.API_URL}otp`, { mobile_number: phonenum });
  }

  verfiyApi(phonenum, otp) {
    return axios.post(`${config.API_URL}verify-otp`, { mobile_number: phonenum, otp });
  }
}

export default new API();
