const Axios = require('axios').default

export default class Axiosservices{

    post(url,data,Header){
        return Axios.post(url,data,Header);
    }
}


