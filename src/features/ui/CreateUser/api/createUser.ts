import methods from "shared/api/api";
import { IUser } from "shared/types";

export const useCreateUser = (params: IUser) => {
  return methods.post({ url: "users", params });
};
