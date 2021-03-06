import './header.scss';

import React, { useState } from 'react';
import { Subject } from 'rxjs';
import { filter, pluck, merge } from 'rxjs/operators';

const ENTER_KEY_CODE = 13;

const Header = ({ addTodo$, updateFilter }) => {
  const [todoInputValue, updateTodoInputValue] = useState('');

  const handleInputChange$ = new Subject();
  handleInputChange$
    .pipe(
      pluck('target', 'value')
    )
    .subscribe(updateTodoInputValue);

  const handleInputChange = event => handleInputChange$.next(event);

  const addTodoButtonClick$ = new Subject();

  const addTodoButtonClick = () => addTodoButtonClick$.next();

  const handleInputKeyUp$ = new Subject();
  handleInputKeyUp$
    .pipe(
      filter(event => event.keyCode === ENTER_KEY_CODE),
      merge(addTodoButtonClick$),
      filter(() => todoInputValue.trim() !== '')
    )
    .subscribe(() => {
      addTodo$.next(todoInputValue);

      updateTodoInputValue('');
    });

  const handleInputKeyUp = event => handleInputKeyUp$.next(event);

  return (
    <div className='header'>
      <div className='header--row'>
        <input
          className='header--todo-input'
          onKeyUp={handleInputKeyUp}
          onChange={handleInputChange}
          value={todoInputValue}
          type='text' />

        <button
          className='header--add-button'
          onClick={addTodoButtonClick}>
          Add
        </button>
      </div>

      <div className='header--filters header--row'>
        <label>
          <input
            type='checkbox'
            onChange={() => updateFilter('archived')} />

          <span>Archived</span>
        </label>

        <label>
          <input
            type='checkbox'
            onChange={() => updateFilter('done')} />

          <span>Done</span>
        </label>
      </div>
    </div>
  );
}

export default Header;
