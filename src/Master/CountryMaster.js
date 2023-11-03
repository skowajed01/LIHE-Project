import { Card } from '@mui/material';
import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import '../assets/scss/_themes-vars.module.scss'

import AllServices from 'services/AllServices';

const services = new AllServices();

class CountryMaster extends Component {
    
    constructor() {
        super();
        this.state = {
            countryname: '',
            currency: '',
            nationalityname: '',
            callingcode: ''
        }
        this.hdclick = this.hdclick.bind(this);  
    }
    handlechange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value }, () => {
            console.log(this.state)
        })
    }
    
    hdclick = () => {
        if (this.state.countryname === '' || this.state.currency === '' || this.state.nationalityname === '' || this.state.callingcode === '') {
            console.log("Enter All Fields");
            Swal.fire({  
                icon: "error",
                title: 'Something Went Wrong',  
                type: 'error',  
                text: 'Please Check Again',  
              }).then((result) => {
                window.location.reload();
              });
            return;
        }
        console.log("Data", this.state);
        const data = {
            countryname: this.state.countryname,
            currency: this.state.currency,
            nationalityname: this.state.nationalityname,
            callingcode: this.state.callingcode,
        }
        services.PostCountrymast(data).then((data) => {
            console.log(data);
            Swal.fire({  
                icon: "success",
                title: 'Country Added Successfully',  
                type: 'success',  
                text: 'Click Ok To Go The Page',  
              }).then((result) => {
                window.location.reload();
              });
        }).catch((error) => {
            console.log(error);
            Swal.fire({  
                title: 'Wrong',  
                type: 'error',  
                text: 'Something Went Wrong',  
              }).then((result) => {
                window.location.reload();
              });
        })
    }

    render() {
        let state = this.state;
        return (
            <>
                <div>
                    <a href='../Master/ViewCountryMaster' className='vwlist'>View List</a>
                </div>
                <Card>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 2, width: '56ch' },
                        }}
                        className='box'>

                        <div className='flex-cnt'>

                            <TextField value={state.countryname} onChange={this.handlechange} label="Country Name" name='countryname' size='small' variant="standard" />

                            <TextField value={state.currency} onChange={this.handlechange} label="Currency" name='currency' size='small' variant="standard" />

                            <TextField value={state.nationalityname} onChange={this.handlechange} label="Nationality" name='nationalityname' size='small' variant="standard" />

                            <TextField value={state.callingcode} onChange={this.handlechange} label="Calling Code" name='callingcode' size='small' variant="standard" />

                        </div>
                        <div>
                            <div className='flex-btn'>
                                <Button variant="contained" color="success" onClick={this.hdclick} >
                                    Submit
                                </Button>
                              
                            </div>
                        </div>
                    </Box>
                </Card>
            </>
        );
    }
}

export default CountryMaster;
