import './home.scss';

import React, { useState, useEffect } from 'react';
import todosService, {
  addTodo$,
  toggleTodo$,
  archiveTodo$,
  filter$
} from '../../service/todos';
import {
  Header,
  TodosList
} from '../../components';

const Home = () => {
  const [todos, updateTodos] = useState([]);
  const [filters, updateFilters] = useState({});

  useEffect(() => {
    todosService
      .subscribe(nextTodos => updateTodos(nextTodos));

    filter$
      .subscribe(nextFilters => updateFilters(nextFilters));

    return () => {
      todosService.unsubscribe();
      filter$.unsubscribe();
    };
  }, [todosService, filter$]);

  const updateFilter = key => {
    filter$.next({
      ...filters,
      [key]: !filters[key]
    });
  };

  return (
    <div className='home'>
      <Header
        addTodo$={addTodo$}
        filters={filters}
        updateFilter={updateFilter} />

      <TodosList
        archiveTodo$={archiveTodo$}
        filters={filters}
        toggleTodo$={toggleTodo$}
        todos={todos} />
    </div>
  );
}

export default Home;
