import React, { useState, useEffect } from 'react';
import todosService from '../../service/todos';
import {
  Header,
  TodosList
} from '../../components';

const Home = () => {
  const [todos, updateTodos] = useState([]);

  useEffect(() => {
    todosService.subscribe(nextTodos => {
      if (nextTodos.length) {
        updateTodos(nextTodos);
      }
    });

    return () => {
      todosService.unsubscribe();
    };
  });

  return (
    <div>
      <Header />

      <TodosList
        todos={todos} />
    </div>
  );
}

export default Home;
