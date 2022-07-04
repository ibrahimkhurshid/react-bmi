import React from "react";
import AreaChart from "./AreaChart";
import Button from "./Button/Button";
import BmiInputs from "./BmiInputs/BmiInputs";
import TextDisplay from "./TextDisplay/TextDisplay";
import "./Bmi.css";


class Bmi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyMassIndex: 0,
      height: 0,
      weight: 0,
    };
  }


  setInputVal = (e)=>{
    if(e.target.name=='height'){
      this.setState({height:e.target.value})
    }
    else if(e.target.name=='weight'){
      this.setState({weight:e.target.value})
    }
  }


  calculateBmi = () => {
    const { weight, height } = this.state;
    if (weight == 0 || height == 0) {
      alert("Values can't be zero");
    } else {
      let bmi = weight / (height / 100) ** 2;
      this.setState({ bodyMassIndex: bmi });
    }
  };

  render(props) {
    const{appName,styleClass}=this.props;
    return (
      <div className={styleClass}>

        <TextDisplay 
        textValue={appName} 
        styleClass="app-name"
        />

        <BmiInputs styleClass="bmi-inputs" onValChange={this.setInputVal}/>

        <Button
        buttonText="Calculate BMI"
        styleClass="calculate-btn"
        onClick={this.calculateBmi}
        />
        
        <TextDisplay textValue={
        <>{this.state.bodyMassIndex.toFixed(3)}
        <small>Kg/m<sup>2</sup></small></>
        } 
        styleClass="bmi-result"
        />

        <div className="chart-container">
          <AreaChart 
          labelsVal = {["January","February","March","April"]}
          dataVal = {[15,16,18,this.state.bodyMassIndex]}
          />
        </div>
      </div>
    );
  }
}

export default Bmi;
