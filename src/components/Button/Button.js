import React from "react";
import './Button.css';

class Button extends React.Component{
    render(props){
        const {buttonText, styleClass, onClick}=this.props
        return(
            <button onClick={onClick} className={styleClass}>
                {buttonText}
            </button>
        )
    }
}

export default Button;