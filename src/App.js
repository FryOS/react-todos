import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

const App = (props) => {
  const date1 = new Date(2021, 7, 19, 14, 5);
  const date2 = new Date(2021, 7, 19, 15, 23);

  const [isDone, setIsDone] = useState(false);
  // useEffect(() => {
  //   console.log(isDone);
  // }, [isDone]);

  const initianteData = [
    {
      title: "Изучить реакт",
      desc: "Да поскорее",
      image: "",
      done: true,
      createAt: date1.toLocaleDateString(),
      key: date1.getTime(),
    },
    {
      title: "Изучить редакс",
      desc: "Да поскорее",
      image: "",
      done: false,
      createAt: date1.toLocaleDateString(),
      key: date1.getTime(),
    },
  ];

  const setDone = (key) => {
    const deed = initianteData.find((current) => current.key === key);
    console.log("deed", deed);
    if (deed) {
      console.log("deed", deed);
      // deed.done = true;
      setIsDone((current) => !current);
    }
  };

  return (
    <div className="App">
      <nav className="navbar is-light">
        <div className="navbar-brand">
          <span className="navbar-item is-uppercase">Todos</span>
        </div>
      </nav>
      <main className="context px-6 mt-6">
        <TodoList list={initianteData} setDone={setDone} />
      </main>
    </div>
  );
};

export default App;
