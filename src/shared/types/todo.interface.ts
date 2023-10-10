import { TaskTypes } from "shared/enums";

export interface ITodo {
  title: string;
  createdAt: string;
  user: string;
  description: string;
  completed: boolean;
  type: string;
  id: string;
}

export interface ITaskFormItems {
  id?: string;
  title: string;
  description: string;
  type: string;
  user: string;
}

export interface ITaskFormProps {
  isEdit: boolean;
  btnText: string;
  msg: string;
  method: <T>(params: ITaskFormItems) => Promise<T>;
  formName: string;
}

export interface IDoneParams {
  id: string;
  type: TaskTypes;
}
