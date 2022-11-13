import ApiService from "./ApiService";

const UserService = {
  
  isAdmin(){
    return ApiService().get(`user/isAdmin`);
  },

  postAddFav(slot) {
    console.log("GUARDAR FAVORITO!!");
    console.log(slot);
    return ApiService().post(`bikes/${slot}/favorite`);
  },

  getFavs({jwt}){
    console.log("User-Service-getFavs()");
    return ApiService().get(`profiles/favorites`);
 
  }

}

export default UserService;