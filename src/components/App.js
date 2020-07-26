import React, { useState } from 'react';
import ValueEmotions from './ValueEmotions'
import '../stylesheets/App.scss';
import PrintGif from './PrintGif';

function App() {

  const [gif, setGif] = useState('')


  const searchGif = (value) => {
    fetch(
      `http://api.giphy.com/v1/gifs/random?tag=emotion-${value}&api_key=NXLgbPLwgfyyYI5r0KBWyB2KB3UA4Zfd`
    )
      .then((response) => response.json())
      .then((data) => {
        setGif(data.data.image_url)
      });
  };


  const handleEmotions = (ev) => {
    const emotionsValue = ev.currentTarget.value
    searchGif(emotionsValue)
} 

  return (
    <div className='App'>
      <ValueEmotions emotions={handleEmotions} />
      <PrintGif gifs={gif}/>
    </div>
  );
}


export default App;
