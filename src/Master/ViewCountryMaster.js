import React, { Component } from 'react';
import AllServices from 'services/AllServices';

const services = new AllServices();

class ViewCountryMaster extends Component {

    componentWillUnmount() {
        console.log("Component will mounting");
        this.GetCountryList();
    }

    GetCountryList() {
        services.ViewCountryList().then((data) => {
            console.log(data)
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                View Details
            </div>
        );
    }
}

export default ViewCountryMaster;
