import ApiService from './ApiService'

const BikesService = {

    getAll() { //obtener todas las bikes.
        console.log("entre get BikeService getAll")
        return ApiService().get(`bikes/`);
    },

    available(bike) { //cambiar el estado de available.
        console.log("entre get BikeService AVAILABLE")
       
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


    create(bike) { //cambiar el estado de available.
        
        console.log("entre get BikeService CREATE")    
        
        return ApiService().post(`bikes/create/`, bike);
    },

    update(bike) { //cambiar el estado de available.
        
        console.log("entre get BikeService UPDATE")    
        
        return ApiService().put(`bikes/update/`, bike);
    },


    delete(bike) { //cambiar el estado de available.
        
        let vike=bike.serialNumber
        return ApiService().delete(`bikes/delete/${vike}`);
    },


}

export default BikesService;