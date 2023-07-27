import { Bar } from '@ant-design/plots';
const BarChart = (props)=>{
    const result = props.cd   
    const data = result;
        const config = {
          data,
          xField: 'score',
          yField: 'stock',
          seriesField: 'stock',
          minBarWidth: 20,
          maxBarWidth: 20,
         
          legend: {
            position: 'left',
          },
          
        };
return <Bar {...config} />;
    
}
export default BarChart