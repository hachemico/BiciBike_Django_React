import ApiService from './ApiService'

const BikesService = {

    getAll() { //obtener todas las bikes.
     
        return ApiService().get(`bikes/`);
    },

    available(bike) { //cambiar el estado de available.
       
        let value= ''
        bike.available === true? value= false: value=true //cambiamos el estado
        let params = {"bike":{"serialNumber":bike.serialNumber,
                            "slot":bike.slot,
                            "station":bike.station,
                            "available":value,
                            "at_use":bike.at_use
                    }}
        return ApiService().put(`bikes/availableUpdate/`, params);
    },

    create(bike) { 
        return ApiService().post(`bikes/create/`, bike);
    },

    update(bike) {
        return ApiService().put(`bikes/update/`, bike);
    },

    delete(bike) { 
        let vike=bike.serialNumber
        return ApiService().delete(`bikes/delete/${vike}`);
    },

}

export default BikesService;