import React, { useState } from 'react';
import ValueEmotions from './ValueEmotions';
import '../stylesheets/App.scss';
import PrintGif from './PrintGif';

function App() {
  const [gif, setGif] = useState(
    'https://media.giphy.com/media/l46Cpz0A0dB1jMxG0/giphy.gif'
  );
  const [name, setName] = useState('');

  const searchGif = (value) => {
    fetch(
      `http://api.giphy.com/v1/gifs/random?tag=emotion-${value}&api_key=NXLgbPLwgfyyYI5r0KBWyB2KB3UA4Zfd`
    )
      .then((response) => response.json())
      .then((data) => {
        setGif(data.data.image_url);
      });
  };

  const handleName = (ev) => {
    const nameUser = ev.currentTarget.value;
    setName(nameUser);
  };

  const handleEmotions = (ev) => {
    const emotionsValue = ev.currentTarget.value;
    searchGif(emotionsValue);
  };

  return (
    <div className='App'>
      <PrintGif gifs={gif} name={name} />
      <ValueEmotions emotions={handleEmotions} nameUser={handleName} />
    </div>
  );
}

export default App;
