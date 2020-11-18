import { todosVar } from '../../cache';

const deleteTodo = (id) => {
  const allTodos = todosVar();

  todosVar([...allTodos.filter((todo) => todo.id !== id)]);
};

export default deleteTodo;
