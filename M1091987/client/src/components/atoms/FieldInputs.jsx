import React from 'react';
import { TextField } from '@mui/material';


const Username=()=>{
    const unamestyle = { padding: "1px auto", margin: "10px auto", align: 'center' }

    return(
        <TextField style={unamestyle} name = 'name' placeholder='Username' variant="standard" fullWidth value={user.name} onChange={handleInputs}></TextField>
    );
}

const Password=()=>{
    const unamestyle = { padding: "1px auto", margin: "10px auto", align: 'center' }

    return(
        <TextField style={unamestyle} name = 'password' placeholder='Password' variant="standard" fullWidth></TextField>
    );
}

const Repassword=()=>{
    const unamestyle = { padding: "1px auto", margin: "10px auto", align: 'center' }

    return(
        <TextField style={unamestyle} name = 'cassword' placeholder='Re-enter Password' variant="standard" fullWidth></TextField>
    );
}

const Email=()=>{
    const unamestyle = { padding: "1px auto", margin: "10px auto", align: 'center' }

    return(
        <TextField style={unamestyle} name = 'email' placeholder='Email' variant="standard" fullWidth></TextField>
    );
}

const Mobilenumber=()=>{
    const unamestyle = { padding: "1px auto", margin: "10px auto", align: 'center' }

    return(
        <TextField style={unamestyle} name = 'phone' placeholder='Mobile Number' variant="standard"  fullWidth></TextField>
    );
}

export {Username, Password, Repassword, Email, Mobilenumber};