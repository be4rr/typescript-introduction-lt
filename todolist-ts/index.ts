import { addTodo, todoList, updateTodo } from "./todoList";

console.log(todoList);

addTodo("掃除する");

console.log(todoList);

addTodo("洗濯する");
updateTodo(1, "掃除する", true);

console.log(todoList);
