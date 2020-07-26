import React from 'react';
import '../stylesheets/PrintGif.scss'


const PrintGif = props => {

    return (
        <div className="welcome">
            <h1 className="welcome__title">Hello, {props.name || 'What is your name?'}</h1>
            <img className="welcome__gif" src={`${props.gifs}`} alt="gif"></img>
        </div>
    );
};

export default PrintGif;