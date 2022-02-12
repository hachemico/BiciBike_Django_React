import ApiService from "./ApiService";

const RentService = {

    postRent(slot) {
        console.log("entre postRent - RentService")
        console.log(slot) 
        //COMPLETAR MODO DE ENVIO DE DATOS PARA ALQUILER.
        let params = {}
        return ApiService().post(`user/rent`, params);
    },

    // getOne(name) { //detail de la estacion para ver los Slots de la estación.
    //   console.log("entre getOne StationService")
    //   console.log(name)
    //     return ApiService().get(`stations/${name}/slots`);
    // },

    //   add(params) {
    
    //     return ApiService().post(`users/`, params);
    //   },
    //   update(id, params) {
    //     return ApiService().put(`users/${id}`, params); 
    //   },
    //   delete(id) {
     
    //     return Apiservice().delete(`users/${id}`);
    //   }


}
export default RentService;