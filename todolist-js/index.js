import { addTodo, todoList } from "./todoList.js";

addTodo("掃除する");
addTodo("選択する");
addTodo({ task: "買い物", completed: true });

console.log(todoList);
