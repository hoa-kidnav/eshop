import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer } from "react-toastify";
// Component
import {Home,Contact,Login,Register,Rest} from './pages/index'
// pages
import {Header ,Footer} from './components/index'
 function App() {
  return (
    <>
  <Router>
  <ToastContainer/>
        <Header/>
        <Routes>
            <Route  path="/" element={<Home />} />  
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/rest" element={<Rest/>} />
        </Routes>
        <Footer/>
 </Router>
    </>
  ); 
}
 export default App;