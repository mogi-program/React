import React from "react";
import './Card.css';

function Card(props) {
    const {title, backgroundColor, children, image} = props;

    return (
        <div className="Card" style={{backgroundColor: backgroundColor}}>
            {title && <h1>{title}</h1>}
            {children}
            {image && <img src={image} />}
        </div>
    )
}

export default Card;