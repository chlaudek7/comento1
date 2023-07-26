import React from "react";
import { Pie } from '@ant-design/plots';
const Chart = (props)=>{
    const data = props.pieArr
    const config = {
        appendPadding: 10,
        data,
        angleField: 'score',
        colorField: 'stock',
        radius: 0.9,
        color: [ "#D14D72","#FFABAB","#FCC8D1","#FEF2F4"],
        label: {
          type: 'inner',
          offset: '-30%',
          content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
          style: {
            fontSize: 14,
            textAlign: 'center',
          },
        },
       
        interactions: [
          {
            type: 'element-active',
          },
        ],
      };
      return <Pie {...config} />;
    // console.log(data);
    // return console.log(props.pieArr)
}
export default Chart