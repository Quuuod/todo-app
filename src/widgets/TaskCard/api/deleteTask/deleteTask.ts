import methods from "shared/api/api";

export const useDeleteTask = (id: string) => {
  return methods.deleteMethod({ url: `todos/${id}` });
};
