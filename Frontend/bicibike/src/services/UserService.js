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

  getFavs(){ //listar favoritos
    return ApiService().get(`profiles/favorites`);
 
  },

  getUserProfile(username){ //listar favoritos
    return ApiService().get(`profiles/${username}`);
 
  },

  updateProfile(params){ //listar favoritos
    
    return ApiService().get(`profiles/update/`, params);
  },
  
  getUserRents(username){ //listar favoritos
    
    return ApiService().get(`bikes/rent`);
  },

  getUserIncidences(username){ //listar favoritos
    return ApiService().get(`profiles/${username}`);
 
  }

  
}

export default UserService;