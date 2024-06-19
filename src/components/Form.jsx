// import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { descriptionState, titleState } from "../store/atom/inputBoxes";
import { todosState } from "../store/atom/todosList";

export default function Form() {
  const setTitle = useSetRecoilState(titleState);
  const setDescription = useSetRecoilState(descriptionState);
  const setTodos = useSetRecoilState(todosState);
  const title = useRecoilValue(titleState);
  const description = useRecoilValue(descriptionState);

  const handleSubmit = () => {
    setTodos((oldTodos) => [...oldTodos, { title, description }]);
    setTitle(() => "");
    setDescription(() => "");
  };

  const style = { padding: "10px", margin: "5px" };

  return (
    <div className="form">
      <input
        style={style}
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <br />
      <input
        style={style}
        type="text"
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      />
      <br />
      <button style={style} onClick={handleSubmit}>
        Add To Do
      </button>
    </div>
  );
}
