import { TarefaProps } from "../../types/Tarefa";

import * as C from "./styles";

type Props = {
  tarefa: TarefaProps;
  onChange: (id: number, done: boolean) => void;
};

const ListItem = ({ tarefa, onChange }: Props) => {
  return (
    <C.Container done={tarefa.done}>
      <input
        type="checkbox"
        checked={tarefa.done}
        onChange={(e) => onChange(tarefa.id, e.target.checked)}
      />
      <label>{tarefa.name}</label>
      {console.log(tarefa.done)}
    </C.Container>
  );
};

export default ListItem;
