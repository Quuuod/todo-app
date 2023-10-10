import methods from "shared/api/api";

export const fetchTodos = () => {
  return methods.get({ url: "todos" });
};
