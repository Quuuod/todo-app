import methods from "shared/api/api";
import { ITaskFormItems } from "shared/types";

export const editTask = <T>(params: ITaskFormItems): Promise<T> => {
  return methods.put({ url: `todos/${params.id}`, params });
};
