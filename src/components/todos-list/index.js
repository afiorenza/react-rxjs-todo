import './todos-list.scss';

import { TodoItem } from '../';
import React from 'react';
import { isEmpty } from 'lodash';

const TodosList = ({ todos, toggleTodo$ }) => {

  if (isEmpty(todos)) {
    return null;
  }

  return (
    <ul className='todos-list'>
      {
        todos.map(todo =>
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo$={toggleTodo$} />
        )
      }
    </ul>
  );
}

export default TodosList;
