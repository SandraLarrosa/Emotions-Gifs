import React from 'react';


const PrintGif = props => {

    return (
        <div id="box_hello" className="boxcontent">
            <h1 id="hello" className="title">HELLO!!</h1>
            <img id="gif_hello" className="gif" src={`${props.gifs}`} alt="gif"></img>
        </div>
    );
};

export default PrintGif;