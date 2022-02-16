import ApiService from "./ApiService";

class UserService {
  
  postAddFav(slot) {

    console.log(slot)
    console.log("addFav - UserService")
    return ApiService().post(`bikes/${slot}/favorite`);
  }

  getFavs({jwt}){

    console.log("getFavs - UserService")
    return ApiService().get(`bikes/favorite`);
  //   console.log(slot)
  }

  // }
  // getUserBoard() {                  //quitar headers... apiservice, envia token siempre.
  //   return axios.get(API_URL + 'user', { headers: authHeader() }); 
  // }

  // getModeratorBoard() {
  //   return axios.get(API_URL + 'mod', { headers: authHeader() });
  // }

  // getAdminBoard() {
  //   return axios.get(API_URL + 'admin', { headers: authHeader() });
  // }
}

export default new UserService();