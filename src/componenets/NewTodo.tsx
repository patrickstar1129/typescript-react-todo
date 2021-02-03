import userEvent from "@testing-library/user-event";
import React, { useRef } from "react";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({onAddTodo}) => {

  const textInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText)
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef}/>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
