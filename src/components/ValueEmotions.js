import React from 'react';

const ValueEmotions = (props) => {
  const emotionsValue = (ev) => {
    props.emotions(ev);
  };

  const nameValue = (ev) => {
    props.nameUser(ev);
  };

  return (
    <div>
      <h3 className='question'>What is your name?</h3>
      <label htmlFor='inputName'>
        <input
          type='text'
          id='inputName'
          className='name'
          name='user_name'
          onKeyUp={nameValue}
        ></input>
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
          <option value='Happy' className='option'>
            Happy
          </option>
          <option value='Sad' className='option'>
            Sad
          </option>
          <option value='Angry' className='option'>
            Angry
          </option>
          <option value='In Love' className='option'>
            In Love
          </option>
          <option value='Tired' className='option'>
            Tired
          </option>
          <option value='Excited' className='option'>
            Excited
          </option>
          <option value='Negative' className='option'>
            Negative
          </option>
          <option value='Positive' className='option'>
            Positive
          </option>
        </select>
      </label>
    </div>
  );
};

export default ValueEmotions;
