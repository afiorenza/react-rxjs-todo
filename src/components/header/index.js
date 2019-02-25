import './header.scss';

import React, { useState } from 'react';
import { fromEvent } from 'rxjs/';

const ENTER_KEY_CODE = 13;

const Header = ({ addTodo$ }) => {
  const [todoInputValue, updateTodoInputValue] = useState('');

  const handleInputChange = event => {
    updateTodoInputValue(event.target.value);
  }

  const handleInputKeyUp = event => {
    if (event.keyCode === ENTER_KEY_CODE) {
      addTodo();
    }
  }
  const addTodo = () => {
    addTodo$.next(todoInputValue);

    updateTodoInputValue('');
  }

  return (
    <div className='header'>
      <input
        className='header--todo-input'
        onKeyUp={handleInputKeyUp}
        onChange={handleInputChange}
        value={todoInputValue}
        type='text' />

      <button
        className='header--add-button'
        onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default Header;
