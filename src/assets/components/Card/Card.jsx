import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='film-card'>
            <img src={props.image} alt={props.name} />
            <h3 title={props.name}>{props.name}</h3>
            <p>{props.type}</p>
        </div>
    )
}

export default Card 