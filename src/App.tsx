import { useState } from "react";

import { TarefaProps } from "./types/Tarefa";

import * as C from "./App.styles";

import ListItem from "./components/ListItem";
import AddArea from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<TarefaProps[]>([
    { id: 1, name: "Fazer primeira tarefa", done: false },
    { id: 2, name: "Fazer segunda tarefa", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    const newList = [...list];

    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });

    setList(newList);
  };

  const handleTaskChange = (id: number, done: boolean) => {
    const newList = [...list];
    for (const i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
    console.log(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((tarefa, index) => (
          <ListItem key={index} tarefa={tarefa} onChange={handleTaskChange} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
