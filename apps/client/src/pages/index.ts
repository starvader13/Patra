import React from "react";
const Home = React.lazy(()=> import ("./Home/Home"));
const Create = React.lazy(()=> import ("./Create/Create"));
const Cards = React.lazy(()=> import ("./Cards/Cards"));
const Login = React.lazy(()=> import ("./Login/Login"));
const Signup = React.lazy(()=> import('./Signup/Signup'));

export {
    Home,
    Create,
    Cards,
    Login,
    Signup
}