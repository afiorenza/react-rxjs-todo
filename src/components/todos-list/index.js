import './todos-list.scss';

import { TodoItem } from '../';
import React from 'react';
import { isEmpty } from 'lodash';

const TodosList = ({ todos, toggleTodo$, archiveTodo$ }) => {

  if (isEmpty(todos)) {
    return null;
  }

  return (
    <ul className='todos-list'>
      {
        todos
          .filter(({ archived }) => !archived)
          .map(todo =>
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo$={toggleTodo$}
              archiveTodo$={archiveTodo$} />
          )
      }
    </ul>
  );
}

export default TodosList;
