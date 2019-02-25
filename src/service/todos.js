import { BehaviorSubject, Subject } from 'rxjs';
import { uniqueId } from 'lodash';

const todos = new BehaviorSubject([]);

// Actions
export const addTodo$ = new Subject();
export const toggleTodo$ = new Subject();
export const removeTodo$ = new Subject();

addTodo$
  .subscribe(text =>
    todos.next([
      ...todos.value,
      {
        id: uniqueId(),
        archive: false,
        visible: false,
        text
      }
    ])
  );

export default todos;
