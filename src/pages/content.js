import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from  'axios';
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {ButtonGroup, Button,TextField } from '@mui/material';

// import styles from "../assets/App.module.css";

const Content = () =>{
    const [title,setTitle]= useState(inutialState:'')
    const [content,setContent]= useState(inutialState:'')
    
    const navigate = useNavigate();
    const styles = {
        "content" :{
            width:"1200px",
            margin:"0 auto"
        },
        
        "inputWrap" :{
            marginTop:"15px" ,
            border:"1px solid blue",
            borderRadius : "5px",
        },
        
        "submitBtn" :{
            color:"#fff",
            borderRadius : "30px",
            background:"linear-gradient(to right, #205ccd, #4f1cb4)",
            width:"200px",
            height:"45px",
            margin:"25px auto 0",
            display:"block",
        },
        "field":{
            " .css-v4u5dn-MuiInputBase-root-MuiInput-root:before":{
                borderBottom:"0 !important",
                display:"none"
            },
            // border:"2px solid #f00",
            width:"100%",
            display:"block"
        }
      };
    const [title,setTitle] = ""
    const [contents, setContents] = ""
    
    const btnTxtArr = ['반도체', '영업이익', '상한가', '자동차'];
    const btnBox= btnTxtArr.map((btnTxt)=>{
        return (
            <Button variant="outlined">{btnTxt}</Button>
        )
    }) 
    return (
        <div>
              <Header/>
                <div style={styles.content}>
                    <ButtonGroup>
                        {btnBox}
                    </ButtonGroup>
                    <div className="inputWrapper" style={styles.inputWrap}>
                        <TextField id="title" style={styles.field} variant="standard"/>
                        <TextField id="txt_content"style={styles.field} variant="standard"/>
                    </div>
                    <Button variant="contained" style={styles.submitBtn} onClick={() => { navigate('/'); }}>결과분석하기</Button>
                </div>
            <Footer/>
        </div>
    )
}
export default Content