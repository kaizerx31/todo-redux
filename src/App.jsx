import React from "react";

import Header from "./Component/Header";
import AddTodo from "./Component/AddTodo";
import TodoList from "./Component/TodoList";
import FilterButtons from "./Component/FilterButtons";

const App = () => {
  
  return (
    <div className="App">
          <div className="container">
            <Header />
          </div>

          <div className="todo-app">
            <AddTodo  />
            <FilterButtons />
            <TodoList  />
          </div>

    </div>
  );
}

export default App;
