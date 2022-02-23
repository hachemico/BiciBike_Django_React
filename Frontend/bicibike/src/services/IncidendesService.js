import ApiService from "./ApiService";

const IncidencesService={

    create_incidence(params) { //cambiar el estado de available.
        
        return ApiService().post(`bikes/incidenceCreate/`,params);
    },

// EDITANDOOOOOO **********************************************************************
    
    update_incidence(params) { //cambiar el estado de available.
            console.log(params)
            
        return ApiService().put(`bikes/incidenceUpdate/`,params);
    },

//EDITANDOOOOOOOO ************************************************************************

    getIncidences() { //cambiar el estado de available.
        console.log("ENTRA GET INCIDENCES")
        return ApiService().get(`bikes/incidenceCreate/`);
    },




}
export default IncidencesService;