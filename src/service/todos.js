import { BehaviorSubject, Subject } from 'rxjs';

const todos = new BehaviorSubject([]);

// Actions
const addTodo = new Subject();
const toggleTodo = new Subject();
const removeTodo = new Subject();

export default todos;
