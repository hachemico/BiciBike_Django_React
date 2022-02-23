import ApiService from './ApiService'

const LoginService = {
    
    postLogin(email,password) {
        
        const userData = {'user':{'email':email,'password':password}}

        return ApiService().post(`users/login/`, userData); 
      }

}
export default LoginService;