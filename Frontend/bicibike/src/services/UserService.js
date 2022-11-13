import ApiService from "./ApiService";

const UserService = {
  
  isAdmin(){
    return ApiService().get(`user/isAdmin`);
  },

  postAddFav(slot) { //añadir a favoritos
    return ApiService().post(`bikes/${slot}/favorite`);
  },

  deleteFav(slot) { //eliminar de favoritos
    return ApiService().delete(`bikes/${slot}/favorite`);
  },

  getFavs({jwt}){ //listar favoritos
    return ApiService().get(`profiles/favorites`);
 
  }

}

export default UserService;