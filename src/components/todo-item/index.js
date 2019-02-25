import './todo-item.scss';

import classNames from 'classnames';
import React from 'react';

const TodoItem = ({ text, done, id, toggleTodo$, archiveTodo$ }) => {

  const handleCheckboxClick = uid => toggleTodo$.next(uid);

  const handleArchiveButtonClick = uid => archiveTodo$.next(uid);

  return (
    <li
      className={classNames('todo-item', {
        'todo-item_done': done
      })}
      key={id}>
      <label
        className='todo-item--todo-label'>
        <input
          className='todo-item--toggle-checkbox'
          checked={done}
          onChange={handleCheckboxClick.bind(this, id)}
          type='checkbox' />

        <span
          className='todo-item--text'>
          {text}
        </span>
      </label>

      <button
        className='todo-item--archive-button'
        onClick={handleArchiveButtonClick.bind(this, id)}>
        <i className='fas fa-archive' />
      </button>
    </li>
  );
}

export default TodoItem;
