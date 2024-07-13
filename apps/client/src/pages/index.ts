import React from "react";
const Home = React.lazy(()=> import ("./Home/Home"));
const Create = React.lazy(()=> import ("./Create/Create"));
const Card = React.lazy(()=> import ("./Card/Card"));
const Login = React.lazy(()=> import ("./Login/Login"));
const Signup = React.lazy(()=> import('./Signup/Signup'));
const ViewCard = React.lazy(()=> import('./ViewCard/ViewCard'))

export {
    Home,
    Create,
    Card,
    Login,
    Signup,
    ViewCard
}