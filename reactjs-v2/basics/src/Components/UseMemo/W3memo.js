import { useMemo, useState } from "react";

const W3Memo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  // const calculation = expensiveCalculation(count);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index + "" + todo}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};
export default W3Memo;
