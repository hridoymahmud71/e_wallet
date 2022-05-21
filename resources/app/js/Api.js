import axios from "axios";
import * as Constants from "./utils/Constants";
import Helper from "./utils/Helper";

//rapidapi.com/blog/axios-react-api-tutorial/

const api = axios.create({
    baseURL: `${Helper.api_path()}`,
    headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Helper.getFromLocalStorage(
            Constants.LOCAL_STORAGE_KEYS.USER_TOKEN
        )}`,
    },
});

api.interceptors.request.use(
    function (config) {
        // Do something before request is sent

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data

        if (response.data.status === 403 || response.data.status === 401) {
            localStorage.removeItem(Constants.LOCAL_STORAGE_KEYS.USER_TOKEN);
            MYAPP.navigate("/login");
            
            // or we can reload -- iopen the code below and comment out navigate

            // setTimeout(() => {
            //     window.location.href = window.app_settings.app_url;
            // }, 500);
        }

        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export  { api };
