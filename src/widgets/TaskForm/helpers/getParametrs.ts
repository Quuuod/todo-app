import { ITaskFormItems } from "shared/types";

export const getParameters = ({ title, description, type }: ITaskFormItems) => {
  return {
    title,
    description,
    type,
    user: localStorage.user,
  };
};
