export interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}

export let todoList: Todo[] = [];
let nextId = 1;

export function addTodo(task: string): void {
  const newTodo: Todo = {
    id: nextId,
    task: task,
    isCompleted: false,
  };
  todoList.push(newTodo);
}

export function removeTodo(id: number): void {
  todoList = todoList.filter((todo) => todo.id !== id);
}

export function updateTodo(id: number, task: string, isCompleted: boolean) {
  const targetIndex = todoList.findIndex((item) => item.id === id);
  if (targetIndex === -1) return;

  todoList[targetIndex] = {
    ...todoList[targetIndex],
    task: task,
    isCompleted: isCompleted,
  };
}
