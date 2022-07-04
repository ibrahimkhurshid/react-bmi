import React from "react";
import './TextDisplay.css';


class TextDisplay extends React.Component{
    render(props){
        const{textValue,styleClass}=this.props;
        return(
            <div className={styleClass}>
                <h1>{textValue}</h1>
            </div>
        )
    }
}

export default TextDisplay;
