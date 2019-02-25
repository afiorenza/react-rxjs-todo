import React from 'react';

const TodosList = ({ todos }) => {
  return (
    <div>
      {todos.map(({ id, text }) =>
        <li key={id}>
          {text}
        </li>
      )}
    </div>
  );
}

export default TodosList;
