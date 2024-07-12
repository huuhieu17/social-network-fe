import  Axios from "axios";

function authRequestInterceptor(config) {
    if (config.headers) {
      config.headers.Accept = 'application/json';
    }
  
    // config.withCredentials = true;
    return config;
}
export const api = Axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL
})

api.interceptors.request.use(authRequestInterceptor)

api.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    },
  );