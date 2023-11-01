import { Card } from '@mui/material';
import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import '../assets/scss/_themes-vars.module.scss'
import Demoservices from '../services/demoservices';

const services = new Demoservices();

class Demo extends Component {

    constructor() {
        super();
        this.state = {
            UserName: '',
            Age: ''
        }
    }
    handlechange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value }, () => {
            console.log(this.state)
        })
    }
    handleclick = () => {
        if (this.state.UserName === '' || this.state.Age === '') {
            console.log("Enter All Fields");
            return;
        }
        console.log("Data", this.state);
        const data = {
            name: this.state.UserName,
            age: this.state.Age,
        }
        services.createrc(data).then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error)
        })
    }



    render() {
        let state = this.state;
        return (
            <>
                <Card>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 2 },
                        }}

                        autoComplete="off" className='box'
                    >

                        <div>
                            <div className='flex-cnt'>
                                <TextField value={state.UserName} onChange={this.handlechange} fullWidth label="UserName" name='UserName' size='small' variant="standard" />
                            </div>
                            <div className='flex-cnt'>
                                <TextField value={state.Age} onChange={this.handlechange} fullWidth label="Age" name='Age' size='small' variant="standard" />
                            </div>
                            {/* <TextField
                                label="First Name"
                                variant="standard"
                                value={state.UserName} onChange={this.handlechange}
                            />
                            <TextField
                               label="Middle Name"
                               variant="standard"
                               value={state.Age} onChange={this.handlechange}
                            />
                            <TextField
                                label="Last Name"
                                variant="standard"
                            />
                            <TextField
                               id="standard-required"
                               label="Email Id"
                               variant="standard"
                            />
                            <TextField
                               id="standard-required"
                               label="Mobile No"
                               variant="standard"
                            />
                            <TextField
                                id="standard-required"
                                label="Address"
                                variant="standard"
                            />
                            <TextField
                              id="standard-required"
                              label="Pin"
                              variant="standard"
                            /> */}
                        </div>
                        <div>
                            <div className='flex-btn'>
                                <Button variant="contained" color="primary" onClick={this.handleclick} >
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

export default Demo;
