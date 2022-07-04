import React from "react";
import Input from "../input/Input";
import './BmiInputs.css';

class BmiInputs extends React.Component{

render(props){
    const{styleClass,onValChange}=this.props;
    return(
        <div className={styleClass}>
        <Input
        styleClass="left-input"
        onChange={onValChange}
        labelText="Weight (in Kg)"
        inputType="number"
        inputName="weight"
        inputPlaceholder="50..."
        />

        <Input
        styleClass="right-input"
        onChange={onValChange}
        labelText="Height (in cm)"
        inputType="number"
        inputName="height"
        inputPlaceholder="176..."
        />
        </div>
    )
    }
  }

export default BmiInputs;