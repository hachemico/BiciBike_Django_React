import ApiService from './ApiService'

const StationsService = {

    get() {
        console.log("entre get StationService")
        return ApiService().get(`stations/`);
    },

    getOne(name) { //detail de la estacion para ver los Slots de la estación.
      console.log("entre getOne StationService")
      console.log(name)
        return ApiService().get(`stations/${name}/slots`);
    },

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
export default StationsService;