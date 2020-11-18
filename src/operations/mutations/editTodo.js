import { todosVar } from '../../cache';

const editTodo = ({ id, text }) => {
  const allTodos = todosVar();

  todosVar([...allTodos.map((todo) => (todo.id === id ? { ...todo, text } : todo))]);
};

export default editTodo;
