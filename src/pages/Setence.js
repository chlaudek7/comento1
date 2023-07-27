import AppStyles from "../assets/App.module.css";
import BarChart from "./Bar"
const Setence = (props)=>{
    const result = props.result   
    // console.log(result);
   
    return (
      <ul>
        
        {
            
            result.map((st,idx)=>(
                // console.log(st.condition.length)
                (st.condition.length>0)?

                <li key={idx}  className={AppStyles.result_box}>
                    <div className={AppStyles.bar_list}>
                        <p>{st.sentence}</p>
                        <p  className={AppStyles.mid_title}>종목별 점수</p>
                        <div className={AppStyles.bar_chart}>{ <BarChart cd={st.condition}/>}</div>
                    </div>
                </li>
                :
                <li key={idx}  className={AppStyles.result_box}>데이터 없음</li>
            ))
           
        }
      </ul>
    )
 
}
export default Setence