import React from "react";
import { Bar } from "react-chartjs-2";

import './Bmi.css'

const data= {
  labels:[
      "Red", "Blue", "Yellow"
  ]
}

class Bmi extends React.Component{
  constructor(props){
    super(props);
    this.state={
      bodyMassIndex:0
    }
    this.height = 0;
    this.weight = 0;
  }
  setHeight = (event)=>{
    this.height = event.target.value;
    console.log(`Height: ${event.target.value}`)
  }
  setWeight = (event)=>{
    this.weight = event.target.value;
    console.log(`Weight: ${event.target.value}`)
  }


  // ---------BMI = kg/m2------
  calculateBmi = (event)=>{
    if (this.weight==0 || this.height==0){
      alert('Values can\'t be zero')
    }
    else{
      let bmi = this.weight/((this.height/100)**2)
      this.setState({bodyMassIndex:bmi})
    }
  }

  
  render(){
      return(
          // This div contains the whole BMI component
          <div className="container">
            <div className="app-name">
              <h1>BMI Tracker</h1>
            </div>
            <div className="bmi-inputs">
              
              <div className="left-input">
                <label>Weight (in Kg)</label>
                <input onChange={this.setWeight} type={'number'} placeholder={'50'}></input>
              </div>
              <div className="right-input">
                <label>Height (in cm)</label>
                <input onChange={this.setHeight} type={'number'} placeholder={'176'}></input>
              </div>

            </div>

            {/* This button submits the inputs */}
            <button onClick={this.calculateBmi} className="calculate-btn">Calculate BMI</button>
            
            {/* This button submits the inputs */}
            <div className={'bmi-result'}>
              <h1>{`${this.state.bodyMassIndex.toPrecision(4)}`} <small>Kg/m<sup>2</sup></small></h1>
            </div>

            {/* This div is for react-charts */}
            <div className="chart">
              {/* <Bar
                
                height={100}
                width={200}
                options={{
                  maintainAspectRatio: false
                }}
              /> */}
            </div>
          </div>
      );
  }
}

export default Bmi;