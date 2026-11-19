import React from 'react';
import '../ex1/FancyBorder.css';

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

export default FancyBorder;