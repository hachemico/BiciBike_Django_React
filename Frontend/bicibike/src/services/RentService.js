import ApiService from "./ApiService";

const RentService = {

    postRent(slot) {
        console.log("entre postRent - RentService")
        console.log(slot) 
        //COMPLETAR MODO DE ENVIO DE DATOS PARA ALQUILER.
        let params = {rent:{slot:slot}}
        return ApiService().post(`bikes/rent`, params);
    },
    postUpdateRent(slot) {
        console.log("entre postUPDATE-Rent - RentService")
        console.log(slot) 
        //COMPLETAR MODO DE ENVIO DE DATOS PARA ALQUILER.
        let params = {rent:{slot:slot}}
        //  let params = {}
        return ApiService().post(`bikes/rentUpdate`, params);
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