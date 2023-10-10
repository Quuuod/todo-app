import methods from "shared/api/api";
import { IUser } from "shared/types";

export const fetchUsers = (): Promise<IUser[]> => {
  return methods.get({ url: "users" });
};
