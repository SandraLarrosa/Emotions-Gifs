import React from 'react';

const ValueEmotions = (props) => {

  const emotionsValue = (ev) => {
    props.emotions(ev);
  };

  return (
    <div>
      <h3 className='question'>What is your name?</h3>
      <label htmlFor='inputName'>
        <input type='text' id='inputName' className='name' name='user_name'></input>
      </label>
      <h3 id='title_select' className='question'>
        How do you feel today?
      </h3>
      <label htmlFor='select'>
        <select
          name='select'
          id='select'
          className='select'
          onChange={emotionsValue}
        >
          <option value='happy' className='option'>
            Happy
          </option>
          <option value='sad' className='option'>
            Sad
          </option>
          <option value='angry' className='option'>
            Angry
          </option>
          <option value='in love' className='option'>
            In Love
          </option>
          <option value='tired' className='option'>
            Tired
          </option>
          <option value='excited' className='option'>
            Excited
          </option>
          <option value='negative' className='option'>
            Negative
          </option>
          <option value='positive' className='option'>
            Positive
          </option>
        </select>
      </label>
    </div>
  );
};

export default ValueEmotions;
