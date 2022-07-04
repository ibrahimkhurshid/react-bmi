import React from "react";
import './Input.css';

class Input extends React.Component{
    constructor(props){
        super(props);
    }
    render(props){
        const {styleClass,onChange,labelText,
            inputType,inputName,inputPlaceholder} = this.props
        return(
            <div className={styleClass}>
            <label>{labelText}</label>
            <input onChange={onChange} type={inputType}
            name = {inputName} placeholder={inputPlaceholder}></input>
          </div>
        );
    }
}

export default Input;