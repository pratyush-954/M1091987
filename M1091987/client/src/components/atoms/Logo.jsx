import React from "react";
import { Avatar } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const Fbicon = ()=>{
    return(
        <Avatar><FacebookIcon></FacebookIcon></Avatar>
    );
}

const Googleicon = ()=>{
    return(
        <Avatar><GoogleIcon></GoogleIcon></Avatar>
    );
}

const Accounticon=()=>{
    return(
        <Avatar><AccountCircleIcon></AccountCircleIcon></Avatar>
    );
}

const Lockicon=()=>{
    return(
        <Avatar><LockIcon></LockIcon></Avatar>
    );
}

export {Fbicon,Googleicon,Accounticon,Lockicon};