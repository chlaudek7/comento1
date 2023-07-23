import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from  'axios';
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {ButtonGroup, Button,TextField } from '@mui/material';

// import styles from "../assets/App.module.css";

const Content = () =>{
    const navigate = useNavigate();
    const styles = {
        "content" :{
            width:"1200px",
            margin:"0 auto"
        },
        
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
            borderBottom:"1px solid #aaa"
        },
        "fieldContent":{
            paddingTop:"20px"
        }
      };
    const titleTxt = 'SK하이닉스 주가 4% ‘뚝’…美 반도체지수 급락 후폭풍'
    const contentsTxt = '장 초반 SK하이닉스 주가가 4% 떨어지고 있다. 삼성전자 주가도 1% 넘게 빠지고 있다. 간밤 미국 뉴욕증시에서 반도체 업종 지수가 급락하면서 투자 심리가 악화한 영향으로 풀이된다. 17일 오전 10시 38분 SK하이닉스는 전 거래일 대비 3800원(4.15%) 내린 8만7700원에 거래되고 있다. 같은 시각 삼성전자역시 전날보다 1000원(1.59%) 떨어진 6만1700원에 거래 중이다.  이는 16일(현지 시각) 미국 뉴욕증시에서 경기 둔화 우려로 반도체 업종 대표지수인 필라델피아 반도체 지수가 4.26% 급락한 영향이다. 전날 미국 반도체 기업 마이크론테크놀로지는 메모리칩 공급을 축소하고, 지출 계획을 추가로 줄일 것이라고 밝혀 주가가 6.70% 하락했다. 마이크론테크놀로지는 삼성전자와 SK하이닉스에 이어 3대 종합반도체회사(IDM)로 꼽힌다. 이와 함께 전날 미국 반도체 기업 엔비디아 주가가 정규 거래에서 4.5%에서 하락했지만 시간외 거래에서 2% 넘게 올랐다. 엔비디아는 비메모리 반도체 설계만 하는 팹리스다. 장 마감 후 3분기 실적을 발표한 가운데 성장동력인 데이터센터 부문의 매출 성장세가 두드러진 영향으로 해석된다.엔비디아는 3분기 매출액이 전년대비 17% 감소한 59억3000만달러를 기록했다고 밝혔다. 이는 시장예상치 57억7000만달러를 크게 웃도는 수준이다. 게임부문 매출은 51% 급감한 반면 데이터센터부문이 31% 증가하며 매출을 방어했다. 다만 조정 주당순이익(EPS)은 0.59달러로 예상치 0.7달러에 못미쳤고 4분기 매출 목표치도 60억달러를 제시해 예상치 61억달러보다 낮았다. 채민숙 한국투자증권 연구원은 “마이크론 테크놀로지의 발표가 반도체 업황의 추가적인 악화 가능성으로 받아들여지면서 반도체 관련주 주가가 급락한 것으로 추정된다”면서도 “직접적인 감산을 하지 않는 삼성전자와 SK하이닉스는 마이크론의 감산으로 인해 자동적으로 점유율이 상승하는 긍정적인 효과 있을 것”이라고 말했다.'      
    const [title,setTitle]= useState("")
    const [contents,setContents]= useState("")
    const [btnNumber,setBtnNumber]= useState("")
    const getData=(keyword,idx)=>{
        
        axios.get(`https://d9390710-b9c8-490b-8005-e11d0772b58c.mock.pstmn.io/news?keyword=${keyword}`).then(function(response){
            // console.log(response.data)
            setTitle(response.data.title)
            setContents(response.data.content)
            setBtnNumber(idx)
            // console.log(btnColor)
        })

    }
    useEffect(()=>{
        setTitle(titleTxt)
        setContents(contentsTxt)
        setBtnNumber("")
        // getData("영업이익")
    },[])

 
    // https://d9390710-b9c8-490b-8005-e11d0772b58c.mock.pstmn.io/news?keyword
    
    const btnTxtArr = ['반도체', '영업이익', '상한가', '자동차'];
    const btnBox= btnTxtArr.map((btnTxt,idx)=>{
        return (
            <Button value={idx} className={(idx==btnNumber?"on":"")} variant="outlined"onClick={() => getData(btnTxt,idx)}
            sx={{
                "&.on" : {
                    backgroundColor: "#205acc",
                    color:"#fff"
                }
              }}
            >{btnTxt}</Button>
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
                        {/* <TextField id="title" style={styles.field} variant="standard"/> */}
                        <div style={styles.fieldTitle}>{title}</div>
                        <div style={styles.fieldContent}>{contents}</div>
                        {/* <TextField id="txt_content"style={styles.field} variant="standard"/> */}
                    </div>
                    <Button variant="contained" style={styles.submitBtn} onClick={() => { navigate('/Result/반도체'); }}>결과분석하기</Button>
                </div>
            <Footer/>
        </div>
    )
}
export default Content