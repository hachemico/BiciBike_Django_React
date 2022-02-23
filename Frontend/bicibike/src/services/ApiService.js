import axios from 'axios'

export default() => {
  const axiosInstance = axios.create({
    baseURL: "http://0.0.0.0:8000/api"
  })

  const token = window.sessionStorage.getItem('token')
  if (token ) {
    axiosInstance.defaults.headers.common['Authorization'] = `Token ${token}`
  } 

  axios.interceptors.response.use(function (response) {
    return response;

  }, function (error) {
  
    
    return Promise.reject(error);
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log("VALOR ERROR RECIBIDO");
      console.log(error);
      console.log(error.message);
      
      if (error.response.status === 401) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }
      return Promise.reject(error) 
    }
  )

  return axiosInstance
}