import React from 'react';
import '../stylesheets/ValueEmotions.scss'

const ValueEmotions = (props) => {
  const emotionsValue = (ev) => {
    props.emotions(ev);
  };

  const nameValue = (ev) => {
    props.nameUser(ev);
  };

  return (
    <div className='questions'>
      <h3 className='questions__title'>Write your name</h3>
      <label htmlFor='inputName'>
        <input
          type='text'
          id='inputName'
          className='questions__inputName'
          name='user_name'
          placeholder = 'Name'
          onKeyUp={nameValue}
        ></input>
      </label>
      <h3 className='questions__title'>
        How do you feel today?
      </h3>
      <label htmlFor='select'>
        <select
          name='select'
          id='select'
          className='questions__select'
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
