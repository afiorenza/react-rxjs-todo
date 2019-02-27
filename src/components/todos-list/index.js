import './todos-list.scss';

import { isEmpty } from 'lodash';
import { TodoItem } from '../';
import React from 'react';

const TodosList = ({ todos, filters, toggleTodo$, archiveTodo$ }) => {

  if (isEmpty(todos)) {
    return null;
  }

  return (
    <ul className='todos-list'>
      {
        todos
          .filter(({ archived }) => archived === filters.archived)
          .filter(({ done }) => done === filters.done)
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
