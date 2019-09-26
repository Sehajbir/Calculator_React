import React from 'react';
import './splbutton.css';

const SplButon = (props) => (
    <div onClick = {() => props.handle(props.children)} className = 'btn'>
        {props.children}
    </div>
)

export default SplButon;