import { selector } from "recoil";
import { todosState } from "../atom/todosList";
import { filterInput } from "../atom/filterInput";

export const listFilter = selector({
  key: "listFilter",
  get: ({ get }) => {
    const filter = get(filterInput);
    const todos = get(todosState);
    return todos.filter((todo) => todo.title.includes(filter));
  },
});
