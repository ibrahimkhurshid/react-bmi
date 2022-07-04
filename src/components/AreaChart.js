import React from 'react';

import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(...registerables);


class AreaChart extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: this.props.newVal
        }
    }
    
    render(props) {
      const{labelsVal,dataVal}=this.props;
    return (
        <Line
          data={{
            labels: labelsVal,
            datasets: [
              {
                label: `Body Mass Index`,
                fill:true,
                lineTension:0.4,
                borderWidth: 2,
                borderColor: '#542ea5',
                backgroundColor: 'rgba(205, 197, 255, 0.5)',
                data: dataVal                 
              }
          ]}}
          
          options={
          {
            title:{
              display:true,
              text:`Bmi per month`,
              fontSize:20,
            },
            legend:{
              display:true,
              position:'right',
            }
          }}
        />
    );
  }
}

export default AreaChart;