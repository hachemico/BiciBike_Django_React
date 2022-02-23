import ApiService from "./ApiService";

const IncidencesService={

    create_incidence(params) { 
        
        return ApiService().post(`bikes/incidenceCreate/`,params);
    },
    
    update_incidence(params) { 
            
        return ApiService().put(`bikes/incidenceUpdate/`,params);
    },

    getIncidences() { 
        
        return ApiService().get(`bikes/incidenceCreate/`);
    },

}
export default IncidencesService;