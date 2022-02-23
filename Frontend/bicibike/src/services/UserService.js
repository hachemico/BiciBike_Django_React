import ApiService from "./ApiService";

class UserService {
  
  isAdmin(){
    return ApiService().get(`user/isAdmin`);
  }

  postAddFav(slot) {

    return ApiService().post(`bikes/${slot}/favorite`);
  }

  getFavs({jwt}){

    return ApiService().get(`bikes/favorite`);
 
  }

}

export default new UserService();