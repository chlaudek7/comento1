
import Footer from "./components/Footer";
import Header from "./components/Header";
import {useParams } from 'react-router-dom'
import axios from  'axios';
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {ButtonGroup, Button,TextField } from '@mui/material';
const Result_view = () =>{
    const {getKeyword} = useParams();
    const getData=()=>{
        
        axios.get(`http://localhost:5000/stock/${getKeyword}`).then(response=>{
            console.log(response.data)
            
            
            // console.log(btnColor)
        }).catch(error=>console.log(error))

    }
    useEffect(()=>{
        console.log(getKeyword)
        getData()
        
    },[])

    return (
        <div>
            <Header/>
                 <div> </div>
            <Footer/>
        </div>
    )
}
export default Result_view