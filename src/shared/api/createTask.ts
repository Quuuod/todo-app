import methods from "shared/api/api";
import { ITaskFormItems } from "shared/types";

export const createTask = <T>(params: ITaskFormItems): Promise<T> => {
  return methods.post({ url: "todos", params });
};
