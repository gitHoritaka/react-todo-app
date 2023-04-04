import { useState } from "react";

const TodoList = () => {
  const initstate = [
    { task_name: "task1", isCompleted: false },
    { task_name: "task2", isCompleted: false },
    { task_name: "task3", isCompleted: false },
  ];
  //state = todosとなり、更新関数はsetTodosとなる
  const [todos, setTodos] = useState(initstate);
  const [task, setTask] = useState("");

  const handle_new_task = (event) => {
    //console.log(event.target.value);
    setTask(event.target.value);
  };
  const handle_submit = (event) => {
    event.preventDefault();
    if (task === "") return;
    console.log(task);
    //spread operatorで展開
    console.log(...todos);
    //todosのsetfunctionを定義、todos -> [今までのtodos,{task,isCompleted}]
    setTodos((todos) => [...todos, { task_name: task, isCompleted: false }]);
    setTask("");
  };
  const handle_update_task = (index) => {
    let newTodos = todos.map((todo, todo_index) => {
      if (todo_index === index) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const handle_remove_task = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1); //react splice ではconstを使う！！
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <form onSubmit={handle_submit}>
        AddTask :{" "}
        <input
          value={task}
          placeholder="add new task"
          onChange={handle_new_task}
        />
        <button type="submit"> Add</button>
      </form>
      <ul>
        {/* https://ja.reactjs.org/docs/lists-and-keys.html*/}
        {todos.map((todo, index) => (
          <li
            key={index}
            style={
              todo.isCompleted === true
                ? { textDecorationLine: "line-through" } //reactでの条件分岐
                : {}
            }
          >
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handle_update_task(index)}
            />
            {todo.task_name}
            {/* https://maaengineerhouse.com/archives/1246*/}
            <span
              onClick={() => handle_remove_task(index)}
              style={{ cursor: "pointer" }}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
