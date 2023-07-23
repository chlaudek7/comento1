
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Link } from 'react-router-dom'
import axios from  'axios';
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {ButtonGroup, Button,TextField } from '@mui/material';
const Result_view = () =>{

    const [results,setResult]= useState("")
    const getData=(keyword)=>{
        
        axios.get(`https://d9390710-b9c8-490b-8005-e11d0772b58c.mock.pstmn.io//tock/news?keyword=${keyword}`).then(function(response){
            console.log(response.data)
            
            
            // console.log(btnColor)
        }).catch(error=>console.log(error))

    }
    useEffect(()=>{
        setResult("")
        getData("반도체")
        
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