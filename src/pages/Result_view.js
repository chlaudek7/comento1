
import Footer from "./components/Footer";
import Header from "./components/Header";
import {useParams } from 'react-router-dom'
import axios from  'axios';
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {ButtonGroup, Button,TextField } from '@mui/material';
import AppStyles from "../assets/App.module.css";
import { Empty } from "antd";

const Result_view = () =>{
    const {getKeyword} = useParams();
    const [result , setResult] = useState([])
    const [list , setList] = useState([])
    const getData=()=>{
        
        axios.get(`http://localhost:5000/stock/${getKeyword}`).then(response=>{
            console.log(response.data.sentence)
            setResult(response.data.sentence)
            
        }).catch(error=>console.log(error))

    }
    useEffect(()=>{
        getData()
        
        
    },[])
    let arrCn = []
    const resultList=  result.map((dSentence,idx)=>{
        
        arrCn = []
        dSentence.condition.map((dCondition)=>{
            arrCn = arrCn.concat(dCondition.score)                       
        })
        let aa  =(dSentence.condition.findIndex(i => i.score == Math.max(...arrCn)) == -1)? "no data" : dSentence.condition.findIndex(i => i.score == Math.max(...arrCn))
        let per = (aa == "no data")? 0 : (dSentence.condition[aa].score * 100).toFixed()
        return (
            
            <li key={idx} style={{backgroundColor:`rgba(32, 92, 205, ${per}%)`, color:`${(per>50)? "#fff":"#000"}`}} className={AppStyles.result_list_li}>
               <p> {dSentence.sentence}</p>
                
                
                {(arrCn.length>0)?

                    <div>
                        <span className={AppStyles.stockName}>{dSentence.condition[aa].stock}</span>
                        <span>{per}%</span>
                    </div>
                    :
                    ""
                }
              
            </li>
        )
    })

    return (
        <div>
            <Header/>
            <div style={{backgroundColor: 'rgb(247, 249, 251)'}} >
                <div >
                    <div className={AppStyles.result_container}>
                        <p className={AppStyles.rc_title}>분석결과</p>
    
                        <div className={AppStyles.result_box}>
                                {/* 차트 영역*/}
                        </div>
    
                        <div className={AppStyles.result_box}>
                            <ul>
                                {resultList}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Result_view