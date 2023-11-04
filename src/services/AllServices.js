import configuration from "../configuration/configuration";
import Axios from './Axiosservices'

const axios = new Axios();
//const config = new configuration();

export default class AllServices {

    PostCountrymast(data) {
        console.log("data :", data, "Url :", configuration.PostCountrymast)
        return axios.post(configuration.PostCountrymast, data, false)
    }
    ViewCountryList(){
        console.log("Url :",configuration.ViewCountry)
        return axios.get(configuration.ViewCountry,false)
    }
}
