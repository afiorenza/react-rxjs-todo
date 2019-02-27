import { BehaviorSubject, Subject } from 'rxjs';
import { uniqueId } from 'lodash';

const todos = new BehaviorSubject([]);

// Actions
export const addTodo$ = new Subject();
export const toggleTodo$ = new Subject();
export const archiveTodo$ = new Subject();

// Filters
export const filter$ = new BehaviorSubject({
  archived: false,
  done: false
});

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
  .subscribe(uid => update(uid, 'done'));

archiveTodo$
  .subscribe(uid => update(uid, 'archived'));

const update = (uid, key) => {
  const index = todos.value.findIndex(({ id }) => id === uid);

  todos.next([
    ...todos.value.slice(0, index),
    {
      ...todos.value[index],
      [key]: !todos.value[index][key]
    },
    ...todos.value.slice(index + 1)
  ]);
};

export default todos;
