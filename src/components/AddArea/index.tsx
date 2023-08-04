import { useState, KeyboardEvent } from "react";

import { IoMdAdd } from "react-icons/io";

import * as C from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  return (
    <C.Container>
      <IoMdAdd />
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};

export default AddArea;
