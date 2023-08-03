import { TarefaProps } from "./types/Tarefa";

import { useState } from "react";

import * as C from "./App.styles";

const App = () => {
  const [list, setList] = useState<TarefaProps[]>([
    { id: 1, name: "Fazer primeira tarefa", done: false },
    { id: 2, name: "Fazer segunda tarefa", done: false },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        {list.map((tarefa, index) => (
          <div key={index}>
            <p>{tarefa.name}</p>
          </div>
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
