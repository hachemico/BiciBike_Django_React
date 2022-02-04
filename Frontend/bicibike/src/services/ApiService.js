import axios from 'axios'

export default() => {
  const axiosInstance = axios.create({
    baseURL: "http://0.0.0.0:8000/api"
  })

  const token = localStorage.getItem('token')
  if (token ) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    console.log("Token enviado");
    console.log(token);

  } 

  axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("AAAAAAA");
    return response;
  }, function (error) {
    console.log("BBBBBBBB");
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

//   axiosInstance.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       console.log("VALOR ERROR RECIBIDO");
//       console.log(error);
//       console.log(error.message);
      
//       if (error.response.status === 401) {
//         localStorage.removeItem('token')
//         localStorage.removeItem('user')
//         // location.reload()
      
//       }
//       return Promise.reject(error) 
//     }
//   )

  return axiosInstance
}