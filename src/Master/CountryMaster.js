import { Card } from '@mui/material';
import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
        }).catch((error) => {
            console.log(error)
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
                            '& .MuiTextField-root': { m: 2 },
                        }}
                        className='box'>

                        <div>
                            <div className='flex-cnt'>
                                <TextField value={state.countryname} onChange={this.handlechange} fullWidth label="Country Name" name='countryname' size='small' variant="standard" />
                            </div>
                            <div className='flex-cnt'>
                                <TextField value={state.currency} onChange={this.handlechange} fullWidth label="Currency" name='currency' size='small' variant="standard" />
                            </div>
                            <div className='flex-cnt'>
                                <TextField value={state.nationalityname} onChange={this.handlechange} fullWidth label="Nationality" name='nationalityname' size='small' variant="standard" />
                            </div>
                            <div className='flex-cnt'>
                                <TextField value={state.callingcode} onChange={this.handlechange} fullWidth label="Calling Code" name='callingcode' size='small' variant="standard" />
                            </div>

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
