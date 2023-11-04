const Axios = require('axios').default

export default class Axiosservices{

    post(url,data,Header){
        return Axios.post(url,data,Header);
    }

    get(url, IsRequired=false, Header){
        return Axios.get(url,IsRequired&&Header);
    }
}


