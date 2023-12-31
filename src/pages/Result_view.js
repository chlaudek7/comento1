
import Footer from "./components/Footer";
import Header from "./components/Header";
import Setence from "./Setence";
import Chart from "./Chart";
import List from "./List";
import {useLocation } from 'react-router-dom'
import axios from  'axios';
import React, {useState, useEffect} from 'react';
import AppStyles from "../assets/App.module.css";
import { getStockApi } from "../apis/news_apis";

const Result_view = () =>{
    const location = useLocation();
    const getKeyword = location.state.keyword;
    const [pieArr , setPieArr] = useState([])
    const [result , setResult] = useState([])
    const getData=()=>{
        getStockApi(getKeyword).then(res =>
            {
                setPieArr(res.data.answer)
                setResult(res.data.sentence)
            }
        )
       

    }
    useEffect(()=>{
        getData()
    },[])

    return (
        <div>
            <Header/>
           
            <div style={{backgroundColor: 'rgb(247, 249, 251)'}} >
                <div >
                    <div className={AppStyles.result_container}>
                        <p className={AppStyles.rc_title}>분석결과</p>
    
                        <div className={AppStyles.result_box}>
                            {<Chart pieArr={pieArr}/>}
                        </div>
    
                        
                        <div className={AppStyles.result_box}>
                            {<List result={result} keywords={getKeyword}/>}
                        </div>
                        <p className={AppStyles.main_tit}>Setence 별 시각화</p>    
                        <div >
                            {<Setence result={result} keywords={getKeyword}/>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Result_view