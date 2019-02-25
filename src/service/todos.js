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
        archived: false,
        done: false,
        text
      }
    ])
  );

toggleTodo$
  .subscribe(uid => {
    const index = todos.value.findIndex(({ id }) => id === uid);

    todos.next([
      ...todos.value.slice(0, index),
      {
        ...todos.value[index],
        done: !todos.value[index].done
      },
      ...todos.value.slice(index + 1)
    ]);
  });

export default todos;
