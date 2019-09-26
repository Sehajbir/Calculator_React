import React from 'react';
import './button.css';

const isOperator = val =>{
    return !isNaN(val);
}

const Button = props => (
    <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`} onClick = {() => props.handle(props.children)} >
        {props.children}
    </div>
)


export default Button;