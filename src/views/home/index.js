import './home.scss';

import React, { useState, useEffect } from 'react';
import todosService, {
  addTodo$,
  toggleTodo$
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
    <div className='home'>
      <Header
        addTodo$={addTodo$} />

      <TodosList
        toggleTodo$={toggleTodo$}
        todos={todos} />
    </div>
  );
}

export default Home;
