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

    getOneId(id) { //detail de la estacion para ver los Slots de la estación.
        console.log("entre getOne StationService")
        console.log(id)

          return ApiService().get(`stations/${id}/slotsId`);
      },
    
    update_Slot({slot}) { //cambiar el estado de available.
        console.log("entre get BikeService AVAILABLE")
        console.log(slot)
       
        let params = {"slot":{"bike":slot.serialNumber,
                            "slot":slot.slot,
                    }}            
        return ApiService().put(`stations/SlotUpdate/`, params);
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