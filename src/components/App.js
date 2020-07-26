import React from 'react';
import ValueEmotions from './ValueEmotions'
import '../stylesheets/App.scss';

function App() {


  let gif;

  const searchGif = (value) => {
    fetch(
      `http://api.giphy.com/v1/gifs/random?tag=${value}&api_key=NXLgbPLwgfyyYI5r0KBWyB2KB3UA4Zfd`
    )
      .then((response) => response.json())
      .then((data) => {
        gif = data.data.image_original_url;
        console.log(gif);
      });
  };

  const handleEmotions = (ev) => {
    const emotionsValue = ev.currentTarget.value
    searchGif(emotionsValue)
    console.log(emotionsValue);
} 

  return (
    <div className='App'>
      <ValueEmotions emotions={handleEmotions}/>
    </div>
  );
}


export default App;
