import ApiService from "./ApiService";

const RentService = {

    postRent(slot) { // Realiza Alquiler
        let params = {rent:{slot:slot}}
        return ApiService().post(`bikes/rent`, params);
    },
    postUpdateRent(slot) { //Finalizar Alquiler
        console.log("entre postUPDATE-Rent - RentService")
        console.log(slot) 
    
        let params = {rent:{slot:slot}}
        //  let params = {}
        return ApiService().post(`bikes/rentUpdate`, params);
    },

}
export default RentService;