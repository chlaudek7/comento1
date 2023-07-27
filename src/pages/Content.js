import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from  'axios';
import React, {useState, useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {ButtonGroup, Button,TextField } from '@mui/material';

import AppStyles from "../assets/App.module.css";

const Content = () =>{
    const navigate = useNavigate();
   
    const styles = {
     
        "inputWrap" :{
            marginTop:"15px" ,
            border:"2px solid blue",
            borderRadius : "10px",
            padding:"20px",
            backgroundColor:"#f7f9fb"
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
            
            // border:"2px solid #f00",
            width:"100%",
            display:"block"
        },
        "fieldTitle":{
            width:"100%",
            height:"40px",
            borderBottom:"1px solid #aaa",
            "> .MuiFormControl-root": {
                border:"0px",
            }
        },

        "fieldContent":{
            paddingTop:"20px"
        }
      };
    const [title,setTitle]= useState("")
    const [contents,setContents]= useState("")
    const [btnNumber,setBtnNumber]= useState("")
    const [keywords,setKeword]= useState("")
    const getData=(keyword,idx)=>{
        axios.get(`http://localhost:8080/news/${keyword}`).then(response=>{ 
            setTitle(response.data.title)
            setContents(response.data.content)
            setBtnNumber(idx)
            setKeword(keyword)
            console.log(response)
        }).catch(error=>console.log(error))

    }
    useEffect(()=>{
        setBtnNumber("")
        // setKeword("반도체")
        getData("반도체",0)
    },[])

 
    // https://d9390710-b9c8-490b-8005-e11d0772b58c.mock.pstmn.io/news?keyword
    
    const btnTxtArr = ['반도체', '영업이익', '상한가', '자동차'];
    const btnBox= btnTxtArr.map((btnTxt,idx)=>{
        return (
            <Button value={idx} key={idx} className={(idx==btnNumber?"on":"")} variant="outlined"onClick={() => getData(btnTxt,idx)}
                sx={{
                    "&.on" : {
                        backgroundColor: "#205acc",
                        color:"#fff"
                    }
                }}
                >{btnTxt}
            </Button>
        )
    }) 
    return (
        <div>
              <Header/>
                <div className={AppStyles.content}>
                    <ButtonGroup>
                        {btnBox}
                    </ButtonGroup>
                    <div className="inputWrapper" style={styles.inputWrap}>
                        <TextField id="outlined-basic" variant="outlined" fullWidth  value={title}
                            sx={{
                                // width:"100%",
                                borderBottom:"1px solid #aaa",
                                "& .MuiOutlinedInput-root" : {
                                   "& fieldset" : {
                                        border:0
                                   }
                                },
                                "& .MuiOutlinedInput-root.Mui-focused" : {
                                   "& fieldset" : {
                                        border:0
                                   }
                                },
                              }}
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            multiline
                            fullWidth
                            value={contents}
                            sx ={{
                                wordBreak:"keep-all",
                                "& .MuiOutlinedInput-root" : {
                                   "& fieldset" : {
                                        border:0
                                   }
                                },
                                "& .MuiOutlinedInput-root.Mui-focused" : {
                                   "& fieldset" : {
                                        border:0
                                   }
                                },
                            }}
                        />
                    </div>
                    {/* <Link to={`/result/${keywords}`}><Button variant="contained" style={styles.submitBtn}>결과보기</Button></Link> */}
                    <Button variant="contained" style={styles.submitBtn}
                        onClick={
                           ()=>  navigate('/result',{
                                    state : {
                                        keyword : `${keywords}`
                                    }
                                })
                        }
                    >
                        결과보기
                    </Button>
                </div>
            <Footer/>
        </div>
    )
}
export default Content