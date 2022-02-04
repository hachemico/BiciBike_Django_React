import axios from "axios";
import ApiService from "./ApiService";

const API_URL = 'http://localhost:8000/api/users/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {                  //quitar headers... apiservice, envia token siempre.
    return axios.get(API_URL + 'user', { headers: authHeader() }); 
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();