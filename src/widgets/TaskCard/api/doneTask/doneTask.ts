import methods from "shared/api/api";
import { IDoneParams } from "shared/types";

export const useDoneTask = <T>(params: IDoneParams): Promise<T> => {
  return methods.put({ url: `todos/${params.id}`, params });
};
