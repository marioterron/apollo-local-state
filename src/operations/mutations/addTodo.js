import { todosVar } from '../../cache';

const addTodo = (text) => {
  const allTodos = todosVar();

  todosVar([...allTodos, { id: new Date().getTime().toString(), text }]);
};

export default addTodo;
