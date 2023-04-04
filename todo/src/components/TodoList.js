import { useState } from "react";

const TodoList = () => {
  const initstate = [
    { task: "task1", isCompleted: false },
    { task: "task2", isCompleted: false },
    { taks: "task3", isCompleted: false },
  ];
  //state = todosとなり、更新関数はsetTodosとなる
  const [todos, setTodos] = useState(initstate);

  return (
    <div>
      <h1>TodoList</h1>
    </div>
  );
};
export default TodoList;
