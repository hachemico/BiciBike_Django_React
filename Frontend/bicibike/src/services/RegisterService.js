import ApiService from './ApiService'

const RegisterService = {
    
    postRegister(username,email,password) {
        console.log("entre post Register.")
        console.log(username)
        console.log(email)
        console.log(password)
        const userData = {'user':{'username':username,'email':email,'password':password}}
        console.log(userData)
        // const userData = {'user':{'username':'hacheseaasd','email':'hachesea@gmail.com','password':'password'}}
        return ApiService().post(`users/`, userData); 
      }

}
export default RegisterService;