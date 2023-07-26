import axios from  'axios';
import AppStyles from "../assets/App.module.css";

const List = (props)=>{
    const keyword = props.keywords   
    const result = props.result   

    const listBg = (per)=>{
        switch(keyword){
            case "반도체":
                return `rgba(29, 91, 121,${per}%)`
            case "영업이익":
                return `rgba(70, 139, 151,${per}%)`
            case "상한가":
                return `rgba(239, 98, 98,${per}%)`
            case "자동차":
                return `rgba(152, 33, 118,${per}%)`
        }
    }
    let arrCn = []

    return (
        <ul>
            {
                result.map((dSentence,idx)=>{
        
                    arrCn = []
                    dSentence.condition.map((dCondition)=>{
                        arrCn = arrCn.concat(dCondition.score)                       
                    })
                    let aa  =(dSentence.condition.findIndex(i => i.score == Math.max(...arrCn)) == -1 || arrCn.length == 0)? "no data" : dSentence.condition.findIndex(i => i.score == Math.max(...arrCn))
                    let per = (aa == "no data")? 0 : (dSentence.condition[aa].score * 100).toFixed()
                    
                    return (
                        
                        <li key={idx} style={{backgroundColor:listBg(per), color:`${(per>50)? "#fff":"#000"}`}} className={AppStyles.result_list_li}>
                           <p> {dSentence.sentence}</p>
                            
                            
                            
                               {
                                <div>
                                    <span className={AppStyles.stockName}>{(per>0)? dSentence.condition[aa].stock :""}</span>
                                    <span>{per}%</span>
                                </div>
                               }
                          
                        </li>
                    )
                })
            }
        </ul>
    )
 
}
export default List