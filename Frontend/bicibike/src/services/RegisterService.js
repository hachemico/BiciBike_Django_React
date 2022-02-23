import ApiService from './ApiService'

const RegisterService = {
    
    postRegister(username,email,password) {
        const userData = {'user':{'username':username,'email':email,'password':password}}
     
        return ApiService().post(`users/`, userData); 
      }

}
export default RegisterService;