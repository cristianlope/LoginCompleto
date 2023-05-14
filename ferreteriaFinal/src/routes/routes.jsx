import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Home } from "../components/Home/Home";
import { Signup } from "../components/Signup/Signup";
import { ProductList } from "../components/Produc/ProductList"
import { Header } from "../components/Produc/Header"
import { Carrito } from "../components/Produc/Carrito"
import { auth } from "..//firebase";



import React, { useState, useEffect } from 'react';


export function MyRoutes() {
    const [userName,setUserName] =useState([])
    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
            setUserName(user.displayName)
        }else setUserName("")
      })  
    },[])
    return(
        <Router>
            <Routes>       
                <Route exact path="/" element={<Home name={userName}/>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/ProductList" element={<ProductList />} />
                <Route exact path="/Header" element={<Header />} />
                <Route exact path="/Carrito" element={<Carrito />} />
                
                

                
                
            </Routes>
        </Router>
    );

};