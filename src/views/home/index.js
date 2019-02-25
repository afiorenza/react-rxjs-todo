import React, { useState, useEffect } from 'react';
import todosService, {
  addTodo$
} from '../../service/todos';
import {
  Header,
  TodosList
} from '../../components';

const Home = () => {
  const [todos, updateTodos] = useState([]);

  useEffect(() => {
    todosService.subscribe(nextTodos => {
      updateTodos(nextTodos);
    });

    return () => {
      todosService.unsubscribe();
    };
  }, [todosService]);

  return (
    <div>
      <Header
        addTodo$={addTodo$} />

      <TodosList
        todos={todos} />
    </div>
  );
}

export default Home;
