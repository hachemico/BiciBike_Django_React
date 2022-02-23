import ApiService from './ApiService'

const StationsService = {

    get() {
        return ApiService().get(`stations/`);
    },

    getOne(name) { //detail de la estacion para ver los Slots de la estación.
      
        return ApiService().get(`stations/${name}/slots`);
    },

    getOneId(id) { 
          return ApiService().get(`stations/${id}/slotsId`);
      },
    
    update_Slot({slot}) { 
       
        let params = {"slot":{"bike":slot.serialNumber,
                            "slot":slot.slot,
                    }}            
        return ApiService().put(`stations/SlotUpdate/`, params);
    },
  
}
export default StationsService;