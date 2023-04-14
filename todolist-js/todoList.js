export let todoList = [];
let nextId = 1;

export function addTodo(task) {
  const newTodo = {
    id: nextId,
    task: task,
    isCompleted: false,
  };
  todoList.push(newTodo);
  nextId++;
}

export function removeTodo(id) {
  todoList = todoList.filter((todo) => todo.id !== id);
}

export function updateTodo(id, task, isCompleted) {
  const targetIndex = todoList.findIndex((todo) => todo.id === id);
  if (targetIndex === -1) return;

  todoList[targetIndex] = {
    ...todoList[targetIndex],
    task: task,
    isCompleted: isCompleted,
  };
}
